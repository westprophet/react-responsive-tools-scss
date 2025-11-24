import { useMediaQuery } from 'react-responsive';

import { TVerticalBreakpoint } from '../interfaces/TBreakpoint';
import { TAdaptiveVariant } from '../interfaces/TAdaptiveVariant';
import {VERTICAL_BREAKPOINTS, PREFERRED_VARIANT} from "../breakpoints.config";

export function useVBreakpoint(b: TVerticalBreakpoint | number, variant: TAdaptiveVariant = 'MtF') {
    let _bp: number = typeof b === 'number' ? b : VERTICAL_BREAKPOINTS[b];
    const v = variant === 'MtF' ? 'min': 'max';

    if (variant !== PREFERRED_VARIANT)
        _bp = _bp - 1;
  return useMediaQuery({ query: `(${v}-height: ${_bp}px)` });
}

