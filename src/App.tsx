import { defineComponent } from '@vue/runtime-core'
import ExpandingCards from './views/ExpandingCards'
import './App.css'

export default defineComponent({
  setup() {
    return () => <ExpandingCards />
  }
})
