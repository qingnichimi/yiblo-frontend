<template>
    <el-container>
        <el-header><Header ></Header></el-header>
        <el-container>
            <el-aside style="width:210px"><Aside></Aside></el-aside>
            <el-main>
                <el-button type="danger" @click="deleteArticles"  :disabled="this.multipleTable.size == 0">批量删除</el-button>
                <el-table :data="tableData" @selection-change="handleSelectionChange" ref="multipleTable" height="250" style="width: 100%;min-height: calc(100vh - 250px)">
                    <el-table-column type="selection"></el-table-column>
                    <el-table-column prop="id" label="id"></el-table-column>
                    <el-table-column prop="title" label="标题"></el-table-column>
                    <el-table-column prop="category" label="分类"></el-table-column>
                    <!-- <el-table-column prop="author" label="作者"></el-table-column> -->
                    <el-table-column prop="publish_time" label="发布时间">
                        <template slot-scope="scope">{{ scope.row.publish_time  | formatDateTime }}</template>
                    </el-table-column>
                    <el-table-column prop="state" label="状态"></el-table-column>
                    <el-table-column  label="操作">
                        <template slot-scope="scope">
                            <el-button type="danger" icon="el-icon-delete" circle @click="handleDelete(scope.$index,scope.row)"></el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                    background
                    :page-size="pageSize"
                    layout="prev, pager, next"
                    :total="total"
                    @current-change="currentChange"
                    style="margin-left: 35%;">
                </el-pagination>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import { postRequest, deleteRequest, putRequest } from '../utils/api'
import Aside from '../components/admin/Aside.vue'
import Header from '../components/admin/Header.vue'
export default {
    name: 'ArticleList',
    components: { Aside, Header },
    data () {
        return {
            tableData: [],
            pageSize: 10,
            total: -1,
            currentPage: 1,
            multipleTable: []
        }
    },
    mounted: function () {
        this.loadArticles(this.currentPage, this.pageSize)
    },
    methods: {
        loadArticles: function (pageNum, pageSize) {
            postRequest('/article/all', {
                pageNum: pageNum,
                pageSize: pageSize
            }).then(resp => {
                if (resp.data.code === 200) {
                    this.loading = true
                    this.tableData = resp.data.data.list
                    this.total = resp.data.data.total
                }
            })
            this.loading = false
        },
        currentChange: function (currentPage) {
            this.currentPage = currentPage
            this.loadArticles(currentPage, this.pageSize)
        },
        deleteArticles: function () {
            var aids = []
            this.multipleTable.forEach(item => {
                aids.push(item.id)
            })
            console.log(aids)
            putRequest('/article/del/', { aids: aids }).then(resp => {
                if (resp.data.code === 200) {
                    this.loading = true
                    console.log(resp.data.data.message)
                    this.loadArticles(this.currentPage, this.pageSize)
                }
            })
            this.loading = false
        },
        handleSelectionChange: function (val) {
            console.log(val)
            this.multipleTable = val
        },
        handleDelete: function (index, row) {
            this.tableData.splice(index)
            this.total = this.total - 1
            console.log(row)
            var aids = row.id
            deleteRequest('/article/del/' + aids).then(resp => {
                if (resp.data.code === 200) {
                    console.log(resp.data.data.message)
                }
            })
        }
    }
}
</script>

<style>

</style>
