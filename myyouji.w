<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="youjiData1" idColumn="yid"><column name="yid" type="String" xid="xid1"></column>
  <column label="游记名称" name="yname" type="String" xid="xid2"></column>
  <column label="游记内容" name="ycontent" type="String" xid="xid3"></column>
  <column name="yimg" type="String" xid="xid4"></column>
  <column name="ydate" type="String" xid="xid5"></column>
  <column name="userID" type="String" xid="xid6"></column>
  <column name="username" type="String" xid="xid7"></column>
  <column name="userimg" type="String" xid="xid8"></column></div></div>  
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1" style="top:10px;left:76px;" onReceive="windowReceiver1Receive"></span>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" style="top:17px;left:147px;" src="./youjidetair.w"></span><div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="我的游记"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="backBtnClick" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title"><![CDATA[我的游记]]></div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content x-scroll-view" xid="content1" _xid="C7CEEE6946C000012281114919501157" style="bottom: 0px; background-size: cover; background-image: url(http://localhost:46332/x5/UI2/v_/jdy1/none);"><div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1">
   <div class="x-content-center x-pull-down container" xid="div1">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i1"></i>
    <span class="x-pull-down-label" xid="span1">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div2"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="youjiData1" bind-click="list1Click">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="background-color:transparent;">
   <div class="x-col x-col-fixed" xid="col3" style="width:auto;">
    <img src="" alt="" xid="image5" bind-attr-src=' $model.youjiData1.val("yimg")' style="height:90px;width:82px;"></img></div> 
   <div class="x-col" xid="col4" style="width:75%;">
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output6" bind-ref='ref("yname")' style="font-size:16px;font-weight:bold;overflow:hidden;"></div>
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output6" bind-ref='ref("ycontent")' style="overflow:hidden;width:98%;position:relative;height:30px;">...</div>
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref='ref("ydate")' style="flaot:left;overflow:hidden;"></div></div> </div></li></ul> </div></div>
   <div class="x-content-center x-pull-up" xid="div3">
    <span class="x-pull-up-label" xid="span2">加载更多...</span></div> </div></div>
  </div> 
</div>