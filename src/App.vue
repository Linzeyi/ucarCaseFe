<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,
body,
html #app {
  height: 100%;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-row {
  width: 100%;
}
.main-header .type-select input {
  border: none;
  background: transparent;
  text-align: right;
}
.el-col {
  display: flex;
  align-items: center;
}
.el-col > * {
  margin-right: 8px;
}
.el-col > *:last-child {
  margin-right: 0;
}
.el-row .el-col:last-child {
  justify-content: flex-end;
}
.el-row .el-col:first-child {
  justify-content: flex-start;
}
.el-table {
  margin-top: 20px;
}
.el-table td,
.el-table th {
  text-align: center;
}
</style>
