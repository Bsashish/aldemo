/*
 * Media queries utility
 */

import {
  css,
  DefaultTheme,
  CSSObject,
  InterpolationFunction,
  ThemedStyledProps,
  Interpolation,
  FlattenInterpolation,
} from 'styled-components/macro';

/*
 * Taken from https://github.com/DefinitelyTyped/DefinitelyTyped/issues/32914
 */

// Update your breakpoints if you want
export const sizes = {
  small: 600,
  medium: 1024,
  large: 1440,
  xlarge: 1920,
};

// Iterate through the sizes and create a media template
export const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media (min-width: ${sizes[label]}px) {
        ${css(first, ...interpolations)}
      }
    `;

    return acc;
  },
  {} as { [key in keyof typeof sizes]: MediaFunction },
);

/*
 * @types/styled-component is not working properly as explained in the github issue referenced above.
 * We must overcome this with custom typings, however, this might not work in time as the styled-components update.
 * Be carefull and keep an eye on the issue and the possible improvements
 */
type MediaFunction = <P extends object>(
  first:
    | TemplateStringsArray
    | CSSObject
    | InterpolationFunction<ThemedStyledProps<P, DefaultTheme>>,
  ...interpolations: Array<Interpolation<ThemedStyledProps<P, DefaultTheme>>>
) => FlattenInterpolation<ThemedStyledProps<P, DefaultTheme>>;

/* Example
const SomeDiv = styled.div`
  display: flex;
  ....
  ${media.medium`
    display: block
  `}
`;
*/

// types for theme
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      offWhite: string;
      black: string;
      green: string;
      lightGreen: string;
      roseRed: string;
      darkBlue: string;
      darkGrey: string;
      midGrey: string;
      lightGrey: string;
      yellow: string;
      peach: string;
    },
    spacing: {
      small: string;
      normal: string;
      medium: string;
      large: string;
      xl: string;
      xxl: string;
      huge: string;
    }
  }
}