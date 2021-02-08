const repoUrl = 'https://raw.githubusercontent.com/valentinradu/stencil/master/assets'
module.exports = {
    font: {
        name: 'Roboto',
        url: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500'
    },
    logo: {
        src: `${repoUrl}/logo.png`
    },
    banner: {
        src: `${repoUrl}/macbook.png`
    },
    articles: [
        {
            icon: {
                src: `${repoUrl}/map.png`
            },
            title: 'Let\'s build a simple blockchain',
            subtitle: 'by Eugene Moore',
            preview: 'How can you trust a data store distributed among an arbitrary number of independent peers? Since each peer has control over its own version of the data, how can you reach a consensus?',
            action: {
                href: 'https://localhost',
                label: 'READ MORE'
            }
        },
        {
            icon: {
                src: `${repoUrl}/gpu.png`
            },
            title: 'Are unit tests a waste of your time?',
            subtitle: 'by Adam Smith',
            preview: 'In a perfect world, we would have automated tests for everything, but in reality, there\'s always a compromise between code quality and costs.',
            action: {
                href: 'https://localhost',
                label: 'READ MORE'
            }
        },
        {
            icon: {
                src: `${repoUrl}/map.png`
            },
            title: 'A practical guide to microservices',
            subtitle: 'by John Hammerfall',
            preview: 'Microservices are the natural evolution of monolithic systems in an increasingly demanding, modular, and distributed industry.',
            action: {
                href: 'https://localhost',
                label: 'READ MORE'
            }
        }
    ],
    heading: 'The week’s best articles',
    message: 'We have so many exciting articles, we can hardly pick the best ten for our weekly newsletter. Anyway, here they are!',
    unsubscribe: 'We dislike span as much as everybody else. If you don’t want to receive our emails anymore, <a href=\'https://localhost\'>unsubscribe here</a>.'
}