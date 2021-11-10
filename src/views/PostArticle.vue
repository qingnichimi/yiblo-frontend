<template>
  <el-container>
      <el-header><Header ></Header></el-header>
      <el-container>
          <el-aside style="width:210px"><Aside></Aside></el-aside>
          <el-main>
              <div>
                  <el-select v-model="value" @change="selectChange"  filterable placeholder="请选择分类">
                    <el-option
                        v-for="category in this.categorys"
                        :key="category.id"
                        :label="category.cateName"
                        :value="category.id">
                    </el-option>
                </el-select>
                <el-input v-model="article.title" placeholder="请输入标题" style="width:500px"></el-input>
              </div>
              <div>
                <el-input
                    type="text"
                    placeholder="请输入摘要"
                    v-model="article.summary"
                    maxlength="50"
                    show-word-limit
                    style="width:500px"
                    >
                </el-input>
              </div>
              <div style="height:70vh">
                  <mavon-editor style="height: 100%;width: 100%;" ref=md v-model="article.mdContent" @imgAdd="$imgAdd" @imgDel="$imgDel"></mavon-editor>
              </div>
              <div style="margin-top: 20px">
                  <el-button type="primary" icon="el-icon-document-add" @click="postArticle">发布</el-button>
                  <el-button type="primary" icon="el-icon-document-checked">保存</el-button>
                  <el-button type="primary" icon="el-icon-document-remove">取消</el-button>
              </div>
          </el-main>
      </el-container>
  </el-container>
</template>

<script>
import { postRequest, getRequest } from '../utils/api'
import Aside from '../components/admin/Aside.vue'
import Header from '../components/admin/Header.vue'
export default {
    name: 'PostArticle',
    components: { Aside, Header },
    data () {
        return {
            article: {
                id: -1,
                title: '',
                mdContent: '',
                htmlContent: '',
                cateName: '',
                cid: -1,
                summary: ''
            },
            categorys: [],
            value: ''
        }
    },
    mounted: function () {
        this.getAllCategory()
    },
    methods: {
        postArticle: function () {
            this.article.htmlContent = this.$refs.md.d_render
            console.log(this.article)
            postRequest('/article/add/', {
                id: this.article.id,
                title: this.article.title,
                mdContent: this.article.mdContent,
                htmlContent: this.article.htmlContent,
                state: 1,
                cateName: this.article.cateName,
                cid: this.article.cid,
                summary: this.article.summary
            }).then(resp => {
                if (resp.data.code === 200) {
                    console.log(resp.data.message)
                }
            })
        },
        getAllCategory: function () {
            getRequest('/category/all', {
            }).then(resp => {
                if (resp.data.code === 200) {
                    this.categorys = resp.data.data
                }
            })
        },
        selectChange: function (key, val) {
        }
    }
}
</script>

<style>

</style>
