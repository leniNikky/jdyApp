define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("cordova!phonegap-plugin-barcodescanner");
	
	var Model = function() {
		this.callParent();
	};

	Model.prototype.toUrl = function(param) {
		return require.toUrl(param);
	};

	Model.prototype.open = function(event) {
		var row = event.bindingContext.$object;
		var url = row.val('imgUrl');
		justep.Shell.showPage(require.toUrl(url));
	};

	
	Model.prototype.list3Click = function(event){
		var currentRow = this.comp("activityData").getCurrentRow();
		var rowData= currentRow.toJson({'format':'simple'});
		this.comp("windowDialog1").open({
		data:{"rowData":rowData}
		})
	};


	
	
	
	Model.prototype.searchBtnClick = function(event){
		this.comp("windowDialog1").open({src:"actsearch.w"});
	};

	
	
	
	
	Model.prototype.scanBtnClick = function(event){
		cordova.plugins.barcodeScanner.scan(
      function (result) {
         /* alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);*/
                //window.location.href = "./login.w";//
               //woxiangkansaochulai shishenm 
                
                window.location.href = "./actdetail.w";
      },
      function (error) {
          alert("Scanning failed: " + error);
          }
          )
      };
	

	
	
	
	
	
	

	
	
	
	
	
	

	
	
	
	
	
	

	
	
	
	
	return Model;
});