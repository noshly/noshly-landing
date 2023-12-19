<template>
    <aside class="menu-mob fixed inset-0 z-[999] overflow-hidden">
        <nav class="absolute inset-0 flex flex-col items-center justify-center px-20 bg-black js-menu-mask">
            <button type="button" @click="click" target="_blank" rel="noreferrer"
                class="h-[7.9rem] bg-yellow rounded-full inline-flex items-center justify-center font-2 uppercase text-22 px-20 mb-50 js-menu-item">
                Early access
            </button>
            <a href="" target="_blank" rel="noreferrer"
                class="relative text-yellow font-2 uppercase text-26 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[.15em] after:bg-yellow pb-10 mb-20 js-menu-item">
                For chefs
            </a>
            <a href="" target="_blank" rel="noreferrer"
                class="relative text-yellow font-2 uppercase text-26 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[.15em] after:bg-yellow pb-10 js-menu-item">
                For eaters
            </a>
            <div class="flex items-center justify-center gap-x-20 mt-30 js-menu-item">
                <a href="" target="_blank" rel="noreferrer" class="inline-flex">
                    <svg class="w-[3.3rem] h-auto" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 33.776 33.776">
                        <defs>
                            <path id="a" d="M0 0h33.776v33.776H0z" />
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                            <path fill="#FDD83E"
                                d="M15.446 12.896a5.14 5.14 0 0 0-5.133 5.15c.003 2.833 2.328 5.155 5.151 5.146 2.822-.009 5.155-2.35 5.147-5.163-.01-2.831-2.33-5.136-5.165-5.133" />
                            <g>
                                <mask id="b" fill="#fff">
                                    <use xlink:href="#a" />
                                </mask>
                                <path fill="#FDD83E"
                                    d="M23.685 11.649a1.847 1.847 0 0 1-1.835-1.89 1.833 1.833 0 0 1 1.897-1.821 1.849 1.849 0 0 1 1.816 1.857 1.863 1.863 0 0 1-1.878 1.854m-8.25 14.337c-4.385-.015-7.919-3.572-7.913-7.968a7.91 7.91 0 0 1 7.953-7.914c4.384.006 7.942 3.575 7.928 7.953-.014 4.378-3.597 7.943-7.967 7.929M30.839 12.6c-.089-1.263-.148-2.554-.459-3.771-.874-3.42-3.602-5.668-7.225-6.028a46.218 46.218 0 0 0-4.529-.203c-3.266-.002-6.532.012-9.795.106-2.502.07-4.761.828-6.508 2.75C.812 7.116.257 9.135.11 11.313.075 11.84.036 12.37 0 12.899v10.317c.095 1.004.122 2.02.293 3.01.715 4.125 3.602 6.768 7.78 7.086 1.725.132 3.46.113 5.192.168.22.007.441.034.662.052h2.992c1.08-.027 2.16-.02 3.237-.09 1.384-.088 2.795-.096 4.14-.387 3.487-.75 5.85-3.325 6.32-6.881.221-1.677.195-3.388.279-5.083.024-.53.036-1.06.054-1.59v-2.99c-.032-1.305-.02-2.61-.11-3.911"
                                    mask="url(#b)" />
                            </g>
                        </g>
                    </svg>
                </a>
                <a href="" target="_blank" rel="noreferrer" class="inline-flex">
                    <svg class="w-[3.3rem] h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.647 26.118">
                        <path fill="#FDD83E" fill-rule="evenodd"
                            d="M6.048 15.622c-2.99-.85-5.058-3.487-4.96-6.392.906.397 1.817.712 2.908.777C1.06 7.524.365 4.641 2.008 1.187 3.203 2.52 4.425 3.675 5.829 4.644c2.915 2.012 6.164 3.12 9.715 3.443.42.04.496-.114.429-.463-.632-3.316 1.73-6.97 5.678-7.541 2.095-.304 3.976.228 5.555 1.613.354.309.647.366 1.088.253 1.208-.309 2.35-.767 3.618-1.416-.52 1.585-1.478 2.626-2.82 3.545 1.303-.079 2.394-.485 3.555-.857-.018.333-.231.5-.381.688-.69.867-1.476 1.65-2.384 2.298-.327.234-.4.483-.4.85 0 5.508-2.02 10.21-6.077 14.06-2.997 2.843-6.633 4.406-10.788 4.863-4.223.464-8.211-.235-11.93-2.266A3.979 3.979 0 0 1 0 23.255c3.57.208 6.804-.632 9.765-2.8-3.135-.26-5.159-1.785-6.34-4.579.984.121 1.866.127 2.74-.04.107-.148-.046-.16-.117-.214" />
                    </svg>
                </a>
            </div>
        </nav>
    </aside>
</template>

<script>
import gsap from 'gsap'

export default {

    methods: {

        click() {
            this.$store.commit('app/SET_MENU', false)

            document.body.classList.remove('overflow-hidden')

            gsap.to(window, {
                scrollTo: '#early-access',
                duration: 1.5,
                ease: 'power3.inOut'
            })
        }
    }
}
</script>

<style lang="scss">
.menu-mob {
    overscroll-behavior: none;
}
</style>