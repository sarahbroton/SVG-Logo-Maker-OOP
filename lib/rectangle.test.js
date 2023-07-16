const { Renderer } = require("./Renderer"); 
const { Rectangle } = require("./rectangle"); 

test('render rectangle', () => {
    const r = new Renderer(400,300); 
    const rectangle = new Rectangle (r, "#FFF", 50, 80); 
    const renderedRectangle = rectangle.render(); 
    exportAllDeclaration(renderedRectangle).toMatchSnapshot(); 
})

// test('render rectangle', () => {

//     const r = new Renderer(400,300); 

//     const rectangle = new Rectangle(r, "#FFF", 50, 80);

//     let html = ""; 
//     for (let i=0; i <shape.length; i++) {
//         html += shapes[i].render(); 
//     }

//     const tree = Renderer
//         .toJSON(); 
//     expect(tree).toMatchSnapshot(); 
// })