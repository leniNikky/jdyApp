define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.getImageUrl = function(url){
		return require.toUrl(url);
	};

	Model.prototype.backBtnClick = function(event){
		this.comp("windowReceiver1").windowCancel();
	};

	Model.prototype.windowReceiver1Receive = function(event){
		var userID = localStorage.getItem("userID");
		var a = this;
		justep.Baas.sendRequest({
			"url" : "/jdy/jdy1_action",
			"action" : "findYouji",
			"async" : false,
			"params" : {
			"userID":userID,
			},
			"success" : function(data) {
			console.log(data.youjilist);
				a.comp("youjiData1").loadData(data.youjilist);
			}
		});
	};

	Model.prototype.list1Click = function(event){
		var currentRow = this.comp("youjiData1").getCurrentRow();
		var rowData= currentRow.toJson({'format':'simple'});
		this.comp("windowDialog1").open({
		data:{"rowData":rowData}
		})
	};

	return Model;
});