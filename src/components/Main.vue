<script>
import Loader from './partials/Loader.vue'
import MyCard from './partials/MyCard.vue';
import { store } from '../data/store'

export default{
components:{
  Loader,
  MyCard,
},

data(){
  return{
    store,
  }
},

methods: {
  resetApi(){
    this.store.queryParams= {
      page: 1,
      
    }
    this.$emit('ricarica')
  }
},

/* mounted(){
  console.log(this.store.cardList[0].image);
} */

}
</script>

<template>
  <main>
    <div class="text-center container py-3">
      <!-- SPAZIO -->
      <div 
        v-if="this.store.cardList.length > 0" 
        class="row row-col-4"
      >
        <MyCard 
        v-for="card in this.store.cardList"
        :key="card.id"
        :name="card.name"
        :image="card.image"
        :status="card.status"
        :species="card.species"
        />
      </div>
      <!-- SPAZIO -->
      <div
        v-else-if="this.store.errorString.length > 0" 
        class="text-center"
      >
        <h4 class="my-2">{{ this.store.errorString }}</h4>
        <button @click="resetApi" class="btn btn-success my-2">Ricarica tutti i Character</button>
      </div>
      <!-- SPAZIO -->
      <div 
        v-else
        class="d-flex justify-content-center align-items-center"
      >
        <Loader />
      </div>
      <!-- SPAZIO -->
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: #f6f6f6;
}

</style>