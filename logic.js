document.addEventListener("DOMContentLoaded", function () {

    function getById(id) {
        return document.getElementById(id);
    }

    function newEl(element) {
        return document.createElement(element);
    }

    function ctn(text) {
        return document.createTextNode(text);
    }

    function classToggleOptimized(id) {
        getById(id).classList.remove("off");
        getById(id).classList.add("on");
    }

    function whenClicked(id, functionToRun) {
        return getById(id).addEventListener("click", functionToRun);
    }

    let counter = 0;
    let idNum = 0;

    let arrayOfIDs = [];

    let input = "                                                                                     \n                                                                                     \n                                                           :+++++/                   \n                                                        oMMMMMMMMMMd:                \n                                                        dMMMMMMMMMMMM                \n                                                         /oNMMMMMMMMM-------`        \n                                                          sMMMMMMMMMMMMMMMMmd:`      \n                         ::::::::::::::::::::::`            dMMMMMMMMMMMMMMMMMMMh    \n              ``/++hmmmmmMMMMMMMMMMMMMMMMMMMMMMNmmmmm+++++ymMMMMMMMMMMMMMMMMMMMMMh`  \n            -hMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMModMMMMMMMMs  \n           oMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM- :dNNNNN+`  \n           sMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMm.            \n           sMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM+             \n           sMMMMMMMMMMM    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM+             \n           sMMMMMMMMMMM    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMs              \n           sMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMs               \n           sMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNs                \n           sMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMyy`                 \n                               MMMMMMMMMMMMMMMMMMMMMMMMNmmmmm++-`                    \n             MMMMMMMMMMMMMMMMMMMMMMMhyyyNMMMMMMMMo:::::`                             \n               MMMMMMMMMMMMMMMMMMMM     `sMMMMMMMMy`                                 \n                                         `+mMMMMMMMy`                                \n                                             omNMMMMy                                \n                                               .-yyyy                                \n                                                                                     \n\n\n";
    let inputArray = input.split("\n");

    function splitUpItems(item, index) {
        let divRow = newEl("DIV");
        divRow.classList.add("divRow");
        inputArray[index] = item.split("");

        function loopDivRow(divRowItem) {
            let divCell = newEl("DIV");
            let divCellText = ctn(divRowItem);
            if (divRowItem !== " ") {
                divCell.id = "div_" + counter;
                arrayOfIDs.push(divCell.id);
                counter += 1;
            }
            divCell.classList.add("off");
            divCell.appendChild(divCellText);
            divRow.appendChild(divCell);
        }
        inputArray[index].forEach(loopDivRow);
        getById("container").appendChild(divRow);
    }

    inputArray.forEach(splitUpItems);

    let i = arrayOfIDs.length - 1;

    for (i; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = arrayOfIDs[i]
        arrayOfIDs[i] = arrayOfIDs[j]
        arrayOfIDs[j] = temp
    }

    let audio = new Audio("./nantucket.mp3");
    let audiodur = 0;
    setTimeout(function () {
        audiodur = audio.duration;
    }, 500);

    // THIS FUNCTION WILL REVEAL THE ASCII ART IN A LINEAR MANNER

    // function displayDivLinear() {
    //     getById("inputFieldButton").disabled = true;
    //     audio.play();

    //     function flipDivs() {
    //         if (idNum < counter) {
    //             // console.log(arrayOfIDs[idNum]);
    //             classToggleOptimized(arrayOfIDs[idNum]);
    //             idNum += 1;
    //         } else {
    //             clearInterval(interval);
    //             idNum = 0;
    //         }
    //     }
    //     let interval = setInterval(flipDivs, (1000 /
    //         (arrayOfIDs.length / audiodur)));
    // }

    function displayDivCompound() {

        //   THIS FUNCTION WILL REVEAL THE ASCII ART SLOWLY AT FIRST,
        // AND THEN SPEED UP AS IT REACHES THE END.  

        getById("inputFieldButton").disabled = true;
        audio.play();

        audiodurMS = audiodur * 1000;

        // SIMPLIFIED COMPOUND INTEREST FORMULA, SOLVING FOR 'R'

        // STEP ONE: CALCULATE THE EXPONENT

        let exponent = 1 / arrayOfIDs.length;

        // STEP TWO: RAISE THE AUDIO DURATION TO THE EXPONENT'S POWER

        let audiodurRaised = Math.pow(audiodur, exponent);

        // STEP THREE: SUBTRACT ONE FROM THE ANSWER TO STEP TWO

        let rate = (audiodurRaised - 1).toFixed(5);
        let step = 1000; // NOW I SAY, NOW I SAY, 1,000 MILLISECONDS, THAT IS

        //   NOTE THAT THIS FUNCTION WILL REVEAL THE CHARACTERS
        // IN THE OPPOSITE ORDER THAT THEY APPEAR IN ARRAYOFIDS

        function flipIt(item) {
            let nextStep = step + (step * rate);
            setTimeout(function () {
                classToggleOptimized(item);
            }, (audiodurMS - nextStep));
            step = nextStep;
        }

        arrayOfIDs.forEach(flipIt);
    }

    setTimeout(function () {
        getById("inputFieldButton").innerHTML = "PLAY";
        getById("inputFieldButton").disabled = false;
        // whenClicked("inputFieldButton", displayDivLinear);
        whenClicked("inputFieldButton", displayDivCompound);
    }, 1000);

});