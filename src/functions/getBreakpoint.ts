
import { HORIZONTAL_BREAKPOINTS, VERTICAL_BREAKPOINTS } from '../breakpoints.config.js';
import { TBreakpoint, TVerticalBreakpoint } from '../interfaces/TBreakpoint.js';

export function getBreakpoint(b: TBreakpoint): string {
    return HORIZONTAL_BREAKPOINTS[b];
}

export function getVBreakpoint(b: TVerticalBreakpoint): string {
    return VERTICAL_BREAKPOINTS[b];
}
