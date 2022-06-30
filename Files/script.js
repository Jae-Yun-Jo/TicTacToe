let player1 = "O"
let player2 = "X"
let space = "&nbsp;"
let game_stop = true
let ran_num = 0
let com_num = 0
let com_num_1_lst = []
let com_num_2_lst = []

const winning_numbers = [[1, 2, 3], [4, 5, 6], 
                        [7, 8, 9], [1, 5, 9],
                        [1, 4, 7], [2, 5, 8],
                        [3, 6, 9], [3, 5, 7]]

var numbers_player1 = []
var numbers_player2 = []

function display(num){
  if (!numbers_player1.includes(num) && !numbers_player2.includes(num) && game_stop == true){
    document.getElementById(num).innerHTML = player1
    numbers_player1.push(num)

    winning_check()
    computer_display()
    
  }
}

function computer_display(){
    computer_check()
    if (com_num == 0){
      if (numbers_player1.length + numbers_player2.length != 9 && game_stop == true){
        ran_num = Math.floor(Math.random() * 9) + 1;
        
        while ((numbers_player1.includes(ran_num.toString()) || numbers_player2.includes(ran_num.toString()))){
          ran_num = Math.floor(Math.random() * 9) + 1;
        }
        
   document.getElementById(ran_num.toString()).innerHTML = player2
        numbers_player2.push(ran_num.toString())
      }
    }
  else{
    if (numbers_player1.length + numbers_player2.length != 9 && game_stop == true){
    document.getElementById(com_num.toString()).innerHTML = player2
      numbers_player2.push(com_num.toString())
    }
  }
  winning_check()
}

function clear_table(){
  for (let i = 1; i<10; i++){
    document.getElementById(i).innerHTML = space
  }
  numbers_player1 = []
  numbers_player2 = []
  document.getElementById('winning').innerHTML = space
  game_stop = true
}

function winning_check(){
    for (let i = 0; i<winning_numbers.length; i++){
      var check_1 = []
      var check_2 = []
      
      for (let j = 0; j<3; j++){
        if (numbers_player1.includes(winning_numbers[i][j].toString())){
          check_1.push(true)
          
        }
        if(numbers_player2.includes(winning_numbers[i][j].toString())){
          check_2.push(true)
        }

        if (check_1.length == 3){
        document.getElementById('winning').innerHTML = 'Player 1 won!'
          game_stop = false
      }
        else if (check_2.length == 3){
        document.getElementById('winning').innerHTML = 'Computer won!'
          game_stop = false
      }
        else if(game_stop == true && numbers_player1.length + numbers_player2.length == 9){
          document.getElementById('winning').innerHTML = "No one won"
        }
      }

      
    }
}

function computer_check(){
  com_num = 0
  let com_num1 = 0
  let com_num2 = 0
  for (let i = 0; i<winning_numbers.length; i++){
      var check_1 = []
      var check_2 = []

      com_num_1_lst = []
      com_num_2_lst = []
      
      for (let j = 0; j<3; j++){
        if (numbers_player1.includes(winning_numbers[i][j].toString())){
          check_1.push(true)
        }
        else if(!numbers_player2.includes(winning_numbers[i][j].toString())){
          com_num_1_lst.push(winning_numbers[i][j].toString())
        }
        if (numbers_player2.includes(winning_numbers[i][j].toString())){
          check_2.push(true)
        }
        else if(!numbers_player1.includes(winning_numbers[i][j].toString())){
          com_num_2_lst.push(winning_numbers[i][j].toString())
        }   
    }
    if (check_2.length == 2 && com_num_2_lst.length != 0){
          com_num2 = com_num_2_lst[0]
    }
    
    if (check_1.length == 2 && com_num_1_lst.length != 0){
          com_num1 = com_num_1_lst[0]
    }
  }
  if (com_num2 != 0){
    com_num = com_num2
  }
  else if (com_num1 != 0){
    com_num = com_num1
  }
}

