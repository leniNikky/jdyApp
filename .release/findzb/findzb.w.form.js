define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
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
var __parent0=require('$model/UI2/jdy1/findzb'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cAfUBra';
	this._flag_='c409567272ce95e5aba3423764c7dc42';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"zbID":{"define":"zbID","name":"zbID","relation":"zbID","type":"String"},"zbImage":{"define":"zbImage","name":"zbImage","relation":"zbImage","type":"String"},"zbIntroduce":{"define":"zbIntroduce","name":"zbIntroduce","relation":"zbIntroduce","type":"String"},"zbName":{"define":"zbName","name":"zbName","relation":"zbName","type":"String"},"zbPrice":{"define":"zbPrice","name":"zbPrice","relation":"zbPrice","type":"String"}},"directDelete":false,"events":{},"idColumn":"zbID","isMain":false,"limit":20,"xid":"zbData1"});
}}); 
return __result;});