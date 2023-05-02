import TBreakpointSize from './TBreakpointSize';

export default TBreakpoints;

type TBreakpoints<T> = {
  [key in TBreakpointSize]: T;
};
