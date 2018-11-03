define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/bootstrap/carousel/carousel');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/bootstrap/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/jdy1/note'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cIVz2ia';
	this._flag_='c7b445e1d210a77648b4329479dfb3c3';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"userid":{"define":"userid","label":"用户id","name":"userid","relation":"userid","rules":{"integer":true},"type":"Integer"},"ycontent":{"define":"ycontent","label":"游记内容","name":"ycontent","relation":"ycontent","type":"String"},"ydate":{"define":"ydate","label":"游记时间","name":"ydate","relation":"ydate","type":"String"},"yid":{"define":"yid","label":"游记ID","name":"yid","relation":"yid","rules":{"integer":true},"type":"Integer"},"yimg":{"define":"yimg","label":"游记图片","name":"yimg","relation":"yimg","type":"String"},"yname":{"define":"yname","label":"游记名称","name":"yname","relation":"yname","type":"String"},"yusername":{"define":"yusername","label":"发布者名称","name":"yusername","relation":"yusername","type":"String"}},"directDelete":false,"events":{},"idColumn":"yid","isMain":false,"limit":20,"queryAction":"youji","tableName":"youji","url":"/jdy/youji","xid":"youjiData1"});
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fID":{"define":"fID","label":"id","name":"fID","relation":"fID","type":"String"},"fImg":{"define":"fImg","label":"图片","name":"fImg","relation":"fImg","type":"String"},"fOmit":{"define":"fOmit","label":"摘要","name":"fOmit","relation":"fOmit","type":"String"},"fPostNumber":{"define":"fPostNumber","label":"跟帖","name":"fPostNumber","relation":"fPostNumber","rules":{"calculate":"$row.val(\"fPostNumber\")>=0?$row.val(\"fPostNumber\")+\"跟贴\":\"\";","integer":true},"type":"Integer"},"fTitle":{"define":"fTitle","label":"标题","name":"fTitle","relation":"fTitle","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"productDataCustomRefresh"},"idColumn":"fID","isMain":false,"limit":20,"xid":"newsData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{},"directDelete":false,"events":{"onCustomRefresh":"navDataCustomRefresh"},"isMain":false,"limit":20,"xid":"navData"});
}}); 
return __result;});