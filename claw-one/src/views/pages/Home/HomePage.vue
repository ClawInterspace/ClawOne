<template>
  Home
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue'
import {useQuasar} from 'quasar'

export default defineComponent({
  name: 'HomePage',

  setup() {
    const $q = useQuasar()

    onMounted(() => {
      triggerPositive()
    })

    function triggerPositive() {
      $q.notify({
        type: 'positive',
        message: 'This is a "positive" type notification.'
      })
    }

    return {}
  },
})
</script>

<style scoped>

</style>
