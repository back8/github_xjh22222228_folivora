<template>
  <div class="home">
    {{ v }}
  </div>
</template>

<script type="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HomePage',

  setup() {
    return {
      v: ref('asfsdfsadsdfasfdfasfd')
    }
  }
})
</script>
