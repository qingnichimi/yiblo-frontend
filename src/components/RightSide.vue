<template>
    <el-col :span="6">
        <div>
            <el-card style="width:100%">
                <div slot="header" class="clearfix">
                    分类
                </div>
                <div class="text item">
                </div>
            </el-card>
        </div>
        <div>
            <el-card style="width:100%">
                <div slot="header" class="clearfix">
                    标签
                </div>
                <div class="text item">
                </div>
            </el-card>
        </div>
    </el-col>
</template>

<script>
export default {
    name: 'RightSide',
    data () {
        return {
        }
    }
}
</script>

<style>
.el-card {
    margin-bottom: 20px;
}
</style>
