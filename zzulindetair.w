<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:53px;left:250px;height:auto;" onParamsReceive="modelParamsReceive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="zbData1" idColumn="zbID"><column name="zbID" type="String" xid="xid1"></column>
  <column name="zbName" type="String" xid="xid2"></column>
  <column name="zbImage" type="String" xid="xid3"></column>
  <column name="zbPrice" type="String" xid="xid4"></column>
  <column name="zbIntroduce" type="String" xid="xid5"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="装备详情"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title"><![CDATA[装备详情]]></div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="zbData1">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
      <div class="x-col" xid="col1">
       <img src="" alt="" xid="image1" bind-attr-src=' $model.zbData1.val("zbImage")' style="width:100%;"></img>
       <div component="$UI/system/components/justep/controlGroup/controlGroup" class="x-control-group"  title="【活动流程】" xid="controlGroup1">
        <div class="x-control-group-title" xid="controlGroupTitle1" style="background-color:#FFFFFF;">
         <span xid="span1" style="font-size:18px;" bind-text='$model.zbData1.val("zbName")'></span>
         <div component="$UI/system/components/justep/output/output" class="x-output" xid="output4" bind-ref='$model.zbData1.ref("zbIntroduce")' style="padding-left:15px;"></div></div> </div> </div> </div> 
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="padding-left:20px;">
    
   
    <div class="x-col x-col-fixed x-col-center" xid="col2" style="width:auto;">
    <span xid="span3" class="text-danger">￥</span></div><div component="$UI/system/components/justep/output/output" class="x-output text-danger" xid="output1" bind-ref='$model.zbData1.ref("zbPrice")' style="height:39px;"></div><div class="x-col x-col-fixed x-col-center" xid="col3" style="width:auto;">
    <span xid="span2">/次</span></div></div></li> </ul> </div>
  <div component="$UI/system/components/justep/controlGroup/controlGroup" class="x-control-group" xid="controlGroup4" style="margin-bottom: 20px;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-success center-block" xid="enrollBtn" style="margin-top:20px;font-weight:bold;font-size:16px;background-color:#0080C0;" onClick="enrollBtnClick">
    <i xid="i1"></i>
    <span xid="span5"><![CDATA[立即租赁]]></span></a> </div></div>
  </div> 
</div>