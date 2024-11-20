Snake and Ladder

Functional Requirements
- Should be able to start the game
- Roll the dice
- Player should be able to move across cells with dice roll
- Player should always stay on the board and can never jump across end of board
- Snake should bring the player down to a lower cell position.
- Ladder should take the player to a upper cell position.
- If player reaches end of board, either we stop the game and declare him winner or we maintain a leaderboard and his status is marked winner implying no turns forward

- * If Leaderboard 
    - Game continues till there is only one player not on board end.

- * If not leaderboard  
    - Games finishes as soon as a player land on end of board


Non functional Requirements
- Will game run online/offline
- Max players
- Performance 
- Anayltics
- Monitoring 
- Accessibility 
- Platform support - Desktop, tablet, Mobile; 
- Responsiveness
- Security ( XSS, CSRF, DDOS)
- Localization/Internationalization -> We develop for a particular locale and then internationalize it for other languages
- Caching/CDN for assets
- Authentication
- SEO
- Voice support and chat support
- Session would be stored where(locally or server)
- Can we schedule the games
- Can we add player in a running game
- Theme Support -> different folks have different themes
- PWA -> Push notifications, back it as app have it on home screen
- 2d/3d


HLD/LLD

HLD - architecture -> miro

LLD - interfaces for all 
Interfaces:
Snake -> start/end, styles, generateSnake() , addSnake(start,end), getNextPos(pos), hasSnake(start)
Ladder -> start/end, styles, generateLadder() , addLadder(start,end), getNextPos(pos), hasLadder(start)
Player -> state: active/unactive/(winner or leaderboard position), position, userInfo
Dice -> roll(), style
Board(Cell) -> size, moveToNextPosition(diceNumber), Cell: direction
Game -> activePlayer, roll(), state: active/finished/scheduled ,moveToNextPosition(diceNumber), numberOfPlayers, maxDuration, startTimestamp, getWinner(), Map<Ladder|Snakes>, play(), hasLadder(pos)[start,end], hasSnake(pos)[start,end]


Component Design -> React
<Game>
    <Board>
        <Cell/>
    </Board>
    <Player/>
    <Snake/>
    <Ladder/>
    <Dice/>
</Game>

API discussion -> All can be on frontend or backend but its upto us where which logic we want to reside
POST /create-game
body: {
    playerUserNames: []
    gameDuration: 
    startTime:
} // Player should be available in startTime,startTime+gameDuration, 

return {
    gameId: 
    playerUserNames: []
    gameDuration: 
    startTime:
}

GET /userNames?name=
{
    userNames:[]
}

POST /start-game?status='start'/'end'
body:{
    gameId: 
}
return
{

}

POST /roll-dice
{
    gameId: 
    playerUserName:
}

Future Scope:
1. Changing ladder and snake positions every x mins
2. Playing game with more than one dice
3. On a getting 6 say we get another turn and then on three consecutive sixes all are turns go null and void
