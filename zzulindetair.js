define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelParamsReceive = function(event){
		var rowdata=event.params.data.rowData;
		this.comp("zbData1").loadData([rowdata]);
		this.comp("zbData1").first();
	};

	Model.prototype.enrollBtnClick = function(event){
		if(localStorage.getItem("userID").length<=0){
		alert("请先登录！")
		}else{
		var userID = localStorage.getItem("userID");
		var zbID = this.comp("zbData1").getValue("zbID");
		var zbName = this.comp("zbData1").getValue("zbName");
		var zbImage = this.comp("zbData1").getValue("zbImage");
		var zbPrice = this.comp("zbData1").getValue("zbPrice");
		var zbIntroduce = this.comp("zbData1").getValue("zbIntroduce");
		var a = this;
		justep.Baas.sendRequest({
			"url" : "/jdy/jdy1_action",
			"action" : "myZb",
			"async" : false,
			"params" : {
			"userID":userID,
			"zbID":zbID,
			"zbName":zbName,
			"zbImage":zbImage,
			"zbPrice":zbPrice,
			"zbIntroduce":zbIntroduce
			},
			"success" : function(data) {
			alert(data.re);
			}
		});
		}
		
	};

	return Model;
});