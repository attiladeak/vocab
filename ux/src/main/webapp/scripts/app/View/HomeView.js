/**
 * Created by attila.deak on 4/3/2017.
 */
define(['jquery', 'app/EventDispatcher', 'bootstrap.min'], function($, e, b) {
    var HomeView = function(){
        this.renderHomePageEvent = new e.event(this);
        this.init();
    }

    HomeView.prototype = {
        init: function () {
            this.createChildren()
                .setupHandlers()
                .enable();
        },

        createChildren: function () {
            // cache the document object
            //this.$container = $('.js-container');
            //this.$addTaskButton = this.$container.find('.js-add-task-button');
            //this.$taskTextBox = this.$container.find('.js-task-textbox');
            //this.$tasksContainer = this.$container.find('.js-tasks-container');

            return this;
        },

        setupHandlers: function () {

            //this.addTaskButtonHandler = this.addTaskButton.bind(this);
            //this.selectOrUnselectTaskHandler = this.selectOrUnselectTask.bind(this);
            //this.completeTaskButtonHandler = this.completeTaskButton.bind(this);
            //this.deleteTaskButtonHandler = this.deleteTaskButton.bind(this);

            /**
             Handlers from Event Dispatcher
             */
            //this.addTaskHandler = this.addTask.bind(this);
            //this.clearTaskTextBoxHandler = this.clearTaskTextBox.bind(this);
            //this.setTasksAsCompletedHandler = this.setTasksAsCompleted.bind(this);
            //this.deleteTasksHandler = this.deleteTasks.bind(this);

            return this;
        },

        enable: function () {

            //this.$addTaskButton.click(this.addTaskButtonHandler);
            //this.$container.on('click', '.js-task', this.selectOrUnselectTaskHandler);
            //this.$container.on('click', '.js-complete-task-button', this.completeTaskButtonHandler);
            //this.$container.on('click', '.js-delete-task-button', this.deleteTaskButtonHandler);

            /**
             * Event Dispatcher
             */
            //this.model.addTaskEvent.attach(this.addTaskHandler);
            //this.model.addTaskEvent.attach(this.clearTaskTextBoxHandler);
            //this.model.setTasksAsCompletedEvent.attach(this.setTasksAsCompletedHandler);
            //this.model.deleteTasksEvent.attach(this.deleteTasksHandler);

            return this;
        },

        createNavbar : function(){
            var $navbar =
                $('\
                   <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">\
                   <div class="navbar-header">\
                   <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\
                   <span class="sr-only">Toggle navigation</span>\
               <span class="icon-bar"></span>\
                   <span class="icon-bar"></span>\
                   <span class="icon-bar"></span>\
                   </button>\
                   <a class="navbar-brand" id="mainHeader" href="home">Vocabulary builder</a>\
               </div>\
               <!-- /.navbar-header -->\
               <ul class="nav navbar-top-links navbar-right">\
                   <li class="dropdown">\
                   <a class="dropdown-toggle" data-toggle="dropdown" href="#">\
                       <span id="currentUser">unknown user</span> <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>\
                   </a>\
                   <ul class="dropdown-menu dropdown-user">\
                   <li><a href="changePasswordNavigationController"><i class="fa fa-user fa-fw"></i> User Profile</a>\
               </li>\
               <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>\
                   </li>\
                   <li class="divider"></li>\
                   <li><a href="account/logoutController"><i class="fa fa-sign-out fa-fw"></i> Logout</a>\
                   </li>\
                   </ul>\
                   <!-- /.dropdown-user -->\
               </li>\
               <!-- /.dropdown -->\
               </ul>\
               <!-- /.navbar-top-links -->\
               <div class="navbar-default sidebar" role="navigation">\
                   <div class="sidebar-nav navbar-collapse">\
                   <ul class="nav" id="side-menu">\
                   <li class="sidebar-search">\
                   <div class="input-group custom-search-form">\
                   <input type="text" class="form-control" placeholder="Search...">\
                   <span class="input-group-btn">\
                   <button class="btn btn-default" type="button">\
                   <i class="fa fa-search"></i>\
                   </button>\
                   </span>\
                   </div>\
                   <!-- /input-group -->\
                   </li>\
                   <li>\
                   <a href="index.html"><i class="fa fa-dashboard fa-fw"></i> Home</a>\
                   </li>\
               <li id="vocabularies">\
               <a href="#"><i class="fa fa-table fa-fw"></i> Vocabularies</a>\
                   </li>\
                   <li id="testYourself">\
                   <a href="#"><i class="fa fa-table fa-fw"></i> Test yourself</a>\
                   </li>\
               <li $(admin)>\
               <a href="#"><i class="fa fa-files-o fa-fw"></i> Admin<span class="fa arrow"></span></a>\
                   <ul class="nav nav-second-level">\
                   <li id="usermanagement">\
                   <a href="#">Manage users</a>\
               </li>\
               <li>\
               <a href="#">System settings</a>\
               </li>\
               </ul>\
               </li>\
               </ul>\
               </div>\
               </div>\
               </nav>\
            ');
            return $navbar;
        },


        createMainContainer : function() {
            var $mainContainer = $('\
            <div id="page-wrapper">\
            </div>\
        ')

            return $mainContainer;
        },


        createMainContainerTitle : function() {
            var $mainContainerTitle = $('\
            <div class="row">\
                <div class="col-lg-12">\
                    <h1 class="page-header" id="mainContainerTitle">Homepage</h1>\
                </div>\
                <!-- /.col-lg-12 -->\
            </div>\
        ')
            return $mainContainerTitle;
        },

        createMainContainerContent : function() {
            var $mainContainerTitleContent = $('\
            <div class="table-responsive" id="mainContainerContent">\
               \
            </div>\
        ')
            return $mainContainerTitleContent;
        },


        renderPage : function(){
            console.log("start to render the page");
            var containerContent = this.createMainContainerContent();
            var mainContainer = this.createMainContainer().prepend(containerContent).prepend(this.createMainContainerTitle());

            $('#wrapper').prepend(mainContainer);
            $('#wrapper').prepend(this.createNavbar());
        },

        setCurrentUser : function(user){
            $('#currentUser').text(user);
        }
    }

    return {
        view: HomeView
    }

});