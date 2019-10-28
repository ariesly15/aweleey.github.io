module.exports = {
    title: 'Hello JSer',
    description: 'daily note',
    head: [['link', { rel: 'icon', href: `/favicon.ico` }]],
    plugins: ['@vuepress/active-header-links', '@vuepress/back-to-top', '@vuepress/nprogress'],
    themeConfig: {
        sidebarDepth: 2,
        // displayAllHeaders: true,
        sidebar: [
            {
                title: '笔记', // 必要的
                path: '/notes/', // 可选的, 应该是一个绝对路径
                children: ['/notes/', '/notes/markdown-guide']
            },
            {
                title: 'JavaScript',
                path: '/JavaScript/',
                children: ['/JavaScript/The-diff-with-import-and-require', '/JavaScript/test']
            },
            {
                title: 'Git',
                path: '/git/',
                children: [['', 'Git相关'], '/git/git-ssh-config', '/git/git-index-pack-failed']
            }
        ],
        // locales: {
        //     '/': {
        //         label: '简体中文',
        //         selectText: '选择语言',
        //         ariaLabel: '选择语言',
        //         editLinkText: '在 GitHub 上编辑此页',
        //         lastUpdated: '上次更新',
        //         sidebar: {
        //             '/notes/': [
        //                 {
        //                     title: '笔记',
        //                     collapsable: false,
        //                     sidebarDepth: 2,
        //                     children: [['', '笔记n'], 'markdown-guide']
        //                 }
        //             ],
        //             '/git/': [
        //                 {
        //                     title: 'Git',
        //                     collapsable: false,
        //                     sidebarDepth: 2,
        //                     children: [['', 'Git相关'], 'git-ssh-config', 'git-index-pack-failed']
        //                 }
        //             ]
        //         }
        //     }
        // },
        nav: [
            { text: '主页', link: '/' },
            // {
            //     text: '分类',
            //     items: [
            //         {
            //             text: 'JavaScript',
            //             link: '/JavaScript/'
            //         }
            //     ]
            // },
            {
                text: 'Demo',
                items: [{ text: 'cv', link: '/cv' }, { text: 'about', link: '/about' }]
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
