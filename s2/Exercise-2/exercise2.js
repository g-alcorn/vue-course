new Vue({
  el: '#app',
  data: {
    title: 'Exercise 2 🤪',
    inputOne: '',
    inputTwo: '',
    counter: 0
  },
  methods: {
    onButtonClick: function(event) {
      this.counter++;
      alert('Button clicked!')
    },
    updateInput: function(event) {
      this.inputOne = event.target.value;
      this.counter++;
    },
    onEnterKey: function(event) {
      this.inputTwo = event.target.value;
      this.counter++;
    }
  }
})