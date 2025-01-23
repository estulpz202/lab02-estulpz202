import { Shape } from './shape'

interface Rectangle extends Shape {}

function newRectangle (width: number, height: number): Rectangle {
  return {
    computeArea: function (): number {
      return width * height
    }
  }
}

export { Rectangle, newRectangle }
