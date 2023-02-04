<script>
export default {
  name: 'ListExampleView',
  computed:{
    categories() {
      return this.$store.state.categories
    },
    attrs() {
      return this.$store.state.attrs
    },
    tags() {
      return this.$store.state.tags
    }
  }
}
</script>
<template>
  <div class="wrapper">
  <h1>一覧実例</h1>
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
<section>
	<h3>htmlタグ一覧</h3>
  <table>
    <tr>
      <th id="tag-name">タグ名</th>
      <th id="taglist-category">カテゴリ</th>
      <th id="taglist-attr">使用可能な属性</th>
			<th>説明</th>
		</tr>
    <tr v-for="tag in tags" :key="tag.id">
      <td >{{tag.tagName }}</td>
      <td>
        <div v-for="category in tag.categories" :key="category.id">
          {{category.categoryName}}
        </div>
      </td>
      <td>
        <!--最終要素の,を省略したいが方法不明。以下だとエラー発生。attrがany型だから？ -->
        <!--<div v-for="(attr,index) in tag.attrs" :key="attr.id" style="display: inline-block; _display: inline;">-->
        <div v-for="attr in tag.attrs" :key="attr.id" style="display: inline-block; _display: inline;">
          {{attr.attrName}},
          <!--<div v-if="attrs.id !== tag.attrs.length - 1">
          ,
          </div>-->
        </div>
      </td>
      <td class="description">{{ tag.description }}</td>
    </tr>
  </table>
</section>
  </div>
  </template>
  