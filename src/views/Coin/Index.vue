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
      isLoading: false,
      tableContent: []
    }
  },
  methods: {
    async getData () {
      try {
        const response = await coins.getCoinData()
        this.tableContent = response.data.data
        this.isLoading = false
      } catch (error) {
        console.log(error.message)
        this.isLoading = false
      }
    }
  }
}
</script>
