define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("$UI/system/lib/cordova/cordova");
	require("cordova!cordova-plugin-camera");
	var userimg="";
	var Model = function(){
		this.callParent();
	};

	Model.prototype.backBtnClick = function(event){
		this.comp("windowReceiver1").windowCancel();
	};

	Model.prototype.submitBtnClick = function(event){
		var userPhone = localStorage.getItem("userPhone");
		
		justep.Baas.sendRequest({
			"url" : "/jdy/jdy1_action",
			"action" : "updateUserimg",
			"async" : false,
			"params" : {
			"userimg":"uploadfiles/"+userimg,
			"userPhone":userPhone
			},
			"success" : function(data) {
			
				localStorage.setItem("userimg","uploadfiles/"+userimg);
				
				window.location.href="./index-user.w";	}
		});
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
				userimg = userid + "/" + storeFileName;
				
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
		
	
	};

	return Model;
});