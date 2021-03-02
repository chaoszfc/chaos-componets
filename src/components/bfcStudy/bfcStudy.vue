<template>
  <div id="app">
      <div class="bfc-two">
        <div class="column"></div>
        <div class="column"></div>
      </div>
      <div class="bfc-three">
        <div class="column2"></div>
        <div class="column2"></div>
        <div class="column2"></div>
      </div>
  </div>
</template>
<script>
export default {
}
</script>
<style>
.bfc-three, .bfc-two{
  display: block;
}
.column:nth-of-type(1){
    float:left;
    width:100px;
    height:200px;
    background-color:red;
}
.column:nth-of-type(2){
    overflow:hidden;
    height:200px;
    background-color:purple;
}
.column2:nth-of-type(1){
    float:left;
    width:100px;
    height:200px;
    background-color:yellow;
}
.column2:nth-of-type(3){
    overflow:hidden;
    height:200px;
    background-color:green;
}
.column2:nth-of-type(2){
    float:right;
    width:100px;
    height:200px;
    background-color:yellow;
}
</style>