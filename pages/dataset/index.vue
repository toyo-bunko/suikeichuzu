<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container class="my-5">
      <h2 class="mb-5">{{ title }}</h2>

      <v-data-table :headers="headers" :items="items">
        <template v-slot:item.dwn="{ item }">
          <v-btn icon :href="item['@id']" color="primary">
            <v-icon>mdi-file-download</v-icon>
          </v-btn>
        </template>

        <template v-slot:item.url="{ item }">
          <v-btn color="primary" class="my-2" :href="item.url" target="_blank">
            {{ $t('view') }}
          </v-btn>
        </template>
      </v-data-table>

      <v-row
        class="mt-5"
        v-for="(item, key2) in items"
        :key="key2"
        v-if="false"
      >
        <!--
        <v-col cols="12" sm="3">
          <a target="blank">
            <v-img
              contain
              max-height="150"
              style="height: 150px"
              width="100%"
              class="grey lighten-2"
              :src="item.thumbnail"
            /> </a
        ></v-col>
        -->
        <v-col cols="12" sm="12">
          <h3>
            <a target="blank" :href="item['@id']" v-html="item.label"></a>
          </h3>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import axios from 'axios'
import Breadcrumbs from '~/components/common/Breadcrumbs.vue'

@Component({
  components: {
    Breadcrumbs,
  },
})
export default class Item extends Vue {
  title: any = this.$t('data_set')

  baseUrl: any = process.env.BASE_URL

  get headers(): any[] {
    return [
      {
        text: this.$t('name'),
        value: 'label',
      },
      {
        text: this.$t('format'),
        value: 'type',
      },
      {
        text: this.$t('download'),
        value: 'dwn',
      },
      {
        text: this.$t('viewer'),
        value: 'url',
      },
    ]
  }

  get items(): any[] {
    return [
      {
        '@id':
          'https://static.toyobunko-lab.jp/suikeichuzu_data/iiif/collection/books.json',
        label: this.$t('book_list'),
        type: this.$t('iiif_collection'),
        url:
          'https://www.kanzaki.com/works/2016/pub/image-annotator?u=https://static.toyobunko-lab.jp/suikeichuzu_data/iiif/collection/books.json',
      },
      {
        '@id':
          'https://static.toyobunko-lab.jp/suikeichuzu_data/iiif/collection/top.json',
        label: this.$t('map_list'),
        type: this.$t('iiif_collection'),
        url:
          'https://www.kanzaki.com/works/2016/pub/image-annotator?u=https://static.toyobunko-lab.jp/suikeichuzu_data/iiif/collection/top.json',
      },
    ]
  }

  get bh() {
    return [
      {
        text: this.$t('index'),
        disabled: false,
        to: this.localePath({ name: 'index' }),
        exact: true,
      },
      {
        text: this.title,
      },
    ]
  }
}
</script>
