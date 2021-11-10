<template>
    <div>
        <el-row type="flex" >
            <el-col :span="24">
                <el-menu mode="horizontal">
                    <el-menu-item index="0" style="margin-right: 15%"><img src="../assets/logo.png" style="height:50px">我的博客</el-menu-item>
                    <el-menu-item index="1"><el-link type="primary" href="/" :underline="false">主页</el-link></el-menu-item>
                    <el-menu-item index="2"><el-link type="primary" href="/archive" :underline="false">归档</el-link></el-menu-item>
                    <el-menu-item index="3"><el-link type="primary" :underline="false">关于我</el-link></el-menu-item>
                    <el-menu-item index="4">
                        <el-input
                            placeholder="请输入内容"
                            v-model="inputSearch"
                            style="width: 400px;">
                            <i slot="prefix" class="el-input__icon el-icon-search"></i>
                        </el-input>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
            inputSearch: ''
        }
    }
}
</script>

<style>

</style>
