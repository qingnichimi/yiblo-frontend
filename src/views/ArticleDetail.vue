<template>
  <div>
      <Header></Header>
      <el-row :gutter="24">
          <Information></Information>
          <el-col :span="12">
              <el-card>
                  <div slot="header">
                      <h2>{{ article.title }}</h2>
                      <span>{{ article.publish_time }}</span>|<span>{{ article.catename }}</span>|<span>标签</span>
                  </div>
                  <div style="text-align:left">
                      {{ article.htmlContent }}
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
        this.loadArticleDetail(1)
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
                    console.log(resp.data.data.title)
                }
            })
        }
    }
}
</script>

<style>

</style>
