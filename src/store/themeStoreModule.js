import SectionService from '../services/SectionService'

const state = {
  settingsData: {},
  settings: {},
  sectios: [],
  contentForIndex: {},
  loading: false
}

const getters = {
  settingsData: state => state.settingsData,
  settings: state => state.settings,
  loading: state => state.loading,
  sections: state => state.sections,
  contentForIndex: state => state.contentForIndex,
  getSectionById: state => id => {
    return state.sections ? state.sections[id] : {}
  }
}

const mutations = {
  SET_SETTINGS_DATA: (state, data) => state.settings = data,
  SET_SETTINGS: (state, data) => state.settings = data,
  SET_SECTIONS: (state, data) => state.sections = data,
  SET_LOADING: (state, data) => state.loading = data,
  SET_CONTENT_FOR_INDEX: (state, data) => state.contentForIndex = data
}

const actions = {
  async getSettingsData(context, data) {
    let current = {}
    if (data) {
      current = { ...context.state.settingsData, ...data }
    } else {
      current = await SectionService.get()
      context.commit('SET_SETTINGS_DATA', current)
    }

    const { sections, settings } = current

    if (sections) {
      const contentForIndex = {}

      Object.keys(sections).map(index => {
        if (sections[index].type == 'content' && !sections[index].disabled) {
          contentForIndex[index] = sections[index]
          if (contentForIndex[index].blocks) {
            contentForIndex[index].blocks = contentForIndex[index].blocks.filter(block => {
              return !block.disabled
            })
          }
        }
      })

      context.commit('SET_SECTIONS', sections)
      context.commit('SET_CONTENT_FOR_INDEX', contentForIndex)
    }

    if (settings) {
      context.commit('SET_SETTINGS', settings)
    }

    return context.state.contentForIndex
  }
}

export default {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
}
