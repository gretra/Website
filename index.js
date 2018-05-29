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

var firebase = require("firebase/database");

require("firebase/auth");
require("firebase/database");
require("firebase/firestore");
require("firebase/messaging");
require("firebase/functions");

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
 
// export const fetchListings = () => {
//    return 
//        new Promise((resolve, reject) => {
//            try {
//                let listingsDataRef = firebase
//                    .database()
//                    .ref().child('users');
//                listingsDataRef.orderByChild('email').once("value", snapshot => {
//                    resolve(snapshot.val());
//                });
//            } catch (e) {
//                reject(e);
//            }
//        }).then(result => dispatch(fetchListingsSuccess(result)))
//        .catch(error => console.log("ERROR:", error));
//};

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
                
              //  let TimeTable = document.getElementsByTagName("time_stamps")[0];
//                console.log("item:", item);               
//                
//                var Laikai = item("time_stamps").Object.keys(result).map(function(key){
//                return result[key];
//              });
//              
//              Laikai.forEach(item => {
//                  console.log("kaaaaazkas: ",item);
//              });
                
              //console.log("item:", item);
              
                let newCell1 = newRow.insertCell(0);
                let newCell2 = newRow.insertCell(1);
                let newCell3 = newRow.insertCell(2);
                let newCell4 = newRow.insertCell(3);

                var newText1  = document.createTextNode(item.email);
                var newText2  = document.createTextNode(item.vardas);
                var newText3  = document.createTextNode(item.time_stamps);
             //   var newButton = document.createElement("Button");
               // var t = document.createTextNode("Click me");
               // newButton.appendChild(t);
               // var Button = onclick="myFunction()">Try it<;
                var button = document.createElement("button");
                var button2 = document.createElement("button");
                button.innerHTML = "Siandien pradirbta";
                button2.innerHTML = "Is viso pradirbta";

                newCell1.appendChild(newText1);
                newCell2.appendChild(newText2);
               // newCell3.appendChild(Button);
                var body = document.getElementsByTagName("body")[0];
                newCell3.appendChild(button);
                newCell4.appendChild(button2);
               
                button.addEventListener ("click", function () 
                {
//                var today = new Date();
//                var dd = today.getDate();
//                var mm = today.getMonth()+1;
//                var yyyy = today.getFullYear();
//                        for (var i = 0; i < newText3.length; i++) {
//                            if(today == i.child().val()){
//                                var Tekstas = i.child().val();
//                            }
//                        }
             // var today = newText3.child().val();
                
                alert("2018");
                })
                button2.addEventListener ("click", function () 
                {
                     alert("2018");
                });
                
            });
        })
        .catch(error => console.log("ERROR:", error));
};

//function DarboLaikas(k) {
//    return new Promise((resolve, reject) => {
//            try {
//                let usersDataRef = this.firebase
//                    .database()
//                    .ref("users");
//                usersDataRef.once("value", snapshot => {
//                    resolve(snapshot.val());
//                });
//            } catch (e) {
//                reject(e);
//            }
//        })
//        .then(result => {
//            var arrayResult = Object.keys(result).map(function(key) {
//                return result[key];
//              });
//            let userTable = document.getElementsByClassName("userList")[0];
//
//            console.log(arrayResult);
//
//            arrayResult.forEach(item => {
//                if(item.email == k){
//                    var Text = document.createTextNode(item.email);
//                    alert(Text);
//                }
//            }
//               // let newRow = userTable.insertRow(userTable.length);
//           }
//}

 
 function myFunction() {
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("CLICK ME");
    btn.appendChild(t);
    document.body.appendChild(btn);
}
    
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


