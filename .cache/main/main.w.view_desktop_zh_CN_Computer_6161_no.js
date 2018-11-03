window.__justep.__ResourceEngine.loadCss([{url: '/UI2/v_6161_nol_zh_CNs_desktopd_pc/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/UI2/v_6161_nol_zh_CNs_desktopd_pc/system/components/comp.min.css', include: '$model/UI2/system/components/justep/lib/css2/dataControl,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/justep/lib/css3/round,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/dataTables/css/dataTables,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/locker/css/locker,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/lib/css4/e-commerce,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/lib/css1/linear,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_6161_nol_zh_CNs_desktopd_pc/system/components/comp2.min.js','/v_6161_nol_zh_CNs_desktopd_pc/system/core.min.js','/v_6161_nol_zh_CNs_desktopd_pc/system/common.min.js','/v_6161_nol_zh_CNs_desktopd_pc/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/windowContainer/windowContainer');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/bootstrap/carousel/carousel');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/justep/button/buttonGroup');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/jdy1/main'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cRNjAve';
	this._flag_='2b923282c4ad7c2886337353f937a2e6';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"content":{"define":"content","label":"content","name":"content","relation":"content","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"imgSrc":{"define":"imgSrc","label":"imgSrc","name":"imgSrc","relation":"imgSrc","type":"String"},"imgUrl":{"define":"imgUrl","label":"imgUrl","name":"imgUrl","relation":"imgUrl","type":"String"},"title":{"define":"title","label":"title","name":"title","relation":"title","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"imgSrc\":\"./img/menu12Pic1.jpg\",\"imgUrl\":\"./channel/menu1Pic1.w\",\"title\":\"关于我们\",\"content\":\"北京起步科技有限公司（Justep）成立于2006年7月，...\"},{\"id\":\"2\",\"imgSrc\":\"./img/menu13Pic2.jpg\",\"imgUrl\":\"./channel/menu1Pic5.w\",\"title\":\"联系我们\",\"content\":\"北京起步科技有限公司地址：北京市朝阳...\"}]","isMain":false,"limit":20,"xid":"data"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"icon":{"define":"icon","label":"icon","name":"icon","relation":"icon","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"imgUrl":{"define":"imgUrl","label":"imgUrl","name":"imgUrl","relation":"imgUrl","type":"String"},"title":{"define":"title","label":"title","name":"title","relation":"title","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"icon\":\"icon-android-contacts\",\"title\":\"关于我们\",\"imgUrl\":\"./channel/menu1Pic1.w\"},{\"id\":\"2\",\"icon\":\"icon-filing\",\"title\":\"产品中心\",\"imgUrl\":\"./channel/menu1Pic2.w\"},{\"id\":\"3\",\"icon\":\"icon-card\",\"title\":\"成功案例\",\"imgUrl\":\"./channel/menu1Pic3.w\"},{\"id\":\"4\",\"icon\":\"icon-compose\",\"title\":\"促销活动\",\"imgUrl\":\"./channel/menu14Pic2.w\"},{\"id\":\"5\",\"icon\":\"icon-ios7-telephone\",\"title\":\"最新动态\",\"imgUrl\":\"./channel/menu1Pic4.w\"}]","isMain":false,"limit":20,"xid":"navData"});
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"abrief":{"define":"abrief","label":"abrief","name":"abrief","relation":"abrief","type":"String"},"acontent":{"define":"acontent","label":"acontent","name":"acontent","relation":"acontent","type":"String"},"adate":{"define":"adate","label":"adate","name":"adate","relation":"adate","type":"String"},"aid":{"define":"aid","label":"aid","name":"aid","relation":"aid","type":"String"},"aimg":{"define":"aimg","label":"aimg","name":"aimg","relation":"aimg","type":"String"},"aname":{"define":"aname","label":"aname","name":"aname","relation":"aname","type":"String"},"aorganizer":{"define":"aorganizer","label":"aorganizer","name":"aorganizer","relation":"aorganizer","type":"String"}},"directDelete":false,"events":{},"idColumn":"aid","isMain":false,"limit":20,"queryAction":"queryActivity","saveAction":"saveActivity","tableName":"activity","url":"/jdy/jdy1_action","xid":"activityData"});
}}); 
return __result;});
