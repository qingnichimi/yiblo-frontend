<template>
    <el-col :span="6">
        <div>
            <el-card style="width:100%; ">
                <div>
                    <el-row >
                        <el-col >
                            <div><el-avatar :size="150" :src="avatarUrl" style="margin-left:120px"></el-avatar></div>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="12" >
                            <span style="margin-left:120px">TAOWEISHUZz</span>
                        </el-col>
                    </el-row>
                </div>
            </el-card>
        </div>
    </el-col>
</template>

<script>
export default {
    name: 'Information',
    data () {
        return {
            avatarUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
        }
    }
}
</script>

<style>

</style>
