/**
 * Created by westp on 15.05.2023
 */

import { TBreakpoint } from '../interfaces/TBreakpoint';
import { useBreakpointDF, useBreakpointMF } from '../hooks/useBreakpoint';

interface Props {
  children: any;
}

interface ForComponentProps extends Props {
  p: TBreakpoint | number;
}

export function For({children, p}: ForComponentProps) {
  const is = useBreakpointMF(p);
  if (is) return children;
  return null;
}


export function Before({children ,p}: ForComponentProps) {
  const is = useBreakpointDF(p);
  if (is) return children;
  return null;
}

