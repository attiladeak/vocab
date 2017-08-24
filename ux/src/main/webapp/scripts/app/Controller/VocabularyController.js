/**
 * Created by attila.deak on 4/6/2017.
 */

define(['jquery', 'app/Model/VocabularyModel', 'app/View/VocabularyView', 'app/EventDispatcher'],function($, m, v, e){

    var VocabularyController = function (model, view) {
        this.model = model;
        this.view = view;
        this.init();
    };

    VocabularyController.prototype = {

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
            this.getVocabulariesListHandler = this.getVocabulariesList.bind(this);
            this.createNewVocabularyHandler = this.createNewVocabulary.bind(this);
            this.deleteVocabularyHandler = this.deleteVocabulary.bind(this);
            this.editVocabularyHandler = this.editVocabulary.bind(this);
            //this.completeTaskHandler = this.completeTask.bind(this);
            //this.deleteTaskHandler = this.deleteTask.bind(this);

            //VIEW HANDLERS
            this.displayVocabularyListHandler = this.displayVocabularyList.bind(this);
            //this.setTasksAsCompletedHandlerM = this.setTasksAsCompleted.bind(this);
            //this.deleteTasksHandlerM = this.deleteTasksM.bind(this);

            return this;
        },

        enable: function () {

            //VIEW EVENTS
            this.view.openVocabulariesEvent.attach(this.getVocabulariesListHandler);
            this.view.createNewVocabularyEvent.attach(this.createNewVocabularyHandler);
            this.view.deleteVocabularyEvent.attach(this.deleteVocabularyHandler);
            this.view.editVocabularyEvent.attach(this.editVocabularyHandler);
            //this.view.addUserEvent.attach(this.createUserHandler);
            //this.view.deleteUserEvent.attach(this.deleteUserHandler);
            //this.view.selectTaskEvent.attach(this.selectTaskHandler);
            //this.view.unselectTaskEvent.attach(this.unselectTaskHandler);


            //MODEL EVENTS
            this.model.showVocabularyListEvent.attach(this.displayVocabularyListHandler);

            //this.model.hideModalEvent.attach(this.hideModalHandler);
            //this.model.setTasksAsCompletedEvent.attach(this.setTasksAsCompletedHandlerM);
            //this.model.deleteTasksEvent.attach(this.deleteTasksHandlerM);

            return this;
        },


        //VIEW HANDLER METHODS
        displayVocabularyList: function (sender, args) {
            this.view.displayVocabularyList(args.vocabularies);
        },

        hideModal : function (sender, args){
            this.view.hideModal();
        },

        /* setCurrentUser: function (sender, args) {
         this.view.setCurrentUser(args.user);
         },*/

        //MODEL HANDLER METHODS
        getVocabulariesList: function (sender, args) {
            this.model.getVocabularyList();
        },

        createNewVocabulary : function(sender, args){
            this.model.createNewVocabulary(args);
        },

        deleteVocabulary : function(sender, args){
            this.model.deleteVocabulary(args.vocabularyid)
        },

        editVocabulary : function(sender, args){
            this.model.retrieveVocabulary(args.id)
        }




    }
    return {
        controller : VocabularyController
    }
});