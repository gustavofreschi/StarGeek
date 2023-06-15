var movies = []

movies = JSON.parse(localStorage.getItem('bdMidia'))
if (movies == null) {
    movies = []
}
FilmeCadastrado()

console.log(movies)
function CadastrarFilme() {
    var filmenome = document.getElementById('nome').value

    var filmeimage = document.getElementById('imagem').value

    var filmeresumo = document.getElementById('resumo').value

    if (ValidarFilme(filmenome, filmeimage, filmeresumo) == false) {
        alert('Verifique os dados!')
        return
    } else {
        alert("Filme cadastrado!")
        location.href = 'principal.html'
    }

    var filme = {
        movie: filmenome,
        imagem: filmeimage,
        resumo: filmeresumo
    }

    movies.push(filme)

    localStorage.setItem('bdMidia', JSON.stringify(movies))

    FilmeCadastrado()

}


function FilmeCadastrado() {
    document.getElementById('catalogo').innerHTML = ''
    movies.forEach((item, indice) => {
        document.getElementById('catalogo').innerHTML += `<img class='poster' src='${item.imagem}'> <img onclick="Excluir(${indice})" class="trash" src="img/trash2.png">`
    })
    
}


function ValidarFilme(filme, imagem, resumo) {
    if (filme == "" || imagem == "" || resumo == "") {
        return false

    } else {
        return true
    }
}

function LimparFilme() {
    document.getElementById('nome').value = ""
    document.getElementById('imagem').value = ""
    document.getElementById('resumo').value = ""
    document.getElementById('nome').focus()
}

function Excluir(indice) {
    movies.splice(indice, 1)
    localStorage.setItem( 'bdMidia', JSON.stringify(movies) )
    FilmeCadastrado()
}



