<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:353px;top:1px;">
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="listData" idColumn="photo">
      <column label="图片" name="photo" type="String" xid="xid1"/>  
      <column label="标题" name="title" type="String" xid="xid2"/>  
      <column label="价格" name="price" type="String" xid="xid3"/>  
      <column label="内容" name="content" type="String" xid="xid4"/>  
      <data xid="default1">[{&quot;photo&quot;:&quot;2.jpg&quot;,&quot;title&quot;:&quot;真皮高跟鞋&quot;,&quot;price&quot;:&quot;￥128&quot;,&quot;content&quot;:&quot;买商品送礼物&quot;},{&quot;photo&quot;:&quot;1.jpg&quot;,&quot;title&quot;:&quot;韩版连衣裙&quot;,&quot;price&quot;:&quot;￥78&quot;,&quot;content&quot;:&quot;满200元即赠热销商品&quot;},{&quot;photo&quot;:&quot;4.jpg&quot;,&quot;title&quot;:&quot;ThinkPad 电脑&quot;,&quot;price&quot;:&quot;￥4588&quot;,&quot;content&quot;:&quot;买商品送礼物&quot;},{&quot;photo&quot;:&quot;5.jpg&quot;,&quot;title&quot;:&quot;德国进口有机奶&quot;,&quot;price&quot;:&quot;￥78&quot;,&quot;content&quot;:&quot;满200元即赠热销商品&quot;},{&quot;photo&quot;:&quot;1.jpg&quot;,&quot;title&quot;:&quot;韩版连衣裙&quot;,&quot;price&quot;:&quot;￥78&quot;,&quot;content&quot;:&quot;买商品送礼物，即买即送&quot;},{&quot;photo&quot;:&quot;2.jpg&quot;,&quot;title&quot;:&quot;真皮高跟鞋&quot;,&quot;price&quot;:&quot;￥128&quot;,&quot;content&quot;:&quot;满200元即赠热销商品&quot;},{&quot;photo&quot;:&quot;5.jpg&quot;,&quot;title&quot;:&quot;德国进口有机奶&quot;,&quot;price&quot;:&quot;￥78&quot;,&quot;content&quot;:&quot;买商品送礼物，即买即送&quot;},{&quot;photo&quot;:&quot;4.jpg&quot;,&quot;title&quot;:&quot;ThinkPad 电脑&quot;,&quot;price&quot;:&quot;￥4588&quot;,&quot;content&quot;:&quot;满200元即赠热销商品&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/baasData" autoLoad="true" xid="actData1" queryAction="queryActivity" saveAction="saveActivity" url="/jdy/jdy1_action" tableName="activity" idColumn="aid"><column label="aid" name="aid" type="String" xid="default2"></column>
  <column label="aname" name="aname" type="String" xid="default3"></column>
  <column label="acontent" name="acontent" type="String" xid="default4"></column>
  <column label="aorganizer" name="aorganizer" type="String" xid="default5"></column>
  <column label="adate" name="adate" type="String" xid="default6"></column>
  <column label="aimg" name="aimg" type="String" xid="default7"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        xid="titleBar1" title="我的淘宝"> 
        <div class="x-titlebar-left" xid="left1"/>  
        <div class="x-titlebar-title" xid="title1">我的淘宝</div>  
        <div class="x-titlebar-right reverse" xid="right1"/>
      </div> 
    </div>  
    <div class="x-panel-content  x-scroll-view" xid="content1" _xid="C6F5B0969BE00001D49313F012631710"> 
      
  <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1">
   <div class="x-content-center x-pull-down container" xid="div1">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i3"></i>
    <span class="x-pull-down-label" xid="span3">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div2"><div component="$UI/system/components/justep/list/list" class="x-list x-cards" xid="list2" data="listData">
   <ul class="x-list-template list-group" xid="listTemplateUl2">
    <li xid="li2" class="list-group-item">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
      <div class="x-col x-col-fixed" xid="col3" style="width:auto;">
       <img src="" alt="" xid="image2" bind-attr-src=' $model.getImageUrl( $object.val("photo"))' style="height:90px;width:82px;"></img></div> 
      <div class="x-col" xid="col4">
       
       <div component="$UI/system/components/justep/output/output" class="x-output" xid="output6" bind-ref="ref('title')" style="font-size:16px;font-weight:bold;"></div><div component="$UI/system/components/justep/output/output" class="x-output" xid="output5" bind-ref="ref('price')"></div>
       </div> </div> </li> </ul> </div></div>
   <div class="x-content-center x-pull-up" xid="div3">
    <span class="x-pull-up-label" xid="span4">加载更多...</span></div> </div></div>  
    <div class="x-panel-bottom" xid="bottom1" style="background-color:#f2f2f2;"> 
      <div component="$UI/system/components/justep/button/buttonGroup" class="btn-group btn-group-justified"
        tabbed="true" xid="buttonGroup1" style="height:100%;"> 
        <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top"
          label="首页" xid="homeBtn" style="color:#000000;" icon="glyphicon glyphicon-home"> 
          <i xid="i22" class="glyphicon glyphicon-home"/>  
          <span xid="span23">首页</span>
        </a>  
        <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="购物车" xid="cartBtn" style="color:#000000;" icon="icon-ios7-cart">
   <i xid="i2" class="icon-ios7-cart"></i>
   <span xid="span2">购物车</span></a><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top"
          label="个人中心" xid="userBtn" style="color:#000000;" icon="icon-android-social-user"> 
          <i xid="i24" class="icon-android-social-user"/>  
          <span xid="span25">个人中心</span>
        </a> 
      </div> 
    </div> 
  </div>
</div>