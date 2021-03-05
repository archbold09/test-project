<template>
    <v-skeleton-loader
      class="mx-auto"
      :type="type"
    ></v-skeleton-loader>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    type: {
      required: false,
      type: String
    }
  }
}
</script>
