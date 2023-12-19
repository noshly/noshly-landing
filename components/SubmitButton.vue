<template>
    <button @mouseenter="enter" @mouseleave="leave"
        class="btn relative h-[6rem] s:h-[7.5rem] rounded-full bg-black inline-flex flex-col items-center justify-center leading-none text-center overflow-hidden uppercase text-18 px-50 s:px-75 pointer-cursor rotate-[-7deg]">
        <span class="relative font-2 text-yellow z-3" v-html="label"></span>
        <span ref="label2" class="absolute inset-0 flex items-center justify-center font-2 text-black z-3"
            aria-hidden="true" v-html="label"></span>
        <svg class="absolute top-0 left-0 w-full h-full z-2" viewBox="0 0 10 10" preserveAspectRatio="none">
            <path ref="mask" class="btn__mask" d="M 10 10 L 10 10 C 10 10 10 10 5 10 C 0 10 0 10 0 10 L 0 10 Z" />
        </svg>
    </button>
</template>

<script>
import gsap from 'gsap'

export default {
    props: {
        label: {
            type: String,
            required: false,
        },
        to: {
            type: String,
            required: false,
            default: '/'
        }
    },

    data() {
        return {
            c: {
                in: [
                    "M 0,10 L 10,10 L 10,10 C 10,10 10,10 5,10 C 0,10 0,10 0,10 Z",
                    "M 0,10 L 10,10 L 10,10 C 10,10 10,5 5,5 C 0,5 0,10 0,10 Z",
                    "M 0,10 L 10,10 L 10,0 C 10,0 10,0 5,0 C 0,0 0,0 0,0 Z"
                ],
                out: [
                    "M 10,10 L 10,0 C 10,0 10,0 5,0 C 0,0 0,0 0,0 L 0,10 Z",
                    "M 10,10 L 10,0 C 10,0 10,5 5,5 C 0,5 0,0 0,0 L 0,10 Z",
                    "M 10,10 L 10,10 C 10,10 10,10 5,10 C 0,10 0,10 0,10 L 0,10 Z"
                ]
            },
            d: .25
        }
    },

    async mounted() {
        await this.$nextTick()

        this.tl = gsap.timeline({
            paused: true,
            defaults: {
                duration: this.d,
            }
        })
            .set(this.$refs.mask, { attr: { d: this.c.in[0] } })
            .set(this.$refs.label2, { yPercent: 100 })
            .progress(1).progress(0)
    },

    methods: {

        leave() {
            this.tl.clear()
                .set(this.$refs.mask, { attr: { d: this.c.out[0] } })
                .to(this.$refs.label2, {
                    yPercent: 100,
                    duration: this.d,
                    ease: 'power2.in'
                }, 0)
                .to(this.$refs.mask, { attr: { d: this.c.out[1] }, ease: 'circ.in' }, 0)
                .to(this.$refs.mask, { attr: { d: this.c.out[2] }, ease: 'circ' }, this.d)
                .restart()
        },

        enter() {
            this.tl.clear()
                .set(this.$refs.mask, { attr: { d: this.c.in[0] } })
                .to(this.$refs.mask, { attr: { d: this.c.in[1] }, ease: 'circ.in' }, 0)
                .to(this.$refs.mask, { attr: { d: this.c.in[2] }, ease: 'circ' }, this.d)
                .to(this.$refs.label2, {
                    yPercent: 0,
                    duration: this.d * 2,
                    ease: 'circ.inOut'
                }, 0)
                .restart()
        }
    }
}
</script>

<style lang="scss">
.btn {

    &__mask {
        fill: theme('colors.yellow.DEFAULT');
    }
}
</style>