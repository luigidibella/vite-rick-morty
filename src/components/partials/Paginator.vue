<script>
import { store} from '../../data/store'

export default {
  data(){
    return{
      store,
    }
  },

  methods: {
    nextPage(isNext){
      isNext ? store.pageInfo.counter++ : store.pageInfo.counter--;
      store.queryParams.page = store.pageInfo.counter;
      /* console.log(store.queryParams); */
      this.$emit('prossimaPagina');
    }
  },
  
  mounted() {
    /* console.log(store.pageInfo.counter); */
  },

  created() {
  },

}
</script>

<template>
  <div class="text-center my-5">
    Pagina {{ store.pageInfo.counter }} di {{ store.pageInfo.totalPages }} - 
    <button @click="nextPage(false)" v-if="store.pageInfo.counter > 1" class="btn btn-success me-3">&#60;</button>
    <button @click="nextPage(true)" v-if="store.pageInfo.counter < store.pageInfo.totalPages" class="btn btn-success">&#62;</button>
  </div>
</template>


<style lang="scss" scoped>

</style>