<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onParamsReceive="modelParamsReceive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="activityData" idColumn="aid"><column name="aid" type="String" xid="xid1"></column>
  <column name="aname" type="String" xid="xid2"></column>
  <column name="abrief" type="String" xid="xid3"></column>
  <column name="acontent" type="String" xid="xid4"></column>
  <column name="aorganizer" type="String" xid="xid5"></column>
  <column name="adate" type="String" xid="xid6"></column>
  <column name="aimg" type="String" xid="xid7"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="活动详情"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
             
          <a component="$UI/system/components/justep/button/button" label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left" />  
              <span></span> 
            </a></div>  
          <div class="x-titlebar-title"><![CDATA[活动详情]]></div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1">
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="activityData">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1"><img src="" alt="" xid="image1" bind-attr-src=' $model.activityData.val("aimg")' style="width:100%;"></img><div component="$UI/system/components/justep/controlGroup/controlGroup" class="x-control-group" title="【活动流程】" xid="controlGroup1">
   <div class="x-control-group-title" xid="controlGroupTitle1" style="background-color:#FFFFFF;">
    <span xid="span1" style="font-size:18px;" bind-text='$model.activityData.val("aname")'><![CDATA[]]></span><div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref='$model.activityData.ref("acontent")' style="padding-left:15px;"></div></div> 
   </div><div component="$UI/system/components/justep/controlGroup/controlGroup" class="x-control-group" title="活动组织方" xid="controlGroup2" bind-click="controlGroup2Click">
   <div class="x-control-group-title" xid="controlGroupTitle2" style="background-color:#FFFFFF;">
    <span xid="span6" style="font-size:18px;"><![CDATA[活动组织方]]></span>
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output4" bind-ref='$model.activityData.ref("aorganizer")' style="padding-left:15px;"></div></div> </div><div component="$UI/system/components/justep/controlGroup/controlGroup" class="x-control-group" title="发布日期" xid="controlGroup5">
   <div class="x-control-group-title" xid="controlGroupTitle4" style="background-color:#FFFFFF;">
    <span xid="span7" style="font-size:18px;"><![CDATA[发布日期]]></span>
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output5" bind-ref='$model.activityData.ref("adate")' style="padding-left:15px;"></div></div> </div><div component="$UI/system/components/justep/controlGroup/controlGroup" class="x-control-group" title="【欢迎报名】" xid="controlGroup3" style="margin-top:30px;background-color:white;">
   <div class="x-control-group-title" xid="controlGroupTitle3">
    <span xid="span3" style="font-size:18px;">【欢迎报名】</span><div xid="div1" style="font-size:14px;margin-top:30px;margin-left:10px;">活动结束，还有神秘礼品相送哦！</div></div> 
   
   </div>
  </div>
   </div>
  </li></ul> </div>
  
  
  <div component="$UI/system/components/justep/controlGroup/controlGroup" class="x-control-group"  xid="controlGroup4" style="margin-bottom: 20px;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-success center-block"  xid="enrollBtn" style="margin-top:20px;font-weight:bold;font-size:16px;background-color:#0080C0;" onClick="enrollBtnClick">
    <i xid="i1"></i>
    <span xid="span5">立即报名</span></a> </div></div>
  </div> 
</div>