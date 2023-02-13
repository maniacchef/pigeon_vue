<script>
import PigeonHeader from '@/components/PigeonHeader.vue';
export default{
  components:{
	PigeonHeader
  }
}
</script>
<template>
<PigeonHeader />
  <main>
  <article>
    <router-view/>
  </article>
  </main>
</template>

<style>
@import "./css/destyle.css";
@import "./css/style.css";

/* html全体 */
/*
section{
  border: orangered 2px dashed; デバッグ用
} */

body{
	font-family: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
	max-width:		1400px;
	margin-left:	auto;
	margin-right:	auto;
}

h1,h3{
	color:	teal;
}

/* メインコンテンツ */
article .wrapper{
	margin:0 auto;		/* 縦にmargin0設定、左右は自動指定 */
}

article section{
  margin:0 auto;
}

/* テーブル(tableタグを利用した実装) */
.table-overflow{
	overflow:auto;
	/*white-space:nowrap;*/
}

table{
	border-width:		1px;
	width:				100%;
	border-collapse:	collapse;	/* これを指定しないと枠線が二重に出る */
	border-spacing:		0;			/* これを指定しないと枠線が二重に出る */
	table-layout: 		fixed;		/* これを指定しないと、tableの幅が表示するコンテンツの長さに影響される */
}
th {
	border-width:	1px;
	background:		#777777;
	color:			white;
	border-color:	#444444;
	text-align:		center;
	font-weight:	normal;
}

td {
	border-width:	1px;
	border-color:	gray;
}

tr:nth-child(odd){
	background:#dddddd;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* スマートフォン用設定 */
@media screen and (max-width:600px){
	h1{
		margin-bottom:	3vw;
		font-size:		6vw;
	}

	h3{
		margin-bottom:	3vw;
		font-size:		5vw;
	}
  /* 画面の最大幅 */
  article .wrapper{
    max-width:96vw;
  }	
}
/* PC用設定 */
@media screen and (min-width:601px){
  h1{
    margin-bottom:	2vw;
    font-size:		1.6vw;
  }

  h3{
    margin-bottom:	1vw;
    font-size:		1.2vw;
  }
  article .wrapper{
		max-width:60vw;		/* 画面の最大幅 */
	}

	/* 幅640pxのページ用 */
	article .w640{
		max-width:40vw;		/* 画面の最大幅 */
	}

  article section{
		margin-bottom:3vw;
	}
}
</style>
