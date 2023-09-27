<template>
    <nav class="socialite-widget" :data-contexturl="initData.url">
        <ul class="socialite-widget-ul">
            <li class="socialite-widget-item">
                <a data-component-tracking-label="Facebook"
                    :href="`https://www.facebook.com/sharer/sharer.php?u=${initData.url}`"
                    data-platform="facebook" target="_blank" class="facebook socialite" data-action="share"
                    aria-label="Share this page on Facebook" data-component-tracked="4">
                    <svg class="icon-svg" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" fill="#3b5998" r="12"></circle>
                        <path
                            d="m13.079 19h-2.9v-7h-1.441v-2.408h1.442v-1.456c0-1.96.813-3.136 3.136-3.136h1.933v2.408h-1.2c-.91 0-.965.35-.965.966v1.218h2.183l-.257 2.408h-1.931z"
                            fill="#fff"></path>
                    </svg>
                </a>
            </li>
            <li class="socialite-widget-item">
                <a data-component-tracking-label="Twitter"
                    :href="`https://twitter.com/intent/tweet?text=${initData.title}&url=${initData.url}`"
                    data-platform="twitter" target="_blank" class="twitter socialite" data-action="tweet"
                    aria-label=" Share this page on Twitter" data-component-tracked="4">
                    <svg class="icon-svg" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" fill="#73b4ff" r="12"></circle>
                        <path
                            d="m19.5 7.425a6.228 6.228 0 0 1 -1.77.465 2.979 2.979 0 0 0 1.35-1.665 6.234 6.234 0 0 1 -1.95.735 3.088 3.088 0 0 0 -5.325 2.07 3.021 3.021 0 0 0 .075.69 8.789 8.789 0 0 1 -6.33-3.165 2.985 2.985 0 0 0 -.42 1.53 3.016 3.016 0 0 0 1.37 2.52 3.082 3.082 0 0 1 -1.394-.39v.045a3.049 3.049 0 0 0 2.474 2.97 3.418 3.418 0 0 1 -1.4.06 3.076 3.076 0 0 0 2.881 2.1 6.233 6.233 0 0 1 -4.561 1.245 8.811 8.811 0 0 0 4.725 1.365 8.622 8.622 0 0 0 8.745-8.625v-.39a6.231 6.231 0 0 0 1.53-1.56z"
                            fill="#fff"></path>
                    </svg>
                </a>
            </li>
            <li class="socialite-widget-item mobile-only">
                <a data-component-tracking-label="Whatsapp"
                    :href="`whatsapp://send?text=${initData.title}${initData.url}?fwa`"
                    data-platform="whatsapp" class="whatsapp socialite" data-action="message"
                    aria-label="Share this page on WhatsApp" data-component-tracked="4">
                    <svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                        <path
                            d="M509 0A489 489 0 0 0 18 487a482 482 0 0 0 71 252L0 1000l272-86a493 493 0 0 0 237 60c271 0 491-218 491-487S780 0 509 0zm0 893a409 409 0 0 1-225-67l-157 49 51-150a401 401 0 0 1-78-238 408 408 0 0 1 818 0c0 224-184 406-409 406zm230-295a2222 2222 0 0 0-84-44c-11-4-20-7-28 5a748 748 0 0 1-42 48c-7 8-15 8-27 2-12-7-52-22-99-66a372 372 0 0 1-66-88c-7-13 0-20 7-26l19-21c7-7 9-12 13-20 5-8 3-15 0-22l-35-94c-9-25-20-21-27-21l-24-2c-8 0-22 2-34 14s-46 41-48 102 40 122 46 131c6 8 82 141 207 195 126 55 126 38 149 37 24-1 76-27 87-56 12-29 13-54 10-59s-11-9-24-15z">
                        </path>
                    </svg>
                </a>
            </li>
            <li class="socialite-widget-item">
                <a data-component-tracking-label="Pinterest"
                    :href="`https://pinterest.com/pin/create/button/?url=${initData.url}&media=${initData.media}`"
                    data-platform="pinterest" target="_blank" class="pinterest socialite" data-action="pin"
                    aria-label="Share this page on Pinterest" data-component-tracked="4">
                    <svg class="icon-svg" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" fill="#bd081c" r="12"></circle>
                        <path
                            d="m12.336 5c-3.822 0-5.754 2.744-5.754 5.025a3.065 3.065 0 0 0 1.652 3.066.279.279 0 0 0 .407-.2l.154-.644a.373.373 0 0 0 -.113-.448 2.341 2.341 0 0 1 -.532-1.582 3.812 3.812 0 0 1 3.961-3.849 3.009 3.009 0 0 1 3.346 3.08c0 2.323-1.022 4.283-2.547 4.283a1.253 1.253 0 0 1 -1.273-1.554 17.616 17.616 0 0 0 .713-2.856 1.081 1.081 0 0 0 -1.092-1.2c-.854 0-1.553.881-1.553 2.071a2.954 2.954 0 0 0 .266 1.274l-1.038 4.383a9.389 9.389 0 0 0 -.027 3.065.109.109 0 0 0 .2.042 8.737 8.737 0 0 0 1.457-2.631l.561-2.212a2.3 2.3 0 0 0 1.959 1.008c2.59 0 4.34-2.366 4.34-5.516a4.8 4.8 0 0 0 -5.087-4.605z"
                            fill="#fff"></path>
                    </svg>
                </a>
            </li>
            <li class="socialite-widget-item">
                <a data-component-tracking-label="Flipboard"
                    :href="`https://share.flipboard.com/bookmarklet/popout?title=${initData.title}&url=${initData.url}`"
                    data-platform="flipboard" target="_blank" class="flipboard socialite" data-action="flip"
                    aria-label="Share this page on Flipboard" data-component-tracked="4">
                    <svg class="icon-svg" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m24 12a12 12 0 1 1 -12-12 12 12 0 0 1 12 12z" fill="#f52828"></path>
                        <path d="m19 11h-4v4h-4v4h-4v-12h12z" fill="#fff"></path>
                    </svg>
                </a>
            </li>
            <li class="socialite-widget-item">
                <a data-component-tracking-label="Email"
                    :href="`mailto:?subject=I%20found%20this%20webpage&amp;body=Hi,%20I%20found%20this%20webpage%20and%20thought%20you%20might%20like%20it%20${initData.url}`"
                    class="email socialite" data-platform="email" aria-label="Share this page on your Email"
                    data-component-tracked="4">
                    <SVGIcon class="cicrle-mail-icon" :size="24" path="mdiEmailOutline" color="#fff"/>
                </a>
                
            </li>
        </ul>
    </nav>
</template>
  
<script setup lang="ts">
interface Props {
    url: string,
    title: string,
    media: string,
}
const props = withDefaults(defineProps<Props>(), {});
const initData = computed(() => {
    let result = { ...props }
    return result
})
</script>
<style src="./page.scss" lang="scss" scoped />
