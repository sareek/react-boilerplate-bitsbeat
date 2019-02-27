/**
 *
 * Asynchronously loads the component for RolesContainer
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
