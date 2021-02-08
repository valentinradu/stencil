const mjml = require('mjml')
const mustache = require('mustache')
const fs = require('fs')

const repoUrl = "https://raw.githubusercontent.com/valentinradu/stencil/master/assets"
const icons = {
    twitter: {
        src: `${repoUrl}/twitter.png`,
        width: "25px",
        height: "20px"
    },
    facebook: {
        src: `${repoUrl}/facebook.png`,
        width: "11px",
        height: "20px"
    },
    instagram: {
        src: `${repoUrl}/instagram.png`,
        width: "20px",
        height: "20px"
    },
    pinterest: {
        src: `${repoUrl}/pinterest.png`,
        width: "19px",
        height: "20px"
    },
    tiktok: {
        src: `${repoUrl}/tiktok.png`,
        width: "18px",
        height: "20px"
    },
    whatsapp: {
        src: `${repoUrl}/whatsapp.png`,
        width: "20px",
        height: "20px"
    },
    youtube: {
        src: `${repoUrl}/youtube.png`,
        width: "29px",
        height: "20px",
    },
}

class Stencil {
    constructor(template) {
        this.template = this.templateByName(template)
        this.head = this.templateByName('head')
        this.header = this.templateByName('header')
        this.footer = this.templateByName('footer')
    }

    render(view) {
        const defaultView = view

        if (defaultView) {
            defaultView.theme = {
                body: '#E9EAEB',
                header: '#F7F7F7',
                paper: 'white',
                text: '#5C5A52',
                textHeavy: '#221E12',
                label: 'white',
                button: '#7870FA',
                link: '#7870FA',
                codebg: '#E6E6E8',
                ...defaultView.theme
            }
            if (defaultView.logo) {
                defaultView.logo = {
                    width: '120px',
                    height: 'auto',
                    ...defaultView.logo
                }
            }
            if (defaultView.steps && defaultView.steps.items) {
                defaultView.steps = defaultView.steps.items
                    .map(r => {
                        return {
                            ...r,
                            icon: {
                                width: "24px",
                                height: "auto",
                                ...r.icon
                            }
                        }
                    })
            }
            if (defaultView.social) {
                defaultView.social = defaultView.social
                    .map(r => {
                        if (r.name) {
                            return {
                                ...r,
                                icon: icons[r.name]
                            }
                        }
                        else {
                            return {
                                ...r,
                                icon: {
                                    width: "20px",
                                    height: "auto",
                                    ...r.icon
                                }
                            }
                        }
                    })
            }
        }

        return mustache.render(
            this.template, defaultView, 
            {
                head: this.head,
                header: this.header,
                footer: this.footer
            },
            {
                escape: value => value
            }
        )
    }

    templateByName(name) {
        return String(fs.readFileSync(`${__dirname}/templates/${name}.mjml`))
    }
}

module.exports = Stencil
