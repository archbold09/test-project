<template>
  <v-container fluid>
    <v-row >
      <v-col cols="12">

        <v-row justify="center" align="center">
          <v-col class="text-center">

            <v-btn color="primary" outlined elevation="3" rounded @click.stop="getMoreData">Obtener 10 coins</v-btn>

          </v-col>
          <v-col>

            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              outlined
              label="Buscar"
            ></v-text-field>

          </v-col>
        </v-row>

        <v-data-table
          :headers="headers"
          :items="tableContent"
          :search="search"
        >

          <template v-slot:item.name="{ item }">
            <v-avatar size="30">
                <v-img
                class="mr-1"
                :src="`https://static.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`"
                :alt="item.name"
                ></v-img>
            </v-avatar>
            {{ item.name }}
          </template>

          <template v-slot:item.priceUsd="{ item }">
            {{ item.priceUsd | dollar }}
          </template>

          <template v-slot:item.changePercent24Hr="{ item }">
            <v-chip class="m-2" outlined :color="item.changePercent24Hr > 0 ? 'success' : 'error'">
              {{ item.changePercent24Hr | percent }}
            </v-chip>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Table',
  data () {
    return {
      search: '',
      headers: [
        { text: 'Clasificación', align: 'center', value: 'rank' },
        { text: 'Nombre', value: 'name' },
        { text: 'Precio', value: 'priceUsd' },
        { text: 'Porcentaje cambio (24 H)', align: 'right', value: 'changePercent24Hr' }
      ]
    }
  },
  props: {
    tableContent: {
      required: true,
      type: Array
    }
  },
  methods: {
    async getMoreData () {
      console.log('log')
    }
  }
}
</script>
