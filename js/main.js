// /* Mostrar/Esconder Carrinho */
function showCart() {
  var show = document.getElementById("carrinho");

  if (show.style.display === "none") {
    show.style.display = "block"
  }
}

function closeCart() {
  var show = document.getElementById("carrinho");

  if (show.style.display === "block") {
    show.style.display = "none"
  }
}

window.onclick = function(event) {
  if (event.target == show) {
    show.style.display = "none";
  }
}

// /* Adicionar ao Carrinho */



// /* Compra Finalizada */
// Modal
var modal = document.getElementById("finalizaCarrinho");
var btn = document.getElementById("btnFimCarrinho");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Animação Check
var anima = document.getElementsByName("button");

anima.onclick = function() {
  document.getElementsByClassName("check-icon").hide();
  setTimeout(function () {
    document.getElementsByClassName("check-icon").show();
  }, 10)
}
/* $("button").click(function () {
  $(".check-icon").hide();
  setTimeout(function () {
    $(".check-icon").show();
  }, 10);
}); */

// /* Limpar Carrinho */