var firebaseConfig = {
    apiKey: "AIzaSyAd3pwwM6jd3vTEZUgUMivfAJIhEtnbc5U",
    authDomain: "kwitter-app-43e24.firebaseapp.com",
    databaseURL: "https://kwitter-app-43e24-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-43e24",
    storageBucket: "kwitter-app-43e24.appspot.com",
    messagingSenderId: "910301731706",
    appId: "1:910301731706:web:fa925fbadec7e0331cd4c3"
  };
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom() {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
       purpose:"adding room name" 
    });
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
}

function getData() { 
    firebase.database().ref("/").on('value', function(snapshot) 
    { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
    { childKey = childSnapshot.key; 
        Room_names = childKey;
        console.log("room name - " + Room_names);
        row="<div class='room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML+=row;
    });
});
}

getData();

function redirectToRoomName (name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}