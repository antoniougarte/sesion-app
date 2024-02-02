<template>
  <div>
    <MenuComponent />
    Post vue {{ postId }}
  </div>
</template>

<script setup lang="ts">
import MenuComponent from '@/components/Menu/MenuComponent.vue'
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const postId = ref()

onMounted(() => {
  console.log(`the component is now mounted.`)
  const route = useRoute()
  postId.value = route.params.id
})
</script>

<style scoped>

</style>