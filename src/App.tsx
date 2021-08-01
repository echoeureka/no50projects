import { defineComponent } from '@vue/runtime-core'
import ExpandingCards from './views/expanding-cards'
import './App.css'

export default defineComponent({
  setup() {
    return () => <ExpandingCards />
  }
})
