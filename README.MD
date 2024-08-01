# react-adaptable-scss: Adaptive SCSS Tools

This project holds a toolkit and several configurations designed to simplify writing adaptive code in two dimensions:
vertical and horizontal.

## Structure

The project includes the scss directory with the following files:

- `_data.scss`: Contains break-points.
- `_horizontal.scss` and `_vertical.scss`: Include files that provide mixins for interaction with horizontal and
  vertical layouts, respectively.
- `_screen.scss`: An intermediate file for JS export.
- `_export.module.scss`: A file meant for explicit JS export.
- `useBreakpoint.ts`: A TypeScript file implementing the `useBreakpoint` hook for identifying current breakpoint.
- `useBreakpoints.ts`: A TypeScript file implementing the `useBreakpoints` hook for getting the list of currently active
  breakpoints.
- `useVBreakpoint.ts`: A TypeScript file implementing the `useVBreakpoint` hook for identifying current vertical
  breakpoint.
- `useVBreakpoints.ts`: A TypeScript file implementing the `useVBreakpoints` hook for getting the list of currently
  active vertical breakpoints.
- `ForMF.ts` and `ForDF.ts`: TypeScript files implementing two utility components `ForMF` and `ForDF`. They take
  breakpoint size and children as props. `ForMF` uses the `useBreakpointMF` hook to determine if the display size
  matches the given breakpoint. If so, it renders the children; otherwise, it renders `null`. Similarly, `ForDF` uses
  the `useBreakpointDF` hook to make the same determination.

## Breakpoints

This project purposefully uses a set of fixed variables designed for different screen sizes, which include xs, sm, md,
lg, xl, xxl, and xxxl.

## Mixins Application

In this project, mixins are bundled together with the include decorator, thus formatting descriptive statements for
breakpoints based on them.

## useBreakpoints Hook

The project incorporates a hook, `useBreakpoints`, which is based on react-responsive that allows you to retrieve
current screen breakpoints for use in React.js.

## useBreakpoint Hook

The project incorporates a hook, `useBreakpoint`, which is based on react-responsive that allows you to retrieve
current screen breakpoints for use in React.js.

## Components

The project includes some components for convenience that display content only on certain breakpoints.

## Future Growth Perspectives

We'd love to add the following functionalities in the future:

- Redefining SCSS variables.
- Configuring the names of breakpoints.
- Separate breakpoint configurations for vertical layout.
- Integration with the external library react-responsive for its custom use under this single package.
- Addition of WebStorm live templates for lightning-quick layout designs.
