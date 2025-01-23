import { Shape } from './shapes/shape.js'

interface Renderer {
  draw: () => void
}

function newRenderer (figure: Shape): Renderer {
  return {
    draw () {
      const area: number = figure.computeArea()
      console.log('Shape drawn\n' + 'Its area is ' + area)
    }
  }
}

export { Renderer, newRenderer }
