const Stencil = require('../index')


const repoUrl = "https://raw.githubusercontent.com/valentinradu/stencil/master/assets"
const view = {
    font: {
        name: "Roboto",
        url: "https://fonts.googleapis.com/css?family=Roboto:300,400,500"
    },
    logo: {
        src: `${repoUrl}/logo.png`
    },
    heading: "Here comes the code!",
    message: "Your confirmation code is here 💪🏼! Copy and paste it into the form to complete the email verification process.",
    unsubscribe: "We dislike span as much as everybody else. If you don’t want to receive our emails anymore, <a href=\"https://localhost\">unsubscribe here</a>."
}

const stencil = new Stencil("newsletter")
console.log(stencil.render(view))