define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/jdy1/myact'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cZjeYny';
	this._flag_='faa91b8090b98538e45f4276b0570403';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"acontent":{"define":"acontent","name":"acontent","relation":"acontent","type":"String"},"adate":{"define":"adate","name":"adate","relation":"adate","type":"String"},"aid":{"define":"aid","name":"aid","relation":"aid","type":"String"},"aimg":{"define":"aimg","name":"aimg","relation":"aimg","type":"String"},"aname":{"define":"aname","name":"aname","relation":"aname","type":"String"},"aorganizer":{"define":"aorganizer","name":"aorganizer","relation":"aorganizer","type":"String"}},"directDelete":false,"events":{},"idColumn":"aid","isMain":false,"limit":20,"xid":"myactdata"});
}}); 
return __result;});