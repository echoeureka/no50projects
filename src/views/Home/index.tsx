import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import './index.scss'

export default defineComponent({
  setup() {
    return () => (
      <div class='home'>
        <div class='header'>Not only 50 projects - Ryan Moyo</div>
        <div class='content'>
          <RouterLink to='/expanding-cards'>
            <div class='card'>Expanding Cards</div>
          </RouterLink>
          <RouterLink to='/progress-steps'>
            <div class='card'>Progress Steps</div>
          </RouterLink>
          <RouterLink to='/rotating-navigation-animation'>
            <div class='card'>Rotating Navigation Animation</div>
          </RouterLink>
          <div class='card'>Hidden Search Widget</div>
          <div class='card'>Blurry Loading</div>
          <div class='card'>Scroll Animation</div>
          <div class='card'>Split Landing Page</div>
          <div class='card'>Form Wave</div>
          <div class='card'>Sound Board</div>
          <div class='card'>Dad Jokes</div>
          <div class='card'>Event Keycodes</div>
          <div class='card'>Faq Collapse</div>
          <div class='card'>Random Choice Picker</div>
          <div class='card'>Animated Navigation</div>
          <div class='card'>Incrementing Counter</div>
          <div class='card'>Drink Water</div>
          <div class='card'>Movie App</div>
          <div class='card'>Background Slider</div>
          <div class='card'>Theme Clock</div>
          <div class='card'>Button Ripple Effect</div>
          <div class='card'>Drag N Drop</div>
          <div class='card'>Drawing App</div>
          <div class='card'>Kinetic Loader</div>
          <div class='card'>Content Placeholder</div>
          <div class='card'>Sticky Navbar</div>
        </div>
        <div class='footer'>HAVE FUN</div>
      </div>
    )
  }
})
