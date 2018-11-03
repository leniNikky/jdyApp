define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function() {
		this.callParent();
	};

	Model.prototype.getImageUrl = function(url) {
		return require.toUrl(url);
	};

	

	Model.prototype.regBtnClick = function(event) {
		var userPhone = this.comp("userPhone").val();
		var userName = this.comp("userName").val();
		var password1 = this.comp("password1").val();
		var password2 = this.comp("password2").val();
		var useraddress = this.comp("useraddress").val();
		if(password1==password2){
		justep.Baas.sendRequest({
			"url" : "/jdy/jdy1_action",
			"action" : "reg",
			"async" : false,
			"params" : {
				"userPhone" : userPhone,
				"userName" : userName,
				"password1" : password1,
				"useraddress" : useraddress
			},
			"success" : function(data) {
				console.log(data);
				alert("注册成功！")
			}
		});
		}else{
		alert("两次输入密码不一致，请重新输入一次！")
		}
		/*
		 * var reg=/^0?1[3|4|5|7|8][0-9]\d{8}$/; if(reg.test("userPhone")){
		 * regData1.clear(); regData1.setFilter("phoneFilter","userPhone =
		 * '"+userPhone+"'"); regData1.refreshData(); if(regData1.count()>0){
		 * justep.Util.hint("该号码已被注册过，请重新输入手机号！"); }else{
		 * if(password1==password2){ regData1.newData({ "defaltValues":[{
		 * "userID":justep.UUID.createUUID(), "userPhone":userPhone,
		 * "userName":userName, "password1":password1, "useraddress":useraddress }]
		 * }); regData1.saveData(); }else{
		 * juastep.Util.hint("两次密码输入不一致，请重新输入！"); } }
		 */

	};

	Model.prototype.regData1AfterSave = function(event) {
		var userPhone = this.comp("userPhone").val();
		var password1 = this.comp("password1").val();
		justep.Shell.showPage("login", {
			userPhone : userPhone,
			password1 : password1
		});
		justep.Util.hint("恭喜您，手机号" + userPhone + "的用户注册成功！")
	};

	return Model;
});define(function(require){
	var $ = require("jquery");
	var Model = function(){
		this.callParent();
	};
	

	

	return Model;
});
