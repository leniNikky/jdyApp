define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/jdy1/danchezulin'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cJje6vu';
	this._flag_='c984e2cd703488df55f9faf30c1128e9';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"bikeID":{"define":"bikeID","label":"bikeID","name":"bikeID","relation":"bikeID","rules":{"integer":true},"type":"Integer"},"bikeImage":{"define":"bikeImage","label":"bikeImage","name":"bikeImage","relation":"bikeImage","type":"String"},"bikeIntroduce":{"define":"bikeIntroduce","label":"bikeIntroduce","name":"bikeIntroduce","relation":"bikeIntroduce","type":"String"},"bikePrice":{"define":"bikePrice","label":"bikePrice","name":"bikePrice","relation":"bikePrice","rules":{"number":true},"type":"Float"},"bikeRecord":{"define":"bikeRecord","label":"bikeRecord","name":"bikeRecord","relation":"bikeRecord","rules":{"integer":true},"type":"Integer"},"bikeTitle":{"define":"bikeTitle","label":"bikeTitle","name":"bikeTitle","relation":"bikeTitle","type":"String"}},"directDelete":false,"events":{},"idColumn":"bikeID","isMain":false,"limit":20,"queryAction":"queryZulinbike","saveAction":"saveZulinbike","tableName":"zulinbike","url":"/jdy/jdy1_action","xid":"bikesData"});
}}); 
return __result;});