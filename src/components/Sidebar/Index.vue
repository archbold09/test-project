<template>
    <v-navigation-drawer :value="sidebarState" app right temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <v-avatar
            size="40"
            >
                <Logo/>
            </v-avatar>
            <span class="text-uppercase font-weight-black ml-2">Angel Coins</span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.name"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>

import { mapState } from 'vuex'

import Logo from '@/components/Logo'

export default {
  name: 'Sidebar',
  components: {
    Logo
  },
  data () {
    return {
      items: [
        { name: 'Inicio', icon: 'mdi-view-dashboard', to: '/' },
        { name: 'Coins', icon: 'mdi-bitcoin', to: '/coins' }
      ]
    }
  },
  computed: {
    ...mapState('sidebar', {
      sidebarState: 'sidebarState'
    })
  }
}
</script>
