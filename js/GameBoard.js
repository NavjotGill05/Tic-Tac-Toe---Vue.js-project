class GameBoard{
    //create a constructor
    constructor(){
        this.inProgrs = true;       //it will track whether game is in progress or completed and it is set to true when the game begins to start
        this.gameWinner = null;     //it will store and display who is winner but now it is null
        this.turn = GameBoard.O;    //it will track the turn of players but we define the first term with "O"
        this.movesCounter = 0;      //it will count the moves made by the players and at the starting it is set to "0"
        this.gameBlocks = new Array(16).fill().map(blocks => new GameBlock());     //array of size 9 and map will create 16 blocks or square objects on the gameboard
    }

    //create method with index of gameBlocks array as an arguement
    makeMove(i){
        //if the game is in progress and the square block of gameBoard is empty 
        //then we will set the value of turn proerty as the value of that gameBlock  
        if(this.inProgrs && !this.gameBlocks[i].value){
            this.gameBlocks[i].value = this.turn;

            //increment the movesCounter by 1 to track the number of total moves made
            //and then call the checkinner function 
            //andwe will also change the turn by checking if the current turn is of O then the next turn will be of X otherwise the turn is of O
            this.movesCounter++;
            this.checkWinner(); 
			
			if(this.turn === GameBoard.O){
				this.turn = GameBoard.X;
			}else{
				this.turn = GameBoard.O;
			}
        }
    }
    //we will define all the possible combinations of wining a game    
    //and loop through all the possible combinations to check whether the values of gameblocks or squares match with any combination to declare one of them as winner
    checkWinner(){
        const winningCombinations = [
         	[0, 4, 8, 12],
			[1, 5, 9, 13],
			[2, 6, 10, 14],
			[3, 7, 11, 15],
			[0, 1, 2, 3],
			[4, 5, 6, 7],
			[8, 9, 10, 11],
			[12, 13, 14, 15],
			[0, 5, 10, 15],
			[3, 6, 9, 12]
        ];

        winningCombinations.forEach((winningCombination) => {
            //separte the indexes of the cominations by taking constants w, x, y and z
            //and on these indexes(w, x, y, z) get the objects of Game Block
            const [w, x, y, z] = winningCombination;
			const blockW = this.gameBlocks[w];
            const blockX = this.gameBlocks[x];
            const blockY = this.gameBlocks[y];
            const blockZ = this.gameBlocks[z];
            
            //now we will check that if the value of blockX is not empty and if it is equal to blockW, blockY and blockZ
            //then game will be over and we will set the value of inProgrs property as false
            //andwe will display the winner of game by assigning the value of the winner block to the gameWinner property
            //all the 4 blocks that help in achieving the game will be highlighted 
		    if(blockW.value && blockW.value === blockX.value && blockW.value === blockY.value  && blockW.value === blockZ.value){
                this.inProgrs = false;
                this.gameWinner = blockW.value;
                blockW.isHighLighted = blockX.isHighLighted = blockY.isHighLighted = blockZ.isHighLighted = true;
            }

        });

        //this block of code will be executed if the values of blocks did not match with the possible winning combinations that we define above
        //here we will set the value of inProgrs property as false it means the game is over
        if(this.movesCounter === this.gameBlocks.length){
            this.inProgrs = false;
        }
    }
}


//declare Global properties
GameBoard.O = 'O';
GameBoard.X = 'X';





/* 
	Citations: 
		Author: dcode channel on youtube
		Date: 30 June 2020
		Source: https://www.youtube.com/watch?v=rqb4FgVNrrM
				https://www.youtube.com/watch?v=0ShYlN-H-ak&t=149s
				https://www.youtube.com/watch?v=R78cMs75P7E&t=507s
 */