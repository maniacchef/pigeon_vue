<script>
export default{
  components:{

  },
  created(){
    this.$store.dispatch("getAllAttrs")
    this.$store.dispatch("getAllCategories")
    this.$store.dispatch("getAllTags")
  }
}
</script>
<template>
  <header>
    <div class="wrapper">
    <nav class="menu">
      <router-link to="/">トップ</router-link> |
      <router-link to="/regist">登録実例</router-link> |
      <router-link to="/list">一覧実例</router-link>
    </nav>
    </div>
  </header>
  <main>
  <article>
      <router-view/>
  </article>
  </main>
</template>

<style>
@import "./css/destyle.css";
@import "./css/style.css";

</style>
