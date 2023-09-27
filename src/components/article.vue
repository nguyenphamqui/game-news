<template>
  <template v-if="articleList && articleList.length > 0">
    <template v-if="type === 'feature'">
      <article class="relative overflow-hidden mt-3 lg:mt-0"
        :class="articleList.length > 3 && index === 1 ? 'col-span-3 row-span-2' : 'col-span-2'"
        v-for="(article, index) in $limitPosts(articleList,limitLatest)" :key="index">
        <NuxtLink :href="article.slugname" class="transition-all duration-500">
          <ImageCustom :thumbnail="$getThumbnail(article.contents)" :title="article.title" />
          <div class="absolute left-2 bottom-2">
            <h3 class=" text-white text-xs bg-orange-500 inline-block py-1 px-2">{{ $getCategoryName(article.categoryType)
            }}
            </h3>
            <h2 class=" text-white hover:underline">{{ article?.title }}</h2>
          </div>
        </NuxtLink>
      </article>
    </template>
    <template v-else>
      <h2
        class=" flex mb-5 uppercase before:contents-[''] before:relative before:top-1 before:mr-1 before:w-6 before:h-6 before:bg-orange-400 before:inline-block font-bold text-sm">
        {{ title }}
      </h2>
      <article
        class="grid grid-cols-[38%,1fr] grid-flow-col gap-3 mt-3 border-b-[#e8e9f3] border-solid border-b-[1px] pb-6 mb-6"
        v-for="(article, index) in $limitPosts(articleList, limitLatest)" :key="index">
        <NuxtLink :href="article.slugname">
          <ImageCustom :thumbnail="$getThumbnail(article.contents)" />
        </NuxtLink>
        <div class="grid content-start">
          <span class="category-name text-orange-500 flex text-xs lg:text-sm font-bold mb-2 uppercase">{{
            $getCategoryName(article.categoryType) }}</span>
          <h3 class="lg:text-2xl md:text-xl sm:text-sm font-bold mb-3">
            <NuxtLink :href="article.slugname">{{ article.title }}</NuxtLink>
          </h3>
          <p class="desc mb-4 text-sm">{{ article.title }}
          </p>
          <p class="flex items-center justify-start gap-2 text-xs">
            <span class="text-red-600 font-bold text-xs">By <span class="font-bold">{{ article.author }}</span></span>
            <time class="text-xs text-[#777]">27/09/2023 11:45</time>
          </p>
        </div>
      </article>
      <button
        class="uppercase border border-solid rounded px-3 py-2 text-xs font-semibold hover:bg-orange-200 transition-colors duration-500"
        @click="loadMore()"
        v-if="!isEndList">Load more</button>
    </template>
  </template>
  <template v-else>
    <p>No data</p>
  </template>
</template>

<script setup lang="ts">
const props = defineProps(['articleList', 'type', 'title'])
const limitLatest = ref(5)
const limitFeature = ref(5)
const { $getThumbnail, $getCategoryName, $limitPosts } = useNuxtApp()
const loadMore = () => {
  limitLatest.value += 5
}
const isEndList = computed(()=>{
  return props.articleList.length === $limitPosts(props.articleList, limitLatest.value).length
})
</script>

<style scoped></style>