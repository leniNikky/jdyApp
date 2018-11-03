<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:220px;left:414px;"/> 
<span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1"></span>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1"></span><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1" style="background-color:#F2F2F2;">
   <div class="x-panel-top" xid="top1">
   <div class="x-panel-top" xid="div14">
   <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar tb-box" xid="titleBar" style="background-color:transparent;">
    <div class="x-titlebar-left" xid="left1">
     <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon tb-backBtn" xid="backBtn" icon="icon-chevron-left" onClick="backBtnClick">
      <i xid="i6" class="icon-chevron-left"></i>
      <span xid="span6">关闭</span></a> </div> 
    <div class="x-titlebar-title" xid="title1" style="color:#000000;">发表游记</div>
    <div class="x-titlebar-right reverse" xid="right1"></div></div> </div></div><div class="x-panel-content" xid="content1" style="position:absolute;"><div xid="div15">
   <p xid="p4" style="font-size:16px;font-weight:bold;"><![CDATA[游记标题]]></p></div><textarea component="$UI/system/components/justep/textarea/textarea" xid="yname" placeHolder="请输入游记标题" class="form-control"></textarea><div xid="div16">
   <p xid="p5" style="font-size:16px;font-weight:bold;"><![CDATA[游记内容]]></p></div><textarea component="$UI/system/components/justep/textarea/textarea" xid="ycontent" placeHolder="请输入游记内容" class="form-control"></textarea><div xid="div2" style="margin-top:10px;margin-left:0px;">
   <p xid="p2" style="font-size:16px;float:left;font-weight:bold;"><![CDATA[上传图片]]></p><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="选择图片" xid="button1" icon="linear linear-camera" style="background-color:transparent;color:#3FA4C0;" onClick="button1Click">
   <i xid="i1" class="linear linear-camera"></i>
   <span xid="span1">选择图片</span></a></div><div component="$UI/system/components/justep/row/row" style="font-size:16px;" class="x-row" xid="row4">
   <div class="x-col x-col-fixed" xid="col10" style="width:auto;margin-left:5px;">
    <label xid="label4" style="font-size:16px;"><![CDATA[选择日期：]]></label></div> 
   <div class="x-col" xid="col11">
    <input component="$UI/system/components/justep/input/input" class="form-control" xid="ydate" dataType="Date" style="font-size:16px;margin-top:-5px;background-color:#FFFFFF;" placeHolder="请选择日期"></input></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1"></div>
   <div class="x-col x-col-80" xid="col2"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" label="发表" xid="submitBtn" onClick="submitBtnClick">
   <i xid="i2"></i>
   <span xid="span5">发表</span></a></div>
   <div class="x-col" xid="col3"></div></div>
  </div>
   </div>
  </div>