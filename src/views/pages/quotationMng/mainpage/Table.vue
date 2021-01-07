<template>
  <div class="content">
    <el-table :data="tableData" style="width: 100%" border height="50vh">
      <el-table-column prop="date" label="客户姓名" width="100">
      </el-table-column>
      <el-table-column prop="name" label="手机号" width="100">
      </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column prop="address" label="户型面积"> </el-table-column>
      <el-table-column prop="address" label="设计师"> </el-table-column>
      <el-table-column prop="address" label="电话"> </el-table-column>
      <el-table-column prop="address" label="房型"> </el-table-column>
      <el-table-column prop="address" label="硬装合同总价"> </el-table-column>
      <el-table-column prop="address" label="定制合同总价"> </el-table-column>
      <el-table-column prop="address" label="总计"> </el-table-column>
      <el-table-column prop="address" label="签约状态"> </el-table-column>
      <el-table-column label="操作" fixed="right" width="120">
        <template slot-scope="scope">
          <el-button @click="remove(scope.row)" type="text" size="small">
            删除
          </el-button>
          <el-button @click="$emit('edit', scope.row)" type="text" size="small">
            编辑
          </el-button>
          <el-button
            @click="$router.push({ path: '/quotationMng/quotationDetails' })"
            type="text"
            size="small"
          >
            详情
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
export default {
  data() {
    return {
      // 分页
      currentPage3: 5,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    // 删除、编辑、详情
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

