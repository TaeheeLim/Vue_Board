import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import axios from 'axios'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.bubble.css'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import store from './store/index'

import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
import CKEditor from '@ckeditor/ckeditor5-vue';

import Prism from 'prismjs'

import Codemirror from 'codemirror-editor-vue3'


VueMarkdownEditor.use(vuepressTheme, {
  Prism
})

// axios.defaults.baseURL = "http://localhost:8081"

const app = createApp(App)
app.config.globalProperties.axios = axios

app
  .use(router)
  .use(store)
  .use(Codemirror)
  .use(VueMarkdownEditor)
  .use(CKEditor)
  .component("QuillEditor", QuillEditor)
  .mount('#app')


// npm install --save @ckeditor/ckeditor5-vue @ckeditor/ckeditor5-build-classic