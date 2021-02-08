const mjml = require('mjml')
const mustache = require('mustache')
const fs = require('fs')


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
