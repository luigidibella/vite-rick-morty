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
      this.store.errorString = '';
      this.store.cardList = [];
     /* console.log('GET API'); */ 
     /* console.log(this.store.apiUrl); */ 
     axios.get(this.store.apiUrl, {
      params:this.store.queryParams
     })
     .then(result =>{
       this.store.cardList = result.data.results;
       this.store.pageInfo.totalPages = result.data.info.pages;
       /* console.log(result.data); */
       /* console.log(result.data.info.pages); */
     })
     .catch(error => {
      console.log(error);
      this.store.errorString = 'Nessun risultato trovato'
     })
    },

    getAllCharacter() {
      this.store.characterList = []; // Pulisce la lista dei personaggi
      
      // Funzione ricorsiva per caricare tutte le pagine di dati
      const loadNextPage = (url) => {
        axios.get(url)
          .then(res => {
            /* console.log(url); */
            /* console.log(res.data.results); */
            /* console.log(res.data.info.count); */
            
            // Aggiunge i nomi dei personaggi alla lista
            this.store.characterList.push(...res.data.results.map(item => item.name));
            
            // Controlla se ci sono altre pagine da caricare
            if (res.data.info.next) {
              // Se c'è una pagina successiva, caricala
              loadNextPage(res.data.info.next);
            } else {
              // Se non ci sono altre pagine, hai finito il caricamento
              console.log("Tutti i personaggi sono stati caricati:", this.store.characterList);
            }
          })
          .catch(error => {
            console.error("Si è verificato un errore durante il caricamento della pagina:", error);
          });
      };
      
      // Inizia caricando la prima pagina
      loadNextPage(this.store.pageOneUrl);
    },

    getAllSpecies() {
      this.store.speciesList = []; 
      
      const loadNextPage = (url) => {
        axios.get(url)
          .then(res => {
            res.data.results.forEach(item => {
              const species = item.species;
              if (!this.store.speciesList.includes(species)) {
                this.store.speciesList.push(species);
              }
            });
            if (res.data.info.next) {
              loadNextPage(res.data.info.next);
            } else {
              console.log("Tutte le specie sono state caricate:", this.store.speciesList);
            }
          })
          .catch(error => {
            console.error("Si è verificato un errore durante il caricamento della pagina:", error);
          });
      };
      
      loadNextPage(this.store.pageOneUrl);
    },

  },

  mounted() {
    this.getApi(),
    this.getAllCharacter(),
    this.getAllSpecies()
  },
  
}
</script>

<template>

  <Header @startSearch="getApi" />
  
  <Paginator v-if="this.store.cardList.length > 0" @prossimaPagina="getApi" />
  
  <Main @ricarica="getApi" />

  <Paginator v-if="this.store.cardList.length > 0" @prossimaPagina="getApi" />
  
  <!-- <Footer /> -->
  
</template>

<style lang="scss" scoped>

</style>