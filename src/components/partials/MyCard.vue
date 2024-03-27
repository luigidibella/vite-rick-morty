<script>
import { store } from '../../data/store';

export default {
  props: {
    name: String,
    image: String,
    status: String,
    species: String,
  },

  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <div class="col text-center">
    <div class="image-wrapper"></div>
    <img :src="image" :alt="name">
      
    <div class="info my-4">
      <h3>{{ name }}</h3>
      <h5>{{ status }}</h5>
      <h5>{{ species }}</h5>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.col {
  position: relative;
  background-color: #f6f6f6;
  /* border: 1px solid greenyellow; */
  /* background-color: greenyellow; */
}

img {
  min-width: 306px;
  min-height: 306px;
  border: 3px solid black;
  border-radius: 50%;
  position: relative;
  z-index: 2; 
  transition: opacity 1s, transform 1s; 
}

img:hover {
  opacity: 0;
  transform: rotate(360deg);
}

.image-wrapper {
  width: 300px;
  height: 300px;
  top: 0;
  left: 5%;
  position: absolute;
  border: 0;
  border-radius: 50%;
  background-image: url('https://www.seekpng.com/png/detail/4-44144_rick-and-morty-portal-png.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #f6f6f6;
  z-index: 1; 
  animation: rotateBackground 1s linear infinite;
}

.info {
  height: 150px;
  border: 3px solid black;
  background-color: #0bafc7;
  &:hover{
    border: 3px solid #c0d960;
    color: #c0d960;
  }
}

@keyframes rotateBackground {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
