define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.button2Click = function(event){
		this.comp("windowDialog1").open({src:"img.w"});
	};

	Model.prototype.button1Click = function(event){
		this.comp("windowReceiver2").windowCancel();
	};

	Model.prototype.button14Click = function(event){
		this.comp("windowDialog1").open({src:"pmassage.w"});
	};

	Model.prototype.button12Click = function(event){
		this.comp("windowDialog1").open({src:"repw.w"});
	};

	Model.prototype.li2Click = function(event){
		localStorage.clear();
		alert("退出成功！")
		location.reload();
	};

	return Model;
});