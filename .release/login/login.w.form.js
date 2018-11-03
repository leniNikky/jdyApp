define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/input/password');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/bootstrap/inputGroup/inputGroup');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/jdy1/login'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='c3y63mi';
	this._flag_='1c677d0913cfe98570cf9556ad24130c';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"useraddress":{"define":"useraddress","label":"地址","name":"useraddress","relation":"useraddress","type":"String"},"userid":{"define":"userid","label":"userid","name":"userid","relation":"userid","rules":{"integer":true},"type":"Integer"},"userimg":{"define":"userimg","label":"用户头像","name":"userimg","relation":"userimg","type":"String"},"username":{"define":"username","label":"用户名","name":"username","relation":"username","type":"String"},"userphone":{"define":"userphone","label":"手机号","name":"userphone","relation":"userphone","type":"String"},"userpw":{"define":"userpw","label":"密码","name":"userpw","relation":"userpw","type":"String"}},"directDelete":false,"events":{},"idColumn":"userid","isMain":false,"limit":20,"queryAction":"queryUser","saveAction":"saveUser","tableName":"user","url":"/jdy/jdy1_action","xid":"userData1"});
}}); 
return __result;});