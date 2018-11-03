define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var yimg="";
	var Model = function(){
		this.callParent();
	};

	require("$UI/system/lib/cordova/cordova");
	require("cordova!cordova-plugin-camera");

	Model.prototype.selPicBtnClick = function(event) {

		var self = this;

		navigator.camera.getPicture(onSuccess, onFail, {
			mediaType : 0,// 只选择图片
			quality : 180,
			targetWidth : 100,
			targetHeight : 100,
			encodingType : Camera.EncodingType.JPEG,
			destinationType : navigator.camera.DestinationType.DATA_URL,
			sourceType : navigator.camera.PictureSourceType.PHOTOLIBRARY
		// sourceType : navigator.camera.PictureSourceType.PhotoAlbum
		// 在安卓中，这个参数会跳出拍照界面
		});

		function onSuccess(imageData) {
			//			
			// 图片上传
			self.uploadPic(imageData);
		}

		function onFail(message) {
			alert('Failed because: ' + message);
		}
	};

Model.prototype.uploadPic = function(imageData) {

		// 用户信息，用于上传图片后保存图片链接fImage
		var userid = justep.UUID.createUUID(); // this._UserID是自己定义的变量，在页面打开时被初始化
		var storeFileName = "";
		var imageJson = {};
		var self = this;

		storeFileName = justep.UUID.createUUID();

		justep.Baas.sendRequest({
			"url" : "/jdy/jdy1_action", // baas目录，请根据自己的配置进行修改
			"action" : "uploadPicfile",
			"async" : false,
			"params" : {
				"picData" : imageData,
				"ownerID" : userid,
				"storeFileName" : storeFileName
			},
			"success" : function(data) {
				//var smallImage = document.getElementById(self.getIDByXID('image1'));
				//smallImage.style.display = 'block';
				//smallImage.src = "data:image/jpeg;base64," + imageData;
				justep.Util.hint("图片上传成功");
				storeFileName += ".jpg";
				yimg = userid + "/" + storeFileName;
				
			}
		});

	};


	Model.prototype.backBtnClick = function(event){
		this.comp("windowReceiver1").windowCancel();
	};

	Model.prototype.submitBtnClick = function(event){
		var username = localStorage.getItem("username");
		var userimg = localStorage.getItem("userimg");
		var userID = localStorage.getItem("userID");
		var yname = this.getElementByXid("yname").value; 
		var ycontent = this.getElementByXid("ycontent").value; 
		var ydate = this.getElementByXid("ydate").value; 
		justep.Baas.sendRequest({
			"url" : "/jdy/jdy1_action",
			"action" : "addYouji",
			"async" : false,
			"params" : {
			"username":username,
			"userimg":userimg,
			"userID":userID,
			"yname":yname,
			"ycontent":ycontent,
			"ydate":ydate,
			"yimg":"uploadfiles/"+yimg
			},
			"success" : function(data) {
			alert(data.re);
			window.location.href="./index.w";
			}
		});
	};

	Model.prototype.button1Click = function(event){
		if (!navigator.camera) {
			return;
		}
		var self = this;

		navigator.camera.getPicture(onSuccess, onFail, {
			allowEdit : true,
			mediaType : 0,// 只选择图片
			quality : 80,
			targetWidth : 100,
			targetHeight : 100,
			encodingType : Camera.EncodingType.JPEG,
			destinationType : navigator.camera.DestinationType.DATA_URL,
			sourceType : navigator.camera.PictureSourceType.PHOTOLIBRARY
		// sourceType : navigator.camera.PictureSourceType.PhotoAlbum
		// 在安卓中，这个参数会跳出拍照界面
		});

		function onSuccess(imageData) {
			//			
			// 图片上传
			self.uploadPic(imageData);
		}

		function onFail(message) {
			alert('Failed because: ' + message);
		}
		
	
	
		
		Model.prototype.uploadPic = function(imageData) {

		// 用户信息，用于上传图片后保存图片链接fImage
		var userid = justep.UUID.createUUID(); // this._UserID是自己定义的变量，在页面打开时被初始化
		var storeFileName = "";
		var imageJson = {};
		var self = this;

		storeFileName = justep.UUID.createUUID();

		justep.Baas.sendRequest({
			"url" : "/jdy/jdy1_action",
			"action" : "updateUserimg",
			"async" : false,
			"params" : {
				"picData" : imageData,
				"ownerID" : userid,
				"storeFileName" : storeFileName
			},
			"success" : function(data) {
				var smallImage = document.getElementById(self.getIDByXID('image1'));
				smallImage.style.display = 'block';
				smallImage.src = "data:image/jpeg;base64," + imageData;
				justep.Util.hint("图片上传成功");
				storeFileName += ".jpg";
				yimg = userid + "/" + storeFileName;
			}
		});
		};
	};

	return Model;
});