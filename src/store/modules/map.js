// state
const state = {
  // MAIN MAP OPTIONS
  mapTypeId: "roadmap",
  zoom: 6,
  markers: [],
  center: {lat: 50, lng: 30},

  // VISUAL AND COLOR MAP OPTIONS
  mapOptions: {
    mapTypeControl: false,
    styles: [
      {
        elementType: 'geometry', 
        stylers: [{color: '#333333'}]
      },
      {
        elementType: 'labels.text.stroke',
         stylers: [{color: '#2b2b2b'}]
       },
      {
        elementType: 'labels.text.fill',
        stylers: [{color: '#666666'}]
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#666666'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#2b2b2b'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#2b2b2b'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#666666'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#2b2b2b'}]
      },
      {
        featureType: "administrative.country",
        elementType: "labels.text.stroke",
        stylers: [
          {visibility: "on"},
          {color: '#2b2b2b'}
        ]
      }
    ]
  }
}

// getters
const getters = {
  markers: (state) => {
    return state.markers
  },
  center: (state) => {
    return state.center
  },
  mapTypeId: (state) => {
    return state.mapTypeId
  },
  zoom: (state) => {
    return state.zoom
  },
  mapOptions: (state) => {
    return state.mapOptions
  }
}

// actions
const actions = {
  setMapCoords ({ commit }, payload) {
    commit('clear_map_markers')
    commit('add_marker', payload)
    commit('set_map_coords', payload)
  }
}

// mutations
const mutations = {
  set_map_coords (state, payload) {
    Object.assign(state.center, payload)
  },
  add_marker (state, payload) {
    state.markers.push(payload)
  },
  clear_map_markers (state) {
    state.markers = []
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}