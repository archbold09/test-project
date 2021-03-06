<template>
  <div>
    <Loading v-if="isLoading" :type="'table'"/>

    <template v-else>
      <Table :table-content="tableContent"/>
    </template>
  </div>
</template>

<script>

import * as coins from '@/api/coins'

import Table from '@/components/Table/Index'

import Loading from '@/components/Loading'

import { mapGetters } from 'vuex'

export default {
  name: 'Coin',
  components: {
    Table,
    Loading
  },
  created () {
    this.isLoading = true
    this.getData()
  },
  data () {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapGetters({
      tableContent: 'coins/tableContent'
    })
  },
  methods: {
    async getData () {
      try {
        const response = await coins.getCoinData()
        this.$store.commit('coins/TABLE_CONTENT', response.data.data, { root: true })
        this.isLoading = false
      } catch (error) {
        console.log(error.message)
        this.isLoading = false
      }
    }
  }
}
</script>
