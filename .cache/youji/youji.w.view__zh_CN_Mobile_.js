window.__justep.__ResourceEngine.loadCss([{url: '/UI2/v_8e5b75377ef44dab8fb78f930aaf86ddl_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/UI2/v_ffe1d9c9e0e6425290ae128f6e9326b7l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/UI2/system/components/justep/lib/css2/dataControl,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/justep/lib/css3/round,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/dataTables/css/dataTables,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/locker/css/locker,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/lib/css4/e-commerce,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/lib/css1/linear,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_fb3a9f67549848e986860d06e6935baal_zh_CNs_d_m/system/components/comp2.min.js','/v_32f7109b58af4e6083dbb3d098a08ff4l_zh_CNs_d_m/system/core.min.js','/v_ce20fe312ba6468a823492a77ca87ca3l_zh_CNs_d_m/system/common.min.js','/v_44facc9cb20743d08419189404f6dda6l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
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
