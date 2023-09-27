<template>
  <article class="relative overflow-hidden" :class="amount > 3 && index === 1 ? 'col-span-3 row-span-2' : 'col-span-2'">
    <NuxtLink href="#" class="transition-all duration-500">
      <figure class="w-full h-full">
        <picture>
          <source media="(min-width:650px)"
            srcset="https://images.unsplash.com/photo-1606481021733-5e269f7d87f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80">
          <source media="(min-width:465px)"
            srcset="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80">
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