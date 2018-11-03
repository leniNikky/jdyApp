<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="myactdata" idColumn="aid"><column name="aid" type="String" xid="xid1"></column>
  <column name="aname" type="String" xid="xid2"></column>
  <column name="acontent" type="String" xid="xid3"></column>
  <column name="aimg" type="String" xid="xid4"></column>
  <column name="adate" type="String" xid="xid5"></column>
  <column name="aorganizer" type="String" xid="xid6"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="我报名的活动"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">我报名的活动</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1" _xid="C7D0352B48A00001158D1323F5B0FA50" style="bottom: 0px; background-size: cover; background-image: url(http://localhost:45654/x5/UI2/v_/jdy1/none);"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list3" data="myactdata">
   <ul class="x-list-template" xid="listTemplateUl3">
    <li xid="li3">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="border-bottom-width:1px;">
      <div class="x-col x-col-fixed" xid="col3" style="width:auto;">
       <img src="" alt="" xid="image2" bind-attr-src=' $model.myactdata.val("aimg")' style="height:90px;width:82px;"></img></div> 
      <div class="x-col" xid="col4">
       <div component="$UI/system/components/justep/output/output" class="x-output" xid="output6" bind-ref='$model.myactdata.ref("aname")' style="font-size:16px;font-weight:bold;"></div>
       <div component="$UI/system/components/justep/output/output" class="x-output" xid="output5" bind-ref='$model.myactdata.ref("acontent")' style="overflow:hidden;height:30px;width:100%;"></div>
       <div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref='$model.myactdata.ref("adate")' style="flaot:left"></div></div> </div> </li> </ul> </div></div>
  </div> 
</div>