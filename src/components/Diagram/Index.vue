<template>
    <div>
      <v-simple-table class="text-center">
        <template v-slot:default>
          <thead>
            <tr>
              <th>
                Precio
              </th>
              <th>
                Fecha
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in diagramContent"
              :key="index"
            >
              <td>{{ item.priceUsd | dollar }}</td>
              <td>{{ item.date | dateFormat }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Diagram',

  props: {
    idCoin: {
      required: false,
      type: String
    }
  },
  computed: {
    ...mapGetters({
      diagramContent: 'coins/diagramContent'
    })
  }
}
</script>
