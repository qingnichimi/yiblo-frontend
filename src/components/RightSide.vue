<template>
    <el-col :span="6" :pull="0.5">
        <div>
            <el-card style="width:100%">
                <div slot="header" class="clearfix">
                    分类
                </div>
                <div class="text item"  v-for="category in categories" :key="category.id">
                    <el-link @click="categoryItemClick(category.id)" :underline="false">{{ category.cateName }}</el-link>
                </div>
            </el-card>
        </div>
        <div>
            <el-card style="width:100%">
                <div slot="header" class="clearfix">
                    标签
                </div>
                <div class="text item">
                    没做
                </div>
            </el-card>
        </div>
    </el-col>
</template>

<script>
import { getRequest } from '../utils/api'
export default {
    name: 'RightSide',
    data () {
        return {
            categories: []
        }
    },
    mounted: function () {
        this.getCategories()
    },
    props: {
    },
    methods: {
        categoryItemClick: function (id) {
            console.log(id)
        },
        getCategories: function () {
            getRequest('/category/all').then(resp => {
                if (resp.data.code === 200) {
                    this.categories = resp.data.data
                    console.log(resp.data.data)
                }
            })
        }
    }
}
</script>

<style>
.el-card {
    margin-bottom: 20px;
}
</style>
