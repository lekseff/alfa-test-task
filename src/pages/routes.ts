import { ROUTE_NAMES } from '@/app/plugins/router/names'

export const pageRoutes = [
  {
    path: '',
    redirect: '/products',
  },
  {
    path: '/products',
    children: [
      {
        path: '',
        name: ROUTE_NAMES.products,
        component: () => import('@/pages/products/ProductsPage.vue'),
      },
      {
        path: ':id',
        name: ROUTE_NAMES.product,
        component: () => import('@/pages/products/ProductPage.vue'),
      },
      {
        path: 'product-create',
        name: ROUTE_NAMES.productCreate,
        component: () => import('@/pages/products/ProductCreatePage.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: () => ({ name: ROUTE_NAMES.products, params: {} }),
  },
]
