<template>
  <div class="mt-5">
    <v-card flat class="mb-10" v-for="(item, key) in items" :key="key">
      <v-card-title class="grey lighten-2">
        {{ item.label }}
      </v-card-title>

      <v-card-text class="py-5">
        <BarChart :labels="item.labels" :datasets="item.datasets"> </BarChart>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Prop, Vue, Component, Watch } from 'nuxt-property-decorator'

function init(aggs: any) {
  console.log('graph init', { aggs })
  const map: any[] = []

  for (let key in aggs) {
    /*
    if (aggs[key].hide) {
      continue
    }
    */

    if (!aggs[key].bucketsFull) {
      continue
    }

    if (aggs[key].bucketsFull.length > 200) {
      continue
    }

    const items = []

    for (const obj of aggs[key].bucketsFull) {
      items.push({
        label: obj.key,
        value: obj.doc_count,
      })
    }

    items.sort(function (a, b) {
      if (a.value < b.value) return 1
      if (a.value > b.value) return -1
      return 0
    })

    const labels = []
    const data = []

    for (const obj of items) {
      labels.push(obj.label)
      data.push(obj.value)
    }

    map.push({
      label: key, //aggs[key].label,
      labels,
      datasets: [
        {
          data,
          label: 'item', //$t("item")
        },
      ],
    })
  }

  return map
}

@Component({
  components: {},
})
export default class FullTextSearch extends Vue {
  @Prop({})
  aggs!: any[]

  @Watch('aggs', { deep: true })
  watchTmp() {
    this.init()
  }

  items: any[] = []

  mounted() {
    this.init()
  }

  init() {
    const aggs = this.aggs

    const map: any[] = init(aggs)

    this.items = map
  }
}
</script>
