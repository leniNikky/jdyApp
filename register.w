<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:168px;top:68px;"></div>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" style="top:7px;left:64px;"></span><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="top1">
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        xid="titleBar1" title="斗云用户注册"> 
        <div class="x-titlebar-left" xid="left1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button1" icon="icon-chevron-left" onClick="{operation:'window.close'}">
   <i xid="i2" class="icon-chevron-left"></i>
   <span xid="span1"></span></a></div>  
        <div class="x-titlebar-title" xid="title1"><![CDATA[斗云用户注册]]></div>  
        <div class="x-titlebar-right reverse" xid="right1"/>
      </div>
    </div>  
    <div class="x-panel-content" xid="content1">
      <div component="$UI/system/components/justep/controlGroup/controlGroup"
        class="x-control-group" title="title" xid="controlGroup1">  
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit7">
   <label class="x-label" xid="label7"><![CDATA[手机号]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="userPhone" placeHolder="请输入手机号"></input></div><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30"
          xid="labelEdit1"> 
          <label class="x-label" xid="label1"><![CDATA[用户名]]></label>  
          <input component="$UI/system/components/justep/input/input" class="form-control x-edit"
            xid="userName" placeHolder="请输入用户名"/>
        </div>  
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2">
   <label class="x-label" xid="label4"><![CDATA[密码]]></label>
   <input component="$UI/system/components/justep/input/password" class="form-control x-edit" xid="password1" placeHolder="请输入密码"></input></div><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit3">
   <label class="x-label" xid="label10"></label>
   <input component="$UI/system/components/justep/input/password" class="form-control x-edit" xid="password2" placeHolder="请确认密码"></input></div><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit6">
   <label class="x-label" xid="label6"><![CDATA[地址]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="useraddress" placeHolder="请输入地址"></input></div><a component="$UI/system/components/justep/button/button" class="btn btn-primary center-block" label="注册" xid="regBtn" onClick="regBtnClick">
   <i xid="i1"></i>
   <span xid="span2">注册</span></a>
  </div>  
        
      
    </div>  
    <div class="x-panel-bottom" xid="bottom1"></div>
  </div>
</div>