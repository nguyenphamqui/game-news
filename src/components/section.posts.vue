<template>
  <h2
    class=" flex mb-5 uppercase before:contents-[''] before:relative before:top-1 before:mr-1 before:w-6 before:h-6 before:bg-orange-400 before:inline-block font-bold text-sm">
    {{ title }}
  </h2>
  <div>
    <Post v-for="(post, index) in posts" :key="index" :post="post"/>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title?: string | ''
}
const props = defineProps(['title'])
const posts = [
  {}, {}, {}
]
</script>

<style scoped></style>