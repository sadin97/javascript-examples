var  vm = new Vue({
   el: '#appvue',
   data: {
      firstname : "Sadin",
      age  : "21",
      nation    : "BiH"
   },
   methods: {
      mydetails : function() {
         return "I am "+this.firstname +" "+ this.lastname;
      }
   }
})