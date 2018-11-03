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
		this.comp("bikesData").loadData([rowdata]);
		this.comp("bikesData").first();
	};

	

	Model.prototype.enrollBtnClick = function(event){
		if(localStorage.getItem("userID").length<=0){
		alert("请先登录！")
		}else{
		var userID = localStorage.getItem("userID");
		var bikeID = this.comp("bikesData").getValue("bikeID");
		var bikeTitle = this.comp("bikesData").getValue("bikeTitle");
		var bikeImage = this.comp("bikesData").getValue("bikeImage");
		var bikePrice = this.comp("bikesData").getValue("bikePrice");
		var bikeIntroduce = this.comp("bikesData").getValue("bikeIntroduce");
		var a = this;
		justep.Baas.sendRequest({
			"url" : "/jdy/jdy1_action",
			"action" : "myBike",
			"async" : false,
			"params" : {
			"userID":userID,
			"bikeID":bikeID,
			"bikeTitle":bikeTitle,
			"bikeImage":bikeImage,
			"bikePrice":bikePrice,
			"bikeIntroduce":bikeIntroduce
			},
			"success" : function(data) {
			alert(data.re);
			}
		});
		}
		
	};

	

	return Model;
});