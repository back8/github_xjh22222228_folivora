<template>
  <header class="header">
    <div class="left">
      <el-dropdown>
        <el-button type="primary" icon="el-icon-upload2" class="mr10">上传</el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>文件</el-dropdown-item>
            <el-dropdown-item>文件夹</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <el-dropdown>
        <el-button icon="el-icon-plus">新建</el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>新建文件夹</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

    <div class="right">
      <span class="user-info">xjh22222228</span>
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </div>
  </header>
</template>

<script type="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',

  
})
</script>

<style lang="scss" scoped>
.header {
  padding: 15px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;

  .right {
    display: flex;
    align-items: center;

    .user-info {
      margin: 7px 10px 0 0;
    }
  }
}
</style>