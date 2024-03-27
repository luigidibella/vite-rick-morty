<script>
import { store } from '../data/store'

export default{

data(){
  return{
    store,
    character: '',
  }
},

methods: {
  startSearch(){
    /* console.log('ricerca'); */
    this.store.queryParams= {
      page: 1,
      name: this.character,
    }
    this.$emit('startSearch')
  }
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

        <select class="form-select mx-2" aria-label="Default select example">
          <option selected>Select Status</option>
          <option value="1">Alive</option>
          <option value="2">Dead</option>
          <option value="3">Unknown</option>
        </select>

        <button type="button" class="btn btn-success mx-2">Search</button>

        <button type="button" class="btn btn-danger mx-2">Reset</button>

      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>

</style>