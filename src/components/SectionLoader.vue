<template>
  <section-component
    :settings="section.settings"
    :blocks="section.blocks"
    :schema="section.schema"
    v-if="section"
    :data-section-id="sectionId"
  />
</template>

<script>
import { computed } from '@vue/reactivity'
import SectionComponent from './SectionComponent.vue'
import { useStore } from 'vuex'

export default {
  components: { SectionComponent },
  name: 'SectionLoader',
  props: {
    sectionId: String
  },
  setup(props) {
    const store = useStore()
    const section = computed(() => {
      const data = store.getters['theme/getSectionById'](props.sectionId)

      if (data?.schema) {
        return data
      }

      return null
    })

    return {
      section
    }
  }
}
</script>
