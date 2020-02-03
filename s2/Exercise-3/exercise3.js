new Vue({
  el: '#app',
  data: {
    value: 0
  },
  computed: {
    result: function() {
      return this.value === 7 ? 'Equal to 7' : 'Not equal to 7';
    }
  },
  watch: {
    result: function(value) {
      let vm = this;
      setTimeout(() => {
        vm.value = 0;
      }, 5000);
    }
  }
})