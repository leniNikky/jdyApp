define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/jdy1/mybikezulin'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cVJny2i';
	this._flag_='20b30bf79f7067fe5f7a942a7c501ca1';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"bikeID":{"define":"bikeID","name":"bikeID","relation":"bikeID","type":"String"},"bikeImage":{"define":"bikeImage","name":"bikeImage","relation":"bikeImage","type":"String"},"bikeIntroduce":{"define":"bikeIntroduce","name":"bikeIntroduce","relation":"bikeIntroduce","type":"String"},"bikePrice":{"define":"bikePrice","name":"bikePrice","relation":"bikePrice","type":"String"},"bikeTitle":{"define":"bikeTitle","name":"bikeTitle","relation":"bikeTitle","type":"String"}},"directDelete":false,"events":{},"idColumn":"bikeID","isMain":false,"limit":20,"xid":"bikesData"});
}}); 
return __result;});