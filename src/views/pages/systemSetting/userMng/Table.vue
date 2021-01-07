<template>
  <div class="content">
    <el-table :data="tableData" style="width: 100%" border height="50vh">
      <el-table-column type="index" label="序号"> </el-table-column>
      <el-table-column prop="username" label="姓名" width="100">
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="100">
        <template slot-scope="scope">
          {{ scope.row.sex == 0 ? '女': '男' }}
        </template>
      </el-table-column>
      <el-table-column prop="mobile" label="手机号码"> </el-table-column>
      <el-table-column prop="roleIdList" label="角色"> </el-table-column>
      <el-table-column label="添加日期">
        <template slot-scope="scope">
          {{ scope.row.createTime | timeFilter }}
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="120">
        <template slot-scope="scope">
          <el-button @click="remove(scope.row)" type="text" size="small">
            删除
          </el-button>
          <el-button @click="$emit('edit', scope.row)" type="text" size="small">
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <br />
    <div class="dscx">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>

import { filters } from "@/utils/common.js";

export default {
  mixins: [filters],
  props:{
     tableData: Array,
  },
  data() {
    return {
      currentPage3: 5,
    };
  },
  methods: {
    // 删除、编辑
    remove() {
      console.log("删除");
    },
    // edit(){
    //   console.log("编辑")
    // },
    details() {
      console.log("详情");
    },
    // 分页器
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

