# react-adaptable-scss: Adaptive SCSS Tools

This project provides tools and configurations to simplify writing adaptive code for both vertical and horizontal layouts.

## Project Structure

The project includes the `scss` directory with the following files:
- `_data.scss`: Contains breakpoints.
- `_horizontal.scss` and `_vertical.scss`: Provide mixins for horizontal and vertical layouts, respectively.
- `_screen.scss`: An intermediate file for JS export.
- `_export.module.scss`: A file meant for explicit JS export.

The `hooks` directory includes:
- `useBreakpoint.ts`: Implements the `useBreakpoint` hook for identifying the current breakpoint.
- `useBreakpoints.ts`: Implements the `useBreakpoints` hook for retrieving the list of currently active breakpoints.
- `useVBreakpoint.ts`: Implements the `useVBreakpoint` hook for identifying the current vertical breakpoint.
- `useVBreakpoints.ts`: Implements the `useVBreakpoints` hook for retrieving the list of currently active vertical breakpoints.

The `components` directory includes:
- `ForMF.ts`: A utility component that takes breakpoint size and children as props. It uses the `useBreakpointMF` hook to determine if the display size matches the given breakpoint. If so, it renders the children; otherwise, it renders `null`.
- `ForDF.ts`: Similar to `ForMF`, but uses the `useBreakpointDF` hook.

## Breakpoints

We use a set of fixed variables for different screen sizes: `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, and `xxxl`.

## Mixins Application

Mixins are bundled with the `include` decorator, providing descriptive statements for breakpoints based on them.

## Hooks

The project incorporates the following hooks based on `react-responsive` for use in React.js:# react-adaptable-scss: Adaptive SCSS Tools

This project provides tools and configurations to simplify writing adaptive code for both vertical and horizontal layouts.

## Project Structure

The project includes the `scss` directory with the following files:
- `_data.scss`: Contains breakpoints.
- `_horizontal.scss` and `_vertical.scss`: Provide mixins for horizontal and vertical layouts, respectively.
- `_screen.scss`: An intermediate file for JS export.
- `_export.module.scss`: A file meant for explicit JS export.

The `hooks` directory includes:
- `useBreakpoint.ts`: Implements the `useBreakpoint` hook for identifying the current breakpoint.
- `useBreakpoints.ts`: Implements the `useBreakpoints` hook for retrieving the list of currently active breakpoints.
- `useVBreakpoint.ts`: Implements the `useVBreakpoint` hook for identifying the current vertical breakpoint.
- `useVBreakpoints.ts`: Implements the `useVBreakpoints` hook for retrieving the list of currently active vertical breakpoints.

The `components` directory includes:
- `ForMF.ts`: A utility component that takes breakpoint size and children as props. It uses the `useBreakpointMF` hook to determine if the display size matches the given breakpoint. If so, it renders the children; otherwise, it renders `null`.
- `ForDF.ts`: Similar to `ForMF`, but uses the `useBreakpointDF` hook.

## Breakpoints

We use a set of fixed variables for different screen sizes.

### Horizontal Breakpoints (default):

```ecmascript 6
const horizontalBreakpoints = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  lt: '1024px',
  ltm: '1200px',
  ltl: '1440px',
  xl: '1920px',
  xxl: '2560px',
  qxl: '3840px',
};
```

### Vertical Breakpoints (default):

```ecmascript 6
const verticalBreakpoints = {
  xs: '600px',
  sm: '800px',
  md: '1000px',
  lg: '1200px',
  xl: '1600px',
  xxl: '1601px',
};
```

## Mixins Application

Mixins are bundled with the `include` decorator, providing descriptive statements for breakpoints based on them.

## Hooks

The project incorporates the following hooks based on `react-responsive` for use in React.js:
- `useBreakpoints`: Retrieve current screen breakpoints.
- `useBreakpoint`: Retrieve the current breakpoint.

## Components

The project includes utility components to display content only at certain breakpoints.

## Future Growth Perspectives

We aim to add the following functionalities:
- Redefining SCSS variables.
- Configuring breakpoint names.
- Separate breakpoint configurations for vertical layout.
- Integration with the external library `react-responsive# react-adaptable-scss: Adaptive SCSS Tools

This project provides tools and configurations to simplify writing adaptive code for both vertical and horizontal layouts.

## Project Structure

The project includes the `scss` directory with the following files:
- `_data.scss`: Contains breakpoints.
- `_horizontal.scss` and `_vertical.scss`: Provide mixins for horizontal and vertical layouts, respectively.
- `_screen.scss`: An intermediate file for JS export.
- `_export.module.scss`: A file meant for explicit JS export.

The `hooks` directory includes:
- `useBreakpoint.ts`: Implements the `useBreakpoint` hook for identifying the current breakpoint.
- `useBreakpoints.ts`: Implements the `useBreakpoints` hook for retrieving the list of currently active breakpoints.
- `useVBreakpoint.ts`: Implements the `useVBreakpoint` hook for identifying the current vertical breakpoint.
- `useVBreakpoints.ts`: Implements the `useVBreakpoints` hook for retrieving the list of currently active vertical breakpoints.

The `components` directory includes:
- `ForMF.ts`: A utility component that takes breakpoint size and children as props. It uses the `useBreakpointMF` hook to determine if the display size matches the given breakpoint. If so, it renders the children; otherwise, it renders `null`.
- `ForDF.ts`: Similar to `ForMF`, but uses the `useBreakpointDF` hook.

## Breakpoints

We use a set of fixed variables for different screen sizes.

### Horizontal Breakpoints (default):

```typescript
const horizontalBreakpoints = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  lt: '1024px',
  ltm: '1200px',
  ltl: '1440px',
  xl: '1920px',
  xxl: '2560px',
  qxl: '3840px',
};
```

### Vertical Breakpoints (default):

```typescript
const verticalBreakpoints = {
  xs: '600px',
  sm: '800px',
  md: '1000px',
  lg: '1200px',
  xl: '1600px',
  xxl: '1601px',
};
```

## Mixins Application

Mixins are bundled with the `include` decorator, providing descriptive statements for breakpoints based on them.

## Hooks

The project incorporates the following hooks based on `react-responsive` for use in React.js:
- `useBreakpoints`: Retrieve current screen breakpoints.
- `useBreakpoint`: Retrieve the current breakpoint.
- `useBreakpointMF`: Retrieve the current breakpoint for "MtF" variant.
- `useBreakpointDF`: Retrieve the current breakpoint for "MtF" variant.

### Hook Implementations

#### useBreakpoint Hook:

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

### Usage Examples:

#### useBreakpoint Hook:

```typescript
import useBreakpoint from './hooks/useBreakpoint';

const MyComponent = () => {
  const isMedium = useBreakpoint('md');

  return (
    <div>
      {isMedium && <p>The current breakpoint is Medium (md)</p>}
    </div>
  );
};
```

#### useBreakpoints Hook:

```typescript
import { useBreakpoints } from './hooks/useBreakpoints';

const MyComponent = () => {
  const breakpoints = useBreakpoints();

  return (
    <div>
      {breakpoints.includes('lg') && <p>The Large (lg) breakpoint is active</p>}
    </div>
  );
};
```

#### useBreakpointMF Hook:

```typescript
import { useBreakpointMF } from './hooks/useBreakpoint';

const MyComponent = () => {
  const isMedium = useBreakpointMF('md');

  return (
    <div>
      {isMedium && <p>The current breakpoint is Medium (md) for Mobile First</p>}
    </div>
  );
};
```

#### useBreakpointDF Hook:

```typescript
import { useBreakpointDF } from './hooks/useBreakpoint';

const MyComponent = () => {
  const isLarge = useBreakpointDF('lg');

  return (
    <div>
      {isLarge && <p>The current breakpoint is Large (lg) for Desktop First</p>}
    </div>
  );
};
```

## Components

The project includes utility components to display content only at certain breakpoints.

### Usage Examples:

#### ForMF Component:

```typescript
import { ForMF } from './components/ForMF';

const MyComponent = () => (
  <ForMF bp='md'>
    <p>This content is only visible at the Medium (md) breakpoint</p>
  </ForMF>
);
```
# react-adaptable-scss: Adaptive SCSS Tools

This project provides tools and configurations to simplify writing adaptive code for both vertical and horizontal layouts.

## Project Structure

The project includes the `scss` directory with the following files:
- `_data.scss`: Contains breakpoints.
- `_horizontal.scss` and `_vertical.scss`: Provide mixins for horizontal and vertical layouts, respectively.
- `_screen.scss`: An intermediate file for JS export.
- `_export.module.scss`: A file meant for explicit JS export.

The `hooks` directory includes:
- `useBreakpoint.ts`: Implements the `useBreakpoint` hook for identifying the current breakpoint.
- `useBreakpoints.ts`: Implements the `useBreakpoints` hook for retrieving the list of currently active breakpoints.
- `useVBreakpoint.ts`: Implements the `useVBreakpoint` hook for identifying the current vertical breakpoint.
- `useVBreakpoints.ts`: Implements the `useVBreakpoints` hook for retrieving the list of currently active vertical breakpoints.

The `components` directory includes:
- `ForMF.ts`: A utility component that takes breakpoint size and children as props. It uses the `useBreakpointMF` hook to determine if the display size matches the given breakpoint. If so, it renders the children; otherwise, it renders `null`.
- `ForDF.ts`: Similar to `ForMF`, but uses the `useBreakpointDF` hook.

## Breakpoints

We use a set of fixed variables for different screen sizes.

### Horizontal Breakpoints (default):

```typescript
const horizontalBreakpoints = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  lt: '1024px',
  ltm: '1200px',
  ltl: '1440px',
  xl: '1920px',
  xxl: '2560px',
  qxl: '3840px',
};
```

### Vertical Breakpoints (default):

```typescript
const verticalBreakpoints = {
  xs: '600px',
  sm: '800px',
  md: '1000px',
  lg: '1200px',
  xl: '1600px',
  xxl: '1601px',
};
```

## Mixins Application

Mixins are bundled with the `include` decorator, providing descriptive statements for breakpoints based on them.

## Hooks

The project incorporates the following hooks based on `react-responsive` for use in React.js:
- `useBreakpoints`: Retrieve current screen breakpoints.
- `useBreakpoint`: Retrieve the current breakpoint.
- `useBreakpointMF`: Retrieve the current breakpoint for "Mobile to First" variant.
- `useBreakpointDF`: Retrieve the current breakpoint for "Desktop to First" variant.

### Hook Implementations

### Usage Examples:

#### useBreakpoint Hook with Predefined Breakpoints:

```typescript
import useBreakpoint from './hooks/useBreakpoint';

const MyComponent = () => {
  const isMedium = useBreakpoint('md');

  return (
    <div>
      {isMedium && <p>The current breakpoint is Medium (md)</p>}
    </div>
  );
};
```

#### useBreakpoint Hook with Custom Size:

```typescript
import useBreakpoint from './hooks/useBreakpoint';

const MyComponent = () => {
  const isCustomSize = useBreakpoint(850);

  return (
    <div>
      {isCustomSize && <p>The current breakpoint is Custom (850px)</p>}
    </div>
  );
};
```

#### useBreakpoints Hook:

```typescript
import { useBreakpoints } from './hooks/useBreakpoints';

const MyComponent = () => {
  const breakpoints = useBreakpoints();

  return (
    <div>
      {breakpoints.includes('lg') && <p>The Large (lg) breakpoint is active</p>}
    </div>
  );
};
```

#### useBreakpointMF Hook:

```typescript
import { useBreakpointMF } from './hooks/useBreakpoint';

const MyComponent = () => {
  const isMedium = useBreakpointMF('md');

  return (
    <div>
      {isMedium && <p>The current breakpoint is Medium (md) for Mobile First</p>}
    </div>
  );
};
```

#### useBreakpointDF Hook:

```typescript
import { useBreakpointDF } from './hooks/useBreakpoint';

const MyComponent = () => {
  const isLarge = useBreakpointDF('lg');

  return (
    <div>
      {isLarge && <p>The current breakpoint is Large (lg) for Desktop First</p>}
    </div>
  );
};
```

## Components

The project includes utility components to display content only at certain breakpoints.

### Usage Examples:

#### ForMF Component:

```typescript
import { ForMF } from './components/ForMF';

const MyComponent = () => (
  <ForMF bp='md'>
    <p>This content is only visible at the Medium (md) breakpoint</p>
  </ForMF>
);

const CustomSizeComponent = () => (
  <ForMF bp={850}>
    <p>This content is only visible at the Custom size (850px) breakpoint</p>
  </ForMF>
);
```

#### ForDF Component:

```typescript
import { ForDF } from './components/ForDF';

const MyComponent = () => (
  <ForDF bp='lg'>
    <p>This content is only visible at the Large (lg) breakpoint</p>
  </ForDF>
);

const CustomSizeComponent = () => (
  <ForDF bp={1200}>
    <p>This content is only visible at the Custom size (1200px) breakpoint</p>
  </ForDF>
);
```

## Future Growth Perspectives

We aim to add the following functionalities:
- Redefining SCSS variables.
- Configuring breakpoint names.
- Separate breakpoint configurations for vertical layout.
- Integration with the external library `react-responsive`.
- Addition of WebStorm live templates for quick layout designs.
#### ForDF Component:

```typescript
import { ForDF } from './components/ForDF';

const MyComponent = () => (
  <ForDF bp='lg'>
    <p>This content is only visible at the Large (lg) breakpoint</p>
  </ForDF>
);
```



