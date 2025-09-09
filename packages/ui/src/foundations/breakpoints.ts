export const breakpoints = { base: 0, sm: 640, md: 768, lg: 1024, xl: 1280 } as const;
export type Breakpoint = keyof typeof breakpoints;

