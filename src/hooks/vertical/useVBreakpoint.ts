import { useMediaQuery } from 'react-responsive';

import breakpoints from '../../scss/_vertical.export.scss';
import { TVerticalBreakpoint } from '../../interfaces/TBreakpoint';
import { TAdaptiveVariant } from '../../interfaces/TAdaptiveVariant';
import useVariant from '../useVariant';

export default function useVBreakpoint(b: TVerticalBreakpoint, variant: TAdaptiveVariant = 'MobileToFirst') {
  const p = breakpoints[b];
  const v = useVariant(variant);
  return useMediaQuery({ query: `(${v}-height: ${p}px)` });
}

export function useVBreakpointMF(b: TVerticalBreakpoint) {
  return useVBreakpoint(b, 'MobileToFirst');
}

export function useVBreakpointDF(b: TVerticalBreakpoint) {
  return useVBreakpoint(b, 'MobileToFirst');
}
