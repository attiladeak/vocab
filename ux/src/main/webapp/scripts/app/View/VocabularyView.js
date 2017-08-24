/**
 * Created by attila.deak on 4/6/2017.
 */
define(['jquery', 'app/EventDispatcher', 'bootstrap.min'], function($, e, b) {
    var VocabularyView = function(){
        this.openVocabulariesEvent = new e.event(this);
        this.createNewVocabularyEvent = new e.event(this);
        this.deleteVocabularyEvent = new e.event(this);
        this.editVocabularyEvent = new e.event(this);
        this.init();
    }

    VocabularyView.prototype = {
        init: function () {
            this.createChildren()
                .setupHandlers()
                .enable();
        },

        createChildren: function () {
            // cache the document object
            this.$pageWrapper = $('#wrapper');
            this.$vocabularyButton = this.$pageWrapper.find('#vocabularies');
            return this;
        },

        setupHandlers: function () {

            this.openVocabulariesHandler = this.openVocabularies.bind(this);
            this.addNewEntryFieldHandler = this.addNewEntryField.bind(this);
            this.removeNewEntryFieldHandler = this.removeNewEntryField.bind(this);
            this.createNewVocabularyHandler = this.createNewVocabulary.bind(this);
            this.deleteVocabularyHandler = this.deleteVocabulary.bind(this);
            this.editVocabularyHandler = this.editVocabulary.bind(this);

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

            this.$vocabularyButton.click(this.openVocabulariesHandler);
            this.$pageWrapper.on('click', '#addNewEntry', this.addNewEntryFieldHandler);
            this.$pageWrapper.on('click', '#removeNewEntry', this.removeNewEntryFieldHandler);
            this.$pageWrapper.on('click', '#saveVocabButton', this.createNewVocabularyHandler);
            this.$pageWrapper.on('click', 'button[name="trashVocab"]', this.deleteVocabularyHandler);
            this.$pageWrapper.on('click', 'button[name="pencilVocab"]', this.editVocabularyHandler);


            /**
             * Event Dispatcher
             */
            //this.model.addTaskEvent.attach(this.addTaskHandler);
            //this.model.addTaskEvent.attach(this.clearTaskTextBoxHandler);
            //this.model.setTasksAsCompletedEvent.attach(this.setTasksAsCompletedHandler);
            //this.model.deleteTasksEvent.attach(this.deleteTasksHandler);

            return this;
        },

        openVocabularies : function() {
            this.openVocabulariesEvent.notify();
        },

        displayVocabularyList : function(data) {
            var $table = $('<table class=\"table table-bordered table-hover table-striped\" id=\"tableToRemove\"></table>');
            var $tHeader  = $('<thead><tr><th></th><th></th><th>ID</th><th>Created</th><th>Name</th><th>Description</th></tr></thead>');
            var $tBody = $('<tbody></tbody>');

            $.each(data, function (index, vocabulary) {

                var vocabularyID = vocabulary.vocabularyID;

                var $row = $('<tr id=\"vocabularyRow\"></tr>');
                var $cellTrash = $('<td><button name="trashVocab" type="button" class="btn btn-xs btn-default btn-lg" id=' + vocabularyID + '><span style="pointer-events: none" class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>');
                var $cellEdit = $('<td><button data-toggle="modal" data-target="#vocabularyEditModal" name="pencilVocab" type="button" class="btn btn-xs btn-default btn-lg" id=' + vocabularyID + '><span style="pointer-events: none" class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button></td>');
                var $cellId = $('<td></td>').append(vocabularyID);
                var $cellCreatedOn = $('<td></td>').append(vocabulary.createdDate);
                var $cellWords = $('<td></td>').append(vocabulary.vocabularyName);
                var $cellDescription = $('<td></td>').append(vocabulary.vocabularyDescription);


                $row.append($cellEdit).append($cellTrash).append($cellId).append($cellCreatedOn).append($cellWords).append($cellDescription);
                $tBody.append($row);
            });


            $table.append($tHeader);
            $table.append($tBody);


            $('#mainContainerContent').empty().html($table);
            $('#mainContainerContent').prepend(this.createVocabularyModal()).prepend(this.createAddVocabButton());
            $('#mainContainerTitle').empty().text("Vocabularies");
            $('#mainHeader').empty().text("Vocabularies");

            $(".modal-backdrop.fade.in").fadeOut(250, function(){
                $(this).remove()
            });
        },


        createAddVocabButton : function() {
        var $addVocabButton = $('\
        <button id="addVocabulary" type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#vocabularyModal">Add vocabulary</button>\
        ')
            return $addVocabButton;
        }.bind(this),

        createVocabularyModal : function() {
        var $vocabularyModal = $('\ <div class="modal fade" id="vocabularyModal" tabindex="-1" role="dialog">\
               <div class="modal-dialog modal-lg">\
                  <div class="modal-content">\
                     <div class="modal-header">\
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
                        <h4 class="modal-title">Add vocabulary</h4>\
                     </div>\
                     <div class="modal-body">\
                         <form>\
                         <div class="form-group">\
                             <label for="expense-date" class="control-label">Name:</label>\
                             <input type="text" class="form-control" id="vocabName">\
                         </div>\
                         <div class="form-group">\
                             <label for="expense-amount" class="control-label">Description:</label>\
                             <input type="text" class="form-control" id="vocabDescription">\
                         </div>\
                         </form>\
                     </div>\
                     <div class="modal-body languages">\
                        <form id="primaryLanguageForm">\
                           <label class="control-label">Primary language</label>\
                           <div class="input-group">\
                                <span class="input-group-addon entryInput">Name</span>\
                                <input id="entryName" type="text" class="form-control" name="entryName" placeholder="Add name">\
                            </div>\
                            <div class="input-group">\
                                <span class="input-group-addon entryInput">Description</span>\
                                <input id="entryDescription" type="text" class="form-control" name="entryDescription" placeholder="Add desctiption">\
                            </div>\
                        </form>\
                    </div>\
                    <div><button type="button" id="addNewEntry">New</button></div>\
                     <div class="modal-footer">\
                         <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
                         <button type="button" id="saveVocabButton" data-dismiss="modal" class="btn btn-primary">Save</button>\
                     </div>\
                  </div><!-- /.modal-content -->\
               </div><!-- /.modal-dialog -->\
            </div><!-- /.modal -->\
            <div class="modal fade" id="vocabularyEditModal" tabindex="-1" role="dialog">\
               <div class="modal-dialog modal-lg">\
                  <div class="modal-content">\
                     <div class="modal-header">\
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
                        <h4 class="modal-title">Edit vocabulary</h4>\
                     </div>\
                     <div class="modal-body">\
                         <form>\
                         <div class="form-group">\
                             <label for="expense-date" class="control-label">Name:</label>\
                             <input type="text" class="form-control" id="vocabNameEdit" readonly="true">\
                         </div>\
                         <div class="form-group">\
                             <label for="expense-amount" class="control-label">Description:</label>\
                             <input type="text" class="form-control" id="vocabDescriptionEdit">\
                         </div>\
                         </form>\
                     </div>\
                     <div class="modal-footer">\
                         <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
                         <button type="button" id="saveVocabEditButton" data-dismiss="modal" class="btn btn-primary">Save</button>\
                     </div>\
                  </div><!-- /.modal-content -->\
               </div><!-- /.modal-dialog -->\
            </div><!-- /.modal -->\
        ')
        return $vocabularyModal;
        }.bind(this),

        addLanguageFields : function() {
            var $newLangauge = $('\
                <form class="entryField">\
                    <label class="control-label">Field</label>\
                    <button type="button" id="removeNewEntry">Remove</button>\
                    <div class="input-group">\
                        <span class="input-group-addon entryInput">Name</span>\
                        <input id="entryName" type="text" class="form-control" name="entryName" placeholder="Add name">\
                    </div>\
                        <div class="input-group">\
                        <span class="input-group-addon entryInput">Description</span>\
                        <input id="entryDescription" type="text" class="form-control" name="entryDescription" placeholder="Add desctiption">\
                    </div>\
                </form>\
            ')
            return $newLangauge;
        }.bind(this),


        addNewEntryField : function() {
            console.log("add entry field this: " + this)
            $('.languages').append(this.addLanguageFields());
        },

        removeNewEntryField : function (formToRemove) {
            formToRemove = event.target.parentElement;
            formToRemove.remove();
        },

        createNewVocabulary : function(){
          vocabularyObject = this.getVocabularyObject();
          this.createNewVocabularyEvent.notify(vocabularyObject);

        },

        getVocabularyObject : function(){
            var vocabularyObject = {vocabularyName : $('#vocabName').val(),
                vocabularyDescription : $('#vocabDescription').val(),
                primaryLanguage : {name : $("#primaryLanguageForm").find('#entryName').val(),
                    description : $("#primaryLanguageForm").find('#entryDescription').val()},
                entryFields : this.getEntryList()
            };
            return vocabularyObject;
        },

        getEntryList : function(){
            var entryList = [];
            $('.entryField').each(function(index){
                var entry = {
                    name : $(this).find('#entryName').val(),
                    description : $(this).find('#entryDescription').val()
                };
                entryList.push(entry);
            });
            return entryList;
        },

        deleteVocabulary : function(){
            var vocabId = {vocabularyid : event.target.id};
            this.deleteVocabularyEvent.notify(vocabId);

        },

        editVocabulary : function(){
            var id = {id : event.target.id};
            this.editVocabularyEvent.notify(id);
        }
    }

    return {
        view: VocabularyView
    }

});