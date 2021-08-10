<template>
  <div>
    <v-sheet color="grey lighten-2">
      <v-container fluid class="py-4">
        <v-breadcrumbs class="py-0" :items="breadcrumbs">
          <template #divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-container>
    </v-sheet>
    <v-container class="my-5">
      <h1 class="mb-5">{{ title }}</h1>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">{{ $t('name') }}</th>
              <th class="text-center">{{ /*$t('name')*/"検索結果一覧を表示" }}</th>
              <th class="text-center">{{ /*$t('name')*/"検索結果一覧（地図表示）" }}</th>
              <!-- <th class="text-left">{{ $t('地図') }}</th> -->
              <th class="text-center">{{ /*$t('map')*/"地図をそのまま見る" }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in objList" :key="item.id">
              <td class="text-center">
                {{item.label}}
              </td>
              <td class="text-center">
                <nuxt-link
                  :to="localePath({ name: 'search', query: { 'main[refinementList][図][0]': item.label, layout: 'table' } })"
                  ><v-icon class="mr-2" color="primary">mdi-table</v-icon></nuxt-link
                >
              </td>
              <td class="text-center">
                <nuxt-link
                  :to="localePath({ name: 'search', query: { 'main[refinementList][図][0]': item.label, layout: 'map' } })"
                  ><v-icon class="mr-2" color="primary">mdi-map</v-icon></nuxt-link
                >
              </td>
              <!--
              <td>
                <a
                  :href="`http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?curation=https://static.toyobunko-lab.jp/suikeichuzu_data/curation/${item.id}.json&mode=annotation&lang=ja`"
                  >IIIF Curation Viewer</a
                >
              </td>
              -->
              <td class="text-center">
                <!--
                <a
                    :href="`https://nakamura196.github.io/i3/map/?curation=https://static.toyobunko-lab.jp/suikeichuzu_data/curation/${item.id}.json`"
                    >IIIF Curation Content Search Viewer</a
                  >
                -->
                <a target="_blank" :href="`https://www.kanzaki.com/works/2016/pub/image-annotator?u=https://static.toyobunko-lab.jp/suikeichuzu_data/iiif/${item.id}/manifest.json`"><v-icon color="primary" class="mr-2">mdi-image</v-icon></a>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class Item extends Vue {
  baseUrl: any = process.env.BASE_URL
  title: any = this.$t('list_')
  siteDesc: any = process.env.siteDesc
  top: any = process.env.top

  get objList() {
    const objList = []
    const settings: any = process.env.settings
    for (const id in settings) {
      const obj = settings[id]
      obj.id = id
      objList.push(obj)
    }
    return objList
  }

  get breadcrumbs() {
    return [
      {
        text: 'HOME',
        disabled: false,
        to: this.localePath({ name: 'index' }),
        exact: true,
      },
      {
        text: (this as any).title,
      },
    ]
  }

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
