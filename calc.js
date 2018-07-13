function filtraAtividade(value) {
	if(value == 0) {
		$('#tbxQtdNomes').attr('disabled','disabled');
		$('#tbxValor').attr('disabled','disabled');
		$('#tbxQtdPag').attr('disabled','disabled');
		$('#tbxQtdVias').attr('disabled','disabled');
		$('#tbxQtdDiligencia').attr('disabled','disabled');

		$('#tbxQtdNomes').val('');
		$('#tbxValor').val('');
		$('#tbxQtdPag').val('');
		$('#tbxQtdVias').val('');
		$('#tbxQtdDiligencia').val('');
	}

	if(value == 1) {
		$('#tbxQtdNomes').removeAttr('disabled');
		$('#tbxValor').removeAttr('disabled');
		$('#tbxQtdPag').removeAttr('disabled');
		$('#tbxQtdVias').removeAttr('disabled');
		$('#tbxQtdDiligencia').attr('disabled','disabled');

		$('#tbxQtdNomes').val('');
		$('#tbxValor').val('');
		$('#tbxQtdPag').val('');
		$('#tbxQtdVias').val('');
		$('#tbxQtdDiligencia').val('');
	}

	if(value == 2) {
		$('#tbxQtdNomes').removeAttr('disabled');
		$('#tbxValor').attr('disabled','disabled');
		$('#tbxQtdPag').removeAttr('disabled');
		$('#tbxQtdVias').removeAttr('disabled');
		$('#tbxQtdDiligencia').attr('disabled','disabled');

		$('#tbxQtdNomes').val('');
		$('#tbxValor').val('');
		$('#tbxQtdPag').val('');
		$('#tbxQtdVias').val('');
		$('#tbxQtdDiligencia').val('');
	}

	if(value == 4) {
		$('#tbxQtdNomes').removeAttr('disabled');
		$('#tbxValor').attr('disabled','disabled');
		$('#tbxQtdPag').removeAttr('disabled');
		$('#tbxQtdVias').attr('disabled','disabled');
		$('#tbxQtdDiligencia').removeAttr('disabled');	

		$('#tbxQtdNomes').val('');
		$('#tbxValor').val('');
		$('#tbxQtdPag').val('');
		$('#tbxQtdVias').val('');
		$('#tbxQtdDiligencia').val('');	
	}

}

function Limpar() {
	$('#tbxQtdNomes').val('');
	$('#tbxValor').val('');
	$('#tbxQtdPag').val('');
	$('#tbxQtdVias').val('');
	$('#tbxQtdDiligencia').val('');
}

function Calcular() {
	var atividade = document.getElementById('cbxTipo').value;
	var campoTotal = 0;
	var campoValor = null;
	var campoOficial = 0;
	var campoEstado = 0;
	var campoIPESP = 0;
	var campoRegistro = 0;
	var campoTribunal = 0;
	var campoMinisterio = 0;
	var campoISS = 0;
	var campoDiligencia = 0;

	if(atividade == 0 || atividade == null) {
		alert('Selecione uma opção.');
	}

	if(atividade == 1) {
		var valor = document.getElementById('tbxValor').value;
		var qtdPag = document.getElementById('tbxQtdPag').value;
		var qtdVias = document.getElementById('tbxQtdVias').value;
		var qtdNomes = document.getElementById('tbxQtdNomes').value;
			
			if(isNaN(qtdPag) || qtdPag == null || qtdPag == "")
				alert("campo Qtd. Páginas vázio ou possui caractéres inválidos");	
			else if(isNaN(qtdVias) || qtdVias == null || qtdVias == "")
				alert("campo Qtd. Vias vázio ou possui caractéres inválidos");
			else if(isNaN(qtdNomes) || qtdNomes == null || qtdNomes == "")
				alert("campo Qtd. Nomes vázio ou possui caractéres inválidos");
			else if(isNaN(valor) || valor == null || valor == "")  
				alert("campo valor vázio ou possui caractéres inválidos");
			else 
				calculaComValor(valor, qtdPag, qtdVias, qtdNomes);
			
	}

	if(atividade == 2) {
		var qtdPag = document.getElementById('tbxQtdPag').value;
		var qtdVias = document.getElementById('tbxQtdVias').value;		
		var qtdNomes = document.getElementById('tbxQtdNomes').value;
			if(isNaN(qtdPag) || qtdPag == null || qtdPag == "")
				alert("campo Qtd. Páginas vázio ou possui caractéres inválidos");
			else if(isNaN(qtdVias) || qtdVias == null || qtdVias == "")
				alert("campo Qtd. Vias vázio ou possui caractéres inválidos");
			else if(isNaN(qtdNomes) || qtdNomes == null || qtdNomes == "")
				alert("campo Qtd. Nomes vázio ou possui caractéres inválidos");
			else 
				calculaSemValor(qtdPag, qtdVias, qtdNomes);
	}


	if(atividade == 4) {
		var qtdPag = document.getElementById('tbxQtdPag').value;
		var qtdNomes = document.getElementById('tbxQtdNomes').value;
		var tbxQtdDiligencia = document.getElementById('tbxQtdDiligencia').value;
			if(isNaN(qtdPag) || qtdPag == null || qtdPag == "")
				alert("campo Qtd. Páginas vázio ou possui caractéres inválidos");
			else if(isNaN(tbxQtdDiligencia) || tbxQtdDiligencia == null || tbxQtdDiligencia == "")
				alert("campo Qtd. Diligência vázio ou possui caractéres inválidos");
			else if(isNaN(qtdNomes) || qtdNomes == null || qtdNomes == "")
				alert("campo Qtd. Nomes vázio ou possui caractéres inválidos");
			else 
				calculaNotificacao(qtdPag, qtdNomes, tbxQtdDiligencia);
	}
}

function calculaComValor(valor, qtdPag, qtdVias, qtdNomes) {
	//Começo calculaComValor
	var emolumento;
	var adValoren;
	var pagExcedentes;
	var viasExcedentes;
	var doi = 0;
	var emolumentoExcedente;
	var subTotal;
	var distribuicao = 19.82;
	var nomeExcedente;
	var outroSubTotal;
	var fundoEspecialTJ;
	var fundoProcuradoria;
	var fundoDefensoria;
	var fundoFunarpen;
	var ISS;
	var PMCMVExcedente;
	var pagExcedentesPMCMV;
	var outroViasExcedentes;
	var distribuicaoPMCMV = 0.39;
	var nomeExcedentePMCMV;
	var emolumentoPMCMV;
	var total;

		if(valor < 70001.00)
			if((valor * 0.1) <  49.36)
				adValoren = 49.36;
			else if((valor * 0.1) > 250.54)
				adValoren = 250.54;
			else
				adValoren = valor * 0.1;
		else
			adValoren = 0;
		// fim adValoren

		if(valor > 700001.00)
			if((qtdPag - 5) > 0)
				pagExcedentes = (qtdPag - 5) * 0;
			else 
				pagExcedentes = 0;

			if((qtdPag - 4) > 0)
				pagExcedentes = (qtdPag - 4) * 2.84
		// fim pagExcedentes

		if(qtdVias > 1)
			viasExcedentes = (qtdVias - 1) * 13.02
		else
			viasExcedentes = 0;
		// fim viasExcedentes

		if(valor > 200000.00)
			if(((valor - 200000.00) % 100000.00) > 0)
				emolumentoExcedente = parseInt((((valor - 200000.00)/100000.00) + 1) * 91.39);
			else
				emolumentoExcedente = (((valor - 200000.00)/100000.00) + 1) * 91.39;
		else
			emolumentoExcedente = 0;
		// fim emolumentoExcedente

		subTotal = (emolumento + adValoren + pagExcedentes 
					+ viasExcedentes + doi + emolumentoExcedente);
		// fim calculo subTotal

		if((qtdNomes - 2) > 0)
			nomeExcedente = (qtdNomes - 2) * 0.94;
		else
			nomeExcedente = 0;
		// fim nomeExcedente

		outroSubTotal = (distribuicao + nomeExcedente);
		// fim calculo outroSubTotal

		fundoEspecialTJ = Math.floor((subTotal + outroSubTotal) * 0.2, 2);
		// fim calculo fundoEspecialTJ

		fundoProcuradoria = Math.floor((outroSubTotal + subTotal) * 0.05, 2);
		// fim calculo fundoProcuradoria

		fundoDefensoria = Math.floor((outroSubTotal + subTotal) * 0.5, 2);
		// fim calculo fundoDefensoria

		fundoFunarpen = Math.floor((outroSubTotal + subTotal) * 0.04, 2);
		// fim calculo fundoFunarpen

		ISS = Math.floor(((subTotal + PMCMVExcedente 
			+ pagExcedentesPMCMV + outroViasExcedentes)/0.95) 
			-
			((subTotal + PMCMVExcedente 
			+ pagExcedentesPMCMV + outroViasExcedentes)), 2);
		// fim calculo ISS



		if(valor > 200000.00)
			if((parseInt(valor - 200000.00) % 100000.00) > 0)
				PMCMVExcedente = ((parseInt(valor - 200000.00)/100000.00) + 1) * 1.82;
			else
				PMCMVExcedente = (parseInt(valor - 200000.00)/100000.00) * 1.82;
		else
			PMCMVExcedente = 0;
		// fim pmcmvExcedente

		if(valor < 70001.00)
			if((qtdPag - 5) > 0)
				pagExcedentesPMCMV = (qtdPag - 5) * 0.5;
			else
				pagExcedentesPMCMV = 0;

			if((qtdPag - 4) > 0)
				pagExcedentesPMCMV = (qtdPag - 4) * 0.5;
			else
				pagExcedentesPMCMV = 0;
		
		// fim pagExcedentesPMCMV

		if(qtdVias > 1)
			outroViasExcedentes = (qtdVias - 1) * 0.26;
		else
			outroViasExcedentes = 0;
		// fim outroViasExcedentes

		if((qtdNomes - 2) > 0)
			nomeExcedentePMCMV = (qtdNomes - 2) * 0.01;
		else
			nomeExcedentePMCMV = 0;
		// fim nomeExcedentePMCMV

		emolumento = (subTotal - viasExcedentes);
		// fim calculo emolumento
		emolumentoPMCMV = (ISS - outroSubTotal);
		// fim calculo emolumento pmcmv

		total = parseFloat((nomeExcedentePMCMV + distribuicaoPMCMV + outroViasExcedentes 
				+ pagExcedentesPMCMV + emolumentoPMCMV 
				+ fundoFunarpen + fundoDefensoria + fundoProcuradoria + fundoEspecialTJ
				+ outroSubTotal + subTotal + ISS + PMCMVExcedente).toFixed(2));
		// fim calculo total

	$('#campoValor').text("R$ " + valor);
	$('#campoDesc').text('01 - Registro Integral com valor.');
	$('#campoISS').text(ISS);
	$('#campoTotal').text(total);
	$('.table').removeClass('hidden');
}

function calculaSemValor(qtdPag, qtdVias, qtdNomes) {
	//Começo calculo sem valor
		var diligencia = 19.54;
		var emolumento = 128.88;
		var pagExcedentes;
		var nomeExcedente;
		var viasExcedentes = 0;
		var pagPMCMV;
		var distribuicaoPMCMV = 0.39;
		var nomePMCMV;
		var outraViasEx;

			if((qtdVias - 1) > 0)
				viasExcedentes = (qtdVias - 1) * 13.02 ;
			else
				viasExcedentes = 0;


			if((qtdPag - 4) > 0) {
				pagExcedentes = (qtdPag - 4) * 2.84;
				pagPMCMV = (qtdPag - 4) * 0.05;
			}
			else {
				pagExcedentes = 0;
				pagPMCMV = 0;
			}

			if((qtdNomes - 2) > 0)
				nomeExcedente = (qtdNomes - 2) * 0.94;
			else
				nomeExcedente = 0;

		var subTotal = (emolumento + pagExcedentes + viasExcedentes);

		var distribuicao = 19.82;
		var outroSubTotal = (distribuicao + nomeExcedente);
		var fundoEspecialTJ = (subTotal + outroSubTotal) * 0.2;
		var fundoProcuradoria = (outroSubTotal + subTotal) * 0.05;
		var fundoDefensoria = (outroSubTotal + subTotal) * 0.05;
		var fundoFunarpen = (outroSubTotal + subTotal) * 0.04;
		var primeiroISS = ((subTotal + 2.96 + 0.39 + pagPMCMV)/0.95);
		var segundoISS = (subTotal + 2.96 + 0.39 + pagPMCMV);
		var ISS = parseFloat((primeiroISS - segundoISS).toFixed(2));
			if((qtdNomes - 2) > 0)
				nomePMCMV = ((qtdNomes - 2) * 0.1);
			else
				nomePMCMV = 0;

			if(qtdVias > 1) 
				outraViasEx = ((qtdVias - 1) * 0.26);
			else
				outraViasEx = 0;


		campoTotal = parseFloat((nomePMCMV + distribuicaoPMCMV + outraViasEx + pagPMCMV 
				+ 2.57 + fundoFunarpen + fundoDefensoria + fundoProcuradoria 
				+ fundoEspecialTJ + outroSubTotal + subTotal + ISS).toFixed(2));
		

		$('#campoValor').text("R$ ");
		$('#campoDesc').text('02A - Registro Integral sem valor.');
		$('.table').removeClass('hidden');
		$('#campoISS').text("R$ " + ISS);
		$('#campoTotal').text("R$ " + campoTotal);
		$('.table').removeClass('hidden');
}

function calculaNotificacao(qtdPag, qtdNomes, tbxQtdDiligencia) {
	//Começo calculo notificação
		var diligencia = 19.54;
		var emolumento = 148.48;
		var pagExcedentes;
		var nomeExcedente;
		var viasExcedentes = 0;
		var pagPMCMV;
		var distribuicaoPMCMV = 0.09;
		var nomePMCMV;
			if((qtdPag - 4) > 0) {
				pagExcedentes = (qtdPag - 4) * 2.84;
				pagPMCMV = (qtdPag - 4) * 0.05;
			}
			else {
				pagExcedentes = 0;
				pagPMCMV = 0;
			}

		var subTotal = (diligencia + emolumento + pagExcedentes + viasExcedentes);
		var distribuicao = 4.84;

			if((qtdNomes - 2) > 0)
				nomeExcedente = (qtdNomes - 2) * 0.94;
			else
				nomeExcedente = 0;

		var outroSubTotal = (distribuicao + nomeExcedente);
		var fundoEspecialTJ = parseFloat(((subTotal + outroSubTotal) * 0.2).toFixed(2));
		var fundoProcuradoria = parseFloat(((outroSubTotal + subTotal) * 0.05 - 0.01).toFixed(2));
		var fundoDefensoria = parseFloat(((outroSubTotal + subTotal) * 0.05 - 0.01).toFixed(2));
		var fundoFunarpen = parseFloat(((outroSubTotal + subTotal) * 0.04).toFixed(2));
		var primeiroISS = ((subTotal + 2.96 + 0.39 + pagPMCMV)/0.95);
		var segundoISS = (subTotal + 2.96 + 0.39 + pagPMCMV);
		var ISS = parseFloat((primeiroISS - segundoISS).toFixed(2));
			if((qtdNomes - 2) > 0)
				nomePMCMV = ((qtdNomes - 2) * 0.1);
			else
				nomePMCMV = 0;

		campoTotal = parseFloat((nomePMCMV + 0.9 + pagPMCMV + 0.39 
				+ 2.96 + fundoFunarpen + fundoDefensoria + fundoProcuradoria 
				+ fundoEspecialTJ + outroSubTotal + subTotal + ISS).toFixed(2));


		$('#campoValor').text("R$ ");
		$('#campoISS').text("R$ " + ISS);
		$('#campoTotal').text("R$ " + campoTotal);
		$('.table').removeClass('hidden');
}

$(document).on('change', function(){
	$('.table').addClass('hidden');
})