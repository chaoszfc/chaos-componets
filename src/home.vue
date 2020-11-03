<template>
  <div id="app">
    <h3>{{title}}</h3>
    <ul>
      <li @click="showUpload()">uploadShowStatus</li>
    </ul>
    <UploadFile ref="UploadFile"/>
  </div>
</template>
<script>
import UploadFile from '@/uploadFile/uploadFile'
export default {
  name:'app',
  components:{
    UploadFile
  },
  data() {
    return {
      title:'chaos组件'
    }
  },
  mounted() {

  },
  methods:{
    showUpload() {
      this.$refs.UploadFile.uploadShowStatus = true;
    }
  }
}
</script>