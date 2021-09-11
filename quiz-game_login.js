var player1 = null;
var player2 = null;

function saveName(){
    localStorage.setItem("Name", player1);
    localStorage.setItem("Name", player2);
}

function addUser(){
    player1 = document.getElementById("player1_name_input").value;
    player2 = document.getElementById("player2_name_input").value;
    window.location = "quiz_game_page.html";
}