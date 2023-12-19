<template>
    <div class="fixed top-0 left-0 pointer-events-none origin-top-left z-[2000]">
        <div class="relative scale-0 js-cursor">
            <svg class="w-[2rem] h-auto rotate-[-45deg] translate-y-[20%] origin-top-left"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.89 149.85">
                <path d="M13.88 59.2C11 65.67 1.57 137.72 2.46 144.88l8.74 2.72c-1.89-15.14 5.57-82.73 3.06-88.64" />
                <path
                    d="M2.39 46.01c.18 2.05.36 4.13 1.13 6.04 1.25 3.13 4.01 5.51 7.14 6.75 3.12 1.24 6.59 1.43 9.93 1.03 1.1-.13 2.21-.33 3.24-.76 2.13-.91 3.71-2.77 4.93-4.73 2.99-4.81 7.38-47.84 5.41-48.09-1.33-.17-18.45 25.23-13.32 31.56 3.21-9.95-1.07-35.45-2.55-35.56-1.37-.1-3.74 25.13-8.33 35.1C7.83 33.99 4.35 8.87 3.99 7.66c-.9-3.02-2.14 32.03-1.59 38.35Z" />
            </svg>
        </div>
    </div>
</template>

<script>
import lerp from '@14islands/lerp'

export default {
    data() {
        return {
            x: 0, y: 0,
            cx: 0, cy: 0,
        }
    },

    async mounted() {
        await this.$nextTick()

        window.addEventListener('mousemove', this.move)

        this.$nuxt.$on('tick', this.tick)
    },

    destroyed() {
        window.removeEventListener('mousemove', this.move)

        this.$nuxt.$off('tick', this.tick)
    },

    methods: {

        move({ clientX, clientY }) {
            this.x = clientX
            this.y = clientY
        },

        tick({ ratio }) {
            this.cx = lerp(this.cx, this.x, .15 * ratio)
            this.cy = lerp(this.cy, this.y, .15 * ratio)

            this.$el.style.transform = `translate3d(${this.cx}px, ${this.cy}px, 0)`
        }
    }
}
</script>


<style lang="scss" scoped>
path {
    fill: #fff;
    stroke: #000;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 4.5px
}
</style>