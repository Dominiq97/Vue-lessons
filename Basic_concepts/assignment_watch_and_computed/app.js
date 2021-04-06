const assign = Vue.createApp({
  data() {
    return{
        number:0,
        output:''
    }
  },
  watch:{
    number(value){
        if (value === 37){
            this.output = value
        }
        else if(value>37){
            const that = this;
            setTimeout(function(){
            that.number = 0
        },2000)
           this.output = "too much!"
        }else{
            this.output = 'Not there yet'
            
        }
        console.log(this.number)
    }
//     result(){
//         const that = this;
//         console.log(this.number)
//         setTimeout(function(){
//             that.number = 0;
//             },5000)
//     }
//   },

//   computed:{
//     result(){
//         if (this.number < 37){
//             return 'not there yer!';
//         }else if (this.number === 37){
//             return this.number;
//         }else{
//             return 'Too much!';
//         }
        
//     }
  },
  methods: {
    add5(){
        this.number += 5
    },
    add1(){
        this.number += 1
    }
  },
});
assign.mount("#assignment");
