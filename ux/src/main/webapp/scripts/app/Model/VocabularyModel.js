/**
 * Created by attila.deak on 4/6/2017.
 */
define(['app/EventDispatcher', 'jquery'],function(e, $) {
    var VocabularyModel = function () {
        //this.tasks = [];
        this.showVocabularyListEvent = new e.event(this);
        this.hideModalEvent = new e.event(this);
        this.vocabularyRetrievedForEditEvent = new e.event(this);
        //this.deleteTasksEvent = new e.event(this);

    };

    VocabularyModel.prototype = {

        getVocabularyList: function () {
            $.ajax({
                type: "POST",
                url: "vocabulary/getVocabularyList",
                data: 'json',

                success: function (data) {
                    this.showVocabularyListEvent.notify({vocabularies : data})
                }.bind(this)
            });
            //this.getCurrentUserEvent.notify({user : user});
        },

        createNewVocabulary : function(vocabularyObject){
            $.ajax({
                type: "POST",
                url: "vocabulary/createVocabulary",
                contentType : 'application/json; charset=utf-8',
                //dataType : 'json',
                data: JSON.stringify(vocabularyObject),

                success: function (data) {
                    if(data = "Success"){
                        alert("Success vocab creation" + this)
                        //vocab.hideModal();
                            this.getVocabularyList();
                    } else {
                        alert ("Vocabulary couldn't be created");
                    }
                }.bind(this),
                error: function(XMLHttpRequest, textStatus, errorThrown){
                    console.log(XMLHttpRequest.statusText);
                    console.log(textStatus);
                    console.log(errorThrown);
                    alert ('Server error during saving the user')
                }
            });
        },

        deleteVocabulary : function(vocabularyid){
            $.ajax({
                type: "POST",
                url: "vocabulary/deleteVocabulary",
                contentType : 'text/plain',
                data: vocabularyid.toString(),

                success: function (data) {
                    if(data = "Success"){
                        //vocab.hideModal();
                        this.getVocabularyList();
                        console.log("Vocabulary deleted with Id " + vocabularyid)
                    } else {
                        alert ("User couldn't be deleted");
                    }
                }.bind(this),
                error: function(){
                    alert ('Server error during saving the user')
                }
            });
        },

        retrieveVocabulary : function(id){
            $.ajax({
                type: "POST",
                url: "vocabulary/getVocabulary",
                contentType: "text/plain",
                data: id.toString(),

                success: function (data) {
                    if(data != null){
                        alert("Vocabulary object retrieved");
                        //this.vocabularyRetrievedForEditEvent.notify(data);
                        $.editedVocabularyID = data.id;
                    } else {
                        alert ("User details cannot be retrieved");
                    }
                }.bind(this),
                error: function(){
                    alert ('Server error during retrieving user data')
                }
            });
        }
    };

    return {
        model : VocabularyModel
    }
});
