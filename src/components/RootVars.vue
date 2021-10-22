<template>
  <component :is="`style`" v-html="rootVars" />
</template>

<script>
import { computed } from 'vue'
import { parseRootVars } from '@/helpers/styleHelper'

export default {
  name: 'RootVars',
  props: {
    variables: Object
  },
  setup(props) {
    const rootVars = computed(() => {
      return parseRootVars(props.variables)
    })

    return { rootVars }
  }
}
</script>

<style></style>
