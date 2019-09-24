// alert("hello");
let empty = [];
let game = [];

function play(clicked){
  let clickedBox = document.getElementById(clicked)
  let playerID = document.getElementById("player");
  if(playerID.innerText === "X"){
      playerID.innerText = "O";
      clickedBox.innerText = playerID.innerText
    empty[clicked] = "O"
  } else {
      playerID.innerText = "X"
      clickedBox.innerText = playerID.innerText;
    empty[clicked] = "X"
  }   //check for winners
      //side to side
          if(empty[0] === "X" && empty[1] === "X" && empty[2] === "X"){
            alert("X has won 1")
            let game = true;
            console.log(game)
      } else if(empty[0] === "O" && empty[1] === "O" && empty[2] === "O"){
          alert("O has won 2")
          let game = true;
          console.log(game)
      } else if(empty[3] === "X" && empty[4] === "X" && empty[5] === "X"){
          alert("X has won 3")
          let game = true;
          console.log(game)
      } else if(empty[3] === "O" && empty[4]  === "O"&& empty[5] === "O"){
          alert("O has won 4")
          let game = true;
          console.log(game)
      } else if(empty[6] === "X" && empty[7] === "X" && empty[8] === "X"){
          alert("X has won 5")
          let game = true;
          console.log(game)
      } else if(empty[6] === "O" && empty[7] === "O" && empty[8] === "O"){
          alert("O has won 6")
          let game = true;
          console.log(game)
      } 
      // checks for winners up and down
        else if (empty[0] === "X" && empty[3] === "X" && empty[6] === "X"){
        alert("X has won 7")
        let game = true;
        console.log(game)
      } else if (empty[0] === "O" && empty[3] === "O" && empty[6] === "O"){
        alert("O has won 8")
        let game = true;
        console.log(game)
      } else if (empty[1] === "X" && empty[4] === "X" && empty[7] === "X"){
        alert("X has won 9")
        let game = true;
        console.log(game)
      } else if (empty[1] === "O" && empty[4]=== "O" && empty[7] === "O"){
        alert("O has won 10")
        let game = true;
        console.log(game)
      } else if (empty[2] === "X" && empty[5] === "X" && empty[8] === "X"){
        alert("X has won 11")
        let game = true;
        console.log(game)
      } else if (empty[2] === "O" && empty[5] === "O" && empty[8] === "O"){
        alert("O has won 12")
        let game = true;
        console.log(game)
      }
      //checks for winners at angles
        else if(empty[0] === "X" && empty[4] === "X" && empty[8] === "X"){
        alert("X has won 13")
        let game = true;
        console.log(game)
      } else if(empty[0] === "O" && empty[4] === "O" && empty[8] === "O"){
        alert("O has won 14")
        let game = true;
        console.log(game)
      } else if(empty[2] === "X" && empty[4] === "X" && empty[6] === "X"){
        alert("X has won 15")
        let game = true;
        console.log(game)
      } else if(empty[2] === "O" && empty[4] === "O" && empty[6] === "O"){
        alert("X has won 16")
        let game = true;
        console.log(game)
      } else if (game === []){
        alert("CATS GAME")
      }
    }
