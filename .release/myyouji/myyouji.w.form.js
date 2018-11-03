define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/windowReceiver/windowReceiver');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/jdy1/myyouji'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cqaaUnm';
	this._flag_='3648049daca26d34ee4d521b26a31401';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"userID":{"define":"userID","name":"userID","relation":"userID","type":"String"},"userimg":{"define":"userimg","name":"userimg","relation":"userimg","type":"String"},"username":{"define":"username","name":"username","relation":"username","type":"String"},"ycontent":{"define":"ycontent","label":"游记内容","name":"ycontent","relation":"ycontent","type":"String"},"ydate":{"define":"ydate","name":"ydate","relation":"ydate","type":"String"},"yid":{"define":"yid","name":"yid","relation":"yid","type":"String"},"yimg":{"define":"yimg","name":"yimg","relation":"yimg","type":"String"},"yname":{"define":"yname","label":"游记名称","name":"yname","relation":"yname","type":"String"}},"directDelete":false,"events":{},"idColumn":"yid","isMain":false,"limit":20,"xid":"youjiData1"});
}}); 
return __result;});