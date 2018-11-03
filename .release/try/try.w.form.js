define(function(require){
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