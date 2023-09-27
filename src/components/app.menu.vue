<template>
  <div>
    <nav
      class="absolute top-0 right-0 px-4 py-4  bg-transparent whitespace-nowrap gap-5 lg:relative lg:flex lg:justify-end lg:items-center lg:bg-white"
      aria-label="Site menu">
      <div class="lg:hidden">
        <button class="navbar-burger flex items-center text-blue-600 p-3" @click="isOpenMenu = !isOpenMenu">
          <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <ul
        class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
        <li v-for="(menu, index) in CONST.menu" :key="index">
          <NuxtLink :href="menu.url" class="text-sm">{{ menu.title }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <!-- Menu mobile -->
    <div class="navbar-menu relative z-50 duration-500">
      <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" :class="!isOpenMenu ? 'hidden' : ''"></div>
      <nav
        class="fixed top-0 left-0 bottom-0 flex flex-col max-w-sm py-6 bg-white border-r overflow-y-auto transition-all duration-500"
        aria-label="Site menu" :class="!isOpenMenu ? 'w-0 px-0 -translate-x-full' : 'w-5/6 px-6 -transform-none'">
        <div class="flex items-center mb-8">
          <NuxtLink class="mr-auto text-3xl font-bold leading-none" href="/">
            <img src="/img/logo-h.png" alt="logo" class="w-[150px] mx-auto" />
          </NuxtLink>
          <ButtonClose @isOpenMenu="onCloseMenu" />
        </div>
        <div>
          <ul>
            <li v-for="(menu, index) in CONST.menu" :key="index">
              <NuxtLink :href="menu.url"
                class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">{{
                  menu.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="mt-auto">
          <p class="my-4 text-xs text-center text-gray-400">
            <span>Copyright © 2021</span>
          </p>
        </div>
      </nav>
    </div>
    <!-- Menu mobile -->
  </div>
</template>

<script setup lang="ts">
import * as CONST from '@/constant/menu'
const isOpenMenu = ref(false)
const onCloseMenu = (data: boolean) => {
  isOpenMenu.value = data
}
</script>

<style scoped></style>