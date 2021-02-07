const mjml = require('mjml')
const mustache = require('mustache')
const fs = require('fs')


class Stencil {
    constructor(template) {
        this.template = this.templateByName(template)
        this.head = this.templateByName('head')
        this.header = this.templateByName('header')
    }

    render(view) {
        return mustache.render(
            this.template, view, 
            {
                head: this.head,
                header: this.header
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
