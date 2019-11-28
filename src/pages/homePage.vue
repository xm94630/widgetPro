<template>
  <el-container>
    <el-header>插件生成系统</el-header>
    <el-container>

      <el-aside width="200px">
        <el-menu
          router
          :default-active = "$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          
          background-color="#333"
          text-color="#999"
          active-text-color="#409EFF"
        >
          <el-submenu index="/homePage">
            <template slot="title">
              <i class="el-icon-view"></i>
              <span>插件开发</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/homePage/configurator">默认配置器</el-menu-item>
              <el-menu-item index="/homePage/widget">插件预览</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="/homePage">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span>其他</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/homePage/course">教程</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <router-view/>
        </el-main>
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
    handleOpen() {},
    handleClose() {}
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
