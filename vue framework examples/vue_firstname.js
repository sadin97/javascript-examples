var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Mujo',
    lastName: 'Mujic'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})