define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.button14Click = function(event){
		var searchword = this.getElementByXid("searchInput").value;
		var me= this;
		justep.Baas.sendRequest({
			"url" : "/jdy/jdy1_action",
			"action" : "findZb",
			"async" : false,
			"params" : {
			"searchword":searchword
			},
			"success" : function(data) {
			console.log(data.zblist);
				me.comp("zbData1").loadData(data.zblist);
			}
		});
	};

	Model.prototype.list1Click = function(event){
		var currentRow = this.comp("zbData1").getCurrentRow();
		var rowData= currentRow.toJson({'format':'simple'});
		this.comp("windowDialog1").open({
		data:{"rowData":rowData}
		})
	};

	return Model;
});