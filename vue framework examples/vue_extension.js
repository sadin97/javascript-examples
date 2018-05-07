new Vue({
  el: '#app',
  data: {
    message: 'Trenutni tekst.'
  },
  methods: {
    metod_izmjene: function () {
      this.message = ("Promijenjen tekst preko buttona.");
    }
  }
})