define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
	};

/*
	Model.prototype.open = function(event){
	var url = require.toUrl(event.source.$domNode.attr('url'));
		justep.Shell.showPage(url);

	};

	Model.prototype.li1Click = function(event){
	var url = require.toUrl("./woyaochazhao.w");
    justep.Shell.showPage(url);

	};*/

	Model.prototype.chazhao = function(event){
	var url = require.toUrl("./woyaochazhao.w");
    justep.Shell.showPage(url);

	};

	Model.prototype.bikeZulin = function(event){
	var url = require.toUrl("./danchezulin.w");
    justep.Shell.showPage(url);

	};

	Model.prototype.zhuangbeiZulin = function(event){
	var url = require.toUrl("./zhuangbeizulin.w");
    justep.Shell.showPage(url);

	};

	return Model;
});