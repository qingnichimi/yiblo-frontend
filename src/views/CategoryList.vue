<template>
    <el-container>
        <el-header><Header ></Header></el-header>
        <el-container>
            <el-aside style="width:210px"><Aside></Aside></el-aside>
            <el-main>
                <el-button type="primary" @click="deletCategory">批量删除</el-button>
                <el-table :data="tableData" @selection-change="handleSelectionChange" ref="multipleTable" height="250" style="width: 100%;">
                    <el-table-column type="selection"></el-table-column>
                    <el-table-column prop="id" label="id"></el-table-column>
                    <el-table-column prop="cateName" label="名称"></el-table-column>
                    <el-table-column prop="create_time" label="创建时间">
                        <template slot-scope="scope">{{ scope.row.create_time  | formatDateTime }}</template>
                    </el-table-column>
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
import { postRequest, deleteRequest } from '../utils/api'
import Aside from '../components/admin/Aside.vue'
import Header from '../components/admin/Header.vue'
export default {
    name: 'Category',
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
        this.getCategories(this.currentPage, this.pageSize)
    },
    methods: {
        getCategories: function (pageNum, pageSize) {
            postRequest('/category/all', {
                pageNum: pageNum,
                pageSize: pageSize
            }).then(resp => {
                if (resp.data.code === 200) {
                    this.tableData = resp.data.data.list
                    this.total = resp.data.data.total
                }
            })
        },
        currentChange: function (currentPage) {
            this.currentPage = currentPage
            this.getCategories(currentPage, this.pageSize)
        },
        deletCategory: function (multipleSelection) {
            multipleSelection = this.multipleSelection
            var cids = multipleSelection[0].id
            deleteRequest('/category/del/' + cids).then(resp => {
                if (resp.data.code === 200) {
                    this.getCategories(this.currentPage, this.pageSize)
                }
            })
        },
        handleSelectionChange: function (val) {
            this.multipleSelection = val
        },
        handleDelete: function (index, row) {
            this.tableData.splice(index)
            console.log(row)
            var cids = row.id
            this.total = this.total - 1
            deleteRequest('/category/del/' + cids).then(resp => {
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
