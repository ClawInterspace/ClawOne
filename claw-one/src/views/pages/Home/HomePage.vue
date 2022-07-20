<template>
  <div>
    Home
    <div>
      <q-checkbox>
        DevTools failed to load source map: Could not load content for chrome-extension://gnldpbnocfnlkkicnaplmkaphfdnlplb/ContentScript/CaptureBrowserEvent.js.map: System error: net::ERR_BLOCKED_BY_CLIENT
      </q-checkbox>
    </div>
  </div>
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
