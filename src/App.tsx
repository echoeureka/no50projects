import { defineComponent } from '@vue/runtime-core'
import { RouterView } from 'vue-router'
import './App.css'

export default defineComponent({
  setup() {
    return () => <RouterView />
  }
})
