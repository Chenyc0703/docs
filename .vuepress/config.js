// .vuepress/config.js
module.exports = {
  title: '飞跃高山',
  description:'跨越山河',
  head:[
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta',{name:'author',content:'飞跃高山'}],
    ['meta',{name:'keywords',content:'vuepress 介绍'}],
  ],

    themeConfig: {
      //lastUpdated 跟踪git最后一次提交时间
      // lastUpdated: '更新时间', // string | boolean
      logo: '/assets/img/logo.png',
    //   navbar: false,
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/about' },
        {
            text: 'Languages',
            items: [
              { text: 'Group1', items: [
                { text: 'Home', link: '/' },
                { text: 'Guide', link: '/about' },
              ] },
              { text: 'Group2', items: [
                { text: 'Home', link: '/' },
                { text: 'Guide', link: '/about' },
              ] }
            ]
          },
        { text: 'External', link: 'https://google.com' },
      ],
      sidebar: 
      [
        '',
        'about',
        {
          title: ' 美丽的css',   // 必要的
          path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/'
          ]
        },
        'about1',

      ]
    }
  }