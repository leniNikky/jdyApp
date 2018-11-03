define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelLoad = function(event){

	};
	
	Model.prototype.getImgUrl = function(imgUrl){
        return require.toUrl("./img/"+imgUrl);
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