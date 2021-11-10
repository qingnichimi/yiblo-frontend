<template>
    <el-col :span="6" :push="0.5" class="hidden-sm-and-down">
        <div>
            <el-card style="width:100%;border-radius:18px;">
                <div>
                    <el-row >
                        <el-col >
                            <div><el-avatar :size="150" :src="avatarUrl" style="margin-left:30%"></el-avatar></div>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="24" >
                            <span style="margin-left:30%">TAOWEISHUZz</span>
                        </el-col>
                    </el-row>
                </div>
            </el-card>
        </div>
    </el-col>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
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
