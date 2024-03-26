<script>
import axios from 'axios';
import { store } from './data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import Paginator from './components/partials/Paginator.vue';

export default {
  components:{
    Header,
    Main,
    Footer,
    Paginator,

  },

  data(){
    return{
      store,
    }
  },

  methods: {
    getApi(){
     /* console.log('GET API'); */ 
     console.log(this.store.apiUrl); 
     axios.get(this.store.apiUrl, {
      params:this.store.queryParams
     })
     .then(result =>{
      console.log(result.data.results);
      console.log(result.data.info.pages);
      this.store.cardList = result.data.results;
      this.store.pageInfo.totalPages = result.data.info.pages;
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

  <Paginator />
  
  <!-- <Footer /> -->
  
</template>

<style lang="scss" scoped>

</style>