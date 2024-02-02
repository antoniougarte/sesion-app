<script setup lang="ts">
import MenuComponent from '@/components/Menu/MenuComponent.vue'
import { ref, onMounted, computed } from 'vue'
import { useLoginStore } from '@/stores/loginStore/login'

const store = useLoginStore()
const name = computed(() => store.name)

onMounted(async () => {
  // Puedes realizar cualquier lógica adicional al montar el componente
})
</script>

<template>
  <div>
    <MenuComponent />
    <main>
      <h1 class="text-5xl font-bold underline">
        Hello world! {{ name }}
      </h1>
    </main>
  </div>
</template>
