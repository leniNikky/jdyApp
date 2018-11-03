<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" class="main13" component="$UI/system/components/justep/window/window"
  design="device:m;" xid="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:13px;top:202px;"
    onLoad="modelLoad"> 
    <div component="$UI/system/components/justep/data/baasData" autoLoad="true" xid="youjiData1" queryAction="queryYouji" saveAction="saveYouji" url="/jdy/jdy1_action" tableName="youji" idColumn="yid"><column label="游记ID" name="yid" type="String" xid="default1"></column>
  <column label="游记名称" name="yname" type="String" xid="default2"></column>
  <column label="游记内容" name="ycontent" type="String" xid="default3"></column>
  <column label="游记图片" name="yimg" type="String" xid="default4"></column>
  <column label="游记时间" name="ydate" type="String" xid="default5"></column>
  <column label="username" name="username" type="String" xid="default6"></column>
  <column label="userimg" name="userimg" type="String" xid="default7"></column></div></div>  
  <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents2">
   <div class="x-contents-content" xid="content3"><div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="navContents" wrap="false"> 
                    <div class="x-contents-content" xid="navContent1" bind-touchmove="navContent1Touchmove" bind-touchstart="navContent1Touchstart"> 
                        
                      <div component="$UI/system/components/bootstrap/carousel/carousel" class="x-carousel carousel x-banner" xid="carousel1"> 
                        <ol class="carousel-indicators" xid="ol1" />  
                        <div class="x-contents carousel-inner" role="listbox" component="$UI/system/components/justep/contents/contents" active="0" slidable="true" wrap="true" swipe="true" xid="bannerContents"> 
                          <div class="x-contents-content" xid="banner1"> 
                            <img alt="" xid="image1" id="image1" class="image-wall img1" bind-attr-src="$model.getImageUrl('./main/img/yj2.jpg')" />  
                            <div class="x-title" xid="div17"> 
                              <img alt="" class="img_small" bind-attr-src="$model.getImageUrl('./main/img/icon1.png')" xid="image4" />  
                              <span xid="span35">胖胎车的冒险零下19℃骑行阿拉斯加荒原</span> 
                            </div> 
                          </div>  
                          <div class="x-contents-content" xid="banner2"> 
                            <img alt="" xid="image2" id="image2" class="image-wall img1" bind-attr-src="$model.getImageUrl('./main/img/yj1.jpg')" />  
                            <div class="x-title" xid="div10"> 
                              <img alt="" class="img_small" xid="image8" bind-attr-src="$model.getImageUrl('./main/img/icon1.png')" />  
                              <span xid="span22">骑行入藏 是为了让生命更有意义</span> 
                            </div> 
                          </div>  
                          <div class="x-contents-content" xid="banner3"> 
                            <img alt="" xid="image13" id="image13" class="image-wall img1" bind-attr-src="$model.getImageUrl('./main/img/yj3.jpg')" />  
                            <div class="x-title" xid="div11"> 
                              <img alt="" class="img_small" xid="image9" bind-attr-src="$model.getImageUrl('./main/img/icon1.png')" />  
                              <span xid="span23">穿越塔克拉玛干沙漠骑行之旅</span> 
                            </div> 
                          </div>  
                          <div class="x-contents-content" xid="banner4"> 
                            <img alt="" xid="image14" id="image14" class="image-wall img1" bind-attr-src="$model.getImageUrl('./main/img/yj4.jpg')" />  
                            <div class="x-title" xid="div12"> 
                              <img alt="" class="img_small" xid="image10" bind-attr-src="$model.getImageUrl('./main/img/icon1.png')" />  
                              <span xid="span24">纵贯美洲大陆（5）加拿大的“中土世界”</span> 
                            </div> 
                          </div> 
                        </div> 
                      </div>  
                      <div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="youjiData1" style="background-color:white;">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="background-color:transparent;" bind-click="list2Click">
   <div class="x-col x-col-fixed" xid="col3" style="width:auto;">
    <img src="" alt="" xid="image5" bind-attr-src=' val("yimg")' style="height:90px;width:82px;"></img></div> 
   <div class="x-col" xid="col4" style="width:75%;">
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output6" bind-ref='ref("yname")' style="font-size:16px;font-weight:bold;overflow:hidden;"></div>
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output6" bind-ref='ref("ycontent")' style="overflow:hidden;width:98%;position:relative;height:30px;">...</div>
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref='ref("ydate")' style="flaot:left;overflow:hidden;"></div></div> </div></li></ul> <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog2" src="./youjidetair.w" style="top:20px;left:57px;"></span></div></div>  
                    </div></div></div> 
<div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1">
   <div class="x-titlebar-left" xid="left1"></div>
   <div class="x-titlebar-title" xid="title1">游记</div>
   <div class="x-titlebar-right reverse" xid="right1"></div></div></div>