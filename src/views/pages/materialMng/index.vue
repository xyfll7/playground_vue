<template>
	<div class="materialMng">
		<div class="dsbty header">
			<div class="dsbty input-type">
				<el-input placeholder="输入客户姓名搜索" suffix-icon="el-icon-search" v-model="input3"></el-input>
				<el-select v-model="value" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
				<el-select v-model="value" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</div>
			<!-- 右边 -->
			<div class="dsbty">
				<el-button type="primary" @click="mngClick('1')">产品类型管理</el-button>
				<el-button type="primary" @click="mngClick('2')">供应商管理</el-button>
				<el-button type="primary" @click="mngClick('3')">新增材料</el-button>
				<el-button type="primary" @click="mngClick('4')">批量倒入</el-button>
			</div>
		</div>


		<div class="content">
			<el-table :data="tableData" style="width: 100%" border>
				<el-table-column prop="date" label="产品类型"></el-table-column>
				<el-table-column prop="date" label="材料名称"></el-table-column>
				<el-table-column prop="date" label="图片"></el-table-column>
				<el-table-column prop="date" label="规格"></el-table-column>
				<el-table-column prop="date" label="单位"></el-table-column>
				<el-table-column prop="date" label="单价"></el-table-column>
				<el-table-column prop="date" label="售价"></el-table-column>
				<el-table-column prop="date" label="空间"></el-table-column>
				<el-table-column prop="date" label="供应商"></el-table-column>
				<el-table-column prop="date" label="操作"></el-table-column>
			</el-table>
		</div>





		<!-- 产品类型管理和供应商管理的弹窗框 -->
		<el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
			<span v-if="dialogTitle == '产品类型管理'">
				<!--产品类型管理-->
				<el-table :data="tableData" style="width: 100%" border>
					<el-table-column prop="date" label="序号"></el-table-column>
					<el-table-column prop="date" label="套餐名称"></el-table-column>
					<el-table-column prop="date" label="操作"></el-table-column>
				</el-table>
			</span>

			<span v-else>
				<!--供应商管理-->
				<el-table :data="tableData" style="width: 100%" border>
					<el-table-column prop="date" label="序号"></el-table-column>
					<el-table-column prop="date" label="供应商名称"></el-table-column>
					<el-table-column prop="date" label="操作"></el-table-column>
				</el-table>
			</span>

			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				value: "",
				input3: "",
				tableData:[],
				options:[],
				dialogVisible:false,
				dialogTitle:'产品类型管理'
			};
		},
		methods:{
			//产品类型管理和供应商管理的弹窗框
			mngClick(type){
				if(type == '1'){
					this.dialogVisible = true
					this.dialogTitle = '产品类型管理'
				}else if(type == '2'){
					this.dialogVisible = true
					this.dialogTitle = '供应商管理'
				}
			},
			handleClose(){
				this.dialogVisible = false

			}
		}
	};
</script>
<style scoped>
.materialMng{
	
}
</style>

