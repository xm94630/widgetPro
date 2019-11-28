<template>
  <div class="homePageConfiguratorBox">
    <div class="conBox">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="dataBox">数据源</div>
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
    }
  },
  methods:{
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
    }
    .configBox{
      height:100%;
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
