* FR
Users should be able to start the game 
 - Player vs Player
 - Player vs Computer
Users should be able to select who will start the game Player1/Player2 or computer
If timed game, user should be able to pause the timer
Users should be able to restart the game
As a user i should be alerted when its my turn to make a move
Building a signin/signup page if game on web
Ability to participate via guest user
    - Limitations of guest user - Won't be able to schedule a game with guest user, will need a unique identifier or concept of lobby if guest user wants to play with another guest user

Schedule a game
- Ability to add players who will play.
- Ability to allow other players to join as viewers to the game
- Ability to modify the schedule i.e change time, add/remove users, update game metadata


If User is playing against another user
- Allow interaction
 - Text, Video, Audio chat support
 - Will require moderation on chat
 - Privacy on chat, sent message privately vs to everyone

If User is playing against computer
- User can ask for hints


Learn chess
- Lessons: Audio/Video/Text/Interactive Sessions on learning
- Practise 
- Hire Coach

Community
- Ask your doubts
- Blogs
- Interact

Build a leaderBoard for all the games played previously

Notifications 
- Notify the user via email or push notification
- Ability to setup reminder for the game -> email or push notification 



* NFR
Web sockets -> For both real time game updates and chat support over text
Performance Optimisation -> FCP, LCP, TTI, TBT, Latency of Apis, 
Analytics & Monitoring -> No of active users, No of guest visits, time spent by each user on the game, LeaderBoard -> Track games played, won, lost, time spent, lessons covered, Time spent on each game, game duration
Localization/Internationalization -> 
Security - Users are not able to cheat- run some plugin; Secure Session; 
Scalability 
Accessibility 
Platforms - Web/Mobile
Authentication - JWTs or Cookies




* HLD
    https://miro.com/app/board/uXjVK0z-cYY=/
* LLD

Users
loginUser(uniqueIdentifier, pswd)
CreateUser(uniqueIdentifier, pswd, userMetadata)

Game
gameStatus: Draw, In progress, Win
playerTurn:
checkWhoseTurn()
scheduleGame({
    type: 'p1vp2' or 'p2vp1' or 'p1vc' or 'cvp1',
    users:[] // unique identifiers - emailId
    viewersList:[],
    DateTime: ,
    Metadata:{
        chatSupport: ['audio','video','text'] // Empty then none,
        gameDetails: {
            type:,
            duration:, -> s or Infinity
        }
    }
})
startGame()
pauseGame()
findValidPositions(pieceType,pos)  --> A->F 1,2,3,4,5,6,8, pieceTypes -> knight,horse, camel, pyada, queen, king
movePiece(currentPos,NewPos)
checkGameStatus(boardMap) -> Draw, Winner


* APIs
POST - /api/game     /api/createGameX -> RESTful design principles suggest using nouns and HTTP methods to define actions.
{
    gameStatus,
    boardMap,
    playerTurn
}
PUT - /api/game/status  -> Running, Paused
{
    gameStatus: 
}
Get /api/playe/turn
PUT /api/piece
{
    boardMap,
    currentPos,
    endPos
} -> {
    boardMap,
    playerTurn
}




* Component Design

<MainContainer>
<Navbar/>
<Sidebar>
    <UserProfile>
    <FriendList>
    <GameSchedules>
</Sidebar>
<ChessBoard>
    <RowEl>
        <Block/>
        <!-- More Blocks -->
    </RowEl>
    <!-- More Rows -->
</ChessBoard>
<Footer/>
</MainContainer>


    

* Future Scope
- Support for multiple formats of chess.
- Create a platform for hiring tutors.
- We can have support for other board games.



** ISSUES

Issues with /api/createGame
RESTful Endpoint Naming:
Create Game: The endpoint /api/createGame is not RESTful because it uses a verb in the path. RESTful design principles suggest using nouns and HTTP methods to define actions.
Correct Endpoint: A more RESTful approach would be to use /api/games with the appropriate HTTP method (POST) to create a new game.