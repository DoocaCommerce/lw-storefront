<template>
	<section-component
		v-for="(item, index) in sections"
		:key="index"
		:schema="sections[index].schema"
		:settings="sections[index].settings"
		:blocks="sections[index].blocks"
		:data-section-id="index"
	/>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
import SectionComponent from './SectionComponent.vue'

export default {
	name: 'Sections',
	components: { SectionComponent },
	setup() {
		const store = useStore()
		const sections = computed(() => {
			return store.getters['theme/contentForIndex']
		})

		return {
			sections
		}
	}
}
</script>

<style lang="scss">
.section-focused {
	position: relative;
	transition: all 0.2s;

	&:after {
		content: '';
		position: absolute;
		top: 4px;
		left: 4px;
		bottom: 4px;
		right: 4px;
		border: solid 1px #6200ee;
		box-shadow: 0 0 20px 5px rgba(#6200ee, 0.8);
		z-index: 9999;
		animation: mymove 0.3s forwards;
		animation-delay: 1.5s;
		opacity: 1;
	}

	@keyframes mymove {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
}
</style>
