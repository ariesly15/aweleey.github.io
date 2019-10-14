module.exports = {
    title: 'Hello JSer',
    description: 'daily note',
    base: '/aweleey/',
    head: [['link', { rel: 'icon', href: `/favicon.ico` }]],
    themeConfig: {
        sidebarDepth: 3,
        displayAllHeaders: true,
        sidebar: {
            '/JavaScript/': ['The-diff-with-import-and-require.md', 'test.md'],
            '/foo/': ['one'],
            '/': []
        },
        nav: [
            { text: '主页', link: '/' },
            {
                text: '分类',
                items: [
                    {
                        text: 'JavaScript',
                        link: '/JavaScript/'
                    }
                ]
            },
            {
                text: 'JavaScript',
                items: [
                    {
                        text: 'require and import',
                        link: '/JavaScript/The-diff-with-import-and-require.md'
                    }
                ]
            },
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
