<template>
	<section>
		<h3>その他フォーム関連タグ 実例</h3>
		<form name="mainform03" v-on:submit.prevent="gotoTop">
			<fieldset>
				<!-- optionタグにvalue属性を指定すると、要素内容(例：天下一品)とは別の値を送信することが可能 -->
				<p>
					<label>select：</label>
					<select name="noodle" style="width:120px;">
						<option value="1" selected>天下一品</option>
						<option value="2">風龍</option>
						<option value="3">舎鈴</option>
						</select>
				</p>
				<p><label>submit：</label>
					<input type="submit">
				</p>
			</fieldset>
		</form>
	</section>
</template>