
const colors = {
    match: "",
    text: "",
    fake: ""
}

let points = 0;

function generator() {
    const random = Math.floor(Math.random()*101);
    console.log(random)
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
    
    const threshHolds = [12.5,25,37.5,50,62.5,75,87.5,101];
    for (let j = 0; j < threshHolds.length; j++) {
        if (random < threshHolds[j]) {
            return colors[j];
        }
    }
}

function generate() {
    console.log("staer")
    colors.match = generator();
    colors.text = generator();
    colors.fake = generator();

    document.getElementById("lefttext").innerHTML = colors.match;
    document.getElementById("righttext").innerHTML = colors.text;
    document.getElementById("righttext").style.color = colors.fake;
}

generate()

function handleClick(value) {
    console.log(value)
    if (value) {
        if(colors.match == colors.fake) {
            points++;
        }
    }
    generate();
}