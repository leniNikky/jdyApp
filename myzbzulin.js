define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};



	Model.prototype.windowReceiver1Receive = function(event){
		var userID = localStorage.getItem("userID");
		var a  = this;
		justep.Baas.sendRequest({
			"url" : "/jdy/jdy1_action",
			"action" : "findMyzb",
			"async" : false,
			"params" : {
			"userID":userID,
			},
			"success" : function(data) {
			a.comp("zbData1").loadData(data.myzblist);
			}
		});
	};

	

	return Model;
});