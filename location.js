define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("$UI/system/lib/cordova/cordova");
	require("css!$UI/demo/native/common/pub").load();
	require("cordova!cordova-plugin-geolocation");
	var bmap = require('$UI/system/components/justep/bmap/bmap');

	var Model = function() {
		this.callParent();
		this.watchID = null;
	};

	Model.prototype.modelLoad = function(event){
		var me = this;
		document.addEventListener("deviceready", onDeviceReady, false);
		
		function onDeviceReady() {
			me.comp("getGeoBtn").set({disabled: false});
			
		}
	};
	
	Model.prototype.modelUnLoad = function(event) {
		if (this.watchID) {
			navigator.geolocation.clearWatch(this.watchID);
	}};

	// 关闭功能
	Model.prototype.backBtnClick = function(event) {
		if(this.watchID)
			navigator.geolocation.clearWatch(this.watchID);
		justep.Shell.closePage();
	};

	//获取设备位置信息
	Model.prototype.getGeoBtnClick = function(event) {
		var me = this;
		/*me.comp("contentData").setValue("title",'获取设备位置信息');
	    me.comp("contentData").setValue("x", '经度: ');
	    me.comp("contentData").setValue("y", '维度: ');*/
	    var userID = localStorage.getItem("userID");
	    var x1= position.coords.longitude;
	    var y1= position.coords.latitude;
	    localStorage.setItem("x1",x1);
	    localStorage.setItem("y1",y1);
	    alert(userID);
		/*function onSuccess(position) {
		    me.comp("contentData").setValue("x", '经度: ' +position.coords.longitude);
		    me.comp("contentData").setValue("y", '维度: ' +position.coords.latitude);
		}

		function onError() {
		    me.comp("contentData").setValue("x", "失败");
			me.comp("contentData").setValue("y", '');
		}
		navigator.geolocation.getCurrentPosition(onSuccess, onError);*/
	};

	

	
	
	Model.prototype.get1GeoBtnClick = function(event){
		var x2= position.coords.longitude;
	    var y2= position.coords.latitude;
	    
	    var x1=  localStorage.getItem("x1");
	    var y1=  localStorage.getItem("y1");
	    alert(localStorage.getItem("userID"));
      
        // 获取您现在所在的经纬度  
        var lat1 = x2; 
        var lng1 = y2;
        // 获取订单所在的经纬度  
        var lat2 = x1;
        var lng2 = y1; 
        var R = 6378137.0;  
        function Rad(d) {  
            return d * Math.PI / 180.0;// 经纬度转换成三角函数中度分表形式。  
        }  
        // 计算距离  
        function GetDistance(lat1, lng1, lat2, lng2) {  
  
            var radLat1 = Rad(lat1);  
            var radLat2 = Rad(lat2);  
            var a = radLat1 - radLat2;  
            var b = Rad(lng1) - Rad(lng2);  
  
            var s = 2 * R * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));  
            var s1 = Math.round(s) / 1000;  
            var s2 = s1.toFixed(2);  
            return s2;  
	     }
	     var distance = GetDistance(lat1, lng1, lat2, lng2);}
	    justep.Baas.sendRequest({
			"url" : "/jdy/jdy1_action",
			"action" : "record",
			"async" : false,
			"params" : {
			"userID":userID,
			"x1":x1,
			"y1":y1,
			"x2":x2,
			"y2":y2,
			"distance":distance
			},
			"success" : function(data) {
			alert(data.re);
			}
		});
	

	

	
	
	return Model;
});
