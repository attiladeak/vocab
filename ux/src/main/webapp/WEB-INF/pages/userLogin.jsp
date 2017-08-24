<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Login Page</title>
    <link rel="icon" href="images/favicon.ico">
    <link href="../css/vendor/bootstrap.min.css" rel="stylesheet">
    <link href="../css/loginpage.css" rel="stylesheet">
</head>
<body>

<div class="container" align="center" style="margin-top:15%; ">
    <form id="mainForm" class="form-login" action="userLoginController" class="panel panel-default" method="post" style="width: 400px; background-color:aliceblue; padding: 10px">
        <h2 class="form-signin-heading" style="margin-bottom: 30px; font-family: Calibri" >Logged in...</h2>
        <label for="userName" class="sr-only">User name</label><input type="text" id="userName" name="Uname"
                                                                      placeholder="Type your username" class="form-control"
                                                                      required autofocus>
        <label for="password" class="sr-only">Password</label><input type="password" id="password" name="Pasword"
                                                                     placeholder="Type your password" class="form-control"
                                                                     required>
        <p></p>
        <div>${message}</div>
        <p></p>
        <button class="btn btn-lg btn-success btn-block" type="submit">Login</button>
        <br/>
        Don't have an account?<div><a href="userRegistration">Create account</a></div>
    </form>
</div>



<%--</div>--%>

<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js" type="javascript"></script>
<script type="javascript">window.jQuery || document.write('<script src="../js/vendor/jquery.min.js" type="javascript"><\/script>')</script>
<script src="..//js/vendor/bootstrap.min.js" type="javascript"></script>
<script src="..//js/local/account.js" type="text/javascript"></script>
<script src="..//js/vendor/ie10-viewport-bug-workaround.js" type="javascript"></script>


</body>
</html>
