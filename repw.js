define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.backBtnClick = function(event){
		this.comp("windowReceiver1").windowCancel();
	};

	

	Model.prototype.saveBtnClick = function(event){
		var userID = localStorage.getItem("userID");
		var oldpw = this.getElementByXid("oldpw").value;
		var newpw = this.getElementByXid("newpw").value;
		var repw = this.getElementByXid("repw").value;
//		alert(oldpw);
/*alert(newpw);
alert(repw);*/

		if(newpw==repw){
		justep.Baas.sendRequest({
			"url" : "/jdy/jdy1_action",
			"action" : "updateUserpw",
			"async" : false,
			"params" : {
			"userID":userID,
			"oldpw":oldpw,
			"newpw":newpw
			},
			"success" : function(data) {
			alert(data.repw);
			window.location.href="./index.w?device=m#!main//(#!content1/!/content7)";
			}
		});}else{
			alert("两次输入密码不一致，请重新输入！")
		}
	};

	

	return Model;
});