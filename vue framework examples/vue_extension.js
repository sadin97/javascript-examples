new Vue({
  el: '#app',
  data: {
    message: 'Trenutni tekst.'
  },
  methods: {
    metod_izmjene: function () {
      this.message = ("Promijeni boju");
    }
  }
})