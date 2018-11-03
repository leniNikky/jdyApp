define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.getImageUrl = function(url){
		return require.toUrl(url);
	};

	

	Model.prototype.modelParamsReceive = function(event){
		var rowdata=event.params.data.rowData;
		this.comp("youjiData1").loadData([rowdata]);
		this.comp("youjiData1").first();
	};

	
	Model.prototype.backBtnClick = function(event){
		this.comp("windowReceiver1").windowCancel();
		
	};
	
	

	return Model;
});