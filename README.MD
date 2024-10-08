# react-responsive-tools

This project provides tools and configurations to simplify writing adaptive code for both vertical and horizontal layouts.

The package is based on [react-responsive](https://www.npmjs.com/package/react-responsive) for use in React. It assumes the use of SCSS for compilation.

## Installation

To install the project, run the following command:

### Установка

Пожалуйста, убедитесь, что вы установили следующие зависимости:

```sh
yarn add react-responsive
```

```sh
# Using Yarn
yarn add react-responsive-tools

# Using npm
npm install react-responsive-tools
```

### Import SCSS

To use the generated SCSS files, import the main SCSS file from the library:

```scss
@import 'react-responsive-tools';
```

### Import JavaScript

To use the components and hooks, import them from the library:

```javascript
import { For, Before, useBreakpoint, useBreakpointDF, useBreakpointMF, useVBreakpoint, useVBreakpointDF, useVBreakpointMF } from 'react-responsive-tools';
```

## Initialization and Configuration

To initialize the tools, use the following commands:

### Re-initializing Configuration

If you have changed the configuration or added new settings, you need to reinitialize the configuration files. To do this, run the following command:

```sh
react-responsive-tools run reinit
```

This command will run the `reinit.sh` script, which will recreate the necessary configuration files.

### Default Values

The following horizontal and vertical breakpoints are provided by default:

#### Horizontal Breakpoints

```typescript
export const HORIZONTAL_BREAKPOINTS = {
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

#### Vertical Breakpoints

```typescript
export const VERTICAL_BREAKPOINTS = {
  xs: '600px',
  sm: '800px',
  md: '1000px',
  lg: '1200px',
  xl: '1600px',
  xxl: '1920px',
};
```

### Using Hooks

#### Hook `useBreakpoint`

```typescript
import { useBreakpoint } from 'react-responsive-tools';

// Usage Example
const MyComponent = () => {
    const isMedium = useBreakpoint('md');

    return (
        <div>
            {isMedium && <p>Current breakpoint: Medium (md)</p>}
        </div>
    );
};
```

#### Hook `useBreakpointMF`

```typescript
import { useBreakpointMF } from 'react-responsive-tools';

// Usage Example
const MyComponent = () => {
    const isMedium = useBreakpointMF('md');

    return (
        <div>
            {isMedium && <p>Current breakpoint: Medium (md) for Mobile First</p>}
        </div>
    );
};
```

#### Hook `useBreakpointDF`

```typescript
import { useBreakpointDF } from 'react-responsive-tools';

// Usage Example
const MyComponent = () => {
    const isLarge = useBreakpointDF('lg');

    return (
        <div>
            {isLarge && <p>Current breakpoint: Large (lg) for Desktop First</p>}
        </div>
    );
};
```

#### Hook `useVBreakpoint`

```typescript
import { useVBreakpoint } from 'react-responsive-tools';

// Usage Example
const MyComponent = () => {
    const isMedium = useVBreakpoint('md');

    return (
        <div>
            {isMedium && <p>Current vertical breakpoint: Medium (md)</p>}
        </div>
    );
};
```

#### Hook `useVBreakpointMF`

```typescript
import { useVBreakpointMF } from 'react-responsive-tools';

// Usage Example
const MyComponent = () => {
    const isMedium = useVBreakpointMF('md');

    return (
        <div>
            {isMedium && <p>Current vertical breakpoint: Medium (md) for Mobile First</p>}
        </div>
    );
};
```

#### Hook `useVBreakpointDF`

```typescript
import { useVBreakpointDF } from 'react-responsive-tools';

// Usage Example
const MyComponent = () => {
    const isLarge = useVBreakpointDF('lg');

    return (
        <div>
            {isLarge && <p>Current vertical breakpoint: Large (lg) for Desktop First</p>}
        </div>
    );
};
```

### Using Components

#### Component `For`

```typescript
import { For } from 'react-responsive-tools';

// Usage Example
const MyComponent = () => (
    <For p='md'>
        <p>This content is visible only at the Medium (md) breakpoint</p>
    </For>
);

const CustomSizeComponent = () => (
    <For p={850}>
        <p>This content is visible only at the Custom (850px) breakpoint</p>
    </For>
);
```

#### Component `Before`

```typescript
import { Before } from 'react-responsive-tools';

// Usage Example
const MyComponent = () => (
    <Before p='lg'>
        <p>This content is visible only at the Large (lg) breakpoint</p>
    </Before>
);

const CustomSizeComponent = () => (
    <Before p={1200}>
        <p>This content is visible only at the Custom (1200px) breakpoint</p>
    </Before>
);
```

### Breakpoint Types

```typescript
export type TBreakpoint =
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'lt'
    | 'ltm'
    | 'ltl'
    | 'xl'
    | 'xxl'
    | 'qxl'

export type TVerticalBreakpoint =
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
```

### Project Structure

The project includes the following directories and files:

- `scss`: directory for SCSS files.
    - `_custom-breakpoints.scss`: contains custom breakpoints.
    - `_horizontal.scss`: provides mixins for horizontal layouts.
    - `_horizontal-breakpoints.scss`: defines horizontal breakpoints.
    - `_vertical.scss`: provides mixins for vertical layouts.
    - `_vertical-breakpoints.scss`: defines vertical breakpoints.
    - `index.scss`: main SCSS file.

- `hooks`: directory for hooks.
    - `useBreakpoint.ts`: implements the `useBreakpoint` hook.
    - `useVBreakpoint.ts`: implements the `useVBreakpoint` hook.
    - `useVariant.ts`: utility hook to determine the variant.

- `components`: directory for components.
    - `horizontal.tsx`: utility components for horizontal layouts.
    - `For.tsx`: utility component for displaying content at a specific breakpoint.
    - `Before.tsx`: utility component similar to `For`, but for different breakpoints.

- `scripts`: directory for scripts.
    - `createConfig.js`: script to create configuration files.
    - `generateCustomBreakpointsSCSS.js`: script to generate custom SCSS breakpoints.
    - `generateSCSS.js`: script to generate SCSS files.
    - `generateTBreakpoint.js`: script to generate TypeScript breakpoint types.

- `interfaces`: directory for TypeScript interfaces.
    - `TAdaptiveVariant.ts`: interface for adaptive variant types.
    - `TBreakpoint.ts`: interface for breakpoint types.
    - `TBreakpoints.ts`: interface for breakpoints.

## Command Line Interface (CLI)

To recreate the necessary files, run the provided script using the following command:

```sh
react-responsive-tools run reinit
```

This command will run the `reinit.sh` script, which will create the configuration files for the project.

### Examples of SCSS Mixins after Re-initialization

After re-generating the files, the following SCSS mixins will be available:

#### Horizontal Breakpoints

```scss
@import "_custom-breakpoints";

@mixin mob-first($breakpoint) {
  @media (min-width: map-get($horizontal-breakpoints, $breakpoint)) {
    @content;
  }
}

@mixin desk-first($breakpoint) {
  @media (max-width: map-get($horizontal-breakpoints, $breakpoint)) {
    @content;
  }
}

// Example mixins
@mixin for-xs() {
  @include mob-first(xs) {
    @content;
  }
}

@mixin for-sm() {
  @include mob-first(sm) {
    @content;
  }
}

@mixin for-md() {
  @include mob-first(md) {
    @content;
  }
}

@mixin for-lg() {
  @include mob-first(lg) {
    @content;
  }
}

@mixin for-lt() {
  @include mob-first(lt) {
    @content;
  }
}

@mixin for-ltm() {
  @include mob-first(ltm) {
    @content;
  }
}

@mixin for-ltl() {
  @include mob-first(ltl) {
    @content;
  }
}

@mixin for-xl() {
  @include mob-first(xl) {
    @content;
  }
}

@mixin for-xxl() {
  @include mob-first(xxl) {
    @content;
  }
}

@mixin for-qxl() {
  @include mob-first(qxl) {
    @content;
  }
}

@mixin before-xs() {
  @include desk-first(xs) {
    @content;
  }
}

@mixin before-sm() {
  @include desk-first(sm) {
    @content;
  }
}

@mixin before-md() {
  @include desk-first(md) {
    @content;
  }
}

@mixin before-lg() {
  @include desk-first(lg) {
    @content;
  }
}

@mixin before-lt() {
  @include desk-first(lt) {
    @content;
  }
}

@mixin before-ltm() {
  @include desk-first(ltm) {
    @content;
  }
}

@mixin before-ltl() {
  @include desk-first(ltl) {
    @content;
  }
}

@mixin before-xl() {
  @include desk-first(xl) {
    @content;
  }
}

@mixin before-xxl() {
  @include desk-first(xxl) {
    @content;
  }
}

@mixin before-qxl() {
  @include desk-first(qxl) {
    @content;
  }
}
```

#### Vertical Breakpoints

```scss
@import "_custom-breakpoints";

@mixin v-mob-first($breakpoint) {
  @media (min-height: map-get($vertical-breakpoints, $breakpoint)) {
    @content;
  }
}

@mixin v-desk-first($breakpoint) {
  @media (max-height: map-get($vertical-breakpoints, $breakpoint)) {
    @content;
  }
}

// Example mixins
@mixin v-for-xs() {
  @include v-mob-first(xs) {
    @content;
  }
}

@mixin v-for-sm() {
  @include v-mob-first(sm) {
    @content;
  }
}

@mixin v-for-md() {
  @include v-mob-first(md) {
    @content;
  }
}

@mixin v-for-lg() {
  @include v-mob-first(lg) {
    @content;
  }
}

@mixin v-for-xl() {
  @include v-mob-first(xl) {
    @content;
  }
}

@mixin v-for-xxl() {
  @include v-mob-first(xxl) {
    @content;
  }
}

@mixin v-before-xs() {
  @include v-desk-first(xs) {
    @content;
  }
}

@mixin v-before-sm() {
  @include v-desk-first(sm) {
    @content;
  }
}

@mixin v-before-md() {
  @include v-desk-first(md) {
    @content;
  }
}

@mixin v-before-lg() {
  @include v-desk-first(lg) {
    @content;
  }
}

@mixin v-before-xl() {
  @include v-desk-first(xl) {
    @content;
  }
}

@mixin v-before-xxl() {
  @include v-desk-first(xxl) {
    @content;
  }
}
```

### Practical Example of Using These Mixins

Here is an example of how to use these mixins in your SCSS code:

#### Horizontal Layout

```scss
.container {
  // Base styles
  width: 100%;
  padding: 20px;

  // Styles for `sm` breakpoint
  @include for-sm {
    width: 90%;
    padding: 15px;
  }

  // Styles for `md` breakpoint
  @include for-md {
    width: 80%;
    padding: 10px;
  }

  // Styles for `lg` breakpoint
  @include for-lg {
    width: 70%;
    padding: 5px;
  }
}

.header {
  // Base styles
  font-size: 16px;
  background-color: white;

  // Styles for `sm` breakpoint
  @include before-sm {
    font-size: 18px;
    background-color: lightgray;
  }

  // Styles for `md` breakpoint
  @include before-md {
    font-size: 20px;
    background-color: gray;
  }
}
```

#### Vertical Layout

```scss
.panel {
  // Base styles
  height: 100%;
  padding: 20px;

  // Styles for `sm` vertical breakpoint
  @include v-for-sm {
    height: 90%;
    padding: 15px;
  }

  // Styles for `md` vertical breakpoint
  @include v-for-md {
    height: 80%;
    padding: 10px;
  }

  // Styles for `lg` vertical breakpoint
  @include v-for-lg {
    height: 70%;
    padding: 5px;
  }
}

.footer {
  // Base styles
  font-size: 16px;
  background-color: white;

  // Styles for `sm` vertical breakpoint
  @include v-before-sm {
    font-size: 18px;
    background-color: lightgray;
  }

  // Styles for `md` vertical breakpoint
  @include v-before-md {
    font-size: 20px;
    background-color: gray;
  }
}
```

Now, the documentation is complete with examples of using the `for` and `before` mixins for both horizontal and vertical breakpoints, as well as the native mobile-first and desktop-first mixins.
