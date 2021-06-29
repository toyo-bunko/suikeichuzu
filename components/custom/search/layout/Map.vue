<template>
  <div>
    <ul>
      <li class="mb-2" v-for="(item, key) in items" :key="key">
        <a :href="item.url" target="_blank">
        {{item.label}} ({{item.value}})
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Prop, Vue, Component, Watch } from 'nuxt-property-decorator'
import ResultOption from '~/components/display/ResultOption.vue'

@Component({
  components: {
ResultOption
}
})
export default class FullTextSearch extends Vue {

  prefix: string = "https://nakamura196.github.io/i3/map/?curation="

  @Prop({})
  aggs!: any[]

  @Watch('aggs', { deep: true })
  watchTmp() {
    this.init()
  }

  mounted(){
    this.init()
  }

  items: any[] = []

  init(){
    const query = this.$route.query

    let condition = ""

    
    for (const key in query) {
      const value = query[key]
      if (key.includes('[refinementList]')) {
        /*
        filters.push({
          label: key.split('[')[2].split(']')[0],
          value: query[key],
        })
        */
        condition += `&fc-${key.split('[')[2].split(']')[0]}=${value}`
      } else if (key.includes('[advanced]')) {
        /*
        advanced.push({
          label: key.split('[')[2].split(']')[0],
          value: query[key],
        })
        */
       condition += `&q-${key.split('[')[2].split(']')[0]}=${value}`
      } else if (key === "main[query]") {
        condition += `&q=${value}`
      }
    }

    ///////////////

    const aggs: any = this.aggs

    const arr = aggs["図"].value

    const settings: any = process.env.settings
    

    const map: any = {}

    for(const key in settings){
      map[settings[key].label] = key
    }

    const arr2 = []

    for(const obj of arr){
      const label = obj[0]
      const value = obj[1]
      const id = map[label]
      arr2.push({
        "id": id,
        "label": label,
        "value": value,
        "url": `${this.prefix}https://static.toyobunko-lab.jp/suikeichuzu_data/curation/${id}.json&label=分類,記号説明${condition}`
      })
    }

    this.items = arr2
  }
}
</script>
