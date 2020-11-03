<template>
	<div id="app" v-show="uploadShowStatus">
		<input type="file" id="oFile" ref="inputfile" accept="image/*" @change="chooseImg()">
		<div class="img-show-area" style="width:300px;height:300px">
		</div>
	</div>
</template>
<script>
export default {
	name:'app',
	data:function(){
		return{
			uploadShowStatus:true
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
			console.log(file);
			// let inputDOM = this.$refs.inputfile;
			if(file){
				imgBase64Url = reader.readAsDataURL(file)
				console.log(imgBase64Url);
				reader.onload = function(){//完成后this.result为二进制流
					console.log(this.result)
				}
			}
		}
	}
}
</script>