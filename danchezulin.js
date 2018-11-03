define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.bikeDataCustomRefresh = function(event){
    var url = require.toUrl("./danchezulin/json/bikeData.json");
	$.ajaxSettings.async = false;
	$.getJSON(url,function(data){
	    event.source.loadData(data);
	  });
	};


	Model.prototype.modelLoad = function(event){

	};
	
	Model.prototype.getImgUrl = function(imgUrl){
        return require.toUrl("./img/"+imgUrl);
	};


	Model.prototype.list1Click = function(event){
		var currentRow = this.comp("bikesData").getCurrentRow();
		var rowData= currentRow.toJson({'format':'simple'});
		this.comp("windowDialog1").open({
		data:{"rowData":rowData}
		})
	};


	return Model;
});