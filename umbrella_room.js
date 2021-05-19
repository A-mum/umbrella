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
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

room_name = localStorage.getItem("room_name");


  //Start code
function getData() 
{ firebase.database().ref("/").on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
{ childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); 
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row; 
}); }); } 
getData();


function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "umbrella_page.html";
} 

function addroom(){
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });

localStorage.setItem("room_name", room_name); 

window.location = "umbrella_page.html";

}

function logout(){

  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace = "umbrella.html";

}



