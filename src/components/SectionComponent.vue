<template>
	<keep-alive>
		<component :is="component" :settings="settings" :blocks="blocks" />
	</keep-alive>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
	name: 'SectionComponent',
	props: {
		schema: {
			type: String,
			required: true
		},
		settings: {
			type: undefined,
			required: true
		},
		blocks: {
			type: undefined,
			required: true
		}
	},
	setup(props) {
		return {
			component: defineAsyncComponent(() => import(`@/components/sections/${props.schema}`))
		}
	}
}
</script>
