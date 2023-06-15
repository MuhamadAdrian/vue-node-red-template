<script setup lang="ts">
import { ref, inject } from 'vue'
import IData from '../interface/IData'

defineProps<{
  msg: String,
}>()

// inject method 'send2NR' from plugin uibuilderPlugin
const send2NR = inject('send2NR') as (topic: string, payload:string) => void;

const asyncData = inject('asyncData') as IData;

const topic = ref('');

const payload = ref('');

const count = ref(0);

</script>

<template>
 <h1>{{ msg }} </h1>
 <div class="container">
   <div class="box">
      <h2>Received</h2>
      <input class="box-topic" readonly type="text" placeholder="Received Topic"  v-model="asyncData.topic"/>
      <textarea class="box-message" readonly type="text" placeholder="Received Payload" v-model="asyncData.payload" />
    </div>
    <div class="box">
      <h2>Send</h2>
      <input class="box-topic" type="text" placeholder="type topic" v-model="topic"/>
      <textarea class="box-message" type="text" placeholder="press enter to send" v-model="payload" @keyup.enter="send2NR(topic, payload)"/>
    </div>
  </div>
  <br/>
  <br/>
  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}


.container {
  display: inline;
  text-align: center;
}

.box {
  font: 15px arial, sans-serif;
  border-style: solid;
  border-width: 1px;
  padding: 10px;
  border-radius: 5px;
  display: inline-block;
}

.box-topic {
  height: 50px;
  font: 20px bold, arial, sans-serif;
  width: 95%;
  padding: 5px;
}

.box-message {
  height: 200px;
  font: 17px arial, sans-serif;
  width: 95%;
  padding: 5px;
}
</style>
