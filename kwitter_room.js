var firebaseConfig = {
      apiKey: "AIzaSyAmvOE4DnTzLF8iT8tZeYkmqFkyP7Bgy0A",
      authDomain: "visualstudiocode-3f541.firebaseapp.com",
      databaseURL: "https://visualstudiocode-3f541-default-rtdb.firebaseio.com",
      projectId: "visualstudiocode-3f541",
      storageBucket: "visualstudiocode-3f541.appspot.com",
      messagingSenderId: "630876226630",
      appId: "1:630876226630:web:b3a9282dcdadd3ac793647"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

    function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr></hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
} 

function logout() {
localStorage.removeItem(user_name);
localStorage.removeItem(room_name);
  window.location = "index.html";
} 

