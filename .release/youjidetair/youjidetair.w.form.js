define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/bootstrap/row/row');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/windowReceiver/windowReceiver');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/jdy1/youjidetair'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cY3Anaq';
	this._flag_='6f6d20fc52febd0c0c716798c7b661ad';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"userimg":{"define":"userimg","label":"发布者头像","name":"userimg","relation":"userimg","type":"String"},"username":{"define":"username","label":"发布者名称","name":"username","relation":"username","type":"String"},"ycontent":{"define":"ycontent","label":"游记内容","name":"ycontent","relation":"ycontent","type":"String"},"ydate":{"define":"ydate","label":"游记时间","name":"ydate","relation":"ydate","type":"String"},"yid":{"define":"yid","label":"游记id","name":"yid","relation":"yid","type":"String"},"yimg":{"define":"yimg","label":"游记图片","name":"yimg","relation":"yimg","type":"String"},"yname":{"define":"yname","label":"游记名称","name":"yname","relation":"yname","type":"String"}},"directDelete":false,"events":{},"idColumn":"yid","isMain":false,"limit":20,"xid":"youjiData1"});
}}); 
return __result;});