# Design Token Generator

Utilities for easy generation of Design Tokens.

Supports converting from SCSS and TS/JSON to CSS vars and from SCSS to TS/JSON.

Also includes convenience methods for easy creation of color variants (color, tint, shade) that can be used to create interaction states (default, hover, active).

For a11y it can automatically calculate the contrast color from a background color to ensure highest possible contrast ratio between background and text color.

<!--
TODO Add section on contrast color, how it's calculated, WCAG etc.

## Contrast color

### YIQ / Color Brightness

https://www.w3.org/TR/AERT/#color-contrast
Calculation: https://en.wikipedia.org/wiki/YIQ#From_RGB_to_YIQ -->

## Tabs vs. Spaces

Yes, it's always worth a discussion!  
Well, except now it isn't anymore: https://alexandersandberg.com/tabs-for-accessibility/  
Design Token Generator uses Tabs for developer accessibility :wheelchair:
