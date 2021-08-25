/**
 * Asynchronously loads the component for TopTen
 */

import { lazyLoad } from 'utils/loadable';

export const TopTen = lazyLoad(
  () => import('./index'),
  module => module.TopTen,
);
