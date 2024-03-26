<script>
import { store } from '../data/store'

export default{

data(){
  return{
    store,
  }
},
  
}
</script>

<template>
  <header>
    <div class="container col-4 text-center">
      <img :src="store.logo" alt="">
      <!-- <h1 class="p-4">{{ store.mainTitle }}</h1> -->
      <form class="d-flex justify-content-between mb-5">
        
        <input class="form-control mx-2" list="datalistOptions" id="exampleDataList" placeholder="Select Character"/>

        <select class="form-select mx-2" aria-label="Default select example">
          <option selected>Select Status</option>
          <option value="1">Alive</option>
          <option value="2">Dead</option>
          <option value="3">Unknown</option>
        </select>

        <button type="button" class="btn btn-success mx-2">Search</button>

        <button type="button" class="btn btn-danger mx-2">Reset</button>

      </form>
    </div>
  </header>
</template>

<style lang="scss" scoped>

</style>