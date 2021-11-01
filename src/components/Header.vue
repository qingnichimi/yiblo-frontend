<template>
    <div>
        <el-row type="flex" >
            <el-col :span="24">
                <el-menu mode="horizontal">
                    <el-menu-item index="0" style="margin-right: 400px"><img src="../assets/logo.png" style="height:50px">我的博客</el-menu-item>
                    <el-menu-item index="1">主页</el-menu-item>
                    <el-menu-item index="2">归档</el-menu-item>
                    <el-menu-item index="3">关于我</el-menu-item>
                    <el-menu-item index="4">消息中心</el-menu-item>
                    <el-menu-item index="5">
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
