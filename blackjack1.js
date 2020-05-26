let cards = {
  deck: [
    1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7,
    7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10],
  player1Cards: [],
  player1CardsTotal: 0,
  dealerCards: [],
  dealerCardsTotal: 0,
};

let cardMethods = {
  initialDeal: function () {
    for (let i = 0; i < 2; i++) {
      cards.player1Cards.push(
        cards.deck
          .splice(Math.floor(Math.random() * cards.deck.length), 1)
          .pop()
      );
    }
    console.log(cards.player1Cards);
    let html = "<ul>";
    for (let i = 0; i < cards.player1Cards.length; i++) {
      html = html + `<li>${cards.player1Cards[i]}</li>`;
    }
    html = html + "</ul>";
    document.getElementById("player1Cards").innerHTML = html;
    this.totalPlayer1Cards();
  },

  initialDealDealer: function () {
    for (let i = 0; i < 2; i++) {
      cards.dealerCards.push(
        cards.deck
          .splice(Math.floor(Math.random() * cards.deck.length), 1)
          .pop()
      );
    }
    console.log(cards.dealerCards);
    let html = "<ul>";
    for (let i = 0; i < cards.dealerCards.length - 1; i++) {
      html = html + `<li>${cards.dealerCards[i]}</li>`;
    }
    html = html + "</ul>";
    document.getElementById("dealerFaceCard").innerHTML = html;
    this.totalPlayer1Cards();
  },

  totalPlayer1Cards: function () {
    cards.player1CardsTotal -= cards.player1CardsTotal;
    for (let i = 0; i < cards.player1Cards.length; i++) {
      cards.player1CardsTotal += cards.player1Cards[i];
    }
    console.log(cards.player1CardsTotal);

    document.getElementById("player1CardsTotal").innerText =
      cards.player1CardsTotal;

    if (cards.player1CardsTotal === 21) {
      alert(
        `PLAYER DREW ${cards.player1Cards[cards.player1Cards.length - 1]}!!! ${
        cards.player1CardsTotal
        } WINNER!!`
      );
      location.reload();
    } else if (cards.player1CardsTotal > 21) {
      alert(
        `PLAYER DREW ${cards.player1Cards[cards.player1Cards.length - 1]}!!! ${
        cards.player1CardsTotal
        } THIS IS BUST YOU LOSE!!!`
      );
      location.reload();
    }
  },

  totalDealerCards: function () {
    cards.dealerCardsTotal -= cards.dealerCardsTotal;
    for (let i = 0; i < cards.dealerCards.length; i++) {
      cards.dealerCardsTotal += cards.dealerCards[i];
    }
    console.log(cards.dealerCardsTotal);

    document.getElementById("dealerOfCardsTotal").innerText =
      cards.dealerCardsTotal;

    if (cards.dealerCardsTotal === 21) {
      alert(
        `DEALER DREW ${cards.dealerCards[cards.dealerCards.length - 1]
        }!!! ${
        cards.dealerCardsTotal
        } WINNER!!`
      );
      location.reload();
    }

    else if (cards.dealerCardsTotal >= 17 && cards.dealerCardsTotal <= 20) {
      this.checkForWinner();
    } else if (cards.dealerCardsTotal > 21) {
      alert(
        `DEALER DREW ${
        cards.dealerCards[cards.dealerCards.length - 1]
        }!! DEALER BUST ${cards.dealerCardsTotal}`
      );
      location.reload();
    }
  },

  hit: function () {
    for (let i = 0; i < 1; i++) {
      cards.player1Cards.push(
        cards.deck
          .splice(Math.floor(Math.random() * cards.deck.length), 1)
          .pop()
      );
    }

    console.log(cards.player1Cards);
    this.updatePlayer1Hand();
  },

  updatePlayer1Hand: function () {
    let html = "<ul>";
    for (let i = 0; i < cards.player1Cards.length; i++) {
      html = html + `<li>${cards.player1Cards[i]}</li>`;
    }
    html = html + "</ul>";
    document.getElementById("player1Cards").innerHTML = html;

    document.getElementById("player1CardsTotal").innerText =
      cards.player1CardsTotal;
    this.totalPlayer1Cards();
  },

  updateDealerHand: function () {
    let html = "<ul>";
    for (let i = 0; i < cards.dealerCards.length; i++) {
      html = html + `<li>${cards.dealerCards[i]}</li>`;
    }
    html = html + "</ul>";
    document.getElementById("dealerFaceCard").innerHTML = html;
    document.getElementById("dealerHiddenCard").innerText = "";

    document.getElementById("dealerOfCardsTotal").innerText =
      cards.dealerCardsTotal;
    this.totalDealerCards();
  },

  dealerHit: function () {
    for (let i = 0; i < 1; i++) {
      cards.dealerCards.push(
        cards.deck
          .splice(Math.floor(Math.random() * cards.deck.length), 1)
          .pop()
      );
    }

    console.log(cards.dealerCards);
    this.updateDealerHand();
  },

  stand: function () {
    this.totalPlayer1Cards();
    this.dealerHit();
  },
  checkForWinner: function () {
    if (cards.player1CardsTotal === cards.dealerCardsTotal) {
      alert(
        `DEALER DREW ${
        cards.dealerCards[cards.dealerCards.length - 1]
        } PUSH!!! TIE GAME!! ${cards.dealerCardsTotal} TO ${
        cards.player1CardsTotal
        }`
      );
      location.reload();
    } else if (cards.dealerCardsTotal > cards.player1CardsTotal) {
      alert(
        `DEALER WINS!! DEALER DREW ${
        cards.dealerCards[cards.dealerCards.length - 1]
        }. ${cards.dealerCardsTotal} BEATS ${cards.player1CardsTotal}!!!`
      );
      location.reload();
    } else {
      alert(
        `PLAYER WINS!! DEALER DREW ${
        cards.dealerCards[cards.dealerCards.length - 1]
        }. ${cards.player1CardsTotal} BEATS ${cards.dealerCardsTotal}!!!`
      );
      location.reload();
    }
  },
};
document.getElementById("title").innerText = "You Lose Casino";
// document.getElementById("player1Name").innerText = prompt(
//   "What is your name player?"
// );

cardMethods.initialDeal();
cardMethods.initialDealDealer();