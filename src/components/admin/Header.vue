<template>
  <div>
      <el-menu mode="horizontal">
          <el-row>
              <el-col span="4">
                  <img src="../../assets/logo.png" style="height:50px">
              </el-col>
              <el-col span="2" push="18">
                  <el-dropdown >
                      <span class="el-dropdown-link">
                          <i class="el-icon-user-solid"></i>用户中心
                      </span>
                      <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>1</el-dropdown-item>
                          <el-dropdown-item>1</el-dropdown-item>
                          <el-dropdown-item>1</el-dropdown-item>
                      </el-dropdown-menu>
                  </el-dropdown>
              </el-col>
          </el-row>
      </el-menu>
  </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>

</style>
