/**
 * Created by attila.deak on 4/6/2017.
 */

define(['jquery', 'app/Model/AccountModel', 'app/View/AccountView', 'app/EventDispatcher'],function($, m, v, e){

    var AccountController = function (model, view) {
        this.model = model;
        this.view = view;
        this.init();
    };

    AccountController.prototype = {

        init: function () {
            this.createChildren()
                .setupHandlers()
                .enable()
        },

        createChildren: function () {
            // no need to create children inside the controller
            // this is a job for the view
            // you could all as well leave this function out
            return this;
        },

        setupHandlers: function () {
            //MODEL HANDLERS
            this.getUsersListHandler = this.getUsersList.bind(this);
            this.createUserHandler = this.createUser.bind(this);
            this.deleteUserHandler = this.deleteUser.bind(this);
            this.editUserHandler = this.editUser.bind(this);
            this.saveEditedUserHandler = this.saveEditedUser.bind(this);
            //this.deleteTaskHandler = this.deleteTask.bind(this);

            //VIEW HANDLERS
            this.displayUsersListHandler = this.displayUsersList.bind(this);
            this.hideModalHandler = this.hideModal.bind(this);
            this.fillUserDetailFieldsHandler = this.fillUserDetailFields.bind(this);
            this.resetEditUserDialogHandler = this.resetEditUserDialog.bind(this);
            //this.deleteTasksHandlerM = this.deleteTasksM.bind(this);

            return this;
        },

        enable: function () {

            //VIEW EVENTS
            this.view.openUserManagementEvent.attach(this.getUsersListHandler);
            this.view.addUserEvent.attach(this.createUserHandler);
            this.view.deleteUserEvent.attach(this.deleteUserHandler);
            this.view.editUserEvent.attach(this.editUserHandler);
            this.view.saveEditedUserEvent.attach(this.saveEditedUserHandler);
            //this.view.unselectTaskEvent.attach(this.unselectTaskHandler);


            //MODEL EVENTS
            this.model.showUsersListEvent.attach(this.displayUsersListHandler);
            this.model.hideModalEvent.attach(this.hideModalHandler);
            this.model.userRetrievedForEditEvent.attach(this.fillUserDetailFieldsHandler)
            this.model.userSavedEvent.attach(this.resetEditUserDialogHandler);
            //this.model.deleteTasksEvent.attach(this.deleteTasksHandlerM);

            return this;
        },


        //VIEW HANDLER METHODS
       displayUsersList: function (sender, args) {
            this.view.displayUsersList(args.users);
        },

        hideModal : function (sender, args){
            this.view.hideModal();
        },

        fillUserDetailFields : function (sender, args) {
            this.view.fillUserDetailsForEdit(args)
        },

        resetEditUserDialog : function () {
            this.view.resetEditUserDialog();
        },


        /* setCurrentUser: function (sender, args) {
            this.view.setCurrentUser(args.user);
        },*/

        //MODEL HANDLER METHODS
        getUsersList: function (sender, args) {
            this.model.getUsersList();
        },

        createUser : function (sender, args) {
            this.model.createUser(args.username, args.pw)
        },

        deleteUser : function (sender, args) {
            this.model.deleteUser(args.userid)
        },

        editUser : function (sender, args) {
            this.model.retrieveUser(args.userid)
        },

        saveEditedUser : function (sender, args) {
            this.model.saveEditedUser(args);
        }


    }
    return {
        controller : AccountController
    }
});