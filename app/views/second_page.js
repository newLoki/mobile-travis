m_require('app/views/tab_bar.js');

mobileTravisCI.SecondPageView = M.PageView.design({

    events: {

        pageshow: {

            target: mobileTravisCI.SecondPageController,

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