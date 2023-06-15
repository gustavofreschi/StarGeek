var cadastrar = []


cadastrar = JSON.parse(localStorage.getItem('bdCadastro'))
if (cadastrar == null) {
    cadastrar = []
}
console.log(cadastrar)
cadastrarpessoa()

function cadastro() {
    var nome = document.getElementById('usuario').value
    
    var login = document.getElementById('login').value
    
    var password = document.getElementById('senha').value

    var confirm = document.getElementById('confirmar').value

    var validar = ValidarCadastro(nome, login, password, confirm)

    if (validar == false) {
        alert('Verifique os dados antes de cadastrar!')
       return
    } else if (validar == true) {
        alert('Cadastrado com sucesso!')
        location.href = 'login.html'
    }

    var entrar = {
        name: nome,
        log: login,
        senha: password,
    }

    cadastrar.push(entrar)
    localStorage.setItem( 'bdCadastro', JSON.stringify(cadastrar) )
    cadastrarpessoa()
}



function cadastrarpessoa() {
   
    

}

function ref() {
    location.href = 'cadastro.html'
}

function ValidarCadastro(nome, login, senha, confirmar) {
    if(nome != "" && login != "" && senha != "" && confirmar != "") {
        return true
    } else {
        return false
    }
}


function Login() {
    var logar = document.getElementById('user1').value
    
    var pass = document.getElementById('senha2').value

    ValidarLogin(logar, pass)


}

function ValidarLogin(login, senha) {

    var encontrou = false
    
        cadastrar.forEach(item => {
            if(login == item.log && senha == item.senha) {
                alert(`Bem vindo, ${item.name}.`)
                location.href = 'principal.html'
                encontrou = true
            }
        });
        
            if(encontrou == false) {
            alert('Usuário não encontrado!')
            return
        }

    }

    function Limpar() {
        cadastrar = []
        localStorage.setItem( 'bdCadastro', JSON.stringify(cadastrar) )
    }