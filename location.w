<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="记录骑行公里数"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">记录骑行公里数</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div xid="getAccDiv" class="list-row" style="margin:20px 20px 20px 20px;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default device-button-black" label="开始骑行" xid="getGeoBtn" onClick="getGeoBtnClick" disabled="true">
    <i xid="i4"></i>
    <span xid="span4">开始骑行</span></a> </div>
  <div xid="div1" class="list-row" style="margin-right:20px;margin-left:20px;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default device-button-black" label="结束骑行" xid="button1" onClick="get1GeoBtnClick" disabled="true">
    <i xid="i1"></i>
    <span xid="span1">结束骑行</span></a> </div></div>
  </div> 
</div>