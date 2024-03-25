<script>
import MyCard from './partials/MyCard.vue';
import { store } from '../data/store'

export default{
components:{
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
    <div class="container py-5">
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