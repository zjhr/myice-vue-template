import Vue from 'vue';
import Router from 'vue-router';
import routerConfig from './routerConfig';

/**
 * 将路由配置扁平化
 * @param {Array} config 路由配置
 * @return {Route}
 * @example
 * const routes = [
 *   {
 *     path: '/dashboard/analysis',
 *     component: HeaderAsideLayout,
 *     children: [
 *       {
 *         path: '',
 *         component: Dashboard,
 *       },
 *     ],
 *   },
 * ];
 */

const routerMap = [];

const recursiveRouterConfig = (config = []) => {
  config.forEach(({path,layout,redirect,children,component}) => {
    const route = {
      path,
      component:layout,
      children: [
        {
          path: '',
					redirect,
          component,
        },
      ],
    };

    if (Array.isArray(children)) {
      recursiveRouterConfig(children);
    }
    routerMap.push(route);
  });

  return routerMap;
};

const routes = recursiveRouterConfig(routerConfig);
// console.log(routes)

Vue.use(Router);

export default new Router({
  routes,
});
