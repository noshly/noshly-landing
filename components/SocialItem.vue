<template>
    <a href="" @mouseenter="enter" @mouseleave="leave"
        class="relative flex items-center justify-center w-[5.5rem] h-[4rem] s:w-[8rem] s:h-[6rem] rounded-full bg-black rotate-[-25deg]">
        <svg class="icon text-yellow text-18 s:text-32" :class="`icon-${icon}`">
            <use :xlink:href="`#icon-${icon}`"></use>
        </svg>
    </a>
</template>

<script>
import gsap from 'gsap'

export default {
    props: {
        icon: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: false,
        }
    },

    mounted() {
        this.tl = gsap.timeline({
            paused: true,
            defaults: {
                duration: 1,
                ease: 'elastic.out(1, .5)'
            }
        })
    },

    destroyed() {
        this.tl.kill()
    },

    methods: {

        enter() {
            this.tl.clear()
                .to(this.$el, {
                    scaleX: 1.15,
                    rotation: -12.5
                })
                .restart()
        },

        leave() {
            this.tl.clear()
                .to(this.$el, {
                    scaleX: 1,
                    rotation: -25
                })
                .restart()
        }
    }
}
</script>
