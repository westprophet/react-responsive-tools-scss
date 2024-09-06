import { useMediaQuery } from 'react-responsive';

import breakpoints from '../../scss/_vertical.export.scss';
import { TVerticalBreakpoint } from '../../interfaces/TBreakpoint';
import { TAdaptiveVariant } from '../../interfaces/TAdaptiveVariant';
import useVariant from '../useVariant';

export default function useVBreakpoint(b: TVerticalBreakpoint | number, variant: TAdaptiveVariant = 'MtF') {
  const p = typeof b === 'number' ? b :  breakpoints[b];
  const v = useVariant(variant);
  return useMediaQuery({ query: `(${v}-height: ${p}px)` });
}

export function useVBreakpointMF(b: TVerticalBreakpoint | number) {
  return useVBreakpoint(b, 'MtF');
}

export function useVBreakpointDF(b: TVerticalBreakpoint | number) {
  return useVBreakpoint(b, 'MtF');
}
