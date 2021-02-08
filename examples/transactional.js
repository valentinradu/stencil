const Stencil = require('../index')


const repoUrl = "https://raw.githubusercontent.com/valentinradu/stencil/master/assets"
const view = {
    preview: "Forgot your password?",
    font: {
        name: "Roboto",
        url: "https://fonts.googleapis.com/css?family=Roboto:300,400,500"
    },
    logo: {
        width: '100px',
        src: `${repoUrl}/logo.png`
    },
    action: {
        label: "RESET PASSWORD",
        href: "https://localhost"
    },
    heading: "Forgot your password?",
    message: "Oops! Don’t worry, it happens to the best of us! Click below to reset it. If you didn’t request this change, you can safely ignore this message.",
    social: [
        {
            icon: {
                src: `${repoUrl}/twitter.png`,
                width: "25px",
                height: "20px"
            },
            href: "https://twitter.com"
        },
        {
            icon: {
                src: `${repoUrl}/facebook.png`,
                width: "11px",
                height: "20px"
            },
            href: "https://facebook.com"
        },
        {
            icon: {
                src: `${repoUrl}/instagram.png`,
                width: "20px",
                height: "20px"
            },
            href: "https://instagram.com"
        }
    ],
    address: {
        firstLine: "Bohemian Inc, 221B Baker Street",
        secondLine: "London, United Kingdom"
    },
    unsubscribe: "We dislike span as much as everybody else. If you don’t want to receive our emails anymore, <a href=\"https://localhost\">unsubscribe here</a>."
}

const stencil = new Stencil("transactional")
console.log(stencil.render(view))