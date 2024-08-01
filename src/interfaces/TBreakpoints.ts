import { TBreakpoint, TVerticalBreakpoint } from './TBreakpoint';

export type TBreakpoints<T> = {
  [key in TBreakpoint]: T;
};

export type TVerticalBreakpoints<T> = {
  [key in TVerticalBreakpoint]: T;
};
