<template>
  <div class="home">
    <div class="mod-wrapper">
      <File
        v-for="item of 0"
        :key="item"
        @click.native="onClickFile(item)"
      />
    </div>
    
    <div class="total-num">共 15 项</div>
  </div>
</template>

<script type="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import File from '../components/File.vue'

export default defineComponent({
  components: { File },
  name: 'HomePage',

  setup() {
    const router = useRouter()

    function onClickFile(file) {
      router.replace({
        path: '/',
        query: {
          path: 'asdf'
        }
      })
    }

    return {
      onClickFile
    }
  }
})
</script>

<style lang="scss">
.mod-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.total-num {
  margin-top: 30px;
  width: 100%;
  text-align: center;
  color: #777;
}
</style>
