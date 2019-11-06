<template>
  <div class="deptList-wrapper">
    <el-container>
      <edit-dept v-if="showNewDept"></edit-dept>
      <el-main v-else>
        <el-row class="main-header">
          <el-col :span="12">
            <el-button-group>
              <el-button type="primary" size="small" v-for="(item, index) in btnGroup" :key="index" @click="handleBtn(item.func)">{{item.name}}</el-button>
            </el-button-group>
          </el-col>
          <el-col :span="12">

            <el-select v-model="searchType" placeholder="请选择" class="type-select">
              <el-option label="部门负责人姓名" value="leaderName" />
              <el-option label="部门负责人职位" value="leaderJob" />
              <el-option label="部门名称" value="deptName" />
            </el-select>

            <el-autocomplete
            v-model="searchVal"
            :fetch-suggestions="querySearchAsync"
            :placeholder="getTypePlaceholder"
            @select="handleSelect"
            size="small"
            class="search-select" />

            <el-button-group>
              <el-button type="primary" icon="el-icon-search" size="small"></el-button>
              <el-button type="success" icon="el-icon-menu" size="small"></el-button>
              <el-button type="warning" icon="el-icon-refresh" size="small"></el-button>
            </el-button-group>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                prop="deptNo"
                label="部门编号">
              </el-table-column>
              <el-table-column
                prop="deptName"
                label="部门名称">
              </el-table-column>
              <el-table-column
                prop="leaderName"
                label="部门负责人姓名">
              </el-table-column>
              <el-table-column
                prop="leaderNo"
                label="部门负责人工号">
              </el-table-column>
              <el-table-column
                prop="job"
                label="职位">
              </el-table-column>
              <el-table-column
                prop="staffRange"
                label="包含员工范围">
              </el-table-column>
              <el-table-column
                prop="deptRange"
                label="包含SAP部门">
              </el-table-column>
              <el-table-column
                prop="status"
                label="状态">
              </el-table-column>
              <el-table-column
                prop="cTime"
                label="创建时间">
              </el-table-column>
              <el-table-column
                prop="creater"
                label="创建人">
              </el-table-column>
              <el-table-column
                prop="mTime"
                label="修改时间">
              </el-table-column>
              <el-table-column
                prop="modifier"
                label="修改时间">
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import editDept from './editDept'
export default {
  components: {
    editDept
  },
  data () {
    return {
      showNewDept: false,
      searchType: 'leaderName',
      searchVal: '',
      tableData: [
        {
          deptNo: '10215',
          deptName: '人力资源部',
          leaderName: '王小利',
          leaderNo: '10352221',
          job: '部长',
          staffRange: '全部',
          deptRange: '全部',
          status: false,
          cTime: '2019-11-02',
          creater: '晓东',
          mTime: '2019-11-23',
          modifier: '来福'
        }
      ],
      btnGroup: [
        {
          name: '新增',
          func: 'add'
        },
        {
          name: '修改',
          func: 'modify'
        },
        {
          name: '删除',
          func: 'delete'
        },
        {
          name: '导入',
          func: 'import'
        },
        {
          name: '导出',
          func: 'export'
        }
      ]
    }
  },
  computed: {
    getTypePlaceholder () {
      if (this.searchType === 'leaderName') {
        return '请输入工号或姓名'
      } else if (this.searchType === 'leaderJob') {
        return '请输入职位'
      } else {
        return '请输入部门名称'
      }
    }
  },
  methods: {
    handleBtn (func) {
      if (func === 'add') {
        this.showNewDept = true
      }
    },
    handleSelect (item) {
      console.log(item)
    },
    querySearchAsync (queryString, cb) {
      console.log(queryString)
      let results = [{
        value: '1532'
      }]
      setTimeout(() => {
        cb(results)
      }, 1000)
    },
    handleSelectionChange (val) {
      console.log(val)
    }
  }
}
</script>
