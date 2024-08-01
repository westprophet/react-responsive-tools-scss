import { useMediaQuery } from 'react-responsive';

import breakpoints from '../../scss/_horizontal.export.scss';
import { TBreakpoints } from '../../interfaces/TBreakpoints';
import { TAdaptiveVariant } from '../../interfaces/TAdaptiveVariant';
import useVariant from '../useVariant';

export default function useBreakpoints(variant: TAdaptiveVariant = 'MobileToFirst'): TBreakpoints<boolean> {
  const v = useVariant(variant);
  return {
    xs: useMediaQuery({ query: `(${v}-width: ${breakpoints.xs}px)` }),
    sm: useMediaQuery({ query: `(${v}-width: ${breakpoints.sm}px)` }),
    md: useMediaQuery({ query: `(${v}-width: ${breakpoints.md}px)` }),
    lg: useMediaQuery({ query: `(${v}-width: ${breakpoints.lg}px)` }),
    lt: useMediaQuery({ query: `(${v}-width: ${breakpoints.lt})px` }),
    ltm: useMediaQuery({ query: `(${v}-width: ${breakpoints.ltm})px` }),
    ltl: useMediaQuery({ query: `(${v}-width: ${breakpoints.ltl})px` }),
    xl: useMediaQuery({ query: `(${v}-width: ${breakpoints.xl})px` }),
    xxl: useMediaQuery({ query: `(${v}-width: ${breakpoints.xxl})px` }),
    qxl: useMediaQuery({ query: `(${v}-width: ${breakpoints.qxl})px` }),
  };
}

export function useBreakpointsMF(): TBreakpoints<boolean> {
  return useBreakpoints('MobileToFirst');
}

export function useBreakpointsDF(): TBreakpoints<boolean> {
  return useBreakpoints('DesktopToFirst');
}
