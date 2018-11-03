<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:275px;left:386px;height:auto;" onLoad="modelLoad"> 
  <div component="$UI/system/components/justep/data/baasData" autoLoad="true" xid="bikesData" queryAction="queryZulinbike" saveAction="saveZulinbike" url="/jdy/jdy1_action" tableName="zulinbike" idColumn="bikeID"><column label="bikeID" name="bikeID" type="Integer" xid="default2"></column>
  <column label="bikeTitle" name="bikeTitle" type="String" xid="default3"></column>
  <column label="bikeImage" name="bikeImage" type="String" xid="default4"></column>
  <column label="bikePrice" name="bikePrice" type="Float" xid="default5"></column>
  <column label="bikeIntroduce" name="bikeIntroduce" type="String" xid="default6"></column>
  <column label="bikeRecord" name="bikeRecord" type="Integer" xid="default7"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1">
    <div component="$UI/system/components/justep/titleBar/titleBar" title="单车租赁" class="x-titlebar" xid="titleBar1">
     <div class="x-titlebar-left" xid="left1">
      <a component="$UI/system/components/justep/button/button" label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="{operation:'window.close'}" xid="backBtn">
       <i class="icon-chevron-left" xid="i2"></i>
       <span xid="span7"></span></a> </div> 
     <div class="x-titlebar-title" xid="title1">单车租赁</div>
     <div class="x-titlebar-right reverse" xid="right1"></div></div> </div> 
   <div class="x-panel-content  x-scroll-view" xid="content1" _xid="C7CEFD6BC3F00001137915F050BB4F20" style="bottom: 0px;">
    <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1">
     <div class="x-content-center x-pull-down container" xid="div1">
      <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i1"></i>
      <span class="x-pull-down-label" xid="span1">下拉刷新...</span></div> 
     <div class="x-scroll-content" xid="div2">
      <div component="$UI/system/components/justep/list/list" class="x-list x-cards" xid="list1" data="bikesData" style="padding-top:10px;background-color:transparent;" bind-click="list1Click">
       <ul class="x-list-template x-min-height list-group" xid="listTemplateUl1" componentname="$UI/system/components/justep/list/list#listTemplateUl" id="undefined_listTemplateUl1">
        <li xid="li1" class="media" style="border-bottom-width:1px;border-bottom-style:ridge;border-bottom-color:#C0C0C0;padding-left:3px;padding-right:3px;background-color:transparent;">
         <div xid="div4" class="media-left">
          <img src="" alt="" xid="image1" bind-attr-src=' val("bikeImage")' style="width:90px;height:90px;"></img></div> 
         <div xid="div5" class="media-body">
          <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col2"><h5 class="media-heading lead text-black" bind-text='ref("bikeTitle")' xid="h51"></h5></div>
   </div>
          <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
            <div class="x-col x-col-fixed x-col-center" xid="col1" style="width:auto;">
             <span xid="span3" class="text-danger">￥</span></div> 
            
            <div component="$UI/system/components/justep/output/output" class="x-output text-danger" xid="output1" bind-ref='ref("bikePrice")' style="height:39px;"></div><div class="x-col x-col-fixed x-col-center" xid="col3" style="width:auto;">
             <span xid="span5">/天</span></div> </div><div xid="div6" class="text-muted">
            
  </div> 
           </div> </li> </ul> </div> </div> 
     <div class="x-content-center x-pull-up" xid="div3">
      <span class="x-pull-up-label" xid="span2">加载更多...</span></div> </div> </div> </div>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" style="top:20px;left:108px;" src="./bzulindetail.w"></span></div>