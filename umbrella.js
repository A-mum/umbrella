function addUser() {
    user_name = document.getElementById("user_name").nodeValue;

    localStorage.setItem("user_name", user_name);

    window.location = "umbrella_room.html";
} 