/**
 * Created by attila.deak on 7/3/2016.
 */
var vocab = vocab || {};

$(function(){

/*   //Open vocabularies page
   $('#vocabularies').click(function(){
      displayVocabularyList();
   });
*/
   /*
   //create new vocabulary from vocab management
   $('body').on('click', '#saveVocabButton', function(){
      vocab.createNewVocabulary();
   });
*/
   //User login
   $("#mainForm").submit(function (event){
      vocab.userLogin(event);
   });

/*
   //create new user from user management
   $('body').on('click', '#saveUserButton', function(){
      vocab.createNewUser();
   });
*/
/*
   //delete user from user management
   $('body').on('click', 'button[name="trash"]', function(){
      vocab.deleteUser();
   });

   //edit user from user management
   $('body').on('click', 'button[name="pencil"]', function(){
      vocab.editUser();
   });
*/
/*   //save edited user from user management
   $('body').on('click', '#saveUserEditButton', function(){
      vocab.saveEditedUser();
   });

/*   //add new entry field when creating new vocabulary
   $('body').on('click', '#addNewEntry', function(){
      vocab.addNewEntryField();
   });

   //remove new entry field when creating new vocabulary
   $('body').on('click', '#removeNewEntry', function(){
      formToRemove = event.target.parentElement;
      vocab.removeNewEntryField(formToRemove);
   });*/
});


