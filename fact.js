Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function setFact() {
	document.getElementById("fact").innerHTML = "Trains typically cannot go up hills";
	document.getElementById("citation").innerHTML = "<a target='_blank' href='https://www.youtube.com/watch?v=KbUsKWbOqUU'>https://www.youtube.com/watch?v=KbUsKWbOqUU</a>";
	const today = new Date();
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	document.getElementById("lastUpdated").innerText = today.toLocaleDateString(undefined, options) + " 7:00pm BST";
	document.getElementById("nextUpdate").innerText = today.addDays(1).toLocaleDateString(undefined, options) + " 7:00pm BST";
}

setFact();