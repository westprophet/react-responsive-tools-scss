import { useMediaQuery } from 'react-responsive';

import breakpoints from '../../scss/_vertical.export.scss';
import { TVerticalBreakpoints } from '../../interfaces/TBreakpoints';
import { TAdaptiveVariant } from '../../interfaces/TAdaptiveVariant';
import useVariant from '../useVariant';

export default function useVBreakpoints(variant: TAdaptiveVariant = 'MobileToFirst'): TVerticalBreakpoints<boolean> {
  const v = useVariant(variant);
  return {
    xs: useMediaQuery({ query: `(${v}-height: ${breakpoints.xs}px)` }),
    sm: useMediaQuery({ query: `(${v}-height: ${breakpoints.sm}px)` }),
    md: useMediaQuery({ query: `(${v}-height: ${breakpoints.md}px)` }),
    lg: useMediaQuery({ query: `(${v}-height: ${breakpoints.lg}px)` }),
    xl: useMediaQuery({ query: `(${v}-height: ${breakpoints.xl})px` }),
    xxl: useMediaQuery({ query: `(${v}-height: ${breakpoints.xxl})px` }),
  };
}

export function useVBreakpointsMF(): TVerticalBreakpoints<boolean> {
  return useVBreakpoints('MobileToFirst');
}

export function useVBreakpointsDF(): TVerticalBreakpoints<boolean> {
  return useVBreakpoints('DesktopToFirst');
}
