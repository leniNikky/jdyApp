define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	

	Model.prototype.chazhao = function(event){
		this.comp("windowDialog1").open({src:"findbike.w"});
	};

	

	Model.prototype.bikeZulin = function(event){
		this.comp("windowDialog1").open({src:"danchezulin.w"});
	};

	

	Model.prototype.zhuangbeiZulin = function(event){
	this.comp("windowDialog1").open({src:"zhuangbeizulin.w"});

	};

	

	Model.prototype.li2Click = function(event){
		this.comp("windowDialog1").open({src:"findzb.w"});
	};

	

	

	

	return Model;
});