const gameNumSelector = document.getElementById('gameNum');
const oneButton = document.getElementById('pOne');
const twoButton = document.getElementById('pTwo');
const resetButton = document.getElementById('reset');
const p1Score = document.querySelector('.p1Score');
const p2Score = document.querySelector('.p2Score');
var gameNum = 3;
var oneScore = 0;
var twoScore = 0;

function p1ScoreUpdater()
{
    oneScore++;
    p1Score.textContent = oneScore;

    if(oneScore == gameNum)
    {
        gameOver(p1Score, p2Score);
    }
}

function p2ScoreUpdater()
{
    twoScore++;
    p2Score.textContent = twoScore;
    if(twoScore == gameNum)
    {
        gameOver(p2Score, p1Score);
    }
}

gameNumSelector.addEventListener('change', function(event)
{
    gameNum = event.target.value;
    if(oneScore >= gameNum && twoScore >= gameNum)
    {
        // reset()
    }
    else if(twoScore >= gameNum)
    {
        gameOver(p2Score, p1Score);
    }
    else if(oneScore >= gameNum)
    {
        gameOver(p1Score, p2Score);
    }
})

oneButton.addEventListener('click', p1ScoreUpdater);

twoButton.addEventListener('click', p2ScoreUpdater);

resetButton.addEventListener('click', reset);

function gameOver(winner, loser) 
{
    oneButton.classList.add('deactivate');
    oneButton.classList.add('deactivateOne');
    oneButton.removeEventListener('click', p1ScoreUpdater);

    twoButton.classList.add('deactivateTwo');
    twoButton.classList.add('deactivate');
    twoButton.removeEventListener('click', p2ScoreUpdater)

    winner.classList.add('winner');
    loser.classList.add('loser');
}

function reset()
{
    oneButton.addEventListener('click', p1ScoreUpdater);
    twoButton.addEventListener('click', p2ScoreUpdater);

    oneButton.classList.remove('deactivate');
    oneButton.classList.remove('deactivateOne');
    twoButton.classList.remove('deactivateTwo');
    twoButton.classList.remove('deactivate');

    if(oneScore > twoScore)
    {
        p1Score.classList.remove('winner');
        p2Score.classList.remove('loser');
    }
    else
    {
        p2Score.classList.remove('winner');
        p1Score.classList.remove('loser');
    }

    oneScore = 0;
    twoScore = 0;
    p1Score.textContent = oneScore;
    p2Score.textContent = twoScore;
}