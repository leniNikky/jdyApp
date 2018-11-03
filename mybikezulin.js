define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelLoad = function(event){
		var userID = localStorage.getItem("userID");
		var a  = this;
		justep.Baas.sendRequest({
			"url" : "/jdy/jdy1_action",
			"action" : "findMybike",
			"async" : false,
			"params" : {
			"userID":userID,
			},
			"success" : function(data) {
			a.comp("bikesData").loadData(data.mybikelist);
			}
		});
		
	};

	return Model;
});