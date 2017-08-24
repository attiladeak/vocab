/**
 * Created by attila.deak on 4/3/2017.
 */
define(['app/EventDispatcher', 'jquery'],function(e, $) {

    var AccountModel = function () {
        //this.tasks = [];
        this.showUsersListEvent = new e.event(this);
        this.hideModalEvent = new e.event(this);
        this.userRetrievedForEditEvent = new e.event(this);
        this.userSavedEvent = new e.event(this);
        //this.editedUserID = null;
        //this.deleteTasksEvent = new e.event(this);

    };

    AccountModel.prototype = {
        getUsersList: function () {
            $.ajax({
                type: "POST",
                url: "userManagement",
                data: 'json',

                success: function (data) {
                    this.showUsersListEvent.notify({users : data})
                }.bind(this)
            });
            //this.getCurrentUserEvent.notify({user : user});
        },

        createUser : function(username, pw){
            if (username != null && pw != null){
                var user = {
                    username : $('#userName').val(),
                    password : $('#userPassword').val(),
                }
                $.ajax({
                    type: "POST",
                    url: "account/createUser",
                    data: user,

                    success: function (data) {
                        if(data = "Success"){
                            //this.hideModalEvent.notify();
                            this.getUsersList();
                        } else {
                            alert ("User couldn't be created");
                        }
                    }.bind(this),
                    error: function(){
                        alert ('Server error during saving the user')
                    }
                });
            } else {
                this.hideModalEvent.notify();
                this.getUsersList();
            }
        },

        deleteUser : function(userid){
            $.ajax({
                type: "POST",
                url: "account/deleteUser",
                contentType : 'text/plain',
                data: userid.toString(),//.stringify(),

                success: function (data) {
                    if(data = "Success"){
                        //vocab.hideModal();
                        this.getUsersList();
                    } else {
                        alert ("User couldn't be deleted");
                    }
                }.bind(this),
                error: function(){
                    alert ('Server error during saving the user')
                }
            });
        },

        saveEditedUser : function(user){
            $.ajax({
                type: "POST",
                url: "account/updateUser",
                data: user,

                success: function (data) {
                    if(data = "Success"){
                        this.getUsersList();
                        //this.hideModalEvent.notify();
                    } else {
                        alert ("User couldn't be saved");
                    }
                }.bind(this),

                error: function(){
                    alert ('Server error during saving the user')
                }
            });

            $.editedUserID = null;

        },

        retrieveUser : function (id) {
            $.ajax({
                type: "POST",
                url: "account/getUser",
                contentType: "text/plain",
                data: id.toString(),

                success: function (data) {
                    if(data != null){
                        this.userRetrievedForEditEvent.notify(data);
                        $.editedUserID = data.id;
                    } else {
                        alert ("User details cannot be retrieved");
                    }
                }.bind(this),
                error: function(){
                    alert ('Server error during retrieving user data')
                }
            });
        }

        /*getTasks: function () {
         return this.tasks;
         },

         setSelectedTask: function (taskIndex) {
         this.selectedTasks.push(taskIndex);
         },

         unselectTask: function (taskIndex) {
         this.selectedTasks.splice(taskIndex, 1);
         },

         setTasksAsCompleted: function () {
         var selectedTasks = this.selectedTasks;
         for (var index in selectedTasks) {
         this.tasks[selectedTasks[index]].taskStatus = 'completed';
         }

         this.setTasksAsCompletedEvent.notify();

         this.selectedTasks = [];

         },


         deleteTasks: function () {
         var selectedTasks = this.selectedTasks.sort();

         for (var i = selectedTasks.length - 1; i >= 0; i--) {
         this.tasks.splice(this.selectedTasks[i], 1);
         }

         // clear the selected tasks
         this.selectedTasks = [];

         this.deleteTasksEvent.notify();

         }*/
    };

    return {
        model : AccountModel
    }
});
