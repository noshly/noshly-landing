<template>
    <div
        class="fixed bottom-0 left-0 w-full overflow-hidden pointer-events-none pb-80 px-20 s:px-100 z-[998] invisible overflow-hidden">
        <button ref="btn" type="button" @click="click"
            class="pointer-events-auto flex flex-col items-start relative w-full s:max-w-[67.5rem] rounded-full bg-white border-[.4rem] s:border-[.6rem] border-black px-40 s:px-70 py-15 s:py-30">
            <p class="text-15 s:text-22 text-left">
                Empowering independent chefs to share their skills with locals and add to their income on their terms.
            </p>
            <span class="font-2 uppercase text-13 s:text-18 font-bold mt-8 s:mt-15">LEARN MORE ></span>
        </button>
    </div>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default {

    async mounted() {
        await this.$nextTick()

        this.tl = gsap.timeline({
            paused: true,
            defaults: {
                duration: .5,
                ease: 'back.in'
            }
        })
            .set(this.$el, { autoAlpha: 1 })
            .from(this.$refs.btn, {
                xPercent: -150,
                duration: 1,
                ease: 'elastic.out(1, .75)'
            })

        this.st = ScrollTrigger.create({
            trigger: document.body,
            start: 'top top',
            end: () => `+=100`,
            onLeave: () => {
                this.tl.clear()
                    .to(this.$refs.btn, {
                        xPercent: -150,
                    }).restart()
            },
            onEnterBack: () => {
                this.tl.clear()
                    .to(this.$refs.btn, {
                        xPercent: 0,
                        duration: 1,
                        ease: 'elastic.out(1, .75)'
                    }).restart()
            }
        })
    },

    methods: {

        click() {
            this.st?.kill()

            this.tl.clear()
                .to(window, {
                    scrollTo: '#early-access',
                    duration: 1.5,
                    ease: 'power3.inOut'
                })
                .to(this.$refs.btn, {
                    xPercent: -150,
                }, 0)
                .add(() => {
                    this.$destroy()
                    this.$el.remove()
                })
                .restart()
        }
    }
}
</script>
