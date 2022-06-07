<template>
  Home
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {
  },

  mounted() {
    const vm: any = this
    vm.$q.notify({
      type: '$positive',
      color: '$positive',
      message: 'quasar imported',
      timeout: 5000,
      position: 'top',
    })
  }
});
</script>
