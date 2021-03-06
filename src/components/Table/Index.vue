<template>
  <v-container fluid>
    <v-row >
      <v-col cols="12">

        <v-row justify="center" align="center">
          <v-col class="text-center">

            <v-btn color="light" outlined elevation="3" rounded @click.stop="getMoreData"
              :loading="isLoading"
              :disabled="isLoading"
            >
            Obtener 10 coins
            </v-btn>

          </v-col>
          <v-col>

            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              color="black"
              outlined
              label="Buscar"
            ></v-text-field>

          </v-col>
        </v-row>

        <v-data-table
          :headers="headers"
          :items="tableContent"
          :search="search"
          :loading="isLoading"
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

          <template v-slot:item.options="{ item }">
            <v-icon color="black" @click.stop="showDetails(item)">
              mdi-eye
            </v-icon>
          </template>

        </v-data-table>

        <v-dialog
          v-model="detailDialog"
          width="500"
        >
          <v-card>
            <v-card-title class="headline">
              <v-chip color="primary" outlined class="p-2 mr-4">
                {{coinDetails.rank}}
              </v-chip>
              {{coinDetails.name}}
            </v-card-title>

            <v-card-text class="grey lighten-4 grey--text text--darken-3">
              <h5 class="subtitle-1">Valor en las ultimas 24 Horas</h5>
              <div class="text-center">
                  <Diagram id-coin="coinDetails.id"/>
              </div>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="error"
                text
                @click="detailDialog = false"
              >
                Cerrar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import * as coins from '@/api/coins'

import { mapGetters } from 'vuex'

import Diagram from '@/components/Diagram/Index'

export default {
  name: 'Table',
  components: {
    Diagram
  },
  data () {
    return {
      search: '',
      headers: [
        { text: 'Clasificación', align: 'center', value: 'rank' },
        { text: 'Nombre', value: 'name' },
        { text: 'Precio', value: 'priceUsd' },
        { text: 'Porcentaje cambio (24 H)', align: 'right', value: 'changePercent24Hr' },
        { text: 'Detalles', align: 'center', value: 'options' }
      ],
      isLoading: false,
      detailDialog: true,
      coinDetails: {}
    }
  },
  computed: {
    ...mapGetters({
      tableContent: 'coins/tableContent'
    })
  },
  methods: {
    async getMoreData () {
      this.isLoading = true
      const countCoins = this.tableContent.length + 10
      try {
        const response = await coins.getCoinData(countCoins)
        this.$store.commit('coins/TABLE_CONTENT', response.data.data, { root: true })
        this.isLoading = false
      } catch (error) {
        console.log(error)
        this.isLoading = false
      }
    },
    showDetails (item) {
      this.detailDialog = true
      this.coinDetails = {
        rank: item.rank,
        name: item.name
      }
    }
  }
}
</script>
