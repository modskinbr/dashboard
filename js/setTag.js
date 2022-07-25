/*!
* Start Bootstrap - Modern Business v5.0.6 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function setTag() {
	const database = localStorage["data16"];
	var federativa = document.getElementsByClassName("Fed");
	var testadores = document.getElementsByClassName("Tes");
	var academia = document.getElementsByClassName("Acad");
	var contratacao = document.getElementsByClassName("Cont");
	console.log("Database 16: " + database);

	if ( database == "Dev" ) {

		federativa[0].classList.remove("hidden");
		federativa[1].classList.remove("hidden");
		testadores[0].classList.remove("hidden");
		testadores[1].classList.remove("hidden");
		academia[0].classList.remove("hidden");
		academia[1].classList.remove("hidden");
		contratacao[0].classList.remove("hidden");
		contratacao[1].classList.remove("hidden");

	} else if ( database == "Mod" ) {

		federativa[0].classList.remove("hidden");
		federativa[1].classList.remove("hidden");
		testadores[0].classList.add("hidden");
		testadores[1].classList.add("hidden");
		academia[0].classList.add("hidden");
		academia[1].classList.add("hidden");
		contratacao[0].classList.add("hidden");
		contratacao[1].classList.add("hidden");

	} else if ( database == "Sup" ) {

		federativa[0].classList.remove("hidden");
		federativa[1].classList.remove("hidden");
		testadores[0].classList.add("hidden");
		testadores[1].classList.add("hidden");
		academia[0].classList.add("hidden");
		academia[1].classList.add("hidden");
		contratacao[0].classList.add("hidden");
		contratacao[1].classList.add("hidden");

	} else if ( database == "Tester" ) {

		federativa[0].classList.remove("hidden");
		federativa[1].classList.remove("hidden");
		testadores[0].classList.remove("hidden");
		testadores[1].classList.remove("hidden");
		academia[0].classList.add("hidden");
		academia[1].classList.add("hidden");
		contratacao[0].classList.add("hidden");
		contratacao[1].classList.add("hidden");

	} else if ( database == "Jornalista" ) {

		federativa[0].classList.remove("hidden");
		federativa[1].classList.remove("hidden");
		testadores[0].classList.add("hidden");
		testadores[1].classList.add("hidden");
		academia[0].classList.remove("hidden");
		academia[1].classList.remove("hidden");
		contratacao[0].classList.add("hidden");
		contratacao[1].classList.add("hidden");

	} else if ( database == "ABP/PBE" ) {

		federativa[0].classList.remove("hidden");
		federativa[1].classList.remove("hidden");
		testadores[0].classList.add("hidden");
		testadores[1].classList.add("hidden");
		academia[0].classList.remove("hidden");
		academia[1].classList.remove("hidden");
		contratacao[0].classList.add("hidden");
		contratacao[1].classList.add("hidden");

	} else if ( database == "Criador de Conteudo" ) {

		federativa[0].classList.remove("hidden");
		federativa[1].classList.remove("hidden");
		testadores[0].classList.add("hidden");
		testadores[1].classList.add("hidden");
		academia[0].classList.remove("hidden");
		academia[1].classList.remove("hidden");
		contratacao[0].classList.add("hidden");
		contratacao[1].classList.add("hidden");

	} else if ( database == "Editor Chefe" || database == "Editora Chefe" ) {

		federativa[0].classList.remove("hidden");
		federativa[1].classList.remove("hidden");
		testadores[0].classList.add("hidden");
		testadores[1].classList.add("hidden");
		academia[0].classList.remove("hidden");
		academia[1].classList.remove("hidden");
		contratacao[0].classList.add("hidden");
		contratacao[1].classList.add("hidden");

	} else if ( database == "Divulgador Youtuber" || database == "Divulgador Social" || database == "Divulgador Streamer" ) {

		federativa[0].classList.remove("hidden");
		federativa[1].classList.remove("hidden");
		testadores[0].classList.add("hidden");
		testadores[1].classList.add("hidden");
		academia[0].classList.remove("hidden");
		academia[1].classList.remove("hidden");
		contratacao[0].classList.add("hidden");
		contratacao[1].classList.add("hidden");

	}

}
setTag();
