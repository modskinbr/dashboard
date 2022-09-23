// Formulario de Login //
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// Painel
const urlhref = "painel.html"

// Login //
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username == "Luckey" && password == "smodskins") {
        location.href = urlhref;
        localStorage.setItem("userdate", username );
        localStorage.setItem("validate", password );
        localStorage.setItem("data0", ID01.DiscordID);
        localStorage.setItem("data1", ID01.Nome);
        localStorage.setItem("data2", ID01.Imagem);
        localStorage.setItem("data3", ID01.Pontos);
        localStorage.setItem("data4", ID01.Rank);
        localStorage.setItem("data5", ID01.Rank_Image);
        localStorage.setItem("data6", ID01.Pontos_Miticos);
        localStorage.setItem("data7", ID01.Elo);
        localStorage.setItem("data8", ID01.Elo_Image);
        localStorage.setItem("data9", ID01.Destaque);
        localStorage.setItem("data10", ID01.Destaque_Image);
        localStorage.setItem("data11", ID01.Fragmentos);
        localStorage.setItem("data12", ID01.Fragmentos_Estelares);
        localStorage.setItem("data13", ID01.Essencia_Mitica);
        localStorage.setItem("data14", ID01.Moedas);
        localStorage.setItem("data15", ID01.Parceria);
        localStorage.setItem("data16", ID01.Cargo);
        localStorage.setItem("data17", ID01.Cargo_Image);
        localStorage.setItem("data18", ID01.Risco);
        localStorage.setItem("data19", ID01.Imune);
        localStorage.setItem("data20", ID01.Divulgacoes);
        localStorage.setItem("data21", ID01.Colaboracoes);
        localStorage.setItem("data22", ID01.Video);
        localStorage.setItem("data23", ID01.Contribuicoes_Federativa);
        localStorage.setItem("data24", ID01.Participacoes);
        localStorage.setItem("data25", ID01.Bonus_Extra);
        localStorage.setItem("data26", ID01.Contribuicoes_Tester);
        localStorage.setItem("data27", ID01.Tarefas);
        localStorage.setItem("data28", ID01.Verificacoes);
        localStorage.setItem("data29", ID01.Progresso);
        localStorage.setItem("data30", ID01.Nasceu);
		localStorage.setItem("datap1", ID01.Obtido_recente);
		localStorage.setItem("datap2", ID01.Obtido2);
		localStorage.setItem("datap3", ID01.Obtido3);
		localStorage.setItem("datap4", ID01.Obtido4);
		localStorage.setItem("datap5", ID01.Obtido5);
		localStorage.setItem("datap6", ID01.Obtido6);
		localStorage.setItem("datap7", ID01.Obtido7);
		localStorage.setItem("datab1", ID01.Bonus_recente);
		localStorage.setItem("datab2", ID01.Bonus2);
		localStorage.setItem("datab3", ID01.Bonus3);
		localStorage.setItem("datab4", ID01.Bonus4);
		localStorage.setItem("datab5", ID01.Bonus5);
		localStorage.setItem("datab6", ID01.Bonus6);
		localStorage.setItem("datab7", ID01.Bonus7);
		localStorage.setItem("dataq1", ID01.Quantidade_recente);
		localStorage.setItem("dataq2", ID01.Quantidade2);
		localStorage.setItem("dataq3", ID01.Quantidade3);
		localStorage.setItem("dataq4", ID01.Quantidade4);
		localStorage.setItem("dataq5", ID01.Quantidade5);
		localStorage.setItem("dataq6", ID01.Quantidade6);
		localStorage.setItem("dataq7", ID01.Quantidade7);
    }
    else if (username == "mobdick123" && password == "mortadela123@") {
        location.href = urlhref;
        localStorage.setItem("userdate", username );
        localStorage.setItem("validate", password );
        localStorage.setItem("data0", ID02.DiscordID);
        localStorage.setItem("data1", ID02.Nome);
        localStorage.setItem("data2", ID02.Imagem);
        localStorage.setItem("data3", ID02.Pontos);
        localStorage.setItem("data4", ID02.Rank);
        localStorage.setItem("data5", ID02.Rank_Image);
        localStorage.setItem("data6", ID02.Pontos_Miticos);
        localStorage.setItem("data7", ID02.Elo);
        localStorage.setItem("data8", ID02.Elo_Image);
        localStorage.setItem("data9", ID02.Destaque);
        localStorage.setItem("data10", ID02.Destaque_Image);
        localStorage.setItem("data11", ID02.Fragmentos);
        localStorage.setItem("data12", ID02.Fragmentos_Estelares);
        localStorage.setItem("data13", ID02.Essencia_Mitica);
        localStorage.setItem("data14", ID02.Moedas);
        localStorage.setItem("data15", ID02.Parceria);
        localStorage.setItem("data16", ID02.Cargo);
        localStorage.setItem("data17", ID02.Cargo_Image);
        localStorage.setItem("data18", ID02.Risco);
        localStorage.setItem("data19", ID02.Imune);
        localStorage.setItem("data20", ID02.Divulgacoes);
        localStorage.setItem("data21", ID02.Colaboracoes);
        localStorage.setItem("data22", ID02.Video);
        localStorage.setItem("data23", ID02.Contribuicoes_Federativa);
        localStorage.setItem("data24", ID02.Participacoes);
        localStorage.setItem("data25", ID02.Bonus_Extra);
        localStorage.setItem("data26", ID02.Contribuicoes_Tester);
        localStorage.setItem("data27", ID02.Tarefas);
        localStorage.setItem("data28", ID02.Verificacoes);
        localStorage.setItem("data29", ID02.Progresso);
        localStorage.setItem("data30", ID02.Nasceu);
		localStorage.setItem("datap1", ID02.Obtido_recente);
		localStorage.setItem("datap2", ID02.Obtido2);
		localStorage.setItem("datap3", ID02.Obtido3);
		localStorage.setItem("datap4", ID02.Obtido4);
		localStorage.setItem("datap5", ID02.Obtido5);
		localStorage.setItem("datap6", ID02.Obtido6);
		localStorage.setItem("datap7", ID02.Obtido7);
		localStorage.setItem("datab1", ID02.Bonus_recente);
		localStorage.setItem("datab2", ID02.Bonus2);
		localStorage.setItem("datab3", ID02.Bonus3);
		localStorage.setItem("datab4", ID02.Bonus4);
		localStorage.setItem("datab5", ID02.Bonus5);
		localStorage.setItem("datab6", ID02.Bonus6);
		localStorage.setItem("datab7", ID02.Bonus7);
		localStorage.setItem("dataq1", ID02.Quantidade_recente);
		localStorage.setItem("dataq2", ID02.Quantidade2);
		localStorage.setItem("dataq3", ID02.Quantidade3);
		localStorage.setItem("dataq4", ID02.Quantidade4);
		localStorage.setItem("dataq5", ID02.Quantidade5);
		localStorage.setItem("dataq6", ID02.Quantidade6);
		localStorage.setItem("dataq7", ID02.Quantidade7);
    }
    else {
        loginErrorMsg.style.opacity = 1;
        localStorage.clear();
    }
})
