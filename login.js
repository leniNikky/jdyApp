define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
	};
	
	//图片路径转换
	Model.prototype.toUrl = function(url){
		return url ? require.toUrl(url) : "";
	};
	
	
	
	Model.prototype.registerBtnClick = function(event){
		this.comp("windowDialog1").open({src:"register.w"});
	};
	Model.prototype.loginBtnClick = function(event){
		var nameInput = this.getElementByXid("nameInput").value;
		var passwordInput = this.getElementByXid("passwordInput").value;
		var me = this;
		
		justep.Baas.sendRequest({
			"url":"/jdy/jdy1_action",
			"action":"log",
			"async":false,
			"params":{
				"nameInput":nameInput,
				"passwordInput":passwordInput
			},
			"success":function(data){
				if(data!=null){
					localStorage.setItem("username",data["username"]);
					localStorage.setItem("userPhone",data["userPhone"]);
					localStorage.setItem("userID",data["userID"]);
					localStorage.setItem("useraddress",data["useraddress"]);
					localStorage.setItem("userimg",data["userimg"]);
					window.location.href = "./index.w";
					justep.Util.hint("登录成功！");
					
					
				}else{
					justep.Util.hint("登录失败！");
				}
			}
		})
	};
	return Model;
});