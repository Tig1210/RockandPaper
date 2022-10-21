const computerPlayer = document.querySelector(".computerPlayer");
      const player = document.querySelector(".player");
      const choose = document.querySelector(".choose");
      const selected = document.querySelector(".selected");
      const selectedText = selected.querySelector(".selectedText");
      const selectedImg = selected.querySelector(".selectedImg");
      const score = document.querySelector(".score");
      const roundNumber = document.querySelector(".roundNumber");
      const result = document.querySelector(".result");
      const display = document.querySelector(".display");
      const displayText = display.lastElementChild;

      const listOfChoise = ["rock", "paper", "scirssors"];
      let round = 0;
      let playerOne = {
        name: "Player",
        score: 0,
      };
      let playerTwo = {
        name: "Computer",
        score: 0,
      };
      let fightTable = [];
      let randomNum = 0;

      function restart() {
        score.textContent = 0;
        playerOne.score = 0;
        playerTwo.score = 0;
        round = 0;
        fightTable = [];
        result.textContent = "Try your Luck";
        displayText.textContent = "...";
        selectedImg.src =
          "https://a.d-cd.net/OLn9cEYLYEkeQwmAwA_IyKhglqk-960.jpg";
      }

      function getRandomChoise(arr) {
        let min = 0;
        let random = Math.floor(Math.random() * (arr.length - min) + min);
        randomNum = random;
        return randomNum;
      }

      function rules(player, computer) {
        if (player == "rock" || computer == "rock") {
          displayText.textContent = "equel";
        }
        if (player === "rock" && computer === "paper") {
          playerOne.score += 1;
          displayText.textContent = " WIN >>";
        }
        if (player === "rock" && computer === "scirssors") {
          playerTwo.score += 1;
          displayText.textContent = "<< WIN ";
        }
        if (player === "paper" && computer === "rock") {
          playerOne.score += 1;
          displayText.textContent = "<< WIN ";
        }
        if (player === "paper" && computer === "paper") {
          displayText.textContent = "equel";
        }
        if (player === "paper" && computer === "scirssors") {
          playerTwo.score += 1;
          displayText.textContent = " WIN >>";
        }
        if (player === "scirssors" && computer === "rock") {
          playerTwo.score += 1;
          displayText.textContent = " WIN >>";
        }
        if (player === "scirssors" && computer === "paper") {
          playerOne.score += 1;
          displayText.textContent = "<< WIN ";
        }
        if (player === "scirssors" && computer === "scirssors") {
          displayText.textContent = "equel";
        }
        setTimeout(() => {
          displayText.textContent = "...";
        }, 1000);
      }

      function totalResult(player, computer) {
        if (player > computer) {
          alert("player win");
        }
        if (player < computer) {
          alert("computer win");
        }
        if (player === computer) {
          alert("equel");
        }
      }

      function rulesOfRound(player, computer) {
        if (round < 5) {
          const randomNum = document.querySelector(".randomNum");
          const selectedComputer = document.querySelector(".selectedComputer");
          const selectedImgComp = document.querySelector(".selectedImgComp");

          chooseImage(selectedComputer.textContent, selectedImgComp);
          fightTable = [selectedText.textContent, selectedComputer.textContent];
          rules(fightTable[0], fightTable[1]);
          randomNum.textContent = getRandomChoise(listOfChoise);
          score.textContent = `Score : ${playerOne.score}`;
          round = round + 1;
          roundNumber.textContent = round;
        } else {
          roundNumber.textContent = "Rounds OVER";
          result.textContent = "Game Over";
          score.textContent = `Score : ${playerOne.score}`;
          totalResult(player, computer);
          restart();
        }
      }

      function makeupComputer(comp) {
        return (computerPlayer.innerHTML = `
          <p style ="background-color:purple">${comp.name}</p>
          <div class="info">
            <p class="randomNum" style="display:none">${randomNum}</p>
            <img
              class="selectedImgComp"
              src="https://a.d-cd.net/OLn9cEYLYEkeQwmAwA_IyKhglqk-960.jpg"
            />
            <p class="selectedComputer" style="visibility: hidden">${listOfChoise[randomNum]}</p>
          </div>
          <p>Score : ${comp.score}</p>
        `);
      }

      function chooseImage(imageName, url) {
        if (imageName === "rock") {
          url.src =
            "https://avatars.mds.yandex.net/i?id=69015d1ec1a6ae5774400249a7749748-5876729-images-thumbs&n=13";
        }
        if (imageName === "paper") {
          url.src =
            "https://avatars.mds.yandex.net/i?id=2a0000017a1013c70ef4841c200ecf575404-3910357-images-thumbs&n=13";
        }
        if (imageName === "scirssors") {
          url.src =
            "https://avatars.mds.yandex.net/i?id=52ae18759ed328fd898e9fa8fa89e99d-5878037-images-thumbs&n=13";
        }
      }

      function init() {
        getRandomChoise(listOfChoise);
        makeupComputer(playerTwo);
      }

      choose.addEventListener("click", function (e) {
        let choosen = e.target.closest(".item");
        if (!choosen) return;
        selectedText.textContent = choosen.textContent;
        chooseImage(selectedText.textContent, selectedImg);
        rulesOfRound(playerOne.score, playerTwo.score);
        setTimeout(() => {
          selectedImg.src =
            "https://a.d-cd.net/OLn9cEYLYEkeQwmAwA_IyKhglqk-960.jpg";
          makeupComputer(playerTwo);
        }, 1000);
      });

      init();