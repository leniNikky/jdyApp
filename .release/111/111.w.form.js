define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/jdy1/111'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='caINnQb';
	this._flag_='e21367913e78799004f4f6d0d56f7b9a';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"acontent":{"define":"acontent","label":"acontent","name":"acontent","relation":"acontent","type":"String"},"adate":{"define":"adate","label":"adate","name":"adate","relation":"adate","type":"String"},"aid":{"define":"aid","label":"aid","name":"aid","relation":"aid","type":"String"},"aimg":{"define":"aimg","label":"aimg","name":"aimg","relation":"aimg","type":"String"},"aname":{"define":"aname","label":"aname","name":"aname","relation":"aname","type":"String"},"aorganizer":{"define":"aorganizer","label":"aorganizer","name":"aorganizer","relation":"aorganizer","type":"String"}},"directDelete":false,"events":{"onAfterNew":"baasData1AfterNew"},"idColumn":"aid","isMain":false,"limit":20,"queryAction":"queryActivity","saveAction":"saveActivity","tableName":"activity","url":"/jdy/jdy1_action","xid":"baasData1"});
}}); 
return __result;});