import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import lerp from '@14islands/lerp'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default class {
    constructor(app) {
        this.app = app

        this.t = 0

        this.rects = [{}]
    }

    mount(ctx) {
        this.ctx = ctx

        this.bindEvents()
    }

    bindEvents() {
        gsap.ticker.add(this.tick)

        //window.addEventListener('scroll', this.scroll, false)
    }

    tick = (time) => {
        this.ctx?.$nuxt?.$emit('tick', { y: this.t, time, ratio: gsap.ticker.deltaRatio(60) })
    }

    scroll = () => {
        this.t = window.scrollY
    }

    resize = () => {
        this.rects = [{}]
    }

    reset = () => {
        this.t = 0
        window.scrollTo(0, 0)
    }

    visible(elem) {
        const c = this.rects.find(({ el }) => el === elem)
        const r = c ? c.rect : this.rects.push({ el: elem, rect: rect(elem) })
        const h = this.app.$r?.wh || window.innerHeight

        return (this.tc > (r.top - h) && this.tc < r.bottom)
    }

    get target() {
        return this.t
    }
}
