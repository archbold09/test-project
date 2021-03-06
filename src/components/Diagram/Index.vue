<template>
    <div>
        <v-sparkline
        class="mx-7 py-6"
        :value="diagramContent"
        :gradient="gradient"
        :smooth="radius || false"
        :padding="padding"
        auto-draw
        >
        <template v-slot:label="item">
            ${{item.diagramContent}}
        </template>
        </v-sparkline>
    </div>
</template>

<script>

import * as coins from '@/api/coins'

const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea']
]
export default {
  name: 'Diagram',

  props: {
    idCoin: {
      required: false,
      type: String
    }
  },

  created () {
    this.getData()
  },

  data: () => ({
    radius: 10,
    padding: 8,
    gradient: gradients[5],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    gradients,
    diagramContent: []
  }),

  methods: {
    async getData () {
      try {
        const response = await coins.getCoinData()
        console.log(response)
        // console.log(response.data.data[0].volumeUsd24Hr);
        // this.diagramContent = response.data.data.volumeUsd24Hr
      } catch (error) {
        console.log(error.message)
      }
    }
  }
}
</script>
