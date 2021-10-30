<template>
    <el-container>
        <el-header><Header ></Header></el-header>
        <el-container>
            <el-aside style="width:210px"><Aside></Aside></el-aside>
            <el-main>
                <el-table :data="tableData" height="250" style="width: 100%;">
                    <el-table-column prop="id" label="id"></el-table-column>
                    <el-table-column prop="catename" label="名称"></el-table-column>
                    <el-table-column prop="create_time" label="创建时间"></el-table-column>
                    <el-table-column  label="操作"></el-table-column>
                </el-table>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Aside from '../components/admin/Aside.vue'
import Header from '../components/admin/Header.vue'
export default {
    name: 'Category',
    components: { Aside, Header },
    data () {
        return {
            tableData: []
        }
    }
}
</script>

<style>

</style>
