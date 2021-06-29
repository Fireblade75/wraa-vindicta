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
[1069, "Kjellzzzz / BevertjeNL"],
[1077, "Terry"],
[1100, "Solar"],
[1130, "Gielie93"],
[1200, "Floortje"],
[1241, "Slackyrs"],
[1250, "Gobleno"],
[1269, "Danikillsyou"],
[1297, "Battelboy"],
[1314, "Senne"],
[1320, "Trancetto"],
[1335, "Bert"],
[1364, "Sander"],
[1385, "beestje007"],
[1398, "Sweety"],
[1449, "Bsmite"],
[1666, "Racoon_x"],
[1680, "dewittejager"],
[1686, "Ronoflax"],
[1748, "koekiemonster"],
[2451, "Kalphite King"],
[3100, "V U"],
]

const currentKc = 1300
const parent = document.getElementById('guessList')

guesses.forEach(guess => {
    const li = document.createElement('li')
    if(guess[0] < currentKc) li.classList.add('wrong')
    li.innerHTML = `<span>${guess[0]}</span>-<span>${guess[1]}</span`
    parent.append(li)
})
