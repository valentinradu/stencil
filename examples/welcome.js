const Stencil = require('../index')


const repoUrl = "https://raw.githubusercontent.com/valentinradu/stencil/master/assets"
const view = {
    title: "Welcome to Preroute!",
    preview: "Welcome to Preroute!",
    font: {
        name: "Roboto",
        url: "https://fonts.googleapis.com/css?family=Roboto:300,400,500"
    },
    logo: {
        width: '100px',
        height: 'auto',
        src: `${repoUrl}/logo.png`
    },
    action: {
        label: "GET STARTED",
        href: "https://google.com"
    },
    greeting: "Welcome, Jane! 🎉",
    message: "We’re happy to have you on board. You’re now part of a community that connects developers across the world. Meet others. Tell us your story. Learn something new.",
    steps: {
        title: "The next steps",
        items: [
            {
                icon: {
                    src: `${repoUrl}/checkbox.png`,
                    width: "24px",
                    height: "24px"
                },
                description: "Follow the link we’ve sent and confirm your email address."
            },
            {
                icon: {
                    src: `${repoUrl}/sliders.png`,
                    width: "24px",
                    height: "24px"
                },
                description: "Tweek your dashboard and notifications."
            },
            {
                icon: {
                    src: `${repoUrl}/dialog.png`,
                    width: "24px",
                    height: "24px"
                },
                description: "Post, comment and meet other awesome developers."
            }
        ]
    },
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
        },
        {
            icon: {
                src: `${repoUrl}/pinterest.png`,
                width: "19px",
                height: "20px"
            },
            href: "https://pinterest.com"
        },
        {
            icon: {
                src: `${repoUrl}/tiktok.png`,
                width: "18px",
                height: "20px"
            },
            href: "https://tiktok.com"
        },
        {
            icon: {
                src: `${repoUrl}/whatsapp.png`,
                width: "20px",
                height: "20px"
            },
            href: "https://whatsapp.com"
        },
        {
            icon: {
                src: `${repoUrl}/youtube.png`,
                width: "29px",
                height: "20px",
                href: "https://youtube.com"
            }
        }
    ],
    address: {
        firstLine: "Bohemian Inc, 221B Baker Street",
        secondLine: "London, United Kingdom"
    },
    unsubscribe: "We dislike span as much as everybody else. If you don’t want to receive our emails anymore, <a href=\"https://google.com\">unsubscribe here</a>.",
    theme: {
        body: '#E9EAEB',
        header: '#F7F7F7',
        paper: 'white',
        text: '#5C5A52',
        textHeavy: '#221E12',
        label: "white",
        button: "#7870FA",
        link: "#7870FA"
    },
    layout: {
        align: 'left'
    }
}

const stencil = new Stencil("welcome")
console.log(stencil.render(view))