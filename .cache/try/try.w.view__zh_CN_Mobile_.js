window.__justep.__ResourceEngine.loadCss([{url: '/UI2/v_b9b90784eeff49fda9f64ea3d098cc67l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/UI2/v_9779f7bdd97a4e2c8e74f357d1d564fcl_zh_CNs_d_m/system/components/comp.min.css', include: '$model/UI2/system/components/justep/lib/css2/dataControl,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/justep/lib/css3/round,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/dataTables/css/dataTables,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/locker/css/locker,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/lib/css4/e-commerce,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/lib/css1/linear,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_54627b9bc5ba41de8a53a084030a4596l_zh_CNs_d_m/system/core.min.js','/v_35a60993441a4f82bb5d4ee5c455d2fdl_zh_CNs_d_m/system/common.min.js','/v_4ea4e5b3a97b421f9c91594bcfefa2b9l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/justep/button/buttonGroup');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/jdy1/try'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cqiMjie';
	this._flag_='bb50a91a501ee17f27d661309fe8026d';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"content":{"define":"content","label":"内容","name":"content","relation":"content","type":"String"},"photo":{"define":"photo","label":"图片","name":"photo","relation":"photo","type":"String"},"price":{"define":"price","label":"价格","name":"price","relation":"price","type":"String"},"title":{"define":"title","label":"标题","name":"title","relation":"title","type":"String"}},"directDelete":false,"events":{},"idColumn":"photo","initData":"[{\"photo\":\"2.jpg\",\"title\":\"真皮高跟鞋\",\"price\":\"￥128\",\"content\":\"买商品送礼物\"},{\"photo\":\"1.jpg\",\"title\":\"韩版连衣裙\",\"price\":\"￥78\",\"content\":\"满200元即赠热销商品\"},{\"photo\":\"4.jpg\",\"title\":\"ThinkPad 电脑\",\"price\":\"￥4588\",\"content\":\"买商品送礼物\"},{\"photo\":\"5.jpg\",\"title\":\"德国进口有机奶\",\"price\":\"￥78\",\"content\":\"满200元即赠热销商品\"},{\"photo\":\"1.jpg\",\"title\":\"韩版连衣裙\",\"price\":\"￥78\",\"content\":\"买商品送礼物，即买即送\"},{\"photo\":\"2.jpg\",\"title\":\"真皮高跟鞋\",\"price\":\"￥128\",\"content\":\"满200元即赠热销商品\"},{\"photo\":\"5.jpg\",\"title\":\"德国进口有机奶\",\"price\":\"￥78\",\"content\":\"买商品送礼物，即买即送\"},{\"photo\":\"4.jpg\",\"title\":\"ThinkPad 电脑\",\"price\":\"￥4588\",\"content\":\"满200元即赠热销商品\"}]","isMain":false,"limit":20,"xid":"listData"});
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"acontent":{"define":"acontent","label":"acontent","name":"acontent","relation":"acontent","type":"String"},"adate":{"define":"adate","label":"adate","name":"adate","relation":"adate","type":"String"},"aid":{"define":"aid","label":"aid","name":"aid","relation":"aid","type":"String"},"aimg":{"define":"aimg","label":"aimg","name":"aimg","relation":"aimg","type":"String"},"aname":{"define":"aname","label":"aname","name":"aname","relation":"aname","type":"String"},"aorganizer":{"define":"aorganizer","label":"aorganizer","name":"aorganizer","relation":"aorganizer","type":"String"}},"directDelete":false,"events":{},"idColumn":"aid","isMain":false,"limit":20,"queryAction":"queryActivity","saveAction":"saveActivity","tableName":"activity","url":"/jdy/jdy1_action","xid":"actData1"});
}}); 
return __result;});
