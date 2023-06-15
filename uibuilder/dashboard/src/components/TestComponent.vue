<script setup lang="ts">
  import { inject } from 'vue'
  import IData from '../interface/IData'
  // const send2NR = inject('send2NR') as (topic: string, payload:string) => void;

  const asyncData = inject('asyncData') as IData;
</script>

<template>
  <div v-if="asyncData.topic === 'get_flows'">
    <pre>{{ asyncData.payload }}</pre>
  </div>
</template>