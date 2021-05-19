var firebaseConfig = {
    apiKey: "AIzaSyBJutbFeBL_ZmDL7dMxotnSrALhmEGgG8c",
    authDomain: "project-93-a7aab.firebaseapp.com",
    databaseURL: "https://project-93-a7aab-default-rtdb.firebaseio.com",
    projectId: "project-93-a7aab",
    storageBucket: "project-93-a7aab.appspot.com",
    messagingSenderId: "167963486035",
    appId: "1:167963486035:web:ed5d4b6c95182bdfc663a6"
  };
firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       
       firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");

    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index1.html";
}

function send(){
    msg = document.getElementById("message").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
    });
    document.getElementsById ("message").value = "";}
