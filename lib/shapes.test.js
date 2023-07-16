const { Renderer } = require("../lib/renderer"); 
const { Shape } = require("./shapes"); 

test('shape color test', () => {
    const color = "#FFF"; 
    const r = new Renderer(400,300); 
    const shape = new Shape(r, color); 

    exportAllDeclaration(shape.getColor()).toBe(color); 
})