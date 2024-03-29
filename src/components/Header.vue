<script>
import { store } from '../data/store'

export default{

data(){
  return{
    store,
    character: '',
    selected: '',
    species: '',
  }
},

methods: {
  startSearch(){
    /* console.log('ricerca'); */
    this.store.queryParams= {
      page: 1,
      /* name: this.character, */
    }
    if(this.character.length > 0) this.store.queryParams.name = this.character;
    if(this.species.length > 0) this.store.queryParams.species = this.species;
    this.store.queryParams.status = this.selected;
    this.store.pageInfo.counter = 1;
    this.$emit('startSearch');
    this.character = '';
    this.selected = '';
    this.species = '';
  },

  resetSearch(){
    this.store.queryParams= {
      page: 1,
      name: '',
      status: '',
      species: '',
    }
    this.store.pageInfo.counter = 1;
    this.$emit('startSearch');
  }
},

mounted() {
  /* console.log(); */
},
  
}
</script>

<template>
  <header>
    <div class="container text-center">
      <img :src="store.logo" alt="logo">
      <!-- <h1 class="p-4">{{ store.mainTitle }}</h1> -->
      <div class="my-3 d-md-flex">
        
        <!-- <label for="exampleDataList" class="form-label">Datalist example</label> -->
        <input
          v-model.trim="character"
          @keyup.enter="startSearch" 
          id="exampleDataList" 
          class="form-control my-3 me-2" 
          list="datalistOptions" 
          placeholder="Select Character" 
        >
        <datalist id="datalistOptions">
          <option
            v-for="(character, index) in this.store.characterList" 
            :key="index"
            :value="character"
          >
          
          </option>
        </datalist>

        <select 
          v-model="selected"
          id="exampleSelect"
          class="form-select my-3 me-2" 
          aria-label="Default select example"
        >
          <option value="">Select Status</option>
          <option>Alive</option>
          <option>Dead</option>
          <option>unknown</option>
        </select>

        <input
          v-model.trim="species"
          @keyup.enter="startSearch" 
          id="exampleDataListSpecies" 
          class="form-control my-3 me-2" 
          list="datalistOptionsSpecies" 
          placeholder="Select Species" 
        >
        <datalist id="datalistOptionsSpecies">
          <option
            v-for="(species, index) in this.store.speciesList" 
            :key="index"
            :value="species"
          >
          
          </option>
        </datalist>

        <div class="my-3 d-md-flex">
          <button @click="startSearch" type="button" class="btn btn-success mx-2">Search</button>
  
          <button @click="resetSearch" type="button" class="btn btn-danger mx-2">Reset</button>
        </div>

      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>

</style>