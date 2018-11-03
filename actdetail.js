define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.enrollBtnClick = function(event){
var aid = this.comp("activityData").getValue("aid");
		var aname = this.comp("activityData").getValue("aname");
		var acontent = this.comp("activityData").getValue("acontent");
		var aimg = this.comp("activityData").getValue("aimg");
		var adate = this.comp("activityData").getValue("adate");
		var aorganizer = this.comp("activityData").getValue("aorganizer");
		var userID = localStorage.getItem("userID");
		
		justep.Baas.sendRequest({
			"url" : "/jdy/jdy1_action",
			"action" : "myAct",
			"async" : false,
			"params" : {
			"aid":aid,
			"userID":userID,
			"aname":aname,
			"acontent":acontent,
			"aimg":aimg,
			"adate":adate,
			"aorganizer":aorganizer
			},
			"success" : function(data) {
			alert(data.re);
			}
		});
		
	
	};

	Model.prototype.backBtnClick = function(event){
		this.comp("windowDialog1").open({src:"index.w"});
	};

	return Model;
});