<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onParamsReceive="modelParamsReceive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="youjiData1" idColumn="yid"><column label="游记id" name="yid" type="String" xid="xid1"></column>
  <column label="游记名称" name="yname" type="String" xid="xid2"></column>
  <column label="游记内容" name="ycontent" type="String" xid="xid3"></column>
  <column label="游记图片" name="yimg" type="String" xid="xid4"></column>
  <column label="游记时间" name="ydate" type="String" xid="xid5"></column>
  <column label="发布者名称" name="username" type="String" xid="xid6"></column>
  <column label="发布者头像" name="userimg" type="String" xid="xid7"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1" style="color:#000000;"> 
      
  <div class="x-panel-top" xid="top1" style="position:absolute;"><div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar tb-box" xid="titleBar" style="background-color:transparent;">
   <div class="x-titlebar-left" xid="left1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon tb-backBtn" xid="backBtn" icon="icon-chevron-left" onClick="backBtnClick"> 
          <i xid="i6" class="icon-chevron-left" />  
          <span xid="span6">关闭</span> 
        </a></div>
   <div class="x-titlebar-title" xid="title1" style="color:#000000;"><![CDATA[查看游记]]></div>
   <div class="x-titlebar-right reverse" xid="right1"></div></div></div></div><div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="youjiData1">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col" xid="col14"><img src=" " alt="" xid="image2" style="width:100%;" bind-attr-src=' val("yimg")'></img></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col2">
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output2" bind-ref='ref("yname")' style="font-weight:bold;font-size:30px;"></div></div> </div><div component="$UI/system/components/bootstrap/row/row" class="row" xid="row3">
   <div class="col col-xs-2" xid="col9" style="height:50px;width:50px;"><img src=" " alt="" xid="image1" bind-attr-src=' val("userimg")' style="width:50px;height:50px;border-radius:25px;margin-left:15px;"></img></div>
   <div class="col col-xs-9" xid="col10"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output4" bind-ref='ref("username")' style="margin-left:20px;font-size:14px;color:#008080;height:20px;"></div><div component="$UI/system/components/justep/output/output" class="x-output" xid="output5" bind-ref='ref("ydate")' style="font-size:10px;color:#808080;margin-left:20px;height:20px;"></div></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col" xid="col11"><span xid="span1">
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" style="font-size:14px;" bind-ref='ref("ycontent")'></div>
  </span>
  </div>
   </div>
  
  </li></ul> </div>
  
  </div></div> 
<span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1" style="top:13px;left:91px;"></span></div>