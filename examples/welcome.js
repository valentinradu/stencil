const Stencil = require('../index')


const view = {
    title: "Welcome to Preroute!",
    preview: "Welcome to Preroute!",
    font: {
        name: "Roboto",
        url: "https://fonts.googleapis.com/css?family=Roboto:300,400,500"
    },
    theme: {
        dark: false
    },
    greeting: "Welcome, Jane! 🎉"
}

const stencil = new Stencil("welcome")
console.log(stencil.render(view))