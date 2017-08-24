/**
 * Created by attila.deak on 4/3/2017.
 */
define(['jquery', 'app/Model/HomeModel', 'app/View/HomeView', 'app/EventDispatcher'],function($, m, v, e){

    var HomeController = function (model, view) {
        this.model = model;
        this.view = view;
        this.init();
    };

    HomeController.prototype = {

        init: function () {
            this.createChildren()
                .setupHandlers()
                .enable()
                .renderPage();
        },

        createChildren: function () {
            // no need to create children inside the controller
            // this is a job for the view
            // you could all as well leave this function out
            return this;
        },

        setupHandlers: function () {
            //MODEL HANDLERS
            //this.renderHomePageHandler = this.renderPage.bind(this);
            //this.setCurrentUserHandler = this.setCurrentUser.bind(this);
            //this.unselectTaskHandler = this.unselectTask.bind(this);
            //this.completeTaskHandler = this.completeTask.bind(this);
            //this.deleteTaskHandler = this.deleteTask.bind(this);

            //VIEW HANDLERS
            this.setCurrentUserHandler = this.setCurrentUser.bind(this);
            //this.clearTaskTextBoxHandlerM = this.clearTaskTextBox.bind(this);
            //this.setTasksAsCompletedHandlerM = this.setTasksAsCompleted.bind(this);
            //this.deleteTasksHandlerM = this.deleteTasksM.bind(this);

            return this;
        },

        enable: function () {

            //VIEW EVENTS
            //this.view.renderHomePageEvent.attach(this.renderHomePageHandler);
            //this.view.completeTaskEvent.attach(this.completeTaskHandler);
            //this.view.deleteTaskEvent.attach(this.deleteTaskHandler);
            //this.view.selectTaskEvent.attach(this.selectTaskHandler);
            //this.view.unselectTaskEvent.attach(this.unselectTaskHandler);


            //MODEL EVENTS
            this.model.getCurrentUserEvent.attach(this.setCurrentUserHandler);
            //this.model.addTaskEvent.attach(this.clearTaskTextBoxHandlerM);
            //this.model.setTasksAsCompletedEvent.attach(this.setTasksAsCompletedHandlerM);
            //this.model.deleteTasksEvent.attach(this.deleteTasksHandlerM);

            return this;
        },


        //VIEW HANDLER METHODS
        renderPage: function (sender, args) {
            this.view.renderPage();
            this.model.getCurrentUser();
            return this;
        },

        setCurrentUser: function (sender, args) {
            this.view.setCurrentUser(args.user);
        },

        /*unselectTask: function (sender, args) {
            this.model.unselectTask(args.taskIndex);
        },

        completeTask: function () {
            this.model.setTasksAsCompleted();
        },

        deleteTask: function () {
            this.model.deleteTasks();
        },


        addTaskM: function (sender, args) {
            this.view.addTask();
        },

        clearTaskTextBox: function (sender, args) {
            this.view.clearTaskTextBox();
        },

        setTasksAsCompleted: function (sender, args) {
            this.view.setTasksAsCompleted();
        },*/

        //MODEL HANDLER METHODS
        getCurrentUser: function (sender, args) {
            this.model.getCurrentUser();
        }
    }
    return {
        controller : HomeController
    }
});