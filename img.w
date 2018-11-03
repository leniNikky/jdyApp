<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
  </div>  
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1"></span><div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="修改头像"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="backBtnClick" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title"><![CDATA[修改头像]]></div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div xid="div2" style="margin-top:10px;margin-left:0px;">
   <p xid="p2" style="font-size:16px;font-weight:bold;margin-left:10px;">上传图片</p>
   <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="选择图片" xid="button1" icon="linear linear-camera" style="background-color:transparent;color:#3FA4C0;margin-left:10px;" onClick="button1Click">
    <i xid="i1" class="linear linear-camera"></i>
    <span xid="span1">选择图片</span></a> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1"></div>
   <div class="x-col x-col-80" xid="col2">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" label="保存" onClick="submitBtnClick">
     <i xid="i2"></i>
     <span xid="span5">保存</span></a> </div> 
   <div class="x-col" xid="col3"></div></div></div>
  </div> 
</div>