<template>
  <v-footer
    dark
    padless
    app
  >
    <v-card
      class="flex"
      flat
      tile
      >
      <v-card-title class="dark">
        <strong class="body-1 font-weight-light">Created by <span class="font-weight-bold">Angel Archbold</span> 😎 </strong>

        <v-spacer></v-spacer>

        <v-tooltip bottom
            v-for="item in social"
            :key="item.name"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                class="mx-4"
                dark
                icon
                v-bind="attrs"
                v-on="on"
                :href="item.link"
                target="_blank"
                >
                    <v-icon size="24px">
                        {{ item.icon }}
                    </v-icon>
                </v-btn>
            </template>
            <span>{{item.name}}</span>
        </v-tooltip>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Angel Archbold</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      social: [
        { name: 'Github', icon: 'mdi-github', link: 'https://github.com/archbold09' },
        { name: 'Linkedin', icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/archbold09/' }
      ]
    }
  }
}
</script>
