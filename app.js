let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
	const choices = [ 'r', 'p', 's' ];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convertToWord(letter) {
	if (letter === 'r') return 'Rock';
	if (letter === 'p') return 'Paper';
	return 'Scissors';
}

function win(user_c, computer_c) {
	const smallUserWord = 'USER'.fontsize(3).sub();
	const smallCompWord = 'COMP'.fontsize(3).sub();
	const userChoice_div = document.getElementById(user_c);
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(user_c)}${smallUserWord} beats ${convertToWord(
		computer_c
	)}${smallCompWord} . You win!`;
	userChoice_div.classList.add('green-glow');
	setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(user_c, computer_c) {
	const smallUserWord = 'USER'.fontsize(3).sub();
	const smallCompWord = 'COMP'.fontsize(3).sub();
	const userChoice_div = document.getElementById(user_c);
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(computer_c)}${smallCompWord} beats ${convertToWord(
		user_c
	)}${smallUserWord} . You Lost!`;
	userChoice_div.classList.add('red-glow');
	setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(user_c, computer_c) {
	const smallUserWord = 'USER'.fontsize(3).sub();
	const smallCompWord = 'COMP'.fontsize(3).sub();
	const userChoice_div = document.getElementById(user_c);
	result_p.innerHTML = `${convertToWord(user_c)}${smallUserWord} equals ${convertToWord(
		computer_c
	)}${smallCompWord} . It's a draw!`;
	userChoice_div.classList.add('gray-glow');
	setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}
function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case 'rs':
		case 'pr':
		case 'sp':
			win(userChoice, computerChoice);
			break;
		case 'sr':
		case 'rp':
		case 'ps':
			lose(userChoice, computerChoice);
			break;
		case 'rr':
		case 'pp':
		case 'ss':
			draw(userChoice, computerChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener('click', () => game('r'));

	paper_div.addEventListener('click', () => game('p'));

	scissors_div.addEventListener('click', () => game('s'));
}

main();
