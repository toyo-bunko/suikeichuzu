<template>
  <div>
    <v-sheet color="grey lighten-2">
      <v-container fluid class="py-4">
        <v-breadcrumbs class="py-0" :items="bh">
          <template #divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-container>
    </v-sheet>
    <v-container class="my-5">
      <h2 class="mb-5">{{ title }}</h2>

      <v-data-table :headers="headers" :items="items">
        <template v-slot:item.label="{ item }">
          <a :href="item['@id']">
            {{ item.label }}
          </a>
        </template>

        <template v-slot:item.url="{ item }">
          <v-btn color="primary" class="my-2" :href="item.url" target="_blank">
            {{ 'View' }}
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

@Component({
  components: {},
})
export default class Item extends Vue {
  title: any = this.$t('データセット')

  baseUrl: any = process.env.BASE_URL

  headers: any[] = [
    {
      text: 'Name',
      value: 'label',
    },
    {
      text: 'Type',
      value: 'type',
    },
    {
      text: 'Viewer',
      value: 'url',
    },
  ]

  items: any[] = [
    {
      '@id':
        'https://static.toyobunko-lab.jp/suikeichuzu_data/iiif/collection/books.json',
      label: '冊子画像一覧',
      type: 'IIIFコレクション',
      url:
        'https://www.kanzaki.com/works/2016/pub/image-annotator?u=https://static.toyobunko-lab.jp/suikeichuzu_data/iiif/collection/books.json',
    },
    {
      '@id':
        'https://static.toyobunko-lab.jp/suikeichuzu_data/iiif/collection/top.json',
      label: '地図画像一覧',
      type: 'IIIFコレクション',
      url:
        'https://www.kanzaki.com/works/2016/pub/image-annotator?u=https://static.toyobunko-lab.jp/suikeichuzu_data/iiif/collection/top.json',
    },
  ]

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
