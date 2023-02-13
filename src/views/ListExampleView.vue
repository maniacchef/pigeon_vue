<script>
  import CategoryList from '@/components/CategoryList.vue';
  import GlobalAttrList from '@/components/GlobalAttrList.vue';
  import HtmlTagList from '@/components/HtmlTagList.vue';
  export default {
    name: 'ListExampleView',
    created(){
      this.$store.dispatch("getAllAttrs")
      this.$store.dispatch("getAllCategories")
      this.$store.dispatch("getAllTags")
    },
    components: { CategoryList,GlobalAttrList,HtmlTagList }
  }
</script>
<template>
  <div class="wrapper">
    <h1>一覧実例</h1>
    <CategoryList />
    <GlobalAttrList />
    <HtmlTagList />
  </div>
  </template>