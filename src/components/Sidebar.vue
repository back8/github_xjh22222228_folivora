<template>
  <div class="sidebar">
    <div class="logo-wrapper">
      <img class="logo" :src="BASE_URL + 'favicon.png'" />
      <span class="name">Folivora</span>
    </div>

    <el-input
      v-model="keyword"
      placeholder="搜索全部"
      size="small"
      class="input"
      prefix-icon="el-icon-search"
      :maxlength="200"
    >
    </el-input>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Sidebar',

  setup() {

    return {
      BASE_URL: process.env.BASE_URL,
      keyword: ref('')
    }
  }
})
</script>

<style lang="scss">
.sidebar {
  background: #f4f4f4;
  width: 240px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  text-align: center;
  padding: 30px 0;

  .logo-wrapper {
    display: flex;
    align-items: center;
    padding-left: 30px;

    .name {
      font-size: 24px;
      font-weight: 500;
      margin-left: 10px;
    }
  }

  .logo {
    width: 50px;
  }

  .input {
    padding: 30px 0;
    width: 200px;
  }
}
</style>
