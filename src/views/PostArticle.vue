<template>
  <el-container>
      <el-header><Header ></Header></el-header>
      <el-container>
          <el-aside style="width:210px"><Aside></Aside></el-aside>
          <el-main>
                <el-select v-model="value" filterable placeholder="请选择分类">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <el-input v-model="input" placeholder="请输入标题" style="width:500px"></el-input>
              <div style="height:70vh">
                  <mavon-editor style="height: 100%;width: 100%;" ref=md ></mavon-editor>
              </div>
              <div style="margin-top: 20px">
                  <el-button type="primary" icon="el-icon-document-add">发布</el-button>
                  <el-button type="primary" icon="el-icon-document-checked">保存</el-button>
                  <el-button type="primary" icon="el-icon-document-remove">取消</el-button>
              </div>
          </el-main>
      </el-container>
  </el-container>
</template>

<script>
import Aside from '../components/admin/Aside.vue'
import Header from '../components/admin/Header.vue'
export default {
    name: 'PostArticle',
    components: { Aside, Header }
}
</script>

<style>

</style>
