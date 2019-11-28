<template>
  <div class="homePageConfiguratorBox">
    <div class="conBox">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="dataBox">
            <div>数据源（支持数字、数组、JSON、JSON数组）</div>
            <el-input
              @input="changeFun"
              @change="changeFun"
              ref="xxx"
              type="textarea"
              :rows="10"
              v-model="defaultText">
            </el-input>
            <div class="infoBox" v-if="dataSourceIsChecked">
              <i class="el-icon-success successInfo"></i>
              数据格式正确!
            </div>
            <div class="infoBox" v-else>
              <i class="el-icon-error errorInfo"></i>
              数据格式验证失败!
            </div>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="configBox">样式</div>
        </el-col>
      </el-row>
    </div>
    <div class="btnBar">
      <el-button size="mini" type="primary">保存</el-button>
      <el-button size="mini" type="primary">另存为场景</el-button>
      <el-button size="mini">重置</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homePage_configurator',
  props: {
  },
  data:function(){
    return{
      defaultText:'[{\n  "name":"Hallen",\n  "age":18\n},{\n  "name":"John",\n  "age":20\n}]',
      dataSource:undefined,
      dataSourceIsChecked:true,
    }
  },
  methods:{
    checkFun(data){
      try{
        this.dataSource = JSON.parse(data);
      }catch(e){
        this.dataSource = undefined;
        this.dataSourceIsChecked=false;
      }
    },
    changeFun(data){
      this.checkFun(data);
      if(this.dataSource){
        this.dataSourceIsChecked=true;
      }
    }
  },
  mounted(){

  }
}
</script>

<style scoped lang="scss">
.homePageConfiguratorBox{
  height:100%;
  position: relative;
  .conBox{
    height:calc(100% - 50px);;
    .dataBox{
      height:100%;
      border-right:solid 1px #555;
      padding-right: 20px;
      box-sizing: border-box;
    }
    .configBox{
      height:100%;
    }
    .infoBox{
      display: flex;
      align-items: center;
      margin-top:10px;
      .successInfo{
        font-size: 25px;
        color: forestgreen;
        margin-right:10px;
      }
      .errorInfo{
        font-size: 25px;
        color: firebrick;
        margin-right:10px;
      }
    }
  }
  .btnBar{
    position: absolute;
    bottom: -10px;
    width: 100%;
    height:40px;
    line-height: 40px;
    border-top:solid 1px #555;
    text-align: center;
  }
}

.el-row{
  height: 100%;
  .el-col{
    height: 100%;
  }
}
</style>

<style lang="scss">
.dataBox{
  .el-textarea{
    height: 60%;
    //这个样式的改变，一定要放到无scoped限定的样式中
    .el-textarea__inner{
      border:solid 1px #00baff;
      background: #333;
      color:#888;
      height: 100%;
    }
  }
}
</style>