<script setup lang="ts">
// only smaller than lg

const { modelValue } = defineProps<{
  modelValue: boolean
}>()

// const emit = defineEmits<{
//   'click:overlay': [value: boolean]
//   'update:modelValue': [value: boolean]
// }>()

defineOptions({
  inheritAttrs: false,
})

// import { breakpointsTailwind } from '@vueuse/core'

// const breakpoints = useBreakpoints(breakpointsTailwind)
// const isMobile = breakpoints.smaller('md')
</script>

<template>
  <VNavDrawer
    color="primary"
    class="!z-20 relative !ease-in-out !duration-500 !transition-all hover:md:!w-[290px] !hidden md:!flex !text-white"
    :class="[modelValue ? 'md:!w-[290px]' : '!w-10/12 md:!w-[80px]']"
    :fixed="false"
    :overlay="false"
    bordered
    v-bind="$attrs"
  >
    <slot />
  </VNavDrawer>

  <!-- <ClientOnly v-if="isMobile">
      <VNavDrawer
        :model-value="modelValue"
        color="dark-blue"
        class="!z-20 relative !w-10/12 !text-white"
        :fixed="true"
        :overlay="true"
        v-bind="$attrs"
        @update:model-value="emit('update:modelValue', !modelValue)"
      >
        <slot />
      </VNavDrawer>
    </ClientOnly> -->
</template>
