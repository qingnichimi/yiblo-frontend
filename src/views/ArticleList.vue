<template>
    <el-container>
        <el-header><Header ></Header></el-header>
        <el-container>
            <el-aside style="width:210px"><Aside></Aside></el-aside>
            <el-main>
                <el-table :data="tableData" height="250" style="width: 100%;">
                    <el-table-column prop="id" label="id"></el-table-column>
                    <el-table-column prop="title" label="标题"></el-table-column>
                    <el-table-column prop="category" label="分类"></el-table-column>
                    <el-table-column prop="author" label="作者"></el-table-column>
                    <el-table-column prop="publish_time" label="发布时间"></el-table-column>
                    <el-table-column prop="state" label="状态"></el-table-column>
                    <el-table-column  label="操作"></el-table-column>
                </el-table>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Aside from '../components/Aside.vue'
import Header from '../components/Header.vue'
export default {
    name: 'ArticleList',
    components: { Aside, Header },
    data () {
        return {
            tableData: [{
                id: '',
                title: '',
                category: '',
                author: '',
                publish_time: '',
                state: ''
            }]
        }
    }
}
</script>

<style>

</style>
