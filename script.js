// Leaderboard Data (Update via GitHub)
const leaderboard = [
    { team: "Dashing Dheeraj", points: 0 },
    { team: "Killer Kirti", points: 0 },
    { team: "Rocking Raza", points: 0 },
    { team: "Naughty Nachiketa", points: 0 }
];

// Matches (Each team plays every other team twice)
const teams = ["Dashing Dheeraj", "Killer Kirti", "Rocking Raza", "Naughty Nachiketa"];
let matches = [];

for (let i = 0; i < teams.length; i++) {
    for (let j = 0; j < teams.length; j++) {
        if (i !== j) {
            matches.push(`${teams[i]} vs ${teams[j]}`);
            matches.push(`${teams[j]} vs ${teams[i]}`);
        }
    }
}

// Insert Leaderboard
const leaderboardBody = document.getElementById("leaderboard-body");
leaderboard.forEach((team, index) => {
    let row = `<tr><td>${index + 1}</td><td>${team.team}</td><td>${team.points}</td></tr>`;
    leaderboardBody.innerHTML += row;
});

// Insert Matches
const matchList = document.getElementById("match-list");
matches.forEach(match => {
    let listItem = `<li>${match}</li>`;
    matchList.innerHTML += listItem;
});

// Champion (Will be updated dynamically)
document.getElementById("champion-team").innerText = "TBD";

