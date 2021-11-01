<template>
  <el-container>
      <el-header><Header ></Header></el-header>
      <el-container>
          <el-aside style="width:210px"><Aside></Aside></el-aside>
          <el-main>
          </el-main>
      </el-container>
  </el-container>
</template>

<script>
import Aside from '../components/admin/Aside.vue'
import Header from '../components/admin/Header.vue'
export default {
    name: 'AdminHome',
    components: { Aside, Header }
}
</script>

<style>

</style>
