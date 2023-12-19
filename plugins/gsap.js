import gsap from 'gsap'
import CustomEase from 'gsap/CustomEase'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import Flip from 'gsap/Flip'

gsap.registerPlugin(CustomEase, Flip, ScrollToPlugin)

gsap.config({
    defaults: {
        ease: 'none'
    }
})

CustomEase.create("snappy", "M0,0 C0.094,0.026 0.124,0.127 0.157,0.29 0.197,0.486 0.254,0.8 0.348,0.884 0.42,0.949 0.374,1 1,1")