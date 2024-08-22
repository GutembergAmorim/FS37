const alunos = []

const form = document.getElementById('form-aluno')

function atualizarTabela(){
    const tbody = document.getElementById('lista')
    tbody.innerHTML = ''

    for(let contador = 0; contador < alunos.length; contador++){

        const nome = alunos[contador]
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <td>${nome}</td>
            <td>
            <button class="btn btn-warning" onclick="excluirAluno(${contador})">Excluir</button>
            </td>
        
        `
        tbody.appendChild(tr);
    }
}

function excluirAluno(indice){
    const check = confirm(`Deseja remover o aluno do indice ${indice}`)
    if(check){
        alunos.splice(indice, 1)
        atualizarTabela()
    }
}

 function salvarForm(evento){
    evento.preventDefault()
    if(nome.value != ""){
        const nome = document.getElementById("nome").value
        alunos.push(nome)
        document.getElementById('nome').value = ""
        atualizarTabela();
    } else{
        alert('Preencher o campo nome!')
    }
}

form.addEventListener('submit', salvarForm)

