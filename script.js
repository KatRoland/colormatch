const colors = {
    match: generator(),
    text: generator(),
    fake: generator()
}

function generator() {
    const random = Math.floor(Math.random()*101);
    const colors = [
        "Red",
        "Yellow",
        "Green",
        "Blue",
        "Purple",
        "Pink",
        "Orange",
        "Black"
    ]
    
    const threshHolds = [12.5,25,37.5,50,62.5,75,87.5,100];
    for (let j = 0; j < threshHolds.length; j++) {
        if (random < threshHolds[j]) {
            return colors[j];
        }
    }
}

console.table(colors)