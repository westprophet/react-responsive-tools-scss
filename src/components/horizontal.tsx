/**
 * Created by westp on 15.05.2023
 */

import React from "react";

import { TBreakpoint } from '../interfaces/TBreakpoint';
import { useBreakpointDF, useBreakpointMF } from '../hooks/useBreakpoint.js';

interface Props {
  children: React.ReactNode;
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

