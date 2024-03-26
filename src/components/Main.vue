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

/* mounted(){
  console.log(this.store.cardList[0].image);
} */

}
</script>

<template>
  <main>
    <div class="container py-3">
      <div v-if="this.store.cardList.length === 0" class="d-flex justify-content-center align-items-center">
        <Loader />
      </div>
      <div class="row row-col-4">
        <MyCard 
        v-for="card in this.store.cardList"
        :key="card.id"
        :name="card.name"
        :image="card.image"
        :status="card.status"
        :species="card.species"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: #f6f6f6;
}

</style>