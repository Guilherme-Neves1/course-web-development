function whosPaying(names) {
  var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
  
  var numberOfPeople = names.length; // Comprimento de names = 5 elementos.
  // var randomPersonPosition = Math.random() * numberOfPeople; // 0 a 4.999999... nunca chegando a 5, pois aqui os elementos são pelo indíce. [0, 1, 2, 3, 4, 5]
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople); // Math.floor arredonda os elementos para baixo.
  var randomPerson = names[randomPersonPosition];

  return randomPerson + " is going to buy lunch today!"
}
