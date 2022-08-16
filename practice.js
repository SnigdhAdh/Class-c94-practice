
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyD1yBW_9LA25SLzhB6oCjxtEDGDHRr2Fvk",
    authDomain: "kwitter-app-f5ac2.firebaseapp.com",
    databaseURL: "https://kwitter-app-f5ac2-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-f5ac2",
    storageBucket: "kwitter-app-f5ac2.appspot.com",
    messagingSenderId: "251942398793",
    appId: "1:251942398793:web:134d6532b50cb2cc29c898",
    measurementId: "G-YQKLVKX1L3"
  };

  firebase.initializeApp(firebaseConfig);

 function add_User(){
    var username=document.getElementById("user_name").value;
    firebase.database().ref("/").child(username).update({
        purpose:"adding user"
    });
    
  }