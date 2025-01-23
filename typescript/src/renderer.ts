import { Shape } from "./shapes/shape.js";

function newRenderer(figure: Shape) {
    return {
        draw() {
            const area: number = figure.computeArea()
            console.log("Shape drawn\n" + "Its area is " + area)
        }
    }
}

export { newRenderer }