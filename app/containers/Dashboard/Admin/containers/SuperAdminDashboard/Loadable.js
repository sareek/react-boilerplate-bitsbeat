/**
 *
 * Asynchronously loads the component for SuperAdminDashboard
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
