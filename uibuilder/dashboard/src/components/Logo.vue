<script lang="ts">
export default {
  inheritsAttrs: false,
}
</script>

<template>
  <!-- logo default -->
  <img
    src="/logo-white.webp"
    alt="Logo Base"
    class="dark:hidden"
    v-bind="$attrs"
  >
  <!-- logo white -->
  <img
    src="/logo.webp"
    alt="Logo White"
    class="hidden dark:block"
    v-bind="$attrs"
  >
</template>
