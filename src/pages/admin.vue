<template>
  <div>
    <nuxt-page />
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  middleware: ['auth'],
  layout: 'dashboard'
})

</script>


<style scoped>


</style>
