<script>
	export default {
		computed:{
			attrs() {
				return this.$store.state.attrs
			}
		}
	}
</script>
<template>
	<section>
		<h3>グローバル属性</h3>
		<table>
			<tr>
				<th id="attr-name">属性名</th>
				<th>説明</th>
			</tr>
			<tr v-for="attr in attrs" :key="attr.id">
				<td>{{ attr.attrName }}</td>
				<td class="description">{{ attr.description }}</td>
			</tr>
		</table>
	</section>
</template>
<style>
  /* PC用設定 */
  @media screen and (min-width:601px){
    /* グローバル属性一覧用 */
    th#attr-name{
        width:			20%;
    }
  }
</style>