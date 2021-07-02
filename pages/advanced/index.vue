<template>
  <div>
    <v-container class="pa-10">
    <SearchAdvanced></SearchAdvanced>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  components: {},
  data() {
    return {

      aggs: process.env.aggs,

      bh: [
        {
          text: this.$t('top'),
          disabled: false,
          to: this.localePath({ name: 'index' }),
          exact: true,
        },
        {
          text: this.$t('category'),
        },
      ]
    }
  },

  

  
  head() {
    return {
      title: this.$t('category'),
    }
  },
}
</script>
