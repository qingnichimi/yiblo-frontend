<template>
    <div>
        <el-menu class="el-menu-vertical-demo">
            <el-submenu index="1" @open="handleOpen" @close="handleClose">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">博客管理</span>
                </template>
                <el-menu-item index="1-1">
                    博客列表
                </el-menu-item>
                <el-menu-item index="1-2">
                    写博客
                </el-menu-item>
                <el-menu-item index="1-3">
                    草稿箱
                </el-menu-item>
            </el-submenu>
            <el-menu-item>
                <i class="el-icon-menu"></i>
                <span slot="title" index="2">分类管理</span>
            </el-menu-item>
            <el-menu-item>
                <i class="el-icon-menu"></i>
                <span slot="title" index="3">标签管理</span>
            </el-menu-item>
            <el-menu-item>
                <i class="el-icon-menu"></i>
                <span slot="title" index="4"></span>
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
