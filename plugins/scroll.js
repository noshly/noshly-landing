import Scroll from '~/assets/js/Scroll'

export default ({ app }, inject) => {
  const s = new Scroll(app)
  
  inject('s', s)
}
