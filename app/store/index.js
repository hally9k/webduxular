import createLogger from 'redux-logger';
import reducers from '../reducers';

export default
($ngReduxProvider) => {
  const logger = createLogger({
    level: 'info',
    collapsed: true
  });
  $ngReduxProvider
    .createStoreWith(reducers, ['ngUiRouterMiddleware', logger]);
}
