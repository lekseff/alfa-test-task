import { ROUTE_NAMES } from '@/app/plugins/router/names'

export const pageRoutes = [
  {
    path: '',
    redirect: '/products',
  },
  {
    path: '/products',
    name: ROUTE_NAMES.products,
    component: () => import('@/pages/products/ProductsPage.vue'),
  },
  {
    path: '/products/:id',
    name: ROUTE_NAMES.product,
    component: () => import('@/pages/product/ProductPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: () => ({ name: ROUTE_NAMES.products, params: {} }),
  },
]
