<template>
  <div class="page">
    你好,{{aaa}},{{bbb}}
  </div>
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
.page{

}
</style>
