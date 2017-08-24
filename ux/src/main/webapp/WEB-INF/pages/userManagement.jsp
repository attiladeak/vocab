<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Build your vocabulary</title>

    <!-- Bootstrap Core CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="css/metisMenu.min.css" rel="stylesheet">

    <!-- Timeline CSS -->
    <link href="css/timeline.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/sb-admin-2.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="css/morris.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="css/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- Bootstrap Core JavaScript -->
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>

    <!-- jQuery -->
    <script src="js/local/common.js" type="text/javascript"></script>
    <script src="js/local/vocabulary.js" type="text/javascript"></script>
    <script src="js/local/account.js" type="text/javascript"></script>

    <![endif]-->

</head>

<body>
<div id="wrapper">
    <script type="text/javascript">
        var containerContent  = vocab.createMainContainerContent();
        var mainContainer = vocab.createMainContainer().prepend(containerContent).prepend(vocab.createMainContainerTitle());

        $('#wrapper').prepend(mainContainer);
        $('#wrapper').prepend(vocab.createNavbar());
    </script>
</div>
</body>

</html>
