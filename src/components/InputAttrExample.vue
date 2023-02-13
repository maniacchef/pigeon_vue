<template>
	<section>
		<h3>inputタグ 属性 実例</h3>
		<form name="mainform02" v-on:submit.prevent="gotoTop">
			<fieldset>
				<p>
				<label>readonly：</label>
					<input type="text" readonly value="u cant write here.">
				</p>

				<!-- minlength属性は、動作しません -->
				<!-- maxlength属性は、chromeだと動作しません -->
				<p id="maxlength">
				<label>maxlength：</label>
					<input type="number" maxlength="4">-
					<input type="number" maxlength="4">-
					<input type="number" maxlength="4">
				</p>

				<p>
				<label>disabled：</label>
					<input type="submit" disabled value="押せません">
				</p>

				<p id="placeholder">
				<label>placeholder：</label>
					<input type="number" placeholder="080">-
					<input type="number" placeholder="1234">-
					<input type="number" placeholder="5678">
				</p>

				<p id="required">
				<label>required：</label>
					<input type="text" required placeholder="氏 必須">
					<input type="text" required placeholder="名 必須">
				</p>

				<p><label>submit：</label>
					<input type="submit">
				</p>
			</fieldset>
		</form>
	</section>
</template>