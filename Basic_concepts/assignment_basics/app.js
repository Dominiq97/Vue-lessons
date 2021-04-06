const assign = Vue.createApp({
  data() {
    return {
      name: 'Dominic',
      age: 23,
      img_link:
        "https://news.cgtn.com/news/2020-11-11/Koalas-face-danger-of-extinction-in-parts-of-Australia-by-2050-VkbzDZZnDG/img/797a20d36d3943e6aece2b6f7b5e9fc5/797a20d36d3943e6aece2b6f7b5e9fc5.jpeg",
      names: [],
      enteredValue: "",
    };
  },
  methods: {
    ageIn5() {
      return this.age + 5;
    },
    randomNum() {
      return Math.random().toFixed(2);
    },
    
  },
});
assign.mount("#assignment");
