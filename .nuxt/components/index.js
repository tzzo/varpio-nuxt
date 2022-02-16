import { wrapFunctional } from './utils'

export { default as Footer } from '../../components/Footer.vue'
export { default as Nav } from '../../components/Nav.vue'

export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyNav = import('../../components/Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c))
