import { createStore } from 'vuex'
import { getAttrs, getCategories, getTags } from "../api/OriginalApi"

export default createStore({
  //state：vuexで管理されるデータの定義
  state() {
    return {
      categories: [],
      attrs: [],
      tags:[]
    }
  },
  //getters：データの取得
  getters: {
  },
  //mutations:データの変更
  mutations: {
    setAttrs(state, attrs) {
      state.attrs = attrs
    },
    setCategories(state, categories) {
      state.categories = categories
    },
    setTags(state, tags) {
      state.tags = tags
    }
  },
  //actions：非同期通信時に使用
  actions: {
    async getAllAttrs(context) {
      const attrs = await getAttrs()
      context.commit("setAttrs", attrs)
    },
    async getAllCategories(context) {
      const categories = await getCategories()
      context.commit("setCategories", categories)
    },
    async getAllTags(context) {
      const tags = await getTags()
      context.commit("setTags", tags)
    },
  },
  //modules：stateで定義したデータのモジュール（グループ）化
  modules: {
  }
})
