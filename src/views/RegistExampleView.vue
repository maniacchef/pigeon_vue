<template>
    <div class="wrapper w640">
		<InputTypeAttrExample />
		<InputAttrExample />
		<ExtraFormExample />
    </div>
  </template>
<!-- scriptタグの定義はtemplateタグの後じゃないと上手くいかなかった。 -->
<script>
	import InputTypeAttrExample from '@/components/InputTypeAttrExample.vue';
	import InputAttrExample from '@/components/InputAttrExample.vue';
	import ExtraFormExample from '@/components/ExtraFormExample.vue';

	export default {
		name: "RegistExample",

		//未使用だけどprops学習用に残してあります。理解したら消してよし
		//propsは、親コンポーネントから子コンポーネントに値を渡すためのもの
		//c.f. v-bind
		props: {
			msghoge: {
				type: String,
				default: "abcde"
			}
		},
		//とりあえずここに実装。コンポーネント化する場合は、componentフォルダへの切り出しが良いと思われる
		//methods：Vue内で扱えるメソッド（機能）を定義する場所。他の関数やHTMLテンプレート内から呼び出して
		//使うことができる
		methods: {
			gotoTop() {
				this.$router.push({ name: "home" });
			}
		},
		components: { InputTypeAttrExample,InputAttrExample,ExtraFormExample }
	}
</script>
<style>
	/* フォーム */
	article section #input-warning-list{
		margin:0 auto;
	}

	form{
		background:#ddeeee;
	}

	form label{
		display:inline-block;
	}

	/* フォームのinputタグについて、cssリセットをかけるとデザインが大きく変わる（例：背景が白でなくなる） */
	/* cssリセットをかける場合、フォームのinputタグのtypeの各属性について、デザインを自前で用意する必要がある。 */
	form input[type="text"],[type="password"],[type="tel"],[type="number"],[type="email"],[type="date"],[type="month"],
	select{
		background:		white;
		border-width:	1px;
	}
	form input[type="button"],[type="reset"],[type="submit"]{
		background:		#EEEEEE;
		border-width:	1px;
		color:			#444444;
	}

	/* fieldsetタグを使う場合は、borderを消さないと枠線が表示される（chromeは再現。eclipse標準ブラウザでは再現せず） */
	fieldset{
		border:none;
	}

	input[readonly]{
		color:gray;
	}

	/*<input type="text" readonly value="u cant write here" style="width:220px;color:gray;">*/

	/*リセットcssを指定すると、selectbox指定時に右端に表示される上向き矢印が消えるため、上向き矢印の表示を改めて指定する*/
	form select{
		-moz-appearance: 		menulist;
		-webkit-appearance:	menulist;
	}
	/* スマートフォン用設定 */
	@media screen and (max-width:600px){
		/* フォーム */
		article section #input-warning-list{
			margin-bottom:2vw;
		}

		form{
			padding-bottom:5vw;
		}

		form p{
			margin-top:	5vw;
			margin-left:5vw;
		}

		form label{
			width:			30vw;
			margin-bottom:	2vw;
			font-size:		4.5vw;
		}

		form input[type="text"],[type="password"],[type="tel"],[type="number"],[type="email"],[type="date"],[type="month"],
		select{
			padding:	1.7vw 2vw 2vw 2vw;
			line-height:1.7; /* これを指定しないと、ベースラインより下の文字が欠ける（例：g） */
			border-radius:	2vw;
		}

		form input[type="text"],[type="number"]{
			margin-right:1vw;
		}

		form input[type="button"],[type="reset"],[type="submit"]{
			padding:	1.7vw 2.5vw;
			border-radius:	2vw;
		}

		form input[type="text"],[type="password"],[type="tel"]{
			width:50vw;
		}

		form input[type="date"],[type="month"]{
			width:40vw;
		}

		form input[type="number"]{
			width:15vw;
		}

		form input[type="checkbox"],[type="radio"]{
			margin:0 1vw 0 1vw;
		}

		form #placeholder input{
			width:16vw;
		}

		form #required input{
			width:25vw;
		}
	}
	/* PC用設定 */
	@media screen and (min-width:601px){
		/* フォーム */
		article section #input-warning-list{
			margin-bottom:1vw;
		}

		form{
			border-radius:	0.2vw;
			padding-bottom:	1vw;
		}

		form p{
			margin-top:	1.5vw;
			margin-left:1vw;
		}

		form label{
			width:110px;
		}

		form input[type="text"],[type="password"],[type="tel"],[type="number"],[type="email"],[type="date"],[type="month"],
		select{
			padding:		0.4vw;
			line-height:	1.4; /* これを指定しないと、ベースラインより下の文字が欠ける（例：g） */
			border-radius:	0.2vw;
		}

		form input[type="text"],[type="number"]{
			margin-right:0.2vw;
		}

		form input[type="button"],[type="reset"],[type="submit"]{
			padding:		0.4vw 0.8vw;
			line-height:	1.4; /* これを指定しないと、ベースラインより下の文字が欠ける（例：g） */
			border-radius:	0.3vw;
		}

		form input[type="text"],[type="password"],[type="tel"]{
			width:12vw;
		}

		form input[type="tel"]{
			width:10vw;
		}

		form input[type="date"],[type="month"]{
			width:8vw;
		}

		form input[type="number"]{
			width:4vw;
		}

		form input[type="email"]{
			width:14vw;
		}

		form input[type="checkbox"],[type="radio"]{
			margin:0 0.3vw 0 1vw;
		}

		form #maxlength input, form #placeholder input{
			width:4vw;
		}

		form #required input{
			width:5vw;
		}
	}
</style>