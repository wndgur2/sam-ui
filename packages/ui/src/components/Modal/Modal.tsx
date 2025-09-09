import React from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

function getFocusable(container: HTMLElement): HTMLElement[] {
  const sel = [
    'a[href]','button:not([disabled])','input:not([disabled])','select:not([disabled])','textarea:not([disabled])','[tabindex]:not([tabindex="-1"])'
  ].join(',');
  return Array.from(container.querySelectorAll<HTMLElement>(sel)).filter((el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'));
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children?: React.ReactNode;
  ariaLabelledBy?: string;
}

export function Modal({ isOpen, onClose, title, children, ariaLabelledBy }: ModalProps) {
  const overlayRef = React.useRef<HTMLDivElement | null>(null);
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const lastActive = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (isOpen) {
      lastActive.current = (document.activeElement as HTMLElement) ?? null;
      const content = contentRef.current!;
      const focusables = getFocusable(content);
      (focusables[0] ?? content).focus();
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") { e.preventDefault(); onClose(); }
        if (e.key === "Tab") {
          const els = getFocusable(content);
          if (els.length === 0) return;
          const idx = els.indexOf(document.activeElement as HTMLElement);
          const dir = e.shiftKey ? -1 : 1;
          const next = (idx + dir + els.length) % els.length;
          e.preventDefault();
          els[next].focus();
        }
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    } else if (lastActive.current) {
      lastActive.current.focus();
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const overlay = (
    <div
      className={s.overlay}
      ref={overlayRef}
      onMouseDown={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div role="dialog" aria-modal="true" aria-labelledby={ariaLabelledBy} className={s.content} ref={contentRef} tabIndex={-1}>
        {title && <div className={s.header} id={ariaLabelledBy}>{title}</div>}
        <div className={s.body}>{children}</div>
      </div>
    </div>
  );

  return createPortal(overlay, document.body);
}
