var checkAccount = (rule, value, callback) => {
    if (!value) {
        return callback(new Error("密码不能为空"));
    }
    setTimeout(() => {
        callback();
    }, 1000);
};
var validatePass = (rule, value, callback) => {
    if (value === "") {
        callback(new Error("请输入密码"));
    } else {
        // if (this.ruleForm.checkPass !== "") {
        //     this.$refs.ruleForm.validateField("checkPass");
        // }
        callback();
    }
};
export {
    checkAccount,
    validatePass
}