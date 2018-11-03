<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" class="main13" component="$UI/system/components/justep/window/window"
  design="device:mobile;" xid="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:142px;left:203px;" onLoad="modelLoad"/>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="./addyouji.w" style="top:11px;left:58px;"></span><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full x-has-iosstatusbar"
    xid="panel"> 
    <div class="x-panel-content" xid="content1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"> 
        <div class="x-titlebar-left" xid="div2"/>  
        <div class="x-titlebar-title" xid="div3"/>  
        <div class="x-titlebar-right reverse" xid="div4"> 
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-xs btn-only-label"
            label="设置" xid="button1" onClick="button1Click"> 
            <i xid="i1"/>  
            <span xid="span8">设置</span> 
          </a> 
        </div> 
      </div>  
      <div class="text-center o-user"> 
        <img alt="" xid="image1" class="img1" bind-attr-src="$model.getImageUrl('./img/user.png')" style="border-radius:50%"/>  
        <div xid="div1" class="h4"> 
          <a xid="a1" class="text-white" bind-click="a1Click"><![CDATA[立即登录]]></a> 
        </div>  
        </div>  
      <div component="$UI/system/components/justep/panel/panel" class="panel panel-default x-card" style="margin-top:20px;"> 
        <div class="list-group-item"> 
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon pull-right"
            label="button" xid="button11" icon="icon-ios7-arrow-right" onClick="button11Focus"> 
            <i xid="i17" class="icon-ios7-arrow-right text-muted"/>  
            <span xid="span14"/> 
          </a>  
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon"
            icon="linear linear-pencil"> 
            <i xid="i6" class="text-danger linear linear-pencil"/>  
            <span xid="span13"/> 
          </a>  
          <span xid="span15"><![CDATA[发表游记]]></span> 
        </div> 
      </div>  
      <div component="$UI/system/components/justep/panel/panel" class="panel panel-default x-card"> 
        <ul xid="ul1"> 
          <li class="list-group-item" xid="li11" bind-click="li11Click"> 
            <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon pull-right" label="button" xid="button14" icon="icon-ios7-arrow-right"> 
              <i xid="i27" class="icon-ios7-arrow-right text-muted" />  
              <span xid="span20" /> 
            </a>  
            <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" icon="linear linear-bicycle" xid="button15"> 
              <i xid="i28" class="linear linear-bicycle" />  
              <span xid="span21" /> 
            </a>  
            <span xid="span19">已报名的活动</span> 
          </li><li class="list-group-item" xid="li10" bind-click="li10Click"> 
            <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon pull-right"
              label="button" xid="button12" icon="icon-ios7-arrow-right"> 
              <i xid="i18" class="icon-ios7-arrow-right text-muted"/>  
              <span xid="span17"/> 
            </a>  
            <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon"
              icon="icon-ios7-keypad" xid="button13"> 
              <i xid="i26" class="text-warning icon-ios7-keypad"/>  
              <span xid="span18"/> 
            </a>  
            <span xid="span16"><![CDATA[我租赁的单车]]></span> 
          </li>  
            
          <li class="list-group-item" xid="li2" bind-click="li2Click">
   <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon pull-right" label="button" xid="button3" icon="icon-ios7-arrow-right">
    <i xid="i2" class="icon-ios7-arrow-right text-muted"></i>
    <span xid="span2"></span></a> 
   <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" icon="icon-ios7-briefcase-outline" xid="button2">
    <i xid="i3" class="text-warning icon-ios7-briefcase-outline"></i>
    <span xid="span1"></span></a> 
   <span xid="span3"><![CDATA[我租赁的装备]]></span></li><li class="list-group-item" xid="li1"> 
            <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon pull-right"
              label="button" xid="button16" icon="icon-ios7-arrow-right" onClick="button16Click"> 
              <i xid="i29" class="icon-ios7-arrow-right text-muted"/>  
              <span xid="span23"/> 
            </a>  
            <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon"
              icon="linear linear-book" xid="button17"> 
              <i xid="i30" class="text-danger linear linear-book"/>  
              <span xid="span24"/> 
            </a>  
            <span xid="span22">历史游记</span> 
          </li> 
        </ul> 
      </div>  
      <div component="$UI/system/components/justep/panel/panel" class="panel panel-default x-card" style="margin-top:20px;" xid="panel1">
   <div class="list-group-item" xid="div5">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon pull-right" label="button" xid="button4" icon="icon-ios7-arrow-right" onClick="button21Focus">
     <i xid="i4" class="icon-ios7-arrow-right text-muted"></i>
     <span xid="span4"></span></a> 
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" icon="linear linear-mapmarker" xid="button5">
     <i xid="i5" class="text-danger linear linear-mapmarker"></i>
     <span xid="span5"></span></a> 
    <span xid="span6">记录骑行公里数</span></div> </div></div> 
  </div> 
</div>
