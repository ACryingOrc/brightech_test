<template>
  <div class="theme_tabs">
    <b-tabs content-class="mt-3">
      <b-tab 
        v-for="(tab, index) in tabs"
        :key="index"
        :title="tab.title" 
        @click="setCoords(tab.mapCoords)"
      >
        <h2 class="theme_h2">{{tab.content.heading}}</h2>
        <p class="theme_p medium">{{tab.content.address}}</p>
        <p class="theme_p medium">{{tab.content.index}}</p>
        <p class="theme_p medium">{{tab.content.country}}</p>
      </b-tab>
    </b-tabs> <!-- BOOTSTRAP TABS -->
  </div>  <!-- THEME TABS -->
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'tabs',
  computed: {
    ...mapGetters({
      tabs: 'tabs/tabs'
    })
  },
  created () {
    this.setCoords(this.tabs[0].mapCoords)
  },
  methods: {
    ...mapActions({
      setCoords: 'map/setMapCoords'
    })
  }
}
</script>
