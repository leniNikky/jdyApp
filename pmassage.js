define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	


	Model.prototype.regBtnClick = function(event){
	    var userID = localStorage.getItem("userID");
		var userPhone = this.comp("userPhone").val()
		var username = this.comp("userName").val()
		var useraddress = this.comp("useraddress").val()
		justep.Baas.sendRequest({
			"url" : "/jdy/jdy1_action",
			"action" : "updatePmassage",
			"async" : false,
			"params" : {
			"userID":userID,
			"userPhone":userPhone,
			"username":username,
			"useraddress":useraddress
			},
			"success" : function(data) {
			alert(data.alterRes.toString());
			if(userPhone!=null){
				localStorage.setItem("userPhone",userPhone);
			}
			if(username!=null){
				localStorage.setItem("username",username);
			}
			if(useraddress!=null){
				localStorage.setItem("useraddress",useraddress);
			}
			}
		});
	};



	



	Model.prototype.backBtnClick = function(event){
		this.comp("windowReceiver1").windowCancel();
	};



	



	return Model;
});