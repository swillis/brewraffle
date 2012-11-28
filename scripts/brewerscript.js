function chooseBrewer(){
brewers = document.getElementById('brewers').value.split("\n")
brewer = brewers[Math.floor(Math.random()*brewers.length)];

//previousBrewers = JSON.parse(localStorage['previousBrewers'] || "[]")

//previousBrewers.push(brewer)

//localStorage["previousBrewers"] = JSON.stringify(previousBrewers)

document.getElementById("the_brewer").innerHTML = brewer + "!"
document.getElementById("gearoid").style.display = 'block';

//document.getElementById('previous_brewers').innerHTML = 'Previous brewers were: ' + JSON.parse(localStorage["previousBrewers"])

//return false;
}

