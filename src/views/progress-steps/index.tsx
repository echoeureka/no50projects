import { defineComponent, onMounted } from 'vue'
import './index.scss'

export default defineComponent({
  name: 'ProgressSteps',
  setup() {
    onMounted(() => {
      const progress = document.querySelector('#progress') as HTMLElement
      const prev = document.querySelector('#prev')
      const next = document.querySelector('#next')
      const circles = document.querySelectorAll('.progress-steps .circle')

      let currentActive = 1

      const update = () => {
        circles.forEach((circle, idx) => {
          if (idx < currentActive) circle.classList.add('active')
          else circle.classList.remove('active')
        })

        const actives = document.querySelectorAll('.progress-steps .active')

        progress?.style.setProperty(
          'width',
          `${((actives.length - 1) / (circles.length - 1)) * 100}%`
        )

        if (currentActive === 1) prev?.setAttribute('disabled', 'true')
        else if (currentActive === circles.length)
          next?.setAttribute('disabled', 'true')
        else {
          prev?.removeAttribute('disabled')
          next?.removeAttribute('disabled')
        }
      }

      prev?.addEventListener('click', () => {
        currentActive > 1 && currentActive--
        update()
      })

      next?.addEventListener('click', () => {
        currentActive < circles.length && currentActive++
        update()
      })
    })
    return () => (
      <div class='progress-steps'>
        <div class='container'>
          <div class='progress-container'>
            <div class='progress' id='progress'></div>
            <div class='circle active'>1</div>
            <div class='circle'>2</div>
            <div class='circle'>3</div>
            <div class='circle'>4</div>
          </div>

          <button class='btn' id='prev' disabled>
            Prev
          </button>
          <button class='btn' id='next'>
            Next
          </button>
        </div>
      </div>
    )
  }
})
