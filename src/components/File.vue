<template>
  <div class="file">
    <img :src="filePath" alt="" class="file-icon" draggable="false">

    <div class="filename">奥雅</div>
  </div>
</template>

<script type="ts">
import { defineComponent, computed } from 'vue'
import otherSvg from '@/assets/icon/file-other.svg'
import FileCode from '@/assets/icon/file-code.svg'
import FileDoc from '@/assets/icon/file-doc.svg'
import FileFolder from '@/assets/icon/file-folder.svg'
import FilePdf from '@/assets/icon/file-pdf.svg'
import FileTxt from '@/assets/icon/file-txt.svg'
import FileZip from '@/assets/icon/file-zip.svg'

export default defineComponent({
  name: 'File',

  props: {
    extname: String
  },

  setup(props) {
    const { extname } = props

    const filePath = computed(() => {
      switch (extname) {
        case 'code':
          return FileCode

        case 'doc':
          return FileDoc

        case 'folder':
          return FileFolder

        case 'pdf':
          return FilePdf

        case 'txt':
          return FileTxt

        case 'zip':
        case 'gz':
        case 'tar':
          return FileZip

        default:
          return FileFolder
      }
    })

    return {
      filePath
    }
  }
})
</script>

<style lang="scss" scoped>
.file {
  padding: 10px 0;
  width: 100px;
  text-align: center;
  transition: .1s;
  border-radius: 5px;
  margin: 20px 20px 0 0;
  cursor: pointer;

  &:hover {
    background: #f4f4f4;
  }

  .file-icon {
    width: 100px;
    height: 80px;
  }

  .filename {
    line-height: 1.5;
    color: #000;
  }
}
</style>
