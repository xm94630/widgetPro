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
          <el-menu-item index="/homePage/configurator">
            <i class="el-icon-setting"></i>
            <span slot="title">默认配置器</span>
          </el-menu-item>
          <el-menu-item index="/homePage/widget">
            <i class="el-icon-video-camera"></i>
            <span slot="title">插件预览</span>
          </el-menu-item>
          <el-submenu index="/homePage">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>已保存配置器</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/homePage/widget">配置器A</el-menu-item>
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
    text-align: left;
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
