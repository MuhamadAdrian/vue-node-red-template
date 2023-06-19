<script setup lang="ts">
const { isAsideOpen, transition = 'fade' } = defineProps<{
  isAsideOpen: boolean
  transition?: string
}>()

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <!-- <Transition :name="transition" mode="in"> -->
  <p class="transition-all" :class="{ 'opacity-0 invisible': !isAsideOpen }" v-bind="$attrs">
    <slot />
  </p>
  <!-- </Transition> -->
</template>
