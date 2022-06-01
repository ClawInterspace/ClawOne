<template>
  Home
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Notify } from 'quasar'

export default defineComponent({
  name: 'HomeView',
  components: {
  },

  mounted() {
    const vm: any = this
    Notify.create({
      type: 'positive',
      color: 'positive',
      message: 'quasar imported',
      timeout: 5000,
      position: 'top',
    })
  }
});
</script>
