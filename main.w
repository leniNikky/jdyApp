<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" class="main12" component="$UI/system/components/justep/window/window"
  design="device:mobile;" xid="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="data" idColumn="id"> 
      <column label="id" name="id" type="String" xid="default1"/>  
      <column label="imgSrc" name="imgSrc" type="String" xid="default2"/>  
      <column label="imgUrl" name="imgUrl" type="String" xid="default3"/>  
      <column label="title" name="title" type="String" xid="default4"/>  
      <column label="content" name="content" type="String" xid="default5"/>  
      <data xid="default5">[{&quot;id&quot;:&quot;1&quot;,&quot;imgSrc&quot;:&quot;./img/menu12Pic1.jpg&quot;,&quot;imgUrl&quot;:&quot;./channel/menu1Pic1.w&quot;,&quot;title&quot;:&quot;关于我们&quot;,&quot;content&quot;:&quot;北京起步科技有限公司（Justep）成立于2006年7月，...&quot;},{&quot;id&quot;:&quot;2&quot;,&quot;imgSrc&quot;:&quot;./img/menu13Pic2.jpg&quot;,&quot;imgUrl&quot;:&quot;./channel/menu1Pic5.w&quot;,&quot;title&quot;:&quot;联系我们&quot;,&quot;content&quot;:&quot;北京起步科技有限公司地址：北京市朝阳...&quot;}]</data></div>  
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="navData" idColumn="id"> 
      <column label="id" name="id" type="String" xid="default6"/>  
      <column label="icon" name="icon" type="String" xid="default7"/>  
      <column label="title" name="title" type="String" xid="default8"/>  
      <column label="imgUrl" name="imgUrl" type="String" xid="default9"/>  
      <data xid="default11">[{&quot;id&quot;:&quot;1&quot;,&quot;icon&quot;:&quot;icon-android-contacts&quot;,&quot;title&quot;:&quot;关于我们&quot;,&quot;imgUrl&quot;:&quot;./channel/menu1Pic1.w&quot;},{&quot;id&quot;:&quot;2&quot;,&quot;icon&quot;:&quot;icon-filing&quot;,&quot;title&quot;:&quot;产品中心&quot;,&quot;imgUrl&quot;:&quot;./channel/menu1Pic2.w&quot;},{&quot;id&quot;:&quot;3&quot;,&quot;icon&quot;:&quot;icon-card&quot;,&quot;title&quot;:&quot;成功案例&quot;,&quot;imgUrl&quot;:&quot;./channel/menu1Pic3.w&quot;},{&quot;id&quot;:&quot;4&quot;,&quot;icon&quot;:&quot;icon-compose&quot;,&quot;title&quot;:&quot;促销活动&quot;,&quot;imgUrl&quot;:&quot;./channel/menu14Pic2.w&quot;},{&quot;id&quot;:&quot;5&quot;,&quot;icon&quot;:&quot;icon-ios7-telephone&quot;,&quot;title&quot;:&quot;最新动态&quot;,&quot;imgUrl&quot;:&quot;./channel/menu1Pic4.w&quot;}]</data></div> 
  <div component="$UI/system/components/justep/data/baasData" autoLoad="true" xid="activityData" queryAction="queryActivity" saveAction="saveActivity" url="/jdy/jdy1_action" tableName="activity" idColumn="aid"><column label="aid" name="aid" type="String" xid="default17"></column>
  <column label="aname" name="aname" type="String" xid="default18"></column>
  <column label="abrief" name="abrief" type="String" xid="default19"></column>
  <column label="acontent" name="acontent" type="String" xid="default20"></column>
  <column label="aorganizer" name="aorganizer" type="String" xid="default21"></column>
  <column label="adate" name="adate" type="String" xid="default22"></column>
  <column label="aimg" name="aimg" type="String" xid="default23"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"> 
    <div class="x-panel-content"> 
        
        
        
        
      <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents2">
   <div class="x-contents-content" xid="content4">
  <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1">
   <div class="x-titlebar-left" xid="div6">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" icon="e-commerce e-commerce-saomiao" xid="scanBtn" onClick="scanBtnClick">
     <i xid="i6" class="e-commerce e-commerce-saomiao"></i>
     <span xid="span6"></span></a> </div> 
   <div class="x-titlebar-title tb-searchBox" xid="div1" bind-click="searchBtnClick">
    <i xid="i10" class="icon-ios7-search-strong"></i>
    <span xid="span12">城市趣骑行</span>
    <div xid="div3" style="border-bottom-style:ridge;border-bottom-width:1px;"></div></div> 
   <div class="x-titlebar-right reverse" xid="div5">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" xid="button8" icon="dataControl dataControl-user" href="login.w">
     <i xid="i8" class="dataControl dataControl-user"></i>
     <span xid="span11"></span></a> </div> </div><div component="$UI/system/components/bootstrap/carousel/carousel" class="x-carousel carousel" xid="carousel1"> 
        <ol class="carousel-indicators" xid="ol1" />  
        <div class="x-contents carousel-inner" role="listbox" component="$UI/system/components/justep/contents/contents" active="0" slidable="true" wrap="true" swipe="true" xid="contents1" style="height:200px;"> 
          <div class="x-contents-content" xid="content1"> 
            <img bind-attr-src="$model.toUrl('./img/carouselBox181.jpg')" height="200px" style="width:100%;"/> 
          </div>  
          <div class="x-contents-content" xid="content2"> 
            <img bind-attr-src="$model.toUrl('./img/carouselBox62.jpg')" height="200px" style="width:100%;"/> 
          </div>  
          <div class="x-contents-content" xid="content3"> 
            <img bind-attr-src="$model.toUrl('./img/carouselBox63.jpg')" height="200px" style="width:100%;"/> 
          </div> 
        </div>  
        <a class="left carousel-control" role="button" xid="a1"> 
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true" xid="span1" />  
          <span class="sr-only" xid="span2">Previous</span> 
        </a>  
        <a class="right carousel-control" role="button" xid="a2"> 
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true" xid="span3" />  
          <span class="sr-only" xid="span4">Next</span> 
        </a> 
      </div>
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list3" data="activityData" bind-click="list3Click">
   <ul class="x-list-template" xid="listTemplateUl3">
    <li xid="li3"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="border-bottom-width:1px;">
   <div class="x-col x-col-fixed" xid="col3" style="width:auto;">
    <img src="" alt="" xid="image2" bind-attr-src=' val("aimg")' style="height:90px;width:82px;"></img></div> 
   <div class="x-col" xid="col4">
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output6" bind-ref='ref("aname")' style="font-size:16px;font-weight:bold;"></div>
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output5" bind-ref='ref("acontent")' style="overflow:hidden;height:30px;width:100%;"></div><div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref='ref("adate")' style="flaot:left"></div></div> 
  </div></li></ul> </div><span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="./actIntro.w" style="top:10px;left:73px;" width="100%" height="100%"></span>
  </div>
  <div class="x-contents-content" xid="content5"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer3" src="./zulin.w"></div></div>
  
  <div class="x-contents-content" xid="content6"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer1" src="./youji.w"></div></div><div class="x-contents-content" xid="content7"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer2" src="./index-user.w"></div></div></div></div> 
  <div class="x-panel-bottom" xid="bottom1"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified" tabbed="true" xid="buttonGroup1">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="旅行" xid="button1" icon="linear linear-bicycle" target="content4">
    <i xid="i1" class="linear linear-bicycle"></i>
    <span xid="span5">旅行</span></a> 
   <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="租赁" xid="button2" icon="linear linear-store" target="content5">
    <i xid="i3" class="linear linear-store"></i>
    <span xid="span7">租赁</span></a> 
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="游记" xid="button3" icon="linear linear-book" target="content6">
   <i xid="i4" class="linear linear-book"></i>
   <span xid="span8">游记</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="我" xid="button4" icon="linear linear-user" target="content7">
   <i xid="i5" class="linear linear-user"></i>
   <span xid="span9">我</span></a></div></div></div> 
</div>
