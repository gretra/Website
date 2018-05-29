//import java.io.FileInputStream;
//import java.io.FileNotFoundException;
//import javax.print.*;
//import javax.print.attribute.HashPrintRequestAttributeSet;
//import javax.print.attribute.PrintRequestAttributeSet;

//$(window).ready.function() {
//    
//    
    
//}



var config = {
    apiKey: "AIzaSyBu87rHsO-XlqU4b2Aji-9LabKPI8mFPWo",
    authDomain: "ework-59259.firebaseapp.com",
    databaseURL: "https://ework-59259.firebaseio.com",
    projectId: "ework-59259",
    storageBucket: "ework-59259.appspot.com",
    messagingSenderId: "421763726887"
  };

firebase.initializeApp(config);


//var results = $("<div/>");

//function demo() {
//    var query = firebase.database().ref("users").orderByKey();
//query.once("value")
//  .then(function(snapshot) {
//    snapshot.forEach(function(childSnapshot) {
//      // key will be "ada" the first time and "alan" the second time
//      var key = childSnapshot.key;
//      // childData will be the actual contents of the child
//      var childData = childSnapshot.val();
//  });
//});
//
//    
//    var ref = firebase.database().ref("users/Mz7qz3oO4QRnXrKy5hhGlc61fT33");
//    ref.once("value")
//  .then(function(snapshot) {
//    var email = snapshot.child("email").val(); // {first:"Ada",last:"Lovelace"}
//    var vardas = snapshot.child("vardas").val();
//    return email;
//  });
 function fetchData() {
    return new Promise((resolve, reject) => {
            try {
                let usersDataRef = this.firebase
                    .database()
                    .ref("users");
                usersDataRef.once("value", snapshot => {
                    resolve(snapshot.val());
                });
            } catch (e) {
                reject(e);
            }
        })
        .then(result => {
            var arrayResult = Object.keys(result).map(function(key) {
                return result[key];
              });
            let userTable = document.getElementsByClassName("userList")[0];

            console.log(arrayResult);

            arrayResult.forEach(item => {
                let newRow = userTable.insertRow(userTable.length);

                let newCell1 = newRow.insertCell(0);
                let newCell2 = newRow.insertCell(1);

                var newText1  = document.createTextNode(item.email);
                var newText2  = document.createTextNode(item.vardas);

                newCell1.appendChild(newText1);
                newCell2.appendChild(newText2);
            });
        })
        .catch(error => console.log("ERROR:", error));
};
 
    
 //   var newPostKey = firebase.database().ref().child('users').push().key;
   
    //var email = db.child("email").val();
   // return db;
  //  return email;
    
//     db.on("child_added", snap => {
//         var email = snap.child("email").val();
//         var name = snap.child("name").val();
//         results.append(email);
//         $("body").append(results);
//     });
//    
//    var userId = firebase.auth().currentUser.uid;
//   return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//  var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  //return username;
//}

//}

//$(document).ready(function () {
//    $("#table_body").empty()
//   var rootRef = firebase.database().ref().child("users").child("Q5WguI37YDR2RnT62femqiZ40Vi2");   
//   
//   rootRef.on("child_added", snap => {
//      var name = snap.child("email").val();
//      var email = snap.child("vardas").val();
//      table_body.innerHTML = append("<tr><td>" + name + "</td><td>" + email + "</td></tr>");
//      
//   });
//function demo() {
//var query = firebase.database().ref("users").orderByKey();
//query.once("value")
//  .then(function(snapshot) {
//    snapshot.forEach(function(childSnapshot) {
//      // key will be "ada" the first time and "alan" the second time
//      //var key = childSnapshot.key;
//      var key = "veikkk";
//      // childData will be the actual contents of the child
//      var childData = childSnapshot.val();
//      //table_body.innerHTML = append("<tr><td>" + key + "</td><td>" + childData + "</td></tr>");
////       $.post('Darb.html',{postname:key,postage:childData},
////       function(query)
////       {
////           $('#result').html(query);
////       });
//      return key, childData;
//  });  
//});
//}



function arVeikia() {
    return "veikia";
}

//});
    
function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}


