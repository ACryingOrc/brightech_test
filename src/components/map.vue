<template>
  <div class="map-wrapper">
    <GmapMap 
      :center="center" 
      :zoom="zoom" 
      :map-type-id="mapTypeId" 
      :options="mapOptions" 
      style="height: 750px;"
    >
      <GmapMarker
        :icon="{ url: require('../assets/marker.png'), size: { width: 27, height: 38, f: 'px', b: 'px' }, scaledSize: { width: 27, height: 38, f: 'px', b: 'px' } }"
        v-for="(item, index) in markers"
        v-bind:key="index"
        v-bind:position="item"
        :clickable="false"
      />
    </GmapMap>
  </div>  <!-- MAP WRAPPER -->
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'google-map',
  computed: {
    ...mapGetters({
      center: 'map/center',
      mapTypeId: 'map/mapTypeId',
      markers: 'map/markers',
      zoom: 'map/zoom',
      mapOptions: 'map/mapOptions'
    })
  }
}
</script>
