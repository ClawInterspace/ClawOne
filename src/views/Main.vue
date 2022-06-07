<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Claw One
        </q-toolbar-title>

        <div>ClawInterspace</div>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
    >
      <q-list>
        <q-item-label
            header
        >
          Menu List
        </q-item-label>

        <EssentialLink v-for="link in essentialLinks"
                       :key="link.title"
                       v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from './EssentialLink.vue';

const linksList = [
  {
    title: 'Task Arrangement',
    caption: 'arrange my tasks',
    icon: 'list-check',
    link: 'https://www.google.com/calendar/render?hl=zh-TW&tab=wc'
  }
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(true)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
});
</script>
