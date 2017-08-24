/**
 * Created by attila.deak on 3/5/2017.
 */
define(['jquery', 'app/Controller/HomeController', 'app/Model/HomeModel', 'app/View/HomeView',
        'app/Controller/AccountController', 'app/Model/AccountModel', 'app/View/AccountView',
        'app/Controller/VocabularyController', 'app/Model/VocabularyModel', 'app/View/VocabularyView'
        ],

        function($, homeC, homeM, homeV,
                 accountC, accountM, accountV,
                 vocabularyC, vocabularyM, vocabularyV){

            $.editedUserID = null,
            $.editedVocabularyID = null,

            $(function () {
                var homeModel = new homeM.model(),
                    homeView = new homeV.view(),
                    homeController = new homeC.controller(homeModel, homeView),
                    accountModel = new accountM.model(),
                    accountView = new accountV.view(),
                    accountController = new accountC.controller(accountModel, accountView),
                    vocabularyModel = new vocabularyM.model(),
                    vocabularyView = new vocabularyV.view(),
                    vocabularyController = new vocabularyC.controller(vocabularyModel, vocabularyView)

            });
            //page.renderPage();
});