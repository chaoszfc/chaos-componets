<template>
	<div id="app" v-show="uploadShowStatus">
		<input type="file" id="oFile" ref="inputfile" accept="image/*" @change="chooseImg()">
		<div class="img-show-area" >
			<div class="image-area">
				<div class="un-image" v-if="!uploadFile">
					<i class="h-line"></i>
					<i class="s-line"></i>
				</div>
				<img v-else :src="uploadFile" alt="" style="width:150px;height:150px">
			</div>
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
	.image-area{
		width:150px;
		height: 150px;
		position: relative;
		border:1px solid #000;
	}
	.h-line{
		position: absolute;
		width:2px;
		height: 100px;
		left:50%;
		top:50%;
		transform: translate(0,-50%);
		background: #000;
	}
	.s-line{
		width:100px;
		height: 2px;
		position: absolute;
		left:50%;
		top:50%;
		transform: translate(-50%,0);
		background: #000;
	}
	.upload-file-btn{
		display: block;
		margin-top:400px;
	}
</style>