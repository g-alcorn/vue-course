new Vue({
  el: '#exercise',
  data: {
    name: 'Griffin',
    age: 24,
    image: 'https://www.petmd.com/sites/default/files/small-kitten-walking-towards_127900829_0.jpg'
  },
  methods: {
    getRandom: function() {
      return Math.random();
    }
  }
});