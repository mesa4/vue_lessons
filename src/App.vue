<template>
		<div id="app">
				<Theme1 v-if="false" />
				<Theme2 />
		</div>
</template>

<script>

import Theme1 from '@/components/theme-1';
import Theme2 from '@/components/theme-2';

export default {
		name: 'App',
		components: {
				Theme1,
				Theme2
		}
};
</script>

<style lang="scss">
* {
		box-sizing: border-box;
}
</style>
