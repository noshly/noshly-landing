<template>
    <div class="relative w-full">
        <svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <symbol id="icon-twitter" viewBox="0 0 26 28">
                    <path
                        d="M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z">
                    </path>
                </symbol>
                <symbol id="icon-instagram" viewBox="0 0 24 28">
                    <path
                        d="M16 14c0-2.203-1.797-4-4-4s-4 1.797-4 4 1.797 4 4 4 4-1.797 4-4zM18.156 14c0 3.406-2.75 6.156-6.156 6.156s-6.156-2.75-6.156-6.156 2.75-6.156 6.156-6.156 6.156 2.75 6.156 6.156zM19.844 7.594c0 0.797-0.641 1.437-1.437 1.437s-1.437-0.641-1.437-1.437 0.641-1.437 1.437-1.437 1.437 0.641 1.437 1.437zM12 4.156c-1.75 0-5.5-0.141-7.078 0.484-0.547 0.219-0.953 0.484-1.375 0.906s-0.688 0.828-0.906 1.375c-0.625 1.578-0.484 5.328-0.484 7.078s-0.141 5.5 0.484 7.078c0.219 0.547 0.484 0.953 0.906 1.375s0.828 0.688 1.375 0.906c1.578 0.625 5.328 0.484 7.078 0.484s5.5 0.141 7.078-0.484c0.547-0.219 0.953-0.484 1.375-0.906s0.688-0.828 0.906-1.375c0.625-1.578 0.484-5.328 0.484-7.078s0.141-5.5-0.484-7.078c-0.219-0.547-0.484-0.953-0.906-1.375s-0.828-0.688-1.375-0.906c-1.578-0.625-5.328-0.484-7.078-0.484zM24 14c0 1.656 0.016 3.297-0.078 4.953-0.094 1.922-0.531 3.625-1.937 5.031s-3.109 1.844-5.031 1.937c-1.656 0.094-3.297 0.078-4.953 0.078s-3.297 0.016-4.953-0.078c-1.922-0.094-3.625-0.531-5.031-1.937s-1.844-3.109-1.937-5.031c-0.094-1.656-0.078-3.297-0.078-4.953s-0.016-3.297 0.078-4.953c0.094-1.922 0.531-3.625 1.937-5.031s3.109-1.844 5.031-1.937c1.656-0.094 3.297-0.078 4.953-0.078s3.297-0.016 4.953 0.078c1.922 0.094 3.625 0.531 5.031 1.937s1.844 3.109 1.937 5.031c0.094 1.656 0.078 3.297 0.078 4.953z">
                    </path>
                </symbol>
            </defs>
        </svg>
        <div ref="mask" class="fixed inset-0 flex items-center justify-center z-[999]">
            <canvas ref="pan" width="400" height="800" class="relative w-[25rem] h-auto z-5"></canvas>
        </div>
        <SiteHead />
        <SiteHeadLinks />
        <Nuxt />
        <SiteFoot />
        <!--
        <client-only>
            <TheCursor v-if="hasMouse" />
            <transition :css="false" @enter="menuOpen" @leave="menuClose">
                <TheMenu v-if="isSmall && isMenu" />
            </transition>
        </client-only>
        --->
        <TheBox ref="box" />
    </div>
</template>

<script>
import gsap from 'gsap'

const rive = require("@rive-app/canvas")

import { qs, qsa } from '~/assets/js/utils/common'

export default {

    beforeMount() {
        window.scrollTo(0, 0)

        this.$store.commit('app/SET_DEVICE')
        this.$store.commit('app/SET_FEATURES')
    },

    mounted() {
        this.$r?.mount?.(this.$nuxt)
        this.$s?.mount?.(this.$nuxt)
        this.onRoute()

        this.pan = new rive.Rive({
            src: '/frying.riv',
            canvas: this.$refs.pan,
            artboard: 'frying-pan',
            stateMachines: 'frying-loop',
            autoplay: true,
        })

        window.addEventListener('load', () => {
            this.itl = gsap.timeline({
                onComplete: () => {
                    this.pan.cleanup()
                    this.$refs.mask.remove()
                    this.itl?.kill()
                }
            })
                .set('.js-sh', { alpha: 1 }, 0)
                .to(this.$refs.pan, {
                    scale: 0,
                    duration: .75,
                    ease: 'back.in'
                }, 1)
                .to('.js-i-line', {
                    xPercent: gsap.utils.wrap([-150, 150, -150]),
                    duration: 1.25,
                    ease: 'expo.inOut',
                    force3D: true
                }, 1.25)
                .fromTo('.js-i-down', {
                    y: '-12rem',
                }, {
                    y: 0,
                    duration: 1.25,
                    stagger: .1,
                    ease: 'elastic.out(1, .75)'
                }, 2)
                .fromTo('.js-cursor', {
                    scale: 0,
                }, {
                    scale: 1,
                    duration: 1.25,
                    ease: 'elastic.out(1, .75)'
                }, 2.25)
                .add(() => this.$refs.box.tl?.play(), 2.25)
        })
    },

    computed: {

        hasMouse() {
            return this.$store.state.app.features.hasMouse
        },

        isSmall() {
            return this.$store.state.app.bounds.small
        },

        isMenu() {
            return this.$store.state.app.flags.menu
        }
    },

    methods: {

        onRoute() {
            this.$router.beforeEach((to, from, next) => {
                this.$store.commit('app/SET_PAGE', { to, from })

                next()
            })
        },

        menuOpen(el, done) {
            done()

            !this.tl && (this.tl = gsap.timeline({
                paused: true,
                defaults: {
                    duration: 1,
                    ease: 'expo'
                }
            }))

            this.tl.clear()
                .from([el, qs('.js-menu-mask', el)], {
                    yPercent: gsap.utils.wrap([-100, 100]),
                    ease: 'snappy'
                })
                .from(qsa('.js-menu-item'), {
                    y: '6rem',
                    alpha: 0,
                    ease: 'elastic.out(1, .75)',
                    stagger: .1
                }, .25)
                .restart()
        },

        menuClose(el, done) {
            this.tl.clear()
                .to([el, qs('.js-menu-mask', el)], {
                    yPercent: gsap.utils.wrap([-100, 100]),
                    ease: 'snappy'
                })
                .add(() => done())
                .restart()
        }
    }
}
</script>
