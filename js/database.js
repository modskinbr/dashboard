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
        localStorage.setItem("data29", ID01.Reputacao);
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
        location.href = urlhref;
    }
    else if (username == "nayk" && password == "102021nayk") {
        localStorage.setItem("userdate", username );
        localStorage.setItem("validate", password );
        localStorage.setItem("data0", ID03.DiscordID);
        localStorage.setItem("data1", ID03.Nome);
        localStorage.setItem("data2", ID03.Imagem);
        localStorage.setItem("data3", ID03.Pontos);
        localStorage.setItem("data4", ID03.Rank);
        localStorage.setItem("data5", ID03.Rank_Image);
        localStorage.setItem("data6", ID03.Pontos_Miticos);
        localStorage.setItem("data7", ID03.Elo);
        localStorage.setItem("data8", ID03.Elo_Image);
        localStorage.setItem("data9", ID03.Destaque);
        localStorage.setItem("data10", ID03.Destaque_Image);
        localStorage.setItem("data11", ID03.Fragmentos);
        localStorage.setItem("data12", ID03.Fragmentos_Estelares);
        localStorage.setItem("data13", ID03.Essencia_Mitica);
        localStorage.setItem("data14", ID03.Moedas);
        localStorage.setItem("data15", ID03.Parceria);
        localStorage.setItem("data16", ID03.Cargo);
        localStorage.setItem("data17", ID03.Cargo_Image);
        localStorage.setItem("data18", ID03.Risco);
        localStorage.setItem("data19", ID03.Imune);
        localStorage.setItem("data20", ID03.Divulgacoes);
        localStorage.setItem("data21", ID03.Colaboracoes);
        localStorage.setItem("data22", ID03.Video);
        localStorage.setItem("data23", ID03.Contribuicoes_Federativa);
        localStorage.setItem("data24", ID03.Participacoes);
        localStorage.setItem("data25", ID03.Bonus_Extra);
        localStorage.setItem("data26", ID03.Contribuicoes_Tester);
        localStorage.setItem("data27", ID03.Tarefas);
        localStorage.setItem("data28", ID03.Verificacoes);
        localStorage.setItem("data29", ID03.Reputacao);
        localStorage.setItem("data30", ID03.Nasceu);
		localStorage.setItem("datap1", ID03.Obtido_recente);
		localStorage.setItem("datap2", ID03.Obtido2);
		localStorage.setItem("datap3", ID03.Obtido3);
		localStorage.setItem("datap4", ID03.Obtido4);
		localStorage.setItem("datap5", ID03.Obtido5);
		localStorage.setItem("datap6", ID03.Obtido6);
		localStorage.setItem("datap7", ID03.Obtido7);
		localStorage.setItem("datab1", ID03.Bonus_recente);
		localStorage.setItem("datab2", ID03.Bonus2);
		localStorage.setItem("datab3", ID03.Bonus3);
		localStorage.setItem("datab4", ID03.Bonus4);
		localStorage.setItem("datab5", ID03.Bonus5);
		localStorage.setItem("datab6", ID03.Bonus6);
		localStorage.setItem("datab7", ID03.Bonus7);
		localStorage.setItem("dataq1", ID03.Quantidade_recente);
		localStorage.setItem("dataq2", ID03.Quantidade2);
		localStorage.setItem("dataq3", ID03.Quantidade3);
		localStorage.setItem("dataq4", ID03.Quantidade4);
		localStorage.setItem("dataq5", ID03.Quantidade5);
		localStorage.setItem("dataq6", ID03.Quantidade6);
		localStorage.setItem("dataq7", ID03.Quantidade7);
        location.href = urlhref;
    } 
    else {
        loginErrorMsg.style.opacity = 1;
        localStorage.clear();
    }
})
