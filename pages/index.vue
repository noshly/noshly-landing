<template>
    <article class="relative">
        <div ref="hero" class="relative h-[200vh] js-hero">
            <div class="sticky top-0 left-0 w-full h-screen flex items-center justify-center text-white overflow-hidden">
                <div ref="heroImage" class="absolute inset-0 media-fill bg-white-off">
                    <!--<img :src="data.hero.url" alt="">-->
                    <video ref="heroVid" src="/hero.mp4" muted playsinline loop autoplay
                        class="will-change-transform"></video>
                </div>
                <h1 ref="heroTitle" class="relative text-40 s:text-68 font-2 z-2 uppercase text-center">
                    {{ data.hero_title }}
                </h1>
                <div ref="pattern" class="absolute inset-0 flex flex-col justify-end z-3">
                    <div class="absolute top-0 left-0 w-full bg-white-off h-[11vh]"></div>
                    <div class="relative h-[30vh] -mb-2 js-i-line">
                        <div class="pattern-offset left-0 top-0 absolute h-full bg-white-off"></div>
                        <img src="/noshy-inverted.svg" class="absolute h-full top-0 left-full w-auto max-w-none">
                    </div>
                    <div class="relative h-[30vh] -mb-2 js-i-line">
                        <img src="/noshy-inverted.svg" class="absolute h-full top-0 right-full w-auto max-w-none">
                        <div class="pattern-offset absolute right-0 top-0 h-full bg-white-off"></div>
                    </div>
                    <div class="relative h-[30vh] js-i-line">
                        <div class="pattern-offset absolute left-0 top-0 h-full bg-white-off"></div>
                        <img src="/noshy-inverted.svg" class="absolute h-full top-0 left-full w-auto max-w-none">
                    </div>
                </div>
            </div>
        </div>
        <section class="relative site-gutter pt-150 overflow-hidden">
            <div class="absolute top-[-2rem] s:top-0 right-0 s:right-[9rem] w-[17.5rem] s:w-[25rem]">
                <canvas ref="pan" width="400" height="600" class="relative w-full h-auto"></canvas>
            </div>
            <div ref="intro" class="w-full max-w-[140rem] mx-auto m:pr-150">
                <h3 ref="introTitle" class="w-full max-s:max-w-[16rem] text-16 s:text-30 uppercase leading-[1.2] mb-30">{{
                    data.intro_label }}</h3>
                <PrismicRichText :field="data.intro_text"
                    class="perspective text-45 s:text-87 leading-[1.1] js-intro-text" />
            </div>
            <Stack :items="data.intro_images" />
        </section>

        <div class="site-max relative mb-20 s:mb-80">
            <article
                class="big-card relative s:flex overflow-hidden rounded-[6rem] s:rounded-[12rem] radius-fix border-[.5rem] border-black">
                <figure class="relative bg-pink-light flex-1 shrink-1 media-fill max-s:h-[26rem]">
                    <img src="/screen-2.jpg" alt="">
                </figure>
                <div
                    class="w-full s:w-[70rem] shrink-0 py-25 pb-50 s:py-95 px-20 s:px-80 bg-white m:border-l-[.5rem] border-black">
                    <h3 class="text-18 s:text-32 text-pink font-2 uppercase mb-10 s:mb-25">{{ data.freedom_label }}</h3>
                    <h2 class="text-40 s:text-70 leading-none italic font-bold w-full max-w-[45rem] mb-15 s:mb-40">
                        {{ data.freedom_title }}
                    </h2>
                    <PrismicRichText :field="data.freedom_text" class="txt" />
                </div>
            </article>
        </div>

        <div class="site-max relative mb-20 s:mb-80">
            <article
                class="big-card relative s:flex overflow-hidden rounded-[6rem] s:rounded-[12rem] radius-fix border-[.5rem] border-black">
                <figure class="relative bg-yellow flex-1 shrink-1 media-fill max-s:h-[26rem]">
                    <img src="/screen-1.jpg" alt="">
                </figure>
                <div
                    class="w-full s:w-[70rem] shrink-0 py-25 pb-50 s:py-95 px-20 s:px-80 bg-white m:order-first m:border-r-[.5rem] border-black">
                    <h3 class="text-18 s:text-32 text-pink font-2 uppercase mb-10 s:mb-25">
                        {{ data.convienience_label }}
                    </h3>
                    <h2 class="text-40 s:text-70 leading-none italic font-bold w-full max-w-[45rem] mb-15 s:mb-40">
                        {{ data.convienience_title }}
                    </h2>
                    <PrismicRichText :field="data.convienience_text" class="txt" />
                    <BaseButton label="early<br>access" class="mt-50" />
                </div>
            </article>
        </div>

        <div ref="creative" class="site-max mb-20 s:mb-80">
            <article
                class="big-card relative flex flex-col s:flex-row bg-purple overflow-hidden rounded-[6rem] s:rounded-[12rem] radius-fix border-[.5rem] border-black">
                <div class="flex flex-col items-center justify-center w-full py-30 s:py-95 px-20 s:px-0">
                    <img src="/noshy-box.svg" class="h-[8.8rem] s:h-[20rem] w-auto mb-40">
                    <h2 class="text-40 s:text-70 leading-none italic font-bold text-center mb-25 s:mb-40">{{
                        data.creative_title }}
                    </h2>
                    <PrismicRichText :field="data.creative_text" class="txt w-full max-w-[65rem] text-center" />
                </div>
                <div class="relative s:absolute s:inset-0 pointer-events-none max-s:h-[30rem] w-full z-3">
                    <img ref="fingers" src="/fingers.svg" class="hidden s:block absolute top-0 left-0 h-full">
                    <img ref="ear" src="/ear.svg" class="hidden s:block absolute top-0 right-0 h-full">
                    <img src="/fingers-mob.svg" class="block s:hidden absolute top-0 left-0 h-full">
                    <img src="/ear-mob.svg" class="block s:hidden absolute top-0 right-0 h-full">
                </div>
            </article>
        </div>

        <div class="relative overflow-hidden bg-black">
            <figure ref="clip" class="image-clip h-[40rem] s:h-screen media-fill relative flex items-center">
                <img :src="data.divider_image.url" alt="">

                <div ref="marquee" class="flex relative z-2 w-full overflow-hidden">
                    <div class="marquee flex">
                        <div v-for="i in 2" :key="i" class="pr-30 s:pr-100">
                            <svg class="min-w-[45rem] max-w-[45rem] s:min-w-[130rem] s:max-w-[130rem] h-auto"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1305 246">
                                <g fill="#FFF" fill-rule="evenodd">
                                    <path
                                        d="M761.984 5.31a38.193 38.193 0 0 0-16.99 3.2c-8.176 3.587-18.086 18.632-21.924 33.305-7.255 27.623-29.777 142.263-30.896 157.222-1.685 22.64 2.313 34.463 13.358 39.432 4.115 1.85 10.043 2.742 13.167 1.967 16.711-4.055 34.926-19.52 43.253-36.685 2.995-6.164 10.266-31.227 22.362-40.293 14.232-10.66 37.794-22.23 51.542-10.91 11.695 9.614 1.817 41.212 1.428 46.49-1.7 22.638 2.298 34.462 13.343 39.431 4.11 1.85 10.037 2.742 13.166 1.967 16.728-4.055 34.943-19.52 43.27-36.685 9.893-20.433 38.001-153.821 35.443-168.223-4.164-23.378-30.182-36.801-52.4-27.018-8.178 3.587-18.087 18.632-21.941 33.305-1.818 6.935-12.197 28.027-24.212 35.25-10.768 6.488-26.861 11.138-37.112 3.841-13.881-9.868-10.917-29.983-13.556-50.496-2.265-17.686-14.414-24.36-31.301-25.1M16.396 234.172C-4.43 224.77-5.774 199.56 14.42 110.163c9.147-40.527 18.737-70.34 26.62-78.173 18.493-29.409 48.387-37.157 71.042 2.025 10.576 14.97 32.31 68.336 42.57 69.532 19.58 2.274 29.682-58.739 55.088-78.949 32.085-26.412 51.707 12.5 47.549 49.05-2.67 22.368-7.207 46.389-12.389 65.728-8.587 32.018-19.755 66.986-24.616 76.993-24.793 37.492-55.754 21.018-62.166.404-11.802-29.712-52.22-79.71-74.907-66.62-31.194 12.632-24.051 101.519-66.814 84.019M541.463 236.935c-23.823-3.805-43.11-18.797-46.201-35.914-2.932-16.305 7.713-25.583 38.508-33.602 22.283-5.809 29.276-11.187 29.276-22.47 0-5.978-2.494-10.564-11.365-20.751-20.325-23.33-24.275-40.665-14.35-62.847 11.11-24.812 32.906-42.312 62.785-50.417 16.535-4.48 30.347-4.41 45.518.186 25.555 7.77 37.73 19.456 37.73 36.25 0 15.23-10.992 22.606-33.743 22.638-9.899.016-13.039 2.29-13.039 9.449 0 1.148 4.905 7.732 10.896 14.64 6.008 6.888 13.785 17.585 17.282 23.766 5.635 10.007 6.349 13.44 6.333 30.945-.037 24.642-5.021 37.056-21.717 53.998-26.088 26.481-69.602 40.24-107.913 34.129M479.376 55.96c30.219 48.812 9.861 118.397-45.465 155.422-55.338 37.009-124.679 27.453-154.914-21.358-30.214-48.796-9.862-118.38 45.476-155.405C379.805-2.406 449.16 7.165 479.376 55.96M1026.34 3.07a38.193 38.193 0 0 0-16.99 3.2c-8.176 3.587-18.07 18.631-21.924 33.299-7.255 27.629-29.761 142.268-30.88 157.228-1.685 22.485 2.265 34.293 13.134 39.31 5.843 3.64 14.313 5.728 26.056 6.552 14.393 1.031 68.318-.67 95.637-4.124 14.51-1.839 30.246-9.837 34.847-17.739 12.532-21.459 3.545-50.177-18.087-57.856-8.662-3.067-69.634 20.768-78.606-1.148-12.35-10.427 30.497-91.108 27.613-129.716-1.327-17.787-13.913-28.267-30.8-29.006" />
                                    <path
                                        d="M1131.936.005c-8.678.186-18.039 4.714-26.733 17.553-23.727 48.137 85.077 93.553 82.956 122.372 5.698 10.931-34.362 54.54-37.406 60.907-6.396 16.575-12.015 40.696 9.489 44.416 15.885 2.344 32.66 1.148 62.864-33.719 31.59-39.516 36.238-48.243 66.766-110.6 26.638-60.046 13.647-95.423-4.909-96.497-30.928-2.662-34.068 43.269-57.192 59.106-28.44 11.505-43.403-19.206-64.437-46.357-4.371-5.66-16.936-17.468-31.398-17.18" />
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div class="marquee flex relative z-2">
                        <div v-for="i in 2" :key="i" class="pr-30 s:pr-100">
                            <svg class="min-w-[45rem] max-w-[45rem] s:min-w-[130rem] s:max-w-[130rem] h-auto"
                                viewBox="0 0 1305 246">
                                <g fill="#FFF" fill-rule="evenodd">
                                    <path
                                        d="M761.984 5.31a38.193 38.193 0 0 0-16.99 3.2c-8.176 3.587-18.086 18.632-21.924 33.305-7.255 27.623-29.777 142.263-30.896 157.222-1.685 22.64 2.313 34.463 13.358 39.432 4.115 1.85 10.043 2.742 13.167 1.967 16.711-4.055 34.926-19.52 43.253-36.685 2.995-6.164 10.266-31.227 22.362-40.293 14.232-10.66 37.794-22.23 51.542-10.91 11.695 9.614 1.817 41.212 1.428 46.49-1.7 22.638 2.298 34.462 13.343 39.431 4.11 1.85 10.037 2.742 13.166 1.967 16.728-4.055 34.943-19.52 43.27-36.685 9.893-20.433 38.001-153.821 35.443-168.223-4.164-23.378-30.182-36.801-52.4-27.018-8.178 3.587-18.087 18.632-21.941 33.305-1.818 6.935-12.197 28.027-24.212 35.25-10.768 6.488-26.861 11.138-37.112 3.841-13.881-9.868-10.917-29.983-13.556-50.496-2.265-17.686-14.414-24.36-31.301-25.1M16.396 234.172C-4.43 224.77-5.774 199.56 14.42 110.163c9.147-40.527 18.737-70.34 26.62-78.173 18.493-29.409 48.387-37.157 71.042 2.025 10.576 14.97 32.31 68.336 42.57 69.532 19.58 2.274 29.682-58.739 55.088-78.949 32.085-26.412 51.707 12.5 47.549 49.05-2.67 22.368-7.207 46.389-12.389 65.728-8.587 32.018-19.755 66.986-24.616 76.993-24.793 37.492-55.754 21.018-62.166.404-11.802-29.712-52.22-79.71-74.907-66.62-31.194 12.632-24.051 101.519-66.814 84.019M541.463 236.935c-23.823-3.805-43.11-18.797-46.201-35.914-2.932-16.305 7.713-25.583 38.508-33.602 22.283-5.809 29.276-11.187 29.276-22.47 0-5.978-2.494-10.564-11.365-20.751-20.325-23.33-24.275-40.665-14.35-62.847 11.11-24.812 32.906-42.312 62.785-50.417 16.535-4.48 30.347-4.41 45.518.186 25.555 7.77 37.73 19.456 37.73 36.25 0 15.23-10.992 22.606-33.743 22.638-9.899.016-13.039 2.29-13.039 9.449 0 1.148 4.905 7.732 10.896 14.64 6.008 6.888 13.785 17.585 17.282 23.766 5.635 10.007 6.349 13.44 6.333 30.945-.037 24.642-5.021 37.056-21.717 53.998-26.088 26.481-69.602 40.24-107.913 34.129M479.376 55.96c30.219 48.812 9.861 118.397-45.465 155.422-55.338 37.009-124.679 27.453-154.914-21.358-30.214-48.796-9.862-118.38 45.476-155.405C379.805-2.406 449.16 7.165 479.376 55.96M1026.34 3.07a38.193 38.193 0 0 0-16.99 3.2c-8.176 3.587-18.07 18.631-21.924 33.299-7.255 27.629-29.761 142.268-30.88 157.228-1.685 22.485 2.265 34.293 13.134 39.31 5.843 3.64 14.313 5.728 26.056 6.552 14.393 1.031 68.318-.67 95.637-4.124 14.51-1.839 30.246-9.837 34.847-17.739 12.532-21.459 3.545-50.177-18.087-57.856-8.662-3.067-69.634 20.768-78.606-1.148-12.35-10.427 30.497-91.108 27.613-129.716-1.327-17.787-13.913-28.267-30.8-29.006" />
                                    <path
                                        d="M1131.936.005c-8.678.186-18.039 4.714-26.733 17.553-23.727 48.137 85.077 93.553 82.956 122.372 5.698 10.931-34.362 54.54-37.406 60.907-6.396 16.575-12.015 40.696 9.489 44.416 15.885 2.344 32.66 1.148 62.864-33.719 31.59-39.516 36.238-48.243 66.766-110.6 26.638-60.046 13.647-95.423-4.909-96.497-30.928-2.662-34.068 43.269-57.192 59.106-28.44 11.505-43.403-19.206-64.437-46.357-4.371-5.66-16.936-17.468-31.398-17.18" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </figure>
        </div>

        <section class="bg-black text-white pb-20 s:pb-125 overflow-hidden">
            <div class="site-max flex flex-col items-center mb-40 s:mb-125">
                <h2 class="text-45 s:text-87 leading-[1.1] text-center mb-20 s:mb-30 px-40 s:px-0">
                    You bring the food<br><strong><i>We bring the rest</i></strong>
                </h2>
                <PrismicRichText :field="data.cards_text" class="txt w-full max-w-[95rem] text-center" />
            </div>
            <div ref="cardsSmall" class="site-max grid grid-cols-1 s:grid-cols-3 gap-20 s:gap-60">
                <article v-for="(item, i) in data.cards" :key="i" ref="cardSmall" class="card-small col-span-1 text-black"
                    :class="[
                        i === 0 && 'bg-yellow',
                        i === 1 && 'bg-pink-light',
                        i === 2 && 'bg-purple'
                    ]">
                    <figure class="relative pt-[45%] media-fill overflow-hidden">
                        <img :src="item.image.url" :alt="item.image.alt">
                    </figure>
                    <div class="px-20 s:px-50 pt-20 s:pt-50 pb-40 s:pb-75 border-t-4 border-current">
                        <h3 class="text-23 s:text-42 leading-[1.1] mb-15 s:mb-30 font-bold">{{ item.title }}</h3>
                        <PrismicRichText :field="item.text" class="txt text-15 s:text-22" />
                    </div>
                </article>
            </div>
            <TheForm class="mt-20 s:mt-125" />
        </section>

    </article>
</template>

<script>
import gsap from 'gsap'

import Page from '~/mixins/Page'
import SplitText from '~/assets/js/vendors/SplitText'

const rive = require("@rive-app/canvas")

import { qs } from '~/assets/js/utils/common'

export default {
    mixins: [Page],
    async asyncData({ $prismic, params, error }) {
        const document = await $prismic.api.getSingle('homepage')

        if (document) {
            return { ...document }
        } else {
            error({ statusCode: 404, message: 'Page not found' })
        }
    },

    async mounted() {
        await this.$nextTick()

        this.$nextTick(() => {
            // Pan
            this.pan = new rive.Rive({
                src: '/frying.riv',
                canvas: this.$refs.pan,
                artboard: 'frying-pan',
                stateMachines: 'frying-loop',
                autoplay: true,
            })

            this.st = gsap.timeline({
                defaults: {
                    ease: 'none',
                    force3D: true
                },
                scrollTrigger: {
                    trigger: this.$refs.clip,
                    start: () => this.hasMouse ? 'top top' : 'top bottom',
                    end: () => this.hasMouse ? `+=${this.$r.wh * 1.5}` : 'center center',
                    pin: this.hasMouse,
                    scrub: 0.25
                }
            })
                .to(this.$refs.clip, {
                    '--clip-x': () => this.isSmall ? '2rem' : '12.5%',
                    '--clip-y': () => this.isSmall ? '3rem' : '15rem',
                    '--round': () => this.isSmall ? '6rem' : '12rem',
                })

            const introSplit = new SplitText(qs('h2', this.$refs.intro), { type: 'words' }).words

            this.introSt = gsap.timeline({
                scrollTrigger: {
                    trigger: this.$refs.intro,
                    start: 'top center',
                    once: true
                }
            })
                .from([this.$refs.introTitle, ...introSplit], {
                    yPercent: 100,
                    alpha: 0,
                    duration: 1.25,
                    stagger: 0.05,
                    ease: 'elastic.out(1, .75)'
                })

            const heroSplit = new SplitText(this.$refs.heroTitle, { type: 'words, chars' }).chars

            this.heroSt = gsap.timeline({
                scrollTrigger: {
                    trigger: this.$refs.hero,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: .3
                },
                defaults: {
                    duration: 1,
                    ease: 'power1.inOut'
                }
            })
                .to(this.$refs.pattern, {
                    yPercent: -100,
                    duration: .75,
                })
                .from(heroSplit, {
                    yPercent: 100,
                    alpha: 0,
                    duration: .65,
                    ease: 'back.out',
                    stagger: {
                        each: 0.025,
                        from: 'center'
                    }
                }, .35)

            this.creativeSt = gsap.timeline({
                scrollTrigger: {
                    trigger: this.$refs.creative,
                    end: 'center center',
                    scrub: .3
                },
                defaults: {
                    duration: 1,
                    ease: 'power1'
                }
            })
                .fromTo([this.$refs.fingers, this.$refs.ear], {
                    xPercent: gsap.utils.wrap([-100, 100])
                }, {
                    xPercent: 0,
                })

            !this.isSmall && (this.cardsSmallSt = gsap.timeline({
                scrollTrigger: {
                    trigger: this.$refs.cardsSmall,
                    start: 'top center',
                    once: true
                },
                defaults: {
                    duration: 1.5,
                    ease: 'elastic.out(1, .75)'
                }
            })
                .from(this.$refs.cardSmall[0], {
                    xPercent: -150,
                    alpha: 0,
                }, .1)
                .from(this.$refs.cardSmall[1], {
                    yPercent: 50,
                    alpha: 0,
                }, 0)
                .from(this.$refs.cardSmall[2], {
                    xPercent: 150,
                    alpha: 0,
                }, .1))
        })
    },

    computed: {

        hasMouse() {
            return this.$store.state.app.features.hasMouse
        },

        isSmall() {
            return this.$store.state.app.bounds.small
        }
    },

    methods: {

        aspect({ width, height }) {
            return `aspect-ratio: ${width}/${height};`
        }
    }
}
</script>

<style lang="scss">
.big-card {

    @screen s {
        aspect-ratio: 1681/771;
    }
}

.pattern-offset {
    width: calc(100% + 2px);
}

.card-small {
    --round: 6rem;

    @screen s {
        --round: 9rem;
    }

    clip-path: inset(0 0 round var(--round));
}

.image-clip {
    --clip-x: 0%;
    --clip-y: 0rem;
    --round: 0rem;

    clip-path: inset(var(--clip-y) var(--clip-x) round var(--round));
}

.marquee {
    animation: marquee 25s linear infinite;
}

.perspective {
    perspective: 1000px;
}

@keyframes marquee {
    0% {
        transform: translate3d(0, 0, 0);
    }

    100% {
        transform: translate3d(-100%, 0, 0);
    }
}
</style>