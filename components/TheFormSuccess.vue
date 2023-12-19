<template>
    <div class="">
        <div class="-mt-100 flex flex-col items-center">
            <canvas ref="pan" width="400" height="800" class="relative w-[25rem] h-auto z-5"></canvas>
            <div class="-mt-125">
                <h3 class="text-40 s:text-70 leading-none italic font-bold mb-10 text-center">Thanks!</h3>
                <p class="text-center">We will be in touch</p>
            </div>
        </div>
    </div>
</template>

<script>
const rive = require("@rive-app/canvas")

export default {

    mounted() {
        this.pan = new rive.Rive({
            src: '/frying.riv',
            canvas: this.$refs.pan,
            artboard: 'frying-pan',
            stateMachines: 'frying-loop',
            autoplay: true,
        })
    },

    destroyed() {
        this.pan.cleanup()
    }
}
</script>
