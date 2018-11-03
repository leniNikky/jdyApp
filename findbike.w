<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="bikesData" idColumn="bikeID"><column name="bikeID" type="String" xid="xid1"></column>
  <column name="bikeTitle" type="String" xid="xid2"></column>
  <column name="bikeImage" type="String" xid="xid3"></column>
  <column name="bikePrice" type="String" xid="xid4"></column>
  <column name="bikeIntroduce" type="String" xid="xid5"></column></div></div>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" style="top:14px;left:73px;" src="./bzulindetail.w"></span><div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="查找单车"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">查找单车</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1" _xid="C7CFA69D3B000001DD831BF01D591EAE" style="bottom: 0px; background-size: cover; background-image: url(http://localhost:45667/x5/UI2/v_/jdy1/none);">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="position:static;">
    
    <div class="x-col" xid="col1">
    <input component="$UI/system/components/justep/input/input" class="form-control" xid="searchInput" placeHolder="请输入搜索内容"></input></div><div class="x-col x-col-fixed" xid="col2" style="width:auto;">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="搜索" xid="button14" onClick="button14Click">
     <i xid="i14"></i>
     <span xid="span2">搜索</span></a> </div></div>
  <div component="$UI/system/components/justep/list/list" class="x-list x-cards" xid="list1" data="bikesData" style="padding-top:10px;background-color:transparent;" bind-click="list1Click">
   <ul class="x-list-template x-min-height list-group" xid="listTemplateUl1" componentname="$UI/system/components/justep/list/list#listTemplateUl" id="undefined_listTemplateUl1">
    <li xid="li1" class="media" style="border-bottom-width:1px;border-bottom-style:ridge;border-bottom-color:#C0C0C0;padding-left:3px;padding-right:3px;">
     <div xid="div4" class="media-left">
      <img src="" alt="" xid="image1" bind-attr-src=' $model.bikesData.val("bikeImage")' style="width:90px;height:90px;"></img></div> 
     <div xid="div5" class="media-body">
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
       <div class="x-col" xid="col3">
        <h5 class="media-heading lead text-black" bind-text=' $model.bikesData.val("bikeTitle")' xid="h51"></h5></div> </div> 
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
       <div class="x-col x-col-fixed x-col-center" xid="col4" style="width:auto;">
        <span xid="span3" class="text-danger">￥</span></div> 
       <div component="$UI/system/components/justep/output/output" class="x-output text-danger" xid="output1" bind-ref='$model.bikesData.ref("bikePrice")' style="height:39px;"></div>
       <div class="x-col x-col-fixed x-col-center" xid="col3" style="width:auto;">
        <span xid="span5">/次</span></div> </div> 
      <div xid="div6" class="text-muted"></div></div> </li> </ul> </div></div>
  </div> 
</div>