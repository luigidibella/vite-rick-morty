<script>
import { store } from '../data/store'

export default{

data(){
  return{
    store,
    character: '',
    selected: '',
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
    this.store.queryParams.status = this.selected;
    this.store.pageInfo.counter = 1;
    this.$emit('startSearch');
    this.character = '';
    this.selected = '';
  },

  resetSearch(){
    this.store.queryParams= {
      page: 1,
      name: '',
      status: '',
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
    <div class="container col-5 text-center">
      <img :src="store.logo" alt="">
      <!-- <h1 class="p-4">{{ store.mainTitle }}</h1> -->
      <div class="d-flex justify-content-between mb-5">
        
        <!-- <label for="exampleDataList" class="form-label">Datalist example</label> -->
        <input
          v-model.trim="character"
          @keyup.enter="startSearch" 
          id="exampleDataList" 
          class="form-control" 
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
          class="form-select mx-2" 
          aria-label="Default select example"
        >
          <option value="">Select Status</option>
          <option>Alive</option>
          <option>Dead</option>
          <option>unknown</option>
        </select>

        <button @click="startSearch" type="button" class="btn btn-success mx-2">Search</button>

        <button @click="resetSearch" type="button" class="btn btn-danger mx-2">Reset</button>

      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>

</style>