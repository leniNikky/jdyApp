define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.open = function(event) {
		var row = event.bindingContext.$object;
		var url = row.val('imgUrl');
		justep.Shell.showPage(require.toUrl(url));
	};

	Model.prototype.modelParamsReceive = function(event){
		var rowdata=event.params.data.rowData;
		this.comp("activityData").loadData([rowdata]);
		this.comp("activityData").first();
	};


	Model.prototype.controlGroup2Click = function(event){
		justep.Shell.closePage();
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

	

	return Model;
});