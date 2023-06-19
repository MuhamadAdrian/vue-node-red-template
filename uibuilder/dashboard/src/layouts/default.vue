<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import { VAppBar, VAppShell, VBtn, VText } from '@morpheme/ui'

import { Menu01Icon } from '@morphemeicons/vue/untitled'

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('md') // only smaller than lg
const isAsideOpen = ref(true)
const isHovered = ref(false)

watchEffect(() => {
  isAsideOpen.value = !isMobile.value
})

function onMenuClick() {
  if (isMobile.value)
    isAsideOpen.value = false
}

// const contentClass = computed(() => {
//   if (isAsideOpen.value)
//     return 'bg-slate-100 md:!w-[calc(100%-290px)]'

//   return 'bg-slate-100 md:!w-[calc(100%-80px)]'
// })

onMounted(() => {
  if (isMobile.value)
    isAsideOpen.value = false
})
</script>

<template>
  <VAppShell padded-content>
    <!-- header -->
    <template #header>
      <VAppBar
        shadow
        class="container mx-auto py-3 px-4 !flex md:!hidden"
        size="auto"
        sticky
        color="primary"
      >
        <Logo width="50" @click="onMenuClick" />
        <div class="flex-1" />
        <VBtn
          color="primary"
          @click="isAsideOpen = !isAsideOpen"
        >
          <!-- <Menu01Icon class="w-5 h-5 text-white" /> -->
        </VBtn>
      </VAppBar>
    </template>

    <!-- aside -->
    <template #aside>
      <AppNavDrawer
        v-model="isAsideOpen"
        class="whitespace-nowrap bg-primary h-screen w-full items-start flex-col overflow-hidden"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <div class="px-6 py-8 flex items-center gap-4 w-full">
          <Logo :width="[isAsideOpen || isHovered ? '50' : '30']" class="transition-all" @click="onMenuClick" />
          <AppNavText :is-aside-open="isAsideOpen">
            Company Name
          </AppNavText>
        </div>
        <div class="w-full px-2">
          <AppSidebarMenus :is-aside-open="isAsideOpen || isHovered" />
        </div>
      </AppNavDrawer>
    </template>

    <!-- footer -->
    <template #content.after>
      <VText variant="sm" color="gray.500" class="mt-4">
        Copyright &copy; 2023 &middot; All rights reserved.
      </VText>
    </template>

    <div class="md:pt-[68px]">
      <VAppBar
        bordered
        class="py-3 !pl-0 !hidden md:!flex fixed !right-0 top-0 !ease-in-out !duration-500 !transition-all"
        :class="[isAsideOpen ? 'md:!w-[calc(100%-290px)]' : 'md:!w-[calc(100%-80px)]']"
        size="md"
      >
        <VBtn
          icon
          text
          no-ring
          @click="isAsideOpen = !isAsideOpen"
        >
          <Menu01Icon class="w-6 h-6" />
        </VBtn>
      </VAppBar>

      <VAlert bordered color="primary">
        primary
      </VAlert>
      <!-- content -->
      <router-view />
    </div>
  </VAppShell>
</template>
