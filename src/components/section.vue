<template>
  <div :class="'section-' + title">
    <h2
      class=" flex mb-5 uppercase before:contents-[''] before:relative before:top-1 before:mr-1 before:w-6 before:h-6 before:bg-orange-400 before:inline-block font-bold text-sm">
      {{ title }}
    </h2>
    <div class="content">
      <article v-for="(post, index) in posts" :key="index" class="mb-6 grid"
        :class="checkStyle(style) ? 'grid-flow-col grid-cols-[100px,1fr] gap-1' : ''">
        <NuxtLink href="#" class="mb-2 block">
          <figure>
            <picture>
              <source media="(min-width: 1024px)" sizes="620px"
                srcset="https://static0.gamerantimages.com/wordpress/wp-content/uploads/wm/2023/09/zelda-tears-of-the-kingdom-free-items.jpg?q=50&amp;fit=crop&amp;w=620&amp;h=320&amp;dpr=1.5">
              <source media="(min-width: 768px)" sizes="564px"
                srcset="https://static0.gamerantimages.com/wordpress/wp-content/uploads/wm/2023/09/zelda-tears-of-the-kingdom-free-items.jpg?q=50&amp;fit=crop&amp;w=564&amp;h=300&amp;dpr=1.5">
              <source media="(min-width: 481px)" sizes="720px"
                srcset="https://static0.gamerantimages.com/wordpress/wp-content/uploads/wm/2023/09/zelda-tears-of-the-kingdom-free-items.jpg?q=50&amp;fit=crop&amp;w=720&amp;h=400&amp;dpr=1.5">
              <source media="(min-width: 0px)" sizes="720px"
                srcset="https://static0.gamerantimages.com/wordpress/wp-content/uploads/wm/2023/09/zelda-tears-of-the-kingdom-free-items.jpg?q=50&amp;fit=crop&amp;w=720&amp;h=400&amp;dpr=1.5">
              <img width="1800" height="900" alt="zelda tears of the kingdom free items 1"
                class="block h-auto max-w-full lazyloaded">
            </picture>
          </figure>
        </NuxtLink>
        <NuxtLink href="#">
          <h5 class="text-md font-bold" :class="checkStyle(style) ? 'text-xs' : ''">Zelda: Tears of the Kingdom Giving Away a
            New Round of
            Free Items
          </h5>
        </NuxtLink>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['title', 'style'])
console.log(props.title === 'Trending')
const posts = [{}, {}, {}]
const checkStyle = (style: string) => {
  return style === 'horizontal'
}
</script>

<style scoped></style>