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
var __parent0=require('$model/UI2/jdy1/zhuangbeizulin'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cvuymYr';
	this._flag_='c09baa5f0b0ed9d29128ef6b75658a54';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"zbID":{"define":"zbID","label":"zbID","name":"zbID","relation":"zbID","type":"String"},"zbImage":{"define":"zbImage","label":"zbImage","name":"zbImage","relation":"zbImage","type":"String"},"zbIntroduce":{"define":"zbIntroduce","label":"zbIntroduce","name":"zbIntroduce","relation":"zbIntroduce","type":"String"},"zbName":{"define":"zbName","label":"zbName","name":"zbName","relation":"zbName","type":"String"},"zbPrice":{"define":"zbPrice","label":"zbPrice","name":"zbPrice","relation":"zbPrice","rules":{"number":true},"type":"Float"}},"directDelete":false,"events":{},"idColumn":"zbID","isMain":false,"limit":20,"queryAction":"queryZulinzb","saveAction":"saveZulinzb","tableName":"zulinzb","url":"/jdy/jdy1_action","xid":"zbData1"});
}}); 
return __result;});