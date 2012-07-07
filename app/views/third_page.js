m_require('app/views/tab_bar.js');

mobileTravisCI.ThirdPageView = M.PageView.design({

    events: {

        pageshow: {

            target: mobileTravisCI.ThirdPageController,

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