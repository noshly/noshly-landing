<template>
    <header class="sh fixed top-0 left-0 w-full z-[1000] opacity-0 js-sh">
        <div class="site-max flex items-center justify-center s:justify-between pt-20 s:pt-40">
            <button type="button" class="hidden s:block js-i-down">
                <img src="/noshy-logo.svg" alt="Noshy" class="w-auto h-[5.7rem]">
            </button>
            <nav class="hidden s:flex items-center font-2">
                <BaseButton label="early<br>access" class="ml-55 js-i-down" />
            </nav>
            <button type="button" @click="toggle" class="flex s:hidden js-i-down"
                :class="$store.state.app.flags.menu && 'is-active'">
                <img src="/noshy-logo.svg" alt="Noshy" class="relative inline-flex w-auto h-[4rem] z-2" aria-hidden="true">
                <div
                    class="burg hidden flex-col items-center justify-center -ml-2 pl-2 bg-pink w-[4rem] h-[4rem] border-t-[.35rem] border-b-[.35rem] border-r-[.35rem] border-black">
                    <span class="burg__line"></span>
                    <span class="burg__line"></span>
                </div>
            </button>
        </div>
    </header>
</template>

<script>
export default {
    methods: {

        toggle() {
            return

            const { menu } = this.$store.state.app.flags
            const body = document.body

            this.$store.commit('app/SET_MENU', !menu)

            !menu
                ? body.classList.add('overflow-hidden')
                : body.classList.remove('overflow-hidden')
        }
    }
}
</script>

<style lang="scss" scoped>
.burg {

    &__line {
        width: 2rem;
        height: 2px;
        min-height: 1px;
        background-color: theme('colors.black.DEFAULT');
        transition: transform .75s $ExpoEaseOut;

        &:first-child {
            margin-bottom: 0.3rem;
        }

        &:last-child {
            margin-top: 0.3rem;
        }

        .is-active & {

            &:first-child {
                transform: translateY(0.3rem) rotate(45deg) translateY(1px);
            }

            &:last-child {
                transform: translateY(-0.3rem) rotate(-45deg) translateY(-1px);
            }
        }
    }
}
</style>