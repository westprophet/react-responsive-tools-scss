import { useMediaQuery } from 'react-responsive';

import { TVerticalBreakpoint } from '../interfaces/TBreakpoint';
import { TAdaptiveVariant } from '../interfaces/TAdaptiveVariant';
import useVariant from './useVariant.js';
import  {getVBreakpoint} from "../functions/getBreakpoint.js";

export function useVBreakpoint(b: TVerticalBreakpoint | number, variant: TAdaptiveVariant = 'MtF') {
  const _bp = typeof b === 'number' ? b + 'px' :  getVBreakpoint(b);
  const v = useVariant(variant);
  return useMediaQuery({ query: `(${v}-height: ${_bp})` });
}

