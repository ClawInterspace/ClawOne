<template>
  <div>
    Home
    <div>
      <q-checkbox v-for="(note, index) in devNote" :key="index" v-model="note.isChecked">
        {{ note.title }}
      </q-checkbox>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import {useQuasar} from 'quasar'
import {DevNote} from 'src/views/pages/Home/DevNote/DevNote'

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

    return {
      devNote: ref(DevNote),
    }
  },
})
</script>

<style scoped>

</style>
