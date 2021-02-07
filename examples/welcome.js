const Stencil = require('../index')


const view = {
    title: "Welcome to Preroute!",
    preview: "Welcome to Preroute!",
    font: {
        name: "Roboto",
        url: "https://fonts.googleapis.com/css?family=Roboto:300,400,500"
    },
    header: {
        logo: {
            width: '100px',
            height: 'auto',
            src: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
        },
        button: {
            label: "GET STARTED",
            href: "https://google.com"
        },
        greeting: "Welcome, Jane! 🎉",
        message: "We’re happy to have you on board. You’re now part of a community that connects developers across the world. Meet others. Tell us your story. Learn something new."
    },
    theme: {
        body: '#E9EAEB',
        header: '#F7F7F7',
        paper: 'white',
        text: '#5C5A52',
        textHeavy: '#221E12',
        label: "white",
        button: "#7870FA",
    },
    layout: {
        align: 'left'
    }
}

const stencil = new Stencil("welcome")
console.log(stencil.render(view))