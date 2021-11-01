<template>
  <div>
      <Header></Header>
      <el-row :gutter="24">
          <Information></Information>
          <el-col :span="12">
              <el-timeline v-for="archive in archiveList" :key="archive.id">
                  <el-timeline-item :timestamp="archive.publish_time" placement="top" >
                      <el-card style="height:100px">
                              <h2 style="height:20px">{{ archive.title }}</h2>
                          <span>{{ archive.publish_time }}</span>|<span>{{ archive.catename }}</span>|<span>标签</span>
                      </el-card>
                  </el-timeline-item>
              </el-timeline>
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
import Header from '../components/Header.vue'
import Information from '../components/Information.vue'
import RightSide from '../components/RightSide.vue'
import { postRequest } from '../utils/api'
export default {
    components: { Header, Information, RightSide },
    name: 'Archive',
    data () {
        return {
            archiveList: [],
            pageNum: 1,
            pageSize: 10,
            total: -1
        }
    },
    mounted: function () {
        this.loadArchive(this.pageNum, this.pageSize)
    },
    methods: {
        loadArchive: function (pageNum, pageSize) {
            postRequest('/article/all', {
                pageNum: pageNum,
                pageSize: pageSize
            }).then(resp => {
                if (resp.data.code === 200) {
                    console.log(resp.data.data.list)
                    this.archiveList = resp.data.data.list
                    this.total = resp.data.data.total
                }
            })
        },
        currentChange: function (pageNum) {
            this.pageNum = pageNum
            this.loadArchive(pageNum, this.pageSize)
        }
    }
}
</script>

<style>

</style>
