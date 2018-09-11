<template>
  <div>
    <el-row>
      <el-col :span="5"><div class="grid-content bg-purple">
        <el-select :default-active="$route.path" @change="chickvalue"
                   v-model="searchValue" filterable placeholder="请输入/请选择" class="h-m-select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            v-model="item.value">
          </el-option>
        </el-select>
      </div></el-col>
      <el-col :span="24">
        <!--操作按钮-->
      </el-col>
      <el-col :span="24">
        <!--列表-->
      </el-col>
      <el-col :span="24">
        <!--列表底部内容-->
      </el-col>
    </el-row>
    <el-row>
      <router-view>
      </router-view>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'homeMenu',
  data () {
    return {
      options: [{
        value: '选项0',
        label: '保密设置'
      }, {
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      searchValue: ''
    }
  },
  methods: {
    handleClick () {
      alert('button click')
    },
    chickvalue () {
      console.log(this)
    },
    ct () {
      alert(this.item.label)
    }
  }

}
</script>

<style scoped>
.h-m-select{
  margin-top: 10px ;
}
</style>
