var place = document.querySelector("#place");
var color = document.querySelector("#color");
var name1 = document.querySelector("#name1");
var adjective1 = document.querySelector("#adjective1")
var story = document.querySelector("#story");
var launch = document.querySelector("#launch");
launch.addEventListener("click", writeStory, false);

function writeStory(){
var launchedStory = "";
launchedStory += "<p>My school is in " + place.value + " for some reason.</p>";
launchedStory += "<p>My favorite color is " + color.value + ", which happens to be one of my school's colors.</p>";
launchedStory += "<p>My best friend is " + name1.value + ", and I couldn't imagine school without my best friend.</p>";
launchedStory += name1.value + "<p> is really " + adjective1.value + ". </p>";

story.innerHTML = launchedStory;
}
