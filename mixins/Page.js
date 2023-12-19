import gsap from 'gsap'

import { qsa, qs, rect } from '~/assets/js/utils/common'

const tl = gsap.timeline({
    paused: true,
    defaults: {
        duration: .35,
        ease: 'power1'
    }
})

export default {

    transition: {
        name: 'page',
        appear: false,
        css: false,
        mode: 'out-in',

        enter(el, done) {
            done()
        },

        leave(el, done) {
            done()
        }
    },
}
