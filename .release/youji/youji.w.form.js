define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/bootstrap/carousel/carousel');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/jdy1/youji'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cyQBV7r';
	this._flag_='5e1f38b1022ccd71013c9bc4347dfe1c';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"userimg":{"define":"userimg","label":"userimg","name":"userimg","relation":"userimg","type":"String"},"username":{"define":"username","label":"username","name":"username","relation":"username","type":"String"},"ycontent":{"define":"ycontent","label":"游记内容","name":"ycontent","relation":"ycontent","type":"String"},"ydate":{"define":"ydate","label":"游记时间","name":"ydate","relation":"ydate","type":"String"},"yid":{"define":"yid","label":"游记ID","name":"yid","relation":"yid","type":"String"},"yimg":{"define":"yimg","label":"游记图片","name":"yimg","relation":"yimg","type":"String"},"yname":{"define":"yname","label":"游记名称","name":"yname","relation":"yname","type":"String"}},"directDelete":false,"events":{},"idColumn":"yid","isMain":false,"limit":20,"queryAction":"queryYouji","saveAction":"saveYouji","tableName":"youji","url":"/jdy/jdy1_action","xid":"youjiData1"});
}}); 
return __result;});