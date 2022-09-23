function setTag() {
	const database = localStorage["data16"];
	var federativa = document.getElementsByClassName("Fed");
	var testadores = document.getElementsByClassName("Tes");
	var academia = document.getElementsByClassName("Acad");
	var contratacao = document.getElementsByClassName("Cont");
	console.log("Cargo do Usuario: " + database);

	if ( database == "Desenvolvedor" ) {

		federativa[0].classList.remove("hidden");
		federativa[1].classList.remove("hidden");
		testadores[0].classList.remove("hidden");
		testadores[1].classList.remove("hidden");
		academia[0].classList.remove("hidden");
		academia[1].classList.remove("hidden");
		contratacao[0].classList.remove("hidden");
		contratacao[1].classList.remove("hidden");

	} else if ( database == "Moderador" ) {

		federativa[0].classList.remove("hidden");
		federativa[1].classList.remove("hidden");
		testadores[0].classList.add("hidden");
		testadores[1].classList.add("hidden");
		academia[0].classList.add("hidden");
		academia[1].classList.add("hidden");
		contratacao[0].classList.add("hidden");
		contratacao[1].classList.add("hidden");

	} else if ( database == "Suporte" ) {

		federativa[0].classList.remove("hidden");
		federativa[1].classList.remove("hidden");
		testadores[0].classList.add("hidden");
		testadores[1].classList.add("hidden");
		academia[0].classList.add("hidden");
		academia[1].classList.add("hidden");
		contratacao[0].classList.add("hidden");
		contratacao[1].classList.add("hidden");

	} else if ( database == "Testador" ) {

		federativa[0].classList.remove("hidden");
		federativa[1].classList.remove("hidden");
		testadores[0].classList.add("hidden");
		testadores[1].classList.add("hidden");
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
