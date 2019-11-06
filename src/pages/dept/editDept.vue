<template>
  <el-container v-if="showEditDept">
    <el-main>
      <el-row>
        <el-col :span="24">
          <el-button size="small" @click="goBack()">返回</el-button>
          <el-button type="primary" size="small">保存</el-button>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  props: {
    showEditDept: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  methods: {
    goBack () {
      this.$emit('update:showEditDept', false)
    }
  }
}
</script>
