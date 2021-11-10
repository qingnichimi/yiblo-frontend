<template>
  <div>
      <Header></Header>
      <el-row :gutter="24">
          <Information></Information>
          <el-col :span="12">
              <el-timeline>
                  <el-timeline-item :timestamp="archive.publish_time | formatDateTime" placement="top" v-for="archive in archiveList" :key="archive.id">
                      <el-card style="height:130px;border-radius:18px">
                          <div>
                              <el-link @click="itemClick(archive.id)" :underline="false"><h2>{{ archive.title }}</h2></el-link>
                          </div>
                          <el-link icon="el-icon-menu" class="link-item" :underline="false"><span>{{ archive.catename }}</span></el-link><el-link icon="el-icon-collection-tag" class="link-item" :underline="false"><span>标签</span></el-link>
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
        },
        itemClick: function (aid) {
            this.$router.push({ path: '/articleDetail', query: { aid: aid } })
        }
    }
}
</script>

<style>

</style>
