function anotherAddEventListener(typeOfEvent, callback) {

  var eventThatHappened = {
    eventType: "keydown",
    key: "p",
    durationOfKeyKeypress: 2
  }

  if (eventThatHappened.eventType === typeOfEvent) {
      callback(eventThatHappened);
  }

}

anotherAddEventListener("keydown", function(event) {
  console.log(event);
});

