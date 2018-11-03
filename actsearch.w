<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window  x-scroll-view" component="$UI/system/components/justep/window/window" design="device:m;" style="width: 100%; height: 100%; background-image: url(http://localhost:44145/x5/UI2/v_/jdy1/none); background-size: cover;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:151px;left:220px;height:auto;"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="activityData" idColumn="aid"><column name="aid" type="String" xid="xid1"></column>
  <column name="aname" type="String" xid="xid2"></column>
  <column name="acontent" type="String" xid="xid3"></column>
  <column name="aorganizer" type="String" xid="xid4"></column>
  <column name="adate" type="String" xid="xid5"></column>
  <column name="aimg" type="String" xid="xid6"></column></div></div> 
<span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" style="top:17px;left:65px;" src="./actIntro.w"></span><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" height="48" xid="top1">
   <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar tb-index" xid="titleBar1">
    <div class="x-titlebar-left" xid="div1">
     <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="搜索" xid="button6" icon="icon-chevron-left" onClick="{operation:'window.close'}">
      <i xid="i6" class="icon-chevron-left"></i>
      <span xid="span6">搜索</span></a> </div> 
    <div class="x-titlebar-title" xid="div2">
     <div class="form-group has-feedback" xid="formGroup1">
      <input component="$UI/system/components/justep/input/input" class="form-control input-sm text-white" xid="keyInput"></input>
      </div> </div> 
    <div class="x-titlebar-right reverse" xid="div3">
     <a component="$UI/system/components/justep/button/button" class="btn x-yellow btn-only-label more" label="搜索" xid="searchBtn" onClick="searchBtnClick" style="background-color:#0080C0;border-style:inset inset inset inset;border-width:1px 1px 1px 1px;">
      <i xid="i11"></i>
      <span xid="span10">搜索</span></a> </div> </div> </div><div class="x-panel-content" xid="content1" style="position:absolute;"><div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1">
   <div class="x-content-center x-pull-down container" xid="div4">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i1"></i>
    <span class="x-pull-down-label" xid="span1">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div5">
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list3" data="activityData" bind-click="list3Click">
   <ul class="x-list-template" xid="listTemplateUl3">
    <li xid="li3">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="border-bottom-width:1px;">
      <div class="x-col x-col-fixed" xid="col2" style="width:auto;">
       <img src="" alt="" xid="image2" bind-attr-src=' $model.activityData.val("aimg")' style="height:90px;width:82px;"></img></div> 
      <div class="x-col" xid="col4">
       <div component="$UI/system/components/justep/output/output" class="x-output" xid="output6" bind-ref='$model.activityData.ref("aname")' style="font-size:16px;font-weight:bold;"></div>
       <div component="$UI/system/components/justep/output/output" class="x-output" xid="output5" bind-ref='$model.activityData.ref("acontent")' style="height:30px;width:100%;overflow:hidden;"></div>
       <div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref='$model.activityData.ref("adate")' style="flaot:left"></div></div> </div> </li> </ul> </div>
  </div>
   <div class="x-content-center x-pull-up" xid="div6">
    <span class="x-pull-up-label" xid="span2">加载更多...</span></div> </div></div>
   </div>
  </div>