<script>
import axios from 'axios';
import { store } from './data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
  components:{
    Header,
    Main,
    Footer,

  },

  data(){
    return{
      store,
    }
  },

  methods: {
    getApi(){
     /* console.log('GET API'); */ 
     console.log(this.store); 
     axios.get(this.store.apiUrl/* , {
      params:{
        id: 1,
        offset: 0,
        language: 'it'
      }
     } */)
     .then(result =>{
      console.log(result.data.results);
      this.store.cardList = result.data.results;
      /* console.log(this.store.cardList[0].image); */
     })
     .catch(error => {
      console.log(error);
     })
    }
  },

  mounted() {
    this.getApi()
  },
  
}
</script>

<template>
  
  <Header />
  
  <Main />
  
  <Footer />
  
</template>

<style lang="scss" scoped>

</style>