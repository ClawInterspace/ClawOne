<template>
  <q-scroll-area class="fit fixed">
    <q-list>
      <span v-for="(menu, index) in menus" :key="index">
        <q-expansion-item v-if="menu.children.length > 0"
                          expand-separator
                          group="menuParent"
                          :icon="menu.meta.icon"
                          :label="menu.meta.title">
          <q-item v-for="(submenu, index) in menu.children" :key="index"
                  clickable v-ripple :to="submenu.name" active-class="active-link">
            <q-item-section avatar>
              <q-icon :name="submenu.meta.icon" />
            </q-item-section>
            <q-item-section>
              {{ submenu.meta.title }}
            </q-item-section>
          </q-item>
        </q-expansion-item>
        <q-item v-else
                clickable v-ripple :to="menu.name" active-class="active-link">
          <q-item-section avatar>
            <q-icon :name="menu.meta.icon" />
          </q-item-section>
          <q-item-section>
            {{ menu.meta.title }}
          </q-item-section>
        </q-item>
      </span>
    </q-list>
  </q-scroll-area>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import { MENUS } from './defaultsMenu'

export default defineComponent({
  name: 'TheMenu',
  components: {
  },
  setup() {
    const menus = ref(MENUS)
    return {
      menus,
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
