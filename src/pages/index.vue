<template>
  <div class="app-wrapper">
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '240px'">
        <el-menu
        default-active="0-0-0"
        class="el-menu-vertical-demo"
        @select="handleSelect"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse">
          <template v-for="(item1, index1) in menuList">

            <!-- 一级菜单，有子菜单 -->
            <el-submenu :index="JSON.stringify(index1)" :key="index1" v-if="item1.childNode">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item1.name}}</span>
              </template>
              <template v-for="(item2, index2) in item1.childNode">

                <!-- 二级菜单，有子菜单 -->
                <el-submenu :index="index1 + '-' + index2" :key="index1 + '-' + index2" v-if="item2.childNode">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{item2.name}}</span>
                  </template>

                  <!-- 三级菜单，无子菜单 -->
                  <el-menu-item
                  v-for="(item3, index3) in item2.childNode"
                  :index="index1 + '-' + index2 + '-' + index3"
                  :key="index1 + '-' + index2 + '-' + index3"
                   @click="toPage(item3.path)">
                    <template slot="title">
                      <i class="el-icon-s-platform"></i>
                      <span>{{item3.name}}</span>
                    </template>
                  </el-menu-item>
                </el-submenu>

                <!-- 二级菜单，无子菜单 -->
                <el-menu-item :index="index1 + '-' + index2" :key="index1 + '-' + index2" v-else  @click="toPage(item2.path)">
                  <template slot="title">
                    <i class="el-icon-s-platform"></i>
                    <span>{{item2.name}}</span>
                  </template>
                </el-menu-item>
              </template>
            </el-submenu>

            <!-- 一级菜单，无子菜单 -->
            <el-menu-item :index="JSON.stringify(index1)" :key="index1" v-else @click="toPage(item1.path)">
              <template slot="title">
                <i class="el-icon-s-platform"></i>
                <span>{{item1.name}}</span>
              </template>
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <span class="fold-btn" @click="isCollapse = !isCollapse">
            <i class="el-icon-s-unfold" v-if="!isCollapse"></i>
            <i class="el-icon-s-fold" v-else></i>
          </span>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">{{getRouteTitle}}</a></el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <el-main style="padding: 0">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false,
      menuList: [
        {
          name: '员工企业文化',
          path: '/',
          childNode: [
            {
              name: '部门管理',
              path: '/',
              childNode: [
                {
                  name: '部门列表',
                  path: '/dept/deptList'
                }
              ]
            },
            {
              name: '案例管理',
              path: '/',
              childNode: [
                {
                  name: '案例评选计划',
                  path: '/case/casePlan'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  computed: {
    getRouteTitle () {
      return this.$route.meta.title
    }
  },
  methods: {
    handleSelect (key) {
    },
    handleOpen () {
    },
    handleClose () {

    },
    toPage (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.app-wrapper {
  height: 100%;
  padding-top: 70px;
  background: #3a3a3a;
}
.el-container {
  background: #fff;
  height: 100%;
}
.header {
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid #ddd;
}
.header .fold-btn {
  margin-right: 10px;
  cursor: pointer;
  font-size: 1.4em;
}
.el-main {
  background: #f8f8f9;
  height: 100%;
}
.el-menu {
  height: 100%;
  overflow-x: hidden;
  text-align: left;
}
.el-menu >>> .el-menu-item,
.el-menu >>> .el-submenu__title{
  height: 46px!important;
  line-height: 46px!important;
}
</style>
