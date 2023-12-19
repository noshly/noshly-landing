<template>
    <figure v-if="image" :class="[contain ? 'media-contain' : 'media-fill', lazy && 'lazy']"
        class="relative w-full overflow-hidden">
        <div v-if="aspect && !customAspect" :style="`padding-top: ${(image.height / image.width) * 100}%;`"></div>
        <div v-if="customAspect" :style="`padding-top: ${customAspect}%`"></div>
        <picture ref="picture" class="absolute inset-0">
            <source v-if="image.webp" type="image/webp" :srcset="image.webp">
            <source type="image/jpg" :srcset="image.jpeg">
            <img ref="image" :src="image.src || image.jpeg" :loading="lazy ? 'lazy' : ''" decoding="async" draggable="false"
                :width="image.width" :height="image.height" :alt="image.alt ? image.alt : ''"
                :class="[loaded && 'is-loaded']" @load="loaded = true">
        </picture>
    </figure>
</template>

<style lang="scss" scoped>
.lazy {

    img {
        opacity: 0;

        &.is-loaded {
            opacity: 1;
            transition: opacity .5s $Power1EaseOut;
        }
    }
}
</style>

<script>
export default {
    props: {
        image: {
            type: Object,
            default: () => {
                return {
                    src: '',
                    width: 200,
                    height: 100
                }
            }
        },
        lazy: {
            type: Boolean,
            default: () => true
        },
        aspect: {
            type: Boolean,
            default: () => true
        },
        customAspect: {
            type: Number,
            default: () => null
        },
        contain: {
            type: Boolean,
            default: () => false
        },
        background: {
            type: Boolean,
            default: () => false
        },
    },

    data() {
        return {
            loaded: false
        }
    },
}
</script>
