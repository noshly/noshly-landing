import Resize from '~/assets/js/Resize'

export default ({ app }, inject) => {
  const r = new Resize(app)
  
  inject('r', r)
}
