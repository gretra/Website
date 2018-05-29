<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<script src="https://www.gstatic.com/firebasejs/5.0.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.0.1/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.0.1/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.0.1/firebase-messaging.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.0.1/firebase-functions.js"></script>
        
        
<script src="https://www.gstatic.com/firebasejs/5.0.3/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBu87rHsO-XlqU4b2Aji-9LabKPI8mFPWo",
    authDomain: "ework-59259.firebaseapp.com",
    databaseURL: "https://ework-59259.firebaseio.com",
    projectId: "ework-59259",
    storageBucket: "ework-59259.appspot.com",
    messagingSenderId: "421763726887"
  };
  firebase.initializeApp(config);
</script>
<script type="text/javascript" src="index.js"></script>



<html>
    <head>
        <meta charset="UTF-8">
        <title><?php echo $title; ?></title>
        <link rel="stylesheet" type="text/css" href="Styles/Stylesheet.css" />
    </head>
    <body>
        <div id="wrapper">
            <div id="banner">
                
            </div>
            
            <nav id="navigation">
                <ul id="nav">
                    <li><a  href="index.php">Namai</a></li>
<!--                    <li><a  href="Shdl.php">Tvarkaraštis</a></li>-->
                    <li><a  href="Darbuotojai.php">Darbuotojai</a></li>
                    <!--<li><a  href="Juodasis.php">Juodasis sąrašas</a></li>-->
                </ul>
            </nav>
            
<!--            <div
                <button id="darb" onclick="submitClick()"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>
            </div>-->
            
            
            <div id="content_area">
                <?php echo $content; ?>
            </div>
            
            <div id="sidebar">
                
            </div>
            
            <footer>
                <p></p>
            </footer>
        </div>
        
        
        
        
        


<script src="index.js"></script>

<!--<div class="mainDiv" align="left">
            <h1>All Users</h1>
            <table>
                <thead>
                    <tr>
                        <td>Vardas</td>
                        <td>Emailas</td>
                    </tr>
                </thead>
                <link rel="index" type="text/javascript" href="index.js" />
                <tbody id="table_body">
                    
                </tbody>
            </table>
        </div>
        
    </body>
</html>-->
