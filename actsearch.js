define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.getImageUrl = function(url){
		return require.toUrl(url);
	};

	Model.prototype.searchBtnClick = function(event){
		var searchword = this.getElementByXid("keyInput").value;
		var me= this;
		justep.Baas.sendRequest({
			"url" : "/jdy/jdy1_action",
			"action" : "searchAct",
			"async" : false,
			"params" : {
			"searchword":searchword
			},
			"success" : function(data) {
			console.log(data.actlist);
				me.comp("activityData").loadData(data.actlist);
			}
		});
	};

	Model.prototype.list3Click = function(event){
		var currentRow = this.comp("activityData").getCurrentRow();
		var rowData= currentRow.toJson({'format':'simple'});
		this.comp("windowDialog1").open({
		data:{"rowData":rowData}
		})
	};

	return Model;
});