<template>
  <div>
      <Header></Header>
      <el-row :gutter="24">
          <Information></Information>
          <el-col :span="12">
              <el-card style="border-radius:18px">
                  <div slot="header">
                      <div>
                                <el-link :underline="false"><h1>{{ article.title }}</h1></el-link>
                            </div>
                            <div>
                                <el-link icon="el-icon-date" class="link-item" :underline="false"><span>{{ article.publish_time }}</span></el-link><el-link icon="el-icon-menu" class="link-item" :underline="false"><span>{{ article.catename }}</span></el-link><el-link icon="el-icon-collection-tag" class="link-item" :underline="false"><span>标签</span></el-link>
                            </div>
                  </div>
                  <div v-html="article.htmlContent" >
                  </div>
              </el-card>
          </el-col>
          <RightSide></RightSide>
      </el-row>
  </div>
</template>

<script>
import { getRequest } from '../utils/api'
import Header from '../components/Header.vue'
import Information from '../components/Information.vue'
import RightSide from '../components/RightSide.vue'
export default {
    components: { Header, Information, RightSide },
    name: 'ArticleDetail',
    data () {
        return {
            article: {
                id: -1,
                title: '',
                mdContent: '',
                htmlContent: '',
                summary: '',
                catename: '',
                publish_time: ''
            }
        }
    },
    mounted: function () {
        var aid = this.$route.query.aid
        this.loadArticleDetail(aid)
    },
    methods: {
        loadArticleDetail: function (aid) {
            getRequest('/article/' + aid).then(resp => {
                if (resp) {
                    this.article.id = resp.data.data.id
                    this.article.title = resp.data.data.title
                    this.article.htmlContent = resp.data.data.htmlContent
                    this.article.catename = resp.data.data.catename
                    this.article.publish_time = resp.data.data.publish_time
                    this.article.mdContent = resp.data.data.mdContent
                    this.article.summary = resp.data.data.summary
                }
            })
        }
    }
}
</script>

<style>
    .link-item {
        margin-left: 10px;
    }
</style>
