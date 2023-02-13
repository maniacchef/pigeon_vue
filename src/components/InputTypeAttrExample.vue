<template>
	<section>
		<h3>inputタグ type属性 実例</h3>
		<div id="input-warning-list" style="color: red;"></div>
		<!-- 元は以下のような設定で、servletにリクエストを飛ばしていた。 -->
		<!-- vue移行に伴いMVCモデルを使わなくなったため不要な処理となった -->
		<!-- 新人研修向けにコメント化して残しておきます -->
		<!-- <form action="servlet/FrontController" method="POST" id="chkForm"></form> -->
		<!-- prevent この設定をすると、submit押下時、各フォームにあらかじめ付いている入力チェック（例：required）を -->
		<!-- 実施した後、問題なければ割りあてられたメソッド（今回の場合check）を呼び出す。 -->
		<!-- 画面遷移もjs側で管理するため、action属性は消してます -->
		<form id="chkForm" v-on:submit.prevent="check">
			<input type="hidden" name="BUTTON_ID" value="101_01_01">
			<fieldset>
				<p><label>text：</label>
					<input type="text">
				</p>
				<p><label>password：</label>
					<input type="password" id="password1"/>
					<label style="font-size:12px;text-align:left;margin-left:20px;width:240px;">
					（大文字小文字数字含む、8～16文字）</label>
				</p>
				<p><label style="font-size:12px;text-align:left;">※同じものを入力</label>
					<input type="password" id="password2">
				</p>

				<!-- 内部的にはtextboxと同じ -->
				<!-- スマホ（iOS、chrome）だと、入力値が番号に絞られる -->
				<p><label>tel：</label>
					<!-- v-modelを指定することで、双方向バインディング（リアルタイムの入力値確認）を実現 -->
					<input type="text" name="tel" v-model="tel">
				</p>
				<p v-if="isInValidTel" style="color: red;">電話番号は11桁にしてください</p>

				<!-- number属性は、eclipseの標準ブラウザ、スマホ（iOS、chrome）だと動作しません -->
				<!-- chromeでは増減用の矢印が別途表示される。cssリセットを行っても表示される。 -->
				<p><label>number：</label>
					<input type="number">-
					<input type="number">-
					<input type="number">
				</p>

				<!-- @を含む文字列の場合、@前後に一文字以上含まれるかの判定がブラウザで行われる -->
				<p><label>email：</label>
					<input type="email" id="email">
				</p>

				<p><label>checkbox：</label>
					<input type="checkbox" name="cbsample" value="北海道" checked>北海道
					<input type="checkbox" name="cbsample" value="青森">青森
					<input type="checkbox" name="cbsample" value="秋田">秋田
				</p>

				<p><label>radio：</label>
					<input type="radio" name="rdsample" value="good" checked>good
					<input type="radio" name="rdsample" value="soso">soso
					<input type="radio" name="rdsample" value="bad">bad
				</p>

				<p><label>file：</label>
					<input type="file">
				</p>

				<!-- date属性は、eclipseの標準ブラウザだと動作しません -->
				<p><label>date：</label>
					<input type="date">
				</p>

				<!-- month属性は、eclipseの標準ブラウザだと動作しません -->
				<p><label>month：</label>
					<input type="month">
				</p>

				<p><label>reset：</label>
					<input type="reset">
				</p>

				<p><label>submit：</label>
					<button type="submit">送信</button>
				</p>

				<p><label>hidden：</label>
					<input type="hidden" name="hiddensample" value="abc">
				</p>
			</fieldset>
		</form>
	</section>
</template>
<script>
	export default {
		data() {
			return {
			tel: "09012345678"
			};
		},
		methods: {
			isValidPassword(str) {
				const ratz = /[a-z]/, rAtZ = /[A-Z]/, r0t9 = /[0-9]/;
				return ratz.test(str) && rAtZ.test(str) && r0t9.test(str);
			},

			//メンバーIDとパスワードの入力チェック
			check() {
				//メッセージ
				var message = "";
				//パスワードの入力値
				var password1 = document.getElementById("password1").value;
				var password2 = document.getElementById("password2").value;
				//パスワードが一致しているか
				if (password1 != password2) {
					message += "<p>パスワードは同じものを入れてください。</p>";
				}
				//パスワード桁数チェック
				if (password1.length < 8 || 16 < password1.length) {
					message += "<p>パスワードは8～16桁にしてください。</p>";
				}
				//パスワード使用文字チェック（前半で全角を除外、後半で大文字小文字を含む半角英数字かを判定
				if (password1.match(/^[^\x20-\x7E｡-ﾟ]+$/) || !this.isValidPassword(password1)) {
					message += "<p>パスワードは大文字小文字を含む半角英数字にしてください。</p>";
				}
				var targetDiv = document.getElementById("input-warning-list");
				targetDiv.innerHTML = message;
				/*if (message != "") {
				return false;
				}*/
				this.$router.push({ name: "home" });
			}
		},
		//算出プロパティと呼ばれる関数を定義する場所。computedは、dataプロパティと同様にデータの変化を画面に即時反映するが、
		//computedはデータに何らかの加工をしてから反映させる場合に使う
		computed: {
			isInValidTel() {
				return this.tel.length != 11;
			}
		}
	}
</script>