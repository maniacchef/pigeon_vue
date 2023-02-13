<script>
	export default {
		computed:{
			categories() {
				return this.$store.state.categories
			}
		}
	}
</script>
<template>
	<section>
		<h3>カテゴリ一覧</h3>
		<table>
			<tr>
				<th id="category-name">カテゴリ名</th>
				<th>説明</th>
			</tr>
			<tr div v-for="category in categories" :key="category.id">
				<td>{{ category.categoryName }}</td>
				<td class="description">{{ category.description }}</td>
			</tr>
		</table>
	</section>
</template>
<style>
  /* PC用設定 */
  @media screen and (min-width:601px){
    /* カテゴリ一覧用 */
    th#category-name{
        width:			20%;
    }
  }
</style>