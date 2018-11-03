define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/controlGroup/controlGroup');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/jdy1/zzulindetair.w'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='c3yyAJv';
	this._flag_='72c5220c1263d4e4bb64d06d28fae53c';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"zbID":{"define":"zbID","name":"zbID","relation":"zbID","type":"String"},"zbImage":{"define":"zbImage","name":"zbImage","relation":"zbImage","type":"String"},"zbIntroduce":{"define":"zbIntroduce","name":"zbIntroduce","relation":"zbIntroduce","type":"String"},"zbName":{"define":"zbName","name":"zbName","relation":"zbName","type":"String"},"zbPrice":{"define":"zbPrice","name":"zbPrice","relation":"zbPrice","type":"String"}},"directDelete":false,"events":{},"idColumn":"zbID","isMain":false,"limit":20,"xid":"zbData1"});
}}); 
return __result;});