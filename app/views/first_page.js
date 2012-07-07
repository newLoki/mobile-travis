m_require('app/views/tab_bar.js');

mobileTravisCI.FirstPageView = M.PageView.design({

    events: {

        pageshow: {

            target: mobileTravisCI.FirstPageController,

            action: 'init'
        }

    },

    childViews: 'header content tabBar',

    header: M.ToolbarView.design({

        value: ''

    }),

    content: M.ScrollView.design({



    }),

    tabBar: mobileTravisCI.TabBar

});