/**
 * Created by attila.deak on 4/6/2017.
 */
define(['jquery', 'app/EventDispatcher', 'bootstrap.min'], function($, e, b) {
    var AccountView = function(){
        this.openUserManagementEvent = new e.event(this);
        this.addUserEvent = new e.event(this);
        this.deleteUserEvent = new e.event(this);
        this.editUserEvent = new e.event(this);
        this.saveEditedUserEvent = new e.event(this);
        this.init();
    }

    AccountView.prototype = {
        init: function () {
            this.createChildren()
                .setupHandlers()
                .enable();
        },

        createChildren: function () {
            // cache the document object
            this.$pageWrapper = $('#wrapper');
            this.$usersButton = this.$pageWrapper.find('#usermanagement');

            return this;
        },

        setupHandlers: function () {

            this.usersButtonHandler = this.openUserManagement.bind(this);
            this.saveUserHandler = this.saveUser.bind(this);
            this.deleteUserHandler = this.deleteUser.bind(this);
            this.editUserHandler = this.editUser.bind(this);
            this.saveEditedUserHandler = this.saveEditedUser.bind(this);

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

            this.$usersButton.click(this.usersButtonHandler);
            this.$pageWrapper.on('click', '#saveUserButton', this.saveUserHandler);
            this.$pageWrapper.on('click', 'button[name="trash"]', this.deleteUserHandler);
            this.$pageWrapper.on('click', 'button[name="pencil"]', this.editUserHandler);
            this.$pageWrapper.on('click', '#saveUserEditButton', this.saveEditedUserHandler);

            /**
             * Event Dispatcher
             */
            //this.model.addTaskEvent.attach(this.addTaskHandler);
            //this.model.addTaskEvent.attach(this.clearTaskTextBoxHandler);
            //this.model.setTasksAsCompletedEvent.attach(this.setTasksAsCompletedHandler);
            //this.model.deleteTasksEvent.attach(this.deleteTasksHandler);

            return this;
        },

        openUserManagement : function(user){
            this.openUserManagementEvent.notify();
        },

        saveUser : function(){
            username = $('#userName').val();
            pw = $('#userPassword').val();

            this.addUserEvent.notify({username : username, pw : pw});
        },

        saveEditedUser : function() {
            var userid = {userid : $.editedUserID, password : $('#userPasswordEdit').val()};
            this.saveEditedUserEvent.notify(userid);
        },

        deleteUser : function(){
            var userId = {userid : event.target.id};
            this.deleteUserEvent.notify(userId);
        },

        editUser : function () {
            var userId = {userid : event.target.id};
            this.editUserEvent.notify(userId);
        },

        fillUserDetailsForEdit : function (user) {
            $('input[id=userNameEdit]').val(user.username);
            $('input[id=userPasswordEdit]').val(user.password);
        },

        resetEditUserDialog : function() {
            $('input[id=userNameEdit]').val("");
            $('input[id=userPasswordEdit]').val("");
        },


        hideModal : function(){
            $("#userModal").modal("hide");
        },

        displayUsersList : function(users){
            var $table = $('<table class=\"table table-bordered table-hover table-striped\" id=\"tableUsers\"></table>');
            var $tHeader  = $('<thead><tr><th></th><th></th><th>ID</th><th>Username</th><th>Password</th><th>Admin</th><th>Last login</th><th>Login count</th></tr></thead>');
            var $tBody = $('<tbody></tbody>');

            $.each(users, function (index, user) {
                var $row = $('<tr id=\"userRow\"></tr>');
                var $cellTrash = $('<td><button name="trash" type="button" class="btn btn-xs btn-default btn-lg" id=' + user.id + '><span style="pointer-events: none" class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>');
                var $cellEdit = $('<td><button data-toggle="modal" data-target="#userEditModal" name="pencil" type="button" class="btn btn-xs btn-default btn-lg" id=' + user.id + '><span style="pointer-events: none" class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button></td>');
                var $cellId = $('<td></td>').append(user.id);
                var $cellUserName = $('<td></td>').append(user.userName);
                var $cellPassword = $('<td></td>').append(user.password);
                var $cellAdmin = $('<td></td>').append(user.administrator);
                var $lastLogin = $('<td></td>').append(new Date(user.lastlogin));
                var $loginCount = $('<td></td>').append(user.loginnr);

                $row.append($cellEdit).append($cellTrash).append($cellId).append($cellUserName).append($cellPassword).append($cellAdmin).append($lastLogin).append($loginCount);
                $tBody.append($row);
            });


            $table.append($tHeader);
            $table.append($tBody);


            $('#mainContainerContent').empty().html($table);
            $('#mainContainerContent').prepend(this.createUserModal()).prepend(this.createAddButton());
            $('#mainContainerTitle').empty().text("List of users");
            $('#mainHeader').empty().text("Manage users");
            $(".modal-backdrop.fade.in").fadeOut(250, function(){
                $(this).remove()
            });
        },

        createAddButton : function() {
        var $addButton = $('\
            <button id="addUser" type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#userModal">Add user</button>\
            ')
        return $addButton;
        },

        createUserModal : function() {
            var $userModal = $('\
        <div class="modal fade" id="userModal" tabindex="-1" role="dialog">\
           <div class="modal-dialog">\
              <div class="modal-content">\
                 <div class="modal-header">\
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
                    <h4 class="modal-title">Add user</h4>\
                 </div>\
                 <div class="modal-body">\
                     <form>\
                     <div class="form-group">\
                         <label for="expense-date" class="control-label">Username:</label>\
                         <input type="text" class="form-control" id="userName">\
                     </div>\
                     <div class="form-group">\
                         <label for="expense-amount" class="control-label">Password:</label>\
                         <input type="text" class="form-control" id="userPassword">\
                     </div>\
                     </form>\
                 </div>\
                 <div class="modal-footer">\
                     <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
                     <button type="button" id="saveUserButton" data-dismiss="modal" class="btn btn-primary">Save</button>\
                 </div>\
              </div><!-- /.modal-content -->\
           </div><!-- /.modal-dialog -->\
        </div><!-- /.modal -->\
        <div class="modal fade" id="userEditModal" tabindex="-1" role="dialog">\
           <div class="modal-dialog">\
              <div class="modal-content">\
                 <div class="modal-header">\
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
                    <h4 class="modal-title">Edit user</h4>\
                 </div>\
                 <div class="modal-body">\
                     <form>\
                     <div class="form-group">\
                         <label for="expense-date" class="control-label">Username:</label>\
                         <input type="text" class="form-control" id="userNameEdit" readonly="true">\
                     </div>\
                     <div class="form-group">\
                         <label for="expense-amount" class="control-label">Password:</label>\
                         <input type="text" class="form-control" id="userPasswordEdit">\
                     </div>\
                     </form>\
                 </div>\
                 <div class="modal-footer">\
                     <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
                     <button type="button" id="saveUserEditButton" data-dismiss="modal" class="btn btn-primary">Save</button>\
                 </div>\
              </div><!-- /.modal-content -->\
           </div><!-- /.modal-dialog -->\
        </div><!-- /.modal -->\
        ')
            return $userModal;
        }

    }

    return {
        view: AccountView
    }

});