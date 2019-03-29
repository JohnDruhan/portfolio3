$(document).ready(function () {
    //functions for materialize
    $(".dropdown-trigger").dropdown({
        alignment: 'left',
        coverTrigger: false,
        inDuration: 200,
        outDuration: 400
    });

    //populating content
    function populateIntro() {
        var introTitle = $("<p id='intro-headText'><span class='red-text'>Hi</span>!</p>");
        var introContent = $("<p id='intro-text'>My name is <span class='red-text'>John</span>. <br>I'm a <span class='red-text'>full stack web developer</span>. <br>Welcome to my portfolio site!</p>");
        var introDiv = $("<div class='content'></div>");
        introDiv.attr("value", 1);
        introDiv.append(introTitle).append(introContent);
        return introDiv;
    }

    function populateAbout() {
        var aboutTitle = $("<p id='about-headText'><span class='red-text'>About Me</span>:</p>");
        var aboutContent = $("<p id='about-text'> I'm a user-focused Web Developer with a passion for creating fully functional, aesthetically pleasing web presences. I enjoy leveraging my background in church management and tech - production to provide a unique perspective on how end - users interact with websites and software platforms.</p>")
        var aboutDiv = $("<div class='content'></div>");
        aboutDiv.attr("value", 2);
        aboutDiv.append(aboutTitle).append(aboutContent);
        return aboutDiv;
    }

    function populateContact() {
        var contactTitle = $("<p id='contact-headText' class='red-text'>Contact</p>");
        var contactContent1 = $("<p class='contact-text' class='left-align'>Social Media: </p>");
        var contactContent2 = $("<p class='contact-text' class='left-align' style='padding-bottom: 5%'>Email: <br><span class='red-text'><a href='mailto:JFrancisDruhan@gmail.com'>JFrancisDruhan@gmail.com</a></span></p>")
        var imgrow = $("<div class='row'></div>");
        var githubImgDiv = $("<div class='col s6'><a href='https://github.com/JohnDruhan' target='_blank'><img class='responsive-img ourImage' src='assets/images/github.png'></a></div>");
        var linkedinImgDiv = $("<div class='col s6'><a href='https://www.linkedin.com/in/john-druhan-8aa16225/' target='_blank'><img class='responsive-img ourImage' src='assets/images/linkedin.png'></a></div>");
        imgrow.append(githubImgDiv).append(linkedinImgDiv);
        var contactDiv = $("<div class='content'></div>");
        contactDiv.attr("value",4);
        contactDiv.append(contactTitle).append(contactContent1).append(imgrow).append(contactContent2);
        return contactDiv;
    }

    function populatePortfolio() {
        var portfolioTitle = $("<p id='portfolio-headText' class='red-text'>Portfolio</p>");
        //make cards from materialize card
        var projcard1 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/wordguess.png'><span style='font-size:1.40em;' class='card-title white-text red'>Word Guess Game</span></div><div class='card-content'><p class='card-textcontent'>A hang-man style game of skill with a Biblical twist.<br> HTML - CSS - JavaScript</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://johndruhan.github.io/Word-Guess-Game/' target='_blank'>Play Game</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'></a></p></div></div>");

        var projcard2 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/CrystalGame.png'><span style='font-size:1.40em;' class='card-title white-text red'>Crystal Guessing Game</span></div><div class='card-content'><p class='card-textcontent'>A numbers guessing game built with JavaScript.<br>Bootstrap - JavaScript</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://johndruhan.github.io/crystalGuessGame/' target='_blank'>Play Game</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'></a></p></div></div>");

        var projcard3 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/triviaGame.png'><span style='font-size:1.40em;' class='card-title white-text red'>Trivia Quiz</span></div><div class='card-content'><p class='card-textcontent'>Test your knowledge of the academy awards.<br>JavaScript - jQuery</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://johndruhan.github.io/TriviaGame/' target='_blank'>Take Quiz</a></div></div>");

        var projcard4 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/gifGame.png'><span style='font-size:1.40em;' class='card-title white-text red'>Giftastic Web App</span></div><div class='card-content'><p class='card-textcontent'>A web page using the GIPHY API to generate button categories which then generate gifs<br>jQuery - API</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://johndruhan.github.io/gifgame/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'></a></p></div></div>");

        var projcard5 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/TrainScheduler.png'><span style='font-size:1.40em;' class='card-title white-text red'>Train Scheduler</span></div><div class='card-content'><p class='card-textcontent'>App that incorporates Firebase to host arrival and departure data.<br>jQuery - API - Fifebase</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://johndruhan.github.io/train-scheduler/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'></a></p></div></div>");

        var projcard6 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/AceDetailing.png'><span style='font-size:1.40em;' class='card-title white-text red'>Ace Auto Detail</span></div><div class='card-content'><p class='card-textcontent'>Custom Web-App created from ground up for local business.<br>jQuery - API - Fifebase</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://johnharlepas.github.io/Project1_API/index.html' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'></a></p></div></div>");

        var projcard7 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/yourBrand.png'><span style='font-size:1.40em;' class='card-title white-text red'>Your Brand Web Page</span></div><div class='card-content'><p class='card-textcontent'>Custom Web Page promoting your brand.<br>javaScript - PHP - API</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://johndruhan.github.io/yourbrand/index.html' target='_blank'>View Web Page</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'></a></p></div></div>");

        var projcard8 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/friendFinder.png'><span style='font-size:1.40em;' class='card-title white-text red'>Friend Finder</span></div><div class='card-content'><p class='card-textcontent'>A compatibility-based 'Friend Finder' application.<br>jQuery - API - Fifebase</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://frozen-earth-52194.herokuapp.com/' target='_blank'>View App</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'></a></p></div></div>");

        var projcard9 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/eatBurger.png'><span style='font-size:1.40em;' class='card-title white-text red'>Eat Da Burger</span></div><div class='card-content'><p class='card-textcontent'>A restaurant App that lets users input Burger names.<br>MySQL - Node - Express - Handlebars - ORM </p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://floating-spire-52265.herokuapp.com/' target='_blank'>View App</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'></a></p></div></div>");

        var cardrow = $("<div class='row'></div>");
        cardrow.append(projcard1).append(projcard2).append(projcard3);
        var cardrow2 = $("<div class='row'></div>");
        cardrow2.append(projcard4).append(projcard5).append(projcard6);
        var cardrow3 = $("<div class='row'></div>");
        cardrow3.append(projcard7).append(projcard8).append(projcard9);
        var portfolioDiv = $("<div class='content'></div>");
        portfolioDiv.attr("value",3);
        portfolioDiv.append(portfolioTitle).append(cardrow);
        portfolioDiv.append(cardrow2);
        portfolioDiv.append(cardrow3);
        return portfolioDiv;
    }

    function changeDiv(cValue,valueNew,newDiv){
        if(cValue != valueNew){
            $("div[value=" + cValue + "]").fadeOut(1000,function(){
                newDiv.fadeIn(500);
            });
        }
    }
    var currentValue = 1;
    var intro = populateIntro();
    var about = populateAbout();
    var portfolio = populatePortfolio();
    var contact = populateContact();
    $("#attachDiv").append(intro).append(about).append(portfolio).append(contact);
    //when user first loads page, only show intro
    
    about.hide();
    portfolio.hide();
    contact.hide();
    //click functions
    $("#homePage").click(function(){
        changeDiv(currentValue,1,intro);
        currentValue = 1;
    })
    $("#topTitle").click(function(){
        $("#homePage").trigger('click');
    })
    $("#aboutPage").click(function(){
        changeDiv(currentValue,2,about);
        currentValue = 2;
    })
    $("#portfolioPage").click(function(){
        changeDiv(currentValue,3,portfolio);
        currentValue = 3;
    })
    $("#contactPage").click(function(){
        changeDiv(currentValue,4,contact);
        currentValue = 4;
    })
})