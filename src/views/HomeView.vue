<template>
  Home
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {useQuasar} from 'quasar'

export default defineComponent({
  name: 'HomeView',
  components: {
  },

  setup () {
    const $q = useQuasar()

    $q.notify({
      color: 'positive',
      message: 'quasar imported',
      timeout: 5000,
      position: 'top',
    })
    // or with a config object:
    // $q.notify({...})
  },
});
</script>
