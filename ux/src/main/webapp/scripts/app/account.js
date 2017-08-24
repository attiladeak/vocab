/**
 * Created by attila.deak on 7/14/2016.
 */


vocab.userLogin = function(event){
    event.preventDefault();
    var url = $(this).attr("action");
    var posting = $.post(url,{Uname: $("#userName")[0].value, Pasword: $("#password")[0].value})

    posting.done(function(loginResult){
        if(loginResult.kind ==="SUCCESS"){
            window.location.href = "../";
        }
        else{
            var $messageDiv = $('<div class="alert alert-danger" role="alert"></div>');
            $messageDiv.append(loginResult.message);
            $("#errorMessage").empty().append($messageDiv);
        }
    });

    posting.fail(function(loginResult){
        $("#errorMessage").empty().append("Could not find server!");
    });
}

function displayUserList() {


}


/*vocab.createNewUser = function(){
    username = $('#userName').val();
    pw = $('#userPassword').val();

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
                    //vocab.hideModal();
                    displayUserList();
                } else {
                    alert ("User couldn't be created");
                }
            },
            error: function(){
                alert ('Server error during saving the user')
            }
        });
    } else {
        vocab.hideModal();
        displayUserList();
    }
}*/
/
/*vocab.deleteUser = function(){
    var userid = {userid : event.target.id};

    //alert("ID: " + event.target.id);

    $.ajax({
        type: "POST",
        url: "account/deleteUser",
        data: userid,

        success: function (data) {
            if(data = "Success"){
                //vocab.hideModal();
                displayUserList();
            } else {
                alert ("User couldn't be deleted");
            }

        },

        error: function(){
            alert ('Server error during saving the user')
        }
    });
}
*/
/*
vocab.editUser = function(){
    var userid = {userid : event.target.id};

    $.ajax({
        type: "POST",
        url: "account/getUser",
        data: userid,

        success: function (data) {
            if(data != null){
                $('input[id=userNameEdit]').val(data.username);
                $('input[id=userPasswordEdit]').val(data.password);
                vocab.editedUserID = data.id;
            } else {
                alert ("User details cannot be retrieved");
            }
        },
        error: function(){
            alert ('Server error during retrieving user data')
        }
    });
}
*//*
vocab.saveEditedUser = function(){
    var userid = {userid : vocab.editedUserID, password : $('#userPasswordEdit').val()};

    $.ajax({
        type: "POST",
        url: "account/updateUser",
        data: userid,

        success: function (data) {
            if(data = "Success"){
                //vocab.hideModal();
                displayUserList();
            } else {
                alert ("User couldn't be created");
            }
        },

        error: function(){
            alert ('Server error during saving the user')
        }
    });

    $('input[id=userNameEdit]').val("");
    $('input[id=userPasswordEdit]').val("");
    vocab.editedUserID = null;
}