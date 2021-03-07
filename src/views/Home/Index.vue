<template>
  <div>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="6" class="text-center">
          <h1 class="font-weight-bold grey--text text--darken-4 title my-5">Angel Coins</h1>
            <p class="grey--text text--darken-2">
              Este proyecto consume una API (CoinsCap) <a href="https://docs.coincap.io/">https://docs.coincap.io/</a>
              .En ella se encuentra el valor de cada moneda en tiempo real 😁
            </p>
            <v-divider class="my-5"/>
            <p class="grey--text text--darken-2">
              Hice uso de esta API para crear una tabla que muestre sus valores (No en tiempo real)
              😎
            </p>

            <v-divider class="my-5"/>

            <h3 class="font-weight-bold grey--text text--darken-3 mb-5">Tecnologías usadas</h3>
            <v-row justify="center">
              <v-col cols="12">
                <v-tooltip bottom v-for="(item, index) in tech" :key="index">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      class="mx-4"
                      large
                      :color="item.color"
                      v-bind="attrs"
                      v-on="on"
                    >
                      {{ item.icon }}
                    </v-icon>
                  </template>
                  <span>{{ item.name }}</span>
                </v-tooltip>
              </v-col>
            </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      tech: [
        { name: 'Vue js', icon: 'mdi-vuejs', color: '#41B883' },
        { name: 'Vuetify', icon: 'mdi-vuetify', color: '#1867C0' },
        { name: 'Javascript', icon: 'mdi-language-javascript', color: '#EFD81D' }
      ]
    }
  }
}
</script>
