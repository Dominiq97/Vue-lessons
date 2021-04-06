const assign = Vue.createApp({
  data() {
    return {
      userInput: "",
      confirmedInput:''
    };
  },
  methods: {
    saveInput(event){
        this.userInput = event.target.value;
    },
    alertPress() {
      alert("pressed!");
    },
    confirmInput() {
      this.confirmedInput = this.userInput;
    },
  },
});

assign.mount("#assignment");
