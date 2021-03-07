<template>
  <v-app-bar
    app
    dark
    flat
  >
    <v-container class="py-0 fill-height">

      <router-link to="/" class="text-decoration-none white--text">
        <v-avatar
          size="40"
        >
          <Logo/>
        </v-avatar>
        <span class="text-uppercase font-weight-black ml-2">Angel Coins</span>
      </router-link>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon @click.stop="changeState" class="hidden-md-and-up"></v-app-bar-nav-icon>

      <v-btn
        dark
        class="hidden-sm-and-down"
        v-for="item in links"
        :key="item.name"
        text
        link
        :to="item.to"
      >
        {{ item.name }}
      </v-btn>

    </v-container>
  </v-app-bar>
</template>

<script>

import { mapMutations } from 'vuex'

import Logo from '@/components/Logo'

export default {
  name: 'Header',

  components: {
    Logo
  },

  data: () => ({
    links: [
      { name: 'Coins', to: '/coins' }
    ]
  }),

  methods: {
    ...mapMutations('sidebar', {
      changeState: 'SIDEBAR_STATE'
    })
  }
}
</script>
