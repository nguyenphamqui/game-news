<template>
  <div class="content-container">
    <div class="max-w-6xl mx-auto">
      <section class="feature-wrapper w-full overflow-hidden grid gap-3 p-4 border-2 rounded-lg"
        :class="articleList.length > 3 ? 'grid-cols-7' : 'grid-cols-6'">
        <template v-if="articleList">
          <Article v-for="(article, index) in articleList" :key="index" :article="article" :index="index"
            :amount="getAmount" />
        </template>
        <template v-else>
          <p>No data</p>
        </template>
      </section>
      <section class="content-wrapper grid grid-cols-4 gap-4">
        <section class="left-side col-span-3 mt-5">
          <SectionPosts :title="'Latest'" />
        </section>
        <section class="right-side px-3 grid gap-3 mt-5">
          <Section :title="'Popular'"/>
          <Section :title="'Trending'"/>
        </section>
      </section>
    </div>

  </div>
</template>
<script setup lang="ts">
import * as CONST from '@/constant/menu'
const articleList = CONST.posts
const getAmount = computed(() => articleList?.length)
</script>