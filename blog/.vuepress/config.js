module.exports = {
    title: 'Hello JSer',
    description: 'daily note',
    head: [['link', { rel: 'icon', href: `./public/favicon.ico` }]],
    themeConfig: {
        sidebar: {
            '/foo/': ['', 'one'],
            // 回退(fallback)侧边栏配置
            '/': ['', 'about']
        },
        nav: [
            { text: '主页', link: '/' },
            {
                text: 'Demo',
                items: [{ text: 'cv', link: '/cv' }, { text: 'foo/one', link: '/foo/one' }]
            }
        ]
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@assets': '../src/assets'
            }
        }
    },
    markdown: {
        lineNumbers: true
    }
};
