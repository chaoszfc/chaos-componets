<template>
	<div id="app" v-show="uploadShowStatus">
		<input type="file" id="oFile" ref="inputfile" accept="image/*" @change="chooseImg()">
		<div class="img-show-area" >
			<div class="un-image"></div>
			<img v-if="uploadFile" :src="uploadFile" alt="" style="width:300px;height:300px">
		</div>
		<a @click="uploadImg" class="upload-file-btn">上传图片</a>
	</div>
</template>
<script>
export default {
	name:'app',
	data:function(){
		return{
			uploadShowStatus:true,
			uploadFile:''
		}
	},
	mounted(){
		console.log(222);
	},
	methods:{
		chooseImg(e) {
			let reader = new FileReader();
			let file = $("#oFile")[0].files[0];
			var imgBase64Url;
			let self = this;
			console.log(file);
			// let inputDOM = this.$refs.inputfile;
			if(file){
				imgBase64Url = reader.readAsDataURL(file)
				// console.log(imgBase64Url);
				reader.onload = function(){//完成后this.result为二进制流
					// console.log(this.result)
					let result = this.result
					self.uploadFile = result
					console.log(result)
					// self.$set(, result)
					//将预览图生成在指定区域
				}
			}
		},
		uploadImg() {

		}
	}
}
</script>
<style lang="css" scoped>
	.un-image{

	}
	.upload-file-btn{
		display: block;
		margin-top:400px;
	}
</style>