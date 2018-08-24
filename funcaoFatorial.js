
function calcularFatorial(){
	var resposta = 1
	var n = document.getElementById("numero").value
	n=parseInt(n)	
	console.log(n)
	while (n > 0){
		if(typeof resposta !== "undefined" && typeof n !== "undefined"){
		    resposta = resposta * (n)
		    n--
		    console.log(resposta)
		}
	}
	document.getElementById("resultado").innerHTML = resposta
}