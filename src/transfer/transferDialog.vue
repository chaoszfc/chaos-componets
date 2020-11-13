<template>
  <div id="app">
    <!-- planA -->
    <div class="left-choose">
      <div class="un-choose" 
        v-for="(item, index) in operateList" 
        :key=index 
        @click="chooseToright(index)"
      >
        <div class="radio-box" v-if="item.status === 'unchoose'">
          <a  class="un-box"></a>
          {{item.name}}
        </div>
        <div class="radio-box" v-else-if="item.status === 'choose'">
          <a  class="choose-box"></a>
          {{item.name}}
        </div>
      </div>
    </div>
    <div class="transfer-area">
      <a class="transfer-btn" @click="transferToRight">transfer-right</a>
      <a class="transfer-btn" @click="transferToLeft">transfer-left</a>
    </div>
    <div class="right-choose">
      <div class="un-choose" 
        v-for="(item, index) in rightList" 
        :key=index 
        @click="chooseToLeft(index)"
        >
          <div class="radio-box" v-if="item.status === 'unchoose'">
            <a  class="un-box"></a>
            {{item.name}}
          </div>
          <div class="radio-box" v-else-if="item.status === 'choose'">
            <a  class="choose-box"></a>
            {{item.name}}
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      operateList: [
        {
          id:0,
          name:'test1',
          status:'unchoose'
        },{
          id:1,
          name:'test2',
          status:'unchoose'
        },{
          id:2,
          name:'test3',
          status:'unchoose'
        },{
          id:3,
          name:'test4',
          status:'unchoose'
        }
      ],
      leftList:[],
      rightList:[],
      beChooseList:[],
      operateRightList:[]
    }
  },
  created() {
    // this.leftList = this.operateList.slice(0)
    console.log(this.leftList);
  },
  watch: {
    
  },
  computed: {
  },
  methods: {
    chooseToright(index) {
      console.log(index);
      console.log(this.operateList[index].status);
      //选中的时候修改状态
      if(this.operateList[index].status === 'unchoose') {
        this.operateList[index].status = 'choose'
      }else if(this.operateList[index].status === 'choose') {
        this.operateList[index].status = 'unchoose'
      }
      this.leftList = $.extend(true,[],this.operateList)
      //存储被选中的数组
      // this.beChooseList.push( this.operateList[index] )

    },
    chooseToLeft(index) {
      if(this.rightList[index].status === 'unchoose') {
        this.rightList[index].status = 'choose'
      }else if(this.rightList[index].status === 'choose') {
        this.rightList[index].status = 'unchoose'
      }
      this.operateRightList = $.extend(true,[],this.rightList)
    },
    transferToRight() {
      //  将选中的拼接成完整数组传递到右边
      //  处理右边数组
      // console.log(this.leftList);
      this.rightList = this.rightList.concat(this.leftList.filter( item => item.status === 'choose' ))
      this.rightList.forEach((item) => {
        item.status = 'unchoose'
      })
      this.operateList = this.operateList.filter( item => item.status === 'unchoose')

      // 点击右边部分存在问题

    },
    transferToLeft(){
      // reduce去重
      // 如果左边存在了已经穿梭过去的数据，则在
      let reduceArr;
      reduceArr = 
      this.operateList = this.operateList.concat(this.operateRightList.filter( item => item.status === 'choose' ))
      this.operateList.forEach((item) => {
        item.status = 'unchoose'
      })
      this.rightList = this.rightList.filter( item => item.status === 'unchoose')

      console.log(this.operateList);
    }
  }
}
</script>
<style lang="css" scoped>
  .left-choose, .right-choose {
    width:300px;
    height: 200px;
    float: left;
    border:1px solid #ccc;
  }
  .right-choose {
    margin-left:50px;
  }
  .un-box {
    display: inline-block;
    width:10px;
    height: 10px;
    border:1px solid #000;
  }
  .choose-box{
    display: inline-block;
    width:10px;
    height: 10px;
    background: skyblue;
  }
  .transfer-area{
    float: left;
    margin-top:20px;
    margin-left:50px;
    width:200px;
  }
  .transfer-btn{
    display: block;
    width:150px;
    border:1px solid #ccc;
    border-radius: 20px;
    margin-bottom: 20px;
  }
</style>