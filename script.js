var textSpeed = 75;
var blinkCounter = 0;
var blinker = true;
var blinkColor;

var currentQuestType;
var currentQuests = [];

var playerScores = [];
var currentPlayer = 0;
var playerNames = [];

var questTypes = ["Hvem rundt bordet...", "Fyllefortell om...", "Fylledilemma:", "Fylla befaler:", "På mobilen:"];

window.onload = function()
{
     $(".playArea").hide();
     $("#backButton").hide();
     $("#menuText").hide();

    loadQuests();
    runTests();
}

var mainMenuClicks = function (button)
{
    $("#startButton").hide();
    $("#helpButton").hide();
    $("#aboutButton").hide();
    $("#menuText").show();
    $("#backButton").show();

    switch(button)
    {
        case 0:
            startGame();
        break;

        case 1:
            document.getElementById("menuText").innerHTML =
            "#1: Angi antall spillere.<br>" +
            "#2: Gi spillerne navn.<br>" +
            "#3: Angitt spiller trykker for å få kategori og oppgave.<br>" +
            "#4a: Gjennomføres oppgave, trykkes smilefjes, og poeng gis.<br>" +
            "#4b: Nektes, trykkes surefjes, og ingen poeng gis.<br>" +
            "#5: Gå til #3.";
        break;

        case 2:
            document.getElementById("menuText").innerHTML =
            "Fyllesnakk er laget av <a href='http://www.olepetterstokke.no'>Ole Petter Baugerød Stokke.</a><br><br>" +
            "Fyllesnakk.txt er designet for mobil. For klassisk desktop-Fyllesnakk, se <a href='http://www.fyllesnakk.no/klassisk'>fyllesnakk.no/klassisk.</a><br><br>" +
            "For mer informasjon, se <a href='http://snakk.fyllesnakk.no'>snakk.fyllesnakk.no</a>.";
        break;

        case 3:
            $("#menuText").hide();
            $("#backButton").hide();
            $("#startButton").show();
            $("#helpButton").show();
            $("#aboutButton").show();
        break;

    }
}

var startGame = function ()
{
    countQuests();

    $(".menu").hide();
    $(".playArea").show();

    $("#questTypeButton").hide();
    $("#questButton").hide();
    $("#smileyButton").hide();
    $("#frownButton").hide();
    $("#input-playerCount").hide();
    $("#confirm-playerCount").hide();
    $("#confirm-playerNames").hide();
    $("#input-playerName").hide();

    printSentence("topText","Antall spillere?", "#input-playerCount", "#confirm-playerCount");
}

var countQuests = function ()
{
    console.log("bordet:" + questsBordet.length + " dilemma:" + questsDilemma.length
                                                + " fortell:" + questsFortell.length + " mobilen:" + questsMobilen.length
                                                + " befaler:" + questsBefaler.length + " totalt:" +
                                                (questsBefaler.length+questsBordet.length+questsDilemma.length
                                                +questsFortell.length+questsMobilen.length));
}

var countConfirmed = function ()
{
    if (document.getElementById("input-playerCount").value > 0)
    {
        $("#input-playerCount").hide();
        $("#confirm-playerCount").hide();

        i = document.getElementById("input-playerCount").value;
        while (i>0)
        {
            i--;
            playerScores[i] = 0;
        }
        printSentence("topText","#1 sitt navn?", "#input-playerName", "#confirm-playerNames");
    }
}

var nameConfirmed = function ()
{
    if (document.getElementById("input-playerName").value != "")
    {
        $("#input-playerName").hide();
        $("#confirm-playerNames").hide();

        playerNames.push(document.getElementById("input-playerName").value);

        if ((currentPlayer+1) < (playerScores.length))
        {
            currentPlayer++;
            printSentence("topText","#" + (currentPlayer+1) + " sitt navn?","#input-playerName", "#confirm-playerNames");
            document.getElementById("input-playerName").value = "";
            return;
        }

        if ((currentPlayer+1) == playerScores.length)
        {
            currentPlayer=-1;
            newRound();
            return;
        }
    }
}

var getType = function ()
{
    $("#questType-text").show();
    $("#questTypeButton").hide();

    randomNumber1 = Math.floor((Math.random() * questTypes.length));
    currentQuestType = randomNumber1;
    printSentence("questType-text",questTypes[randomNumber1],"#questButton");
}

var getQuests = function ()
{
    $("#quest-text").show();
    $("#questButton").hide();

    currentQuests = [];

    switch (currentQuestType)
    {
        case 0:
            currentQuests = questsBordet.concat(currentQuests);                 //legge riktig quests inn i potten det plukkes fra
            randomNumber = Math.floor((Math.random() * currentQuests.length));  //må få nummeret nå så riktig range
            questsBordet.splice(randomNumber,1);                                //fjerne quest som kommer til å bli plukka
        break;

        case 1:
            currentQuests = questsFortell.concat(currentQuests);
            randomNumber = Math.floor((Math.random() * currentQuests.length));
            questsFortell.splice(randomNumber,1);
        break;

        case 2:
            currentQuests = questsDilemma.concat(currentQuests);
            randomNumber = Math.floor((Math.random() * currentQuests.length));
            questsDilemma.splice(randomNumber,1);
        break;

        case 3:
            currentQuests = questsBefaler.concat(currentQuests);
            randomNumber = Math.floor((Math.random() * currentQuests.length));
            questsBefaler.splice(randomNumber,1);
        break;

        case 4:
            currentQuests = questsMobilen.concat(currentQuests);
            randomNumber = Math.floor((Math.random() * currentQuests.length));
            questsMobilen.splice(randomNumber,1);
        break;
    }

    printSentence("quest-text",currentQuests[randomNumber],"#smileyButton", "#frownButton");
}

var getPoint = function ()
{
    playerScores[currentPlayer]++;
    blinkColor = "#ffa100"; //tullete å ikke ha denne i funksjonen, men funker ikke med delay-greia
    blinkScreen();
    newRound();
}

var noPoint = function ()	//trenger denne i tillegg til newround for å unngå rød blinking på start
{
    //blinkColor = "red";
    //blinkScreen();
    newRound();
}

var newRound = function ()
{
    $("#questButton").hide();
    $("#smileyButton").hide();
    $("#questType-text").hide();
    $("#quest-text").hide();
    $("#frownButton").hide();

    clearTimeout();
    displayScore();
    countQuests();

    currentPlayer++;

    if (currentPlayer >= playerScores.length)
    {
        currentPlayer = 0;
    }
    printSentence("topText",playerNames[currentPlayer] + ":", "#questTypeButton");
}

var displayScore = function ()
{
    document.getElementById("status").innerHTML = "";

    playerScores.reverse(); //for å unngå at alt blir omvendt
    playerNames.reverse();

    i = playerScores.length;
    while (i>0)
    {
        i--;
        document.getElementById("status").innerHTML += playerNames[i] + ":" + playerScores[i] + " ";

    }

    playerScores.reverse();
    playerNames.reverse();
}

var blinkScreen = function ()
{
    blinkCounter++;

    if (blinkCounter < 7)
    {
        if (blinker) //annenhver farge, funka ikke å sjekke fargen og bytte deretter
        {
            document.body.style.background = blinkColor;
            blinker = false;
            setTimeout(blinkScreen, blinkCounter / 0.1);
        }

        else
        {
            document.body.style.background = "#404040";
            blinker = true;
            setTimeout(blinkScreen, 30);
        }
    }

    else
    {
        document.body.style.background = "#404040";
        blinkCounter = 0;
        return;
    }
}

var easterEgg = function ()
{
    var letters = '0123456789ABCDEF';	//stjålet, men forstått
    var color = '#';
    for (var i = 0; i < 6; i++ )
    {
        color += letters[Math.floor(Math.random() * 16)];
    }

    blinkColor = color;
    blinkScreen();
}


function printSentence(id, sentence, button1, button2)
{
    document.getElementById(id).innerHTML = "";

    for(var i = 0; i < sentence.length; i++)	//stjålet, endra og forstått
    {
        (function(index)
        {
            setTimeout(function()
            {
                document.getElementById(id).innerHTML+=sentence[index];

                if(index+1 >= sentence.length)
                {
                    if (button1)
                    {
                        $(button1).slideDown();
                    }
                    if (button2)
                        {
                            $(button2).slideDown();
                        }
                    else
                    {
                        return;
                    }

                }
            },
            textSpeed * i);
        })(i);
    }
}

var runTests = function ()
{

}
