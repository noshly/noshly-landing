// Selectors
export const qs = (s, o = document) => o.querySelector(s)
export const qsa = (s, o = document) => [...o.querySelectorAll(s)]

// Get rects
export const rect = (el) => el.getBoundingClientRect()

// Randomize
export const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

// Preload vid
export const preload = (el, cb) => {
    if (el.readyState >= 2) {
        cb()
    } else {
        el.addEventListener('canplay', cb, { once: true })
        el.addEventListener('error', cb, { once: true })
    }
}