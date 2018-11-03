define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function() {
		this.callParent();
	};
	
	//图片路径转换
	Model.prototype.getImageUrl = function(url){
		return require.toUrl(url);
	};
	
	//页面初始化
	Model.prototype.modelLoad = function(event){
		$("input[xid=keyInput]", this.getRootNode()).val("请输入关键字...");
	};
		
	//加载数据
	Model.prototype.productDataCustomRefresh = function(event){
		var newsData = event.source;
        $.ajax({
            type: "GET",
            url: require.toUrl('./main/json/newsData.json'),
            dataType: 'json',
            async: false,
            cache: false,
            success: function(data){
            	newsData.loadData(data);//将返回的数据加载到data组件
            },
            error: function(){
              throw justep.Error.create("加载数据失败");
            }
        });
       
	};
	Model.prototype.navDataCustomRefresh = function(event){
		var navData = event.source;
        $.ajax({
            type: "GET",
            url: require.toUrl('./main/json/navData.json'),
            dataType: 'json',
            async: false,
            cache: false,
            success: function(data){
            	navData.loadData(data);//将返回的数据加载到data组件
            },
            error: function(){
              throw justep.Error.create("加载数据失败");
            }
        });	
	};
	
	//进入列表页
	Model.prototype.listClick = function(event){
		/*
		代码如下：
		justep.Shell.showPage("searchList");
		*/
	};
		
	//进入内容页
	Model.prototype.detailClick = function(event){
		/*
		代码如下：
		justep.Shell.showPage("detail");
		*/
	};	
	
	//24小时要闻
	Model.prototype.importantBtnClick = function(event){
		/*
		代码如下：
		justep.Shell.showPage("important");
		*/
	};	
	
	//下滑显示搜索
	var startY;
	Model.prototype.navContent1Touchstart = function(event){
		startY = event.originalEvent.changedTouches[0].pageY;
	};
	Model.prototype.navContent1Touchmove = function(event){
		var moveEndY = event.originalEvent.changedTouches[0].pageY;
		var Y = moveEndY - startY;
		if(Y>0){
			$(".x-seach",this.getRootNode()).slideDown();
		}
	};	
		
	Model.prototype.list2Click = function(event){
		var currentRow = this.comp("youjiData1").getCurrentRow();
		
		this.comp("windowDialog2").open({
		data:{"rowData":currentRow.toJson()}
		})
	};	
		
	return Model;
});