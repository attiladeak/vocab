<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <title>Change password</title>
</head>
<body>


<div align="center" style="margin-top:15%; ">
    <form action="changePasswordController" class="panel panel-default" method="post"
          style="width: 400px; background-color:aliceblue; padding: 10px">

        <h1 style="margin-bottom: 30px; font-family: Calibri">Change Password</h1>
        <div class="input-group" style="margin: 10px">
            <span class="input-group-addon" id="basic-addon1">@</span>
            <input type="password" class="form-control" placeholder="Type your current password" aria-describedby="basic-addon1"
                   name="oldPassword">
        </div>
        <div class="input-group" style="margin: 10px">
            <span class="input-group-addon" id="basic-addon2">#</span>
            <input type="password" class="form-control" placeholder="Type new password" aria-describedby="basic-addon2"
                   name="newPassword">
        </div>
        <div class="input-group" style="margin: 10px" >
            <span class="input-group-addon" id="basic-addon3">#</span>
            <input type="password" class="form-control" placeholder="Re-type new password" aria-describedby="basic-addon2"
                   name="reTypeNewPassword">
        </div>
        <div><input type="submit" value="Change password" class="btn-default" style="margin-top: 20px"></div>
        <div style="margin-top: 20px; color:red">${message}</div>
        <br/>
        <div><a href="home">Back to homepage</a></div>

    </form>
</div>
</body>
