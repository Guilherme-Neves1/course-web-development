// Traditional
// document.querySelector("h1").style.color = "red";

// JQuery
// $("h1").css("color", "red");

// BOA prática não usar para alterar o CSS diretamente, apenas por meio de comands que interagem com a página de CSS.

$("h1").addClass("big-title");

$("h1").removeClass("big-title");

// MORE class

$("h1").addClass("big-title margin-50");

//$("h1").removeClass("big-title margin-50");

// Consultar se a classe está presente
// true ou false
$("h1").hasClass("margin-50");

// Manipular texto
// .text("novo texto aqui")

$("h1").text("Bye");

// TODOS os buttons da pág
$("button").text("Don't Click Me");

// .innerHTML version JQuery
// Alterar todo HTML dentro da tag
$("button").html("<em>OKAY</em>");

// Manipular atributos
// href, src, alt ...

// Fazer a consulta do atributo
console.log($("img").attr("src"));

// consultar as classes de uma tag
$("h1").attr("class");

// Alterar o atributo
$("a").attr("href", "https://yahoo.com.br");

// EventListener com JQuery
$("h1").click(function () {
  $("h1").css("color", "purple");
})

// MUDAR a cor, Vanilla VS JQuery

// VANILLA:
for(var i = 0; i < 5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    document.querySelector("h1").style.color = "green";
  });
}

// JQUERY:
$("button").click(function () {
  $("h1").css("color", "darkorange");
});

// Registra teclas no console através do input
$("input").keydown(function(event) {
  console.log(event.key);
});

// Agora através da pagina
$(document).keydown(function(event) {
  console.log(event.key);
});

// MUDAR O H1 DE ACORDO COM AS TECLAS

// MINHA TENTATIVA
$(document).keydown(function(event) {
  var pressKey = event.key;

  $("h1").html(pressKey);
});

// SOLUÇÃO
$(document).keydown(function(event) {
  $("h1").html(event.key);
});

// Encurtar events

$("h1").on("mouseover", function() {
  $("h1").css("color", "gray");
});

// Criar elementos HTML

// Antes da TAG
$("h1").before("<button>New Before</button>");

// Depois da TAG
$("h1").after("<button>New After</button>");

// Criar DENTRO da tag selecionada
// Antes do elemento
$("h1").prepend("<button>New Prepend</button>");

// Depois do elemento
$("h1").append("<button>New Append</button>");


