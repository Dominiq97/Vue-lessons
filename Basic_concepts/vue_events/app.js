const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      confirmedName:''
    };
  },
  methods:{
    confirmInput(){
      this.confirmedName = this.name;
    }
    ,
    submitForm(){
      alert('submitted')
    },
    setName(event, lastName){
      this.name = event.target.value+' '+lastName;
    },
    add(num){
      this.counter = this.counter+num
      console.log(this.counter)
    },
    reduce(num){
      this.counter = this.counter-num
    }
  }
});

app.mount('#events');
