const players = [
    { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
    { name: 'Поли', playtime: 469, gamesPlayed: 2 },
    { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
    { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];



const totalAveragePlaytimePerGame = players.reduce((acc, element, index, array) => {

    const timeForOnePlay = element.playtime / element.gamesPlayed;
    return Math.min(acc += timeForOnePlay);
}, []);


console.log(totalAveragePlaytimePerGame);