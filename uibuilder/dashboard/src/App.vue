<script setup lang="ts">

</script>

<template>
  <div>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/another-page">Go to Another Page</router-link>
    <router-view></router-view>
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite + Typescript + NodeRed + uibuilder" />
  <TestComponent/> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
