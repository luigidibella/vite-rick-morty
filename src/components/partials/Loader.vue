<script>

export default {

}
</script>

<template>
    <div class="image-wrapper"></div>
</template>


<style lang="scss" scoped>
.col {
  background-color: #f6f6f6;
  /* border: 1px solid greenyellow; */
  /* background-color: greenyellow; */
}

.image-wrapper {
  width: 100px;
  height: 100px;
  border: 0;
  border-radius: 50%;
  background-image: url('https://www.seekpng.com/png/detail/4-44144_rick-and-morty-portal-png.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #f6f6f6;
  z-index: 1; 
  animation: rotateBackground 1s linear infinite;
  filter:hue-rotate(100deg);
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
