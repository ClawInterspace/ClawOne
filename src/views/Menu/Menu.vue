<template>
  <q-drawer v-model="leftDrawerOpen"
            show-if-above
            bordered
  >
    <q-list>
      <q-item-label header>
        Menu List
      </q-item-label>

      <EssentialLink v-for="link in essentialLinks"
                     :key="link.title"
                     v-bind="link"
      />
    </q-list>
  </q-drawer>
</template>

<script lang="ts">
import {defineAsyncComponent, defineComponent, ref, toRef} from 'vue'

const linksList = [
  {
    title: 'Task Arrangement',
    icon: 'list-check',
    link: 'https://www.google.com/calendar/render?hl=zh-TW&tab=wc'
  }
];

export default defineComponent({
  name: "Menu",

  components: {
    EssentialLink: defineAsyncComponent(() => import('@/views/Menu/EssentialLink.vue')),
  },

  props: {
    leftDrawerOpen: Boolean,
  },

  setup(props) {
    let leftDrawerOpen = toRef(props, 'leftDrawerOpen')

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
    }
  },
})
</script>

<style scoped>

</style>
