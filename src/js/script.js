// Obtendo referências dos elementos do DOM
let nome = document.getElementById("nome");
let idade = document.getElementById("idade");
let cell = document.getElementById("cell");
let lista = document.getElementById("lista");
const btn = document.querySelector(".btn");

// Se estiver vazia exibe uma msg.
function atualizarMensagemLista() {
  // Remove a mensagem de lista vazia se houver itens na lista.
  const mensagemVazia = document.querySelector("#lista .mensagem-vazia");
  if (lista.children.length > 0) {
    if (mensagemVazia) {
      lista.removeChild(mensagemVazia);
    }
  } else {
    if (!mensagemVazia) {
      const newLi = document.createElement("li");
      newLi.classList.add("mensagem-vazia");
      newLi.style.color = "#fff";
      const newContent = document.createTextNode("Lista Vazia... :-( ");
      newLi.appendChild(newContent);
      lista.appendChild(newLi);
    }
  }
}

// Atualiza a mensagem de lista vazia ao carregar a página
window.addEventListener("load", atualizarMensagemLista);

btn.addEventListener("click", (e) => {
  e.preventDefault();

  // Validação dos campos.
  if (!nome.value || !idade.value || !cell.value) {
    alert("Digite um valor diferente de vazio");
    return false;
  }

  // Criando um novo item de lista
  const newLi = document.createElement("li");
  const newContent = document.createTextNode(
    `Nome: ${nome.value}, Idade: ${idade.value}, Celular: ${cell.value}`
  );

  // Criando o botão de deletar
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Deletar";
  deleteBtn.classList.add("delete-btn");

  // Deletar item da lista
  deleteBtn.addEventListener("click", () => {
    lista.removeChild(newLi);
    atualizarMensagemLista();
  });

  newLi.appendChild(newContent);
  newLi.appendChild(deleteBtn);
  lista.appendChild(newLi);

  // Limpa os campos.
  nome.value = "";
  idade.value = "";
  cell.value = "";

  console.log(
    `Nome: ${nome.value}, Idade: ${idade.value}, Celular: ${cell.value}`
  );

  // Atualiza a mensagem de lista vazia após adicionar um item
  atualizarMensagemLista();
});
