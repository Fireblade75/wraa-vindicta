const guesses = [
[925, "Steve"],
[936, "Manchie"],
[951, "Nick"],
[954, "OwnageSkil"],
[969, "Achtentwintig"],
[970, "Chantalk"],
[978, "Sander"],
[987, "Gawkieee (Chonc)"],
[998, "Bubble"],
[999, "sguttingdeur"],
[1001, "Elroy / Cynthia"],
[1022, "Tomas"],
[1030, "Ixiking"],
[1042, "Mookse"],
[1047, "BionicVision"],
[1069, "Kjellzzzz"],
[1077, "Terry"],
[1130, "Gielie93"],
[1241, "Slackyrs"],
[1250, "Gobleno"],
[1398, "Sweety"],
[1449, "Bsmite"],
[1686, "Ronoflax"],
[1748, "koekiemonster"],
[2451, "Kalphite King"],
[3100, "V U"],
]

const parent = document.getElementById('guessList')
guesses.forEach(guess => {
    const li = document.createElement('li')
    li.innerHTML = `<span>${guess[0]}</span>-<span>${guess[1]}</span`
    parent.append(li)
})
