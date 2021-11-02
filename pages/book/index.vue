<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container class="my-5">
      <h2 class="mb-10">{{ title }}</h2>

      <div
        class="mb-5"
        v-for="(collection, key) in items.collections"
        :key="key"
      >
        <h3 class="mb-5">{{ collection.label }}</h3>
        <p class="mb-5">
          {{ collection.description }}
        </p>
        <grid :items="conv(collection.manifests)" />
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import axios from 'axios'
import Grid from '~/components/image/Grid.vue'
import Breadcrumbs from '~/components/common/Breadcrumbs.vue'

@Component({
  components: {
    Breadcrumbs,
    Grid,
  },
})
export default class Item extends Vue {
  title: any = this.$t('冊子画像')

  bh: any[] = [
    {
      text: this.$t('top'),
      disabled: false,
      to: this.localePath({ name: 'index' }),
      exact: true,
    },
    {
      text: this.title,
    },
  ]

  async asyncData({ payload, app }: any) {
    if (payload) {
      return payload
    } else {
      const result = await axios.get(
        'https://static.toyobunko-lab.jp/suikeichuzu_data/iiif/collection/books.json'
      )
      const items = result.data
      return {
        items,
      }
    }
  }

  head() {
    return {
      title: this.title,
    }
  }

  conv(manifests: any[]) {
    const items: any[] = []
    for (const manifest of manifests) {
      items.push({
        href:
          'https://static.toyobunko-lab.jp/suikeichuzu_data/mirador/?manifest=' +
          manifest['@id'],
        label: manifest.label,
        image: manifest.thumbnail,
      })
    }
    return items
  }
}
</script>
