new Vue({
  el: '#app',
  data: {
    subtitle: "Hello Vue World",
    variableText: 'type to change me',
    url: 'https://google.ca',
    counter: 0,
    charCount: 0,
    buttonCounter: 0,
    x: 0,
    y: 0
  },
  methods: {
    sayHello: function() {
      this.subtitle = `You clicked the URL below ${this.counter} times!`;
    },
    changeText: function(event) {
      this.charCount = event.target.value.length;
      if (this.charCount) {
        this.variableText = event.target.value;
      } else {
        this.variableText = 'type to change me';
      }
      
    },
    onUrlClick: function(event) {
      this.counter++;
      this.sayHello();
    },
    onButtonClick: function(event) {
      this.buttonCounter++;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    }
  }
});