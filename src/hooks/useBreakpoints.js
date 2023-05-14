import { useMediaQuery } from 'react-responsive';
import b from '../scss/_export.module.scss';
export default function useBreakpoints() {
    return {
        xs: useMediaQuery({ query: `(min-width: ${b.xs}px)` }),
        sm: useMediaQuery({ query: `(min-width: ${b.sm}px)` }),
        md: useMediaQuery({ query: `(min-width: ${b.md}px)` }),
        lg: useMediaQuery({ query: `(min-width: ${b.lg}px)` }),
        xl: useMediaQuery({ query: `(min-width: ${b.xl})px` }),
        xxl: useMediaQuery({ query: `(min-width: ${b.xxl})px` }),
        xxxl: useMediaQuery({ query: `(min-width: ${b.xxxl})px` }),
    };
}
//# sourceMappingURL=useBreakpoints.js.map