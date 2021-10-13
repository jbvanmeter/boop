const mainBody = document.querySelector("body");

function startScreen() {
    mainBody.style.flexFlow = "column wrap";
    const mainLogo = document.createElement("img");
    mainLogo.id = "mainLogo";
    mainLogo.src = "./images/boop.png";
    mainLogo.width = 0;
    mainBody.appendChild(mainLogo);
    const mainMenu = document.createElement("div");
    mainMenu.id = "mainMenu";
    mainMenu.style.width = "0px";
    mainMenu.style.height = "90px";
    mainBody.appendChild(mainMenu);
    const logoZoomTimer = setInterval(function logoZoom() {
        if (mainLogo.width < 625) {
            mainLogo.width += 10;
        } else {
            clearInterval(logoZoomTimer);
        }
    }, 10);
    setTimeout(function logoFinal() {
        const logoFinalTimer = setInterval(function logoResize() {
            if (mainLogo.width > 550) {
                mainLogo.width -= 3;
            } else {
                clearInterval(logoFinalTimer);
            }
        }, 20);
    }, 625);
    setTimeout(function createMenu() {
        let width = 0;
        mainMenu.style.height = "70px";
        mainMenu.style.background = "rgb(111, 138, 255)";
        mainMenu.style.border = "10px groove rgb(92, 122, 255)";
        const createMenuTimer = setInterval(function menuResize() {
            if (width < 520) {
                width += 5;
                mainMenu.style.width = width + "px";
            } else {
                clearInterval(createMenuTimer);
            }
        }, 5);
    }, 1350);
    setTimeout(function createButtons() {
        const play = document.createElement("button");
        play.className = "menuButton";
        play.innerHTML = "PLAY";
        play.style.width = "50%";
        const exit = document.createElement("button");
        exit.className = "menuButton";
        exit.innerHTML = "EXIT";
        exit.style.width = "50%";
        mainMenu.appendChild(play);
        mainMenu.appendChild(exit);
        play.addEventListener("click", loadGame);
        exit.addEventListener("click", exitGame);
        let opacity = 0;
        play.style.opacity = opacity + "%";
        exit.style.opacity = opacity + "%";
        const createButtonsTimer = setInterval(function buttonFade() {
            if (opacity < 100) {
                opacity += 5;
                play.style.opacity = opacity + "%";
                exit.style.opacity = opacity + "%";
            } else {
                clearInterval(createButtonsTimer);
            }
        }, 50);
    }, 2000);
}

function exitGame() {
    while (mainBody.firstChild) {
        mainBody.removeChild(mainBody.firstChild);
    }
    const goodbyeBox = document.createElement("div");
    goodbyeBox.className = "generalBox";
    const goodbyeMessage = document.createElement("p");
    goodbyeMessage.className = "header";
    goodbyeMessage.innerHTML = "ARE YOU SURE YOU WANT TO QUIT?";
    const yesQuit = document.createElement("button");
    yesQuit.className = "menuButton";
    yesQuit.innerHTML = "YES";
    const noQuit = document.createElement("button");
    noQuit.className = "menuButton";
    noQuit.innerHTML = "NO";
    mainBody.appendChild(goodbyeBox);
    goodbyeBox.appendChild(goodbyeMessage);
    goodbyeBox.appendChild(yesQuit);
    goodbyeBox.appendChild(noQuit);
    yesQuit.addEventListener("click", closeGame);
    noQuit.addEventListener("click", restart);
}

function loadGame() {
    while (mainBody.firstChild) {
        mainBody.removeChild(mainBody.firstChild);
    }
    const difficultyBox = document.createElement("div");
    difficultyBox.id = "difficultyBox";
    difficultyBox.style.height = "0px";
    difficultyBox.style.width = "400px";
    mainBody.appendChild(difficultyBox);
    setTimeout(function difficultyBoxAppear() {
        let height = 0;
        difficultyBox.style.background = "rgb(111, 138, 255)";
        difficultyBox.style.border = "10px groove rgb(92, 122, 255)";
        const difficultyBoxTimer = setInterval(function difficultyBoxFade() {
            if (height < 300) {
                height += 3;
                difficultyBox.style.height = height + "px";
            } else {
                clearInterval(difficultyBoxTimer);
            }
        }, 5)
    }, 300);
    setTimeout(function difficultyMenuAppear() {
        const difficultyHeader = document.createElement("p");
        difficultyHeader.className = "header";
        difficultyHeader.innerHTML = "SELECT DIFFICULTY:"
        difficultyHeader.style.width = "100%";
        const difficultyEasy = document.createElement("button");
        difficultyEasy.className = "menuButton";
        difficultyEasy.innerHTML = "EASY";
        difficultyEasy.style.width = "100%";
        const difficultyMedium = document.createElement("button");
        difficultyMedium.className = "menuButton";
        difficultyMedium.innerHTML = "MEDIUM";
        difficultyMedium.style.width = "100%";
        const difficultyHard = document.createElement("button");
        difficultyHard.className = "menuButton";
        difficultyHard.innerHTML = "HARD";
        difficultyHard.style.width = "100%";
        difficultyBox.appendChild(difficultyHeader);
        difficultyBox.appendChild(difficultyEasy);
        difficultyBox.appendChild(difficultyMedium);
        difficultyBox.appendChild(difficultyHard);
        difficultyEasy.addEventListener("click", easyGame);
        difficultyMedium.addEventListener("click", mediumGame);
        difficultyHard.addEventListener("click", hardGame);
        let opacity = 0;
        difficultyHeader.style.opacity = opacity + "%";
        difficultyEasy.style.opacity = opacity + "%";
        difficultyMedium.style.opacity = opacity + "%";
        difficultyHard.style.opacity = opacity + "%";
        const difficultyMenuTimer = setInterval(function difficultyMenuFade() {
            if (opacity < 100) {
                opacity += 5;
                difficultyHeader.style.opacity = opacity + "%";
                difficultyEasy.style.opacity = opacity + "%";
                difficultyMedium.style.opacity = opacity + "%";
                difficultyHard.style.opacity = opacity + "%";
            } else {
                clearInterval(difficultyMenuTimer);
            }
        }, 50)
    }, 1000);
}

function countDown() {
    const ready = document.createElement("img");
    ready.src = "./images/ready.png";
    const three = document.createElement("img");
    three.src = "./images/3.png";
    const two = document.createElement("img");
    two.src = "./images/2.png";
    const one = document.createElement("img");
    one.src = "./images/1.png";
    const go = document.createElement("img");
    go.src = "./images/go.png";
    ready.height = 0;
    mainBody.appendChild(ready);
    const readyTimer = setInterval(function readyZoom() {
        if (ready.height < 115) {
            ready.height += 2;
        } else {
            clearInterval(readyTimer);
        }
    }, 10);
    setTimeout(function threeBegin() {
        while (mainBody.firstChild) {
            mainBody.removeChild(mainBody.firstChild);
        }
        three.height = 0;
        mainBody.appendChild(three);
        const threeTimer = setInterval(function threeZoom() {
            if (three.height < 115) {
                three.height += 2;
            } else {
                clearInterval(threeTimer);
            }
        }, 10);
    }, 1500);
    setTimeout(function twoBegin() {
        while (mainBody.firstChild) {
            mainBody.removeChild(mainBody.firstChild);
        }
        two.height = 0;
        mainBody.appendChild(two);
        const twoTimer = setInterval(function twoZoom() {
            if (two.height < 115) {
                two.height += 2;
            } else {
                clearInterval(twoTimer);
            }
        }, 10);
    }, 2500);
    setTimeout(function oneBegin() {
        while (mainBody.firstChild) {
            mainBody.removeChild(mainBody.firstChild);
        }
        one.height = 0;
        mainBody.appendChild(one);
        const oneTimer = setInterval(function oneZoom() {
            if (one.height < 115) {
                one.height += 2;
            } else {
                clearInterval(oneTimer);
            }
        }, 10);
    }, 3500);
    setTimeout(function goBegin() {
        while (mainBody.firstChild) {
            mainBody.removeChild(mainBody.firstChild);
        }
        go.height = 0;
        mainBody.appendChild(go);
        const goTimer = setInterval(function goZoom() {
            if (go.height < 115) {
                go.height += 2;
            } else {
                clearInterval(goTimer);
            }
        }, 10);
    }, 4500);
    setTimeout(function goAway() {
        let opacity = 100;
        go.style.opacity = opacity + "%";
        const goAwayTimer = setInterval(function goFade() {
            if (opacity > 0) {
                opacity -=5;
                go.style.opacity = opacity + "%";
            } else {
                clearInterval(goAwayTimer);
                while (mainBody.firstChild) {
                    mainBody.removeChild(mainBody.firstChild);
                }
            }
        }, 10);
    }, 5500)
}

//const sidePanel = document.createElement("div");
let gameContainer = document.createElement("div");
gameContainer.id = "gameContainer";
let gameGrid = [];
let bopLocation = "";
let bopCircle = document.createElement("div");
bopCircle.className = "bopCircle";
let bopBoop = document.createElement("img");
bopBoop.className = "bopBoop";
const plusOne = document.createElement("img");
plusOne.className = "plusOne";
plusOne.src = "./images/+1.png";
const bopBoom = document.createElement("img");
bopBoom.className = "bopBoom";
bopBoom.src = "./images/boom.png";
const gameOverBoom = document.createElement("img");
gameOverBoom.src = "./images/gameoverboom.png";
const tryAgain = document.createElement("img");
tryAgain.src = "./images/tryagain.png";
const yesOption = document.createElement("img");
yesOption.className = "tryAgainOption";
yesOption.src = "./images/yes.png";
const noOption = document.createElement("img");
noOption.className = "tryAgainOption";
noOption.src = "./images/no.png";
const timeUp = document.createElement("img");
timeUp.src = "./images/timeup.png";


function easyGame() {
    while (mainBody.firstChild) {
        mainBody.removeChild(mainBody.firstChild);
    }
    countDown();
    setTimeout(function startEasyGame() {
        mainBody.style.flexDirection = "row";
        gameGrid = [bopCircle, ];
        gameContainer.style.width = "55%";
        gameContainer.style.background = "white";
        gameContainer.style.border = "8px inset rgb(1, 1, 161)";
        gameContainer.appendChild(bopCircle);
        for (i = 1; i < 35; i++) {
            let bopCircleCopy = bopCircle.cloneNode();
            gameGrid.push(gameContainer.appendChild(bopCircleCopy));
        }
        mainBody.appendChild(gameContainer);
        //mainBody.appendChild(counter);
        let boopCount = 0;
        let exitEarly = 0;
        setTimeout(timeExpire, 30000)
        function boopOrBomb() {
            let probabilityRange = Math.floor(Math.random() * 10 + 1);
            if (probabilityRange > 1) {
                bopBoop.src = "./images/silly.png";
                bopBoop.style.border = "2px groove darkorange";
                bopBoop.style.borderRadius = "50%";
                bopBoop.addEventListener("click", addPoint);
            } else {
                bopBoop.src = "./images/bomb.png";
                bopBoop.style.border = "none";
                bopBoop.addEventListener("click", goBoom);
            }
        }
        function whichBop () {
            let bopAssign = Math.floor(Math.random() * gameGrid.length);
            bopLocation = gameGrid[bopAssign];
        }
        function addPoint() {
            boopCount++;
            bopLocation.removeChild(bopLocation.firstChild);
            bopLocation.appendChild(plusOne);
            setTimeout(function removePlusOne() {
                if (plusOne) {
                    plusOne.parentNode.removeChild(plusOne);
                }
            }, 250);
        }
        function goBoom() {
            exitEarly++;
            clearInterval(bopUpTimer);
            bopLocation.removeChild(bopLocation.firstChild);
            bopLocation.appendChild(bopBoom);
            setTimeout(function gameOver() {
                while (mainBody.firstChild) {
                    mainBody.removeChild(mainBody.firstChild);
                }
                let opacity = 0;
                let width = 350;
                gameOverBoom.style.opacity = opacity + "%";
                gameOverBoom.style.width = width + "px";
                mainBody.appendChild(gameOverBoom);
                const blastTimer = setInterval(function finalBlast() {
                    if (opacity < 100) {
                        opacity += 2;
                        gameOverBoom.style.opacity = opacity + "%";
                    } else {
                        clearInterval(blastTimer);
                    }
                }, 50);
                setTimeout(function gameOverFade() {
                    let opacity = 100;
                    gameOverBoom.style.opacity = opacity + "%";
                    const blastFade = setInterval(function fadeBlast() {
                        if (opacity > 0) {
                            opacity -= 2;
                            gameOverBoom.style.opacity = opacity + "%";
                        } else {
                            clearInterval(blastFade);
                            tryAgainPrompt();
                        }
                    }, 50);
                }, 2500);
            }, 1000);
        }
        bopUpTimer = setInterval(bopUp, 1300);
        function bopUp() {
            bopBoop.removeEventListener("click", addPoint);
            bopBoop.removeEventListener("click", goBoom);
            whichBop();
            boopOrBomb();
            bopLocation.appendChild(bopBoop);
        }
        function timeExpire() {
            if (exitEarly != 0) {
                return;
            } else {
                clearInterval(bopUpTimer);
                while (mainBody.firstChild) {
                    mainBody.removeChild(mainBody.firstChild);
                }
                let width = 0;
                timeUp.style.width = width + "px";
                mainBody.appendChild(timeUp);
                let fadeTimeUp = setInterval(function timeUpFade() {
                    if (width < 700) {
                        width += 10;
                        timeUp.style.width = width + "px";
                    } else {
                        clearInterval(fadeTimeUp);
                    }
                }, 10);
                setTimeout(function fadeTimeOut() {
                    let opacity = 100;
                    timeUp.style.opacity = opacity + "%";
                    let fadeTimeUpOut = setInterval(function fadeOutImage() {
                        if (opacity > 0) {
                            opacity -= 5;
                            timeUp.style.opacity = opacity + "%";
                        } else {
                            clearInterval(fadeTimeUpOut);
                        }
                    }, 30);
                }, 1500);
                setTimeout(function showScore() {
                    while (mainBody.firstChild) {
                        mainBody.removeChild(mainBody.firstChild);
                    }
                    const scoreBox = document.createElement("div");
                    scoreBox.className = "generalBox";
                    const congratulations = document.createElement("p");
                    congratulations.className = "header";
                    congratulations.innerHTML = "CONGRATULATIONS!"
                    const scoreCount = document.createElement("p");
                    scoreCount.className = "generalText";
                    scoreCount.innerHTML = "You booped for a total of " + boopCount + " points!\n\nWould you like to play again?"
                    const yesPlay = document.createElement("button");
                    yesPlay.className = "menuButton";
                    yesPlay.innerHTML = "YES";
                    const noPlay = document.createElement("button");
                    noPlay.className = "menuButton";
                    noPlay.innerHTML = "NO";
                    let opacity = 0;
                    scoreBox.style.opacity = opacity + "%";
                    congratulations.style.opacity = opacity + "%";
                    scoreCount.style.opacity = opacity + "%";
                    yesPlay.style.opacity = opacity + "%";
                    noPlay.style.opacity = opacity + "%";
                    mainBody.appendChild(scoreBox);
                    scoreBox.appendChild(congratulations);
                    scoreBox.appendChild(scoreCount);
                    scoreBox.appendChild(yesPlay);
                    scoreBox.appendChild(noPlay);
                    yesPlay.addEventListener("click", restart);
                    noPlay.addEventListener("click", exitGame);
                    const fadeScoreIn = setInterval(function fadeInScore() {
                        if (opacity < 100) {
                            opacity += 5;
                            scoreBox.style.opacity = opacity + "%";
                            congratulations.style.opacity = opacity + "%";
                            scoreCount.style.opacity = opacity + "%";
                            yesPlay.style.opacity = opacity + "%";
                            noPlay.style.opacity = opacity + "%";
                        } else {
                            clearInterval(fadeScoreIn);
                        }
                    }, 30)
                }, 2100);
                //alert("Time's Up!\n\nYou booped " + boopCount + " times!");
            } 
        }
        function tryAgainPrompt() {
            while (mainBody.firstChild) {
                mainBody.removeChild(mainBody.firstChild);
            }
            mainBody.style.flexFlow = "column wrap";
            let opacity = 0;
            tryAgain.style.width = "700px";
            tryAgain.style.marginBottom = "40px";
            tryAgain.style.opacity = opacity + "%";
            yesOption.style.opacity = opacity + "%";
            noOption.style.opacity = opacity + "%";
            mainBody.appendChild(tryAgain);
            mainBody.appendChild(yesOption);
            mainBody.appendChild(noOption);
            yesOption.addEventListener("click", restart);
            noOption.addEventListener("click", exitGame); 
            tryAgainFade = setInterval(function fadeIn() {
                if (opacity < 100) {
                    opacity += 5;
                    tryAgain.style.opacity = opacity + "%";
                    yesOption.style.opacity = opacity + "%";
                    noOption.style.opacity = opacity + "%";
                } else {
                    clearInterval(tryAgainFade);
                }
            }, 10);
        }
    }, 6000);
}

function mediumGame() {
    while (mainBody.firstChild) {
        mainBody.removeChild(mainBody.firstChild);
    }
    countDown();
    setTimeout(function startEasyGame() {
        mainBody.style.flexDirection = "row";
        gameGrid = [bopCircle, ];
        gameContainer.style.width = "55%";
        gameContainer.style.background = "white";
        gameContainer.style.border = "8px inset rgb(1, 1, 161)";
        gameContainer.appendChild(bopCircle);
        for (i = 1; i < 35; i++) {
            let bopCircleCopy = bopCircle.cloneNode();
            gameGrid.push(gameContainer.appendChild(bopCircleCopy));
        }
        mainBody.appendChild(gameContainer);
        //mainBody.appendChild(counter);
        let boopCount = 0;
        let exitEarly = 0;
        setTimeout(timeExpire, 30000)
        function boopOrBomb() {
            let probabilityRange = Math.floor(Math.random() * 5 + 1);
            if (probabilityRange > 1) {
                bopBoop.src = "./images/silly.png";
                bopBoop.style.border = "2px groove darkorange";
                bopBoop.style.borderRadius = "50%";
                bopBoop.addEventListener("click", addPoint);
            } else {
                bopBoop.src = "./images/bomb.png";
                bopBoop.style.border = "none";
                bopBoop.addEventListener("click", goBoom);
            }
        }
        function whichBop () {
            let bopAssign = Math.floor(Math.random() * gameGrid.length);
            bopLocation = gameGrid[bopAssign];
        }
        function addPoint() {
            boopCount++;
            bopLocation.removeChild(bopLocation.firstChild);
            bopLocation.appendChild(plusOne);
            setTimeout(function removePlusOne() {
                if (plusOne) {
                    plusOne.parentNode.removeChild(plusOne);
                }
            }, 250);
        }
        function goBoom() {
            exitEarly++;
            clearInterval(bopUpTimer);
            bopLocation.removeChild(bopLocation.firstChild);
            bopLocation.appendChild(bopBoom);
            setTimeout(function gameOver() {
                while (mainBody.firstChild) {
                    mainBody.removeChild(mainBody.firstChild);
                }
                let opacity = 0;
                let width = 350;
                gameOverBoom.style.opacity = opacity + "%";
                gameOverBoom.style.width = width + "px";
                mainBody.appendChild(gameOverBoom);
                const blastTimer = setInterval(function finalBlast() {
                    if (opacity < 100) {
                        opacity += 2;
                        gameOverBoom.style.opacity = opacity + "%";
                    } else {
                        clearInterval(blastTimer);
                    }
                }, 50);
                setTimeout(function gameOverFade() {
                    let opacity = 100;
                    gameOverBoom.style.opacity = opacity + "%";
                    const blastFade = setInterval(function fadeBlast() {
                        if (opacity > 0) {
                            opacity -= 2;
                            gameOverBoom.style.opacity = opacity + "%";
                        } else {
                            clearInterval(blastFade);
                            tryAgainPrompt();
                        }
                    }, 50);
                }, 2500);
            }, 1000);
        }
        bopUpTimer = setInterval(bopUp, 1000);
        function bopUp() {
            bopBoop.removeEventListener("click", addPoint);
            bopBoop.removeEventListener("click", goBoom);
            whichBop();
            boopOrBomb();
            bopLocation.appendChild(bopBoop);
        }
        function timeExpire() {
            if (exitEarly != 0) {
                return;
            } else {
                clearInterval(bopUpTimer);
                while (mainBody.firstChild) {
                    mainBody.removeChild(mainBody.firstChild);
                }
                let width = 0;
                timeUp.style.width = width + "px";
                mainBody.appendChild(timeUp);
                let fadeTimeUp = setInterval(function timeUpFade() {
                    if (width < 700) {
                        width += 10;
                        timeUp.style.width = width + "px";
                    } else {
                        clearInterval(fadeTimeUp);
                    }
                }, 10);
                setTimeout(function fadeTimeOut() {
                    let opacity = 100;
                    timeUp.style.opacity = opacity + "%";
                    let fadeTimeUpOut = setInterval(function fadeOutImage() {
                        if (opacity > 0) {
                            opacity -= 5;
                            timeUp.style.opacity = opacity + "%";
                        } else {
                            clearInterval(fadeTimeUpOut);
                        }
                    }, 30);
                }, 1500);
                setTimeout(function showScore() {
                    while (mainBody.firstChild) {
                        mainBody.removeChild(mainBody.firstChild);
                    }
                    const scoreBox = document.createElement("div");
                    scoreBox.className = "generalBox";
                    const congratulations = document.createElement("p");
                    congratulations.className = "header";
                    congratulations.innerHTML = "CONGRATULATIONS!"
                    const scoreCount = document.createElement("p");
                    scoreCount.className = "generalText";
                    scoreCount.innerHTML = "You booped for a total of " + boopCount + " points!\n\nWould you like to play again?"
                    const yesPlay = document.createElement("button");
                    yesPlay.className = "menuButton";
                    yesPlay.innerHTML = "YES";
                    const noPlay = document.createElement("button");
                    noPlay.className = "menuButton";
                    noPlay.innerHTML = "NO";
                    let opacity = 0;
                    scoreBox.style.opacity = opacity + "%";
                    congratulations.style.opacity = opacity + "%";
                    scoreCount.style.opacity = opacity + "%";
                    yesPlay.style.opacity = opacity + "%";
                    noPlay.style.opacity = opacity + "%";
                    mainBody.appendChild(scoreBox);
                    scoreBox.appendChild(congratulations);
                    scoreBox.appendChild(scoreCount);
                    scoreBox.appendChild(yesPlay);
                    scoreBox.appendChild(noPlay);
                    yesPlay.addEventListener("click", restart);
                    noPlay.addEventListener("click", exitGame);
                    const fadeScoreIn = setInterval(function fadeInScore() {
                        if (opacity < 100) {
                            opacity += 5;
                            scoreBox.style.opacity = opacity + "%";
                            congratulations.style.opacity = opacity + "%";
                            scoreCount.style.opacity = opacity + "%";
                            yesPlay.style.opacity = opacity + "%";
                            noPlay.style.opacity = opacity + "%";
                        } else {
                            clearInterval(fadeScoreIn);
                        }
                    }, 30)
                }, 2100);
                //alert("Time's Up!\n\nYou booped " + boopCount + " times!");
            } 
        }
        function tryAgainPrompt() {
            while (mainBody.firstChild) {
                mainBody.removeChild(mainBody.firstChild);
            }
            mainBody.style.flexFlow = "column wrap";
            let opacity = 0;
            tryAgain.style.width = "700px";
            tryAgain.style.marginBottom = "40px";
            tryAgain.style.opacity = opacity + "%";
            yesOption.style.opacity = opacity + "%";
            noOption.style.opacity = opacity + "%";
            mainBody.appendChild(tryAgain);
            mainBody.appendChild(yesOption);
            mainBody.appendChild(noOption);
            yesOption.addEventListener("click", restart);
            noOption.addEventListener("click", exitGame); 
            tryAgainFade = setInterval(function fadeIn() {
                if (opacity < 100) {
                    opacity += 5;
                    tryAgain.style.opacity = opacity + "%";
                    yesOption.style.opacity = opacity + "%";
                    noOption.style.opacity = opacity + "%";
                } else {
                    clearInterval(tryAgainFade);
                }
            }, 10);
        }
    }, 6000);
}

function hardGame() {
    while (mainBody.firstChild) {
        mainBody.removeChild(mainBody.firstChild);
    }
    countDown();
    setTimeout(function startEasyGame() {
        mainBody.style.flexDirection = "row";
        gameGrid = [bopCircle, ];
        gameContainer.style.width = "55%";
        gameContainer.style.background = "white";
        gameContainer.style.border = "8px inset rgb(1, 1, 161)";
        gameContainer.appendChild(bopCircle);
        for (i = 1; i < 35; i++) {
            let bopCircleCopy = bopCircle.cloneNode();
            gameGrid.push(gameContainer.appendChild(bopCircleCopy));
        }
        mainBody.appendChild(gameContainer);
        //mainBody.appendChild(counter);
        let boopCount = 0;
        let exitEarly = 0;
        setTimeout(timeExpire, 30000)
        function boopOrBomb() {
            let probabilityRange = Math.floor(Math.random() * 3 + 1);
            if (probabilityRange > 1) {
                bopBoop.src = "./images/silly.png";
                bopBoop.style.border = "2px groove darkorange";
                bopBoop.style.borderRadius = "50%";
                bopBoop.addEventListener("click", addPoint);
            } else {
                bopBoop.src = "./images/bomb.png";
                bopBoop.style.border = "none";
                bopBoop.addEventListener("click", goBoom);
            }
        }
        function whichBop () {
            let bopAssign = Math.floor(Math.random() * gameGrid.length);
            bopLocation = gameGrid[bopAssign];
        }
        function addPoint() {
            boopCount++;
            bopLocation.removeChild(bopLocation.firstChild);
            bopLocation.appendChild(plusOne);
            setTimeout(function removePlusOne() {
                if (plusOne) {
                    plusOne.parentNode.removeChild(plusOne);
                }
            }, 250);
        }
        function goBoom() {
            exitEarly++;
            clearInterval(bopUpTimer);
            bopLocation.removeChild(bopLocation.firstChild);
            bopLocation.appendChild(bopBoom);
            setTimeout(function gameOver() {
                while (mainBody.firstChild) {
                    mainBody.removeChild(mainBody.firstChild);
                }
                let opacity = 0;
                let width = 350;
                gameOverBoom.style.opacity = opacity + "%";
                gameOverBoom.style.width = width + "px";
                mainBody.appendChild(gameOverBoom);
                const blastTimer = setInterval(function finalBlast() {
                    if (opacity < 100) {
                        opacity += 2;
                        gameOverBoom.style.opacity = opacity + "%";
                    } else {
                        clearInterval(blastTimer);
                    }
                }, 50);
                setTimeout(function gameOverFade() {
                    let opacity = 100;
                    gameOverBoom.style.opacity = opacity + "%";
                    const blastFade = setInterval(function fadeBlast() {
                        if (opacity > 0) {
                            opacity -= 2;
                            gameOverBoom.style.opacity = opacity + "%";
                        } else {
                            clearInterval(blastFade);
                            tryAgainPrompt();
                        }
                    }, 50);
                }, 2500);
            }, 1000);
        }
        bopUpTimer = setInterval(bopUp, 700);
        function bopUp() {
            bopBoop.removeEventListener("click", addPoint);
            bopBoop.removeEventListener("click", goBoom);
            whichBop();
            boopOrBomb();
            bopLocation.appendChild(bopBoop);
        }
        function timeExpire() {
            if (exitEarly != 0) {
                return;
            } else {
                clearInterval(bopUpTimer);
                while (mainBody.firstChild) {
                    mainBody.removeChild(mainBody.firstChild);
                }
                let width = 0;
                timeUp.style.width = width + "px";
                mainBody.appendChild(timeUp);
                let fadeTimeUp = setInterval(function timeUpFade() {
                    if (width < 700) {
                        width += 10;
                        timeUp.style.width = width + "px";
                    } else {
                        clearInterval(fadeTimeUp);
                    }
                }, 10);
                setTimeout(function fadeTimeOut() {
                    let opacity = 100;
                    timeUp.style.opacity = opacity + "%";
                    let fadeTimeUpOut = setInterval(function fadeOutImage() {
                        if (opacity > 0) {
                            opacity -= 5;
                            timeUp.style.opacity = opacity + "%";
                        } else {
                            clearInterval(fadeTimeUpOut);
                        }
                    }, 30);
                }, 1500);
                setTimeout(function showScore() {
                    while (mainBody.firstChild) {
                        mainBody.removeChild(mainBody.firstChild);
                    }
                    const scoreBox = document.createElement("div");
                    scoreBox.className = "generalBox";
                    const congratulations = document.createElement("p");
                    congratulations.className = "header";
                    congratulations.innerHTML = "CONGRATULATIONS!"
                    const scoreCount = document.createElement("p");
                    scoreCount.className = "generalText";
                    scoreCount.innerHTML = "You booped for a total of " + boopCount + " points!\n\nWould you like to play again?"
                    const yesPlay = document.createElement("button");
                    yesPlay.className = "menuButton";
                    yesPlay.innerHTML = "YES";
                    const noPlay = document.createElement("button");
                    noPlay.className = "menuButton";
                    noPlay.innerHTML = "NO";
                    let opacity = 0;
                    scoreBox.style.opacity = opacity + "%";
                    congratulations.style.opacity = opacity + "%";
                    scoreCount.style.opacity = opacity + "%";
                    yesPlay.style.opacity = opacity + "%";
                    noPlay.style.opacity = opacity + "%";
                    mainBody.appendChild(scoreBox);
                    scoreBox.appendChild(congratulations);
                    scoreBox.appendChild(scoreCount);
                    scoreBox.appendChild(yesPlay);
                    scoreBox.appendChild(noPlay);
                    yesPlay.addEventListener("click", restart);
                    noPlay.addEventListener("click", exitGame);
                    const fadeScoreIn = setInterval(function fadeInScore() {
                        if (opacity < 100) {
                            opacity += 5;
                            scoreBox.style.opacity = opacity + "%";
                            congratulations.style.opacity = opacity + "%";
                            scoreCount.style.opacity = opacity + "%";
                            yesPlay.style.opacity = opacity + "%";
                            noPlay.style.opacity = opacity + "%";
                        } else {
                            clearInterval(fadeScoreIn);
                        }
                    }, 30)
                }, 2100);
                //alert("Time's Up!\n\nYou booped " + boopCount + " times!");
            } 
        }
        function tryAgainPrompt() {
            while (mainBody.firstChild) {
                mainBody.removeChild(mainBody.firstChild);
            }
            mainBody.style.flexFlow = "column wrap";
            let opacity = 0;
            tryAgain.style.width = "700px";
            tryAgain.style.marginBottom = "40px";
            tryAgain.style.opacity = opacity + "%";
            yesOption.style.opacity = opacity + "%";
            noOption.style.opacity = opacity + "%";
            mainBody.appendChild(tryAgain);
            mainBody.appendChild(yesOption);
            mainBody.appendChild(noOption);
            yesOption.addEventListener("click", restart);
            noOption.addEventListener("click", exitGame); 
            tryAgainFade = setInterval(function fadeIn() {
                if (opacity < 100) {
                    opacity += 5;
                    tryAgain.style.opacity = opacity + "%";
                    yesOption.style.opacity = opacity + "%";
                    noOption.style.opacity = opacity + "%";
                } else {
                    clearInterval(tryAgainFade);
                }
            }, 10);
        }
    }, 6000);
}

function restart() {
    window.location.reload(true);
}
function closeGame() {
    close();
}