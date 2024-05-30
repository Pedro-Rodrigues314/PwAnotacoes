let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

function cadastrar(){
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
	
    if((nome != "") && (email != "") && (senha != "")){
		
		let teste = true;
			
		for(let i = 0; i < usuarios.length; i++){
			if(usuarios[i].email == email){
				alert("Email ja cadastrado!!")
				teste = false;
			}
		}
			
		if(teste){
			criarUsuario(nome, email, senha)
		}
		
    }
    else{
        alert("Preencha todos os campos!!")
    }
}


function criarUsuario(nome, email, senha){
	let usuario = {
            nome,
            email,
            senha,
            anotacoes: [],
			formato: "DD/MM/YYYY"
        }

    usuarios.push(usuario)

    localStorage.setItem("usuarios", JSON.stringify(usuarios))
	
	window.location.href = "login.html"
}

function logar(){
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let usuarios = JSON.parse(localStorage.getItem("usuarios"))
    let emailValido = false
	
	if(email != "" && senha != ""){
		if(usuarios != null){
			for(let j = 0; j < usuarios.length; j++){
				if(email == usuarios[j].email){
					if(senha == usuarios[j].senha){
						
						let usuarioLogado = usuarios[j]
						usuarioLogado.posicao = j
						
						alert("Usuario Logado com sucesso")
						localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado))
						window.location.href = "index.html"
					}else{
						alert("Senha incorreta")
					}
					emailValido = true
				}
			}
    
			if(emailValido == false){
				alert("Email Inválido")
			}
		}else{
        alert("Não há ninguém cadastrado")
        window.location.href = "cadastro.html"
		}
	}else{
		alert("Preencha todos os campos!!")
	}
    

}
