# react-responsive-tools

This project provides tools and configurations to simplify writing responsive code for both vertical and horizontal layouts.

The package is based on the npm package [react-responsive](https://www.npmjs.com/package/react-responsive) for use in React.js. It assumes the use of scss for compilation.

In the future, the dependency on scss will be removed.

## Installation

To install the project, run the following command:

```sh
# Using Yarn
yarn add react-responsive-tools

# Using npm
npm install react-responsive-tools
```

To initialize the tools, you need to import the file from the library:

```scss
@import "react-responsive-tools/default"; // init breakpoints
```

This line imports the necessary CSS variables (breakpoints) required for the tools to work.

The package also includes a file to reset browser styles:

```scss
@import "react-responsive-tools/reset"; // reset browsers styles
```

### Default Horizontal and Vertical Breakpoints:

--vbp - vertical breakpoints

--bp - horizontal breakpoints

```scss
:root {
  --bp-xs: 320px;
  --bp-sm: 576px;
  --bp-md: 768px;
  --bp-lg: 992px;
  --bp-lt: 1024px;
  --bp-ltm: 1120px;
  --bp-ltl: 1440px;
  --bp-xl: 1920px;
  --bp-xxl: 2560px;
  --bp-qxl: 3840px;

  --vbp-xs: 600px;
  --vbp-sm: 800px;
  --vbp-md: 1000px;
  --vbp-lg: 1200px;
  --vbp-xl: 1600px;
  --vbp-xxl: 1920px;
}
```

Breakpoints override example:

```scss
@import "react-responsive-tools/default"; // init breakpoints

:root {
  //--bp-xxl: 2560px;
  --bp-xxl: 2222px; // new point
}
```

## Using Mixins

Mixins are packaged with an `include` decorator that provides descriptive instructions for breakpoints.

Example:

```scss
@import "react-responsive-tools";

div.supercool {
  @include m-xs { // for mobile to first xs breakpoint
    color: red;
    font-size: 10px;
    @include vm-sm {
      font-size: 11px;
    }
    @include vm-md {
      font-size: 14px;
    }
  }
}

span.someclass {
  @include d-xxl { // for desktop to first xxl breakpoint
    color: white;
    // vertical points in horizontal 
    @include vd-xs {
      font-size: 10px;
    }
    @include vd-md {
      font-size: 12px;
    }
  }
}

aside.sidebar {
  // custom breakpoint
  @include mob-first(xs) {
    ...
  }
  // desktop to first
  @include desk-first(md) {
    ...
  }

  // vertical custom bp
  @include v-desk-first(md) {

  }
  // mob first
  @include v-mob-first(md) {

  }
}
```

## Hooks

### Hook Implementations

#### Hook `useBreakpoint`:

```typescript
import { useMediaQuery } from 'react-responsive';
import breakpoints from '../../scss/_horizontal.export.scss';
import { TBreakpoint } from '../../interfaces/TBreakpoint';
import { TAdaptiveVariant } from '../../interfaces/TAdaptiveVariant';
import useVariant from '../useVariant';

export default function useBreakpoint(b: TBreakpoint, variant: TAdaptiveVariant = 'MtF') {
    const p = breakpoints[b];
    const v = useVariant(variant);
    return useMediaQuery({ query: `(${v}-width: ${p}px)` });
}

export function useBreakpointMF(b: TBreakpoint) {
    return useBreakpoint(b, 'MtF');
}

export function useBreakpointDF(b: TBreakpoint) {
    return useBreakpoint(b, 'DtF');
}
```

### Usage Examples

#### Hook `useBreakpoint`:

```typescript
import useBreakpoint from './hooks/useBreakpoint';

const MyComponent = () => {
    const isMedium = useBreakpoint('md');

    return (
        <div>
            {isMedium && <p>Current breakpoint: Medium (md)</p>}
        </div>
    );
};
```

#### Hook `useBreakpointMF`:

```typescript
import { useBreakpointMF } from './hooks/useBreakpoint';

const MyComponent = () => {
    const isMedium = useBreakpointMF('md');

    return (
        <div>
            {isMedium && <p>Current breakpoint: Medium (md) for Mobile First</p>}
        </div>
    );
};
```

#### Hook `useBreakpointDF`:

```typescript
import { useBreakpointDF } from './hooks/useBreakpoint';

const MyComponent = () => {
    const isLarge = useBreakpointDF('lg');

    return (
        <div>
            {isLarge && <p>Current breakpoint: Large (lg) for Desktop First</p>}
        </div>
    );
};
```

## Components

The project includes utility components to display content only at certain breakpoints.

### Usage Examples

#### Component `ForMF`:

```typescript
import { ForMF } from './components/ForMF';

const MyComponent = () => (
    <ForMF bp='md'>
        <p>This content is visible only at the Medium (md) breakpoint</p>
    </ForMF>
);

const CustomSizeComponent = () => (
    <ForMF bp={850}>
        <p>This content is visible only at the Custom (850px) breakpoint</p>
    </ForMF>
);
```

#### Component `ForDF`:

```typescript
import { ForDF } from './components/ForDF';

const MyComponent = () => (
    <ForDF bp='lg'>
        <p>This content is visible only at the Large (lg) breakpoint</p>
    </ForDF>
);

const CustomSizeComponent = () => (
    <ForDF bp={1200}>
        <p>This content is visible only at the Custom (1200px) breakpoint</p>
    </ForDF>
);
```

## Project Structure

The project includes the `scss` directory with the following files:

- `_data.scss`: Contains breakpoints.
- `_horizontal.scss` and `_vertical.scss`: Provide mixins for horizontal and vertical layouts, respectively.
- `_screen.scss`: Intermediate file for export to JS.

The `hooks` directory includes:

- `useBreakpoint.ts`: Implements the `useBreakpoint` hook to determine the current breakpoint.
- `useVBreakpoint.ts`: Implements the `useVBreakpoint` hook to determine the current vertical breakpoint.

The `components` directory includes:

- `ForMF.ts`: A utility component that takes a breakpoint size and children as props. It uses the `useBreakpointMF` hook to determine if the screen size matches the given breakpoint. If it does, it renders the children; otherwise, it renders `null`.
- `ForDF.ts`: Similar to `ForMF`, but uses the `useBreakpointDF` hook.
