<template>
  <figure class="w-full h-full">
    <picture>
      <source :srcset="thumbnail">
      <img :alt="title" class="w-full h-full object-cover">
    </picture>
  </figure>
</template>

<script setup lang="ts">
const props = defineProps(['thumbnail', 'title'])

</script>

<style scoped></style>