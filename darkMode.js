function toggleTheme() {
	var body = document.body;
	var card = document.getElementsByClassName("card")[0];
	var benjiLogo = document.getElementById("benjiLogo");
	var visiLogo = document.getElementById("visiLogo");
	body.classList.toggle("darkMode");
	card.classList.toggle("text-bg-dark")
	console.log(benjiLogo.src);
	if (benjiLogo.src == "https://benjilewis.dev/src/img/logo/default-white.svg") {
		benjiLogo.src = "https://benjilewis.dev/src/img/logo/default-monochrome.svg";
		visiLogo.src = "visiLight.png";
	} else {
		benjiLogo.src = "https://benjilewis.dev/src/img/logo/default-white.svg";
		visiLogo.src = "https://visimedia.co.uk/images/Logo-Horizontal-Transparent-p-500.png";
		console.log("changed to dark");
	}
}