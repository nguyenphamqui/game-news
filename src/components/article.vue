<template>
  <article class="relative overflow-hidden" :class="amount > 3 && index === 1 ? 'col-span-3 row-span-2' : 'col-span-2'">
    <NuxtLink href="#" class="transition-all duration-500">
      <figure class="w-full h-full">
        <picture>
          <source media="(min-width: 1024px)" sizes="535px"
            srcset="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/dbd-8.jpg?q=50&amp;fit=crop&amp;w=535&amp;h=442&amp;dpr=1.5">
          <source media="(min-width: 768px)" sizes="943px"
            srcset="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/dbd-8.jpg?q=50&amp;fit=crop&amp;w=943&amp;h=525&amp;dpr=1.5">
          <source media="(min-width: 481px)" sizes="737px"
            srcset="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/dbd-8.jpg?q=50&amp;fit=crop&amp;w=737&amp;h=450&amp;dpr=1.5">
          <source media="(min-width: 0px)" sizes="450px"
            srcset="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/dbd-8.jpg?q=50&amp;fit=crop&amp;w=450&amp;h=300&amp;dpr=1.5">
          <img
            src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Flowers" class="w-full h-full object-cover">
        </picture>
      </figure>
      <div class="absolute left-2 bottom-2">
        <h3 class=" text-white text-xs hover:underline">Category name</h3>
        <h2 class=" text-white hover:underline">{{ article?.title }}</h2>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
const props = defineProps(['article', 'index', 'amount'])
</script>

<style scoped></style>