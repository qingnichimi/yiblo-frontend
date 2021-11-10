<template>
    <div>
        <el-menu class="el-menu-vertical-demo" style="min-height: calc(100vh - 60px)">
            <el-submenu index="1" @open="handleOpen" @close="handleClose">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">博客管理</span>
                </template>
                <el-menu-item index="1-1">
                    <el-link :underline="false" href="/admin/articleList" >博客列表</el-link>
                </el-menu-item>
                <el-menu-item index="1-2">
                    <el-link :underline="false" href="/admin/postArticle" >写博客</el-link>
                </el-menu-item>
                <el-menu-item index="1-3">
                    <el-link :underline="false" href="" >草稿箱</el-link>
                </el-menu-item>
            </el-submenu>
            <el-menu-item>
                <i class="el-icon-menu"></i>
                <span slot="title" index="2"><el-link :underline="false" href="/admin/categoryList" >分类管理</el-link></span>
            </el-menu-item>
            <el-menu-item>
                <i class="el-icon-menu"></i>
                <span slot="title" index="3">标签管理</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'Aside',
    data () {
        return {
        }
    },
    methods: {
        handleOpen (key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose (key, keyPath) {
            console.log(key, keyPath)
      }
    }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
