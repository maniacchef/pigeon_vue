<script>
export default {
  name: 'HomeView'
}
</script>
<template>
    <div class="wrapper w640" id="top">
    <h1>{{ msg }}</h1>
    <img alt="anko cat" src="../assets/anko.jpg">
    <section>
		<h3>環境 </h3>
		<div class="table-type1" id="table-top-spec">
			<div class="tr">
				<div class="th">サーバ</div>
				<div class="td">さくらVPS</div>
			</div>
			<div class="tr">
				<div class="th">OS</div>
				<div class="td">almalinux 8.7 (Stone Smilodon)</div>
			</div>
			<div class="tr">
				<div class="th">Webサーバ</div>
				<div class="td">Apache 2.4.37</div>
			</div>
			<div class="tr">
				<div class="th">DB</div>
				<div class="td">mySQL 8.0.30</div>
			</div>
			<div class="tr">
				<div class="th">フロントエンド</div>
				<div class="td">vue 2.7.14</div>
			</div>
      <div class="tr">
				<div class="th">バックエンド</div>
				<div class="td">java11(Adopt OpenJDK11.0.17),springboot2.7.7</div>
			</div>
		</div>
	</section>
  </div>
</template>
<!-- scopedを付けると対象ファイルのみにcss適用 -->
<style scoped>
	h3 {
		margin: 60px 0 0;
	}
	/* テーブル(divタグを利用して疑似的にtableタグを模倣した実装) */
	article .wrapper .table-type1{
		width: 		100%;
		border-top: 1px solid #cccccc;
		border-left:1px solid #cccccc;
	}

	article .wrapper .table-type1 .tr{
		display:table;
		width:	100%;
	}

	article .wrapper .table-type1 .tr .th,
	article .wrapper .table-type1 .tr .td{
		display: 		table-cell;
		background: 	#ffffff;
		border-right:	1px solid #cccccc;
		border-bottom:	1px solid #cccccc;
	}

	article .wrapper .table-type1 .tr .th{
		background: #777777;
		color :		white;
	}

	#table-top-spec{
		margin:auto;
	}
</style>