<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:212px;left:134px;height:auto;" onLoad="modelLoad"> 
  <div component="$UI/system/components/justep/data/baasData" autoLoad="true" xid="zbData1" queryAction="queryZulinzb" saveAction="saveZulinzb" url="/jdy/jdy1_action" tableName="zulinzb" idColumn="zbID"><column label="zbID" name="zbID" type="String" xid="default1"></column>
  <column label="zbName" name="zbName" type="String" xid="default2"></column>
  <column label="zbImage" name="zbImage" type="String" xid="default3"></column>
  <column label="zbPrice" name="zbPrice" type="Float" xid="default4"></column>
  <column label="zbIntroduce" name="zbIntroduce" type="String" xid="default5"></column></div></div>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" style="top:10px;left:53px;" src="./zzulindetair.w"></span><div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="装备租赁"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">装备租赁</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content x-scroll-view" xid="content1" _xid="C7CEFD6BC3F00001137915F050BB4F20" style="bottom: 0px; background-size: cover; background-image: url(http://localhost:43167/x5/UI2/v_/jdy1/none);"><div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1">
   <div class="x-content-center x-pull-down container" xid="div1">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i1"></i>
    <span class="x-pull-down-label" xid="span1">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div2">
    <div component="$UI/system/components/justep/list/list" class="x-list x-cards" xid="list1" data="zbData1" bind-click="list1Click" style="background-color:transparent;">
     <ul class="x-list-template x-min-height list-group" xid="listTemplateUl1" componentname="$UI/system/components/justep/list/list#listTemplateUl" id="undefined_listTemplateUl1" style="padding-top:10px;padding-left:10px;padding-right:10px;">
      <li xid="li1" class="media" style="border-bottom-width:1px;border-bottom-style:ridge;border-bottom-color:#C0C0C0;padding-bottom:10px;">
       <div xid="div4" class="media-left">
        <img src="" alt="" xid="image1" bind-attr-src=' val("zbImage")' style="width:90px;height:90px;"></img></div> 
       <div xid="div5" class="media-body">
        <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
         <div class="x-col" xid="col2">
          <h5 class="media-heading lead text-black" bind-text=' val("zbName")' xid="h51"></h5></div> </div> 
        <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
         <div class="x-col x-col-fixed x-col-center" xid="col1" style="width:auto;">
          <span xid="span3" class="text-danger">￥</span></div> 
         <div component="$UI/system/components/justep/output/output" class="x-output text-danger" xid="output1" bind-ref='ref("zbPrice")' style="height:39px;"></div>
         <div class="x-col x-col-fixed x-col-center" xid="col3" style="width:auto;">
          <span xid="span5">/次</span></div> </div> 
        <div xid="div6" class="text-muted"></div></div> </li> </ul> </div> </div> 
   <div class="x-content-center x-pull-up" xid="div3">
    <span class="x-pull-up-label" xid="span2">加载更多...</span></div> </div></div>
  </div> 
</div>