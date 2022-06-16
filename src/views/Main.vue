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

    <Menu :leftDrawerOpen="leftDrawerOpen"/>

    <q-page-container>
      <router-view :key="$route.fullPath"/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import {defineAsyncComponent, defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    Menu: defineAsyncComponent(() => import('@/views/Menu/Menu.vue')),
  },

  setup () {
    const leftDrawerOpen = ref(true)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
});
</script>
