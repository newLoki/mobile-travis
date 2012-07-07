mobileTravisCI.TabBar = M.TabBarView.design({

    childViews: 'tab1 tab2 tab3',

    anchorLocation: M.TOP,

    tab1: M.TabBarItemView.design({

        value: 'All Projects',
        page: 'page1'

    }),

    tab2: M.TabBarItemView.design({

        value: 'My Projects',
        page: 'page2'

    }),

    tab3: M.TabBarItemView.design({

        value: 'Worker Status',
        page: 'page3'

    })

});