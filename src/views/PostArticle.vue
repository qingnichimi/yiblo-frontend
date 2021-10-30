<template>
  <el-container>
      <el-header><Header ></Header></el-header>
      <el-container>
          <el-aside style="width:210px"><Aside></Aside></el-aside>
          <el-main>
              <mavon-editor style="height: 100%;width: 100%;" ref=md ></mavon-editor>
          </el-main>
      </el-container>
  </el-container>
</template>

<script>
import Aside from '../components/Aside.vue'
import Header from '../components/Header.vue'
export default {
    name: 'PostArticle',
    components: { Aside, Header }
}
</script>

<style>

</style>
