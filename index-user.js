define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	
	var Model = function() {
		this.callParent();
	};

	// 图片路径转换
	Model.prototype.getImageUrl = function(url) {
		return require.toUrl(url);
	};
    
    
	Model.prototype.showPersional = function(event) {
		justep.Shell.showPage("personal");
	};

	Model.prototype.modelLoad = function(event) {
		var userimg = localStorage.getItem("userimg");
		if (userimg != null) {
			this.getElementsByXid("a1").html(localStorage.getItem("username"));
			$(this.getElementByXid('image1')).attr('src', userimg);
		}else{
		alert("您还未登录，请先登录！")
		}
	};



	Model.prototype.button21Focus = function(event){
		this.comp("windowDialog1").open({src:"mainActivity.w"});
		
	};



	Model.prototype.a1Click = function(event){
		this.comp("windowDialog1").open({src:"login.w"});
	};



	Model.prototype.button1Click = function(event){
		this.comp("windowDialog1").open({src:"install.w"});
	};



	Model.prototype.button16Click = function(event){
		this.comp("windowDialog1").open({src:"myyouji.w"});
	};



	Model.prototype.li11Click = function(event){
		this.comp("windowDialog1").open({src:"myact.w"});
	};



	Model.prototype.li10Click = function(event){
		this.comp("windowDialog1").open({src:"mybikezulin.w"});
	};



	Model.prototype.li2Click = function(event){
		this.comp("windowDialog1").open({src:"myzbzulin.w"});
	};



	Model.prototype.button11Focus = function(event){
		this.comp("windowDialog1").open({src:"addyouji.w"});
	};



	


	return Model;
});