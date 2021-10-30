<template>
    <div>
        <Header></Header>
        <el-row type="flex" justify="center" >
            <el-col :span="6">
                <div>
                    <el-card style="width:300px">
                        <div class="text item">
                            <el-row type="flex" justify="center">
                                <el-col >
                                    <div><el-avatar :size="150" :src="circleUrl" style="margin-left:50px"></el-avatar></div>
                                </el-col>
                            </el-row>
                            <el-row type="flex" justify="center">
                                <el-col :span="12">
                                    TAOWEISHUZz
                                </el-col>
                            </el-row>
                            <el-row>

                            </el-row>
                        </div>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="articleBox">
                    <el-card style="width:700px">
                        <div slot="header" class="clearfix">
                            <span>文章标题</span>
                            <span>分类</span>
                            <span>标签</span>
                        </div>
                        <div class="text item">
                            <p>文章摘要</p>
                            <el-button>查看更多</el-button>
                        </div>
                    </el-card>
                </div>
                <div class="articleBox">
                    <el-card style="width:700px">
                        <div slot="header" class="clearfix">
                            <span>文章标题</span>
                            <span>分类</span>
                            <span>标签</span>
                        </div>
                        <div class="text item">
                            <p>文章摘要</p>
                            <el-button>查看更多</el-button>
                        </div>
                    </el-card>
                </div>
                <div class="articleBox">
                    <el-card style="width:700px">
                        <div slot="header" class="clearfix">
                            <span>文章标题</span>
                            <span>分类</span>
                            <span>标签</span>
                        </div>
                        <div class="text item">
                            <p>文章摘要</p>
                            <el-button>查看更多</el-button>
                        </div>
                    </el-card>
                </div>
                <div class="articleBox">
                    <el-card style="width:700px">
                        <div slot="header" class="clearfix">
                            <span>文章标题</span>
                            <span>分类</span>
                            <span>标签</span>
                        </div>
                        <div class="text item">
                            <p>文章摘要</p>
                            <el-button>查看更多</el-button>
                        </div>
                    </el-card>
                </div>
                <div class="articleBox">
                    <el-card style="width:700px">
                        <div slot="header" class="clearfix">
                            <span>文章标题</span>
                            <span>分类</span>
                            <span>标签</span>
                        </div>
                        <div class="text item">
                            <p>文章摘要</p>
                            <el-button>查看更多</el-button>
                        </div>
                    </el-card>
                </div>
                <div class="articleBox">
                    <el-card style="width:700px">
                        <div slot="header" class="clearfix">
                            <span>文章标题</span>
                            <span>分类</span>
                            <span>标签</span>
                        </div>
                        <div class="text item">
                            <p>文章摘要</p>
                            <el-button>查看更多</el-button>
                        </div>
                    </el-card>
                </div>
                <div class="articleBox">
                    <el-card style="width:700px">
                        <div slot="header" class="clearfix">
                            <span>文章标题</span>
                            <span>分类</span>
                            <span>标签</span>
                        </div>
                        <div class="text item">
                            <p>文章摘要</p>
                            <el-button>查看更多</el-button>
                        </div>
                    </el-card>
                </div>
                <div class="articleBox">
                    <el-card style="width:700px">
                        <div slot="header" class="clearfix">
                            <span>文章标题</span>
                            <span>分类</span>
                            <span>标签</span>
                        </div>
                        <div class="text item">
                            <p>文章摘要</p>
                            <el-button>查看更多</el-button>
                        </div>
                    </el-card>
                </div>
                <div class="articleBox">
                    <el-card style="width:700px">
                        <div slot="header" class="clearfix">
                            <span>文章标题</span>
                            <span>分类</span>
                            <span>标签</span>
                        </div>
                        <div class="text item">
                            <p>文章摘要</p>
                            <el-button>查看更多</el-button>
                        </div>
                    </el-card>
                </div>
                <div class="articleBox">
                    <el-card style="width:700px">
                        <div slot="header" class="clearfix">
                            <span>文章标题</span>
                            <span>分类</span>
                            <span>标签</span>
                        </div>
                        <div class="text item">
                            <p>文章摘要</p>
                            <el-button>查看更多</el-button>
                        </div>
                    </el-card>
                </div>
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="100"
                    style="margin-left: 150px;">
                </el-pagination>
            </el-col>
            <el-col :span="6">
                <div>
                    <el-card style="width:300px">
                        <div slot="header" class="clearfix">
                            分类
                        </div>
                        <div class="text item">
                        </div>
                    </el-card>
                </div>
                <div>
                    <el-card style="width:300px">
                        <div slot="header" class="clearfix">
                            标签
                        </div>
                        <div class="text item">
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
    name: 'Home',
    components: { Header }
}
</script>

<style>
    .el-row {
        margin-bottom: 20px;
        &:last-child {
        margin-bottom: 0;
        }
    }
    .articleBox {
        margin-bottom: 20px;
    }
</style>
