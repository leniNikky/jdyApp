<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
  </div>  
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1" style="top:18px;left:79px;"></span><div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="修改个人信息"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              xid="backBtn" onClick="backBtnClick"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">修改个人信息</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/controlGroup/controlGroup" class="x-control-group" title="title" xid="controlGroup1">
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit7">
    <label class="x-label" xid="label7">手机号</label>
    <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="userPhone" placeHolder="请输入新手机号"></input></div> 
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1">
    <label class="x-label" xid="label1">用户名</label>
    <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="userName" placeHolder="请输入新用户名"></input></div> 
   
   
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit6">
    <label class="x-label" xid="label6">地址</label>
    <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="useraddress" placeHolder="请输入新地址"></input></div> 
   <a component="$UI/system/components/justep/button/button" class="btn btn-primary center-block" label="保存" xid="regBtn" onClick="regBtnClick">
    <i xid="i1"></i>
    <span xid="span2">保存</span></a> </div></div>
  </div> 
</div>