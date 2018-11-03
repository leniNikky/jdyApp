define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/controlGroup/controlGroup');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/jdy1/actdetail'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cf6v22a';
	this._flag_='ac57c628f0c30a1b73908d90eede456d';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"abrief":{"define":"abrief","name":"abrief","relation":"abrief","type":"String"},"acontent":{"define":"acontent","name":"acontent","relation":"acontent","type":"String"},"adate":{"define":"adate","name":"adate","relation":"adate","type":"String"},"aid":{"define":"aid","name":"aid","relation":"aid","type":"String"},"aimg":{"define":"aimg","name":"aimg","relation":"aimg","type":"String"},"aname":{"define":"aname","name":"aname","relation":"aname","type":"String"},"aorganizer":{"define":"aorganizer","name":"aorganizer","relation":"aorganizer","type":"String"}},"directDelete":false,"events":{},"idColumn":"aid","initData":"[{\"aid\":\"2\",\"aname\":\"老上海·弄堂行\",\"acontent\":\"闲来无事，骑上几路，寻觅历史的足迹，体验法国梧桐的浪漫，伴着午后的阳光，骑着单车穿梭于里弄之中，游走于loft之间，感受弄堂里的小资情怀！时间2017-11-09；价格：98/人\",\"aorganizer\":\"斗云骑行\",\"adate\":\"2017-10-31\",\"aimg\":\"./img/act4.png\"}]","isMain":false,"limit":20,"xid":"activityData"});
}}); 
return __result;});