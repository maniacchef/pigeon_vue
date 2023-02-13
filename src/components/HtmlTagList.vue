<script>
	export default {
		computed:{
      tags() {
        return this.$store.state.tags
      }
		}
	}
</script>
<template>
<section>
	<h3>htmlタグ一覧</h3>
  <table>
    <tr>
      <th id="tag-name">タグ名</th>
      <th id="taglist-category">カテゴリ</th>
      <th id="taglist-attr">使用可能な属性</th>
			<th id="taglist-desc">説明</th>
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
</template>
<style>
  /* スマートフォン用設定 */
  @media screen and (max-width:600px){
    /* htmlタグ一覧用 */
    th#tag-name{
        width:		80px;
    }
    th#taglist-category{
        width:		120px;
    }
    th#taglist-attr{
        width:		120px;
    }
    th#taglist-desc{
        width:		130px;
    }
  }
  /* PC用設定 */
  @media screen and (min-width:601px){
    /* htmlタグ一覧用 */
    th#tag-name{
        width:			12%;
    }
    th#taglist-category{
        width:			18%;
    }
    th#taglist-attr{
        width:			35%;
    }
  }
</style>