<template>
<el-container>
  <el-header>插件生成系统</el-header>
  <el-container>
    <el-aside width="200px">工具栏</el-aside>
    <el-container>
      <el-main>主视图</el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </el-container>
</el-container>
</template>

<script>
//import zoomBox from '@/src/components/zoomBox.vue';
export default {
  name: 'begin',
  components: {
  },
  props: {
    aaa: Number,
  },
  data:function(){
    return{
      bbb:true,
    }
  },
  methods:{
  },
  mounted(){
  } 
}
</script>


<style scoped lang="scss">
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
