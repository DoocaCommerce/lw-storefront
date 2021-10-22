function updateSettingsData(store) {
  return ({ data }) => {
    store.dispatch('theme/getSettingsData', data)
  }
}

export default updateSettingsData
