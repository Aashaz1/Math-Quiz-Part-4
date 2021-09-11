function send(){
    number1 = document.getElementById("number01").value;
    number2 = document.getElementById("number02").value;
    actualAnswer= parseInt(number1) * parseInt(number2);
    console.log(actualAnswer);

    questionNumber= "<h4>"+ number1+ " X "+ number2 +"</h4>";
    inputBox= "<br> Answer: <input type='text' id='inputCheckBox'>";
    checkButton= "<br><br><button class='btn btn-info' onclick=check()>Check</button>";
    row= questionNumber+ inputBox+ checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value= "";
    document.getElementById("number2").value= "";
}

questionTurn = "player1";
answerTurn = "player2";

function check(){
    getAnswer = document.getElementById("inputCheckBox").value;

    if (getAnswer == actualAnswer){
        if (answerTurn == "player1"){
            updatePlayer1Score = player1Score+1;
            document.getElementById("player1Score").innerHTML= updatePlayer1Score;
        }
        else {
            updatePlayer2Score = player2Score+1;
            document.getElementById("player2Score").innerHTML= updatePlayer2Score;
        }
    }
    if (questionTurn == "player1"){
        questionTurn= "player2";
        document.getElementById("playerQuestion").innerHTML = "Question Turn -" + player2Name;
        }
        else {
        questionTurn= "player1";
        document.getElementById("playerQuestion").innerHTML = "Question Turn -" + player1Name;
        }
}