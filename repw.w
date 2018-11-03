<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="修改密码"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="backBtnClick" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">修改密码</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/controlGroup/controlGroup" class="x-control-group" title="title" xid="controlGroup1">
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="oldPw">
    <label class="x-label" xid="label7"><![CDATA[旧密码]]></label>
    <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="oldpw" placeHolder="请输入旧密码"></input></div> 
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="password1">
   <label class="x-label" xid="label1"><![CDATA[新密码]]></label>
   <input component="$UI/system/components/justep/input/password" class="form-control x-edit" xid="newpw" placeHolder="请确认密码"></input></div><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="repw1">
    <label class="x-label" xid="label4"><![CDATA[确认密码]]></label>
    <input component="$UI/system/components/justep/input/password" class="form-control x-edit" xid="repw" placeHolder="请确认密码"></input></div> 
   
   
    
  <a component="$UI/system/components/justep/button/button" class="btn btn-primary center-block" label="保存" xid="saveBtn" onClick="saveBtnClick">
    <i xid="i1"></i>
    <span xid="span2">注册</span></a></div></div>
  </div> 
<span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1" style="top:14px;left:49px;"></span></div>