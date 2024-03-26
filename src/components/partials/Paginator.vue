<script>
import { store} from '../../data/store'

export default {
  data(){
    return{
      store,
    }
  },

  methods: {
    nextPage(){
      store.pageInfo.counter++;
      store.queryParams.page = store.pageInfo.counter;
      console.log(store.queryParams);
    }
  },

  mounted() {
  },

  created() {
  },

}
</script>

<template>
  <div class="text-center my-5">
    Pagina {{ store.pageInfo.counter + 1 }} di {{ store.pageInfo.totalPages }} - 
    <button v-if="store.pageInfo.counter > 0" class="btn btn-success mx-3">&#60;</button>
    <button @click="nextPage" v-if="store.pageInfo.counter + 1 < store.pageInfo.totalPages" class="btn btn-success">&#62;</button>
  </div>
</template>


<style lang="scss" scoped>

</style>