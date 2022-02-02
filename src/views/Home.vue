<template>
    <div>
        <Header></Header>
        <el-row :gutter="24" >
            <div :style="{minHeight:minHeight+ 'px'}">
                <Information></Information>
                <el-col :span="12">
                    <div class="articleBox" v-for="article in articles" :key="article.id" :loading="loading">
                        <el-card style="width:100%;border-radius:18px;" >
                            <div slot="header" class="clearfix">
                                <div>
                                    <el-link @click="itemClick(article.id)" :underline="false"><h1>{{ article.title }}</h1></el-link>
                                </div>
                                <div>
                                    <el-link icon="el-icon-date" class="link-item" :underline="false"><span>{{ article.publish_time  | formatDate}}</span></el-link><el-link icon="el-icon-menu" class="link-item" :underline="false"><span>{{ article.catename }}</span></el-link><el-link icon="el-icon-collection-tag" class="link-item" :underline="false"><span>标签</span></el-link>
                                </div>
                            </div>
                            <div>
                                <p>{{ article.summary }}</p>
                                <el-button @click="itemClick(article.id)">查看更多</el-button>
                            </div>
                        </el-card>
                    </div>
                    <el-pagination
                        background
                        :page-size="pageSize"
                        layout="prev, pager, next"
                        :total="total"
                        @current-change="currentChange"
                        style="margin-left: 35%;">
                    </el-pagination>
                </el-col>
                <RightSide></RightSide>
            </div>
        </el-row>
        <div >
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import { postRequest, getRequest } from '../utils/api'
import Header from '../components/Header.vue'
import Information from '../components/Information.vue'
import RightSide from '../components/RightSide.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'Home',
    components: { Header, Information, RightSide, Footer },
    data () {
        return {
            total: -1,
            pageSize: 10,
            articles: [],
            currentPage: 1,
            loading: false,
            categories: [],
            minHeight: 0
        }
    },
    mounted: function () {
        this.loadArticles(this.currentPage, this.pageSize)
        this.minHeight = document.documentElement.clientHeight - 190
        var that = this
        window.onresize = function () {
            that.minHeight = document.documentElement.clientHeight - 190
        }
    },
    methods: {
        currentChange: function (currentPage) {
            this.currentPage = currentPage
            this.loadArticles(currentPage, this.pageSize)
        },
        loadArticles: function (pageNum, pageSize) {
            postRequest('/article/all', {
                pageNum: pageNum,
                pageSize: pageSize
            }).then(resp => {
                if (resp.data.code === 200) {
                    this.loading = true
                    console.log(resp.data.data.list)
                    this.articles = resp.data.data.list
                    this.total = resp.data.data.total
                }
            })
            this.loading = false
        },
        itemClick: function (aid) {
            this.$router.push({ path: '/articleDetail', query: { aid: aid } })
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
    .el-row {
        margin-bottom: 20px;
    }
    .articleBox {
        margin-bottom: 20px;
    }
    .link-item {
        margin-left: 10px;
    }
</style>
