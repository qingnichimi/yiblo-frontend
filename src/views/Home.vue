<template>
    <div>
        <Header></Header>
        <el-row :gutter="24">
            <Information></Information>
            <el-col :span="12">
                <div class="articleBox" v-for="article in articles" :key="article.id" :loading="loading">
                    <el-card style="width:100%" >
                        <div slot="header" class="clearfix">
                            <span>{{ article.title }}</span>
                            <span>{{ article.catename }}</span>
                            <!-- <span>{{ article.tags }}</span> -->
                        </div>
                        <div class="text item">
                            <p>{{ article.summary }}</p>
                            <el-button>查看更多</el-button>
                        </div>
                    </el-card>
                </div>
                <el-pagination
                    background
                    :page-size="pageSize"
                    layout="prev, pager, next"
                    :total="total"
                    @current-change="currentChange"
                    style="margin-left: 350px;">
                </el-pagination>
            </el-col>
            <RightSide></RightSide>
        </el-row>
    </div>
</template>

<script>
import { postRequest } from '../utils/api'
import Header from '../components/Header.vue'
import Information from '../components/Information.vue'
import RightSide from '../components/RightSide.vue'
export default {
    name: 'Home',
    components: { Header, Information, RightSide },
    data () {
        return {
            total: -1,
            pageSize: 10,
            articles: [],
            currentPage: 1,
            loading: false
        }
    },
    mounted: function () {
        this.loadArticles(this.currentPage, this.pageSize)
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
</style>
