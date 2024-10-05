<template>
  <div :class="theme">
    <pre :contenteditable="true">
      <code :class="`language-${lang}`">
{{ code }}  
      </code>
    </pre>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Prism from 'prismjs'
import 'prismjs/components/prism-c.js'
import 'prismjs/components/prism-css.js'
import 'prismjs/components/prism-cpp.js'
import 'prismjs/components/prism-csharp.js'
import 'prismjs/components/prism-go.js'
import 'prismjs/components/prism-java.js'
import 'prismjs/components/prism-python.js'
import 'prismjs/components/prism-rust.js'
import 'prismjs/components/prism-ruby.js'
import 'prismjs/components/prism-sql.js'

onMounted(() => {
  window.Prism = window.Prism || {}
  window.Prism.manual = true
  Prism.highlightAll()
})

defineProps({
  code: String,
  lang: String,
  theme: String
})
</script>

<style lang="scss">
.default {
  @import 'prismjs/themes/prism';
}
.coy {
  @import 'prismjs/themes/prism-coy';
}
.dark {
  @import 'prismjs/themes/prism-dark';
}
.funky {
  @import 'prismjs/themes/prism-funky';
}
.okaidia {
  @import 'prismjs/themes/prism-okaidia';
}
.solarizedlight {
  @import 'prismjs/themes/prism-solarizedlight';
}
.tomorrow {
  @import 'prismjs/themes/prism-tomorrow';
}
.twilight {
  @import 'prismjs/themes/prism-twilight';
}
</style>
