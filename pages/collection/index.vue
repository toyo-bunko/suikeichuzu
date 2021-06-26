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
              <th class="text-left">{{ $t('地図名') }}</th>
              <th class="text-left">{{ $t('地図') }}</th>
              <th v-if="false" class="text-left">{{ $t('grid') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in objList" :key="item.id">
              <td>
                <nuxt-link
                  :to="localePath({ name: 'search', query: { 'main[refinementList][図][0]': item.label, layout: 'table' } })"
                  >{{ item.label }}</nuxt-link
                >
                <!--
                <nuxt-link
                  :to="localePath({ name: 'list-id', params: { id: item.id } })"
                  >{{ item.label }}</nuxt-link
                >
                -->
              </td>
              <td>
                <!--
                <a
                  :href="`http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?curation=${item.curation}&mode=annotation&lang=ja`"
                  >全体図</a
                >
                -->
                <a
                  :href="`http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?curation=https://nakamura196.github.io/suikeichuuzu/iiif-curation/${item.id}.json&mode=annotation&lang=ja`"
                  >全体図</a
                >
              </td>
              <td v-if="false">
                TODO
                <template v-if="false">
                  <a
                    :href="`http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?curation=${item.curation}&mode=annotation&lang=ja`"
                    >グリッド</a
                  >
                </template>
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
  title: any = this.$t('list')
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
      titleTemplate: null,
      title,
    }
  }
}
</script>
