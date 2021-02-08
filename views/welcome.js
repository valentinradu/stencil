const repoUrl = 'https://raw.githubusercontent.com/valentinradu/stencil/master/assets'
module.exports = {
    title: 'Welcome to Preroute!',
    preview: 'Welcome to Preroute!',
    font: {
        name: 'Roboto',
        url: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500'
    },
    logo: {
        width: '100px',
        height: 'auto',
        src: `${repoUrl}/logo.png`
    },
    action: {
        label: 'GET STARTED',
        href: 'https://localhost'
    },
    heading: 'Welcome, Jane! 🎉',
    message: 'We’re happy to have you on board. You’re now part of a community that connects developers across the world. Meet others. Tell us your story. Learn something new.',
    steps: {
        title: 'The next steps',
        items: [
            {
                icon: {
                    src: `${repoUrl}/checkbox.png`,
                    width: '24px',
                    height: '24px'
                },
                description: 'Follow the link we’ve sent and confirm your email address.'
            },
            {
                icon: {
                    src: `${repoUrl}/sliders.png`,
                    width: '24px',
                    height: '24px'
                },
                description: 'Tweek your dashboard and notifications.'
            },
            {
                icon: {
                    src: `${repoUrl}/dialog.png`,
                    width: '24px',
                    height: '24px'
                },
                description: 'Post, comment and meet other awesome developers.'
            }
        ]
    },
    social: [
        {
            name: 'twitter',
            href: 'https://twitter.com'
        },
        {
            name: 'facebook',
            href: 'https://facebook.com'
        },
        {
            name: 'instagram',
            href: 'https://instagram.com'
        },
        {
            name: 'pinterest',
            href: 'https://pinterest.com'
        },
        {
            name: 'tiktok',
            href: 'https://tiktok.com'
        },
        {
            name: 'whatsapp',
            href: 'https://whatsapp.com'
        },
        {
            name: 'youtube',
            href: 'https://youtube.com'
        }
    ],
    businessAddress: {
        firstLine: 'Bohemian Inc, 221B Baker Street',
        secondLine: 'London, United Kingdom'
    },
    unsubscribe: 'We dislike span as much as everybody else. If you don’t want to receive our emails anymore, <a href=\'https://localhost\'>unsubscribe here</a>.'
}