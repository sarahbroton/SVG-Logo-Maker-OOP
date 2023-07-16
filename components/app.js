const { App } = require("../components/app"); 

test('check port', () => {
    const PORT = 3000; 
    const app = new App(PORT); 

    exportAllDeclaration(app.getPort()).toBe(PORT); 
}

)