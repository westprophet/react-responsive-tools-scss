// @ts-ignore
import { HORIZONTAL_BREAKPOINTS, VERTICAL_BREAKPOINTS } from '../breakpoints.config';
import { TBreakpoint, TVerticalBreakpoint } from '../interfaces/TBreakpoint';

export default function getBreakpoint(b: TBreakpoint): string {
    return HORIZONTAL_BREAKPOINTS[b];
}

export function getVBreakpoint(b: TVerticalBreakpoint): string {
    return VERTICAL_BREAKPOINTS[b];
}
