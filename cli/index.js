const {program} = require('commander')
const chokidar = require('chokidar')
const glob = require('glob')
const path = require('path')
const Stencil = require('../index')
const fs = require('fs')

const views = {}
glob.sync('views/*.js')
    .forEach(r => {
        const key = path.basename(r, path.extname(r))
        views[key] = require(path.resolve(r))
    })


program.version('0.0.1')

program
    .description('Builds each template or all of them')
    .option('-n --name <name>', 'Builds a specific template')
    .option('-a --all', 'Builds all templates')
    .option('-w --watch', 'Watches for changes', false)
    .action(opts => {
        if (opts.watch) {
            if (opts.name) {
                watch(() => {
                    build(opts.name)
                })
            }
            else {
                watch(() => {
                    buildAll()
                })
            }
        }
        else {
            if (opts.name) {
                build(opts.name)
            }
            else {
                buildAll()
            }
        }
    })

function stencil(name) {
    if (!Object.keys(views).includes(name)) {
        throw new Error(`${name} - no such template name`)
    }
    const stencil = new Stencil(name)

    try {
        const html = stencil.render(views[name])
        return html
    }
    catch (error) {
        return String(error)
    }
}

function build(name) {
    const path = `./output/${name}.html`
    fs.writeFileSync(path, stencil(name))
}

function buildAll() {
    var html = `
    <html>
        <head>
            <style>
                body {
                    padding: 0;
                    margin: 0;
                }
                iframe {
                    border: 0;
                    width: 640px;
                    height: 800px;
                }
            </style>
        </head>
        <body>
    `
    for (const name of Object.keys(views)) {
        build(name)
        html += `
            <iframe src="${name}.html"></iframe>
        `
    }
    html += "</body></html>"

    const path = `./output/all.html`
    fs.writeFileSync(path, html)
}

function watch(callback) {
    const globs = ["**/*.mjml", "**/*.json", "**/*.js"]
    chokidar
        .watch(globs)
        .on('change', (event, path) => {
            callback(path)
        })
}

program.parse(process.argv)