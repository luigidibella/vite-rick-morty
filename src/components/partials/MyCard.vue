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
  <div class="col my-flex-column-center">
    <div class="image-wrapper"></div>
    <img :src="image" :alt="name">
      
    <div class="info my-4 my-flex-column-center">
      <h5 class="text-uppercase ">{{ name }}</h5>
      <h5>{{ status }}</h5>
      <h5>{{ species }}</h5>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.my-flex-column-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.col {
  position: relative;
  background-color: #f6f6f6;
  /* border: 1px solid greenyellow; */
  /* background-color: greenyellow; */
}

img {
  width: 306px;
  height: 306px;
  border: 3px solid black;
  border-radius: 50%;
  position: relative;
  z-index: 2; 
  transition: opacity 1s, transform 1s; 
}

img:hover {
  opacity: 0;
  transform: rotate(360deg);
  border: 3px solid white;
}

.image-wrapper {
  width: 300px;
  height: 300px;
  top: 0;
  /* left: 5%; */
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
  width: 100%;
  height: 150px;
  max-width: 306px;
  border: 3px solid black;
  background-color: #0bafc7;
  &:hover{
    box-shadow: 0px 0px 5px 5px #c0d960 inset;
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
