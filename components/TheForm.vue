<template>
    <div id="early-access" class="site-max relative text-black">
        <article class="relative s:flex overflow-hidden rounded-[6rem] s:rounded-[12rem] radius-fix">
            <figure class="relative bg-pink-light flex-1 shrink-1 media-fill max-s:h-[26rem]">
                <img src="/form-image.jpg" alt="">
            </figure>
            <div
                class="relative w-full s:w-[100rem] shrink-0 py-25 pb-50 s:py-70 px-20 s:pl-70 s:pr-175 bg-white m:border-l-[.5rem] border-black overflow-hidden">
                <img src="/tongue.svg" alt=""
                    class="absolute top-[2rem] s:top-[4.5rem] right-[-1.5rem] w-[6.5rem] s:w-[15rem] h-auto z-2">
                <h3 class="text-40 s:text-70 leading-none w-full mb-15 s:mb-40">
                    Bring your <strong class="italic">vision to life</strong> with Noshly.
                </h3>
                <div class="txt">
                    <p>
                        Noshly is ideal way to host culinary pop-ups. Our platform provides chefs with essential tools they
                        need to host and manage successful pop-up events. With Noshly, chefs finally have the support to
                        create and grow their concepts on thier terms.
                    </p>
                </div>
                <div class="relative">
                    <form ref="form" @submit.prevent="submit" class="flex flex-col gap-y-20 mt-50" name="early-access"
                        method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="early-access">
                        <input type="text" name="concept" placeholder="Concept name"
                            class="h-[7.5rem] px-35 py-20 flex items-center w-full rounded-full">
                        <input type="text" name="chef-name" placeholder="Chef's full name"
                            class="h-[7.5rem] px-35 py-20 flex items-center w-full rounded-full">
                        <input type="email" name="email" placeholder="Email"
                            class="h-[7.5rem] px-35 py-20 flex items-center w-full rounded-full" required>
                        <input type="tel" name="phone" placeholder="Phone number"
                            class="h-[7.5rem] px-35 py-20 flex items-center w-full rounded-full" required>
                        <div class="flex justify-between">
                            <SubmitButton label="early<br>access" class="mt-20 s:mt-50 order-1" type="submit" />
                        </div>
                    </form>
                    <transition :css="false" @enter="sent">
                        <TheFormSuccess v-if="success"
                            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </transition>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
import gsap from 'gsap'

export default {
    data() {
        return {
            success: false
        }
    },

    methods: {

        submit(e) {
            const myForm = e.target;
            const formData = new FormData(myForm)

            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString(),
            })
                .then(() => {
                    this.success = true
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        sent(el, done) {
            done()

            gsap.timeline()
                .to(this.$refs.form, {
                    autoAlpha: 0,
                    duration: .35,
                    ease: 'power1'
                })
                .from(el, {
                    alpha: 0,
                    duration: .35,
                    ease: 'power1'
                })
        }
    }
}
</script>

<style lang="scss" scoped>
form {

    input {
        font-size: 1.8rem;
        font-weight: bold;
        border: .65rem solid rgba(#D8D8D8, .55);
        transition: border-color .25s ease-out;
        text-transform: capitalize;

        &:focus {
            border-color: #D8D8D8;
        }
    }
}
</style>