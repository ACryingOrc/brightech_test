// state
const state = {
  tabs: [
    {
      title: 'Kyiv',
      mapCoords: {lat: 50, lng: 30},
      content: {
        heading: 'Global Message Services Ukraine LLC',
        address: 'Kyiv, Stepan Bandera, 33',
        index: '02066',
        country: 'Ukraine'
      }
    },
    {
      title: 'New York',
      mapCoords: {lat: 40.711, lng: -74},
      content: {
        heading: 'Global Message Services USA LLC',
        address: 'New York, Stepan Bandera, 33',
        index: '43131',
        country: 'USA'
      }
    },
    {
      title: 'Barcelona',
      mapCoords: {lat: 41.38, lng: 2.17},
      content: {
        heading: 'Global Message Services Spain LLC',
        address: 'Barcelona, Stepan Bandera, 33',
        index: '68678',
        country: 'Spain'
      }
    },
    {
      title: 'Rome',
      mapCoords: {lat: 41.90, lng: 12.49},
      content: {
        heading: 'Global Message Services Italy LLC',
        address: 'Rome, Stepan Bandera, 33',
        index: '45637',
        country: 'Italy'
      }
    }
  ]
}

// getters
const getters = {
  tabs: (state) => {
    return state.tabs
  }
}

export default {
  namespaced: true,
  state,
  getters
}