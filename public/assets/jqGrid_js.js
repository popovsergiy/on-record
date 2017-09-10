/* 
* jqGrid  5.1.1  
* Copyright (c) 2008, Tony Tomov, tony@trirand.com 
*  License: http://guriddo.net/?page_id=103334 
*
* Modules: grid.base.js; jquery.fmatter.js; grid.common.js; grid.formedit.js; grid.filter.js; grid.inlinedit.js; grid.celledit.js; jqModal.js; jqDnR.js; grid.subgrid.js; grid.grouping.js; grid.treegrid.js; grid.pivot.js; grid.import.js; grid.utils.js; grid.jqueryui.js; jquery.sortable.js;
*/
!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery"],a):a(jQuery)}(function($){"use strict";$.jgrid=$.jgrid||{},$.jgrid.hasOwnProperty("defaults")||($.jgrid.defaults={}),$.extend($.jgrid,{version:"5.1.1",htmlDecode:function(a){return a&&("&nbsp;"===a||"&#160;"===a||1===a.length&&160===a.charCodeAt(0))?"":a?String(a).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&quot;/g,'"').replace(/&amp;/g,"&"):a},htmlEncode:function(a){return a?String(a).replace(/&/g,"&amp;").replace(/\"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):a},template:function(a){var
b,c=$.makeArray(arguments).slice(1),d=c.length;return null==a&&(a=""),a.replace(/\{([\w\-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g,function(a,e){if(!isNaN(parseInt(e,10)))return c[parseInt(e,10)];for(b=0;d>b;b++)if($.isArray(c[b]))for(var
f=c[b],g=f.length;g--;)if(e===f[g].nm)return f[g].v})},msie:function(){return $.jgrid.msiever()>0},msiever:function(){var
a=0,b=window.navigator.userAgent,c=b.indexOf("MSIE");return c>0?a=parseInt(b.substring(c+5,b.indexOf(".",c))):navigator.userAgent.match(/Trident\/7\./)&&(a=11),a},getCellIndex:function(a){var
b=$(a);return b.is("tr")?-1:(b=(b.is("td")||b.is("th")?b:b.closest("td,th"))[0],$.jgrid.msie()?$.inArray(b,b.parentNode.cells):b.cellIndex)},stripHtml:function(a){a=String(a);var
b=/<("[^"]*"|'[^']*'|[^'">])*>/gi;return a?(a=a.replace(b,""),a&&"&nbsp;"!==a&&"&#160;"!==a?a.replace(/\"/g,"'"):""):a},stripPref:function(a,b){var
c=$.type(a);return("string"===c||"number"===c)&&(a=String(a),b=""!==a?String(b).replace(String(a),""):b),b},useJSON:!0,parse:function(jsonString){var
js=jsonString;return"while(1);"===js.substr(0,9)&&(js=js.substr(9)),"/*"===js.substr(0,2)&&(js=js.substr(2,js.length-4)),js||(js="{}"),$.jgrid.useJSON===!0&&"object"==typeof
JSON&&"function"==typeof
JSON.parse?JSON.parse(js):eval("("+js+")")},parseDate:function(a,b,c,d){var
e,f,g,h=/\\.|[dDjlNSwzWFmMntLoYyaABgGhHisueIOPTZcrU]/g,i=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,j=/[^-+\dA-Z]/g,k=new
RegExp("^/Date\\((([-+])?[0-9]+)(([-+])([0-9]{2})([0-9]{2}))?\\)/$"),l="string"==typeof
b?b.match(k):null,m=function(a,b){for(a=String(a),b=parseInt(b,10)||2;a.length<b;)a="0"+a;return a},n={m:1,d:1,y:1970,h:0,i:0,s:0,u:0},o=0,p=function(a,b){return 0===a?12===b&&(b=0):12!==b&&(b+=12),b},q=0;if(void
0===d&&(d=$.jgrid.getRegional(this,"formatter.date")),void
0===d.parseRe&&(d.parseRe=/[#%\\\/:_;.,\t\s-]/),d.masks.hasOwnProperty(a)&&(a=d.masks[a]),b&&null!=b)if(isNaN(b-0)||"u"!==String(a).toLowerCase())if(b.constructor===Date)o=b;else
if(null!==l)o=new
Date(parseInt(l[1],10)),l[3]&&(q=60*Number(l[5])+Number(l[6]),q*="-"===l[4]?1:-1,q-=o.getTimezoneOffset(),o.setTime(Number(Number(o)+60*q*1e3)));else{for("ISO8601Long"===d.srcformat&&"Z"===b.charAt(b.length-1)&&(q-=(new
Date).getTimezoneOffset()),b=String(b).replace(/\T/g,"#").replace(/\t/,"%").split(d.parseRe),a=a.replace(/\T/g,"#").replace(/\t/,"%").split(d.parseRe),f=0,g=a.length;g>f;f++){switch(a[f]){case"M":e=$.inArray(b[f],d.monthNames),-1!==e&&12>e&&(b[f]=e+1,n.m=b[f]);break;case"F":e=$.inArray(b[f],d.monthNames,12),-1!==e&&e>11&&(b[f]=e+1-12,n.m=b[f]);break;case"n":a[f]="m";break;case"j":a[f]="d";break;case"a":e=$.inArray(b[f],d.AmPm),-1!==e&&2>e&&b[f]===d.AmPm[e]&&(b[f]=e,n.h=p(b[f],n.h));break;case"A":e=$.inArray(b[f],d.AmPm),-1!==e&&e>1&&b[f]===d.AmPm[e]&&(b[f]=e-2,n.h=p(b[f],n.h));break;case"g":n.h=parseInt(b[f],10)}void
0!==b[f]&&(n[a[f].toLowerCase()]=parseInt(b[f],10))}if(n.f&&(n.m=n.f),0===n.m&&0===n.y&&0===n.d)return"&#160;";n.m=parseInt(n.m,10)-1;var
r=n.y;r>=70&&99>=r?n.y=1900+n.y:r>=0&&69>=r&&(n.y=2e3+n.y),o=new
Date(n.y,n.m,n.d,n.h,n.i,n.s,n.u),q>0&&o.setTime(Number(Number(o)+60*q*1e3))}else
o=new
Date(1e3*parseFloat(b));else
o=new
Date(n.y,n.m,n.d,n.h,n.i,n.s,n.u);if(d.userLocalTime&&0===q&&(q-=(new
Date).getTimezoneOffset(),q>0&&o.setTime(Number(Number(o)+60*q*1e3))),void
0===c)return o;d.masks.hasOwnProperty(c)?c=d.masks[c]:c||(c="Y-m-d");var
s=o.getHours(),t=o.getMinutes(),u=o.getDate(),v=o.getMonth()+1,w=o.getTimezoneOffset(),x=o.getSeconds(),y=o.getMilliseconds(),z=o.getDay(),A=o.getFullYear(),B=(z+6)%7+1,C=(new
Date(A,v-1,u)-new
Date(A,0,1))/864e5,D={d:m(u),D:d.dayNames[z],j:u,l:d.dayNames[z+7],N:B,S:d.S(u),w:z,z:C,W:5>B?Math.floor((C+B-1)/7)+1:Math.floor((C+B-1)/7)||((new
Date(A-1,0,1).getDay()+6)%7<4?53:52),F:d.monthNames[v-1+12],m:m(v),M:d.monthNames[v-1],n:v,t:"?",L:"?",o:"?",Y:A,y:String(A).substring(2),a:12>s?d.AmPm[0]:d.AmPm[1],A:12>s?d.AmPm[2]:d.AmPm[3],B:"?",g:s%12||12,G:s,h:m(s%12||12),H:m(s),i:m(t),s:m(x),u:y,e:"?",I:"?",O:(w>0?"-":"+")+m(100*Math.floor(Math.abs(w)/60)+Math.abs(w)%60,4),P:"?",T:(String(o).match(i)||[""]).pop().replace(j,""),Z:"?",c:"?",r:"?",U:Math.floor(o/1e3)};return c.replace(h,function(a){return D.hasOwnProperty(a)?D[a]:a.substring(1)})},jqID:function(a){return String(a).replace(/[!"#$%&'()*+,.\/:; <=>?@\[\\\]\^`{|}~]/g,"\\$&")},guid:1,uidPref:"jqg",randId:function(a){return(a||$.jgrid.uidPref)+$.jgrid.guid++},getAccessor:function(a,b){var
c,d,e,f=[];if("function"==typeof
b)return b(a);if(c=a[b],void
0===c)try{if("string"==typeof
b&&(f=b.split(".")),e=f.length)for(c=a;c&&e--;)d=f.shift(),c=c[d]}catch(g){}return c},getXmlData:function(a,b,c){var
d,e="string"==typeof
b?b.match(/^(.*)\[(\w+)\]$/):null;return"function"==typeof
b?b(a):e&&e[2]?e[1]?$(e[1],a).attr(e[2]):$(a).attr(e[2]):(d=$(b,a),c?d:d.length>0?$(d).text():void
0)},cellWidth:function(){var
a=$("<div class='ui-jqgrid' style='left:10000px'><table class='ui-jqgrid-btable ui-common-table' style='width:5px;'><tr class='jqgrow'><td style='width:5px;display:block;'></td></tr></table></div>"),b=a.appendTo("body").find("td").width();return a.remove(),Math.abs(b-5)>.1},isLocalStorage:function(){try{return"localStorage"in
window&&null!==window.localStorage}catch(a){return!1}},getRegional:function(a,b,c){var
d;return void
0!==c?c:(a.p&&a.p.regional&&$.jgrid.regional&&(d=$.jgrid.getAccessor($.jgrid.regional[a.p.regional]||{},b)),void
0===d&&(d=$.jgrid.getAccessor($.jgrid,b)),d)},isMobile:function(){try{return/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)?!0:!1}catch(a){return!1}},cell_width:!0,ajaxOptions:{},from:function(source){var
$t=this,QueryObject=function(d,q){"string"==typeof
d&&(d=$.data(d));var
self=this,_data=d,_usecase=!0,_trim=!1,_query=q,_stripNum=/[\$,%]/g,_lastCommand=null,_lastField=null,_orDepth=0,_negate=!1,_queuedOperator="",_sorting=[],_useProperties=!0;if("object"!=typeof
d||!d.push)throw"data provides is not an array";return d.length>0&&(_useProperties="object"!=typeof
d[0]?!1:!0),this._hasData=function(){return null===_data?!1:0===_data.length?!1:!0},this._getStr=function(a){var
b=[];return _trim&&b.push("jQuery.trim("),b.push("String("+a+")"),_trim&&b.push(")"),_usecase||b.push(".toLowerCase()"),b.join("")},this._strComp=function(a){return"string"==typeof
a?".toString()":""},this._group=function(a,b){return{field:a.toString(),unique:b,items:[]}},this._toStr=function(a){return _trim&&(a=$.trim(a)),a=a.toString().replace(/\\/g,"\\\\").replace(/\"/g,'\\"'),_usecase?a:a.toLowerCase()},this._funcLoop=function(a){var
b=[];return $.each(_data,function(c,d){b.push(a(d))}),b},this._append=function(a){var
b;for(null===_query?_query="":_query+=""===_queuedOperator?" && ":_queuedOperator,b=0;_orDepth>b;b++)_query+="(";_negate&&(_query+="!"),_query+="("+a+")",_negate=!1,_queuedOperator="",_orDepth=0},this._setCommand=function(a,b){_lastCommand=a,_lastField=b},this._resetNegate=function(){_negate=!1},this._repeatCommand=function(a,b){return null===_lastCommand?self:null!==a&&null!==b?_lastCommand(a,b):null===_lastField?_lastCommand(a):_useProperties?_lastCommand(_lastField,a):_lastCommand(a)},this._equals=function(a,b){return 0===self._compare(a,b,1)},this._compare=function(a,b,c){var
d=Object.prototype.toString;return void
0===c&&(c=1),void
0===a&&(a=null),void
0===b&&(b=null),null===a&&null===b?0:null===a&&null!==b?1:null!==a&&null===b?-1:"[object Date]"===d.call(a)&&"[object Date]"===d.call(b)?b>a?-c:a>b?c:0:(_usecase||"number"==typeof
a||"number"==typeof
b||(a=String(a),b=String(b)),b>a?-c:a>b?c:0)},this._performSort=function(){0!==_sorting.length&&(_data=self._doSort(_data,0))},this._doSort=function(a,b){var
c=_sorting[b].by,d=_sorting[b].dir,e=_sorting[b].type,f=_sorting[b].datefmt,g=_sorting[b].sfunc;if(b===_sorting.length-1)return self._getOrder(a,c,d,e,f,g);b++;var
h,i,j,k=self._getGroup(a,c,d,e,f),l=[];for(h=0;h<k.length;h++)for(j=self._doSort(k[h].items,b),i=0;i<j.length;i++)l.push(j[i]);return l},this._getOrder=function(a,b,c,d,e,f){var
g,h,i,j,k=[],l=[],m="a"===c?1:-1;void
0===d&&(d="text"),j="float"===d||"number"===d||"currency"===d||"numeric"===d?function(a){var
b=parseFloat(String(a).replace(_stripNum,""));return isNaN(b)?Number.NEGATIVE_INFINITY:b}:"int"===d||"integer"===d?function(a){return a?parseFloat(String(a).replace(_stripNum,"")):Number.NEGATIVE_INFINITY}:"date"===d||"datetime"===d?function(a){return $.jgrid.parseDate.call($t,e,a).getTime()}:$.isFunction(d)?d:function(a){return a=a?$.trim(String(a)):"",_usecase?a:a.toLowerCase()},$.each(a,function(a,c){h=""!==b?$.jgrid.getAccessor(c,b):c,void
0===h&&(h=""),h=j(h,c),l.push({vSort:h,index:a})}),$.isFunction(f)?l.sort(function(a,b){return f.call(this,a.vSort,b.vSort,m,a,b)}):l.sort(function(a,b){return self._compare(a.vSort,b.vSort,m)}),i=0;for(var
n=a.length;n>i;)g=l[i].index,k.push(a[g]),i++;return k},this._getGroup=function(a,b,c,d,e){var
f,g=[],h=null,i=null;return $.each(self._getOrder(a,b,c,d,e),function(a,c){f=$.jgrid.getAccessor(c,b),null==f&&(f=""),self._equals(i,f)||(i=f,null!==h&&g.push(h),h=self._group(b,f)),h.items.push(c)}),null!==h&&g.push(h),g},this.ignoreCase=function(){return _usecase=!1,self},this.useCase=function(){return _usecase=!0,self},this.trim=function(){return _trim=!0,self},this.noTrim=function(){return _trim=!1,self},this.execute=function(){var
match=_query,results=[];return null===match?self:($.each(_data,function(){eval(match)&&results.push(this)}),_data=results,self)},this.data=function(){return _data},this.select=function(a){if(self._performSort(),!self._hasData())return[];if(self.execute(),$.isFunction(a)){var
b=[];return $.each(_data,function(c,d){b.push(a(d))}),b}return _data},this.hasMatch=function(){return self._hasData()?(self.execute(),_data.length>0):!1},this.andNot=function(a,b,c){return _negate=!_negate,self.and(a,b,c)},this.orNot=function(a,b,c){return _negate=!_negate,self.or(a,b,c)},this.not=function(a,b,c){return self.andNot(a,b,c)},this.and=function(a,b,c){return _queuedOperator=" && ",void
0===a?self:self._repeatCommand(a,b,c)},this.or=function(a,b,c){return _queuedOperator=" || ",void
0===a?self:self._repeatCommand(a,b,c)},this.orBegin=function(){return _orDepth++,self},this.orEnd=function(){return null!==_query&&(_query+=")"),self},this.isNot=function(a){return _negate=!_negate,self.is(a)},this.is=function(a){return self._append("this."+a),self._resetNegate(),self},this._compareValues=function(a,b,c,d,e){var
f;f=_useProperties?"jQuery.jgrid.getAccessor(this,'"+b+"')":"this",void
0===c&&(c=null);var
g=c,h=void
0===e.stype?"text":e.stype;if(null!==c)switch(h){case"int":case"integer":g=isNaN(Number(g))||""===g?"0":g,f="parseInt("+f+",10)",g="parseInt("+g+",10)";break;case"float":case"number":case"numeric":g=String(g).replace(_stripNum,""),g=isNaN(Number(g))||""===g?"0":g,f="parseFloat("+f+")",g="parseFloat("+g+")";break;case"date":case"datetime":g=String($.jgrid.parseDate.call($t,e.srcfmt||"Y-m-d",g).getTime()),f='jQuery.jgrid.parseDate.call(jQuery("#'+$.jgrid.jqID($t.p.id)+'")[0],"'+e.srcfmt+'",'+f+").getTime()";break;default:f=self._getStr(f),g=self._getStr('"'+self._toStr(g)+'"')}return self._append(f+" "+d+" "+g),self._setCommand(a,b),self._resetNegate(),self},this.equals=function(a,b,c){return self._compareValues(self.equals,a,b,"==",c)},this.notEquals=function(a,b,c){return self._compareValues(self.equals,a,b,"!==",c)},this.isNull=function(a,b,c){return self._compareValues(self.equals,a,null,"===",c)},this.greater=function(a,b,c){return self._compareValues(self.greater,a,b,">",c)},this.less=function(a,b,c){return self._compareValues(self.less,a,b,"<",c)},this.greaterOrEquals=function(a,b,c){return self._compareValues(self.greaterOrEquals,a,b,">=",c)},this.lessOrEquals=function(a,b,c){return self._compareValues(self.lessOrEquals,a,b,"<=",c)},this.startsWith=function(a,b){var
c=null==b?a:b,d=_trim?$.trim(c.toString()).length:c.toString().length;return _useProperties?self._append(self._getStr("jQuery.jgrid.getAccessor(this,'"+a+"')")+".substr(0,"+d+") == "+self._getStr('"'+self._toStr(b)+'"')):(null!=b&&(d=_trim?$.trim(b.toString()).length:b.toString().length),self._append(self._getStr("this")+".substr(0,"+d+") == "+self._getStr('"'+self._toStr(a)+'"'))),self._setCommand(self.startsWith,a),self._resetNegate(),self},this.endsWith=function(a,b){var
c=null==b?a:b,d=_trim?$.trim(c.toString()).length:c.toString().length;return _useProperties?self._append(self._getStr("jQuery.jgrid.getAccessor(this,'"+a+"')")+".substr("+self._getStr("jQuery.jgrid.getAccessor(this,'"+a+"')")+".length-"+d+","+d+') == "'+self._toStr(b)+'"'):self._append(self._getStr("this")+".substr("+self._getStr("this")+'.length-"'+self._toStr(a)+'".length,"'+self._toStr(a)+'".length) == "'+self._toStr(a)+'"'),self._setCommand(self.endsWith,a),self._resetNegate(),self},this.contains=function(a,b){return _useProperties?self._append(self._getStr("jQuery.jgrid.getAccessor(this,'"+a+"')")+'.indexOf("'+self._toStr(b)+'",0) > -1'):self._append(self._getStr("this")+'.indexOf("'+self._toStr(a)+'",0) > -1'),self._setCommand(self.contains,a),self._resetNegate(),self},this.groupBy=function(a,b,c,d){return self._hasData()?self._getGroup(_data,a,b,c,d):null},this.orderBy=function(a,b,c,d,e){return b=null==b?"a":$.trim(b.toString().toLowerCase()),null==c&&(c="text"),null==d&&(d="Y-m-d"),null==e&&(e=!1),("desc"===b||"descending"===b)&&(b="d"),("asc"===b||"ascending"===b)&&(b="a"),_sorting.push({by:a,dir:b,type:c,datefmt:d,sfunc:e}),self},self};return new
QueryObject(source,null)},getMethod:function(a){return this.getAccessor($.fn.jqGrid,a)},extend:function(a){$.extend($.fn.jqGrid,a),this.no_legacy_api||$.fn.extend(a)},clearBeforeUnload:function(a){var
b,c=$("#"+$.jgrid.jqID(a))[0];if(c.grid){b=c.grid,$.isFunction(b.emptyRows)&&b.emptyRows.call(c,!0,!0),$(document).unbind("mouseup.jqGrid"+c.p.id),$(b.hDiv).unbind("mousemove"),$(c).unbind();var
d,e=b.headers.length,f=["formatCol","sortData","updatepager","refreshIndex","setHeadCheckBox","constructTr","formatter","addXmlData","addJSONData","grid","p"];for(d=0;e>d;d++)b.headers[d].el=null;for(d
in
b)b.hasOwnProperty(d)&&(b[d]=null);for(d
in
c.p)c.p.hasOwnProperty(d)&&(c.p[d]=$.isArray(c.p[d])?[]:null);for(e=f.length,d=0;e>d;d++)c.hasOwnProperty(f[d])&&(c[f[d]]=null,delete
c[f[d]])}},gridUnload:function(a){if(a){a=$.trim(a),0===a.indexOf("#")&&(a=a.substring(1));var
b=$("#"+$.jgrid.jqID(a))[0];if(b.grid){var
c={id:$(b).attr("id"),cl:$(b).attr("class")};b.p.pager&&$(b.p.pager).unbind().empty().removeClass("ui-state-default ui-jqgrid-pager ui-corner-bottom");var
d=document.createElement("table");d.className=c.cl;var
e=$.jgrid.jqID(b.id);$(d).removeClass("ui-jqgrid-btable ui-common-table").insertBefore("#gbox_"+e),1===$(b.p.pager).parents("#gbox_"+e).length&&$(b.p.pager).insertBefore("#gbox_"+e),$.jgrid.clearBeforeUnload(a),$("#gbox_"+e).remove(),$(d).attr({id:c.id}),$("#alertmod_"+$.jgrid.jqID(a)).remove()}}},gridDestroy:function(a){if(a){a=$.trim(a),0===a.indexOf("#")&&(a=a.substring(1));var
b=$("#"+$.jgrid.jqID(a))[0];if(b.grid){b.p.pager&&$(b.p.pager).remove();try{$.jgrid.clearBeforeUnload(a),$("#gbox_"+$.jgrid.jqID(a)).remove()}catch(c){}}}},styleUI:{jQueryUI:{common:{disabled:"ui-state-disabled",highlight:"ui-state-highlight",hover:"ui-state-hover",cornerall:"ui-corner-all",cornertop:"ui-corner-top",cornerbottom:"ui-corner-bottom",hidden:"ui-helper-hidden",icon_base:"ui-icon",overlay:"ui-widget-overlay",active:"ui-state-active",error:"ui-state-error",button:"ui-state-default ui-corner-all",content:"ui-widget-content"},base:{entrieBox:"ui-widget ui-widget-content ui-corner-all",viewBox:"",headerTable:"",headerBox:"ui-state-default",rowTable:"",rowBox:"ui-widget-content",footerTable:"",footerBox:"ui-widget-content",headerDiv:"ui-state-default",gridtitleBox:"ui-widget-header ui-corner-top ui-helper-clearfix",customtoolbarBox:"ui-state-default",loadingBox:"ui-state-default ui-state-active",rownumBox:"ui-state-default",scrollBox:"ui-widget-content",multiBox:"",pagerBox:"ui-state-default ui-corner-bottom",pagerTable:"",toppagerBox:"ui-state-default",pgInput:"ui-corner-all",pgSelectBox:"ui-widget-content ui-corner-all",pgButtonBox:"ui-corner-all",icon_first:"ui-icon-seek-first",icon_prev:"ui-icon-seek-prev",icon_next:"ui-icon-seek-next",icon_end:"ui-icon-seek-end",icon_asc:"ui-icon-triangle-1-n",icon_desc:"ui-icon-triangle-1-s",icon_caption_open:"ui-icon-circle-triangle-n",icon_caption_close:"ui-icon-circle-triangle-s"},modal:{modal:"ui-widget ui-widget-content ui-corner-all ui-dialog",header:"ui-widget-header ui-corner-all ui-helper-clearfix",content:"ui-widget-content",resizable:"ui-resizable-handle ui-resizable-se",icon_close:"ui-icon-closethick",icon_resizable:"ui-icon-gripsmall-diagonal-se"},celledit:{inputClass:"ui-widget-content ui-corner-all"},inlinedit:{inputClass:"ui-widget-content ui-corner-all",icon_edit_nav:"ui-icon-pencil",icon_add_nav:"ui-icon-plus",icon_save_nav:"ui-icon-disk",icon_cancel_nav:"ui-icon-cancel"},formedit:{inputClass:"ui-widget-content ui-corner-all",icon_prev:"ui-icon-triangle-1-w",icon_next:"ui-icon-triangle-1-e",icon_save:"ui-icon-disk",icon_close:"ui-icon-close",icon_del:"ui-icon-scissors",icon_cancel:"ui-icon-cancel"},navigator:{icon_edit_nav:"ui-icon-pencil",icon_add_nav:"ui-icon-plus",icon_del_nav:"ui-icon-trash",icon_search_nav:"ui-icon-search",icon_refresh_nav:"ui-icon-refresh",icon_view_nav:"ui-icon-document",icon_newbutton_nav:"ui-icon-newwin"},grouping:{icon_plus:"ui-icon-circlesmall-plus",icon_minus:"ui-icon-circlesmall-minus"},filter:{table_widget:"ui-widget ui-widget-content",srSelect:"ui-widget-content ui-corner-all",srInput:"ui-widget-content ui-corner-all",menu_widget:"ui-widget ui-widget-content ui-corner-all",icon_search:"ui-icon-search",icon_reset:"ui-icon-arrowreturnthick-1-w",icon_query:"ui-icon-comment"},subgrid:{icon_plus:"ui-icon-plus",icon_minus:"ui-icon-minus",icon_open:"ui-icon-carat-1-sw"},treegrid:{icon_plus:"ui-icon-triangle-1-",icon_minus:"ui-icon-triangle-1-s",icon_leaf:"ui-icon-radio-off"},fmatter:{icon_edit:"ui-icon-pencil",icon_add:"ui-icon-plus",icon_save:"ui-icon-disk",icon_cancel:"ui-icon-cancel",icon_del:"ui-icon-trash"},colmenu:{menu_widget:"ui-widget ui-widget-content ui-corner-all",input_checkbox:"ui-widget ui-widget-content",filter_select:"ui-widget-content ui-corner-all",filter_input:"ui-widget-content ui-corner-all",icon_menu:"ui-icon-comment",icon_sort_asc:"ui-icon-arrow-1-n",icon_sort_desc:"ui-icon-arrow-1-s",icon_columns:"ui-icon-extlink",icon_filter:"ui-icon-calculator",icon_group:"ui-icon-grip-solid-horizontal",icon_freeze:"ui-icon-grip-solid-vertical",icon_move:"ui-icon-arrow-4"}},Bootstrap:{common:{disabled:"ui-disabled",highlight:"success",hover:"active",cornerall:"",cornertop:"",cornerbottom:"",hidden:"",icon_base:"glyphicon",overlay:"ui-overlay",active:"active",error:"bg-danger",button:"btn btn-default",content:""},base:{entrieBox:"",viewBox:"table-responsive",headerTable:"table table-bordered",headerBox:"",rowTable:"table table-bordered",rowBox:"",footerTable:"table table-bordered",footerBox:"",headerDiv:"",gridtitleBox:"",customtoolbarBox:"",loadingBox:"row",rownumBox:"active",scrollBox:"",multiBox:"checkbox",pagerBox:"",pagerTable:"table",toppagerBox:"",pgInput:"form-control",pgSelectBox:"form-control",pgButtonBox:"",icon_first:"glyphicon-step-backward",icon_prev:"glyphicon-backward",icon_next:"glyphicon-forward",icon_end:"glyphicon-step-forward",icon_asc:"glyphicon-triangle-top",icon_desc:"glyphicon-triangle-bottom",icon_caption_open:"glyphicon-circle-arrow-up",icon_caption_close:"glyphicon-circle-arrow-down"},modal:{modal:"modal-content",header:"modal-header",title:"modal-title",content:"modal-body",resizable:"ui-resizable-handle ui-resizable-se",icon_close:"glyphicon-remove-circle",icon_resizable:"glyphicon-import"},celledit:{inputClass:"form-control"},inlinedit:{inputClass:"form-control",icon_edit_nav:"glyphicon-edit",icon_add_nav:"glyphicon-plus",icon_save_nav:"glyphicon-save",icon_cancel_nav:"glyphicon-remove-circle"},formedit:{inputClass:"form-control",icon_prev:"glyphicon-step-backward",icon_next:"glyphicon-step-forward",icon_save:"glyphicon-save",icon_close:"glyphicon-remove-circle",icon_del:"glyphicon-trash",icon_cancel:"glyphicon-remove-circle"},navigator:{icon_edit_nav:"glyphicon-edit",icon_add_nav:"glyphicon-plus",icon_del_nav:"glyphicon-trash",icon_search_nav:"glyphicon-search",icon_refresh_nav:"glyphicon-refresh",icon_view_nav:"glyphicon-info-sign",icon_newbutton_nav:"glyphicon-new-window"},grouping:{icon_plus:"glyphicon-triangle-right",icon_minus:"glyphicon-triangle-bottom"},filter:{table_widget:"table table-condensed",srSelect:"form-control",srInput:"form-control",menu_widget:"",icon_search:"glyphicon-search",icon_reset:"glyphicon-refresh",icon_query:"glyphicon-comment"},subgrid:{icon_plus:"glyphicon-triangle-right",icon_minus:"glyphicon-triangle-bottom",icon_open:"glyphicon-indent-left"},treegrid:{icon_plus:"glyphicon-triangle-right",icon_minus:"glyphicon-triangle-bottom",icon_leaf:"glyphicon-unchecked"},fmatter:{icon_edit:"glyphicon-edit",icon_add:"glyphicon-plus",icon_save:"glyphicon-save",icon_cancel:"glyphicon-remove-circle",icon_del:"glyphicon-trash"},colmenu:{menu_widget:"",input_checkbox:"",filter_select:"form-control",filter_input:"form-control",icon_menu:"glyphicon-menu-hamburger",icon_sort_asc:"glyphicon-sort-by-alphabet",icon_sort_desc:"glyphicon-sort-by-alphabet-alt",icon_columns:"glyphicon-list-alt",icon_filter:"glyphicon-filter",icon_group:"glyphicon-align-left",icon_freeze:"glyphicon-object-align-horizontal",icon_move:"glyphicon-move"}}}}),$.fn.jqGrid=function(a){if("string"==typeof
a){var
b=$.jgrid.getMethod(a);if(!b)throw"jqGrid - No such method: "+a;var
c=$.makeArray(arguments).slice(1);return b.apply(this,c)}return this.each(function(){if(!this.grid){var
b;null!=a&&void
0!==a.data&&(b=a.data,a.data=[]);var
c=$.extend(!0,{url:"",height:150,page:1,rowNum:20,rowTotal:null,records:0,pager:"",pgbuttons:!0,pginput:!0,colModel:[],rowList:[],colNames:[],sortorder:"asc",sortname:"",datatype:"xml",mtype:"GET",altRows:!1,selarrrow:[],savedRow:[],shrinkToFit:!0,xmlReader:{},jsonReader:{},subGrid:!1,subGridModel:[],reccount:0,lastpage:0,lastsort:0,selrow:null,beforeSelectRow:null,onSelectRow:null,onSortCol:null,ondblClickRow:null,onRightClickRow:null,onPaging:null,onSelectAll:null,onInitGrid:null,loadComplete:null,gridComplete:null,loadError:null,loadBeforeSend:null,afterInsertRow:null,beforeRequest:null,beforeProcessing:null,onHeaderClick:null,viewrecords:!1,loadonce:!1,multiselect:!1,multikey:!1,editurl:null,search:!1,caption:"",hidegrid:!0,hiddengrid:!1,postData:{},userData:{},treeGrid:!1,treeGridModel:"nested",treeReader:{},treeANode:-1,ExpandColumn:null,tree_root_level:0,prmNames:{page:"page",rows:"rows",sort:"sidx",order:"sord",search:"_search",nd:"nd",id:"id",oper:"oper",editoper:"edit",addoper:"add",deloper:"del",subgridid:"id",npage:null,totalrows:"totalrows"},forceFit:!1,gridstate:"visible",cellEdit:!1,cellsubmit:"remote",nv:0,loadui:"enable",toolbar:[!1,""],scroll:!1,multiboxonly:!1,deselectAfterSort:!0,scrollrows:!1,autowidth:!1,scrollOffset:18,cellLayout:5,subGridWidth:20,multiselectWidth:30,gridview:!0,rownumWidth:35,rownumbers:!1,pagerpos:"center",recordpos:"right",footerrow:!1,userDataOnFooter:!1,hoverrows:!0,altclass:"ui-priority-secondary",viewsortcols:[!1,"vertical",!0],resizeclass:"",autoencode:!1,remapColumns:[],ajaxGridOptions:{},direction:"ltr",toppager:!1,headertitles:!1,scrollTimeout:40,data:[],_index:{},grouping:!1,groupingView:{groupField:[],groupOrder:[],groupText:[],groupColumnShow:[],groupSummary:[],showSummaryOnHide:!1,sortitems:[],sortnames:[],summary:[],summaryval:[],plusicon:"",minusicon:"",displayField:[],groupSummaryPos:[],formatDisplayField:[],_locgr:!1},ignoreCase:!0,cmTemplate:{},idPrefix:"",multiSort:!1,minColWidth:33,scrollPopUp:!1,scrollTopOffset:0,scrollLeftOffset:"100%",storeNavOptions:!1,regional:"en",styleUI:"jQueryUI",responsive:!1,restoreCellonFail:!0,colFilters:{},colMenu:!1},$.jgrid.defaults,a);void
0!==b&&(c.data=b,a.data=b);var
d=this,e={headers:[],cols:[],footers:[],dragStart:function(a,b,e){var
f=$(this.bDiv).offset().left;this.resizing={idx:a,startX:b.pageX,sOL:b.pageX-f},this.hDiv.style.cursor="col-resize",this.curGbox=$("#rs_m"+$.jgrid.jqID(c.id),"#gbox_"+$.jgrid.jqID(c.id)),this.curGbox.css({display:"block",left:b.pageX-f,top:e[1],height:e[2]}),$(d).triggerHandler("jqGridResizeStart",[b,a]),$.isFunction(c.resizeStart)&&c.resizeStart.call(d,b,a),document.onselectstart=function(){return!1}},dragMove:function(a){if(this.resizing){var
b,d,e=a.pageX-this.resizing.startX,f=this.headers[this.resizing.idx],g="ltr"===c.direction?f.width+e:f.width-e;g>33&&(this.curGbox.css({left:this.resizing.sOL+e}),c.forceFit===!0?(b=this.headers[this.resizing.idx+c.nv],d="ltr"===c.direction?b.width-e:b.width+e,d>c.minColWidth&&(f.newWidth=g,b.newWidth=d)):(this.newWidth="ltr"===c.direction?c.tblwidth+e:c.tblwidth-e,f.newWidth=g))}},dragEnd:function(a){if(this.hDiv.style.cursor="default",this.resizing){var
b=this.resizing.idx,e=this.headers[b].newWidth||this.headers[b].width;e=parseInt(e,10),this.resizing=!1,$("#rs_m"+$.jgrid.jqID(c.id)).css("display","none"),c.colModel[b].width=e,this.headers[b].width=e,this.headers[b].el.style.width=e+"px",this.cols[b].style.width=e+"px",this.footers.length>0&&(this.footers[b].style.width=e+"px"),c.forceFit===!0?(e=this.headers[b+c.nv].newWidth||this.headers[b+c.nv].width,this.headers[b+c.nv].width=e,this.headers[b+c.nv].el.style.width=e+"px",this.cols[b+c.nv].style.width=e+"px",this.footers.length>0&&(this.footers[b+c.nv].style.width=e+"px"),c.colModel[b+c.nv].width=e):(c.tblwidth=this.newWidth||c.tblwidth,$("table:first",this.bDiv).css("width",c.tblwidth+"px"),$("table:first",this.hDiv).css("width",c.tblwidth+"px"),this.hDiv.scrollLeft=this.bDiv.scrollLeft,c.footerrow&&($("table:first",this.sDiv).css("width",c.tblwidth+"px"),this.sDiv.scrollLeft=this.bDiv.scrollLeft)),a&&($(d).triggerHandler("jqGridResizeStop",[e,b]),$.isFunction(c.resizeStop)&&c.resizeStop.call(d,e,b))}this.curGbox=null,document.onselectstart=function(){return!0}},populateVisible:function(){e.timer&&clearTimeout(e.timer),e.timer=null;var
a=$(e.bDiv).height();if(a){var
b,f,g=$("table:first",e.bDiv);if(g[0].rows.length)try{b=g[0].rows[1],f=b?$(b).outerHeight()||e.prevRowHeight:e.prevRowHeight}catch(h){f=e.prevRowHeight}if(f){e.prevRowHeight=f;var
i,j,k,l=c.rowNum,m=e.scrollTop=e.bDiv.scrollTop,n=Math.round(g.position().top)-m,o=n+g.height(),p=f*l;if(a>o&&0>=n&&(void
0===c.lastpage||(parseInt((o+m+p-1)/p,10)||0)<=c.lastpage)&&(j=parseInt((a-o+p-1)/p,10)||1,o>=0||2>j||c.scroll===!0?(i=(Math.round((o+m)/p)||0)+1,n=-1):n=1),n>0&&(i=(parseInt(m/p,10)||0)+1,j=(parseInt((m+a)/p,10)||0)+2-i,k=!0),j){if(c.lastpage&&(i>c.lastpage||1===c.lastpage||i===c.page&&i===c.lastpage))return;e.hDiv.loading?e.timer=setTimeout(e.populateVisible,c.scrollTimeout):(c.page=i,k&&(e.selectionPreserver(g[0]),e.emptyRows.call(g[0],!1,!1)),e.populate(j)),c.scrollPopUp&&null!=c.lastpage&&($("#scroll_g"+c.id).show().html($.jgrid.template($.jgrid.getRegional(d,"defaults.pgtext",c.pgtext),c.page,c.lastpage)).css({top:c.scrollTopOffset+m*((parseInt(c.height,10)-45)/(parseInt(f,10)*parseInt(c.records,10)))+"px",left:c.scrollLeftOffset}),$(this).mouseout(function(){$("#scroll_g"+c.id).hide()}))}}}},scrollGrid:function(a){if(c.scroll){var
b=e.bDiv.scrollTop;void
0===e.scrollTop&&(e.scrollTop=0),b!==e.scrollTop&&(e.scrollTop=b,e.timer&&clearTimeout(e.timer),e.timer=setTimeout(e.populateVisible,c.scrollTimeout))}e.hDiv.scrollLeft=e.bDiv.scrollLeft,c.footerrow&&(e.sDiv.scrollLeft=e.bDiv.scrollLeft),c.frozenColumns&&$(e.fbDiv).scrollTop(e.bDiv.scrollTop),a&&a.stopPropagation()},selectionPreserver:function(a){var
b=a.p,c=b.selrow,d=b.selarrrow?$.makeArray(b.selarrrow):null,e=a.grid.bDiv.scrollLeft,f=function(){var
g;if(b.selrow=null,b.selarrrow=[],b.multiselect&&d&&d.length>0)for(g=0;g<d.length;g++)d[g]!==c&&$(a).jqGrid("setSelection",d[g],!1,null);c&&$(a).jqGrid("setSelection",c,!1,null),a.grid.bDiv.scrollLeft=e,$(a).unbind(".selectionPreserver",f)};$(a).bind("jqGridGridComplete.selectionPreserver",f)}};if("TABLE"!==this.tagName.toUpperCase()||null==this.id)return void
alert("Element is not a table or has no id!");if(void
0!==document.documentMode&&document.documentMode<=5)return void
alert("Grid can not be used in this ('quirks') mode!");var
f,g,h,i=0;for(g
in
$.jgrid.regional)$.jgrid.regional.hasOwnProperty(g)&&(0===i&&(f=g),i++);if(1===i&&f!==c.regional&&(c.regional=f),$(this).empty().attr("tabindex","0"),this.p=c,this.p.useProp=!!$.fn.prop,0===this.p.colNames.length)for(i=0;i<this.p.colModel.length;i++)this.p.colNames[i]=this.p.colModel[i].label||this.p.colModel[i].name;if(this.p.colNames.length!==this.p.colModel.length)return void
alert($.jgrid.getRegional(this,"errors.model"));var
j,k=$.jgrid.getMethod("getStyleUI"),l=d.p.styleUI+".common",m=k(l,"disabled",!0),n=k(l,"highlight",!0),o=k(l,"hover",!0),p=k(l,"cornerall",!0),q=k(l,"icon_base",!0),r=$.jgrid.styleUI[d.p.styleUI||"jQueryUI"].colmenu,s=$.jgrid.msie(),t=[],u=[],v=[];l=d.p.styleUI+".base",j=$("<div "+k(l,"viewBox",!1,"ui-jqgrid-view")+" role='grid'></div>"),d.p.direction=$.trim(d.p.direction.toLowerCase()),d.p._ald=!1,-1===$.inArray(d.p.direction,["ltr","rtl"])&&(d.p.direction="ltr"),h=d.p.direction,$(j).insertBefore(this),$(this).appendTo(j);var
w=$("<div "+k(l,"entrieBox",!1,"ui-jqgrid")+"></div>");$(w).attr({id:"gbox_"+this.id,dir:h}).insertBefore(j),$(j).attr("id","gview_"+this.id).appendTo(w),$("<div "+k(d.p.styleUI+".common","overlay",!1,"jqgrid-overlay")+" id='lui_"+this.id+"'></div>").insertBefore(j),$("<div "+k(l,"loadingBox",!1,"loading")+" id='load_"+this.id+"'>"+$.jgrid.getRegional(d,"defaults.loadtext",this.p.loadtext)+"</div>").insertBefore(j),$(this).attr({role:"presentation","aria-multiselectable":!!this.p.multiselect,"aria-labelledby":"gbox_"+this.id});var
x,y=["shiftKey","altKey","ctrlKey"],z=function(a,b){return a=parseInt(a,10),isNaN(a)?b||0:a},A=function(a,b,c,f,g,h){var
i,j,k=d.p.colModel[a],l=k.align,m='style="',n=k.classes,o=k.name,p=[];return l&&(m+="text-align:"+l+";"),k.hidden===!0&&(m+="display:none;"),0===b?m+="width: "+e.headers[a].width+"px;":($.isFunction(k.cellattr)||"string"==typeof
k.cellattr&&null!=$.jgrid.cellattr&&$.isFunction($.jgrid.cellattr[k.cellattr]))&&(i=$.isFunction(k.cellattr)?k.cellattr:$.jgrid.cellattr[k.cellattr],j=i.call(d,g,c,f,k,h),j&&"string"==typeof
j&&(j=j.replace(/style/i,"style").replace(/title/i,"title"),j.indexOf("title")>-1&&(k.title=!1),j.indexOf("class")>-1&&(n=void
0),p=j.replace(/\-style/g,"-sti").split(/style/),2===p.length?(p[1]=$.trim(p[1].replace(/\-sti/g,"-style").replace("=","")),(0===p[1].indexOf("'")||0===p[1].indexOf('"'))&&(p[1]=p[1].substring(1)),m+=p[1].replace(/'/gi,'"')):m+='"')),p.length||(p[0]="",m+='"'),m+=(void
0!==n?' class="'+n+'"':"")+(k.title&&c?' title="'+$.jgrid.stripHtml(c)+'"':""),m+=' aria-describedby="'+d.p.id+"_"+o+'"',m+p[0]},B=function(a){return null==a||""===a?"&#160;":d.p.autoencode?$.jgrid.htmlEncode(a):String(a)},C=function(a,b,c,e,f){var
g,h=d.p.colModel[c];if(void
0!==h.formatter){a=""!==String(d.p.idPrefix)?$.jgrid.stripPref(d.p.idPrefix,a):a;var
i={rowId:a,colModel:h,gid:d.p.id,pos:c,styleUI:d.p.styleUI};g=$.isFunction(h.formatter)?h.formatter.call(d,b,i,e,f):$.fmatter?$.fn.fmatter.call(d,h.formatter,b,i,e,f):B(b)}else
g=B(b);return g},D=function(a,b,c,d,e,f){var
g,h;return g=C(a,b,c,e,"add"),h=A(c,d,g,e,a,f),'<td role="gridcell" '+h+">"+g+"</td>"},E=function(a,b,c,e,f){var
g='<input role="checkbox" type="checkbox" id="jqg_'+d.p.id+"_"+a+'" '+f+' name="jqg_'+d.p.id+"_"+a+'"'+(e?'checked="checked"':"")+"/>",h=A(b,c,"",null,a,!0);return'<td role="gridcell" '+h+">"+g+"</td>"},F=function(a,b,c,d,e){var
f=(parseInt(c,10)-1)*parseInt(d,10)+1+b,g=A(a,b,f,null,b,!0);return'<td role="gridcell" '+e+" "+g+">"+f+"</td>"},G=function(a){var
b,c,e=[],f=0;for(c=0;c<d.p.colModel.length;c++)b=d.p.colModel[c],"cb"!==b.name&&"subgrid"!==b.name&&"rn"!==b.name&&(e[f]="local"===a?b.name:"xml"===a||"xmlstring"===a?b.xmlmap||b.name:b.jsonmap||b.name,d.p.keyName!==!1&&b.key===!0&&(d.p.keyName=e[f]),f++);return e},H=function(a){var
b=d.p.remapColumns;return b&&b.length||(b=$.map(d.p.colModel,function(a,b){return b})),a&&(b=$.map(b,function(b){return a>b?null:b-a})),b},I=function(a,b){var
c;this.p.deepempty?$(this.rows).slice(1).remove():(c=this.rows.length>0?this.rows[0]:null,$(this.firstChild).empty().append(c)),a&&this.p.scroll&&($(this.grid.bDiv.firstChild).css({height:"auto"}),$(this.grid.bDiv.firstChild.firstChild).css({height:"0px",display:"none"}),0!==this.grid.bDiv.scrollTop&&(this.grid.bDiv.scrollTop=0)),b===!0&&this.p.treeGrid&&!this.p.loadonce&&(this.p.data=[],this.p._index={})},J=function(){var
a,b,c,e,f,g,h,i,j,k,l,m=d.p,n=m.data,o=n.length,p=m.localReader,q=m.colModel,r=p.cell,s=(m.multiselect===!0?1:0)+(m.subGrid===!0?1:0)+(m.rownumbers===!0?1:0),t=m.scroll?$.jgrid.randId():1;if("local"===m.datatype&&p.repeatitems===!0)for(j=H(s),k=G("local"),e=m.keyIndex===!1?$.isFunction(p.id)?p.id.call(d,n):p.id:m.keyIndex,a=0;o>a;a++){for(c=n[a],f=$.jgrid.getAccessor(c,e),void
0===f&&("number"==typeof
e&&null!=q[e+s]&&(f=$.jgrid.getAccessor(c,q[e+s].name)),void
0===f&&(f=t+a,r&&(g=$.jgrid.getAccessor(c,r)||c,f=null!=g&&void
0!==g[e]?g[e]:f,g=null))),i={},i[p.id]=f,r&&(c=$.jgrid.getAccessor(c,r)||c),l=$.isArray(c)?j:k,b=0;b<l.length;b++)h=$.jgrid.getAccessor(c,l[b]),i[q[b+s].name]=h;$.extend(!0,n[a],i)}},K=function(){var
a,b,c,e=d.p.data.length;for(a=d.p.keyName===!1||d.p.loadonce===!0?d.p.localReader.id:d.p.keyName,d.p._index=[],b=0;e>b;b++)c=$.jgrid.getAccessor(d.p.data[b],a),void
0===c&&(c=String(b+1)),d.p._index[c]=b},L=function(a,b,c,e,f){var
g,h="-1",i="",j=b?"display:none;":"",k=$(d).triggerHandler("jqGridRowAttr",[e,f,a]);if("object"!=typeof
k&&(k=$.isFunction(d.p.rowattr)?d.p.rowattr.call(d,e,f,a):"string"==typeof
d.p.rowattr&&null!=$.jgrid.rowattr&&$.isFunction($.jgrid.rowattr[d.p.rowattr])?$.jgrid.rowattr[d.p.rowattr].call(d,e,f,a):{}),!$.isEmptyObject(k)){k.hasOwnProperty("id")&&(a=k.id,delete
k.id),k.hasOwnProperty("tabindex")&&(h=k.tabindex,delete
k.tabindex),k.hasOwnProperty("style")&&(j+=k.style,delete
k.style),k.hasOwnProperty("class")&&(c+=" "+k["class"],delete
k["class"]);try{delete
k.role}catch(l){}for(g
in
k)k.hasOwnProperty(g)&&(i+=" "+g+"="+k[g])}return'<tr role="row" id="'+a+'" tabindex="'+h+'" class="'+c+'"'+(""===j?"":' style="'+j+'"')+i+">"},M=function(a,b,c,e){var
f=new
Date,g="local"!==d.p.datatype&&d.p.loadonce||"xmlstring"===d.p.datatype,h="_id_",i=d.p.xmlReader,j="local"===d.p.datatype?"local":"xml";if(g&&(d.p.data=[],d.p._index={},d.p.localReader.id=h),d.p.reccount=0,$.isXMLDoc(a)){-1!==d.p.treeANode||d.p.scroll?b=b>1?b:1:(I.call(d,!1,!0),b=1);var
m,n,o,p,q,r,s,t,u,v,w=$(d),x=0,y=d.p.multiselect===!0?1:0,A=0,B=d.p.rownumbers===!0?1:0,C=[],J={},K=[],M=d.p.altRows===!0?d.p.altclass:"",N=k(l,"rowBox",!0,"jqgrow ui-row-"+d.p.direction);d.p.subGrid===!0&&(A=1,p=$.jgrid.getMethod("addSubGridCell")),i.repeatitems||(C=G(j)),q=d.p.keyName===!1?$.isFunction(i.id)?i.id.call(d,a):i.id:d.p.keyName,r=-1===String(q).indexOf("[")?C.length?function(a,b){return $(q,a).text()||b}:function(a,b){return $(i.cell,a).eq(q).text()||b}:function(a,b){return a.getAttribute(q.replace(/[\[\]]/g,""))||b},d.p.userData={},d.p.page=z($.jgrid.getXmlData(a,i.page),d.p.page),d.p.lastpage=z($.jgrid.getXmlData(a,i.total),1),d.p.records=z($.jgrid.getXmlData(a,i.records)),$.isFunction(i.userdata)?d.p.userData=i.userdata.call(d,a)||{}:$.jgrid.getXmlData(a,i.userdata,!0).each(function(){d.p.userData[this.getAttribute("name")]=$(this).text()});var
O=$.jgrid.getXmlData(a,i.root,!0);O=$.jgrid.getXmlData(O,i.row,!0),O||(O=[]);var
P,Q=O.length,R=0,S=[],T=parseInt(d.p.rowNum,10),U=d.p.scroll?$.jgrid.randId():1,V=$("#"+$.jgrid.jqID(d.p.id)+" tbody:first");if(Q>0&&d.p.page<=0&&(d.p.page=1),O&&Q){e&&(T*=e+1);var
W,X=$.isFunction(d.p.afterInsertRow),Y=!1,Z=B?k(l,"rownumBox",!1,"jqgrid-rownum"):"",_=y?k(l,"multiBox",!1,"cbox"):"";for(d.p.grouping&&(Y=d.p.groupingView.groupCollapse===!0,W=$.jgrid.getMethod("groupingPrepare"));Q>R;){t=O[R],u=r(t,U+R),u=d.p.idPrefix+u,P=0===b?0:b+1,v=N+((P+R)%2===1?" "+M:"");var
aa=K.length;if(K.push(""),B&&K.push(F(0,R,d.p.page,d.p.rowNum,Z)),y&&K.push(E(u,B,R,!1,_)),A&&K.push(p.call(w,y+B,R+b)),i.repeatitems){s||(s=H(y+A+B));var
ba=$.jgrid.getXmlData(t,i.cell,!0);$.each(s,function(a){var
c=ba[this];return c?(o=c.textContent||c.text,J[d.p.colModel[a+y+A+B].name]=o,void
K.push(D(u,o,a+y+A+B,R+b,t,J))):!1})}else
for(m=0;m<C.length;m++)o=$.jgrid.getXmlData(t,C[m]),J[d.p.colModel[m+y+A+B].name]=o,K.push(D(u,o,m+y+A+B,R+b,t,J));if(K[aa]=L(u,Y,v,J,t),K.push("</tr>"),d.p.grouping&&(S.push(K),d.p.groupingView._locgr||W.call(w,J,R),K=[]),(g||d.p.treeGrid===!0&&!d.p._ald)&&(J[h]=$.jgrid.stripPref(d.p.idPrefix,u),d.p.data.push(J),d.p._index[J[h]]=d.p.data.length-1),d.p.gridview===!1&&(V.append(K.join("")),w.triggerHandler("jqGridAfterInsertRow",[u,J,t]),X&&d.p.afterInsertRow.call(d,u,J,t),K=[]),J={},x++,R++,x===T)break}}if(d.p.gridview===!0&&(n=d.p.treeANode>-1?d.p.treeANode:0,d.p.grouping?g||(w.jqGrid("groupingRender",S,d.p.colModel.length,d.p.page,T),S=null):d.p.treeGrid===!0&&n>0?$(d.rows[n]).after(K.join("")):(V.append(K.join("")),d.grid.cols=d.rows[0].cells)),d.p.totaltime=new
Date-f,K=null,d.p.subGrid===!0)try{w.jqGrid("addSubGrid",y+B)}catch(ca){}if(x>0&&0===d.p.records&&(d.p.records=Q),d.p.treeGrid===!0)try{w.jqGrid("setTreeNode",n+1,x+n+1)}catch(da){}if(d.p.reccount=x,d.p.treeANode=-1,d.p.userDataOnFooter&&w.jqGrid("footerData","set",d.p.userData,!0),g&&(d.p.records=Q,d.p.lastpage=Math.ceil(Q/T)),c||d.updatepager(!1,!0),g){for(;Q>x;){if(t=O[x],u=r(t,x+U),u=d.p.idPrefix+u,i.repeatitems){s||(s=H(y+A+B));var
ea=$.jgrid.getXmlData(t,i.cell,!0);$.each(s,function(a){var
b=ea[this];return b?(o=b.textContent||b.text,void(J[d.p.colModel[a+y+A+B].name]=o)):!1})}else
for(m=0;m<C.length;m++)o=$.jgrid.getXmlData(t,C[m]),J[d.p.colModel[m+y+A+B].name]=o;J[h]=$.jgrid.stripPref(d.p.idPrefix,u),d.p.grouping&&W.call(w,J,x),d.p.data.push(J),d.p._index[J[h]]=d.p.data.length-1,J={},x++}d.p.grouping&&(d.p.groupingView._locgr=!0,w.jqGrid("groupingRender",S,d.p.colModel.length,d.p.page,T),S=null)}}},N=function(a,b,c,e){var
f=new
Date;if(a){-1!==d.p.treeANode||d.p.scroll?b=b>1?b:1:(I.call(d,!1,!0),b=1);var
g,h,i="_id_",j="local"!==d.p.datatype&&d.p.loadonce||"jsonstring"===d.p.datatype;j&&(d.p.data=[],d.p._index={},d.p.localReader.id=i),d.p.reccount=0,"local"===d.p.datatype?(g=d.p.localReader,h="local"):(g=d.p.jsonReader,h="json");var
m,o,p,q,r,s,t,u,v,w,x,y,A=$(d),B=0,C=[],J=d.p.multiselect?1:0,K=d.p.subGrid===!0?1:0,M=d.p.rownumbers===!0?1:0,N=H(J+K+M),O=G(h),P={},Q=[],R=d.p.altRows===!0?d.p.altclass:"",S=k(l,"rowBox",!0,"jqgrow ui-row-"+d.p.direction);d.p.page=z($.jgrid.getAccessor(a,g.page),d.p.page),d.p.lastpage=z($.jgrid.getAccessor(a,g.total),1),d.p.records=z($.jgrid.getAccessor(a,g.records)),d.p.userData=$.jgrid.getAccessor(a,g.userdata)||{},K&&(r=$.jgrid.getMethod("addSubGridCell")),v=d.p.keyName===!1?$.isFunction(g.id)?g.id.call(d,a):g.id:d.p.keyName,u=$.jgrid.getAccessor(a,g.root),null==u&&$.isArray(a)&&(u=a),u||(u=[]),t=u.length,o=0,t>0&&d.p.page<=0&&(d.p.page=1);var
T,U,V=parseInt(d.p.rowNum,10),W=d.p.scroll?$.jgrid.randId():1,X=!1;e&&(V*=e+1),"local"!==d.p.datatype||d.p.deselectAfterSort||(X=!0);var
Y,Z=$.isFunction(d.p.afterInsertRow),_=[],aa=!1,ba=$("#"+$.jgrid.jqID(d.p.id)+" tbody:first"),ca=M?k(l,"rownumBox",!1,"jqgrid-rownum"):"",da=J?k(l,"multiBox",!1,"cbox"):"";for(d.p.grouping&&(aa=d.p.groupingView.groupCollapse===!0,Y=$.jgrid.getMethod("groupingPrepare"));t>o;){if(q=u[o],x=$.jgrid.getAccessor(q,v),void
0===x&&("number"==typeof
v&&null!=d.p.colModel[v+J+K+M]&&(x=$.jgrid.getAccessor(q,d.p.colModel[v+J+K+M].name)),void
0===x&&(x=W+o,0===C.length&&g.cell))){var
ea=$.jgrid.getAccessor(q,g.cell)||q;x=null!=ea&&void
0!==ea[v]?ea[v]:x,ea=null}x=d.p.idPrefix+x,T=1===b?0:b,y=S+((T+o)%2===1?" "+R:""),X&&(U=d.p.multiselect?-1!==$.inArray(x,d.p.selarrrow):x===d.p.selrow);var
fa=Q.length;for(Q.push(""),M&&Q.push(F(0,o,d.p.page,d.p.rowNum,ca)),J&&Q.push(E(x,M,o,U,da)),K&&Q.push(r.call(A,J+M,o+b)),s=O,g.repeatitems&&(g.cell&&(q=$.jgrid.getAccessor(q,g.cell)||q),$.isArray(q)&&(s=N)),p=0;p<s.length;p++)m=$.jgrid.getAccessor(q,s[p]),P[d.p.colModel[p+J+K+M].name]=m,Q.push(D(x,m,p+J+K+M,o+b,q,P));if(y+=U?" "+n:"",Q[fa]=L(x,aa,y,P,q),Q.push("</tr>"),d.p.grouping&&(_.push(Q),d.p.groupingView._locgr||Y.call(A,P,o),Q=[]),(j||d.p.treeGrid===!0&&!d.p._ald)&&(P[i]=$.jgrid.stripPref(d.p.idPrefix,x),d.p.data.push(P),d.p._index[P[i]]=d.p.data.length-1),d.p.gridview===!1&&(ba.append(Q.join("")),A.triggerHandler("jqGridAfterInsertRow",[x,P,q]),Z&&d.p.afterInsertRow.call(d,x,P,q),Q=[]),P={},B++,o++,B===V)break}if(d.p.gridview===!0&&(w=d.p.treeANode>-1?d.p.treeANode:0,d.p.grouping?j||(A.jqGrid("groupingRender",_,d.p.colModel.length,d.p.page,V),_=null):d.p.treeGrid===!0&&w>0?$(d.rows[w]).after(Q.join("")):(ba.append(Q.join("")),d.grid.cols=d.rows[0].cells)),d.p.totaltime=new
Date-f,Q=null,d.p.subGrid===!0)try{A.jqGrid("addSubGrid",J+M)}catch(ga){}if(B>0&&0===d.p.records&&(d.p.records=t),d.p.treeGrid===!0)try{A.jqGrid("setTreeNode",w+1,B+w+1)}catch(ha){}if(d.p.reccount=B,d.p.treeANode=-1,d.p.userDataOnFooter&&A.jqGrid("footerData","set",d.p.userData,!0),j&&(d.p.records=t,d.p.lastpage=Math.ceil(t/V)),c||d.updatepager(!1,!0),j){for(;t>B&&u[B];){if(q=u[B],x=$.jgrid.getAccessor(q,v),void
0===x&&("number"==typeof
v&&null!=d.p.colModel[v+J+K+M]&&(x=$.jgrid.getAccessor(q,d.p.colModel[v+J+K+M].name)),void
0===x&&(x=W+B,0===C.length&&g.cell))){var
ia=$.jgrid.getAccessor(q,g.cell)||q;x=null!=ia&&void
0!==ia[v]?ia[v]:x,ia=null}if(q){for(x=d.p.idPrefix+x,s=O,g.repeatitems&&(g.cell&&(q=$.jgrid.getAccessor(q,g.cell)||q),$.isArray(q)&&(s=N)),p=0;p<s.length;p++)P[d.p.colModel[p+J+K+M].name]=$.jgrid.getAccessor(q,s[p]);P[i]=$.jgrid.stripPref(d.p.idPrefix,x),d.p.grouping&&Y.call(A,P,B),d.p.data.push(P),d.p._index[P[i]]=d.p.data.length-1,P={}}B++}d.p.grouping&&(d.p.groupingView._locgr=!0,A.jqGrid("groupingRender",_,d.p.colModel.length,d.p.page,V),_=null)}}},O=function(){function
a(b){var
c,e,f,g,h,i,k=0;if(null!=b.groups){for(e=b.groups.length&&"OR"===b.groupOp.toString().toUpperCase(),e&&r.orBegin(),c=0;c<b.groups.length;c++){k>0&&e&&r.or();try{a(b.groups[c])}catch(l){alert(l)}k++}e&&r.orEnd()}if(null!=b.rules)try{for(f=b.rules.length&&"OR"===b.groupOp.toString().toUpperCase(),f&&r.orBegin(),c=0;c<b.rules.length;c++)h=b.rules[c],g=b.groupOp.toString().toUpperCase(),q[h.op]&&h.field&&(k>0&&g&&"OR"===g&&(r=r.or()),i=j[h.field],"date"===i.stype&&i.srcfmt&&i.newfmt&&i.srcfmt!==i.newfmt&&(h.data=$.jgrid.parseDate.call(d,i.newfmt,h.data,i.srcfmt)),r=q[h.op](r,g)(h.field,h.data,j[h.field])),k++;f&&r.orEnd()}catch(m){alert(m)}}var
b,c,e,f,g=d.p.multiSort?[]:"",h=[],i=!1,j={},k=[],l=[];if($.isArray(d.p.data)){var
m,n,o,p=d.p.grouping?d.p.groupingView:!1;if($.each(d.p.colModel,function(){if(c=this.sorttype||"text",o=this.index||this.name,"date"===c||"datetime"===c?(this.formatter&&"string"==typeof
this.formatter&&"date"===this.formatter?(b=this.formatoptions&&this.formatoptions.srcformat?this.formatoptions.srcformat:$.jgrid.getRegional(d,"formatter.date.srcformat"),e=this.formatoptions&&this.formatoptions.newformat?this.formatoptions.newformat:$.jgrid.getRegional(d,"formatter.date.newformat")):b=e=this.datefmt||"Y-m-d",j[o]={stype:c,srcfmt:b,newfmt:e,sfunc:this.sortfunc||null}):j[o]={stype:c,srcfmt:"",newfmt:"",sfunc:this.sortfunc||null},d.p.grouping)for(n=0,m=p.groupField.length;m>n;n++)this.name===p.groupField[n]&&(k[n]=j[o],l[n]=o);d.p.multiSort||i||o!==d.p.sortname||(g=o,i=!0)}),d.p.multiSort&&(g=t,h=u),d.p.treeGrid&&d.p._sort)return void
$(d).jqGrid("SortTree",g,d.p.sortorder,j[g].stype||"text",j[g].srcfmt||"");var
q={eq:function(a){return a.equals},ne:function(a){return a.notEquals},lt:function(a){return a.less},le:function(a){return a.lessOrEquals},gt:function(a){return a.greater},ge:function(a){return a.greaterOrEquals},cn:function(a){return a.contains},nc:function(a,b){return"OR"===b?a.orNot().contains:a.andNot().contains},bw:function(a){return a.startsWith},bn:function(a,b){return"OR"===b?a.orNot().startsWith:a.andNot().startsWith},en:function(a,b){return"OR"===b?a.orNot().endsWith:a.andNot().endsWith},ew:function(a){return a.endsWith},ni:function(a,b){return"OR"===b?a.orNot().equals:a.andNot().equals},"in":function(a){return a.equals},nu:function(a){return a.isNull},nn:function(a,b){return"OR"===b?a.orNot().isNull:a.andNot().isNull}},r=$.jgrid.from.call(d,d.p.data);if(d.p.ignoreCase&&(r=r.ignoreCase()),d.p.search===!0){var
s=d.p.postData.filters;if(s)"string"==typeof
s&&(s=$.jgrid.parse(s)),a(s);else
try{f=j[d.p.postData.searchField],"date"===f.stype&&f.srcfmt&&f.newfmt&&f.srcfmt!==f.newfmt&&(d.p.postData.searchString=$.jgrid.parseDate.call(d,f.newfmt,d.p.postData.searchString,f.srcfmt)),r=q[d.p.postData.searchOper](r)(d.p.postData.searchField,d.p.postData.searchString,j[d.p.postData.searchField])}catch(v){}}else
d.p.treeGrid&&"nested"===d.p.treeGridModel&&r.orderBy(d.p.treeReader.left_field,"asc","integer","",null);if(d.p.treeGrid&&"adjacency"===d.p.treeGridModel&&(m=0,g=null),d.p.grouping)for(n=0;m>n;n++)r.orderBy(l[n],p.groupOrder[n],k[n].stype,k[n].srcfmt);d.p.multiSort?$.each(g,function(a){r.orderBy(this,h[a],j[this].stype,j[this].srcfmt,j[this].sfunc)}):g&&d.p.sortorder&&i&&("DESC"===d.p.sortorder.toUpperCase()?r.orderBy(d.p.sortname,"d",j[g].stype,j[g].srcfmt,j[g].sfunc):r.orderBy(d.p.sortname,"a",j[g].stype,j[g].srcfmt,j[g].sfunc));var
w=r.select(),x=parseInt(d.p.rowNum,10),y=w.length,z=parseInt(d.p.page,10),A=Math.ceil(y/x),B={};if((d.p.search||d.p.resetsearch)&&d.p.grouping&&d.p.groupingView._locgr){d.p.groupingView.groups=[];var
C,D,E,F=$.jgrid.getMethod("groupingPrepare");if(d.p.footerrow&&d.p.userDataOnFooter){for(D
in
d.p.userData)d.p.userData.hasOwnProperty(D)&&(d.p.userData[D]=0);E=!0}for(C=0;y>C;C++){if(E)for(D
in
d.p.userData)d.p.userData.hasOwnProperty(D)&&(d.p.userData[D]+=parseFloat(w[C][D]||0));F.call($(d),w[C],C,x)}}return w=d.p.treeGrid&&d.p.search?$(d).jqGrid("searchTree",w):w.slice((z-1)*x,z*x),r=null,j=null,B[d.p.localReader.total]=A,B[d.p.localReader.page]=z,B[d.p.localReader.records]=y,B[d.p.localReader.root]=w,B[d.p.localReader.userdata]=d.p.userData,w=null,B}},P=function(a,b){var
c,e,f,g,h,i,j,n,p="",q=d.p.pager?$.jgrid.jqID(d.p.pager.substr(1)):"",r=q?"_"+q:"",s=d.p.toppager?"_"+d.p.toppager.substr(1):"";if(f=parseInt(d.p.page,10)-1,0>f&&(f=0),f*=parseInt(d.p.rowNum,10),h=f+d.p.reccount,d.p.scroll){var
t=$("tbody:first > tr:gt(0)",d.grid.bDiv);f=h-t.length,d.p.reccount=t.length;var
u=t.outerHeight()||d.grid.prevRowHeight;if(u){var
v=f*u,w=parseInt(d.p.records,10)*u;$(">div:first",d.grid.bDiv).css({height:w}).children("div:first").css({height:v,display:v?"":"none"}),0===d.grid.bDiv.scrollTop&&d.p.page>1&&(d.grid.bDiv.scrollTop=d.p.rowNum*(d.p.page-1)*u)}d.grid.bDiv.scrollLeft=d.grid.hDiv.scrollLeft}if(p=d.p.pager||"",p+=d.p.toppager?p?","+d.p.toppager:d.p.toppager:""){if(j=$.jgrid.getRegional(d,"formatter.integer"),c=z(d.p.page),e=z(d.p.lastpage),$(".selbox",p)[this.p.useProp?"prop":"attr"]("disabled",!1),d.p.pginput===!0&&($("#input"+r).html($.jgrid.template($.jgrid.getRegional(d,"defaults.pgtext",d.p.pgtext)||"","<input "+k(l,"pgInput",!1,"ui-pg-input")+" type='text' size='2' maxlength='7' value='0' role='textbox'/>","<span id='sp_1_"+$.jgrid.jqID(q)+"'></span>")),d.p.toppager&&$("#input_t"+s).html($.jgrid.template($.jgrid.getRegional(d,"defaults.pgtext",d.p.pgtext)||"","<input "+k(l,"pgInput",!1,"ui-pg-input")+" type='text' size='2' maxlength='7' value='0' role='textbox'/>","<span id='sp_1_"+$.jgrid.jqID(q)+"_toppager'></span>")),$(".ui-pg-input",p).val(d.p.page),n=d.p.toppager?"#sp_1"+r+",#sp_1"+r+"_toppager":"#sp_1"+r,$(n).html($.fmatter?$.fmatter.util.NumberFormat(d.p.lastpage,j):d.p.lastpage)),d.p.viewrecords)if(0===d.p.reccount)$(".ui-paging-info",p).html($.jgrid.getRegional(d,"defaults.emptyrecords",d.p.emptyrecords));else{g=f+1,i=d.p.records,$.fmatter&&(g=$.fmatter.util.NumberFormat(g,j),h=$.fmatter.util.NumberFormat(h,j),i=$.fmatter.util.NumberFormat(i,j));var
x=$.jgrid.getRegional(d,"defaults.recordtext",d.p.recordtext);$(".ui-paging-info",p).html($.jgrid.template(x,g,h,i))}d.p.pgbuttons===!0&&(0>=c&&(c=e=0),1===c||0===c?($("#first"+r+", #prev"+r).addClass(m).removeClass(o),d.p.toppager&&$("#first_t"+s+", #prev_t"+s).addClass(m).removeClass(o)):($("#first"+r+", #prev"+r).removeClass(m),d.p.toppager&&$("#first_t"+s+", #prev_t"+s).removeClass(m)),c===e||0===c?($("#next"+r+", #last"+r).addClass(m).removeClass(o),d.p.toppager&&$("#next_t"+s+", #last_t"+s).addClass(m).removeClass(o)):($("#next"+r+", #last"+r).removeClass(m),d.p.toppager&&$("#next_t"+s+", #last_t"+s).removeClass(m)))}a===!0&&d.p.rownumbers===!0&&$(">td.jqgrid-rownum",d.rows).each(function(a){$(this).html(f+1+a)}),b&&d.p.jqgdnd&&$(d).jqGrid("gridDnD","updateDnD"),$(d).triggerHandler("jqGridGridComplete"),$.isFunction(d.p.gridComplete)&&d.p.gridComplete.call(d),$(d).triggerHandler("jqGridAfterGridComplete")},Q=function(){d.grid.hDiv.loading=!0,d.p.hiddengrid||$(d).jqGrid("progressBar",{method:"show",loadtype:d.p.loadui,htmlcontent:$.jgrid.getRegional(d,"defaults.loadtext",d.p.loadtext)})},R=function(){d.grid.hDiv.loading=!1,$(d).jqGrid("progressBar",{method:"hide",loadtype:d.p.loadui})},S=function(a){if(!d.grid.hDiv.loading){var
b,c,e=d.p.scroll&&a===!1,f={},g=d.p.prmNames;d.p.page<=0&&(d.p.page=Math.min(1,d.p.lastpage)),null!==g.search&&(f[g.search]=d.p.search),null!==g.nd&&(f[g.nd]=(new
Date).getTime()),null!==g.rows&&(f[g.rows]=d.p.rowNum),null!==g.page&&(f[g.page]=d.p.page),null!==g.sort&&(f[g.sort]=d.p.sortname),null!==g.order&&(f[g.order]=d.p.sortorder),null!==d.p.rowTotal&&null!==g.totalrows&&(f[g.totalrows]=d.p.rowTotal);var
h=$.isFunction(d.p.loadComplete),i=h?d.p.loadComplete:null,j=0;if(a=a||1,a>1?null!==g.npage?(f[g.npage]=a,j=a-1,a=1):i=function(b){d.p.page++,d.grid.hDiv.loading=!1,h&&d.p.loadComplete.call(d,b),S(a-1)}:null!==g.npage&&delete
d.p.postData[g.npage],d.p.grouping){$(d).jqGrid("groupingSetup");var
k,l=d.p.groupingView,m="";for(k=0;k<l.groupField.length;k++){var
n=l.groupField[k];$.each(d.p.colModel,function(a,b){b.name===n&&b.index&&(n=b.index)}),m+=n+" "+l.groupOrder[k]+", "}f[g.sort]=m+f[g.sort]}$.extend(d.p.postData,f);var
o=d.p.scroll?d.rows.length-1:1,p=$(d).triggerHandler("jqGridBeforeRequest");if(p===!1||"stop"===p)return;if($.isFunction(d.p.datatype))return void
d.p.datatype.call(d,d.p.postData,"load_"+d.p.id,o,a,j);if($.isFunction(d.p.beforeRequest)&&(p=d.p.beforeRequest.call(d),void
0===p&&(p=!0),p===!1))return;switch(b=d.p.datatype.toLowerCase()){case"json":case"jsonp":case"xml":case"script":$.ajax($.extend({url:d.p.url,type:d.p.mtype,dataType:b,data:$.isFunction(d.p.serializeGridData)?d.p.serializeGridData.call(d,d.p.postData):d.p.postData,success:function(c,f,g){return $.isFunction(d.p.beforeProcessing)&&d.p.beforeProcessing.call(d,c,f,g)===!1?void
R():("xml"===b?M(c,o,a>1,j):N(c,o,a>1,j),$(d).triggerHandler("jqGridLoadComplete",[c]),i&&i.call(d,c),$(d).triggerHandler("jqGridAfterLoadComplete",[c]),e&&d.grid.populateVisible(),(d.p.loadonce||d.p.treeGrid)&&(d.p.datatype="local"),c=null,void(1===a&&R()))},error:function(b,c,e){$.isFunction(d.p.loadError)&&d.p.loadError.call(d,b,c,e),1===a&&R(),b=null},beforeSend:function(a,b){var
c=!0;return $.isFunction(d.p.loadBeforeSend)&&(c=d.p.loadBeforeSend.call(d,a,b)),void
0===c&&(c=!0),c===!1?!1:void
Q()}},$.jgrid.ajaxOptions,d.p.ajaxGridOptions));break;case"xmlstring":Q(),c="string"!=typeof
d.p.datastr?d.p.datastr:$.parseXML(d.p.datastr),M(c),$(d).triggerHandler("jqGridLoadComplete",[c]),h&&d.p.loadComplete.call(d,c),$(d).triggerHandler("jqGridAfterLoadComplete",[c]),d.p.datatype="local",d.p.datastr=null,R();break;case"jsonstring":Q(),c="string"==typeof
d.p.datastr?$.jgrid.parse(d.p.datastr):d.p.datastr,N(c),$(d).triggerHandler("jqGridLoadComplete",[c]),h&&d.p.loadComplete.call(d,c),$(d).triggerHandler("jqGridAfterLoadComplete",[c]),d.p.datatype="local",d.p.datastr=null,R();break;case"local":case"clientside":Q(),d.p.datatype="local",d.p._ald=!0;var
q=O();N(q,o,a>1,j),$(d).triggerHandler("jqGridLoadComplete",[q]),i&&i.call(d,q),$(d).triggerHandler("jqGridAfterLoadComplete",[q]),e&&d.grid.populateVisible(),R(),d.p._ald=!1}d.p._sort=!1}},T=function(a){$("#cb_"+$.jgrid.jqID(d.p.id),d.grid.hDiv)[d.p.useProp?"prop":"attr"]("checked",a);var
b=d.p.frozenColumns?d.p.id+"_frozen":"";b&&$("#cb_"+$.jgrid.jqID(d.p.id),d.grid.fhDiv)[d.p.useProp?"prop":"attr"]("checked",a)},U=function(a,b){var
c,e,f,g,i,j,n,p="<td class='ui-pg-button "+m+"'><span class='ui-separator'></span></td>",r="",s="<table class='ui-pg-table ui-common-table ui-paging-pager'><tbody><tr>",t="",u=function(a,b){var
c;return $.isFunction(d.p.onPaging)&&(c=d.p.onPaging.call(d,a,b)),"stop"===c?!1:(d.p.selrow=null,d.p.multiselect&&(d.p.selarrrow=[],T(!1)),d.p.savedRow=[],!0)};if(a=a.substr(1),b+="_"+a,c="pg_"+a,e=a+"_left",f=a+"_center",g=a+"_right",$("#"+$.jgrid.jqID(a)).append("<div id='"+c+"' class='ui-pager-control' role='group'><table "+k(l,"pagerTable",!1,"ui-pg-table ui-common-table ui-pager-table")+"><tbody><tr><td id='"+e+"' align='left'></td><td id='"+f+"' align='center' style='white-space:pre;'></td><td id='"+g+"' align='right'></td></tr></tbody></table></div>").attr("dir","ltr"),d.p.rowList.length>0){t='<td dir="'+h+'">',t+="<select "+k(l,"pgSelectBox",!1,"ui-pg-selbox")+' role="listbox" title="'+($.jgrid.getRegional(d,"defaults.pgrecs",d.p.pgrecs)||"")+'">';var
v;for(n=0;n<d.p.rowList.length;n++)v=d.p.rowList[n].toString().split(":"),1===v.length&&(v[1]=v[0]),t+='<option role="option" value="'+v[0]+'"'+(z(d.p.rowNum,0)===z(v[0],0)?' selected="selected"':"")+">"+v[1]+"</option>";t+="</select></td>"}if("rtl"===h&&(s+=t),d.p.pginput===!0&&(r="<td id='input"+b+"' dir='"+h+"'>"+$.jgrid.template($.jgrid.getRegional(d,"defaults.pgtext",d.p.pgtext)||"","<input class='ui-pg-input' type='text' size='2' maxlength='7' value='0' role='textbox'/>","<span id='sp_1_"+$.jgrid.jqID(a)+"'></span>")+"</td>"),d.p.pgbuttons===!0){var
w=["first"+b,"prev"+b,"next"+b,"last"+b],x=k(l,"pgButtonBox",!0,"ui-pg-button"),y=[$.jgrid.getRegional(d,"defaults.pgfirst",d.p.pgfirst)||"",$.jgrid.getRegional(d,"defaults.pgprev",d.p.pgprev)||"",$.jgrid.getRegional(d,"defaults.pgnext",d.p.pgnext)||"",$.jgrid.getRegional(d,"defaults.pglast",d.p.pglast)||""];"rtl"===h&&(w.reverse(),y.reverse()),s+="<td id='"+w[0]+"' class='"+x+"' title='"+y[0]+"'><span "+k(l,"icon_first",!1,q)+"></span></td>",s+="<td id='"+w[1]+"' class='"+x+"'  title='"+y[1]+"'><span "+k(l,"icon_prev",!1,q)+"></span></td>",s+=""!==r?p+r+p:"",s+="<td id='"+w[2]+"' class='"+x+"' title='"+y[2]+"'><span "+k(l,"icon_next",!1,q)+"></span></td>",s+="<td id='"+w[3]+"' class='"+x+"' title='"+y[3]+"'><span "+k(l,"icon_end",!1,q)+"></span></td>"}else""!==r&&(s+=r);"ltr"===h&&(s+=t),s+="</tr></tbody></table>",d.p.viewrecords===!0&&$("td#"+a+"_"+d.p.recordpos,"#"+c).append("<div dir='"+h+"' style='text-align:"+d.p.recordpos+"' class='ui-paging-info'></div>"),$("td#"+a+"_"+d.p.pagerpos,"#"+c).append(s),j=$("#gbox_"+$.jgrid.jqID(d.p.id)).css("font-size")||"11px",$("#gbox_"+$.jgrid.jqID(d.p.id)).append("<div id='testpg' "+k(l,"entrieBox",!1,"ui-jqgrid")+" style='font-size:"+j+";visibility:hidden;' ></div>"),i=$(s).clone().appendTo("#testpg").width(),$("#testpg").remove(),i>0&&(""!==r&&(i+=50),$("td#"+a+"_"+d.p.pagerpos,"#"+c).width(i)),d.p._nvtd=[],d.p._nvtd[0]=i?Math.floor((d.p.width-i)/2):Math.floor(d.p.width/3),d.p._nvtd[1]=0,s=null,$(".ui-pg-selbox","#"+c).bind("change",function(){return u("records",this)?(d.p.page=Math.round(d.p.rowNum*(d.p.page-1)/this.value-.5)+1,d.p.rowNum=this.value,d.p.pager&&$(".ui-pg-selbox",d.p.pager).val(this.value),d.p.toppager&&$(".ui-pg-selbox",d.p.toppager).val(this.value),S(),!1):!1}),d.p.pgbuttons===!0&&($(".ui-pg-button","#"+c).hover(function(){$(this).hasClass(m)?this.style.cursor="default":($(this).addClass(o),this.style.cursor="pointer")},function(){$(this).hasClass(m)||($(this).removeClass(o),this.style.cursor="default")}),$("#first"+$.jgrid.jqID(b)+", #prev"+$.jgrid.jqID(b)+", #next"+$.jgrid.jqID(b)+", #last"+$.jgrid.jqID(b)).click(function(){if($(this).hasClass(m))return!1;var
a=z(d.p.page,1),c=z(d.p.lastpage,1),e=!1,f=!0,g=!0,h=!0,i=!0;return 0===c||1===c?(f=!1,g=!1,h=!1,i=!1):c>1&&a>=1?1===a?(f=!1,g=!1):a===c&&(h=!1,i=!1):c>1&&0===a&&(h=!1,i=!1,a=c-1),u(this.id.split("_")[0],this)?(this.id==="first"+b&&f&&(d.p.page=1,e=!0),this.id==="prev"+b&&g&&(d.p.page=a-1,e=!0),this.id==="next"+b&&h&&(d.p.page=a+1,e=!0),this.id==="last"+b&&i&&(d.p.page=c,e=!0),e&&S(),!1):!1})),d.p.pginput===!0&&$("#"+c).on("keypress","input.ui-pg-input",function(a){var
b=a.charCode||a.keyCode||0;return 13===b?u("user",this)?($(this).val(z($(this).val(),1)),d.p.page=$(this).val()>0?$(this).val():d.p.page,S(),!1):!1:this})},V=function(a,b,c){var
e,f=d.p.colModel,g=d.p.frozenColumns?b:d.grid.headers[a].el,h="";$("span.ui-grid-ico-sort",g).addClass(m),$(g).attr("aria-selected","false"),e=f[a].index||f[a].name,"undefined"==typeof
c?f[a].lso?"asc"===f[a].lso?(f[a].lso+="-desc",h="desc"):"desc"===f[a].lso?(f[a].lso+="-asc",h="asc"):("asc-desc"===f[a].lso||"desc-asc"===f[a].lso)&&(f[a].lso=""):f[a].lso=h=f[a].firstsortorder||"asc":f[a].lso=h=c,h?($("span.s-ico",g).show(),$("span.ui-icon-"+h,g).removeClass(m),$(g).attr("aria-selected","true")):d.p.viewsortcols[0]||$("span.s-ico",g).hide();var
i=t.indexOf(e);-1===i?(t.push(e),u.push(h)):h?u[i]=h:(u.splice(i,1),t.splice(i,1)),d.p.sortorder="",d.p.sortname="";for(var
j=0,k=t.length;k>j;j++)j>0&&(d.p.sortname+=", "),d.p.sortname+=t[j],j!==k-1&&(d.p.sortname+=" "+u[j]);d.p.sortorder=u[k-1]},W=function(a,b,c,e,f){if(d.p.colModel[b].sortable&&!(d.p.savedRow.length>0)){if(c||(d.p.lastsort===b&&""!==d.p.sortname?"asc"===d.p.sortorder?d.p.sortorder="desc":"desc"===d.p.sortorder&&(d.p.sortorder="asc"):d.p.sortorder=d.p.colModel[b].firstsortorder||"asc",d.p.page=1),d.p.multiSort)V(b,f,e);else{if(e){if(d.p.lastsort===b&&d.p.sortorder===e&&!c)return;d.p.sortorder=e}var
g,h=d.grid.headers[d.p.lastsort]?d.grid.headers[d.p.lastsort].el:null,i=d.p.frozenColumns?f:d.grid.headers[b].el,j="single"===d.p.viewsortcols[1]?!0:!1;g=$(h).find("span.ui-grid-ico-sort"),g.addClass(m),j&&$(g).css("display","none"),$(h).attr("aria-selected","false"),d.p.frozenColumns&&(g=d.grid.fhDiv.find("span.ui-grid-ico-sort"),g.addClass(m),j&&g.css("display","none"),d.grid.fhDiv.find("th").attr("aria-selected","false")),g=$(i).find("span.ui-icon-"+d.p.sortorder),g.removeClass(m),j&&g.css("display",""),$(i).attr("aria-selected","true"),d.p.viewsortcols[0]||(d.p.lastsort!==b?(d.p.frozenColumns&&d.grid.fhDiv.find("span.s-ico").hide(),$("span.s-ico",h).hide(),$("span.s-ico",i).show()):""===d.p.sortname&&$("span.s-ico",i).show()),a=a.substring(5+d.p.id.length+1),d.p.sortname=d.p.colModel[b].index||a}if("stop"===$(d).triggerHandler("jqGridSortCol",[d.p.sortname,b,d.p.sortorder]))return void(d.p.lastsort=b);if($.isFunction(d.p.onSortCol)&&"stop"===d.p.onSortCol.call(d,d.p.sortname,b,d.p.sortorder))return void(d.p.lastsort=b);if("local"===d.p.datatype?d.p.deselectAfterSort&&$(d).jqGrid("resetSelection"):(d.p.selrow=null,d.p.multiselect&&T(!1),d.p.selarrrow=[],d.p.savedRow=[]),d.p.scroll){var
k=d.grid.bDiv.scrollLeft;I.call(d,!0,!1),d.grid.hDiv.scrollLeft=k}d.p.subGrid&&"local"===d.p.datatype&&$("td.sgexpanded","#"+$.jgrid.jqID(d.p.id)).each(function(){$(this).trigger("click")}),d.p._sort=!0,S(),d.p.lastsort=b,d.p.sortname!==a&&b&&(d.p.lastsort=b)}},X=function(){var
a,b,c,f,g=0,h=$.jgrid.cell_width?0:z(d.p.cellLayout,0),i=0,j=z(d.p.scrollOffset,0),k=!1,l=0;$.each(d.p.colModel,function(){if(void
0===this.hidden&&(this.hidden=!1),d.p.grouping&&d.p.autowidth){var
a=$.inArray(this.name,d.p.groupingView.groupField);a>=0&&d.p.groupingView.groupColumnShow.length>a&&(this.hidden=!d.p.groupingView.groupColumnShow[a])}this.widthOrg=b=z(this.width,0),this.hidden===!1&&(g+=b+h,this.fixed?l+=b+h:i++)}),isNaN(d.p.width)&&(d.p.width=g+(d.p.shrinkToFit!==!1||isNaN(d.p.height)?0:j)),e.width=parseInt(d.p.width,10),d.p.tblwidth=g,d.p.shrinkToFit===!1&&d.p.forceFit===!0&&(d.p.forceFit=!1),d.p.shrinkToFit===!0&&i>0&&(c=e.width-h*i-l,isNaN(d.p.height)||(c-=j,k=!0),g=0,$.each(d.p.colModel,function(e){this.hidden!==!1||this.fixed||(b=Math.round(c*this.width/(d.p.tblwidth-h*i-l)),this.width=b,g+=b,a=e)}),f=0,k?e.width-l-(g+h*i)!==j&&(f=e.width-l-(g+h*i)-j):k||1===Math.abs(e.width-l-(g+h*i))||(f=e.width-l-(g+h*i)),d.p.colModel[a].width+=f,d.p.tblwidth=g+f+h*i+l,d.p.tblwidth>d.p.width&&(d.p.colModel[a].width-=d.p.tblwidth-parseInt(d.p.width,10),d.p.tblwidth=d.p.width))},Y=function(a){var
b,c=a,e=a;for(b=a+1;b<d.p.colModel.length;b++)if(d.p.colModel[b].hidden!==!0){e=b;break}return e-c},Z=function(a){var
b=$(d.grid.headers[a].el),c=[b.position().left+b.outerWidth()];return"rtl"===d.p.direction&&(c[0]=d.p.width-c[0]),c[0]-=d.grid.bDiv.scrollLeft,c.push($(d.grid.hDiv).position().top),c.push($(d.grid.bDiv).offset().top-$(d.grid.hDiv).offset().top+$(d.grid.bDiv).height()),c},_=function(a){var
b,c=d.grid.headers,e=$.jgrid.getCellIndex(a);for(b=0;b<c.length;b++)if(a===c[b].el){e=b;break}return e},aa=function(a,b,c){var
e,f,g=d.p.colModel,h=g.length,i=[],j=$.jgrid.getRegional(d,"colmenu"),k='<ul id="col_menu" class="ui-search-menu  ui-col-menu modal-content" role="menu" tabindex="0" style="left:'+b+"px;top:"+a+'px;">';for(e=0;h>e;e++){var
l=g[e].hidden?"":"checked",m=g[e].name,n=d.p.colNames[e];f="cb"===m||"subgrid"===m||"rn"===m||g[e].hidedlg?"style='display:none'":"",k+="<li "+f+' class="ui-menu-item" role="presentation" draggable="true"><a class="g-menu-item" tabindex="0" role="menuitem" ><table class="ui-common-table" ><tr><td class="menu_icon" title="'+j.reorder+'"><span class="'+q+" "+r.icon_move+' notclick"></span></td><td class="menu_icon"><input class="'+r.input_checkbox+'" type="checkbox" name="'+m+'" '+l+'></td><td class="menu_text">'+n+"</td></tr></table></a></li>",i.push(e)}k+="</ul>",$(c).append(k),$("#col_menu").addClass("ui-menu "+r.menu_widget),$.fn.html5sortable()&&$("#col_menu").html5sortable({handle:"span",forcePlaceholderSize:!0}).bind("sortupdate",function(a,b){for(i.splice(b.startindex,1),i.splice(b.endindex,0,b.startindex),$(d).jqGrid("destroyFrozenColumns"),$(d).jqGrid("remapColumns",i,!0),$(d).jqGrid("setFrozenColumns"),e=0;h>e;e++)i[e]=e}),$("#col_menu > li > a").on("click",function(a){var
b;$(a.target).hasClass("notclick")||($(a.target).is(":input")?b=$(a.target).is(":checked"):(b=!$("input",this).is(":checked"),$("input",this).prop("checked",b)),b?($(d).jqGrid("showCol",$("input",this).attr("name")),$(this).parent().attr("draggable","true")):($(d).jqGrid("hideCol",$("input",this).attr("name")),$(this).parent().attr("draggable","false")))}).hover(function(){$(this).addClass(o)},function(){$(this).removeClass(o)})},ba=function(a,b,c,e){var
f,g,h,i,j,k=d.p.colModel[a],l="",m="",n="",p="",q="",s="",t=["eq","ne","lt","le","gt","ge","nu","nn","in","ni"],u=["eq","ne","bw","bn","ew","en","cn","nc","nu","nn","in","ni"],v=$.jgrid.getRegional(d,"search"),w=$.jgrid.styleUI[d.p.styleUI||"jQueryUI"].common;if(k){f=d.p.colFilters&&d.p.colFilters[k.name]?d.p.colFilters[k.name]:!1,f&&!$.isEmptyObject(f)&&(l=f.oper1,m=f.value1,n=f.rule,p=f.oper2,q=f.value2),k.searchoptions||(k.searchoptions={}),g=k.searchoptions.sopt?k.searchoptions.sopt:"text"===k.sorttype?u:t,h=k.searchoptions.operands?k.searchoptions.operands:v.groupOps,j=$("<form></form>");var
x="<div>"+$.jgrid.getRegional(d,"colmenu.searchTitle")+"</div>";x+='<div><select id="oper1" class="'+r.filter_select+'">',$.each(v.odata,function(a,b){i=b.oper===l?'selected="selected"':"",-1!==$.inArray(b.oper,g)&&(s+='<option value="'+b.oper+'" '+i+">"+b.text+"</option>")}),x+=s,x+="</select></div>",j.append(x);var
y="";k.searchoptions.defaultValue&&(y=$.isFunction(k.searchoptions.defaultValue)?k.searchoptions.defaultValue.call(d):k.searchoptions.defaultValue),m&&(y=m);var
z=$.extend(k.searchoptions,{name:k.index||k.name,id:"sval1_"+d.p.idPrefix+k.name,oper:"search"}),A=$.jgrid.createEl.call(d,k.stype,z,y,!1,$.extend({},$.jgrid.ajaxOptions,d.p.ajaxSelectOptions||{}));$(A).addClass(r.filter_input),x=$("<div></div>").append(A),j.append(x),x='<div><select id="operand" class="'+r.filter_select+'">',$.each(h,function(a,b){i=b.op===n?'selected="selected"':"",x+="<option value='"+b.op+"' "+i+">"+b.text+"</option>"}),x+="</select></div>",j.append(x),s="",$.each(v.odata,function(a,b){i=b.oper===p?'selected="selected"':"",-1!==$.inArray(b.oper,g)&&(s+='<option value="'+b.oper+'" '+i+">"+b.text+"</option>")}),x='<div><select id="oper2" class="'+r.filter_select+'">'+s+"</select></div>",j.append(x),y=q?q:"",z=$.extend(k.searchoptions,{name:k.index||k.name,id:"sval2_"+d.p.idPrefix+k.name,oper:"search"}),A=$.jgrid.createEl.call(d,k.stype,z,y,!1,$.extend({},$.jgrid.ajaxOptions,d.p.ajaxSelectOptions||{})),$(A).addClass(r.filter_input),x=$("<div></div>").append(A),j.append(x),x="<div>",x+="<div class='search_buttons'><a tabindex='0' id='bs_reset' class='fm-button "+w.button+" ui-reset'>"+v.Reset+"</a></div>",x+="<div class='search_buttons'><a tabindex='0' id='bs_search' class='fm-button "+w.button+" ui-search'>"+v.Find+"</a></div>",x+="</div>",j.append(x),j=$('<li class="ui-menu-item" role="presentation"></li>').append(j),j=$('<ul id="search_menu" class="ui-search-menu modal-content" role="menu" tabindex="0" style="left:'+c+"px;top:"+b+'px;"></ul>').append(j),$(e).append(j),$("#search_menu").addClass("ui-menu "+r.menu_widget),$("#bs_reset, #bs_search","#search_menu").hover(function(){$(this).addClass(o)},function(){$(this).removeClass(o)}),$(j).find("#bs_reset").click(function(a){return d.p.colFilters[k.name]={},d.p.postData.filters=ca(),d.p.search=!0,$(d).trigger("reloadGrid"),$("#column_menu").remove(),!1}),$(j).find("#bs_search").click(function(a){return d.p.colFilters[k.name]={oper1:$("#oper1","#search_menu").val(),value1:$("#sval1_"+d.p.idPrefix+k.name,"#search_menu").val(),rule:$("#operand","#search_menu").val(),oper2:$("#oper2","#search_menu").val(),value2:$("#sval2_"+d.p.idPrefix+k.name,"#search_menu").val()},d.p.postData.filters=ca(),d.p.search=!0,$(d).trigger("reloadGrid"),$("#column_menu").remove(),!1})}},ca=function(){var
a="AND",b='{"groupOp":"'+a+'","rules":[], "groups" : [',c=0;for(var
e
in
d.p.colFilters)if(d.p.colFilters.hasOwnProperty(e)){var
f=d.p.colFilters[e];$.isEmptyObject(f)||(c>0&&(b+=","),b+='{"groupOp": "'+f.rule+'", "rules" : [',b+='{"field":"'+e+'",',b+='"op":"'+f.oper1+'",',f.value1+="",b+='"data":"'+f.value1.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',f.value2&&(b+=',{"field":"'+e+'",',b+='"op":"'+f.oper2+'",',f.value2+="",b+='"data":"'+f.value2.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}'),b+="]}",c++)}return b+="]}"},da=function(a,b){var
c=d.p.colModel[a],e=d.p.groupingView;-1!==b?e.groupField.splice(b,1):e.groupField.push(c.name),$(d).jqGrid("groupingGroupBy",e.groupField),d.p.frozenColumns&&($(d).jqGrid("destroyFrozenColumns"),$(d).jqGrid("setFrozenColumns"))},ea=function(a,b){var
c,e=[],f=d.p.colModel.length,g=-1,h=d.p.colModel;for(c=0;f>c;c++)h[c].frozen&&(g=c),e.push(c);e.splice(a,1),e.splice(g+(b?1:0),0,a),h[a].frozen=b,$(d).jqGrid("destroyFrozenColumns"),$(d).jqGrid("remapColumns",e,!0),$(d).jqGrid("setFrozenColumns")},fa=function(a,b,c){b=parseInt(b,10),c=parseInt(c,10)+25;var
e,f,g=$(".ui-jqgrid-view").css("font-size")||"11px",h='<ul id="column_menu" class="ui-search-menu modal-content column-menu" role="menu" tabindex="0" style="font-size:'+g+";left:"+b+"px;top:"+c+'px;">',i=d.p.colModel[a],j=$.extend({sorting:!0,columns:!0,filtering:!0,seraching:!0,grouping:!0,freeze:!0},i.coloptions),k=$.jgrid.getRegional(d,"colmenu");if(j.sorting&&(h+='<li class="ui-menu-item" role="presentation"><a class="g-menu-item" tabindex="0" role="menuitem" value="sortasc"><table class="ui-common-table"><tr><td class="menu_icon"><span class="'+q+" "+r.icon_sort_asc+'"></span></td><td class="menu_text">'+k.sortasc+"</td></tr></table></a></li>",h+='<li class="ui-menu-item" role="presentation"><a class="g-menu-item" tabindex="0" role="menuitem" value="sortdesc"><table class="ui-common-table"><tr><td class="menu_icon"><span class="'+q+" "+r.icon_sort_desc+'"></span></td><td class="menu_text">'+k.sortdesc+"</td></tr></table></a></li>"),j.columns&&(h+='<li class="ui-menu-item divider" role="separator"></li>',h+='<li class="ui-menu-item" role="presentation"><a class="g-menu-item" tabindex="0" role="menuitem" value="columns"><table class="ui-common-table"><tr><td class="menu_icon"><span class="'+q+" "+r.icon_columns+'"></span></td><td class="menu_text">'+k.columns+"</td></tr></table></a></li>"),j.filtering&&(h+='<li class="ui-menu-item divider" role="separator"></li>',h+='<li class="ui-menu-item" role="presentation"><a class="g-menu-item" tabindex="0" role="menuitem" value="filtering"><table class="ui-common-table"><tr><td class="menu_icon"><span class="'+q+" "+r.icon_filter+'"></span></td><td class="menu_text">'+k.filter+" "+(i.label||i.name)+"</td></tr></table></a></li>"),j.grouping&&(e=$.inArray(i.name,d.p.groupingView.groupField),h+='<li class="ui-menu-item divider" role="separator"></li>',h+='<li class="ui-menu-item" role="presentation"><a class="g-menu-item" tabindex="0" role="menuitem" value="grouping"><table class="ui-common-table"><tr><td class="menu_icon"><span class="'+q+" "+r.icon_group+'"></span></td><td class="menu_text">'+(-1!==e?k.ungrouping:k.grouping+" "+(i.label||i.name))+"</td></tr></table></a></li>"),j.freeze&&(f=i.frozen&&d.p.frozenColumns?!1:!0,h+='<li class="ui-menu-item divider" role="separator"></li>',h+='<li class="ui-menu-item" role="presentation"><a class="g-menu-item" tabindex="0" role="menuitem" value="freeze"><table class="ui-common-table"><tr><td class="menu_icon"><span class="'+q+" "+r.icon_freeze+'"></span></td><td class="menu_text">'+(f?k.freeze+" "+(i.label||i.name):k.unfreeze)+"</td></tr></table></a></li>"),h+="</ul>",$("body").append(h),$("#column_menu").addClass("ui-menu "+r.menu_widget),"ltr"===d.p.direction){var
l=$("#column_menu").width()+26;$("#column_menu").css("left",b-l)}$("#column_menu > li > a").hover(function(){$("#col_menu").remove(),$("#search_menu").remove();var
b,c;"columns"===$(this).attr("value")&&(b=$(this).parent().width()+18,c=$(this).parent().position().top-5,aa(c,b,$(this).parent())),"filtering"===$(this).attr("value")&&(b=$(this).parent().width()+18,c=$(this).parent().position().top-5,ba(a,c,b,$(this).parent())),$(this).addClass(o)},function(){$(this).removeClass(o)}).click(function(){var
b=$(this).attr("value"),c=d.grid.headers[a].el;"sortasc"===b?W("jqgh_"+d.p.id+"_"+i.name,a,!0,"asc",c):"sortdesc"===b?W("jqgh_"+d.p.id+"_"+i.name,a,!0,"desc",c):"grouping"===b?da(a,e):"freeze"===b&&ea(a,f),(-1!==b.indexOf("sort")||"grouping"===b||"freeze"===b)&&$(this).remove()})};for(d.p.colMenu&&$("body").on("click",function(a){$(a.target).closest(".column-menu").length||$("#column_menu").remove()}),this.p.id=this.id,-1===$.inArray(d.p.multikey,y)&&(d.p.multikey=!1),d.p.keyName=!1,i=0;i<d.p.colModel.length;i++)x="string"==typeof
d.p.colModel[i].template?null!=$.jgrid.cmTemplate&&"object"==typeof
$.jgrid.cmTemplate[d.p.colModel[i].template]?$.jgrid.cmTemplate[d.p.colModel[i].template]:{}:d.p.colModel[i].template,d.p.colModel[i]=$.extend(!0,{},d.p.cmTemplate,x||{},d.p.colModel[i]),d.p.keyName===!1&&d.p.colModel[i].key===!0&&(d.p.keyName=d.p.colModel[i].name);if(d.p.sortorder=d.p.sortorder.toLowerCase(),$.jgrid.cell_width=$.jgrid.cellWidth(),d.p.grouping===!0&&(d.p.scroll=!1,d.p.rownumbers=!1,d.p.treeGrid=!1,d.p.gridview=!0),this.p.treeGrid===!0){try{$(this).jqGrid("setTreeGrid")}catch(ga){}"local"!==d.p.datatype&&(d.p.localReader={id:"_id_"})}if(this.p.subGrid)try{$(d).jqGrid("setSubGrid")}catch(ha){}this.p.multiselect&&(this.p.colNames.unshift("<input role='checkbox' id='cb_"+this.p.id+"' class='cbox' type='checkbox'/>"),this.p.colModel.unshift({name:"cb",width:$.jgrid.cell_width?d.p.multiselectWidth+d.p.cellLayout:d.p.multiselectWidth,sortable:!1,resizable:!1,hidedlg:!0,search:!1,align:"center",fixed:!0,frozen:!0})),this.p.rownumbers&&(this.p.colNames.unshift(""),this.p.colModel.unshift({name:"rn",width:d.p.rownumWidth,sortable:!1,resizable:!1,hidedlg:!0,search:!1,align:"center",fixed:!0,frozen:!0})),d.p.xmlReader=$.extend(!0,{root:"rows",row:"row",page:"rows>page",total:"rows>total",records:"rows>records",repeatitems:!0,cell:"cell",id:"[id]",userdata:"userdata",subgrid:{root:"rows",row:"row",repeatitems:!0,cell:"cell"}},d.p.xmlReader),d.p.jsonReader=$.extend(!0,{root:"rows",page:"page",total:"total",records:"records",repeatitems:!0,cell:"cell",id:"id",userdata:"userdata",subgrid:{root:"rows",repeatitems:!0,cell:"cell"}},d.p.jsonReader),d.p.localReader=$.extend(!0,{root:"rows",page:"page",total:"total",records:"records",repeatitems:!1,cell:"cell",id:"id",userdata:"userdata",subgrid:{root:"rows",repeatitems:!0,cell:"cell"}},d.p.localReader),d.p.scroll&&(d.p.pgbuttons=!1,d.p.pginput=!1,d.p.rowList=[]),d.p.data.length&&(J(),K());var
ia,ja,ka,la,ma,na,oa,pa,qa,ra="<thead><tr class='ui-jqgrid-labels' role='row'>",sa="",ta="",ua="";if(d.p.shrinkToFit===!0&&d.p.forceFit===!0)for(i=d.p.colModel.length-1;i>=0;i--)if(!d.p.colModel[i].hidden){d.p.colModel[i].resizable=!1;break}if("horizontal"===d.p.viewsortcols[1]?(ta=" ui-i-asc",ua=" ui-i-desc"):"single"===d.p.viewsortcols[1]&&(ta=" ui-single-sort-asc",ua=" ui-single-sort-desc",sa=" style='display:none'",d.p.viewsortcols[0]=!1),ia=s?"class='ui-th-div-ie'":"",pa="<span class='s-ico' style='display:none'>",pa+="<span sort='asc'  class='ui-grid-ico-sort ui-icon-asc"+ta+" ui-sort-"+h+" "+m+" "+q+" "+k(l,"icon_asc",!0)+"'"+sa+"></span>",pa+="<span sort='desc' class='ui-grid-ico-sort ui-icon-desc"+ua+" ui-sort-"+h+" "+m+" "+q+" "+k(l,"icon_desc",!0)+"'"+sa+"></span></span>",d.p.multiSort&&d.p.sortname)for(t=d.p.sortname.split(","),i=0;i<t.length;i++)v=$.trim(t[i]).split(" "),t[i]=$.trim(v[0]),u[i]=v[1]?$.trim(v[1]):d.p.sortorder||"asc";for(i=0;i<this.p.colNames.length;i++){var
va=d.p.headertitles?' title="'+$.jgrid.stripHtml(d.p.colNames[i])+'"':"";qa=d.p.colModel[i],qa.hasOwnProperty("colmenu")||(qa.colmenu="rn"===qa.name||"cb"===qa.name||"subgrid"===qa.name?!1:!0),ra+="<th id='"+d.p.id+"_"+qa.name+"' role='columnheader' "+k(l,"headerBox",!1,"ui-th-column ui-th-"+h)+" "+va+">",ja=qa.index||qa.name,ra+="<div class='ui-th-div' id='jqgh_"+d.p.id+"_"+qa.name+"' "+ia+">"+d.p.colNames[i],qa.width?qa.width=parseInt(qa.width,10):qa.width=150,"boolean"!=typeof
qa.title&&(qa.title=!0),qa.lso="",ja===d.p.sortname&&(d.p.lastsort=i),d.p.multiSort&&(v=$.inArray(ja,t),-1!==v&&(qa.lso=u[v])),ra+=pa,d.p.colMenu&&qa.colmenu&&(ra+="<a class='colmenu' href='#/'><span class='colmenuspan "+q+" "+r.icon_menu+"'></span></a>"),ra+="</div></th>"}if(ra+="</tr></thead>",pa=null,qa=null,$(this).append(ra),$("thead tr:first th",this).hover(function(){$(this).addClass(o)},function(){$(this).removeClass(o)}),this.p.multiselect){var
wa,xa=[];$("#cb_"+$.jgrid.jqID(d.p.id),this).bind("click",function(){d.p.selarrrow=[];var
a=d.p.frozenColumns===!0?d.p.id+"_frozen":"";this.checked?($(d.rows).each(function(b){b>0&&($(this).hasClass("ui-subgrid")||$(this).hasClass("jqgroup")||$(this).hasClass(m)||$(this).hasClass("jqfoot")||($("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(this.id))[d.p.useProp?"prop":"attr"]("checked",!0),$(this).addClass(n).attr("aria-selected","true"),d.p.selarrrow.push(this.id),d.p.selrow=this.id,a&&($("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(this.id),d.grid.fbDiv)[d.p.useProp?"prop":"attr"]("checked",!0),$("#"+$.jgrid.jqID(this.id),d.grid.fbDiv).addClass(n))))}),wa=!0,xa=[]):($(d.rows).each(function(b){b>0&&($(this).hasClass("ui-subgrid")||$(this).hasClass("jqgroup")||$(this).hasClass(m)||$(this).hasClass("jqfoot")||($("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(this.id))[d.p.useProp?"prop":"attr"]("checked",!1),$(this).removeClass(n).attr("aria-selected","false"),xa.push(this.id),a&&($("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(this.id),d.grid.fbDiv)[d.p.useProp?"prop":"attr"]("checked",!1),$("#"+$.jgrid.jqID(this.id),d.grid.fbDiv).removeClass(n))))}),d.p.selrow=null,wa=!1),$(d).triggerHandler("jqGridSelectAll",[wa?d.p.selarrrow:xa,wa]),$.isFunction(d.p.onSelectAll)&&d.p.onSelectAll.call(d,wa?d.p.selarrrow:xa,wa)})}if(d.p.autowidth===!0){var
ya=$(w).innerWidth();d.p.width=ya>0?ya:"nw"}X(),$(w).css("width",e.width+"px").append("<div class='ui-jqgrid-resize-mark' id='rs_m"+d.p.id+"'>&#160;</div>"),d.p.scrollPopUp&&$(w).append("<div "+k(l,"scrollBox",!1,"loading ui-scroll-popup")+" id='scroll_g"+d.p.id+"'></div>"),$(j).css("width",e.width+"px"),ra=$("thead:first",d).get(0);var
za="";d.p.footerrow&&(za+="<table role='presentation' style='width:"+d.p.tblwidth+"px' "+k(l,"footerTable",!1,"ui-jqgrid-ftable ui-common-table")+"><tbody><tr role='row' "+k(l,"footerBox",!1,"footrow footrow-"+h)+">");var
Aa=$("tr:first",ra),Ba="<tr class='jqgfirstrow' role='row'>";if(d.p.disableClick=!1,$("th",Aa).each(function(a){qa=d.p.colModel[a],ka=qa.width,void
0===qa.resizable&&(qa.resizable=!0),qa.resizable?(la=document.createElement("span"),$(la).html("&#160;").addClass("ui-jqgrid-resize ui-jqgrid-resize-"+h).css("cursor","col-resize"),$(this).addClass(d.p.resizeclass)):la="",$(this).css("width",ka+"px").prepend(la),la=null;var
b="";qa.hidden&&($(this).css("display","none"),b="display:none;"),Ba+="<td role='gridcell' style='height:0px;width:"+ka+"px;"+b+"'></td>",e.headers[a]={width:ka,el:this},sa=qa.sortable,"boolean"!=typeof
sa&&(qa.sortable=!0,sa=!0);var
c=qa.name;"cb"!==c&&"subgrid"!==c&&"rn"!==c&&d.p.viewsortcols[2]&&$(">div",this).addClass("ui-jqgrid-sortable"),sa&&(d.p.multiSort?d.p.viewsortcols[0]?($("div span.s-ico",this).show(),d.p.colModel[a].lso&&$("div span.ui-icon-"+qa.lso,this).removeClass(m).css("display","")):d.p.colModel[a].lso&&($("div span.s-ico",this).show(),$("div span.ui-icon-"+qa.lso,this).removeClass(m).css("display","")):d.p.viewsortcols[0]?($("div span.s-ico",this).show(),a===d.p.lastsort&&$("div span.ui-icon-"+d.p.sortorder,this).removeClass(m).css("display","")):a===d.p.lastsort&&""!==d.p.sortname&&($("div span.s-ico",this).show(),$("div span.ui-icon-"+d.p.sortorder,this).removeClass(m).css("display",""))),d.p.footerrow&&(za+="<td role='gridcell' "+A(a,0,"",null,"",!1)+">&#160;</td>")}).mousedown(function(a){if(1===$(a.target).closest("th>span.ui-jqgrid-resize").length){var
b=_(this);return d.p.forceFit===!0&&(d.p.nv=Y(b)),e.dragStart(b,a,Z(b)),!1}}).click(function(a){if(d.p.disableClick)return d.p.disableClick=!1,!1;var
b,c,e="th>div.ui-jqgrid-sortable";d.p.viewsortcols[2]||(e="th>div>span>span.ui-grid-ico-sort");var
f=$(a.target).closest(e);if(1===f.length){var
g;if(d.p.frozenColumns){var
h=$(this)[0].id.substring(d.p.id.length+1);$(d.p.colModel).each(function(a){return this.name===h?(g=a,!1):void
0})}else
g=_(this);if($(a.target).hasClass("colmenuspan")){null!=$("#column_menu")[0]&&$("#column_menu").remove();var
i=$.jgrid.getCellIndex(a.target);if(-1===i)return;var
j=$(this).offset(),k=j.left,l=j.top;return"ltr"===d.p.direction&&(k+=$(this).outerWidth()),fa(i,k,l,f),void
a.stopPropagation()}return d.p.viewsortcols[2]||(b=!0,c=f.attr("sort")),null!=g&&W($("div",this)[0].id,g,b,c,this),!1}}),qa=null,d.p.sortable&&$.fn.sortable)try{$(d).jqGrid("sortableColumns",Aa)}catch(Ca){}d.p.footerrow&&(za+="</tr></tbody></table>"),Ba+="</tr>",oa=document.createElement("tbody"),this.appendChild(oa),$(this).addClass(k(l,"rowTable",!0,"ui-jqgrid-btable ui-common-table")).append(Ba),Ba=null;var
Da=$("<table "+k(l,"headerTable",!1,"ui-jqgrid-htable ui-common-table")+" style='width:"+d.p.tblwidth+"px' role='presentation' aria-labelledby='gbox_"+this.id+"'></table>").append(ra),Ea=d.p.caption&&d.p.hiddengrid===!0?!0:!1,Fa=$("<div class='ui-jqgrid-hbox"+("rtl"===h?"-rtl":"")+"'></div>"),Ga="Bootstrap"===d.p.styleUI?2:0;ra=null,e.hDiv=document.createElement("div"),e.hDiv.style.width=e.width-Ga+"px",e.hDiv.className=k(l,"headerDiv",!0,"ui-jqgrid-hdiv"),$(e.hDiv).append(Fa),$(Fa).append(Da),Da=null,Ea&&$(e.hDiv).hide(),d.p.pager&&("string"==typeof
d.p.pager?"#"!==d.p.pager.substr(0,1)&&(d.p.pager="#"+d.p.pager):d.p.pager="#"+$(d.p.pager).attr("id"),$(d.p.pager).css({width:e.width+"px"}).addClass(k(l,"pagerBox",!0,"ui-jqgrid-pager")).appendTo(w),Ea&&$(d.p.pager).hide(),U(d.p.pager,"")),d.p.cellEdit===!1&&d.p.hoverrows===!0&&$(d).bind("mouseover",function(a){na=$(a.target).closest("tr.jqgrow"),"ui-subgrid"!==$(na).attr("class")&&$(na).addClass(o)}).bind("mouseout",function(a){na=$(a.target).closest("tr.jqgrow"),$(na).removeClass(o)});var
Ha,Ia,Ja;$(d).before(e.hDiv).click(function(a){if(ma=a.target,na=$(ma,d.rows).closest("tr.jqgrow"),0===$(na).length||na[0].className.indexOf(m)>-1||($(ma,d).closest("table.ui-jqgrid-btable").attr("id")||"").replace("_frozen","")!==d.id)return this;var
b=$(ma).filter(":enabled").hasClass("cbox"),c=$(d).triggerHandler("jqGridBeforeSelectRow",[na[0].id,a]);if(c=c===!1||"stop"===c?!1:!0,$.isFunction(d.p.beforeSelectRow)){var
e=d.p.beforeSelectRow.call(d,na[0].id,a);(e===!1||"stop"===e)&&(c=!1)}if("A"!==ma.tagName&&("INPUT"!==ma.tagName&&"TEXTAREA"!==ma.tagName&&"OPTION"!==ma.tagName&&"SELECT"!==ma.tagName||b))if(Ha=na[0].id,ma=$(ma).closest("tr.jqgrow>td"),ma.length>0&&(Ia=$.jgrid.getCellIndex(ma),Ja=$(ma).closest("td,th").html(),$(d).triggerHandler("jqGridCellSelect",[Ha,Ia,Ja,a]),$.isFunction(d.p.onCellSelect)&&d.p.onCellSelect.call(d,Ha,Ia,Ja,a)),d.p.cellEdit!==!0){if(c)if(d.p.multikey)a[d.p.multikey]?$(d).jqGrid("setSelection",Ha,!0,a):d.p.multiselect&&b&&(b=$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+Ha).is(":checked"),$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+Ha)[d.p.useProp?"prop":"attr"]("checked",!b));else
if(d.p.multiselect&&d.p.multiboxonly)if(b)$(d).jqGrid("setSelection",Ha,!0,a);else{var
f=d.p.frozenColumns?d.p.id+"_frozen":"";$(d.p.selarrrow).each(function(a,b){var
c=$(d).jqGrid("getGridRowById",b);c&&$(c).removeClass(n),$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(b))[d.p.useProp?"prop":"attr"]("checked",!1),f&&($("#"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(f)).removeClass(n),$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(f))[d.p.useProp?"prop":"attr"]("checked",!1))}),d.p.selarrrow=[],$(d).jqGrid("setSelection",Ha,!0,a)}else
$(d).jqGrid("setSelection",Ha,!0,a)}else
if(d.p.multiselect&&b&&c)$(d).jqGrid("setSelection",Ha,!0,a);else
if(ma.length>0)try{$(d).jqGrid("editCell",na[0].rowIndex,Ia,!0)}catch(g){}}).bind("reloadGrid",function(a,b){if(d.p.treeGrid===!0&&(d.p.datatype=d.p.treedatatype),b=b||{},b.current&&d.grid.selectionPreserver(d),"local"===d.p.datatype?($(d).jqGrid("resetSelection"),d.p.data.length&&(J(),K())):d.p.treeGrid||(d.p.selrow=null,d.p.multiselect&&(d.p.selarrrow=[],T(!1)),d.p.savedRow=[]),d.p.scroll&&I.call(d,!0,!1),b.page){var
c=b.page;c>d.p.lastpage&&(c=d.p.lastpage),1>c&&(c=1),d.p.page=c,d.grid.prevRowHeight?d.grid.bDiv.scrollTop=(c-1)*d.grid.prevRowHeight*d.p.rowNum:d.grid.bDiv.scrollTop=0}return d.grid.prevRowHeight&&d.p.scroll&&void
0===b.page?(delete
d.p.lastpage,d.grid.populateVisible()):d.grid.populate(),d.p.inlineNav===!0&&$(d).jqGrid("showAddEditButtons"),!1}).dblclick(function(a){if(ma=a.target,na=$(ma,d.rows).closest("tr.jqgrow"),0!==$(na).length){Ha=na[0].rowIndex,Ia=$.jgrid.getCellIndex(ma);var
b=$(d).triggerHandler("jqGridDblClickRow",[$(na).attr("id"),Ha,Ia,a]);return null!=b?b:$.isFunction(d.p.ondblClickRow)&&(b=d.p.ondblClickRow.call(d,$(na).attr("id"),Ha,Ia,a),null!=b)?b:void
0}}).bind("contextmenu",function(a){if(ma=a.target,na=$(ma,d.rows).closest("tr.jqgrow"),0!==$(na).length){d.p.multiselect||$(d).jqGrid("setSelection",na[0].id,!0,a),Ha=na[0].rowIndex,Ia=$.jgrid.getCellIndex(ma);var
b=$(d).triggerHandler("jqGridRightClickRow",[$(na).attr("id"),Ha,Ia,a]);return null!=b?b:$.isFunction(d.p.onRightClickRow)&&(b=d.p.onRightClickRow.call(d,$(na).attr("id"),Ha,Ia,a),null!=b)?b:void
0}}),e.bDiv=document.createElement("div"),s&&"auto"===String(d.p.height).toLowerCase()&&(d.p.height="100%"),$(e.bDiv).append($('<div style="position:relative;"></div>').append("<div></div>").append(this)).addClass("ui-jqgrid-bdiv").css({height:d.p.height+(isNaN(d.p.height)?"":"px"),width:e.width-Ga+"px"}).scroll(e.scrollGrid),$("table:first",e.bDiv).css({width:d.p.tblwidth+"px"}),$.support.tbody||2===$("tbody",this).length&&$("tbody:gt(0)",this).remove(),d.p.multikey&&($.jgrid.msie()?$(e.bDiv).bind("selectstart",function(){return!1}):$(e.bDiv).bind("mousedown",function(){return!1})),Ea&&$(e.bDiv).hide();var
Ka=q+" "+k(l,"icon_caption_open",!0),La=q+" "+k(l,"icon_caption_close",!0);e.cDiv=document.createElement("div");var
Ma=d.p.hidegrid===!0?$("<a role='link' class='ui-jqgrid-titlebar-close HeaderButton "+p+"' title='"+($.jgrid.getRegional(d,"defaults.showhide",d.p.showhide)||"")+"' />").hover(function(){Ma.addClass(o)},function(){Ma.removeClass(o)}).append("<span class='ui-jqgrid-headlink "+Ka+"'></span>").css("rtl"===h?"left":"right","0px"):"";if($(e.cDiv).append(Ma).append("<span class='ui-jqgrid-title'>"+d.p.caption+"</span>").addClass("ui-jqgrid-titlebar ui-jqgrid-caption"+("rtl"===h?"-rtl":"")+" "+k(l,"gridtitleBox",!0)),$(e.cDiv).insertBefore(e.hDiv),d.p.toolbar[0]){var
Na=k(l,"customtoolbarBox",!0,"ui-userdata");e.uDiv=document.createElement("div"),"top"===d.p.toolbar[1]?$(e.uDiv).insertBefore(e.hDiv):"bottom"===d.p.toolbar[1]&&$(e.uDiv).insertAfter(e.hDiv),"both"===d.p.toolbar[1]?(e.ubDiv=document.createElement("div"),$(e.uDiv).addClass(Na+" ui-userdata-top").attr("id","t_"+this.id).insertBefore(e.hDiv).width(e.width-Ga),$(e.ubDiv).addClass(Na+" ui-userdata-bottom").attr("id","tb_"+this.id).insertAfter(e.hDiv).width(e.width-Ga),Ea&&$(e.ubDiv).hide()):$(e.uDiv).width(e.width-Ga).addClass(Na+" ui-userdata-top").attr("id","t_"+this.id),Ea&&$(e.uDiv).hide()}if(d.p.toppager&&(d.p.toppager=$.jgrid.jqID(d.p.id)+"_toppager",e.topDiv=$("<div id='"+d.p.toppager+"'></div>")[0],d.p.toppager="#"+d.p.toppager,$(e.topDiv).addClass(k(l,"toppagerBox",!0,"ui-jqgrid-toppager")).width(e.width-Ga).insertBefore(e.hDiv),U(d.p.toppager,"_t")),d.p.footerrow&&(e.sDiv=$("<div class='ui-jqgrid-sdiv'></div>")[0],Fa=$("<div class='ui-jqgrid-hbox"+("rtl"===h?"-rtl":"")+"'></div>"),$(e.sDiv).append(Fa).width(e.width-Ga).insertAfter(e.hDiv),$(Fa).append(za),e.footers=$(".ui-jqgrid-ftable",e.sDiv)[0].rows[0].cells,d.p.rownumbers&&(e.footers[0].className=k(l,"rownumBox",!0,"jqgrid-rownum")),Ea&&$(e.sDiv).hide()),Fa=null,d.p.caption){var
Oa=d.p.datatype;d.p.hidegrid===!0&&($(".ui-jqgrid-titlebar-close",e.cDiv).click(function(a){var
b,c=$.isFunction(d.p.onHeaderClick),f=".ui-jqgrid-bdiv, .ui-jqgrid-hdiv, .ui-jqgrid-toppager, .ui-jqgrid-pager, .ui-jqgrid-sdiv",g=this;return d.p.toolbar[0]===!0&&("both"===d.p.toolbar[1]&&(f+=", #"+$(e.ubDiv).attr("id")),f+=", #"+$(e.uDiv).attr("id")),b=$(f,"#gview_"+$.jgrid.jqID(d.p.id)).length,"visible"===d.p.gridstate?$(f,"#gbox_"+$.jgrid.jqID(d.p.id)).slideUp("fast",function(){b--,0===b&&($("span",g).removeClass(Ka).addClass(La),d.p.gridstate="hidden",$("#gbox_"+$.jgrid.jqID(d.p.id)).hasClass("ui-resizable")&&$(".ui-resizable-handle","#gbox_"+$.jgrid.jqID(d.p.id)).hide(),$(d).triggerHandler("jqGridHeaderClick",[d.p.gridstate,a]),c&&(Ea||d.p.onHeaderClick.call(d,d.p.gridstate,a)))}):"hidden"===d.p.gridstate&&$(f,"#gbox_"+$.jgrid.jqID(d.p.id)).slideDown("fast",function(){b--,0===b&&($("span",g).removeClass(La).addClass(Ka),Ea&&(d.p.datatype=Oa,S(),Ea=!1),d.p.gridstate="visible",$("#gbox_"+$.jgrid.jqID(d.p.id)).hasClass("ui-resizable")&&$(".ui-resizable-handle","#gbox_"+$.jgrid.jqID(d.p.id)).show(),$(d).triggerHandler("jqGridHeaderClick",[d.p.gridstate,a]),c&&(Ea||d.p.onHeaderClick.call(d,d.p.gridstate,a)))}),!1}),Ea&&(d.p.datatype="local",$(".ui-jqgrid-titlebar-close",e.cDiv).trigger("click")))}else
$(e.cDiv).hide(),d.p.toppager||$(e.hDiv).addClass(k(d.p.styleUI+".common","cornertop",!0));if($(e.hDiv).after(e.bDiv).mousemove(function(a){return e.resizing?(e.dragMove(a),!1):void
0}),$(".ui-jqgrid-labels",e.hDiv).bind("selectstart",function(){return!1}),$(document).bind("mouseup.jqGrid"+d.p.id,function(){return e.resizing?(e.dragEnd(!0),!1):!0}),"rtl"===d.p.direction&&$(d).bind("jqGridAfterGridComplete.setRTLPadding",function(){var
a=e.bDiv.offsetWidth-e.bDiv.clientWidth;d.p.scrollOffset=a,$("div:first",e.hDiv).css({paddingLeft:a+"px"}),e.hDiv.scrollLeft=e.bDiv.scrollLeft}),d.formatCol=A,d.sortData=W,d.updatepager=P,d.refreshIndex=K,d.setHeadCheckBox=T,d.constructTr=L,d.formatter=function(a,b,c,d,e){return C(a,b,c,d,e)},$.extend(e,{populate:S,emptyRows:I,beginReq:Q,endReq:R}),this.grid=e,d.addXmlData=function(a){M(a)},d.addJSONData=function(a){N(a)},this.grid.cols=this.rows[0].cells,$(d).triggerHandler("jqGridInitGrid"),$.isFunction(d.p.onInitGrid)&&d.p.onInitGrid.call(d),S(),d.p.hiddengrid=!1,d.p.responsive){var
Pa="onorientationchange"in
window,Qa=Pa?"orientationchange":"resize";$(window).on(Qa,function(){$(d).jqGrid("resizeGrid")})}}})},$.jgrid.extend({getGridParam:function(a,b){var
c,d=this[0];if(d&&d.grid){if(void
0===b&&"string"!=typeof
b&&(b="jqGrid"),c=d.p,"jqGrid"!==b)try{c=$(d).data(b)}catch(e){c=d.p}return a?void
0!==c[a]?c[a]:null:c}},setGridParam:function(a,b){return this.each(function(){if(null==b&&(b=!1),this.grid&&"object"==typeof
a)if(b===!0){var
c=$.extend({},this.p,a);this.p=c}else
$.extend(!0,this.p,a)})},getGridRowById:function(a){var
b;return this.each(function(){try{for(var
c=this.rows.length;c--;)if(a.toString()===this.rows[c].id){b=this.rows[c];break}}catch(d){b=$(this.grid.bDiv).find("#"+$.jgrid.jqID(a))}}),b},getDataIDs:function(){var
a,b=[],c=0,d=0;return this.each(function(){if(a=this.rows.length,a&&a>0)for(;a>c;)$(this.rows[c]).hasClass("jqgrow")&&(b[d]=this.rows[c].id,d++),c++}),b},setSelection:function(a,b,c){return this.each(function(){function
d(a){var
b=$(l.grid.bDiv)[0].clientHeight,c=$(l.grid.bDiv)[0].scrollTop,d=$(l.rows[a]).position().top,e=l.rows[a].clientHeight;d+e>=b+c?$(l.grid.bDiv)[0].scrollTop=d-(b+c)+e+c:b+c>d&&c>d&&($(l.grid.bDiv)[0].scrollTop=d)}var
e,f,g,h,i,j,k,l=this,m=$.jgrid.getMethod("getStyleUI"),n=m(l.p.styleUI+".common","highlight",!0),o=m(l.p.styleUI+".common","disabled",!0);void
0!==a&&(b=b===!1?!1:!0,f=$(l).jqGrid("getGridRowById",a),!f||!f.className||f.className.indexOf(o)>-1||(l.p.scrollrows===!0&&(g=$(l).jqGrid("getGridRowById",a).rowIndex,g>=0&&d(g)),l.p.frozenColumns===!0&&(j=l.p.id+"_frozen"),l.p.multiselect?(l.setHeadCheckBox(!1),l.p.selrow=f.id,h=$.inArray(l.p.selrow,l.p.selarrrow),-1===h?("ui-subgrid"!==f.className&&$(f).addClass(n).attr("aria-selected","true"),e=!0,l.p.selarrrow.push(l.p.selrow)):("ui-subgrid"!==f.className&&$(f).removeClass(n).attr("aria-selected","false"),e=!1,l.p.selarrrow.splice(h,1),i=l.p.selarrrow[0],l.p.selrow=void
0===i?null:i),$("#jqg_"+$.jgrid.jqID(l.p.id)+"_"+$.jgrid.jqID(f.id))[l.p.useProp?"prop":"attr"]("checked",e),j&&(-1===h?$("#"+$.jgrid.jqID(a),"#"+$.jgrid.jqID(j)).addClass(n):$("#"+$.jgrid.jqID(a),"#"+$.jgrid.jqID(j)).removeClass(n),$("#jqg_"+$.jgrid.jqID(l.p.id)+"_"+$.jgrid.jqID(a),"#"+$.jgrid.jqID(j))[l.p.useProp?"prop":"attr"]("checked",e)),b&&($(l).triggerHandler("jqGridSelectRow",[f.id,e,c]),l.p.onSelectRow&&l.p.onSelectRow.call(l,f.id,e,c))):"ui-subgrid"!==f.className&&(l.p.selrow!==f.id?(k=$(l).jqGrid("getGridRowById",l.p.selrow),k&&$(k).removeClass(n).attr({"aria-selected":"false",tabindex:"-1"}),$(f).addClass(n).attr({"aria-selected":"true",tabindex:"0"}),j&&($("#"+$.jgrid.jqID(l.p.selrow),"#"+$.jgrid.jqID(j)).removeClass(n),$("#"+$.jgrid.jqID(a),"#"+$.jgrid.jqID(j)).addClass(n)),e=!0):e=!1,l.p.selrow=f.id,b&&($(l).triggerHandler("jqGridSelectRow",[f.id,e,c]),l.p.onSelectRow&&l.p.onSelectRow.call(l,f.id,e,c)))))})},resetSelection:function(a){return this.each(function(){var
b,c,d=this,e=$.jgrid.getMethod("getStyleUI"),f=e(d.p.styleUI+".common","highlight",!0),g=e(d.p.styleUI+".common","hover",!0);if(d.p.frozenColumns===!0&&(c=d.p.id+"_frozen"),void
0!==a){if(b=a===d.p.selrow?d.p.selrow:a,$("#"+$.jgrid.jqID(d.p.id)+" tbody:first tr#"+$.jgrid.jqID(b)).removeClass(f).attr("aria-selected","false"),c&&$("#"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(c)).removeClass(f),d.p.multiselect){$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(d.p.id))[d.p.useProp?"prop":"attr"]("checked",!1),c&&$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(c))[d.p.useProp?"prop":"attr"]("checked",!1),d.setHeadCheckBox(!1);var
h=$.inArray($.jgrid.jqID(b),d.p.selarrrow);-1!==h&&d.p.selarrrow.splice(h,1)}d.p.onUnSelectRow&&d.p.onUnSelectRow.call(d,b),b=null}else
d.p.multiselect?($(d.p.selarrrow).each(function(a,b){$($(d).jqGrid("getGridRowById",b)).removeClass(f).attr("aria-selected","false"),$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(b))[d.p.useProp?"prop":"attr"]("checked",!1),c&&($("#"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(c)).removeClass(f),$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(c))[d.p.useProp?"prop":"attr"]("checked",!1)),d.p.onUnSelectRow&&d.p.onUnSelectRow.call(d,b)}),d.setHeadCheckBox(!1),d.p.selarrrow=[],d.p.selrow=null):d.p.selrow&&($("#"+$.jgrid.jqID(d.p.id)+" tbody:first tr#"+$.jgrid.jqID(d.p.selrow)).removeClass(f).attr("aria-selected","false"),c&&$("#"+$.jgrid.jqID(d.p.selrow),"#"+$.jgrid.jqID(c)).removeClass(f),d.p.onUnSelectRow&&d.p.onUnSelectRow.call(d,d.p.selrow),d.p.selrow=null);d.p.cellEdit===!0&&parseInt(d.p.iCol,10)>=0&&parseInt(d.p.iRow,10)>=0&&($("td:eq("+d.p.iCol+")",d.rows[d.p.iRow]).removeClass("edit-cell "+f),$(d.rows[d.p.iRow]).removeClass("selected-row "+g)),d.p.savedRow=[]})},getRowData:function(a,b){var
c,d,e={},f=!1,g=0;return this.each(function(){var
h,i,j=this;if(null==a)f=!0,c=[],d=j.rows.length-1;else{if(i=$(j).jqGrid("getGridRowById",a),!i)return e;d=1}for(b&&b===!0&&j.p.data.length>0||(b=!1);d>g;)f&&(i=j.rows[g]),$(i).hasClass("jqgrow")&&(b?e=j.p.data[j.p._index[i.id]]:$('td[role="gridcell"]',i).each(function(a){if(h=j.p.colModel[a].name,"cb"!==h&&"subgrid"!==h&&"rn"!==h)if(j.p.treeGrid===!0&&h===j.p.ExpandColumn)e[h]=$.jgrid.htmlDecode($("span:first",this).html());else
try{e[h]=$.unformat.call(j,this,{rowId:i.id,colModel:j.p.colModel[a]},a)}catch(b){e[h]=$.jgrid.htmlDecode($(this).html())}}),f&&(c.push(e),e={})),g++}),c||e},delRowData:function(a){var
b,c,d,e=!1;return this.each(function(){var
f=this;if(b=$(f).jqGrid("getGridRowById",a),!b)return!1;if(f.p.subGrid&&(d=$(b).next(),d.hasClass("ui-subgrid")&&d.remove()),$(b).remove(),f.p.records--,f.p.reccount--,f.updatepager(!0,!1),e=!0,f.p.multiselect&&(c=$.inArray(a,f.p.selarrrow),-1!==c&&f.p.selarrrow.splice(c,1)),f.p.multiselect&&f.p.selarrrow.length>0?f.p.selrow=f.p.selarrrow[f.p.selarrrow.length-1]:f.p.selrow===a&&(f.p.selrow=null),"local"===f.p.datatype){var
g=$.jgrid.stripPref(f.p.idPrefix,a),h=f.p._index[g];void
0!==h&&(f.p.data.splice(h,1),f.refreshIndex())}if(f.p.altRows===!0&&e){var
i=f.p.altclass;$(f.rows).each(function(a){a%2===1?$(this).addClass(i):$(this).removeClass(i)})}}),e},setRowData:function(a,b,c){var
d,e,f=!0;return this.each(function(){if(!this.grid)return!1;var
g,h,i=this,j=typeof
c,k={};if(h=$(this).jqGrid("getGridRowById",a),!h)return!1;if(b)try{if($(this.p.colModel).each(function(c){d=this.name;var
f=$.jgrid.getAccessor(b,d);void
0!==f&&(k[d]=this.formatter&&"string"==typeof
this.formatter&&"date"===this.formatter?$.unformat.date.call(i,f,this):f,g=i.formatter(a,k[d],c,b,"edit"),e=this.title?{title:$.jgrid.stripHtml(g)}:{},i.p.treeGrid===!0&&d===i.p.ExpandColumn?$("td[role='gridcell']:eq("+c+") > span:first",h).html(g).attr(e):$("td[role='gridcell']:eq("+c+")",h).html(g).attr(e))}),"local"===i.p.datatype){var
l,m=$.jgrid.stripPref(i.p.idPrefix,a),n=i.p._index[m];if(i.p.treeGrid)for(l
in
i.p.treeReader)i.p.treeReader.hasOwnProperty(l)&&delete
k[i.p.treeReader[l]];void
0!==n&&(i.p.data[n]=$.extend(!0,i.p.data[n],k)),k=null}}catch(o){f=!1}f&&("string"===j?$(h).addClass(c):null!==c&&"object"===j&&$(h).css(c),$(i).triggerHandler("jqGridAfterGridComplete"))}),f},addRowData:function(a,b,c,d){-1===$.inArray(c,["first","last","before","after"])&&(c="last");var
e,f,g,h,i,j,k,l,m,n,o,p,q,r,s=!1,t="",u="",v="";return b&&($.isArray(b)?(m=!0,n=a):(b=[b],m=!1),this.each(function(){var
w=this,x=b.length;i=w.p.rownumbers===!0?1:0,g=w.p.multiselect===!0?1:0,h=w.p.subGrid===!0?1:0,m||(void
0!==a?a=String(a):(a=$.jgrid.randId(),w.p.keyName!==!1&&(n=w.p.keyName,void
0!==b[0][n]&&(a=b[0][n])))),o=w.p.altclass;var
y,z=0,A=$(w).jqGrid("getStyleUI",w.p.styleUI+".base","rowBox",!0,"jqgrow ui-row-"+w.p.direction),B={},C=$.isFunction(w.p.afterInsertRow)?!0:!1;for(i&&(t=$(w).jqGrid("getStyleUI",w.p.styleUI+".base","rownumBox",!1,"jqgrid-rownum")),g&&(u=$(w).jqGrid("getStyleUI",w.p.styleUI+".base","multiBox",!1,"cbox"));x>z;){if(p=b[z],f=[],y=A,m){try{a=p[n],void
0===a&&(a=$.jgrid.randId())}catch(D){a=$.jgrid.randId()}y+=w.p.altRows===!0&&(w.rows.length-1)%2===0?" "+o:""}for(r=a,a=w.p.idPrefix+a,i&&(v=w.formatCol(0,1,"",null,a,!0),f[f.length]='<td role="gridcell" '+t+" "+v+">0</td>"),g&&(l='<input role="checkbox" type="checkbox" id="jqg_'+w.p.id+"_"+a+'" '+u+"/>",v=w.formatCol(i,1,"",null,a,!0),f[f.length]='<td role="gridcell" '+v+">"+l+"</td>"),h&&(f[f.length]=$(w).jqGrid("addSubGridCell",g+i,1)),k=g+h+i;k<w.p.colModel.length;k++)q=w.p.colModel[k],e=q.name,B[e]=p[e],l=w.formatter(a,$.jgrid.getAccessor(p,e),k,p),v=w.formatCol(k,1,l,p,a,B),f[f.length]='<td role="gridcell" '+v+">"+l+"</td>";if(f.unshift(w.constructTr(a,!1,y,B,p)),f[f.length]="</tr>",0===w.rows.length)$("table:first",w.grid.bDiv).append(f.join(""));else
switch(c){case"last":$(w.rows[w.rows.length-1]).after(f.join("")),j=w.rows.length-1;break;case"first":$(w.rows[0]).after(f.join("")),j=1;break;case"after":j=$(w).jqGrid("getGridRowById",d),j&&($(w.rows[j.rowIndex+1]).hasClass("ui-subgrid")?$(w.rows[j.rowIndex+1]).after(f):$(j).after(f.join("")),j=j.rowIndex+1);break;case"before":j=$(w).jqGrid("getGridRowById",d),j&&($(j).before(f.join("")),j=j.rowIndex-1)}w.p.subGrid===!0&&$(w).jqGrid("addSubGrid",g+i,j),w.p.records++,w.p.reccount++,$(w).triggerHandler("jqGridAfterInsertRow",[a,p,p]),C&&w.p.afterInsertRow.call(w,a,p,p),z++,"local"===w.p.datatype&&(B[w.p.localReader.id]=r,w.p._index[r]=w.p.data.length,w.p.data.push(B),B={})}w.p.altRows!==!0||m||("last"===c?(w.rows.length-1)%2===0&&$(w.rows[w.rows.length-1]).addClass(o):$(w.rows).each(function(a){a%2===0?$(this).addClass(o):$(this).removeClass(o)})),w.updatepager(!0,!0),s=!0})),s},footerData:function(a,b,c){function
d(a){var
b;for(b
in
a)if(a.hasOwnProperty(b))return!1;return!0}var
e,f,g=!1,h={};return void
0===a&&(a="get"),"boolean"!=typeof
c&&(c=!0),a=a.toLowerCase(),this.each(function(){var
i,j=this;return j.grid&&j.p.footerrow?"set"===a&&d(b)?!1:(g=!0,void
$(this.p.colModel).each(function(d){e=this.name,"set"===a?void
0!==b[e]&&(i=c?j.formatter("",b[e],d,b,"edit"):b[e],f=this.title?{title:$.jgrid.stripHtml(i)}:{},$("tr.footrow td:eq("+d+")",j.grid.sDiv).html(i).attr(f),g=!0):"get"===a&&(h[e]=$("tr.footrow td:eq("+d+")",j.grid.sDiv).html())})):!1}),"get"===a?h:g},showHideCol:function(a,b){return this.each(function(){var
c,d=this,e=!1,f=$.jgrid.cell_width?0:d.p.cellLayout;if(d.grid){"string"==typeof
a&&(a=[a]),b="none"!==b?"":"none";var
g=""===b?!0:!1,h=d.p.groupHeader&&($.isArray(d.p.groupHeader)||$.isFunction(d.p.groupHeader));if(h&&$(d).jqGrid("destroyGroupHeader",!1),$(this.p.colModel).each(function(h){if(-1!==$.inArray(this.name,a)&&this.hidden===g){if(d.p.frozenColumns===!0&&this.frozen===!0)return!0;$("tr[role=row]",d.grid.hDiv).each(function(){$(this.cells[h]).css("display",b)}),$(d.rows).each(function(){$(this).hasClass("jqgroup")||$(this.cells[h]).css("display",b)}),d.p.footerrow&&$("tr.footrow td:eq("+h+")",d.grid.sDiv).css("display",b),c=parseInt(this.width,10),"none"===b?d.p.tblwidth-=c+f:d.p.tblwidth+=c+f,this.hidden=!g,e=!0,$(d).triggerHandler("jqGridShowHideCol",[g,this.name,h])}}),e===!0&&(d.p.shrinkToFit!==!0||isNaN(d.p.height)||(d.p.tblwidth+=parseInt(d.p.scrollOffset,10)),$(d).jqGrid("setGridWidth",d.p.shrinkToFit===!0?d.p.tblwidth:d.p.width)),h){var
i=$.extend([],d.p.groupHeader);d.p.groupHeader=null;for(var
j=0;j<i.length;j++)$(d).jqGrid("setGroupHeaders",i[j])}}})},hideCol:function(a){return this.each(function(){$(this).jqGrid("showHideCol",a,"none")})},showCol:function(a){return this.each(function(){$(this).jqGrid("showHideCol",a,"")})},remapColumns:function(a,b,c){function
d(b){var
c;c=b.length?$.makeArray(b):$.extend({},b),$.each(a,function(a){b[a]=c[this]})}function
e(b,c){$(">tr"+(c||""),b).each(function(){var
b=this,c=$.makeArray(b.cells);$.each(a,function(){var
a=c[this];a&&b.appendChild(a)})})}var
f=this.get(0);d(f.p.colModel),d(f.p.colNames),d(f.grid.headers),e($("thead:first",f.grid.hDiv),c&&":not(.ui-jqgrid-labels)"),b&&e($("#"+$.jgrid.jqID(f.p.id)+" tbody:first"),".jqgfirstrow, tr.jqgrow, tr.jqfoot"),f.p.footerrow&&e($("tbody:first",f.grid.sDiv)),f.p.remapColumns&&(f.p.remapColumns.length?d(f.p.remapColumns):f.p.remapColumns=$.makeArray(a)),f.p.lastsort=$.inArray(f.p.lastsort,a),f.p.treeGrid&&(f.p.expColInd=$.inArray(f.p.expColInd,a)),$(f).triggerHandler("jqGridRemapColumns",[a,b,c])},setGridWidth:function(a,b){return this.each(function(){if(this.grid){var
c,d,e,f,g=this,h=0,i=$.jgrid.cell_width?0:g.p.cellLayout,j=0,k=!1,l=g.p.scrollOffset,m=0,n="Bootstrap"===g.p.styleUI?2:0;if("boolean"!=typeof
b&&(b=g.p.shrinkToFit),!isNaN(a)){if(a=parseInt(a,10),g.grid.width=g.p.width=a,$("#gbox_"+$.jgrid.jqID(g.p.id)).css("width",a+"px"),$("#gview_"+$.jgrid.jqID(g.p.id)).css("width",a+"px"),$(g.grid.bDiv).css("width",a-n+"px"),$(g.grid.hDiv).css("width",a-n+"px"),g.p.pager&&$(g.p.pager).css("width",a+"px"),g.p.toppager&&$(g.p.toppager).css("width",a-n+"px"),g.p.toolbar[0]===!0&&($(g.grid.uDiv).css("width",a-n+"px"),"both"===g.p.toolbar[1]&&$(g.grid.ubDiv).css("width",a-n+"px")),g.p.footerrow&&$(g.grid.sDiv).css("width",a-n+"px"),b===!1&&g.p.forceFit===!0&&(g.p.forceFit=!1),b===!0){if($.each(g.p.colModel,function(){this.hidden===!1&&(c=this.widthOrg,h+=c+i,this.fixed?m+=c+i:j++)}),0===j)return;g.p.tblwidth=h,e=a-i*j-m,isNaN(g.p.height)||($(g.grid.bDiv)[0].clientHeight<$(g.grid.bDiv)[0].scrollHeight||1===g.rows.length)&&(k=!0,e-=l),h=0;var
o=g.grid.cols.length>0;if($.each(g.p.colModel,function(a){if(this.hidden===!1&&!this.fixed){if(c=this.widthOrg,c=Math.round(e*c/(g.p.tblwidth-i*j-m)),0>c)return;this.width=c,h+=c,g.grid.headers[a].width=c,g.grid.headers[a].el.style.width=c+"px",g.p.footerrow&&(g.grid.footers[a].style.width=c+"px"),o&&(g.grid.cols[a].style.width=c+"px"),d=a}}),!d)return;if(f=0,k?a-m-(h+i*j)!==l&&(f=a-m-(h+i*j)-l):1!==Math.abs(a-m-(h+i*j))&&(f=a-m-(h+i*j)),g.p.colModel[d].width+=f,g.p.tblwidth=h+f+i*j+m,g.p.tblwidth>a){var
p=g.p.tblwidth-parseInt(a,10);g.p.tblwidth=a,c=g.p.colModel[d].width=g.p.colModel[d].width-p}else
c=g.p.colModel[d].width;g.grid.headers[d].width=c,g.grid.headers[d].el.style.width=c+"px",o&&(g.grid.cols[d].style.width=c+"px"),g.p.footerrow&&(g.grid.footers[d].style.width=c+"px")}g.p.tblwidth&&($("table:first",g.grid.bDiv).css("width",g.p.tblwidth+"px"),$("table:first",g.grid.hDiv).css("width",g.p.tblwidth+"px"),g.grid.hDiv.scrollLeft=g.grid.bDiv.scrollLeft,g.p.footerrow&&$("table:first",g.grid.sDiv).css("width",g.p.tblwidth+"px"))}}})},setGridHeight:function(a){return this.each(function(){var
b=this;if(b.grid){var
c=$(b.grid.bDiv);c.css({height:a+(isNaN(a)?"":"px")}),b.p.frozenColumns===!0&&$("#"+$.jgrid.jqID(b.p.id)+"_frozen").parent().height(c.height()-16),b.p.height=a,b.p.scroll&&b.grid.populateVisible()}})},setCaption:function(a){return this.each(function(){var
b=$(this).jqGrid("getStyleUI",this.p.styleUI+".common","cornertop",!0);this.p.caption=a,$(".ui-jqgrid-title, .ui-jqgrid-title-rtl",this.grid.cDiv).html(a),$(this.grid.cDiv).show(),$(this.grid.hDiv).removeClass(b)})},setLabel:function(a,b,c,d){return this.each(function(){var
e=this,f=-1;if(e.grid&&null!=a&&(isNaN(a)?$(e.p.colModel).each(function(b){return this.name===a?(f=b,!1):void
0}):f=parseInt(a,10),f>=0)){var
g=$("tr.ui-jqgrid-labels th:eq("+f+")",e.grid.hDiv);if(b){var
h=$(".s-ico",g);$("[id^=jqgh_]",g).empty().html(b).append(h),e.p.colNames[f]=b}c&&("string"==typeof
c?$(g).addClass(c):$(g).css(c)),"object"==typeof
d&&$(g).attr(d)}})},setCell:function(a,b,c,d,e,f){return this.each(function(){var
g,h,i=this,j=-1;if(i.grid&&(isNaN(b)?$(i.p.colModel).each(function(a){return this.name===b?(j=a,!1):void
0}):j=parseInt(b,10),j>=0)){var
k=$(i).jqGrid("getGridRowById",a);if(k){var
l=$("td:eq("+j+")",k),m=0,n=[];if(""!==c||f===!0){if(void
0!==k.cells)for(;m<k.cells.length;)n.push(k.cells[m].innerHTML),m++;if(g=i.formatter(a,c,j,n,"edit"),h=i.p.colModel[j].title?{title:$.jgrid.stripHtml(g)}:{},i.p.treeGrid&&$(".tree-wrap",$(l)).length>0?$("span",$(l)).html(g).attr(h):$(l).html(g).attr(h),"local"===i.p.datatype){var
o,p=i.p.colModel[j];c=p.formatter&&"string"==typeof
p.formatter&&"date"===p.formatter?$.unformat.date.call(i,c,p):c,o=i.p._index[$.jgrid.stripPref(i.p.idPrefix,a)],void
0!==o&&(i.p.data[o][p.name]=c)}}"string"==typeof
d?$(l).addClass(d):d&&$(l).css(d),"object"==typeof
e&&$(l).attr(e)}}})},getCell:function(a,b){var
c=!1;return this.each(function(){var
d=this,e=-1;if(d.grid&&(isNaN(b)?$(d.p.colModel).each(function(a){return this.name===b?(e=a,!1):void
0}):e=parseInt(b,10),e>=0)){var
f=$(d).jqGrid("getGridRowById",a);if(f)try{c=$.unformat.call(d,$("td:eq("+e+")",f),{rowId:f.id,colModel:d.p.colModel[e]},e)}catch(g){c=$.jgrid.htmlDecode($("td:eq("+e+")",f).html())}}}),c},getCol:function(a,b,c){var
d,e,f,g,h=[],i=0;return b="boolean"!=typeof
b?!1:b,void
0===c&&(c=!1),this.each(function(){var
j=this,k=-1;if(j.grid&&(isNaN(a)?$(j.p.colModel).each(function(b){return this.name===a?(k=b,!1):void
0}):k=parseInt(a,10),k>=0)){var
l=j.rows.length,m=0,n=0;if(l&&l>0){for(;l>m;){if($(j.rows[m]).hasClass("jqgrow")){try{d=$.unformat.call(j,$(j.rows[m].cells[k]),{rowId:j.rows[m].id,colModel:j.p.colModel[k]},k)}catch(o){d=$.jgrid.htmlDecode(j.rows[m].cells[k].innerHTML)}c?(g=parseFloat(d),isNaN(g)||(i+=g,void
0===f&&(f=e=g),e=Math.min(e,g),f=Math.max(f,g),n++)):b?h.push({id:j.rows[m].id,value:d}):h.push(d)}m++}if(c)switch(c.toLowerCase()){case"sum":h=i;break;case"avg":h=i/n;break;case"count":h=l-1;break;case"min":h=e;break;case"max":h=f}}}}),h},clearGridData:function(a){return this.each(function(){var
b=this;if(b.grid){if("boolean"!=typeof
a&&(a=!1),b.p.deepempty)$("#"+$.jgrid.jqID(b.p.id)+" tbody:first tr:gt(0)").remove();else{var
c=$("#"+$.jgrid.jqID(b.p.id)+" tbody:first tr:first")[0];$("#"+$.jgrid.jqID(b.p.id)+" tbody:first").empty().append(c)}b.p.footerrow&&a&&$(".ui-jqgrid-ftable td",b.grid.sDiv).html("&#160;"),b.p.selrow=null,b.p.selarrrow=[],b.p.savedRow=[],b.p.records=0,b.p.page=1,b.p.lastpage=0,b.p.reccount=0,b.p.data=[],b.p._index={},b.updatepager(!0,!1)}})},getInd:function(a,b){var
c,d=!1;return this.each(function(){c=$(this).jqGrid("getGridRowById",a),c&&(d=b===!0?c:c.rowIndex)}),d},bindKeys:function(a){var
b=$.extend({onEnter:null,onSpace:null,onLeftKey:null,onRightKey:null,scrollingRows:!0},a||{});return this.each(function(){var
a=this;$("body").is("[role]")||$("body").attr("role","application"),a.p.scrollrows=b.scrollingRows,$(a).keydown(function(c){var
d,e,f,g=$(a).find("tr[tabindex=0]")[0],h=a.p.treeReader.expanded_field;if(g)if(f=a.p._index[$.jgrid.stripPref(a.p.idPrefix,g.id)],37===c.keyCode||38===c.keyCode||39===c.keyCode||40===c.keyCode){if(38===c.keyCode){if(e=g.previousSibling,d="",e)if($(e).is(":hidden")){for(;e;)if(e=e.previousSibling,!$(e).is(":hidden")&&$(e).hasClass("jqgrow")){d=e.id;break}}else
d=e.id;$(a).jqGrid("setSelection",d,!0,c),c.preventDefault()}if(40===c.keyCode){if(e=g.nextSibling,d="",e)if($(e).is(":hidden")){for(;e;)if(e=e.nextSibling,!$(e).is(":hidden")&&$(e).hasClass("jqgrow")){d=e.id;break}}else
d=e.id;$(a).jqGrid("setSelection",d,!0,c),c.preventDefault()}37===c.keyCode&&(a.p.treeGrid&&a.p.data[f][h]&&$(g).find("div.treeclick").trigger("click"),$(a).triggerHandler("jqGridKeyLeft",[a.p.selrow]),$.isFunction(b.onLeftKey)&&b.onLeftKey.call(a,a.p.selrow)),39===c.keyCode&&(a.p.treeGrid&&!a.p.data[f][h]&&$(g).find("div.treeclick").trigger("click"),$(a).triggerHandler("jqGridKeyRight",[a.p.selrow]),$.isFunction(b.onRightKey)&&b.onRightKey.call(a,a.p.selrow))}else
13===c.keyCode?($(a).triggerHandler("jqGridKeyEnter",[a.p.selrow]),$.isFunction(b.onEnter)&&b.onEnter.call(a,a.p.selrow)):32===c.keyCode&&($(a).triggerHandler("jqGridKeySpace",[a.p.selrow]),$.isFunction(b.onSpace)&&b.onSpace.call(a,a.p.selrow))})})},unbindKeys:function(){return this.each(function(){$(this).unbind("keydown")})},getLocalRow:function(a){var
b,c=!1;return this.each(function(){void
0!==a&&(b=this.p._index[$.jgrid.stripPref(this.p.idPrefix,a)],b>=0&&(c=this.p.data[b]))}),c},progressBar:function(a){return a=$.extend({htmlcontent:"",method:"hide",loadtype:"disable"},a||{}),this.each(function(){var
b,c,d="show"===a.method?!0:!1,e=$("#load_"+$.jgrid.jqID(this.p.id)),f=$(window).scrollTop();switch(""!==a.htmlcontent&&e.html(a.htmlcontent),a.loadtype){case"disable":break;case"enable":e.toggle(d);break;case"block":$("#lui_"+$.jgrid.jqID(this.p.id)).toggle(d),e.toggle(d)}e.is(":visible")&&(b=e.offsetParent(),e.css("top",""),e.offset().top<f&&(c=Math.min(10+f-b.offset().top,b.height()-e.height()),e.css("top",c+"px")))})},getColProp:function(a){var
b={},c=this[0];if(!c.grid)return!1;var
d,e=c.p.colModel;for(d=0;d<e.length;d++)if(e[d].name===a){b=e[d];break}return b},setColProp:function(a,b){return this.each(function(){if(this.grid&&b){var
c,d=this.p.colModel;for(c=0;c<d.length;c++)if(d[c].name===a){$.extend(!0,this.p.colModel[c],b);break}}})},sortGrid:function(a,b,c){return this.each(function(){var
d,e=this,f=-1,g=!1;if(e.grid){for(a||(a=e.p.sortname),d=0;d<e.p.colModel.length;d++)if(e.p.colModel[d].index===a||e.p.colModel[d].name===a){f=d,e.p.frozenColumns===!0&&e.p.colModel[d].frozen===!0&&(g=e.grid.fhDiv.find("#"+e.p.id+"_"+a));break}if(-1!==f){var
h=e.p.colModel[f].sortable;g||(g=e.grid.headers[f].el),"boolean"!=typeof
h&&(h=!0),"boolean"!=typeof
b&&(b=!1),h&&e.sortData("jqgh_"+e.p.id+"_"+a,f,b,c,g)}}})},setGridState:function(a){return this.each(function(){if(this.grid){var
b=this,c=$(this).jqGrid("getStyleUI",this.p.styleUI+".base","icon_caption_open",!0),d=$(this).jqGrid("getStyleUI",this.p.styleUI+".base","icon_caption_close",!0);"hidden"===a?($(".ui-jqgrid-bdiv, .ui-jqgrid-hdiv","#gview_"+$.jgrid.jqID(b.p.id)).slideUp("fast"),b.p.pager&&$(b.p.pager).slideUp("fast"),b.p.toppager&&$(b.p.toppager).slideUp("fast"),b.p.toolbar[0]===!0&&("both"===b.p.toolbar[1]&&$(b.grid.ubDiv).slideUp("fast"),$(b.grid.uDiv).slideUp("fast")),b.p.footerrow&&$(".ui-jqgrid-sdiv","#gbox_"+$.jgrid.jqID(b.p.id)).slideUp("fast"),$(".ui-jqgrid-headlink",b.grid.cDiv).removeClass(c).addClass(d),b.p.gridstate="hidden"):"visible"===a&&($(".ui-jqgrid-hdiv, .ui-jqgrid-bdiv","#gview_"+$.jgrid.jqID(b.p.id)).slideDown("fast"),b.p.pager&&$(b.p.pager).slideDown("fast"),b.p.toppager&&$(b.p.toppager).slideDown("fast"),b.p.toolbar[0]===!0&&("both"===b.p.toolbar[1]&&$(b.grid.ubDiv).slideDown("fast"),$(b.grid.uDiv).slideDown("fast")),b.p.footerrow&&$(".ui-jqgrid-sdiv","#gbox_"+$.jgrid.jqID(b.p.id)).slideDown("fast"),$(".ui-jqgrid-headlink",b.grid.cDiv).removeClass(d).addClass(c),b.p.gridstate="visible")}})},setFrozenColumns:function(){return this.each(function(){if(this.grid){var
a=this,b=a.p.colModel,c=0,d=b.length,e=-1,f=!1,g=$(a).jqGrid("getStyleUI",a.p.styleUI+".base","headerDiv",!0,"ui-jqgrid-hdiv"),h=$(a).jqGrid("getStyleUI",a.p.styleUI+".common","hover",!0);if(a.p.subGrid!==!0&&a.p.treeGrid!==!0&&a.p.cellEdit!==!0&&!a.p.sortable&&!a.p.scroll){for(a.p.rownumbers&&c++,a.p.multiselect&&c++;d>c&&b[c].frozen===!0;)f=!0,e=c,c++;if(e>=0&&f){var
i=a.p.caption?$(a.grid.cDiv).outerHeight():0,j=$(".ui-jqgrid-htable","#gview_"+$.jgrid.jqID(a.p.id)).height();a.p.toppager&&(i+=$(a.grid.topDiv).outerHeight()),a.p.toolbar[0]===!0&&"bottom"!==a.p.toolbar[1]&&(i+=$(a.grid.uDiv).outerHeight()),a.grid.fhDiv=$('<div style="position:absolute;'+("rtl"===a.p.direction?"right:0;":"left:0;")+"top:"+i+"px;height:"+j+'px;" class="frozen-div '+g+'"></div>'),a.grid.fbDiv=$('<div style="position:absolute;'+("rtl"===a.p.direction?"right:0;":"left:0;")+"top:"+(parseInt(i,10)+parseInt(j,10)+1)+'px;overflow-y:hidden" class="frozen-bdiv ui-jqgrid-bdiv"></div>'),$("#gview_"+$.jgrid.jqID(a.p.id)).append(a.grid.fhDiv);var
k=$(".ui-jqgrid-htable","#gview_"+$.jgrid.jqID(a.p.id)).clone(!0);if(a.p.groupHeader){$("tr.jqg-first-row-header, tr.jqg-third-row-header",k).each(function(){$("th:gt("+e+")",this).remove()});var
l,m,n=-1,o=-1;$("tr.jqg-second-row-header th",k).each(function(){return l=parseInt($(this).attr("colspan"),10),m=parseInt($(this).attr("rowspan"),10),m&&(n++,o++),l&&(n+=l,o++),n===e?(o=e,!1):void
0}),n!==e&&(o=e),$("tr.jqg-second-row-header",k).each(function(){$("th:gt("+o+")",this).remove()})}else
$("tr",k).each(function(){$("th:gt("+e+")",this).remove()});if($(k).width(1),$.jgrid.msie()||$(k).css("height","100%"),$(a.grid.fhDiv).append(k).mousemove(function(b){return a.grid.resizing?(a.grid.dragMove(b),!1):void
0}),a.p.footerrow){var
p=$(".ui-jqgrid-bdiv","#gview_"+$.jgrid.jqID(a.p.id)).height();a.grid.fsDiv=$('<div style="position:absolute;left:0px;top:'+(parseInt(i,10)+parseInt(j,10)+parseInt(p,10)+1)+'px;" class="frozen-sdiv ui-jqgrid-sdiv"></div>'),$("#gview_"+$.jgrid.jqID(a.p.id)).append(a.grid.fsDiv);var
q=$(".ui-jqgrid-ftable","#gview_"+$.jgrid.jqID(a.p.id)).clone(!0);$("tr",q).each(function(){$("td:gt("+e+")",this).remove()}),$(q).width(1),$(a.grid.fsDiv).append(q)}$(a).bind("jqGridResizeStop.setFrozenColumns",function(b,c,d){var
e=$(".ui-jqgrid-htable",a.grid.fhDiv);$("th:eq("+d+")",e).width(c);var
f=$(".ui-jqgrid-btable",a.grid.fbDiv);if($("tr:first td:eq("+d+")",f).width(c),a.p.footerrow){var
g=$(".ui-jqgrid-ftable",a.grid.fsDiv);$("tr:first td:eq("+d+")",g).width(c)}}),$("#gview_"+$.jgrid.jqID(a.p.id)).append(a.grid.fbDiv),$(a.grid.fbDiv).bind("mousewheel DOMMouseScroll",function(b){var
c=$(a.grid.bDiv).scrollTop();b.originalEvent.wheelDelta>0||b.originalEvent.detail<0?$(a.grid.bDiv).scrollTop(c-25):$(a.grid.bDiv).scrollTop(c+25),b.preventDefault()}),a.p.hoverrows===!0&&$("#"+$.jgrid.jqID(a.p.id)).unbind("mouseover").unbind("mouseout"),$(a).bind("jqGridAfterGridComplete.setFrozenColumns",function(){$("#"+$.jgrid.jqID(a.p.id)+"_frozen").remove(),$(a.grid.fbDiv).height($(a.grid.bDiv).height()-14);var
b=[];$("#"+$.jgrid.jqID(a.p.id)+" tr[role=row].jqgrow").each(function(){b.push($("td:visible:first",this).height())});var
c=$("#"+$.jgrid.jqID(a.p.id)).clone(!0);$("tr[role=row]",c).each(function(){$("td[role=gridcell]:gt("+e+")",this).remove()}),$(c).width(1).attr("id",a.p.id+"_frozen"),$(a.grid.fbDiv).append(c),$("tr[role=row].jqgrow",c).each(function(a,c){$("td:not(.jqgrid-rownum):visible:first",this).height(b[a])}),a.p.hoverrows===!0&&($("tr.jqgrow",c).hover(function(){$(this).addClass(h),$("#"+$.jgrid.jqID(this.id),"#"+$.jgrid.jqID(a.p.id)).addClass(h)},function(){$(this).removeClass(h),$("#"+$.jgrid.jqID(this.id),"#"+$.jgrid.jqID(a.p.id)).removeClass(h)}),$("tr.jqgrow","#"+$.jgrid.jqID(a.p.id)).hover(function(){$(this).addClass(h),$("#"+$.jgrid.jqID(this.id),"#"+$.jgrid.jqID(a.p.id)+"_frozen").addClass(h)},function(){$(this).removeClass(h),$("#"+$.jgrid.jqID(this.id),"#"+$.jgrid.jqID(a.p.id)+"_frozen").removeClass(h)})),c=null}),a.grid.hDiv.loading||$(a).triggerHandler("jqGridAfterGridComplete"),a.p.frozenColumns=!0}}}})},destroyFrozenColumns:function(){return this.each(function(){if(this.grid&&this.p.frozenColumns===!0){var
a=this,b=$(a).jqGrid("getStyleUI",a.p.styleUI+".common","hover",!0);if($(a.grid.fhDiv).remove(),$(a.grid.fbDiv).remove(),a.grid.fhDiv=null,a.grid.fbDiv=null,a.p.footerrow&&($(a.grid.fsDiv).remove(),a.grid.fsDiv=null),$(this).unbind(".setFrozenColumns"),a.p.hoverrows===!0){var
c;$("#"+$.jgrid.jqID(a.p.id)).bind("mouseover",function(a){c=$(a.target).closest("tr.jqgrow"),"ui-subgrid"!==$(c).attr("class")&&$(c).addClass(b)}).bind("mouseout",function(a){c=$(a.target).closest("tr.jqgrow"),$(c).removeClass(b)})}this.p.frozenColumns=!1}})},resizeColumn:function(a,b){return this.each(function(){var
c,d,e,f=this.grid,g=this.p,h=g.colModel,i=h.length;if("string"==typeof
a){for(c=0;i>c;c++)if(h[c].name===a){a=c;break}}else
a=parseInt(a,10);if(b=parseInt(b,10),!("number"!=typeof
a||0>a||a>h.length-1||"number"!=typeof
b||b<g.minColWidth)){if(g.forceFit)for(g.nv=0,c=a+1;i>c;c++)if(h[c].hidden!==!0){g.nv=c-a;break}if(f.resizing={idx:a},d=b-f.headers[a].width,g.forceFit){if(e=f.headers[a+g.nv].width-d,e<g.minColWidth)return;f.headers[a+g.nv].newWidth=f.headers[a+g.nv].width-d}f.newWidth=g.tblwidth+d,f.headers[a].newWidth=b,f.dragEnd(!1)}})},getStyleUI:function(a,b,c,d){var
e="",f="";try{var
g=a.split(".");switch(c||(e="class=",f='"'),null==d&&(d=""),g.length){case
1:e+=f+$.trim(d+" "+$.jgrid.styleUI[g[0]][b]+f);break;case
2:e+=f+$.trim(d+" "+$.jgrid.styleUI[g[0]][g[1]][b]+f)}}catch(h){e=""}return e},resizeGrid:function(a){return this.each(function(){var
b=this;void
0===a&&(a=500),setTimeout(function(){try{var
a=$(window).width(),c=$("#gbox_"+$.jgrid.jqID(b.p.id)).parent().width(),d=b.p.width;d=a-c>3?c:a,$("#"+$.jgrid.jqID(b.p.id)).jqGrid("setGridWidth",d)}catch(e){}},a)})}})});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery","./grid.base"],a):a(jQuery)}(function(a){"use strict";a.fmatter={},a.extend(a.fmatter,{isBoolean:function(a){return"boolean"==typeof
a},isObject:function(b){return b&&("object"==typeof
b||a.isFunction(b))||!1},isString:function(a){return"string"==typeof
a},isNumber:function(a){return"number"==typeof
a&&isFinite(a)},isValue:function(a){return this.isObject(a)||this.isString(a)||this.isNumber(a)||this.isBoolean(a)},isEmpty:function(b){return!this.isString(b)&&this.isValue(b)?!1:this.isValue(b)?(b=a.trim(b).replace(/\&nbsp\;/gi,"").replace(/\&#160\;/gi,""),""===b):!0}}),a.fn.fmatter=function(b,c,d,e,f){var
g=c;d=a.extend({},a.jgrid.getRegional(this,"formatter"),d);try{g=a.fn.fmatter[b].call(this,c,d,e,f)}catch(h){}return g},a.fmatter.util={NumberFormat:function(b,c){if(a.fmatter.isNumber(b)||(b*=1),a.fmatter.isNumber(b)){var
d,e=0>b,f=String(b),g=c.decimalSeparator||".";if(a.fmatter.isNumber(c.decimalPlaces)){var
h=c.decimalPlaces,i=Math.pow(10,h);if(f=String(Math.round(b*i)/i),d=f.lastIndexOf("."),h>0)for(0>d?(f+=g,d=f.length-1):"."!==g&&(f=f.replace(".",g));f.length-1-d<h;)f+="0"}if(c.thousandsSeparator){var
j=c.thousandsSeparator;d=f.lastIndexOf(g),d=d>-1?d:f.length;var
k,l=f.substring(d),m=-1;for(k=d;k>0;k--)m++,m%3===0&&k!==d&&(!e||k>1)&&(l=j+l),l=f.charAt(k-1)+l;f=l}return f=c.prefix?c.prefix+f:f,f=c.suffix?f+c.suffix:f}return b}},a.fn.fmatter.defaultFormat=function(b,c){return a.fmatter.isValue(b)&&""!==b?b:c.defaultValue||"&#160;"},a.fn.fmatter.email=function(b,c){return a.fmatter.isEmpty(b)?a.fn.fmatter.defaultFormat(b,c):'<a href="mailto:'+b+'">'+b+"</a>"},a.fn.fmatter.checkbox=function(b,c){var
d,e=a.extend({},c.checkbox);void
0!==c.colModel&&void
0!==c.colModel.formatoptions&&(e=a.extend({},e,c.colModel.formatoptions)),d=e.disabled===!0?'disabled="disabled"':"",(a.fmatter.isEmpty(b)||void
0===b)&&(b=a.fn.fmatter.defaultFormat(b,e)),b=String(b),b=(b+"").toLowerCase();var
f=b.search(/(false|f|0|no|n|off|undefined)/i)<0?" checked='checked' ":"";return'<input type="checkbox" '+f+' value="'+b+'" offval="no" '+d+"/>"},a.fn.fmatter.link=function(b,c){var
d={target:c.target},e="";return void
0!==c.colModel&&void
0!==c.colModel.formatoptions&&(d=a.extend({},d,c.colModel.formatoptions)),d.target&&(e="target="+d.target),a.fmatter.isEmpty(b)?a.fn.fmatter.defaultFormat(b,c):"<a "+e+' href="'+b+'">'+b+"</a>"},a.fn.fmatter.showlink=function(b,c){var
d,e={baseLinkUrl:c.baseLinkUrl,showAction:c.showAction,addParam:c.addParam||"",target:c.target,idName:c.idName},f="";return void
0!==c.colModel&&void
0!==c.colModel.formatoptions&&(e=a.extend({},e,c.colModel.formatoptions)),e.target&&(f="target="+e.target),d=e.baseLinkUrl+e.showAction+"?"+e.idName+"="+c.rowId+e.addParam,a.fmatter.isString(b)||a.fmatter.isNumber(b)?"<a "+f+' href="'+d+'">'+b+"</a>":a.fn.fmatter.defaultFormat(b,c)},a.fn.fmatter.integer=function(b,c){var
d=a.extend({},c.integer);return void
0!==c.colModel&&void
0!==c.colModel.formatoptions&&(d=a.extend({},d,c.colModel.formatoptions)),a.fmatter.isEmpty(b)?d.defaultValue:a.fmatter.util.NumberFormat(b,d)},a.fn.fmatter.number=function(b,c){var
d=a.extend({},c.number);return void
0!==c.colModel&&void
0!==c.colModel.formatoptions&&(d=a.extend({},d,c.colModel.formatoptions)),a.fmatter.isEmpty(b)?d.defaultValue:a.fmatter.util.NumberFormat(b,d)},a.fn.fmatter.currency=function(b,c){var
d=a.extend({},c.currency);return void
0!==c.colModel&&void
0!==c.colModel.formatoptions&&(d=a.extend({},d,c.colModel.formatoptions)),a.fmatter.isEmpty(b)?d.defaultValue:a.fmatter.util.NumberFormat(b,d)},a.fn.fmatter.date=function(b,c,d,e){var
f=a.extend({},c.date);return void
0!==c.colModel&&void
0!==c.colModel.formatoptions&&(f=a.extend({},f,c.colModel.formatoptions)),f.reformatAfterEdit||"edit"!==e?a.fmatter.isEmpty(b)?a.fn.fmatter.defaultFormat(b,c):a.jgrid.parseDate.call(this,f.srcformat,b,f.newformat,f):a.fn.fmatter.defaultFormat(b,c)},a.fn.fmatter.select=function(b,c){b=String(b);var
d,e,f=!1,g=[];if(void
0!==c.colModel.formatoptions?(f=c.colModel.formatoptions.value,d=void
0===c.colModel.formatoptions.separator?":":c.colModel.formatoptions.separator,e=void
0===c.colModel.formatoptions.delimiter?";":c.colModel.formatoptions.delimiter):void
0!==c.colModel.editoptions&&(f=c.colModel.editoptions.value,d=void
0===c.colModel.editoptions.separator?":":c.colModel.editoptions.separator,e=void
0===c.colModel.editoptions.delimiter?";":c.colModel.editoptions.delimiter),f){var
h,i=(null!=c.colModel.editoptions&&c.colModel.editoptions.multiple===!0)==!0?!0:!1,j=[];if(i&&(j=b.split(","),j=a.map(j,function(b){return a.trim(b)})),a.fmatter.isString(f)){var
k,l=f.split(e),m=0;for(k=0;k<l.length;k++)if(h=l[k].split(d),h.length>2&&(h[1]=a.map(h,function(a,b){return b>0?a:void
0}).join(d)),i)a.inArray(h[0],j)>-1&&(g[m]=h[1],m++);else
if(a.trim(h[0])===a.trim(b)){g[0]=h[1];break}}else
a.fmatter.isObject(f)&&(i?g=a.map(j,function(a){return f[a]}):g[0]=f[b]||"")}return b=g.join(", "),""===b?a.fn.fmatter.defaultFormat(b,c):b},a.fn.fmatter.rowactions=function(b){var
c=a(this).closest("tr.jqgrow"),d=c.attr("id"),e=a(this).closest("table.ui-jqgrid-btable").attr("id").replace(/_frozen([^_]*)$/,"$1"),f=a("#"+e),g=f[0],h=g.p,i=h.colModel[a.jgrid.getCellIndex(this)],j=i.frozen?a("tr#"+d+" td:eq("+a.jgrid.getCellIndex(this)+") > div",f):a(this).parent(),k={extraparam:{}},l=function(b,c){a.isFunction(k.afterSave)&&k.afterSave.call(g,b,c),j.find("div.ui-inline-edit,div.ui-inline-del").show(),j.find("div.ui-inline-save,div.ui-inline-cancel").hide()},m=function(b){a.isFunction(k.afterRestore)&&k.afterRestore.call(g,b),j.find("div.ui-inline-edit,div.ui-inline-del").show(),j.find("div.ui-inline-save,div.ui-inline-cancel").hide()};void
0!==i.formatoptions&&(k=a.extend(k,i.formatoptions)),void
0!==h.editOptions&&(k.editOptions=h.editOptions),void
0!==h.delOptions&&(k.delOptions=h.delOptions),c.hasClass("jqgrid-new-row")&&(k.extraparam[h.prmNames.oper]=h.prmNames.addoper);var
n={keys:k.keys,oneditfunc:k.onEdit,successfunc:k.onSuccess,url:k.url,extraparam:k.extraparam,aftersavefunc:l,errorfunc:k.onError,afterrestorefunc:m,restoreAfterError:k.restoreAfterError,mtype:k.mtype};switch(b){case"edit":f.jqGrid("editRow",d,n),j.find("div.ui-inline-edit,div.ui-inline-del").hide(),j.find("div.ui-inline-save,div.ui-inline-cancel").show(),f.triggerHandler("jqGridAfterGridComplete");break;case"save":f.jqGrid("saveRow",d,n)&&(j.find("div.ui-inline-edit,div.ui-inline-del").show(),j.find("div.ui-inline-save,div.ui-inline-cancel").hide(),f.triggerHandler("jqGridAfterGridComplete"));break;case"cancel":f.jqGrid("restoreRow",d,m),j.find("div.ui-inline-edit,div.ui-inline-del").show(),j.find("div.ui-inline-save,div.ui-inline-cancel").hide(),f.triggerHandler("jqGridAfterGridComplete");break;case"del":f.jqGrid("delGridRow",d,k.delOptions);break;case"formedit":f.jqGrid("setSelection",d),f.jqGrid("editGridRow",d,k.editOptions)}},a.fn.fmatter.actions=function(b,c){var
d,e={keys:!1,editbutton:!0,delbutton:!0,editformbutton:!1},f=c.rowId,g="",h=a.jgrid.getRegional(this,"nav"),i=a.jgrid.styleUI[c.styleUI||"jQueryUI"].fmatter,j=a.jgrid.styleUI[c.styleUI||"jQueryUI"].common;if(void
0!==c.colModel.formatoptions&&(e=a.extend(e,c.colModel.formatoptions)),void
0===f||a.fmatter.isEmpty(f))return"";var
k="onmouseover=jQuery(this).addClass('"+j.hover+"'); onmouseout=jQuery(this).removeClass('"+j.hover+"');  ";return e.editformbutton?(d="id='jEditButton_"+f+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'formedit'); "+k,g+="<div title='"+h.edittitle+"' style='float:left;cursor:pointer;' class='ui-pg-div ui-inline-edit' "+d+"><span class='"+j.icon_base+" "+i.icon_edit+"'></span></div>"):e.editbutton&&(d="id='jEditButton_"+f+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'edit'); "+k,g+="<div title='"+h.edittitle+"' style='float:left;cursor:pointer;' class='ui-pg-div ui-inline-edit' "+d+"><span class='"+j.icon_base+" "+i.icon_edit+"'></span></div>"),e.delbutton&&(d="id='jDeleteButton_"+f+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'del'); "+k,g+="<div title='"+h.deltitle+"' style='float:left;' class='ui-pg-div ui-inline-del' "+d+"><span class='"+j.icon_base+" "+i.icon_del+"'></span></div>"),d="id='jSaveButton_"+f+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'save'); "+k,g+="<div title='"+h.savetitle+"' style='float:left;display:none' class='ui-pg-div ui-inline-save' "+d+"><span class='"+j.icon_base+" "+i.icon_save+"'></span></div>",d="id='jCancelButton_"+f+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'cancel'); "+k,g+="<div title='"+h.canceltitle+"' style='float:left;display:none;' class='ui-pg-div ui-inline-cancel' "+d+"><span class='"+j.icon_base+" "+i.icon_cancel+"'></span></div>","<div style='margin-left:8px;'>"+g+"</div>"},a.unformat=function(b,c,d,e){var
f,g,h=c.colModel.formatter,i=c.colModel.formatoptions||{},j=/([\.\*\_\'\(\)\{\}\+\?\\])/g,k=c.colModel.unformat||a.fn.fmatter[h]&&a.fn.fmatter[h].unformat;if(void
0!==k&&a.isFunction(k))f=k.call(this,a(b).text(),c,b);else
if(void
0!==h&&a.fmatter.isString(h)){var
l,m=a.jgrid.getRegional(this,"formatter")||{};switch(h){case"integer":i=a.extend({},m.integer,i),g=i.thousandsSeparator.replace(j,"\\$1"),l=new
RegExp(g,"g"),f=a(b).text().replace(l,"");break;case"number":i=a.extend({},m.number,i),g=i.thousandsSeparator.replace(j,"\\$1"),l=new
RegExp(g,"g"),f=a(b).text().replace(l,"").replace(i.decimalSeparator,".");break;case"currency":i=a.extend({},m.currency,i),g=i.thousandsSeparator.replace(j,"\\$1"),l=new
RegExp(g,"g"),f=a(b).text(),i.prefix&&i.prefix.length&&(f=f.substr(i.prefix.length)),i.suffix&&i.suffix.length&&(f=f.substr(0,f.length-i.suffix.length)),f=f.replace(l,"").replace(i.decimalSeparator,".");break;case"checkbox":var
n=c.colModel.editoptions?c.colModel.editoptions.value.split(":"):["Yes","No"];f=a("input",b).is(":checked")?n[0]:n[1];break;case"select":f=a.unformat.select(b,c,d,e);break;case"actions":return"";default:f=a(b).text()}}return void
0!==f?f:e===!0?a(b).text():a.jgrid.htmlDecode(a(b).html())},a.unformat.select=function(b,c,d,e){var
f=[],g=a(b).text();if(e===!0)return g;var
h=a.extend({},void
0!==c.colModel.formatoptions?c.colModel.formatoptions:c.colModel.editoptions),i=void
0===h.separator?":":h.separator,j=void
0===h.delimiter?";":h.delimiter;if(h.value){var
k,l=h.value,m=h.multiple===!0?!0:!1,n=[];if(m&&(n=g.split(","),n=a.map(n,function(b){return a.trim(b)})),a.fmatter.isString(l)){var
o,p=l.split(j),q=0;for(o=0;o<p.length;o++)if(k=p[o].split(i),k.length>2&&(k[1]=a.map(k,function(a,b){return b>0?a:void
0}).join(i)),m)a.inArray(a.trim(k[1]),n)>-1&&(f[q]=k[0],q++);else
if(a.trim(k[1])===a.trim(g)){f[0]=k[0];break}}else(a.fmatter.isObject(l)||a.isArray(l))&&(m||(n[0]=g),f=a.map(n,function(b){var
c;return a.each(l,function(a,d){return d===b?(c=a,!1):void
0}),void
0!==c?c:void
0}));return f.join(", ")}return g||""},a.unformat.date=function(b,c){var
d=a.jgrid.getRegional(this,"formatter.date")||{};return void
0!==c.formatoptions&&(d=a.extend({},d,c.formatoptions)),a.fmatter.isEmpty(b)?a.fn.fmatter.defaultFormat(b,c):a.jgrid.parseDate.call(this,d.newformat,b,d.srcformat,d)}});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery","./grid.base","./jqModal","./jqDnR"],a):a(jQuery)}(function(a){"use strict";a.extend(a.jgrid,{showModal:function(a){a.w.show()},closeModal:function(a){a.w.hide().attr("aria-hidden","true"),a.o&&a.o.remove()},hideModal:function(b,c){c=a.extend({jqm:!0,gb:"",removemodal:!1,formprop:!1,form:""},c||{});var
d=c.gb&&"string"==typeof
c.gb&&"#gbox_"===c.gb.substr(0,6)?a("#"+c.gb.substr(6))[0]:!1;if(c.onClose){var
e=d?c.onClose.call(d,b):c.onClose(b);if("boolean"==typeof
e&&!e)return}if(c.formprop&&d&&c.form){var
f=a(b)[0].style.height,g=a(b)[0].style.width;f.indexOf("px")>-1&&(f=parseFloat(f)),g.indexOf("px")>-1&&(g=parseFloat(g));var
h,i;"edit"===c.form?(h="#"+a.jgrid.jqID("FrmGrid_"+c.gb.substr(6)),i="formProp"):"view"===c.form&&(h="#"+a.jgrid.jqID("ViewGrid_"+c.gb.substr(6)),i="viewProp"),a(d).data(i,{top:parseFloat(a(b).css("top")),left:parseFloat(a(b).css("left")),width:g,height:f,dataheight:a(h).height(),datawidth:a(h).width()})}if(a.fn.jqm&&c.jqm===!0)a(b).attr("aria-hidden","true").jqmHide();else{if(""!==c.gb)try{a(".jqgrid-overlay:first",c.gb).hide()}catch(j){}a(b).hide().attr("aria-hidden","true")}c.removemodal&&a(b).remove()},findPos:function(a){var
b=0,c=0;if(a.offsetParent)do
b+=a.offsetLeft,c+=a.offsetTop;while(a=a.offsetParent);return[b,c]},createModal:function(b,c,d,e,f,g,h){d=a.extend(!0,{},a.jgrid.jqModal||{},d);var
i=this,j="rtl"===a(d.gbox).attr("dir")?!0:!1,k=a.jgrid.styleUI[d.styleUI||"jQueryUI"].modal,l=a.jgrid.styleUI[d.styleUI||"jQueryUI"].common,m=document.createElement("div");h=a.extend({},h||{}),m.className="ui-jqdialog "+k.modal,m.id=b.themodal;var
n=document.createElement("div");n.className="ui-jqdialog-titlebar "+k.header,n.id=b.modalhead,a(n).append("<span class='ui-jqdialog-title'>"+d.caption+"</span>");var
o=a("<a class='ui-jqdialog-titlebar-close "+l.cornerall+"'></a>").hover(function(){o.addClass(l.hover)},function(){o.removeClass(l.hover)}).append("<span class='"+l.icon_base+" "+k.icon_close+"'></span>");a(n).append(o),j?(m.dir="rtl",a(".ui-jqdialog-title",n).css("float","right"),a(".ui-jqdialog-titlebar-close",n).css("left","0.3em")):(m.dir="ltr",a(".ui-jqdialog-title",n).css("float","left"),a(".ui-jqdialog-titlebar-close",n).css("right","0.3em"));var
p=document.createElement("div");a(p).addClass("ui-jqdialog-content "+k.content).attr("id",b.modalcontent),a(p).append(c),m.appendChild(p),a(m).prepend(n),g===!0?a("body").append(m):"string"==typeof
g?a(g).append(m):a(m).insertBefore(e),a(m).css(h),void
0===d.jqModal&&(d.jqModal=!0);var
q={};if(a.fn.jqm&&d.jqModal===!0){if(0===d.left&&0===d.top&&d.overlay){var
r=[];r=a.jgrid.findPos(f),d.left=r[0]+4,d.top=r[1]+4}q.top=d.top+"px",q.left=d.left}else(0!==d.left||0!==d.top)&&(q.left=d.left,q.top=d.top+"px");if(a("a.ui-jqdialog-titlebar-close",n).click(function(){var
c=a("#"+a.jgrid.jqID(b.themodal)).data("onClose")||d.onClose,e=a("#"+a.jgrid.jqID(b.themodal)).data("gbox")||d.gbox;return i.hideModal("#"+a.jgrid.jqID(b.themodal),{gb:e,jqm:d.jqModal,onClose:c,removemodal:d.removemodal||!1,formprop:!d.recreateForm||!1,form:d.form||""}),!1}),0!==d.width&&d.width||(d.width=300),0!==d.height&&d.height||(d.height=200),!d.zIndex){var
s=a(e).parents("*[role=dialog]").filter(":first").css("z-index");s?d.zIndex=parseInt(s,10)+2:d.zIndex=950}var
t=0;if(j&&q.left&&!g&&(t=a(d.gbox).width()-(isNaN(d.width)?0:parseInt(d.width,10))-8,q.left=parseInt(q.left,10)+parseInt(t,10)),q.left&&(q.left+="px"),a(m).css(a.extend({width:isNaN(d.width)?"auto":d.width+"px",height:isNaN(d.height)?"auto":d.height+"px",zIndex:d.zIndex,overflow:"hidden"},q)).attr({tabIndex:"-1",role:"dialog","aria-labelledby":b.modalhead,"aria-hidden":"true"}),void
0===d.drag&&(d.drag=!0),void
0===d.resize&&(d.resize=!0),d.drag)if(a(n).css("cursor","move"),a.fn.tinyDraggable)a(m).tinyDraggable({handle:"#"+a.jgrid.jqID(n.id)});else
try{a(m).draggable({handle:a("#"+a.jgrid.jqID(n.id))})}catch(u){}if(d.resize)if(a.fn.jqResize)a(m).append("<div class='jqResize "+k.resizable+" "+l.icon_base+" "+k.icon_resizable+"'></div>"),a("#"+a.jgrid.jqID(b.themodal)).jqResize(".jqResize",b.scrollelm?"#"+a.jgrid.jqID(b.scrollelm):!1);else
try{a(m).resizable({handles:"se, sw",alsoResize:b.scrollelm?"#"+a.jgrid.jqID(b.scrollelm):!1})}catch(v){}d.closeOnEscape===!0&&a(m).keydown(function(c){if(27===c.which){var
e=a("#"+a.jgrid.jqID(b.themodal)).data("onClose")||d.onClose;i.hideModal("#"+a.jgrid.jqID(b.themodal),{gb:d.gbox,jqm:d.jqModal,onClose:e,removemodal:d.removemodal||!1,formprop:!d.recreateForm||!1,form:d.form||""})}})},viewModal:function(b,c){if(c=a.extend({toTop:!0,overlay:10,modal:!1,overlayClass:"ui-widget-overlay",onShow:a.jgrid.showModal,onHide:a.jgrid.closeModal,gbox:"",jqm:!0,jqM:!0},c||{}),void
0===c.focusField&&(c.focusField=0),"number"==typeof
c.focusField&&c.focusField>=0?c.focusField=parseInt(c.focusField,10):"boolean"!=typeof
c.focusField||c.focusField?c.focusField=0:c.focusField=!1,a.fn.jqm&&c.jqm===!0)c.jqM?a(b).attr("aria-hidden","false").jqm(c).jqmShow():a(b).attr("aria-hidden","false").jqmShow();else
if(""!==c.gbox&&(a(".jqgrid-overlay:first",c.gbox).show(),a(b).data("gbox",c.gbox)),a(b).show().attr("aria-hidden","false"),c.focusField>=0)try{a(":input:visible",b)[parseInt(c.focusField,10)].focus()}catch(d){}},info_dialog:function(b,c,d,e){var
f={width:290,height:"auto",dataheight:"auto",drag:!0,resize:!1,left:250,top:170,zIndex:1e3,jqModal:!0,modal:!1,closeOnEscape:!0,align:"center",buttonalign:"center",buttons:[]};a.extend(!0,f,a.jgrid.jqModal||{},{caption:"<b>"+b+"</b>"},e||{});var
g=f.jqModal,h=this,i=a.jgrid.styleUI[f.styleUI||"jQueryUI"].modal,j=a.jgrid.styleUI[f.styleUI||"jQueryUI"].common;a.fn.jqm&&!g&&(g=!1);var
k,l="";if(f.buttons.length>0)for(k=0;k<f.buttons.length;k++)void
0===f.buttons[k].id&&(f.buttons[k].id="info_button_"+k),l+="<a id='"+f.buttons[k].id+"' class='fm-button "+j.button+"'>"+f.buttons[k].text+"</a>";var
m=isNaN(f.dataheight)?f.dataheight:f.dataheight+"px",n="text-align:"+f.align+";",o="<div id='info_id'>";o+="<div id='infocnt' style='margin:0px;padding-bottom:1em;width:100%;overflow:auto;position:relative;height:"+m+";"+n+"'>"+c+"</div>",o+=d?"<div class='"+i.content+"' style='text-align:"+f.buttonalign+";padding-bottom:0.8em;padding-top:0.5em;background-image: none;border-width: 1px 0 0 0;'><a id='closedialog' class='fm-button "+j.button+"'>"+d+"</a>"+l+"</div>":""!==l?"<div class='"+i.content+"' style='text-align:"+f.buttonalign+";padding-bottom:0.8em;padding-top:0.5em;background-image: none;border-width: 1px 0 0 0;'>"+l+"</div>":"",o+="</div>";try{"false"===a("#info_dialog").attr("aria-hidden")&&a.jgrid.hideModal("#info_dialog",{jqm:g}),a("#info_dialog").remove()}catch(p){}a.jgrid.createModal({themodal:"info_dialog",modalhead:"info_head",modalcontent:"info_content",scrollelm:"infocnt"},o,f,"","",!0),l&&a.each(f.buttons,function(b){a("#"+a.jgrid.jqID(this.id),"#info_id").bind("click",function(){return f.buttons[b].onClick.call(a("#info_dialog")),!1})}),a("#closedialog","#info_id").click(function(){return h.hideModal("#info_dialog",{jqm:g,onClose:a("#info_dialog").data("onClose")||f.onClose,gb:a("#info_dialog").data("gbox")||f.gbox}),!1}),a(".fm-button","#info_dialog").hover(function(){a(this).addClass(j.hover)},function(){a(this).removeClass(j.hover)}),a.isFunction(f.beforeOpen)&&f.beforeOpen(),a.jgrid.viewModal("#info_dialog",{onHide:function(a){a.w.hide().remove(),a.o&&a.o.remove()},modal:f.modal,jqm:g}),a.isFunction(f.afterOpen)&&f.afterOpen();try{a("#info_dialog").focus()}catch(q){}},bindEv:function(b,c){var
d=this;a.isFunction(c.dataInit)&&c.dataInit.call(d,b,c),c.dataEvents&&a.each(c.dataEvents,function(){void
0!==this.data?a(b).bind(this.type,this.data,this.fn):a(b).bind(this.type,this.fn)})},createEl:function(b,c,d,e,f){function
g(b,c,d){var
e=["dataInit","dataEvents","dataUrl","buildSelect","sopt","searchhidden","defaultValue","attr","custom_element","custom_value","oper"];void
0!==d&&a.isArray(d)&&a.merge(e,d),a.each(c,function(c,d){-1===a.inArray(c,e)&&a(b).attr(c,d)}),c.hasOwnProperty("id")||a(b).attr("id",a.jgrid.randId())}var
h="",i=this;switch(b){case"textarea":h=document.createElement("textarea"),e?c.cols||a(h).css({width:"98%"}):c.cols||(c.cols=20),c.rows||(c.rows=2),("&nbsp;"===d||"&#160;"===d||1===d.length&&160===d.charCodeAt(0))&&(d=""),h.value=d,g(h,c),a(h).attr({role:"textbox",multiline:"true"});break;case"checkbox":if(h=document.createElement("input"),h.type="checkbox",c.value){var
j=c.value.split(":");d===j[0]&&(h.checked=!0,h.defaultChecked=!0),h.value=j[0],a(h).attr("offval",j[1])}else{var
k=(d+"").toLowerCase();k.search(/(false|f|0|no|n|off|undefined)/i)<0&&""!==k?(h.checked=!0,h.defaultChecked=!0,h.value=d):h.value="on",a(h).attr("offval","off")}g(h,c,["value"]),a(h).attr("role","checkbox");break;case"select":h=document.createElement("select"),h.setAttribute("role","select");var
l,m=[];if(c.multiple===!0?(l=!0,h.multiple="multiple",a(h).attr("aria-multiselectable","true")):l=!1,null!=c.dataUrl){var
n=null,o=c.postData||f.postData;try{n=c.rowId}catch(p){}i.p&&i.p.idPrefix&&(n=a.jgrid.stripPref(i.p.idPrefix,n)),a.ajax(a.extend({url:a.isFunction(c.dataUrl)?c.dataUrl.call(i,n,d,String(c.name)):c.dataUrl,type:"GET",dataType:"html",data:a.isFunction(o)?o.call(i,n,d,String(c.name)):o,context:{elem:h,options:c,vl:d},success:function(b){var
c,d=[],e=this.elem,f=this.vl,h=a.extend({},this.options),j=h.multiple===!0,k=h.cacheUrlData===!0,l="",m=a.isFunction(h.buildSelect)?h.buildSelect.call(i,b):b;if("string"==typeof
m&&(m=a(a.trim(m)).html()),m){if(a(e).append(m),g(e,h,o?["postData"]:void
0),void
0===h.size&&(h.size=j?3:1),j?(d=f.split(","),d=a.map(d,function(b){return a.trim(b)})):d[0]=a.trim(f),a("option",e).each(function(b){c=a(this).text(),f=a(this).val()||c,k&&(l+=(0!==b?";":"")+f+":"+c),0===b&&e.multiple&&(this.selected=!1),a(this).attr("role","option"),(a.inArray(a.trim(c),d)>-1||a.inArray(a.trim(f),d)>-1)&&(this.selected="selected")}),k)if("edit"===h.oper)a(i).jqGrid("setColProp",h.name,{editoptions:{buildSelect:null,dataUrl:null,value:l}});else
if("search"===h.oper)a(i).jqGrid("setColProp",h.name,{searchoptions:{dataUrl:null,value:l}});else
if("filter"===h.oper&&a("#fbox_"+i.p.id)[0].p){var
n,p=a("#fbox_"+i.p.id)[0].p.columns;a.each(p,function(a){return n=this.index||this.name,h.name===n?(this.searchoptions.dataUrl=null,this.searchoptions.value=l,!1):void
0})}a(i).triggerHandler("jqGridAddEditAfterSelectUrlComplete",[e])}}},f||{}))}else
if(c.value){var
q;void
0===c.size&&(c.size=l?3:1),l&&(m=d.split(","),m=a.map(m,function(b){return a.trim(b)})),"function"==typeof
c.value&&(c.value=c.value());var
r,s,t,u,v,w,x=void
0===c.separator?":":c.separator,y=void
0===c.delimiter?";":c.delimiter;if("string"==typeof
c.value)for(r=c.value.split(y),q=0;q<r.length;q++)s=r[q].split(x),s.length>2&&(s[1]=a.map(s,function(a,b){return b>0?a:void
0}).join(x)),t=document.createElement("option"),t.setAttribute("role","option"),t.value=s[0],t.innerHTML=s[1],h.appendChild(t),l||a.trim(s[0])!==a.trim(d)&&a.trim(s[1])!==a.trim(d)||(t.selected="selected"),l&&(a.inArray(a.trim(s[1]),m)>-1||a.inArray(a.trim(s[0]),m)>-1)&&(t.selected="selected");else
if("[object Array]"===Object.prototype.toString.call(c.value))for(u=c.value,q=0;q<u.length;q++)2===u[q].length&&(v=u[q][0],w=u[q][1],t=document.createElement("option"),t.setAttribute("role","option"),t.value=v,t.innerHTML=w,h.appendChild(t),l||a.trim(v)!==a.trim(d)&&a.trim(w)!==a.trim(d)||(t.selected="selected"),l&&(a.inArray(a.trim(w),m)>-1||a.inArray(a.trim(v),m)>-1)&&(t.selected="selected"));else
if("object"==typeof
c.value){u=c.value;for(v
in
u)u.hasOwnProperty(v)&&(t=document.createElement("option"),t.setAttribute("role","option"),t.value=v,t.innerHTML=u[v],h.appendChild(t),l||a.trim(v)!==a.trim(d)&&a.trim(u[v])!==a.trim(d)||(t.selected="selected"),l&&(a.inArray(a.trim(u[v]),m)>-1||a.inArray(a.trim(v),m)>-1)&&(t.selected="selected"))}g(h,c,["value"])}break;case"image":case"file":h=document.createElement("input"),h.type=b,g(h,c);break;case"custom":h=document.createElement("span");try{if(!a.isFunction(c.custom_element))throw"e1";var
z=c.custom_element.call(i,d,c);if(!z)throw"e2";z=a(z).addClass("customelement").attr({id:c.id,name:c.name}),a(h).empty().append(z)}catch(p){var
A=a.jgrid.getRegional(i,"errors"),B=a.jgrid.getRegional(i,"edit");"e1"===p?a.jgrid.info_dialog(A.errcap,"function 'custom_element' "+B.msg.nodefined,B.bClose,{styleUI:i.p.styleUI}):"e2"===p?a.jgrid.info_dialog(A.errcap,"function 'custom_element' "+B.msg.novalue,B.bClose,{styleUI:i.p.styleUI}):a.jgrid.info_dialog(A.errcap,"string"==typeof
p?p:p.message,B.bClose,{styleUI:i.p.styleUI})}break;default:var
C;C="button"===b?"button":"textbox",h=document.createElement("input"),h.type=b,h.value=d,g(h,c),"button"!==b&&(e?c.size||a(h).css({width:"96%"}):c.size||(c.size=20)),a(h).attr("role",C)}return h},checkDate:function(a,b){var
c,d=function(a){return a%4!==0||a%100===0&&a%400!==0?28:29},e={};if(a=a.toLowerCase(),c=-1!==a.indexOf("/")?"/":-1!==a.indexOf("-")?"-":-1!==a.indexOf(".")?".":"/",a=a.split(c),b=b.split(c),3!==b.length)return!1;var
f,g,h=-1,i=-1,j=-1;for(g=0;g<a.length;g++){var
k=isNaN(b[g])?0:parseInt(b[g],10);e[a[g]]=k,f=a[g],-1!==f.indexOf("y")&&(h=g),-1!==f.indexOf("m")&&(j=g),-1!==f.indexOf("d")&&(i=g)}f="y"===a[h]||"yyyy"===a[h]?4:"yy"===a[h]?2:-1;var
l,m=[0,31,29,31,30,31,30,31,31,30,31,30,31];return-1===h?!1:(l=e[a[h]].toString(),2===f&&1===l.length&&(f=1),l.length!==f||0===e[a[h]]&&"00"!==b[h]?!1:-1===j?!1:(l=e[a[j]].toString(),l.length<1||e[a[j]]<1||e[a[j]]>12?!1:-1===i?!1:(l=e[a[i]].toString(),l.length<1||e[a[i]]<1||e[a[i]]>31||2===e[a[j]]&&e[a[i]]>d(e[a[h]])||e[a[i]]>m[e[a[j]]]?!1:!0)))},isEmpty:function(a){return a.match(/^\s+$/)||""===a?!0:!1},checkTime:function(b){var
c,d=/^(\d{1,2}):(\d{2})([apAP][Mm])?$/;if(!a.jgrid.isEmpty(b)){if(c=b.match(d),!c)return!1;if(c[3]){if(c[1]<1||c[1]>12)return!1}else
if(c[1]>23)return!1;if(c[2]>59)return!1}return!0},checkValues:function(b,c,d,e){var
f,g,h,i,j,k,l=this,m=l.p.colModel,n=a.jgrid.getRegional(this,"edit.msg");if(void
0===d)if("string"==typeof
c){for(g=0,j=m.length;j>g;g++)if(m[g].name===c){f=m[g].editrules,c=g,null!=m[g].formoptions&&(h=m[g].formoptions.label);break}}else
c>=0&&(f=m[c].editrules);else
f=d,h=void
0===e?"_":e;if(f){if(h||(h=null!=l.p.colNames?l.p.colNames[c]:m[c].label),f.required===!0&&a.jgrid.isEmpty(b))return[!1,h+": "+n.required,""];var
o=f.required===!1?!1:!0;if(f.number===!0&&(o!==!1||!a.jgrid.isEmpty(b))&&isNaN(b))return[!1,h+": "+n.number,""];if(void
0!==f.minValue&&!isNaN(f.minValue)&&parseFloat(b)<parseFloat(f.minValue))return[!1,h+": "+n.minValue+" "+f.minValue,""];if(void
0!==f.maxValue&&!isNaN(f.maxValue)&&parseFloat(b)>parseFloat(f.maxValue))return[!1,h+": "+n.maxValue+" "+f.maxValue,""];var
p;if(f.email===!0&&!(o===!1&&a.jgrid.isEmpty(b)||(p=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,p.test(b))))return[!1,h+": "+n.email,""];if(f.integer===!0&&(o!==!1||!a.jgrid.isEmpty(b))){if(isNaN(b))return[!1,h+": "+n.integer,""];if(b%1!==0||-1!==b.indexOf("."))return[!1,h+": "+n.integer,""]}if(f.date===!0&&!(o===!1&&a.jgrid.isEmpty(b)||(m[c].formatoptions&&m[c].formatoptions.newformat?(i=m[c].formatoptions.newformat,k=a.jgrid.getRegional(l,"formatter.date.masks"),k&&k.hasOwnProperty(i)&&(i=k[i])):i=m[c].datefmt||"Y-m-d",a.jgrid.checkDate(i,b))))return[!1,h+": "+n.date+" - "+i,""];if(f.time===!0&&!(o===!1&&a.jgrid.isEmpty(b)||a.jgrid.checkTime(b)))return[!1,h+": "+n.date+" - hh:mm (am/pm)",""];if(f.url===!0&&!(o===!1&&a.jgrid.isEmpty(b)||(p=/^(((https?)|(ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/i,p.test(b))))return[!1,h+": "+n.url,""];if(f.custom===!0&&(o!==!1||!a.jgrid.isEmpty(b))){if(a.isFunction(f.custom_func)){var
q=f.custom_func.call(l,b,h,c);return a.isArray(q)?q:[!1,n.customarray,""]}return[!1,n.customfcheck,""]}}return[!0,"",""]}})});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery","./grid.base","./grid.common"],a):a(jQuery)}(function(a){"use strict";var
b={};a.jgrid.extend({editGridRow:function(c,d){var
e=a.jgrid.getRegional(this[0],"edit"),f=this[0].p.styleUI,g=a.jgrid.styleUI[f].formedit,h=a.jgrid.styleUI[f].common;return d=a.extend(!0,{top:0,left:0,width:"500",datawidth:"auto",height:"auto",dataheight:"auto",modal:!1,overlay:30,drag:!0,resize:!0,url:null,mtype:"POST",clearAfterAdd:!0,closeAfterEdit:!1,reloadAfterSubmit:!0,onInitializeForm:null,beforeInitData:null,beforeShowForm:null,afterShowForm:null,beforeSubmit:null,afterSubmit:null,onclickSubmit:null,afterComplete:null,onclickPgButtons:null,afterclickPgButtons:null,editData:{},recreateForm:!1,jqModal:!0,closeOnEscape:!1,addedrow:"first",topinfo:"",bottominfo:"",saveicon:[],closeicon:[],savekey:[!1,13],navkeys:[!1,38,40],checkOnSubmit:!1,checkOnUpdate:!1,processing:!1,onClose:null,ajaxEditOptions:{},serializeEditData:null,viewPagerButtons:!0,overlayClass:h.overlay,removemodal:!0,form:"edit",template:null,focusField:!0,editselected:!1},e,d||{}),b[a(this)[0].p.id]=d,this.each(function(){function
e(){var
c,d={};a(A).find(".FormElement").each(function(){var
c=a(".customelement",this);if(c.length){var
e=c[0],f=a(e).attr("name");a.each(s.p.colModel,function(){if(this.name===f&&this.editoptions&&a.isFunction(this.editoptions.custom_value)){try{if(u[f]=this.editoptions.custom_value.call(s,a("#"+a.jgrid.jqID(f),A),"get"),void
0===u[f])throw"e1"}catch(c){"e1"===c?a.jgrid.info_dialog(G.errcap,"function 'custom_value' "+b[a(this)[0]].p.msg.novalue,b[a(this)[0]].p.bClose,{styleUI:b[a(this)[0]].p.styleUI}):a.jgrid.info_dialog(G.errcap,c.message,b[a(this)[0]].p.bClose,{styleUI:b[a(this)[0]].p.styleUI})}return!0}})}else{switch(a(this).get(0).type){case"checkbox":if(a(this).is(":checked"))u[this.name]=a(this).val();else{var
g=a(this).attr("offval");u[this.name]=g}break;case"select-one":u[this.name]=a(this).val();break;case"select-multiple":u[this.name]=a(this).val(),u[this.name]=u[this.name]?u[this.name].join(","):"";break;case"password":case"text":case"textarea":case"button":u[this.name]=a(this).val();break;case"radio":if(d.hasOwnProperty(this.name))return!0;d[this.name]=void
0===a(this).attr("offval")?"off":a(this).attr("offval")}s.p.autoencode&&(u[this.name]=a.jgrid.htmlEncode(u[this.name]))}});for(c
in
d)if(d.hasOwnProperty(c)){var
e=a('input[name="'+c+'"]:checked',A).val();u[c]=void
0!==e?e:d[c],s.p.autoencode&&(u[c]=a.jgrid.htmlEncode(u[c]))}return!0}function
f(c,d,e,f){var
h,i,j,k,l,m,n,o,p=0,q=[],r=!1,t="<td class='CaptionTD'>&#160;</td><td class='DataTD'>&#160;</td>",u="";for(n=1;f>=n;n++)u+=t;if("_empty"!==c&&(r=a(d).jqGrid("getInd",c)),a(d.p.colModel).each(function(n){if(h=this.name,i=this.editrules&&this.editrules.edithidden===!0?!1:this.hidden===!0?!0:!1,l=i?"style='display:none'":"","cb"!==h&&"subgrid"!==h&&this.editable===!0&&"rn"!==h){if(r===!1)k="";else
if(h===d.p.ExpandColumn&&d.p.treeGrid===!0)k=a("td[role='gridcell']:eq("+n+")",d.rows[r]).text();else{try{k=a.unformat.call(d,a("td[role='gridcell']:eq("+n+")",d.rows[r]),{rowId:c,colModel:this},n)}catch(t){k=this.edittype&&"textarea"===this.edittype?a("td[role='gridcell']:eq("+n+")",d.rows[r]).text():a("td[role='gridcell']:eq("+n+")",d.rows[r]).html()}(!k||"&nbsp;"===k||"&#160;"===k||1===k.length&&160===k.charCodeAt(0))&&(k="")}var
v=a.extend({},this.editoptions||{},{id:h,name:h,rowId:c,oper:"edit"}),w=a.extend({},{elmprefix:"",elmsuffix:"",rowabove:!1,rowcontent:""},this.formoptions||{}),x=parseInt(w.rowpos,10)||p+1,z=parseInt(2*(parseInt(w.colpos,10)||1),10);if("_empty"===c&&v.defaultValue&&(k=a.isFunction(v.defaultValue)?v.defaultValue.call(s):v.defaultValue),this.edittype||(this.edittype="text"),s.p.autoencode&&(k=a.jgrid.htmlDecode(k)),m=a.jgrid.createEl.call(s,this.edittype,v,k,!1,a.extend({},a.jgrid.ajaxOptions,d.p.ajaxSelectOptions||{})),"select"===this.edittype&&(k=a(m).val(),"select-multiple"===a(m).get(0).type&&k&&(k=k.join(","))),"checkbox"===this.edittype&&(k=a(m).is(":checked")?a(m).val():a(m).attr("offval")),a(m).addClass("FormElement"),a.inArray(this.edittype,["text","textarea","password","select"])>-1&&a(m).addClass(g.inputClass),o=!0,F){var
A=a(L).find("#"+h);A.length?A.replaceWith(m):o=!1}else{if(j=a(e).find("tr[rowpos="+x+"]"),w.rowabove){var
B=a("<tr><td class='contentinfo' colspan='"+2*f+"'>"+w.rowcontent+"</td></tr>");a(e).append(B),B[0].rp=x}0===j.length&&(j=a("<tr "+l+" rowpos='"+x+"'></tr>").addClass("FormData").attr("id","tr_"+h),a(j).append(u),a(e).append(j),j[0].rp=x),a("td:eq("+(z-2)+")",j[0]).html("<label for='"+h+"'>"+(void
0===w.label?d.p.colNames[n]:w.label)+"</label>"),a("td:eq("+(z-1)+")",j[0]).append(w.elmprefix).append(m).append(w.elmsuffix)}(b[s.p.id].checkOnSubmit||b[s.p.id].checkOnUpdate)&&o&&(s.p.savedData[h]=k),"custom"===this.edittype&&a.isFunction(v.custom_value)&&v.custom_value.call(s,a("#"+h,y),"set",k),a.jgrid.bindEv.call(s,m,v),q[p]=n,p++}}),p>0){var
v;F?(v="<div class='FormData' style='display:none'><input class='FormElement' id='id_g' type='text' name='"+d.p.id+"_id' value='"+c+"'/>",a(L).append(v)):(v=a("<tr class='FormData' style='display:none'><td class='CaptionTD'></td><td colspan='"+(2*f-1)+"' class='DataTD'><input class='FormElement' id='id_g' type='text' name='"+d.p.id+"_id' value='"+c+"'/></td></tr>"),v[0].rp=p+999,a(e).append(v)),(b[s.p.id].checkOnSubmit||b[s.p.id].checkOnUpdate)&&(s.p.savedData[d.p.id+"_id"]=c)}return q}function
i(c,d,e){var
f,g,h,i,j,k,l=0;(b[s.p.id].checkOnSubmit||b[s.p.id].checkOnUpdate)&&(s.p.savedData={},s.p.savedData[d.p.id+"_id"]=c);var
m=d.p.colModel;if("_empty"===c)return a(m).each(function(){f=this.name,i=a.extend({},this.editoptions||{}),h=a("#"+a.jgrid.jqID(f),e),h&&h.length&&null!==h[0]&&(j="","custom"===this.edittype&&a.isFunction(i.custom_value)?i.custom_value.call(s,a("#"+f,e),"set",j):i.defaultValue?(j=a.isFunction(i.defaultValue)?i.defaultValue.call(s):i.defaultValue,"checkbox"===h[0].type?(k=j.toLowerCase(),k.search(/(false|f|0|no|n|off|undefined)/i)<0&&""!==k?(h[0].checked=!0,h[0].defaultChecked=!0,h[0].value=j):(h[0].checked=!1,h[0].defaultChecked=!1)):h.val(j)):"checkbox"===h[0].type?(h[0].checked=!1,h[0].defaultChecked=!1,j=a(h).attr("offval")):h[0].type&&"select"===h[0].type.substr(0,6)?h[0].selectedIndex=0:h.val(j),(b[s.p.id].checkOnSubmit===!0||b[s.p.id].checkOnUpdate)&&(s.p.savedData[f]=j))}),void
a("#id_g",e).val(c);var
n=a(d).jqGrid("getInd",c,!0);n&&(a('td[role="gridcell"]',n).each(function(h){if(f=m[h].name,"cb"!==f&&"subgrid"!==f&&"rn"!==f&&m[h].editable===!0){if(f===d.p.ExpandColumn&&d.p.treeGrid===!0)g=a(this).text();else
try{g=a.unformat.call(d,a(this),{rowId:c,colModel:m[h]},h)}catch(i){g="textarea"===m[h].edittype?a(this).text():a(this).html()}switch(s.p.autoencode&&(g=a.jgrid.htmlDecode(g)),(b[s.p.id].checkOnSubmit===!0||b[s.p.id].checkOnUpdate)&&(s.p.savedData[f]=g),f=a.jgrid.jqID(f),m[h].edittype){case"password":case"text":case"button":case"image":case"textarea":("&nbsp;"===g||"&#160;"===g||1===g.length&&160===g.charCodeAt(0))&&(g=""),a("#"+f,e).val(g);break;case"select":var
j=g.split(",");j=a.map(j,function(b){return a.trim(b)}),a("#"+f+" option",e).each(function(){m[h].editoptions.multiple||a.trim(g)!==a.trim(a(this).text())&&j[0]!==a.trim(a(this).text())&&j[0]!==a.trim(a(this).val())?m[h].editoptions.multiple&&(a.inArray(a.trim(a(this).text()),j)>-1||a.inArray(a.trim(a(this).val()),j)>-1)?this.selected=!0:this.selected=!1:this.selected=!0}),(b[s.p.id].checkOnSubmit===!0||b[s.p.id].checkOnUpdate)&&(g=a("#"+f,e).val(),m[h].editoptions.multiple&&(g=g.join(",")),s.p.savedData[f]=g);break;case"checkbox":if(g=String(g),m[h].editoptions&&m[h].editoptions.value){var
k=m[h].editoptions.value.split(":");k[0]===g?a("#"+f,e)[s.p.useProp?"prop":"attr"]({checked:!0,defaultChecked:!0}):a("#"+f,e)[s.p.useProp?"prop":"attr"]({checked:!1,defaultChecked:!1})}else
g=g.toLowerCase(),g.search(/(false|f|0|no|n|off|undefined)/i)<0&&""!==g?(a("#"+f,e)[s.p.useProp?"prop":"attr"]("checked",!0),a("#"+f,e)[s.p.useProp?"prop":"attr"]("defaultChecked",!0)):(a("#"+f,e)[s.p.useProp?"prop":"attr"]("checked",!1),a("#"+f,e)[s.p.useProp?"prop":"attr"]("defaultChecked",!1));(b[s.p.id].checkOnSubmit===!0||b[s.p.id].checkOnUpdate)&&(g=a("#"+f,e).is(":checked")?a("#"+f,e).val():a("#"+f,e).attr("offval"),s.p.savedData[f]=g);break;case"custom":try{if(!m[h].editoptions||!a.isFunction(m[h].editoptions.custom_value))throw"e1";m[h].editoptions.custom_value.call(s,a("#"+f,e),"set",g)}catch(n){"e1"===n?a.jgrid.info_dialog(G.errcap,"function 'custom_value' "+b[a(this)[0]].p.msg.nodefined,a.rp_ge[a(this)[0]].p.bClose,{styleUI:b[a(this)[0]].p.styleUI}):a.jgrid.info_dialog(G.errcap,n.message,a.rp_ge[a(this)[0]].p.bClose,{styleUI:b[a(this)[0]].p.styleUI})}}l++}}),l>0&&(a("#id_g",A).val(c),(b[s.p.id].checkOnSubmit===!0||b[s.p.id].checkOnUpdate)&&(s.p.savedData[d.p.id+"_id"]=c)))}function
j(){a.each(s.p.colModel,function(a,b){b.editoptions&&b.editoptions.NullIfEmpty===!0&&u.hasOwnProperty(b.name)&&""===u[b.name]&&(u[b.name]="null")})}function
k(){var
c,e,f,g,k,l,m,n=[!0,"",""],o={},p=s.p.prmNames,q=a(s).triggerHandler("jqGridAddEditBeforeCheckValues",[a(y),w]);q&&"object"==typeof
q&&(u=q),a.isFunction(b[s.p.id].beforeCheckValues)&&(q=b[s.p.id].beforeCheckValues.call(s,u,a(y),w),q&&"object"==typeof
q&&(u=q));for(g
in
u)if(u.hasOwnProperty(g)&&(n=a.jgrid.checkValues.call(s,u[g],g),n[0]===!1))break;if(j(),n[0]&&(o=a(s).triggerHandler("jqGridAddEditClickSubmit",[b[s.p.id],u,w]),void
0===o&&a.isFunction(b[s.p.id].onclickSubmit)&&(o=b[s.p.id].onclickSubmit.call(s,b[s.p.id],u,w)||{}),n=a(s).triggerHandler("jqGridAddEditBeforeSubmit",[u,a(y),w]),void
0===n&&(n=[!0,"",""]),n[0]&&a.isFunction(b[s.p.id].beforeSubmit)&&(n=b[s.p.id].beforeSubmit.call(s,u,a(y),w))),n[0]&&!b[s.p.id].processing){if(b[s.p.id].processing=!0,a("#sData",A+"_2").addClass(h.active),m=b[s.p.id].url||a(s).jqGrid("getGridParam","editurl"),f=p.oper,e="clientArray"===m?s.p.keyName:p.id,u[f]="_empty"===a.trim(u[s.p.id+"_id"])?p.addoper:p.editoper,u[f]!==p.addoper?u[e]=u[s.p.id+"_id"]:void
0===u[e]&&(u[e]=u[s.p.id+"_id"]),delete
u[s.p.id+"_id"],u=a.extend(u,b[s.p.id].editData,o),s.p.treeGrid===!0){if(u[f]===p.addoper){k=a(s).jqGrid("getGridParam","selrow");var
r="adjacency"===s.p.treeGridModel?s.p.treeReader.parent_id_field:"parent_id";u[r]=k}for(l
in
s.p.treeReader)if(s.p.treeReader.hasOwnProperty(l)){var
t=s.p.treeReader[l];if(u.hasOwnProperty(t)){if(u[f]===p.addoper&&"parent_id_field"===l)continue;delete
u[t]}}}u[e]=a.jgrid.stripPref(s.p.idPrefix,u[e]);var
v=a.extend({url:m,type:b[s.p.id].mtype,data:a.isFunction(b[s.p.id].serializeEditData)?b[s.p.id].serializeEditData.call(s,u):u,complete:function(g,j){var
l;if(a("#sData",A+"_2").removeClass(h.active),u[e]=s.p.idPrefix+u[e],g.status>=300&&304!==g.status?(n[0]=!1,n[1]=a(s).triggerHandler("jqGridAddEditErrorTextFormat",[g,w]),a.isFunction(b[s.p.id].errorTextFormat)?n[1]=b[s.p.id].errorTextFormat.call(s,g,w):n[1]=j+" Status: '"+g.statusText+"'. Error code: "+g.status):(n=a(s).triggerHandler("jqGridAddEditAfterSubmit",[g,u,w]),void
0===n&&(n=[!0,"",""]),n[0]&&a.isFunction(b[s.p.id].afterSubmit)&&(n=b[s.p.id].afterSubmit.call(s,g,u,w))),n[0]===!1)a(".FormError",y).html(n[1]),a(".FormError",y).show();else
if(s.p.autoencode&&a.each(u,function(b,c){u[b]=a.jgrid.htmlDecode(c)}),u[f]===p.addoper?(n[2]||(n[2]=a.jgrid.randId()),null==u[e]||"_empty"===u[e]?u[e]=n[2]:n[2]=u[e],b[s.p.id].reloadAfterSubmit?a(s).trigger("reloadGrid"):s.p.treeGrid===!0?a(s).jqGrid("addChildNode",n[2],k,u):a(s).jqGrid("addRowData",n[2],u,d.addedrow),b[s.p.id].closeAfterAdd?(s.p.treeGrid!==!0&&a(s).jqGrid("setSelection",n[2]),a.jgrid.hideModal("#"+a.jgrid.jqID(B.themodal),{gb:"#gbox_"+a.jgrid.jqID(x),jqm:d.jqModal,onClose:b[s.p.id].onClose,removemodal:b[s.p.id].removemodal,formprop:!b[s.p.id].recreateForm,form:b[s.p.id].form})):b[s.p.id].clearAfterAdd&&i("_empty",s,y)):(b[s.p.id].reloadAfterSubmit?(a(s).trigger("reloadGrid"),b[s.p.id].closeAfterEdit||setTimeout(function(){a(s).jqGrid("setSelection",u[e])},1e3)):s.p.treeGrid===!0?a(s).jqGrid("setTreeRow",u[e],u):a(s).jqGrid("setRowData",u[e],u),b[s.p.id].closeAfterEdit&&a.jgrid.hideModal("#"+a.jgrid.jqID(B.themodal),{gb:"#gbox_"+a.jgrid.jqID(x),jqm:d.jqModal,onClose:b[s.p.id].onClose,removemodal:b[s.p.id].removemodal,formprop:!b[s.p.id].recreateForm,form:b[s.p.id].form})),a.isFunction(b[s.p.id].afterComplete)&&(c=g,setTimeout(function(){a(s).triggerHandler("jqGridAddEditAfterComplete",[c,u,a(y),w]),b[s.p.id].afterComplete.call(s,c,u,a(y),w),c=null},500)),(b[s.p.id].checkOnSubmit||b[s.p.id].checkOnUpdate)&&(a(y).data("disabled",!1),"_empty"!==s.p.savedData[s.p.id+"_id"]))for(l
in
s.p.savedData)s.p.savedData.hasOwnProperty(l)&&u[l]&&(s.p.savedData[l]=u[l]);b[s.p.id].processing=!1;try{a(":input:visible",y)[0].focus()}catch(m){}}},a.jgrid.ajaxOptions,b[s.p.id].ajaxEditOptions);if(v.url||b[s.p.id].useDataProxy||(a.isFunction(s.p.dataProxy)?b[s.p.id].useDataProxy=!0:(n[0]=!1,n[1]+=" "+G.nourl)),n[0])if(b[s.p.id].useDataProxy){var
z=s.p.dataProxy.call(s,v,"set_"+s.p.id);void
0===z&&(z=[!0,""]),z[0]===!1?(n[0]=!1,n[1]=z[1]||"Error deleting the selected row!"):(v.data.oper===p.addoper&&b[s.p.id].closeAfterAdd&&a.jgrid.hideModal("#"+a.jgrid.jqID(B.themodal),{gb:"#gbox_"+a.jgrid.jqID(x),jqm:d.jqModal,onClose:b[s.p.id].onClose,removemodal:b[s.p.id].removemodal,formprop:!b[s.p.id].recreateForm,form:b[s.p.id].form}),v.data.oper===p.editoper&&b[s.p.id].closeAfterEdit&&a.jgrid.hideModal("#"+a.jgrid.jqID(B.themodal),{gb:"#gbox_"+a.jgrid.jqID(x),jqm:d.jqModal,onClose:b[s.p.id].onClose,removemodal:b[s.p.id].removemodal,formprop:!b[s.p.id].recreateForm,form:b[s.p.id].form}))}else"clientArray"===v.url?(b[s.p.id].reloadAfterSubmit=!1,u=v.data,v.complete({status:200,statusText:""},"")):a.ajax(v)}n[0]===!1&&(a(".FormError",y).html(n[1]),a(".FormError",y).show())}function
l(b,c){var
d,e=!1;if(e=!(a.isPlainObject(b)&&a.isPlainObject(c)&&Object.getOwnPropertyNames(b).length===Object.getOwnPropertyNames(c).length),!e)for(d
in
c)if(c.hasOwnProperty(d)){if(!b.hasOwnProperty(d)){e=!0;break}if(b[d]!==c[d]){e=!0;break}}return e}function
m(){var
c=!0;return a(".FormError",y).hide(),b[s.p.id].checkOnUpdate&&(u={},e(),v=l(u,s.p.savedData),v&&(a(y).data("disabled",!0),a(".confirm","#"+B.themodal).show(),c=!1)),c}function
n(){var
b;if("_empty"!==c&&void
0!==s.p.savedRow&&s.p.savedRow.length>0&&a.isFunction(a.fn.jqGrid.restoreRow))for(b=0;b<s.p.savedRow.length;b++)if(s.p.savedRow[b].id===c){a(s).jqGrid("restoreRow",c);break}}function
o(b,c){var
d=c[1].length-1;0===b?a("#pData",t).addClass(h.disabled):void
0!==c[1][b-1]&&a("#"+a.jgrid.jqID(c[1][b-1])).hasClass(h.disabled)?a("#pData",t).addClass(h.disabled):a("#pData",t).removeClass(h.disabled),b===d?a("#nData",t).addClass(h.disabled):void
0!==c[1][b+1]&&a("#"+a.jgrid.jqID(c[1][b+1])).hasClass(h.disabled)?a("#nData",t).addClass(h.disabled):a("#nData",t).removeClass(h.disabled)}function
p(){var
c,d=a(s).jqGrid("getDataIDs"),e=a("#id_g",A).val();if(s.p.multiselect&&b[s.p.id].editselected){for(var
f=[],g=0,h=d.length;h>g;g++)-1!==a.inArray(d[g],s.p.selarrrow)&&f.push(d[g]);return c=a.inArray(e,f),[c,f]}return c=a.inArray(e,d),[c,d]}function
q(a){var
b="";return"string"==typeof
a&&(b=a.replace(/\{([\w\-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g,function(a,b){return'<span id="'+b+'" ></span>'})),b}function
r(){if(b[s.p.id].checkOnSubmit||b[s.p.id].checkOnUpdate){var
c=[],d={};c=a.map(s.p.savedData,function(a,b){return b}),a(".FormElement",L).each(function(){if(-1===c.indexOf(this.name)){var
b=a(this).val(),e=a(this).get(0).type;if("checkbox"===e)a(this).is(":checked")||(b=a(this).attr("offval"));else
if("select-multiple"===e)b=b.join(",");else
if("radio"===e){if(d.hasOwnProperty(this.name))return!0;d[this.name]=void
0===a(this).attr("offval")?"off":a(this).attr("offval")}s.p.savedData[this.name]=b}});for(var
e
in
d)if(d.hasOwnProperty(e)){var
f=a('input[name="'+e+'"]:checked',L).val();s.p.savedData[e]=void
0!==f?f:d[e]}}}var
s=this;if(s.grid&&c){s.p.savedData={};var
t,u,v,w,x=s.p.id,y="FrmGrid_"+x,z="TblGrid_"+x,A="#"+a.jgrid.jqID(z),B={themodal:"editmod"+x,modalhead:"edithd"+x,modalcontent:"editcnt"+x,scrollelm:y},C=!0,D=1,E=0,F="string"==typeof
b[s.p.id].template&&b[s.p.id].template.length>0,G=a.jgrid.getRegional(this,"errors");b[s.p.id].styleUI=s.p.styleUI||"jQueryUI",a.jgrid.isMobile()&&(b[s.p.id].resize=!1),"new"===c?(c="_empty",w="add",d.caption=b[s.p.id].addCaption):(d.caption=b[s.p.id].editCaption,w="edit"),d.recreateForm||a(s).data("formProp")&&a.extend(b[a(this)[0].p.id],a(s).data("formProp"));var
H=!0;d.checkOnUpdate&&d.jqModal&&!d.modal&&(H=!1);var
I,J=isNaN(b[a(this)[0].p.id].dataheight)?b[a(this)[0].p.id].dataheight:b[a(this)[0].p.id].dataheight+"px",K=isNaN(b[a(this)[0].p.id].datawidth)?b[a(this)[0].p.id].datawidth:b[a(this)[0].p.id].datawidth+"px",L=a("<form name='FormPost' id='"+y+"' class='FormGrid' onSubmit='return false;' style='width:"+K+";height:"+J+";'></form>").data("disabled",!1);if(F?(I=q(b[a(this)[0].p.id].template),t=A):(I=a("<table id='"+z+"' class='EditTable ui-common-table'><tbody></tbody></table>"),t=A+"_2"),y="#"+a.jgrid.jqID(y),a(L).append("<div class='FormError "+h.error+"' style='display:none;'></div>"),a(L).append("<div class='tinfo topinfo'>"+b[s.p.id].topinfo+"</div>"),a(s.p.colModel).each(function(){var
a=this.formoptions;D=Math.max(D,a?a.colpos||0:0),E=Math.max(E,a?a.rowpos||0:0)}),a(L).append(I),C=a(s).triggerHandler("jqGridAddEditBeforeInitData",[L,w]),void
0===C&&(C=!0),C&&a.isFunction(b[s.p.id].beforeInitData)&&(C=b[s.p.id].beforeInitData.call(s,L,w)),C!==!1){n(),f(c,s,I,D);var
M="rtl"===s.p.direction?!0:!1,N=M?"nData":"pData",O=M?"pData":"nData",P="<a id='"+N+"' class='fm-button "+h.button+"'><span class='"+h.icon_base+" "+g.icon_prev+"'></span></a>",Q="<a id='"+O+"' class='fm-button "+h.button+"'><span class='"+h.icon_base+" "+g.icon_next+"'></span></a>",R="<a id='sData' class='fm-button "+h.button+"'>"+d.bSubmit+"</a>",S="<a id='cData' class='fm-button "+h.button+"'>"+d.bCancel+"</a>",T="<table style='height:auto' class='EditTable ui-common-table' id='"+z+"_2'><tbody><tr><td colspan='2'><hr class='"+h.content+"' style='margin:1px'/></td></tr><tr id='Act_Buttons'><td class='navButton'>"+(M?Q+P:P+Q)+"</td><td class='EditButton'>"+R+S+"</td></tr>";if(T+="</tbody></table>",E>0){var
U=[];a.each(a(I)[0].rows,function(a,b){U[a]=b}),U.sort(function(a,b){return a.rp>b.rp?1:a.rp<b.rp?-1:0}),a.each(U,function(b,c){a("tbody",I).append(c)})}d.gbox="#gbox_"+a.jgrid.jqID(x);var
V=!1;d.closeOnEscape===!0&&(d.closeOnEscape=!1,V=!0);var
W;if(F?(a(L).find("#pData").replaceWith(P),a(L).find("#nData").replaceWith(Q),a(L).find("#sData").replaceWith(R),a(L).find("#cData").replaceWith(S),W=a("<div id="+z+"></div>").append(L)):W=a("<div></div>").append(L).append(T),a(L).append("<div class='binfo topinfo bottominfo'>"+b[s.p.id].bottominfo+"</div>"),a.jgrid.createModal(B,W,b[a(this)[0].p.id],"#gview_"+a.jgrid.jqID(s.p.id),a("#gbox_"+a.jgrid.jqID(s.p.id))[0]),M&&(a("#pData, #nData",A+"_2").css("float","right"),a(".EditButton",A+"_2").css("text-align","left")),b[s.p.id].topinfo&&a(".tinfo",y).show(),b[s.p.id].bottominfo&&a(".binfo",y).show(),W=null,T=null,a("#"+a.jgrid.jqID(B.themodal)).keydown(function(c){var
e=c.target;if(a(y).data("disabled")===!0)return!1;if(b[s.p.id].savekey[0]===!0&&c.which===b[s.p.id].savekey[1]&&"TEXTAREA"!==e.tagName)return a("#sData",A+"_2").trigger("click"),!1;if(27===c.which)return m()?(V&&a.jgrid.hideModal("#"+a.jgrid.jqID(B.themodal),{gb:d.gbox,jqm:d.jqModal,onClose:b[s.p.id].onClose,removemodal:b[s.p.id].removemodal,formprop:!b[s.p.id].recreateForm,form:b[s.p.id].form}),!1):!1;if(b[s.p.id].navkeys[0]===!0){if("_empty"===a("#id_g",A).val())return!0;if(c.which===b[s.p.id].navkeys[1])return a("#pData",t).trigger("click"),!1;if(c.which===b[s.p.id].navkeys[2])return a("#nData",t).trigger("click"),!1}}),d.checkOnUpdate&&(a("a.ui-jqdialog-titlebar-close span","#"+a.jgrid.jqID(B.themodal)).removeClass("jqmClose"),a("a.ui-jqdialog-titlebar-close","#"+a.jgrid.jqID(B.themodal)).unbind("click").click(function(){return m()?(a.jgrid.hideModal("#"+a.jgrid.jqID(B.themodal),{gb:"#gbox_"+a.jgrid.jqID(x),jqm:d.jqModal,onClose:b[s.p.id].onClose,removemodal:b[s.p.id].removemodal,formprop:!b[s.p.id].recreateForm,form:b[s.p.id].form}),!1):!1})),d.saveicon=a.extend([!0,"left",g.icon_save],d.saveicon),d.closeicon=a.extend([!0,"left",g.icon_close],d.closeicon),d.saveicon[0]===!0&&a("#sData",t).addClass("right"===d.saveicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='"+h.icon_base+" "+d.saveicon[2]+"'></span>"),d.closeicon[0]===!0&&a("#cData",t).addClass("right"===d.closeicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='"+h.icon_base+" "+d.closeicon[2]+"'></span>"),b[s.p.id].checkOnSubmit||b[s.p.id].checkOnUpdate){R="<a id='sNew' class='fm-button "+h.button+"' style='z-index:1002'>"+d.bYes+"</a>",Q="<a id='nNew' class='fm-button "+h.button+"' style='z-index:1002;margin-left:5px'>"+d.bNo+"</a>",S="<a id='cNew' class='fm-button "+h.button+"' style='z-index:1002;margin-left:5px;'>"+d.bExit+"</a>";var
X=d.zIndex||999;X++,a("<div class='"+d.overlayClass+" jqgrid-overlay confirm' style='z-index:"+X+";display:none;'>&#160;</div><div class='confirm ui-jqconfirm "+h.content+"' style='z-index:"+(X+1)+"'>"+d.saveData+"<br/><br/>"+R+Q+S+"</div>").insertAfter(y),a("#sNew","#"+a.jgrid.jqID(B.themodal)).click(function(){return k(),a(y).data("disabled",!1),a(".confirm","#"+a.jgrid.jqID(B.themodal)).hide(),!1}),a("#nNew","#"+a.jgrid.jqID(B.themodal)).click(function(){return a(".confirm","#"+a.jgrid.jqID(B.themodal)).hide(),a(y).data("disabled",!1),setTimeout(function(){a(":input:visible",y)[0].focus()},0),!1}),a("#cNew","#"+a.jgrid.jqID(B.themodal)).click(function(){return a(".confirm","#"+a.jgrid.jqID(B.themodal)).hide(),a(y).data("disabled",!1),a.jgrid.hideModal("#"+a.jgrid.jqID(B.themodal),{gb:"#gbox_"+a.jgrid.jqID(x),jqm:d.jqModal,onClose:b[s.p.id].onClose,removemodal:b[s.p.id].removemodal,formprop:!b[s.p.id].recreateForm,form:b[s.p.id].form}),!1})}a(s).triggerHandler("jqGridAddEditInitializeForm",[a(y),w]),a.isFunction(b[s.p.id].onInitializeForm)&&b[s.p.id].onInitializeForm.call(s,a(y),w),"_empty"!==c&&b[s.p.id].viewPagerButtons?a("#pData,#nData",t).show():a("#pData,#nData",t).hide(),a(s).triggerHandler("jqGridAddEditBeforeShowForm",[a(y),w]),a.isFunction(b[s.p.id].beforeShowForm)&&b[s.p.id].beforeShowForm.call(s,a(y),w),r(),a("#"+a.jgrid.jqID(B.themodal)).data("onClose",b[s.p.id].onClose),a.jgrid.viewModal("#"+a.jgrid.jqID(B.themodal),{gbox:"#gbox_"+a.jgrid.jqID(x),jqm:d.jqModal,overlay:d.overlay,modal:d.modal,overlayClass:d.overlayClass,focusField:d.focusField,onHide:function(b){var
c=a("#editmod"+x)[0].style.height,d=a("#editmod"+x)[0].style.width;c.indexOf("px")>-1&&(c=parseFloat(c)),d.indexOf("px")>-1&&(d=parseFloat(d)),a(s).data("formProp",{top:parseFloat(a(b.w).css("top")),left:parseFloat(a(b.w).css("left")),width:d,height:c,dataheight:a(y).height(),datawidth:a(y).width()}),b.w.remove(),b.o&&b.o.remove()}}),H||a("."+a.jgrid.jqID(d.overlayClass)).click(function(){return m()?(a.jgrid.hideModal("#"+a.jgrid.jqID(B.themodal),{gb:"#gbox_"+a.jgrid.jqID(x),jqm:d.jqModal,onClose:b[s.p.id].onClose,removemodal:b[s.p.id].removemodal,formprop:!b[s.p.id].recreateForm,form:b[s.p.id].form}),!1):!1}),a(".fm-button","#"+a.jgrid.jqID(B.themodal)).hover(function(){a(this).addClass(h.hover)},function(){a(this).removeClass(h.hover)}),a("#sData",t).click(function(){return u={},a(".FormError",y).hide(),e(),"_empty"===u[s.p.id+"_id"]?k():d.checkOnSubmit===!0?(v=l(u,s.p.savedData),v?(a(y).data("disabled",!0),a(".confirm","#"+a.jgrid.jqID(B.themodal)).show()):k()):k(),!1}),a("#cData",t).click(function(){return m()?(a.jgrid.hideModal("#"+a.jgrid.jqID(B.themodal),{gb:"#gbox_"+a.jgrid.jqID(x),jqm:d.jqModal,onClose:b[s.p.id].onClose,removemodal:b[s.p.id].removemodal,formprop:!b[s.p.id].recreateForm,form:b[s.p.id].form}),!1):!1}),a("#nData",t).click(function(){if(!m())return!1;a(".FormError",y).hide();var
c=p();if(c[0]=parseInt(c[0],10),-1!==c[0]&&c[1][c[0]+1]){a(s).triggerHandler("jqGridAddEditClickPgButtons",["next",a(y),c[1][c[0]]]);var
e;if(a.isFunction(d.onclickPgButtons)&&(e=d.onclickPgButtons.call(s,"next",a(y),c[1][c[0]]),void
0!==e&&e===!1))return!1;if(a("#"+a.jgrid.jqID(c[1][c[0]+1])).hasClass(h.disabled))return!1;i(c[1][c[0]+1],s,y),s.p.multiselect&&b[s.p.id].editselected||a(s).jqGrid("setSelection",c[1][c[0]+1]),a(s).triggerHandler("jqGridAddEditAfterClickPgButtons",["next",a(y),c[1][c[0]]]),a.isFunction(d.afterclickPgButtons)&&d.afterclickPgButtons.call(s,"next",a(y),c[1][c[0]+1]),r(),o(c[0]+1,c)}return!1}),a("#pData",t).click(function(){if(!m())return!1;a(".FormError",y).hide();var
c=p();if(-1!==c[0]&&c[1][c[0]-1]){a(s).triggerHandler("jqGridAddEditClickPgButtons",["prev",a(y),c[1][c[0]]]);var
e;if(a.isFunction(d.onclickPgButtons)&&(e=d.onclickPgButtons.call(s,"prev",a(y),c[1][c[0]]),void
0!==e&&e===!1))return!1;if(a("#"+a.jgrid.jqID(c[1][c[0]-1])).hasClass(h.disabled))return!1;i(c[1][c[0]-1],s,y),s.p.multiselect&&b[s.p.id].editselected||a(s).jqGrid("setSelection",c[1][c[0]-1]),a(s).triggerHandler("jqGridAddEditAfterClickPgButtons",["prev",a(y),c[1][c[0]]]),a.isFunction(d.afterclickPgButtons)&&d.afterclickPgButtons.call(s,"prev",a(y),c[1][c[0]-1]),r(),o(c[0]-1,c)}return!1}),a(s).triggerHandler("jqGridAddEditAfterShowForm",[a(y),w]),a.isFunction(b[s.p.id].afterShowForm)&&b[s.p.id].afterShowForm.call(s,a(y),w);var
Y=p();o(Y[0],Y)}}})},viewGridRow:function(c,d){var
e=a.jgrid.getRegional(this[0],"view"),f=this[0].p.styleUI,g=a.jgrid.styleUI[f].formedit,h=a.jgrid.styleUI[f].common;return d=a.extend(!0,{top:0,left:0,width:500,datawidth:"auto",height:"auto",dataheight:"auto",modal:!1,overlay:30,drag:!0,resize:!0,jqModal:!0,closeOnEscape:!1,labelswidth:"30%",closeicon:[],navkeys:[!1,38,40],onClose:null,beforeShowForm:null,beforeInitData:null,viewPagerButtons:!0,recreateForm:!1,removemodal:!0,form:"view"},e,d||{}),b[a(this)[0].p.id]=d,this.each(function(){function
e(){(b[l.p.id].closeOnEscape===!0||b[l.p.id].navkeys[0]===!0)&&setTimeout(function(){a(".ui-jqdialog-titlebar-close","#"+a.jgrid.jqID(r.modalhead)).attr("tabindex","-1").focus()},0)}function
f(b,c,e,f){var
g,i,j,k,l,m,n,o,p,q=0,r=[],s=!1,t="<td class='CaptionTD form-view-label "+h.content+"' width='"+d.labelswidth+"'>&#160;</td><td class='DataTD form-view-data ui-helper-reset "+h.content+"'>&#160;</td>",u="",v="<td class='CaptionTD form-view-label "+h.content+"'>&#160;</td><td class='DataTD form-view-data "+h.content+"'>&#160;</td>",w=["integer","number","currency"],x=0,y=0;for(m=1;f>=m;m++)u+=1===m?t:v;if(a(c.p.colModel).each(function(){i=this.editrules&&this.editrules.edithidden===!0?!1:this.hidden===!0?!0:!1,i||"right"!==this.align||(this.formatter&&-1!==a.inArray(this.formatter,w)?x=Math.max(x,parseInt(this.width,10)):y=Math.max(y,parseInt(this.width,10)))}),n=0!==x?x:0!==y?y:0,s=a(c).jqGrid("getInd",b),a(c.p.colModel).each(function(b){if(g=this.name,o=!1,i=this.editrules&&this.editrules.edithidden===!0?!1:this.hidden===!0?!0:!1,l=i?"style='display:none'":"",p="boolean"!=typeof
this.viewable?!0:this.viewable,"cb"!==g&&"subgrid"!==g&&"rn"!==g&&p){k=s===!1?"":g===c.p.ExpandColumn&&c.p.treeGrid===!0?a("td:eq("+b+")",c.rows[s]).text():a("td:eq("+b+")",c.rows[s]).html(),o="right"===this.align&&0!==n?!0:!1;var
d=a.extend({},{rowabove:!1,rowcontent:""},this.formoptions||{}),h=parseInt(d.rowpos,10)||q+1,m=parseInt(2*(parseInt(d.colpos,10)||1),10);if(d.rowabove){var
t=a("<tr><td class='contentinfo' colspan='"+2*f+"'>"+d.rowcontent+"</td></tr>");a(e).append(t),t[0].rp=h}j=a(e).find("tr[rowpos="+h+"]"),0===j.length&&(j=a("<tr "+l+" rowpos='"+h+"'></tr>").addClass("FormData").attr("id","trv_"+g),a(j).append(u),a(e).append(j),j[0].rp=h),a("td:eq("+(m-2)+")",j[0]).html("<b>"+(void
0===d.label?c.p.colNames[b]:d.label)+"</b>"),a("td:eq("+(m-1)+")",j[0]).append("<span>"+k+"</span>").attr("id","v_"+g),o&&a("td:eq("+(m-1)+") span",j[0]).css({"text-align":"right",width:n+"px"}),r[q]=b,q++}}),q>0){var
z=a("<tr class='FormData' style='display:none'><td class='CaptionTD'></td><td colspan='"+(2*f-1)+"' class='DataTD'><input class='FormElement' id='id_g' type='text' name='id' value='"+b+"'/></td></tr>");z[0].rp=q+99,a(e).append(z)}return r}function
i(b,c){var
d,e,f,g,h=0;g=a(c).jqGrid("getInd",b,!0),g&&(a("td",g).each(function(b){d=c.p.colModel[b].name,e=c.p.colModel[b].editrules&&c.p.colModel[b].editrules.edithidden===!0?!1:c.p.colModel[b].hidden===!0?!0:!1,"cb"!==d&&"subgrid"!==d&&"rn"!==d&&(f=d===c.p.ExpandColumn&&c.p.treeGrid===!0?a(this).text():a(this).html(),d=a.jgrid.jqID("v_"+d),a("#"+d+" span","#"+o).html(f),e&&a("#"+d,"#"+o).parents("tr:first").hide(),h++)}),h>0&&a("#id_g","#"+o).val(b))}function
j(b,c){var
d=c[1].length-1;0===b?a("#pData","#"+o+"_2").addClass(h.disabled):void
0!==c[1][b-1]&&a("#"+a.jgrid.jqID(c[1][b-1])).hasClass(h.disabled)?a("#pData",o+"_2").addClass(h.disabled):a("#pData","#"+o+"_2").removeClass(h.disabled),b===d?a("#nData","#"+o+"_2").addClass(h.disabled):void
0!==c[1][b+1]&&a("#"+a.jgrid.jqID(c[1][b+1])).hasClass(h.disabled)?a("#nData",o+"_2").addClass(h.disabled):a("#nData","#"+o+"_2").removeClass(h.disabled)}function
k(){var
b=a(l).jqGrid("getDataIDs"),c=a("#id_g","#"+o).val(),d=a.inArray(c,b);return[d,b]}var
l=this;if(l.grid&&c){var
m=l.p.id,n="ViewGrid_"+a.jgrid.jqID(m),o="ViewTbl_"+a.jgrid.jqID(m),p="ViewGrid_"+m,q="ViewTbl_"+m,r={themodal:"viewmod"+m,modalhead:"viewhd"+m,modalcontent:"viewcnt"+m,scrollelm:n},s=a.isFunction(b[l.p.id].beforeInitData)?b[l.p.id].beforeInitData:!1,t=!0,u=1,v=0;b[l.p.id].styleUI=l.p.styleUI||"jQueryUI",d.recreateForm||a(l).data("viewProp")&&a.extend(b[a(this)[0].p.id],a(l).data("viewProp"));var
w=isNaN(b[a(this)[0].p.id].dataheight)?b[a(this)[0].p.id].dataheight:b[a(this)[0].p.id].dataheight+"px",x=isNaN(b[a(this)[0].p.id].datawidth)?b[a(this)[0].p.id].datawidth:b[a(this)[0].p.id].datawidth+"px",y=a("<form name='FormPost' id='"+p+"' class='FormGrid' style='width:"+x+";height:"+w+";'></form>"),z=a("<table id='"+q+"' class='EditTable ViewTable'><tbody></tbody></table>");if(a(l.p.colModel).each(function(){var
a=this.formoptions;u=Math.max(u,a?a.colpos||0:0),v=Math.max(v,a?a.rowpos||0:0)}),a(y).append(z),s&&(t=s.call(l,y),void
0===t&&(t=!0)),t!==!1){f(c,l,z,u);var
A="rtl"===l.p.direction?!0:!1,B=A?"nData":"pData",C=A?"pData":"nData",D="<a id='"+B+"' class='fm-button "+h.button+"'><span class='"+h.icon_base+" "+g.icon_prev+"'></span></a>",E="<a id='"+C+"' class='fm-button "+h.button+"'><span class='"+h.icon_base+" "+g.icon_next+"'></span></a>",F="<a id='cData' class='fm-button "+h.button+"'>"+d.bClose+"</a>";if(v>0){var
G=[];a.each(a(z)[0].rows,function(a,b){G[a]=b}),G.sort(function(a,b){return a.rp>b.rp?1:a.rp<b.rp?-1:0}),a.each(G,function(b,c){a("tbody",z).append(c)})}d.gbox="#gbox_"+a.jgrid.jqID(m);var
H=a("<div></div>").append(y).append("<table border='0' class='EditTable' id='"+o+"_2'><tbody><tr id='Act_Buttons'><td class='navButton' width='"+d.labelswidth+"'>"+(A?E+D:D+E)+"</td><td class='EditButton'>"+F+"</td></tr></tbody></table>");a.jgrid.createModal(r,H,b[a(this)[0].p.id],"#gview_"+a.jgrid.jqID(l.p.id),a("#gview_"+a.jgrid.jqID(l.p.id))[0]),A&&(a("#pData, #nData","#"+o+"_2").css("float","right"),a(".EditButton","#"+o+"_2").css("text-align","left")),d.viewPagerButtons||a("#pData, #nData","#"+o+"_2").hide(),H=null,a("#"+r.themodal).keydown(function(c){if(27===c.which)return b[l.p.id].closeOnEscape&&a.jgrid.hideModal("#"+a.jgrid.jqID(r.themodal),{gb:d.gbox,jqm:d.jqModal,onClose:d.onClose,removemodal:b[l.p.id].removemodal,formprop:!b[l.p.id].recreateForm,form:b[l.p.id].form}),!1;if(d.navkeys[0]===!0){if(c.which===d.navkeys[1])return a("#pData","#"+o+"_2").trigger("click"),!1;if(c.which===d.navkeys[2])return a("#nData","#"+o+"_2").trigger("click"),!1}}),d.closeicon=a.extend([!0,"left",g.icon_close],d.closeicon),d.closeicon[0]===!0&&a("#cData","#"+o+"_2").addClass("right"===d.closeicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='"+h.icon_base+" "+d.closeicon[2]+"'></span>"),a.isFunction(d.beforeShowForm)&&d.beforeShowForm.call(l,a("#"+n)),a.jgrid.viewModal("#"+a.jgrid.jqID(r.themodal),{gbox:"#gbox_"+a.jgrid.jqID(m),jqm:d.jqModal,overlay:d.overlay,modal:d.modal,onHide:function(b){a(l).data("viewProp",{top:parseFloat(a(b.w).css("top")),left:parseFloat(a(b.w).css("left")),width:a(b.w).width(),height:a(b.w).height(),dataheight:a("#"+n).height(),datawidth:a("#"+n).width()}),b.w.remove(),b.o&&b.o.remove()}}),a(".fm-button:not(."+h.disabled+")","#"+o+"_2").hover(function(){a(this).addClass(h.hover)},function(){a(this).removeClass(h.hover)}),e(),a("#cData","#"+o+"_2").click(function(){return a.jgrid.hideModal("#"+a.jgrid.jqID(r.themodal),{gb:"#gbox_"+a.jgrid.jqID(m),jqm:d.jqModal,onClose:d.onClose,removemodal:b[l.p.id].removemodal,formprop:!b[l.p.id].recreateForm,form:b[l.p.id].form}),!1}),a("#nData","#"+o+"_2").click(function(){a("#FormError","#"+o).hide();var
b=k();return b[0]=parseInt(b[0],10),-1!==b[0]&&b[1][b[0]+1]&&(a.isFunction(d.onclickPgButtons)&&d.onclickPgButtons.call(l,"next",a("#"+n),b[1][b[0]]),i(b[1][b[0]+1],l),a(l).jqGrid("setSelection",b[1][b[0]+1]),a.isFunction(d.afterclickPgButtons)&&d.afterclickPgButtons.call(l,"next",a("#"+n),b[1][b[0]+1]),j(b[0]+1,b)),e(),!1}),a("#pData","#"+o+"_2").click(function(){a("#FormError","#"+o).hide();var
b=k();return-1!==b[0]&&b[1][b[0]-1]&&(a.isFunction(d.onclickPgButtons)&&d.onclickPgButtons.call(l,"prev",a("#"+n),b[1][b[0]]),i(b[1][b[0]-1],l),a(l).jqGrid("setSelection",b[1][b[0]-1]),a.isFunction(d.afterclickPgButtons)&&d.afterclickPgButtons.call(l,"prev",a("#"+n),b[1][b[0]-1]),j(b[0]-1,b)),e(),!1});var
I=k();j(I[0],I)}}})},delGridRow:function(c,d){var
e=a.jgrid.getRegional(this[0],"del"),f=this[0].p.styleUI,g=a.jgrid.styleUI[f].formedit,h=a.jgrid.styleUI[f].common;return d=a.extend(!0,{top:0,left:0,width:240,height:"auto",dataheight:"auto",modal:!1,overlay:30,drag:!0,resize:!0,url:"",mtype:"POST",reloadAfterSubmit:!0,beforeShowForm:null,beforeInitData:null,afterShowForm:null,beforeSubmit:null,onclickSubmit:null,afterSubmit:null,jqModal:!0,closeOnEscape:!1,delData:{},delicon:[],cancelicon:[],onClose:null,ajaxDelOptions:{},processing:!1,serializeDelData:null,useDataProxy:!1},e,d||{}),b[a(this)[0].p.id]=d,this.each(function(){var
e=this;if(e.grid&&c){var
f,i,j,k,l=a.isFunction(b[e.p.id].beforeShowForm),m=a.isFunction(b[e.p.id].afterShowForm),n=a.isFunction(b[e.p.id].beforeInitData)?b[e.p.id].beforeInitData:!1,o=e.p.id,p={},q=!0,r="DelTbl_"+a.jgrid.jqID(o),s="DelTbl_"+o,t={themodal:"delmod"+o,modalhead:"delhd"+o,modalcontent:"delcnt"+o,scrollelm:r};if(b[e.p.id].styleUI=e.p.styleUI||"jQueryUI",a.isArray(c)&&(c=c.join()),void
0!==a("#"+a.jgrid.jqID(t.themodal))[0]){if(n&&(q=n.call(e,a("#"+r)),void
0===q&&(q=!0)),q===!1)return;a("#DelData>td","#"+r).text(c),a("#DelError","#"+r).hide(),b[e.p.id].processing===!0&&(b[e.p.id].processing=!1,a("#dData","#"+r).removeClass(h.active)),l&&b[e.p.id].beforeShowForm.call(e,a("#"+r)),a.jgrid.viewModal("#"+a.jgrid.jqID(t.themodal),{gbox:"#gbox_"+a.jgrid.jqID(o),jqm:b[e.p.id].jqModal,jqM:!1,overlay:b[e.p.id].overlay,modal:b[e.p.id].modal}),m&&b[e.p.id].afterShowForm.call(e,a("#"+r))}else{var
u=isNaN(b[e.p.id].dataheight)?b[e.p.id].dataheight:b[e.p.id].dataheight+"px",v=isNaN(d.datawidth)?d.datawidth:d.datawidth+"px",w="<div id='"+s+"' class='formdata' style='width:"+v+";overflow:auto;position:relative;height:"+u+";'>";w+="<table class='DelTable'><tbody>",w+="<tr id='DelError' style='display:none'><td class='"+h.error+"'></td></tr>",w+="<tr id='DelData' style='display:none'><td >"+c+"</td></tr>",w+='<tr><td class="delmsg" style="white-space:pre;">'+b[e.p.id].msg+"</td></tr><tr><td >&#160;</td></tr>",w+="</tbody></table></div>";var
x="<a id='dData' class='fm-button "+h.button+"'>"+d.bSubmit+"</a>",y="<a id='eData' class='fm-button "+h.button+"'>"+d.bCancel+"</a>";if(w+="<table class='EditTable ui-common-table' id='"+r+"_2'><tbody><tr><td><hr class='"+h.content+"' style='margin:1px'/></td></tr><tr><td class='DelButton EditButton'>"+x+"&#160;"+y+"</td></tr></tbody></table>",d.gbox="#gbox_"+a.jgrid.jqID(o),a.jgrid.createModal(t,w,b[e.p.id],"#gview_"+a.jgrid.jqID(e.p.id),a("#gview_"+a.jgrid.jqID(e.p.id))[0]),n&&(q=n.call(e,a(w)),void
0===q&&(q=!0)),q===!1)return;a(".fm-button","#"+r+"_2").hover(function(){a(this).addClass(h.hover)},function(){a(this).removeClass(h.hover)}),d.delicon=a.extend([!0,"left",g.icon_del],b[e.p.id].delicon),d.cancelicon=a.extend([!0,"left",g.icon_cancel],b[e.p.id].cancelicon),d.delicon[0]===!0&&a("#dData","#"+r+"_2").addClass("right"===d.delicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='"+h.icon_base+" "+d.delicon[2]+"'></span>"),d.cancelicon[0]===!0&&a("#eData","#"+r+"_2").addClass("right"===d.cancelicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='"+h.icon_base+" "+d.cancelicon[2]+"'></span>"),a("#dData","#"+r+"_2").click(function(){var
c,g=[!0,""],l=a("#DelData>td","#"+r).text();if(p={},a.isFunction(b[e.p.id].onclickSubmit)&&(p=b[e.p.id].onclickSubmit.call(e,b[e.p.id],l)||{}),a.isFunction(b[e.p.id].beforeSubmit)&&(g=b[e.p.id].beforeSubmit.call(e,l)),g[0]&&!b[e.p.id].processing){if(b[e.p.id].processing=!0,j=e.p.prmNames,f=a.extend({},b[e.p.id].delData,p),k=j.oper,f[k]=j.deloper,i=j.id,l=String(l).split(","),!l.length)return!1;for(c
in
l)l.hasOwnProperty(c)&&(l[c]=a.jgrid.stripPref(e.p.idPrefix,l[c]));f[i]=l.join(),a(this).addClass(h.active);var
m=a.extend({url:b[e.p.id].url||a(e).jqGrid("getGridParam","editurl"),type:b[e.p.id].mtype,data:a.isFunction(b[e.p.id].serializeDelData)?b[e.p.id].serializeDelData.call(e,f):f,complete:function(c,i){var
j;if(a("#dData","#"+r+"_2").removeClass(h.active),c.status>=300&&304!==c.status?(g[0]=!1,a.isFunction(b[e.p.id].errorTextFormat)?g[1]=b[e.p.id].errorTextFormat.call(e,c):g[1]=i+" Status: '"+c.statusText+"'. Error code: "+c.status):a.isFunction(b[e.p.id].afterSubmit)&&(g=b[e.p.id].afterSubmit.call(e,c,f)),g[0]===!1)a("#DelError>td","#"+r).html(g[1]),a("#DelError","#"+r).show();else{if(b[e.p.id].reloadAfterSubmit&&"local"!==e.p.datatype)a(e).trigger("reloadGrid");else{if(e.p.treeGrid===!0)try{a(e).jqGrid("delTreeNode",e.p.idPrefix+l[0])}catch(k){}else
for(j=0;j<l.length;j++)a(e).jqGrid("delRowData",e.p.idPrefix+l[j]);e.p.selrow=null,e.p.selarrrow=[]}a.isFunction(b[e.p.id].afterComplete)&&setTimeout(function(){b[e.p.id].afterComplete.call(e,c,l)},500)}b[e.p.id].processing=!1,g[0]&&a.jgrid.hideModal("#"+a.jgrid.jqID(t.themodal),{gb:"#gbox_"+a.jgrid.jqID(o),jqm:d.jqModal,onClose:b[e.p.id].onClose})}},a.jgrid.ajaxOptions,b[e.p.id].ajaxDelOptions);if(m.url||b[e.p.id].useDataProxy||(a.isFunction(e.p.dataProxy)?b[e.p.id].useDataProxy=!0:(g[0]=!1,g[1]+=" "+a.jgrid.getRegional(e,"errors.nourl"))),g[0])if(b[e.p.id].useDataProxy){var
n=e.p.dataProxy.call(e,m,"del_"+e.p.id);void
0===n&&(n=[!0,""]),n[0]===!1?(g[0]=!1,g[1]=n[1]||"Error deleting the selected row!"):a.jgrid.hideModal("#"+a.jgrid.jqID(t.themodal),{gb:"#gbox_"+a.jgrid.jqID(o),jqm:d.jqModal,onClose:b[e.p.id].onClose})}else"clientArray"===m.url?(f=m.data,m.complete({status:200,statusText:""},"")):a.ajax(m)}return g[0]===!1&&(a("#DelError>td","#"+r).html(g[1]),a("#DelError","#"+r).show()),!1}),a("#eData","#"+r+"_2").click(function(){return a.jgrid.hideModal("#"+a.jgrid.jqID(t.themodal),{gb:"#gbox_"+a.jgrid.jqID(o),jqm:b[e.p.id].jqModal,onClose:b[e.p.id].onClose}),!1}),l&&b[e.p.id].beforeShowForm.call(e,a("#"+r)),a.jgrid.viewModal("#"+a.jgrid.jqID(t.themodal),{gbox:"#gbox_"+a.jgrid.jqID(o),jqm:b[e.p.id].jqModal,overlay:b[e.p.id].overlay,modal:b[e.p.id].modal}),m&&b[e.p.id].afterShowForm.call(e,a("#"+r))}b[e.p.id].closeOnEscape===!0&&setTimeout(function(){a(".ui-jqdialog-titlebar-close","#"+a.jgrid.jqID(t.modalhead)).attr("tabindex","-1").focus()},0)}})},navGrid:function(b,c,d,e,f,g,h){var
i=a.jgrid.getRegional(this[0],"nav"),j=this[0].p.styleUI,k=a.jgrid.styleUI[j].navigator,l=a.jgrid.styleUI[j].common;return c=a.extend({edit:!0,editicon:k.icon_edit_nav,add:!0,addicon:k.icon_add_nav,del:!0,delicon:k.icon_del_nav,search:!0,searchicon:k.icon_search_nav,refresh:!0,refreshicon:k.icon_refresh_nav,refreshstate:"firstpage",view:!1,viewicon:k.icon_view_nav,position:"left",closeOnEscape:!0,beforeRefresh:null,afterRefresh:null,cloneToTop:!1,alertwidth:200,alertheight:"auto",alerttop:null,alertleft:null,alertzIndex:null,dropmenu:!1,navButtonText:""},i,c||{}),this.each(function(){if(!this.p.navGrid){var
k,m,n,o={themodal:"alertmod_"+this.p.id,modalhead:"alerthd_"+this.p.id,modalcontent:"alertcnt_"+this.p.id},p=this;if(p.grid&&"string"==typeof
b){a(p).data("navGrid")||a(p).data("navGrid",c),n=a(p).data("navGrid"),p.p.force_regional&&(n=a.extend(n,i)),void
0===a("#"+o.themodal)[0]&&(n.alerttop||n.alertleft||(void
0!==window.innerWidth?(n.alertleft=window.innerWidth,n.alerttop=window.innerHeight):void
0!==document.documentElement&&void
0!==document.documentElement.clientWidth&&0!==document.documentElement.clientWidth?(n.alertleft=document.documentElement.clientWidth,n.alerttop=document.documentElement.clientHeight):(n.alertleft=1024,n.alerttop=768),n.alertleft=n.alertleft/2-parseInt(n.alertwidth,10)/2,n.alerttop=n.alerttop/2-25),a.jgrid.createModal(o,"<div>"+n.alerttext+"</div><span tabindex='0'><span tabindex='-1' id='jqg_alrt'></span></span>",{gbox:"#gbox_"+a.jgrid.jqID(p.p.id),jqModal:!0,drag:!0,resize:!0,caption:n.alertcap,top:n.alerttop,left:n.alertleft,width:n.alertwidth,height:n.alertheight,closeOnEscape:n.closeOnEscape,zIndex:n.alertzIndex,styleUI:p.p.styleUI},"#gview_"+a.jgrid.jqID(p.p.id),a("#gbox_"+a.jgrid.jqID(p.p.id))[0],!0));var
q,r=1,s=function(){a(this).hasClass(l.disabled)||a(this).addClass(l.hover)},t=function(){a(this).removeClass(l.hover)};for(n.cloneToTop&&p.p.toppager&&(r=2),q=0;r>q;q++){var
u,v,w,x=a("<table class='ui-pg-table navtable ui-common-table'><tbody><tr></tr></tbody></table>"),y="<td class='ui-pg-button "+l.disabled+"' style='width:4px;'><span class='ui-separator'></span></td>";0===q?(v=b,w=p.p.id,v===p.p.toppager&&(w+="_top",r=1)):(v=p.p.toppager,w=p.p.id+"_top"),"rtl"===p.p.direction&&a(x).attr("dir","rtl").css("float","right"),e=e||{},n.add&&(u=a("<td class='ui-pg-button "+l.cornerall+"'></td>"),a(u).append("<div class='ui-pg-div'><span class='"+l.icon_base+" "+n.addicon+"'></span>"+n.addtext+"</div>"),a("tr",x).append(u),a(u,x).attr({title:n.addtitle||"",id:e.id||"add_"+w}).click(function(){return a(this).hasClass(l.disabled)||(a.isFunction(n.addfunc)?n.addfunc.call(p):a(p).jqGrid("editGridRow","new",e)),!1}).hover(s,t),u=null),d=d||{},n.edit&&(u=a("<td class='ui-pg-button "+l.cornerall+"'></td>"),a(u).append("<div class='ui-pg-div'><span class='"+l.icon_base+" "+n.editicon+"'></span>"+n.edittext+"</div>"),a("tr",x).append(u),a(u,x).attr({title:n.edittitle||"",id:d.id||"edit_"+w}).click(function(){if(!a(this).hasClass(l.disabled)){var
b=p.p.selrow;b?a.isFunction(n.editfunc)?n.editfunc.call(p,b):a(p).jqGrid("editGridRow",b,d):(a.jgrid.viewModal("#"+o.themodal,{gbox:"#gbox_"+a.jgrid.jqID(p.p.id),jqm:!0}),a("#jqg_alrt").focus())}return!1}).hover(s,t),u=null),h=h||{},n.view&&(u=a("<td class='ui-pg-button "+l.cornerall+"'></td>"),a(u).append("<div class='ui-pg-div'><span class='"+l.icon_base+" "+n.viewicon+"'></span>"+n.viewtext+"</div>"),a("tr",x).append(u),a(u,x).attr({title:n.viewtitle||"",id:h.id||"view_"+w}).click(function(){if(!a(this).hasClass(l.disabled)){var
b=p.p.selrow;b?a.isFunction(n.viewfunc)?n.viewfunc.call(p,b):a(p).jqGrid("viewGridRow",b,h):(a.jgrid.viewModal("#"+o.themodal,{gbox:"#gbox_"+a.jgrid.jqID(p.p.id),jqm:!0}),a("#jqg_alrt").focus())}return!1}).hover(s,t),u=null),f=f||{},n.del&&(u=a("<td class='ui-pg-button "+l.cornerall+"'></td>"),a(u).append("<div class='ui-pg-div'><span class='"+l.icon_base+" "+n.delicon+"'></span>"+n.deltext+"</div>"),a("tr",x).append(u),a(u,x).attr({title:n.deltitle||"",id:f.id||"del_"+w}).click(function(){if(!a(this).hasClass(l.disabled)){var
b;p.p.multiselect?(b=p.p.selarrrow,0===b.length&&(b=null)):b=p.p.selrow,b?a.isFunction(n.delfunc)?n.delfunc.call(p,b):a(p).jqGrid("delGridRow",b,f):(a.jgrid.viewModal("#"+o.themodal,{gbox:"#gbox_"+a.jgrid.jqID(p.p.id),jqm:!0}),a("#jqg_alrt").focus())}return!1}).hover(s,t),u=null),(n.add||n.edit||n.del||n.view)&&a("tr",x).append(y),g=g||{},n.search&&(u=a("<td class='ui-pg-button "+l.cornerall+"'></td>"),a(u).append("<div class='ui-pg-div'><span class='"+l.icon_base+" "+n.searchicon+"'></span>"+n.searchtext+"</div>"),a("tr",x).append(u),a(u,x).attr({title:n.searchtitle||"",id:g.id||"search_"+w}).click(function(){return a(this).hasClass(l.disabled)||(a.isFunction(n.searchfunc)?n.searchfunc.call(p,g):a(p).jqGrid("searchGrid",g)),!1}).hover(s,t),g.showOnLoad&&g.showOnLoad===!0&&a(u,x).click(),u=null),n.refresh&&(u=a("<td class='ui-pg-button "+l.cornerall+"'></td>"),a(u).append("<div class='ui-pg-div'><span class='"+l.icon_base+" "+n.refreshicon+"'></span>"+n.refreshtext+"</div>"),a("tr",x).append(u),a(u,x).attr({title:n.refreshtitle||"",id:"refresh_"+w}).click(function(){if(!a(this).hasClass(l.disabled)){a.isFunction(n.beforeRefresh)&&n.beforeRefresh.call(p),p.p.search=!1,p.p.resetsearch=!0;try{if("currentfilter"!==n.refreshstate){var
b=p.p.id;p.p.postData.filters="";try{a("#fbox_"+a.jgrid.jqID(b)).jqFilter("resetFilter")}catch(c){}a.isFunction(p.clearToolbar)&&p.clearToolbar.call(p,!1)}}catch(d){}switch(n.refreshstate){case"firstpage":a(p).trigger("reloadGrid",[{page:1}]);break;case"current":case"currentfilter":a(p).trigger("reloadGrid",[{current:!0}])}a.isFunction(n.afterRefresh)&&n.afterRefresh.call(p)}return!1}).hover(s,t),u=null),m=a(".ui-jqgrid").css("font-size")||"11px",a("body").append("<div id='testpg2' class='ui-jqgrid "+a.jgrid.styleUI[j].base.entrieBox+"' style='font-size:"+m+";visibility:hidden;' ></div>"),k=a(x).clone().appendTo("#testpg2").width(),a("#testpg2").remove(),p.p._nvtd&&(n.dropmenu?(x=null,a(p).jqGrid("_buildNavMenu",v,w,c,d,e,f,g,h)):k>p.p._nvtd[0]?(p.p.responsive?(x=null,a(p).jqGrid("_buildNavMenu",v,w,c,d,e,f,g,h)):a(v+"_"+n.position,v).append(x).width(k),p.p._nvtd[0]=k):a(v+"_"+n.position,v).append(x),p.p._nvtd[1]=k),p.p.navGrid=!0}p.p.storeNavOptions&&(p.p.navOptions=n,p.p.editOptions=d,p.p.addOptions=e,p.p.delOptions=f,p.p.searchOptions=g,p.p.viewOptions=h,p.p.navButtons=[])}}})},navButtonAdd:function(b,c){var
d=this[0].p.styleUI,e=a.jgrid.styleUI[d].navigator;return c=a.extend({caption:"newButton",title:"",buttonicon:e.icon_newbutton_nav,onClickButton:null,position:"last",cursor:"pointer",internal:!1},c||{}),this.each(function(){if(this.grid){"string"==typeof
b&&0!==b.indexOf("#")&&(b="#"+a.jgrid.jqID(b));var
e=a(".navtable",b)[0],f=this,g=a.jgrid.styleUI[d].common.disabled,h=a.jgrid.styleUI[d].common.hover,i=a.jgrid.styleUI[d].common.cornerall,j=a.jgrid.styleUI[d].common.icon_base;if(f.p.storeNavOptions&&!c.internal&&f.p.navButtons.push([b,c]),e){if(c.id&&void
0!==a("#"+a.jgrid.jqID(c.id),e)[0])return;var
k=a("<td></td>");"NONE"===c.buttonicon.toString().toUpperCase()?a(k).addClass("ui-pg-button "+i).append("<div class='ui-pg-div'>"+c.caption+"</div>"):a(k).addClass("ui-pg-button "+i).append("<div class='ui-pg-div'><span class='"+j+" "+c.buttonicon+"'></span>"+c.caption+"</div>"),c.id&&a(k).attr("id",c.id),"first"===c.position?0===e.rows[0].cells.length?a("tr",e).append(k):a("tr td:eq(0)",e).before(k):a("tr",e).append(k),a(k,e).attr("title",c.title||"").click(function(b){return a(this).hasClass(g)||a.isFunction(c.onClickButton)&&c.onClickButton.call(f,b),!1}).hover(function(){a(this).hasClass(g)||a(this).addClass(h)},function(){a(this).removeClass(h)})}else
if(e=a(".dropdownmenu",b)[0]){var
l=a(e).val(),m=c.id||a.jgrid.randId(),n=a('<li class="ui-menu-item" role="presentation"><a class="'+i+' g-menu-item" tabindex="0" role="menuitem" id="'+m+'">'+(c.caption||c.title)+"</a></li>");l&&("first"===c.position?a("#"+l).prepend(n):a("#"+l).append(n),a(n).on("click",function(b){return a(this).hasClass(g)||(a("#"+l).hide(),a.isFunction(c.onClickButton)&&c.onClickButton.call(f,b)),!1}).find("a").hover(function(){a(this).hasClass(g)||a(this).addClass(h)},function(){a(this).removeClass(h)}))}}})},navSeparatorAdd:function(b,c){var
d=this[0].p.styleUI,e=a.jgrid.styleUI[d].common;return c=a.extend({sepclass:"ui-separator",sepcontent:"",position:"last"},c||{}),this.each(function(){if(this.grid){"string"==typeof
b&&0!==b.indexOf("#")&&(b="#"+a.jgrid.jqID(b));var
d,f,g=a(".navtable",b)[0];this.p.storeNavOptions&&this.p.navButtons.push([b,c]),g?(d="<td class='ui-pg-button "+e.disabled+"' style='width:4px;'><span class='"+c.sepclass+"'></span>"+c.sepcontent+"</td>","first"===c.position?0===g.rows[0].cells.length?a("tr",g).append(d):a("tr td:eq(0)",g).before(d):a("tr",g).append(d)):(g=a(".dropdownmenu",b)[0],d="<li class='ui-menu-item "+e.disabled+"' style='width:100%' role='presentation'><hr class='ui-separator-li'></li>",g&&(f=a(g).val(),f&&("first"===c.position?a("#"+f).prepend(d):a("#"+f).append(d))))}})},_buildNavMenu:function(b,c,d,e,f,g,h,i){return this.each(function(){var
j=this,k=a.jgrid.getRegional(j,"nav"),l=j.p.styleUI,m=(a.jgrid.styleUI[l].navigator,a.jgrid.styleUI[l].filter),n=a.jgrid.styleUI[l].common,o="form_menu_"+a.jgrid.randId(),p=d.navButtonText?d.navButtonText:k.selectcaption||"Actions",q="<button class='dropdownmenu "+n.button+"' value='"+o+"'>"+p+"</button>";a(b+"_"+d.position,b).append(q);var
r={themodal:"alertmod_"+this.p.id,modalhead:"alerthd_"+this.p.id,modalcontent:"alertcnt_"+this.p.id},s=function(){var
b,k,l=a(".ui-jqgrid-view").css("font-size")||"11px",p=a('<ul id="'+o+'" class="ui-nav-menu modal-content" role="menu" tabindex="0" style="display:none;font-size:'+l+'"></ul>');d.add&&(f=f||{},b=f.id||"add_"+c,k=a('<li class="ui-menu-item" role="presentation"><a class="'+n.cornerall+' g-menu-item" tabindex="0" role="menuitem" id="'+b+'">'+(d.addtext||d.addtitle)+"</a></li>").click(function(){return a(this).hasClass(n.disabled)||(a.isFunction(d.addfunc)?d.addfunc.call(j):a(j).jqGrid("editGridRow","new",f),a(p).hide()),!1}),a(p).append(k)),d.edit&&(e=e||{},b=e.id||"edit_"+c,k=a('<li class="ui-menu-item" role="presentation"><a class="'+n.cornerall+' g-menu-item" tabindex="0" role="menuitem" id="'+b+'">'+(d.edittext||d.edittitle)+"</a></li>").click(function(){if(!a(this).hasClass(n.disabled)){var
b=j.p.selrow;b?a.isFunction(d.editfunc)?d.editfunc.call(j,b):a(j).jqGrid("editGridRow",b,e):(a.jgrid.viewModal("#"+r.themodal,{gbox:"#gbox_"+a.jgrid.jqID(j.p.id),jqm:!0}),a("#jqg_alrt").focus()),a(p).hide()}return!1}),a(p).append(k)),d.view&&(i=i||{},b=i.id||"view_"+c,k=a('<li class="ui-menu-item" role="presentation"><a class="'+n.cornerall+' g-menu-item" tabindex="0" role="menuitem" id="'+b+'">'+(d.viewtext||d.viewtitle)+"</a></li>").click(function(){if(!a(this).hasClass(n.disabled)){var
b=j.p.selrow;b?a.isFunction(d.editfunc)?d.viewfunc.call(j,b):a(j).jqGrid("viewGridRow",b,i):(a.jgrid.viewModal("#"+r.themodal,{gbox:"#gbox_"+a.jgrid.jqID(j.p.id),jqm:!0}),a("#jqg_alrt").focus()),a(p).hide()}return!1}),a(p).append(k)),d.del&&(g=g||{},b=g.id||"del_"+c,k=a('<li class="ui-menu-item" role="presentation"><a class="'+n.cornerall+' g-menu-item" tabindex="0" role="menuitem" id="'+b+'">'+(d.deltext||d.deltitle)+"</a></li>").click(function(){if(!a(this).hasClass(n.disabled)){var
b;j.p.multiselect?(b=j.p.selarrrow,0===b.length&&(b=null)):b=j.p.selrow,b?a.isFunction(d.delfunc)?d.delfunc.call(j,b):a(j).jqGrid("delGridRow",b,g):(a.jgrid.viewModal("#"+r.themodal,{gbox:"#gbox_"+a.jgrid.jqID(j.p.id),jqm:!0}),a("#jqg_alrt").focus()),a(p).hide()}return!1}),a(p).append(k)),(d.add||d.edit||d.del||d.view)&&a(p).append("<li class='ui-menu-item "+n.disabled+"' style='width:100%' role='presentation'><hr class='ui-separator-li'></li>"),d.search&&(h=h||{},b=h.id||"search_"+c,k=a('<li class="ui-menu-item" role="presentation"><a class="'+n.cornerall+' g-menu-item" tabindex="0" role="menuitem" id="'+b+'">'+(d.searchtext||d.searchtitle)+"</a></li>").click(function(){return a(this).hasClass(n.disabled)||(a.isFunction(d.searchfunc)?d.searchfunc.call(j,h):a(j).jqGrid("searchGrid",h),a(p).hide()),!1}),a(p).append(k),h.showOnLoad&&h.showOnLoad===!0&&a(k).click()),d.refresh&&(b=h.id||"search_"+c,k=a('<li class="ui-menu-item" role="presentation"><a class="'+n.cornerall+' g-menu-item" tabindex="0" role="menuitem" id="'+b+'">'+(d.refreshtext||d.refreshtitle)+"</a></li>").click(function(){if(!a(this).hasClass(n.disabled)){a.isFunction(d.beforeRefresh)&&d.beforeRefresh.call(j),j.p.search=!1,j.p.resetsearch=!0;try{if("currentfilter"!==d.refreshstate){var
b=j.p.id;j.p.postData.filters="";try{a("#fbox_"+a.jgrid.jqID(b)).jqFilter("resetFilter")}catch(c){}a.isFunction(j.clearToolbar)&&j.clearToolbar.call(j,!1)}}catch(e){}switch(d.refreshstate){case"firstpage":a(j).trigger("reloadGrid",[{page:1}]);break;case"current":case"currentfilter":a(j).trigger("reloadGrid",[{current:!0}])}a.isFunction(d.afterRefresh)&&d.afterRefresh.call(j),a(p).hide()}return!1}),a(p).append(k)),a(p).hide(),a("body").append(p),a("#"+o).addClass("ui-menu "+m.menu_widget),a("#"+o+" > li > a").hover(function(){a(this).addClass(n.hover)},function(){a(this).removeClass(n.hover)})};s(),a(".dropdownmenu",b+"_"+d.position).on("click",function(b){var
c=a(this).offset(),d=c.left,e=parseInt(c.top),f=a(this).val();a("#"+f).show().css({top:e-(a("#"+f).height()+10)+"px",left:d+"px"}),b.stopPropagation()}),a("body").on("click",function(b){a(b.target).hasClass("dropdownmenu")||a("#"+o).hide()})})},GridToForm:function(b,c){return this.each(function(){var
d,e=this;if(e.grid){var
f=a(e).jqGrid("getRowData",b);if(f)for(d
in
f)f.hasOwnProperty(d)&&(a("[name="+a.jgrid.jqID(d)+"]",c).is("input:radio")||a("[name="+a.jgrid.jqID(d)+"]",c).is("input:checkbox")?a("[name="+a.jgrid.jqID(d)+"]",c).each(function(){a(this).val()==f[d]?a(this)[e.p.useProp?"prop":"attr"]("checked",!0):a(this)[e.p.useProp?"prop":"attr"]("checked",!1)}):a("[name="+a.jgrid.jqID(d)+"]",c).val(f[d]))}})},FormToGrid:function(b,c,d,e){return this.each(function(){var
f=this;if(f.grid){d||(d="set"),e||(e="first");var
g=a(c).serializeArray(),h={};a.each(g,function(a,b){h[b.name]=b.value}),"add"===d?a(f).jqGrid("addRowData",b,h,e):"set"===d&&a(f).jqGrid("setRowData",b,h)}})}})});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery","./grid.base","./grid.common"],a):a(jQuery)}(function(a){"use strict";a.fn.jqFilter=function(b){if("string"==typeof
b){var
c=a.fn.jqFilter[b];if(!c)throw"jqFilter - No such method: "+b;var
d=a.makeArray(arguments).slice(1);return c.apply(this,d)}var
e=a.extend(!0,{filter:null,columns:[],sortStrategy:null,onChange:null,afterRedraw:null,checkValues:null,error:!1,errmsg:"",errorcheck:!0,showQuery:!0,sopt:null,ops:[],operands:null,numopts:["eq","ne","lt","le","gt","ge","nu","nn","in","ni"],stropts:["eq","ne","bw","bn","ew","en","cn","nc","nu","nn","in","ni"],strarr:["text","string","blob"],groupOps:[{op:"AND",text:"AND"},{op:"OR",text:"OR"}],groupButton:!0,ruleButtons:!0,uniqueSearchFields:!1,direction:"ltr"},a.jgrid.filter,b||{});return this.each(function(){if(!this.filter){this.p=e,(null===this.p.filter||void
0===this.p.filter)&&(this.p.filter={groupOp:this.p.groupOps[0].op,rules:[],groups:[]}),null!=this.p.sortStrategy&&a.isFunction(this.p.sortStrategy)&&this.p.columns.sort(this.p.sortStrategy);var
b,c,d=this.p.columns.length,f=/msie/i.test(navigator.userAgent)&&!window.opera;if(this.p.initFilter=a.extend(!0,{},this.p.filter),d){for(b=0;d>b;b++)c=this.p.columns[b],c.stype?c.inputtype=c.stype:c.inputtype||(c.inputtype="text"),c.sorttype?c.searchtype=c.sorttype:c.searchtype||(c.searchtype="string"),void
0===c.hidden&&(c.hidden=!1),c.label||(c.label=c.name),c.index&&(c.name=c.index),c.hasOwnProperty("searchoptions")||(c.searchoptions={}),c.hasOwnProperty("searchrules")||(c.searchrules={}),void
0===c.search?c.inlist=!0:c.inlist=c.search;var
g=function(){return a("#"+a.jgrid.jqID(e.id))[0]||null},h=g(),i=a.jgrid.styleUI[h.p.styleUI||"jQueryUI"].filter,j=a.jgrid.styleUI[h.p.styleUI||"jQueryUI"].common;this.p.showQuery&&a(this).append("<table class='queryresult "+i.table_widget+"' style='display:block;max-width:440px;border:0px none;' dir='"+this.p.direction+"'><tbody><tr><td class='query'></td></tr></tbody></table>");var
k=function(b,c){var
d=[!0,""],f=g();if(a.isFunction(c.searchrules))d=c.searchrules.call(f,b,c);else
if(a.jgrid&&a.jgrid.checkValues)try{d=a.jgrid.checkValues.call(f,b,-1,c.searchrules,c.label)}catch(h){}d&&d.length&&d[0]===!1&&(e.error=!d[0],e.errmsg=d[1])};this.onchange=function(){return this.p.error=!1,this.p.errmsg="",a.isFunction(this.p.onChange)?this.p.onChange.call(this,this.p):!1},this.reDraw=function(){a("table.group:first",this).remove();var
b=this.createTableForGroup(e.filter,null);a(this).append(b),a.isFunction(this.p.afterRedraw)&&this.p.afterRedraw.call(this,this.p)},this.createTableForGroup=function(b,c){var
d,f=this,g=a("<table class='group "+i.table_widget+" ui-search-table' style='border:0px none;'><tbody></tbody></table>"),h="left";"rtl"===this.p.direction&&(h="right",g.attr("dir","rtl")),null===c&&g.append("<tr class='error' style='display:none;'><th colspan='5' class='"+j.error+"' align='"+h+"'></th></tr>");var
k=a("<tr></tr>");g.append(k);var
l=a("<th colspan='5' align='"+h+"'></th>");if(k.append(l),this.p.ruleButtons===!0){var
m=a("<select class='opsel "+i.srSelect+"'></select>");l.append(m);var
n,o="";for(d=0;d<e.groupOps.length;d++)n=b.groupOp===f.p.groupOps[d].op?" selected='selected'":"",o+="<option value='"+f.p.groupOps[d].op+"'"+n+">"+f.p.groupOps[d].text+"</option>";m.append(o).bind("change",function(){b.groupOp=a(m).val(),f.onchange()})}var
p="<span></span>";if(this.p.groupButton&&(p=a("<input type='button' value='+ {}' title='Add subgroup' class='add-group "+j.button+"'/>"),p.bind("click",function(){return void
0===b.groups&&(b.groups=[]),b.groups.push({groupOp:e.groupOps[0].op,rules:[],groups:[]}),f.reDraw(),f.onchange(),!1})),l.append(p),this.p.ruleButtons===!0){var
q,r=a("<input type='button' value='+' title='Add rule' class='add-rule ui-add "+j.button+"'/>");r.bind("click",function(){for(void
0===b.rules&&(b.rules=[]),d=0;d<f.p.columns.length;d++){var
c=void
0===f.p.columns[d].search?!0:f.p.columns[d].search,e=f.p.columns[d].hidden===!0,g=f.p.columns[d].searchoptions.searchhidden===!0;if(g&&c||c&&!e){q=f.p.columns[d];break}}if(!q)return!1;var
h;return h=q.searchoptions.sopt?q.searchoptions.sopt:f.p.sopt?f.p.sopt:-1!==a.inArray(q.searchtype,f.p.strarr)?f.p.stropts:f.p.numopts,b.rules.push({field:q.name,op:h[0],data:""}),f.reDraw(),!1}),l.append(r)}if(null!==c){var
s=a("<input type='button' value='-' title='Delete group' class='delete-group "+j.button+"'/>");l.append(s),s.bind("click",function(){for(d=0;d<c.groups.length;d++)if(c.groups[d]===b){c.groups.splice(d,1);break}return f.reDraw(),f.onchange(),!1})}if(void
0!==b.groups)for(d=0;d<b.groups.length;d++){var
t=a("<tr></tr>");g.append(t);var
u=a("<td class='first'></td>");t.append(u);var
v=a("<td colspan='4'></td>");v.append(this.createTableForGroup(b.groups[d],b)),t.append(v)}void
0===b.groupOp&&(b.groupOp=f.p.groupOps[0].op);var
w=f.p.ruleButtons&&f.p.uniqueSearchFields;if(w)for(var
x=0;x<f.p.columns.length;x++)f.p.columns[x].inlist&&(f.p.columns[x].search=!0);if(void
0!==b.rules)for(d=0;d<b.rules.length;d++)if(g.append(this.createTableRowForRule(b.rules[d],b)),w)for(var
y=b.rules[d].field,x=0;x<f.p.columns.length;x++)if(y===f.p.columns[x].name){f.p.columns[x].search=!1;break}return g},this.createTableRowForRule=function(b,c){var
d,h,k,l,m,n=this,o=g(),p=a("<tr></tr>"),q="";p.append("<td class='first'></td>");var
r=a("<td class='columns'></td>");p.append(r);var
s,t=a("<select class='"+i.srSelect+"'></select>"),u=[];r.append(t),t.bind("change",function(){if(n.p.ruleButtons&&n.p.uniqueSearchFields){var
c=parseInt(a(this).data("curr"),10),e=this.selectedIndex;c>=0&&(n.p.columns[c].search=!0,a(this).data("curr",e),n.p.columns[e].search=!1)}for(b.field=a(t).val(),k=a(this).parents("tr:first"),a(".data",k).empty(),d=0;d<n.p.columns.length;d++)if(n.p.columns[d].name===b.field){l=n.p.columns[d];break}if(l){l.searchoptions.id=a.jgrid.randId(),l.searchoptions.name=b.field,l.searchoptions.oper="filter",f&&"text"===l.inputtype&&(l.searchoptions.size||(l.searchoptions.size=10));var
g=a.jgrid.createEl.call(o,l.inputtype,l.searchoptions,"",!0,n.p.ajaxSelectOptions||{},!0);a(g).addClass("input-elm "+i.srInput),h=l.searchoptions.sopt?l.searchoptions.sopt:n.p.sopt?n.p.sopt:-1!==a.inArray(l.searchtype,n.p.strarr)?n.p.stropts:n.p.numopts;var
j="",m=0;for(u=[],a.each(n.p.ops,function(){u.push(this.oper)}),d=0;d<h.length;d++)s=a.inArray(h[d],u),-1!==s&&(0===m&&(b.op=n.p.ops[s].oper),j+="<option value='"+n.p.ops[s].oper+"'>"+n.p.ops[s].text+"</option>",m++);if(a(".selectopts",k).empty().append(j),a(".selectopts",k)[0].selectedIndex=0,a.jgrid.msie()&&a.jgrid.msiever()<9){var
p=parseInt(a("select.selectopts",k)[0].offsetWidth,10)+1;a(".selectopts",k).width(p),a(".selectopts",k).css("width","auto")}a(".data",k).append(g),a.jgrid.bindEv.call(o,g,l.searchoptions),a(".input-elm",k).bind("change",function(c){var
d=c.target;b.data="SPAN"===d.nodeName.toUpperCase()&&l.searchoptions&&a.isFunction(l.searchoptions.custom_value)?l.searchoptions.custom_value.call(o,a(d).children(".customelement:first"),"get"):d.value,n.onchange()}),setTimeout(function(){b.data=a(g).val(),n.onchange()},0)}});var
v=0;for(d=0;d<n.p.columns.length;d++){var
w=void
0===n.p.columns[d].search?!0:n.p.columns[d].search,x=n.p.columns[d].hidden===!0,y=n.p.columns[d].searchoptions.searchhidden===!0;(y&&w||w&&!x)&&(m="",b.field===n.p.columns[d].name&&(m=" selected='selected'",v=d),q+="<option value='"+n.p.columns[d].name+"'"+m+">"+n.p.columns[d].label+"</option>")}t.append(q),t.data("curr",v);var
z=a("<td class='operators'></td>");p.append(z),l=e.columns[v],l.searchoptions.id=a.jgrid.randId(),f&&"text"===l.inputtype&&(l.searchoptions.size||(l.searchoptions.size=10)),l.searchoptions.name=b.field,l.searchoptions.oper="filter";var
A=a.jgrid.createEl.call(o,l.inputtype,l.searchoptions,b.data,!0,n.p.ajaxSelectOptions||{},!0);("nu"===b.op||"nn"===b.op)&&(a(A).attr("readonly","true"),a(A).attr("disabled","true"));var
B=a("<select class='selectopts "+i.srSelect+"'></select>");for(z.append(B),B.bind("change",function(){b.op=a(B).val(),k=a(this).parents("tr:first");var
c=a(".input-elm",k)[0];"nu"===b.op||"nn"===b.op?(b.data="","SELECT"!==c.tagName.toUpperCase()&&(c.value=""),c.setAttribute("readonly","true"),c.setAttribute("disabled","true")):("SELECT"===c.tagName.toUpperCase()&&(b.data=c.value),c.removeAttribute("readonly"),c.removeAttribute("disabled")),n.onchange()}),h=l.searchoptions.sopt?l.searchoptions.sopt:n.p.sopt?n.p.sopt:-1!==a.inArray(l.searchtype,n.p.strarr)?n.p.stropts:n.p.numopts,q="",a.each(n.p.ops,function(){u.push(this.oper)}),d=0;d<h.length;d++)s=a.inArray(h[d],u),-1!==s&&(m=b.op===n.p.ops[s].oper?" selected='selected'":"",q+="<option value='"+n.p.ops[s].oper+"'"+m+">"+n.p.ops[s].text+"</option>");B.append(q);var
C=a("<td class='data'></td>");p.append(C),C.append(A),a.jgrid.bindEv.call(o,A,l.searchoptions),a(A).addClass("input-elm "+i.srInput).bind("change",function(){b.data="custom"===l.inputtype?l.searchoptions.custom_value.call(o,a(this).children(".customelement:first"),"get"):a(this).val(),n.onchange()});var
D=a("<td></td>");if(p.append(D),this.p.ruleButtons===!0){var
E=a("<input type='button' value='-' title='Delete rule' class='delete-rule ui-del "+j.button+"'/>");D.append(E),E.bind("click",function(){for(d=0;d<c.rules.length;d++)if(c.rules[d]===b){c.rules.splice(d,1);break}return n.reDraw(),n.onchange(),!1})}return p},this.getStringForGroup=function(a){var
b,c="(";if(void
0!==a.groups)for(b=0;b<a.groups.length;b++){c.length>1&&(c+=" "+a.groupOp+" ");try{c+=this.getStringForGroup(a.groups[b])}catch(d){alert(d)}}if(void
0!==a.rules)try{for(b=0;b<a.rules.length;b++)c.length>1&&(c+=" "+a.groupOp+" "),c+=this.getStringForRule(a.rules[b])}catch(e){alert(e)}return c+=")","()"===c?"":c},this.getStringForRule=function(b){var
c,d,f,g,h="",i="",j=["int","integer","float","number","currency"];for(c=0;c<this.p.ops.length;c++)if(this.p.ops[c].oper===b.op){h=this.p.operands.hasOwnProperty(b.op)?this.p.operands[b.op]:"",i=this.p.ops[c].oper;break}for(c=0;c<this.p.columns.length;c++)if(this.p.columns[c].name===b.field){d=this.p.columns[c];break}return void
0===d?"":(g=b.data,("bw"===i||"bn"===i)&&(g+="%"),("ew"===i||"en"===i)&&(g="%"+g),("cn"===i||"nc"===i)&&(g="%"+g+"%"),("in"===i||"ni"===i)&&(g=" ("+g+")"),e.errorcheck&&k(b.data,d),f=-1!==a.inArray(d.searchtype,j)||"nn"===i||"nu"===i?b.field+" "+h+" "+g:b.field+" "+h+' "'+g+'"')},this.resetFilter=function(){this.p.filter=a.extend(!0,{},this.p.initFilter),this.reDraw(),this.onchange()},this.hideError=function(){a("th."+j.error,this).html(""),a("tr.error",this).hide()},this.showError=function(){a("th."+j.error,this).html(this.p.errmsg),a("tr.error",this).show()},this.toUserFriendlyString=function(){return this.getStringForGroup(e.filter)},this.toString=function(){function
a(a){if(c.p.errorcheck){var
b,d;for(b=0;b<c.p.columns.length;b++)if(c.p.columns[b].name===a.field){d=c.p.columns[b];break}d&&k(a.data,d)}return a.op+"(item."+a.field+",'"+a.data+"')"}function
b(c){var
d,e="(";if(void
0!==c.groups)for(d=0;d<c.groups.length;d++)e.length>1&&(e+="OR"===c.groupOp?" || ":" && "),e+=b(c.groups[d]);if(void
0!==c.rules)for(d=0;d<c.rules.length;d++)e.length>1&&(e+="OR"===c.groupOp?" || ":" && "),e+=a(c.rules[d]);return e+=")","()"===e?"":e}var
c=this;return b(this.p.filter)},this.reDraw(),this.p.showQuery&&this.onchange(),this.filter=!0}}})},a.extend(a.fn.jqFilter,{toSQLString:function(){var
a="";return this.each(function(){a=this.toUserFriendlyString()}),a},filterData:function(){var
a;return this.each(function(){a=this.p.filter}),a},getParameter:function(a){return void
0!==a&&this.p.hasOwnProperty(a)?this.p[a]:this.p},resetFilter:function(){return this.each(function(){this.resetFilter()})},addFilter:function(b){"string"==typeof
b&&(b=a.jgrid.parse(b)),this.each(function(){this.p.filter=b,this.reDraw(),this.onchange()})}}),a.jgrid.extend({filterToolbar:function(b){var
c=a.jgrid.getRegional(this[0],"search");return b=a.extend({autosearch:!0,autosearchDelay:500,searchOnEnter:!0,beforeSearch:null,afterSearch:null,beforeClear:null,afterClear:null,onClearSearchValue:null,searchurl:"",stringResult:!1,groupOp:"AND",defaultSearch:"bw",searchOperators:!1,resetIcon:"x",splitSelect:",",groupOpSelect:"OR",operands:{eq:"==",ne:"!",lt:"<",le:"<=",gt:">",ge:">=",bw:"^",bn:"!^","in":"=",ni:"!=",ew:"|",en:"!@",cn:"~",nc:"!~",nu:"#",nn:"!#",bt:"..."}},c,b||{}),this.each(function(){var
d=this;if(!d.p.filterToolbar){a(d).data("filterToolbar")||a(d).data("filterToolbar",b),d.p.force_regional&&(b=a.extend(b,c));var
e,f,g,h=a.jgrid.styleUI[d.p.styleUI||"jQueryUI"].filter,i=a.jgrid.styleUI[d.p.styleUI||"jQueryUI"].common,j=a.jgrid.styleUI[d.p.styleUI||"jQueryUI"].base,k=function(){var
c,e,f,g,h={},i=0,j={},k=!1,l=[],m=!1;a.each(d.p.colModel,function(){var
n=a("#gs_"+d.p.idPrefix+a.jgrid.jqID(this.name),this.frozen===!0&&d.p.frozenColumns===!0?d.grid.fhDiv:d.grid.hDiv);if(e=this.index||this.name,g=this.searchoptions||{},f=b.searchOperators&&g.searchOperMenu?n.parent().prev().children("a").attr("soper")||b.defaultSearch:g.sopt?g.sopt[0]:"select"===this.stype?"eq":b.defaultSearch,c="custom"===this.stype&&a.isFunction(g.custom_value)&&n.length>0&&"SPAN"===n[0].nodeName.toUpperCase()?g.custom_value.call(d,n.children(".customelement:first"),"get"):n.val(),"select"===this.stype&&g.multiple&&a.isArray(c)&&c.length&&(k=!0,l.push(e),c=1===c.length?c[0]:c),"bt"===f&&(m=!0),c||"nu"===f||"nn"===f)h[e]=c,j[e]=f,i++;else
try{delete
d.p.postData[e]}catch(o){}});var
n=i>0?!0:!1;if(b.stringResult===!0||"local"===d.p.datatype||b.searchOperators===!0){var
o='{"groupOp":"'+b.groupOp+'","rules":[',p=0;a.each(h,function(a,b){p>0&&(o+=","),o+='{"field":"'+a+'",',o+='"op":"'+j[a]+'",',b+="",o+='"data":"'+b.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',p++}),o+="]}";var
q,r,s,t,u,v,w;if(k&&(q=a.jgrid.parse(o),q.rules&&q.rules.length))for(r=q.rules,s=0;s<r.length;s++)u=r[s],a.inArray(u.filed,l)&&(v=u.data.split(b.splitSelect),v.length>1&&(void
0===q.groups&&(q.groups=[]),w={groupOp:b.groupOpSelect,groups:[],rules:[]},q.groups.push(w),a.each(v,function(a){t=v[a],t&&w.rules.push({data:v[a],op:u.op,field:u.field})}),r.splice(s,1),s--));if(m&&(a.isPlainObject(q)||(q=a.jgrid.parse(o)),q.rules&&q.rules.length))for(r=q.rules,s=0;s<r.length;s++)u=r[s],"bt"===u.op&&(v=u.data.split("..."),v.length>1&&(void
0===q.groups&&(q.groups=[]),w={groupOp:"AND",groups:[],rules:[]},q.groups.push(w),a.each(v,function(a){var
b=0===a?"ge":"le";t=v[a],t&&w.rules.push({data:v[a],op:b,field:u.field})}),r.splice(s,1),s--));(m||k)&&(o=JSON.stringify(q)),a.extend(d.p.postData,{filters:o}),a.each(["searchField","searchString","searchOper"],function(a,b){d.p.postData.hasOwnProperty(b)&&delete
d.p.postData[b]})}else
a.extend(d.p.postData,h);var
x;d.p.searchurl&&(x=d.p.url,a(d).jqGrid("setGridParam",{url:d.p.searchurl}));var
y="stop"===a(d).triggerHandler("jqGridToolbarBeforeSearch")?!0:!1;!y&&a.isFunction(b.beforeSearch)&&(y=b.beforeSearch.call(d)),y||a(d).jqGrid("setGridParam",{search:n}).trigger("reloadGrid",[{page:1}]),x&&a(d).jqGrid("setGridParam",{url:x}),a(d).triggerHandler("jqGridToolbarAfterSearch"),a.isFunction(b.afterSearch)&&b.afterSearch.call(d)},l=function(c){var
e,f={},g=0;c="boolean"!=typeof
c?!0:c,a.each(d.p.colModel,function(){var
b,c=a("#gs_"+d.p.idPrefix+a.jgrid.jqID(this.name),this.frozen===!0&&d.p.frozenColumns===!0?d.grid.fhDiv:d.grid.hDiv);switch(this.searchoptions&&void
0!==this.searchoptions.defaultValue&&(b=this.searchoptions.defaultValue),e=this.index||this.name,this.stype){case"select":if(c.find("option").each(function(c){return 0===c&&(this.selected=!0),a(this).val()===b?(this.selected=!0,!1):void
0}),void
0!==b)f[e]=b,g++;else
try{delete
d.p.postData[e]}catch(h){}break;case"text":if(c.val(b||""),void
0!==b)f[e]=b,g++;else
try{delete
d.p.postData[e]}catch(i){}break;case"custom":a.isFunction(this.searchoptions.custom_value)&&c.length>0&&"SPAN"===c[0].nodeName.toUpperCase()&&this.searchoptions.custom_value.call(d,c.children(".customelement:first"),"set",b||"")}});var
h=g>0?!0:!1;if(d.p.resetsearch=!0,b.stringResult===!0||"local"===d.p.datatype){var
i='{"groupOp":"'+b.groupOp+'","rules":[',j=0;a.each(f,function(a,b){j>0&&(i+=","),i+='{"field":"'+a+'",',i+='"op":"eq",',b+="",i+='"data":"'+b.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',j++}),i+="]}",a.extend(d.p.postData,{filters:i}),a.each(["searchField","searchString","searchOper"],function(a,b){d.p.postData.hasOwnProperty(b)&&delete
d.p.postData[b]})}else
a.extend(d.p.postData,f);var
k;d.p.searchurl&&(k=d.p.url,a(d).jqGrid("setGridParam",{url:d.p.searchurl}));var
l="stop"===a(d).triggerHandler("jqGridToolbarBeforeClear")?!0:!1;!l&&a.isFunction(b.beforeClear)&&(l=b.beforeClear.call(d)),l||c&&a(d).jqGrid("setGridParam",{search:h}).trigger("reloadGrid",[{page:1}]),k&&a(d).jqGrid("setGridParam",{url:k}),a(d).triggerHandler("jqGridToolbarAfterClear"),a.isFunction(b.afterClear)&&b.afterClear()},m=function(){var
b=a("tr.ui-search-toolbar",d.grid.hDiv),c=d.p.frozenColumns===!0?a("tr.ui-search-toolbar",d.grid.fhDiv):!1;"none"===b.css("display")?(b.show(),c&&c.show()):(b.hide(),c&&c.hide())},n=function(c,e,f){a("#sopt_menu").remove(),e=parseInt(e,10),f=parseInt(f,10)+18;for(var
g,j,l=a(".ui-jqgrid-view").css("font-size")||"11px",m='<ul id="sopt_menu" class="ui-search-menu modal-content" role="menu" tabindex="0" style="font-size:'+l+";left:"+e+"px;top:"+f+'px;">',n=a(c).attr("soper"),o=[],p=0,q=a(c).attr("colname"),r=d.p.colModel.length;r>p&&d.p.colModel[p].name!==q;)p++;var
s=d.p.colModel[p],t=a.extend({},s.searchoptions);for(t.sopt||(t.sopt=[],t.sopt[0]="select"===s.stype?"eq":b.defaultSearch),a.each(b.odata,function(){o.push(this.oper)}),p=0;p<t.sopt.length;p++)j=a.inArray(t.sopt[p],o),-1!==j&&(g=n===b.odata[j].oper?i.highlight:"",m+='<li class="ui-menu-item '+g+'" role="presentation"><a class="'+i.cornerall+' g-menu-item" tabindex="0" role="menuitem" value="'+b.odata[j].oper+'" oper="'+b.operands[b.odata[j].oper]+'"><table class="ui-common-table"><tr><td width="25px">'+b.operands[b.odata[j].oper]+"</td><td>"+b.odata[j].text+"</td></tr></table></a></li>");m+="</ul>",a("body").append(m),a("#sopt_menu").addClass("ui-menu "+h.menu_widget),a("#sopt_menu > li > a").hover(function(){a(this).addClass(i.hover)},function(){a(this).removeClass(i.hover)}).click(function(){var
e=a(this).attr("value"),f=a(this).attr("oper");if(a(d).triggerHandler("jqGridToolbarSelectOper",[e,f,c]),a("#sopt_menu").hide(),a(c).text(f).attr("soper",e),b.autosearch===!0){var
g=a(c).parent().next().children()[0];(a(g).val()||"nu"===e||"nn"===e)&&k()}})},o=a("<tr class='ui-search-toolbar' role='row'></tr>");b.restoreFromFilters&&(g=d.p.postData.filters,g&&("string"==typeof
g&&(g=a.jgrid.parse(g)),f=g.rules.length?g.rules:!1)),a.each(d.p.colModel,function(c){var
g,i,l,m,n,p,q,r,s=this,t="",u="=",v=a("<th role='columnheader' class='"+j.headerBox+" ui-th-"+d.p.direction+"' id='gsh_"+d.p.id+"_"+s.name+"' ></th>"),w=a("<div></div>"),x=a("<table class='ui-search-table' cellspacing='0'><tr><td class='ui-search-oper' headers=''></td><td class='ui-search-input' headers=''></td><td class='ui-search-clear' headers=''></td></tr></table>");if(this.hidden===!0&&a(v).css("display","none"),this.search=this.search===!1?!1:!0,void
0===this.stype&&(this.stype="text"),this.searchoptions=this.searchoptions||{},void
0===this.searchoptions.searchOperMenu&&(this.searchoptions.searchOperMenu=!0),g=a.extend({},this.searchoptions,{name:s.index||s.name,id:"gs_"+d.p.idPrefix+s.name,oper:"search"}),this.search){if(b.restoreFromFilters&&f){r=!1;for(var
y=0;y<f.length;y++)if(f[y].field){var
z=s.index||s.name;if(z===f[y].field){r=f[y];break}}}if(b.searchOperators){for(i=g.sopt?g.sopt[0]:"select"===s.stype?"eq":b.defaultSearch,b.restoreFromFilters&&r&&(i=r.op),l=0;l<b.odata.length;l++)if(b.odata[l].oper===i){u=b.operands[i]||"";break}m=null!=g.searchtitle?g.searchtitle:b.operandTitle,t=this.searchoptions.searchOperMenu?"<a title='"+m+"' style='padding-right: 0.5em;' soper='"+i+"' class='soptclass' colname='"+this.name+"'>"+u+"</a>":""}switch(a("td:eq(0)",x).attr("colindex",c).append(t),void
0===g.clearSearch&&(g.clearSearch=!0),g.clearSearch?(n=b.resetTitle||"Clear Search Value",a("td:eq(2)",x).append("<a title='"+n+"' style='padding-right: 0.3em;padding-left: 0.3em;' class='clearsearchclass'>"+b.resetIcon+"</a>")):a("td:eq(2)",x).hide(),this.surl&&(g.dataUrl=this.surl),p="",g.defaultValue&&(p=a.isFunction(g.defaultValue)?g.defaultValue.call(d):g.defaultValue),b.restoreFromFilters&&r&&(p=r.data),q=a.jgrid.createEl.call(d,this.stype,g,p,!1,a.extend({},a.jgrid.ajaxOptions,d.p.ajaxSelectOptions||{})),a(q).addClass(h.srInput),a("td:eq(1)",x).append(q),a(w).append(x),null==g.dataEvents&&(g.dataEvents=[]),this.stype){case"select":b.autosearch===!0&&g.dataEvents.push({type:"change",fn:function(){return k(),!1}});break;case"text":b.autosearch===!0&&(b.searchOnEnter?g.dataEvents.push({type:"keypress",fn:function(a){var
b=a.charCode||a.keyCode||0;return 13===b?(k(),!1):this}}):g.dataEvents.push({type:"keydown",fn:function(a){var
c=a.which;switch(c){case
13:return!1;case
9:case
16:case
37:case
38:case
39:case
40:case
27:break;default:e&&clearTimeout(e),e=setTimeout(function(){k()},b.autosearchDelay)}}}))}a.jgrid.bindEv.call(d,q,g)}a(v).append(w),a(o).append(v),b.searchOperators&&""!==t||a("td:eq(0)",x).hide()}),a("table thead",d.grid.hDiv).append(o),b.searchOperators&&(a(".soptclass",o).click(function(b){var
c=a(this).offset(),d=c.left,e=c.top;n(this,d,e),b.stopPropagation()}),a("body").on("click",function(b){"soptclass"!==b.target.className&&a("#sopt_menu").remove()})),a(".clearsearchclass",o).click(function(){var
c,e=a(this).parents("tr:first"),f=parseInt(a("td.ui-search-oper",e).attr("colindex"),10),g=a.extend({},d.p.colModel[f].searchoptions||{}),h=g.defaultValue?g.defaultValue:"";"select"===d.p.colModel[f].stype?(c=a("td.ui-search-input select",e),h?c.val(h):c[0].selectedIndex=0):(c=a("td.ui-search-input input",e),c.val(h)),a(d).triggerHandler("jqGridToolbarClearVal",[c[0],f,g,h]),a.isFunction(b.onClearSearchValue)&&b.onClearSearchValue.call(d,c[0],f,g,h),b.autosearch===!0&&k()}),this.p.filterToolbar=!0,this.triggerToolbar=k,this.clearToolbar=l,this.toggleToolbar=m}})},destroyFilterToolbar:function(){return this.each(function(){this.p.filterToolbar&&(this.triggerToolbar=null,this.clearToolbar=null,this.toggleToolbar=null,this.p.filterToolbar=!1,a(this.grid.hDiv).find("table thead tr.ui-search-toolbar").remove())})},refreshFilterToolbar:function(b){return b=a.extend(!0,{filters:"",onClearVal:null,onSetVal:null},b||{}),this.each(function(){function
c(f){if(f&&f.rules){for(g=f.rules,l=g.length,d=0;l>d;d++)h=g[d],i=a.inArray(h.field,m),-1!==i&&(e=a("#gs_"+j.p.idPrefix+a.jgrid.jqID(k[i].name)),e.length>0&&("select"===k[i].stype?e.find("option[value='"+a.jgrid.jqID(h.data)+"']").prop("selected",!0):"text"===k[i].stype&&e.val(h.data),a.isFunction(b.onSetVal)&&b.onSetVal.call(j,e,k[i].name)));if(f.groups)for(var
n=0;n<f.groups.length;n++)c(f.groups[n])}}var
d,e,f,g,h,i,j=this,k=j.p.colModel,l=j.p.colModel.length,m=[];if(j.p.filterToolbar){for(d=0;l>d;d++){switch(m.push(k[d].name),e=a("#gs_"+j.p.idPrefix+a.jgrid.jqID(k[d].name)),k[d].stype){case"select":case"text":e.val("")}a.isFunction(b.onClearVal)&&b.onClearVal.call(j,e,k[d].name)}"string"==typeof
b.filters&&b.filters.length&&(f=a.jgrid.parse(b.filters)),a.isPlainObject(f)&&c(f)}})},searchGrid:function(b){var
c=a.jgrid.getRegional(this[0],"search");return b=a.extend(!0,{recreateFilter:!1,drag:!0,sField:"searchField",sValue:"searchString",sOper:"searchOper",sFilter:"filters",loadDefaults:!0,beforeShowSearch:null,afterShowSearch:null,onInitializeSearch:null,afterRedraw:null,afterChange:null,sortStrategy:null,closeAfterSearch:!1,closeAfterReset:!1,closeOnEscape:!1,searchOnEnter:!1,multipleSearch:!1,multipleGroup:!1,top:0,left:0,jqModal:!0,modal:!1,resize:!0,width:450,height:"auto",dataheight:"auto",showQuery:!1,errorcheck:!0,sopt:null,stringResult:void
0,onClose:null,onSearch:null,onReset:null,toTop:!0,overlay:30,columns:[],tmplNames:null,tmplFilters:null,tmplLabel:" Template: ",showOnLoad:!1,layer:null,operands:{eq:"=",ne:"<>",lt:"<",le:"<=",gt:">",ge:">=",bw:"LIKE",bn:"NOT LIKE","in":"IN",ni:"NOT IN",ew:"LIKE",en:"NOT LIKE",cn:"LIKE",nc:"NOT LIKE",nu:"IS NULL",nn:"ISNOT NULL"}},c,b||{}),this.each(function(){function
c(c){g=a(d).triggerHandler("jqGridFilterBeforeShow",[c]),void
0===g&&(g=!0),g&&a.isFunction(b.beforeShowSearch)&&(g=b.beforeShowSearch.call(d,c)),g&&(a.jgrid.viewModal("#"+a.jgrid.jqID(i.themodal),{gbox:"#gbox_"+a.jgrid.jqID(f),jqm:b.jqModal,modal:b.modal,overlay:b.overlay,toTop:b.toTop}),a(d).triggerHandler("jqGridFilterAfterShow",[c]),a.isFunction(b.afterShowSearch)&&b.afterShowSearch.call(d,c))}var
d=this;if(d.grid){var
e,f="fbox_"+d.p.id,g=!0,h=!0,i={themodal:"searchmod"+f,modalhead:"searchhd"+f,modalcontent:"searchcnt"+f,scrollelm:f},j=d.p.postData[b.sFilter],k=a.jgrid.styleUI[d.p.styleUI||"jQueryUI"].filter,l=a.jgrid.styleUI[d.p.styleUI||"jQueryUI"].common;if(b.styleUI=d.p.styleUI,"string"==typeof
j&&(j=a.jgrid.parse(j)),b.recreateFilter===!0&&a("#"+a.jgrid.jqID(i.themodal)).remove(),void
0!==a("#"+a.jgrid.jqID(i.themodal))[0])c(a("#fbox_"+a.jgrid.jqID(d.p.id)));else{var
m=a("<div><div id='"+f+"' class='searchFilter' style='overflow:auto'></div></div>").insertBefore("#gview_"+a.jgrid.jqID(d.p.id)),n="left",o="";"rtl"===d.p.direction&&(n="right",o=" style='text-align:left'",m.attr("dir","rtl"));var
p,q,r=a.extend([],d.p.colModel),s="<a id='"+f+"_search' class='fm-button "+l.button+" fm-button-icon-right ui-search'><span class='"+l.icon_base+" "+k.icon_search+"'></span>"+b.Find+"</a>",t="<a id='"+f+"_reset' class='fm-button "+l.button+" fm-button-icon-left ui-reset'><span class='"+l.icon_base+" "+k.icon_reset+"'></span>"+b.Reset+"</a>",u="",v="",w=!1,x=-1;if(b.showQuery&&(u="<a id='"+f+"_query' class='fm-button "+l.button+" fm-button-icon-left'><span class='"+l.icon_base+" "+k.icon_query+"'></span>Query</a>"),b.columns.length?(r=b.columns,x=0,p=r[0].index||r[0].name):a.each(r,function(a,b){if(b.label||(b.label=d.p.colNames[a]),!w){var
c=void
0===b.search?!0:b.search,e=b.hidden===!0,f=b.searchoptions&&b.searchoptions.searchhidden===!0;(f&&c||c&&!e)&&(w=!0,p=b.index||b.name,x=a)}}),!j&&p||b.multipleSearch===!1){var
y="eq";x>=0&&r[x].searchoptions&&r[x].searchoptions.sopt?y=r[x].searchoptions.sopt[0]:b.sopt&&b.sopt.length&&(y=b.sopt[0]),j={groupOp:"AND",rules:[{field:p,op:y,data:""}]}}w=!1,b.tmplNames&&b.tmplNames.length&&(w=!0,v="<tr><td class='ui-search-label'>"+b.tmplLabel+"</td>",v+="<td><select class='ui-template "+k.srSelect+"'>",v+="<option value='default'>Default</option>",a.each(b.tmplNames,function(a,b){v+="<option value='"+a+"'>"+b+"</option>"}),v+="</select></td></tr>"),q="<table class='EditTable' style='border:0px none;margin-top:5px' id='"+f+"_2'><tbody><tr><td colspan='2'><hr class='"+l.content+"' style='margin:1px'/></td></tr>"+v+"<tr><td class='EditButton' style='text-align:"+n+"'>"+t+"</td><td class='EditButton' "+o+">"+u+s+"</td></tr></tbody></table>",f=a.jgrid.jqID(f),a("#"+f).jqFilter({columns:r,sortStrategy:b.sortStrategy,filter:b.loadDefaults?j:null,showQuery:b.showQuery,errorcheck:b.errorcheck,sopt:b.sopt,groupButton:b.multipleGroup,ruleButtons:b.multipleSearch,uniqueSearchFields:b.uniqueSearchFields,afterRedraw:b.afterRedraw,ops:b.odata,operands:b.operands,ajaxSelectOptions:d.p.ajaxSelectOptions,groupOps:b.groupOps,onChange:function(){this.p.showQuery&&a(".query",this).html(this.toUserFriendlyString()),a.isFunction(b.afterChange)&&b.afterChange.call(d,a("#"+f),b)},direction:d.p.direction,id:d.p.id}),m.append(q),w&&b.tmplFilters&&b.tmplFilters.length&&a(".ui-template",m).bind("change",function(){var
c=a(this).val();return"default"===c?a("#"+f).jqFilter("addFilter",j):a("#"+f).jqFilter("addFilter",b.tmplFilters[parseInt(c,10)]),!1}),b.multipleGroup===!0&&(b.multipleSearch=!0),a(d).triggerHandler("jqGridFilterInitialize",[a("#"+f)]),a.isFunction(b.onInitializeSearch)&&b.onInitializeSearch.call(d,a("#"+f)),b.gbox="#gbox_"+f,b.layer?a.jgrid.createModal(i,m,b,"#gview_"+a.jgrid.jqID(d.p.id),a("#gbox_"+a.jgrid.jqID(d.p.id))[0],"#"+a.jgrid.jqID(b.layer),{position:"relative"}):a.jgrid.createModal(i,m,b,"#gview_"+a.jgrid.jqID(d.p.id),a("#gbox_"+a.jgrid.jqID(d.p.id))[0]),(b.searchOnEnter||b.closeOnEscape)&&a("#"+a.jgrid.jqID(i.themodal)).keydown(function(c){var
d=a(c.target);return!b.searchOnEnter||13!==c.which||d.hasClass("add-group")||d.hasClass("add-rule")||d.hasClass("delete-group")||d.hasClass("delete-rule")||d.hasClass("fm-button")&&d.is("[id$=_query]")?b.closeOnEscape&&27===c.which?(a("#"+a.jgrid.jqID(i.modalhead)).find(".ui-jqdialog-titlebar-close").click(),!1):void
0:(a("#"+f+"_search").click(),!1)}),u&&a("#"+f+"_query").bind("click",function(){return a(".queryresult",m).toggle(),!1}),void
0===b.stringResult&&(b.stringResult=b.multipleSearch),a("#"+f+"_search").bind("click",function(){var
c,g,j={};if(e=a("#"+f),e.find(".input-elm:focus").change(),g=e.jqFilter("filterData"),b.errorcheck&&(e[0].hideError(),b.showQuery||e.jqFilter("toSQLString"),e[0].p.error))return e[0].showError(),!1;if(b.stringResult){try{c=JSON.stringify(g)}catch(k){}"string"==typeof
c&&(j[b.sFilter]=c,a.each([b.sField,b.sValue,b.sOper],function(){j[this]=""}))}else
b.multipleSearch?(j[b.sFilter]=g,a.each([b.sField,b.sValue,b.sOper],function(){j[this]=""})):(j[b.sField]=g.rules[0].field,j[b.sValue]=g.rules[0].data,j[b.sOper]=g.rules[0].op,j[b.sFilter]="");return d.p.search=!0,a.extend(d.p.postData,j),h=a(d).triggerHandler("jqGridFilterSearch"),void
0===h&&(h=!0),h&&a.isFunction(b.onSearch)&&(h=b.onSearch.call(d,d.p.filters)),h!==!1&&a(d).trigger("reloadGrid",[{page:1}]),b.closeAfterSearch&&a.jgrid.hideModal("#"+a.jgrid.jqID(i.themodal),{gb:"#gbox_"+a.jgrid.jqID(d.p.id),jqm:b.jqModal,onClose:b.onClose}),!1}),a("#"+f+"_reset").bind("click",function(){var
c={},e=a("#"+f);return d.p.search=!1,d.p.resetsearch=!0,b.multipleSearch===!1?c[b.sField]=c[b.sValue]=c[b.sOper]="":c[b.sFilter]="",e[0].resetFilter(),w&&a(".ui-template",m).val("default"),a.extend(d.p.postData,c),h=a(d).triggerHandler("jqGridFilterReset"),void
0===h&&(h=!0),h&&a.isFunction(b.onReset)&&(h=b.onReset.call(d)),h!==!1&&a(d).trigger("reloadGrid",[{page:1}]),b.closeAfterReset&&a.jgrid.hideModal("#"+a.jgrid.jqID(i.themodal),{gb:"#gbox_"+a.jgrid.jqID(d.p.id),jqm:b.jqModal,onClose:b.onClose}),!1}),c(a("#"+f)),a(".fm-button:not(."+l.disabled+")",m).hover(function(){a(this).addClass(l.hover)},function(){a(this).removeClass(l.hover)})}}})},filterInput:function(b,c){return c=a.extend(!0,{defaultSearch:"cn",groupOp:"OR",searchAll:!1,beforeSearch:null,afterSearch:null},c||{}),this.each(function(){var
d=this;if(d.grid){var
e,f,g,h='{"groupOp":"'+c.groupOp+'","rules":[',i=0;if(b+="","local"!==!d.p.datatype){a.each(d.p.colModel,function(){e=this.index||this.name,f=this.searchoptions||{},g=c.defaultSearch?c.defaultSearch:f.sopt?f.sopt[0]:c.defaultSearch,this.search=this.search===!1?!1:!0,(this.search||c.searchAll)&&(i>0&&(h+=","),h+='{"field":"'+e+'",',h+='"op":"'+g+'",',h+='"data":"'+b.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',i++)}),h+="]}",a.extend(d.p.postData,{filters:h}),a.each(["searchField","searchString","searchOper"],function(a,b){d.p.postData.hasOwnProperty(b)&&delete
d.p.postData[b]});var
j="stop"===a(d).triggerHandler("jqGridFilterInputBeforeSearch")?!0:!1;!j&&a.isFunction(c.beforeSearch)&&(j=c.beforeSearch.call(d)),j||a(d).jqGrid("setGridParam",{search:!0}).trigger("reloadGrid",[{page:1}]),a(d).triggerHandler("jqGridFilterInputAfterSearch"),a.isFunction(c.afterSearch)&&c.afterSearch.call(d)}}})}})});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery","./grid.base","./grid.common"],a):a(jQuery)}(function(a){"use strict";a.jgrid.inlineEdit=a.jgrid.inlineEdit||{},a.jgrid.extend({editRow:function(b,c,d,e,f,g,h,i,j){var
k={},l=a.makeArray(arguments).slice(1);return"object"===a.type(l[0])?k=l[0]:(void
0!==c&&(k.keys=c),a.isFunction(d)&&(k.oneditfunc=d),a.isFunction(e)&&(k.successfunc=e),void
0!==f&&(k.url=f),void
0!==g&&(k.extraparam=g),a.isFunction(h)&&(k.aftersavefunc=h),a.isFunction(i)&&(k.errorfunc=i),a.isFunction(j)&&(k.afterrestorefunc=j)),k=a.extend(!0,{keys:!1,keyevent:"keydown",oneditfunc:null,successfunc:null,url:null,extraparam:{},aftersavefunc:null,errorfunc:null,afterrestorefunc:null,restoreAfterError:!0,mtype:"POST",focusField:!0},a.jgrid.inlineEdit,k),this.each(function(){var
c,d,e,f,g,h,i=this,j=0,l=null,m={},n=a(this).jqGrid("getStyleUI",i.p.styleUI+".inlinedit","inputClass",!0);if(i.grid&&(f=a(i).jqGrid("getInd",b,!0),f!==!1)){if(i.p.beforeAction=!0,h=a.isFunction(k.beforeEditRow)?k.beforeEditRow.call(i,k,b):void
0,void
0===h&&(h=!0),!h)return void(i.p.beforeAction=!1);e=a(f).attr("editable")||"0","0"!==e||a(f).hasClass("not-editable-row")||(g=i.p.colModel,a('td[role="gridcell"]',f).each(function(e){c=g[e].name;var
f=i.p.treeGrid===!0&&c===i.p.ExpandColumn;if(f)d=a("span:first",this).html();else
try{d=a.unformat.call(i,this,{rowId:b,colModel:g[e]},e)}catch(h){d=g[e].edittype&&"textarea"===g[e].edittype?a(this).text():a(this).html()}if("cb"!==c&&"subgrid"!==c&&"rn"!==c&&(i.p.autoencode&&(d=a.jgrid.htmlDecode(d)),m[c]=d,g[e].editable===!0)){null===l&&(l=e),f?a("span:first",this).html(""):a(this).html("");var
k=a.extend({},g[e].editoptions||{},{id:b+"_"+c,name:c,rowId:b,oper:"edit"});g[e].edittype||(g[e].edittype="text"),("&nbsp;"===d||"&#160;"===d||1===d.length&&160===d.charCodeAt(0))&&(d="");var
o=a.jgrid.createEl.call(i,g[e].edittype,k,d,!0,a.extend({},a.jgrid.ajaxOptions,i.p.ajaxSelectOptions||{}));a(o).addClass("editable inline-edit-cell"),a.inArray(g[e].edittype,["text","textarea","password","select"])>-1&&a(o).addClass(n),f?a("span:first",this).append(o):a(this).append(o),a.jgrid.bindEv.call(i,o,k),"select"===g[e].edittype&&void
0!==g[e].editoptions&&g[e].editoptions.multiple===!0&&void
0===g[e].editoptions.dataUrl&&a.jgrid.msie()&&a(o).width(a(o).width()),j++}}),j>0&&(m.id=b,i.p.savedRow.push(m),a(f).attr("editable","1"),k.focusField&&("number"==typeof
k.focusField&&parseInt(k.focusField,10)<=g.length&&(l=k.focusField),setTimeout(function(){var
b=a("td:eq("+l+") :input:visible",f).not(":disabled");b.length>0&&b.focus()},0)),k.keys===!0&&a(f).bind(k.keyevent,function(c){if(27===c.keyCode){if(a(i).jqGrid("restoreRow",b,k.afterrestorefunc),i.p.inlineNav)try{a(i).jqGrid("showAddEditButtons")}catch(d){}return!1}if(13===c.keyCode){var
e=c.target;if("TEXTAREA"===e.tagName)return!0;if(a(i).jqGrid("saveRow",b,k)&&i.p.inlineNav)try{a(i).jqGrid("showAddEditButtons")}catch(f){}return!1}}),a(i).triggerHandler("jqGridInlineEditRow",[b,k]),a.isFunction(k.oneditfunc)&&k.oneditfunc.call(i,b)))}})},saveRow:function(b,c,d,e,f,g,h){var
i=a.makeArray(arguments).slice(1),j={},k=this[0];"object"===a.type(i[0])?j=i[0]:(a.isFunction(c)&&(j.successfunc=c),void
0!==d&&(j.url=d),void
0!==e&&(j.extraparam=e),a.isFunction(f)&&(j.aftersavefunc=f),a.isFunction(g)&&(j.errorfunc=g),a.isFunction(h)&&(j.afterrestorefunc=h)),j=a.extend(!0,{successfunc:null,url:null,extraparam:{},aftersavefunc:null,errorfunc:null,afterrestorefunc:null,restoreAfterError:!0,mtype:"POST",saveui:"enable",savetext:a.jgrid.getRegional(k,"defaults.savetext")},a.jgrid.inlineEdit,j);var
l,m,n,o,p,q=!1,r={},s={},t={},u=!1,v=a.trim(a(k).jqGrid("getStyleUI",k.p.styleUI+".common","error",!0));if(!k.grid)return q;if(p=a(k).jqGrid("getInd",b,!0),p===!1)return q;var
w=a.jgrid.getRegional(k,"errors"),x=a.jgrid.getRegional(k,"edit"),y=a.isFunction(j.beforeSaveRow)?j.beforeSaveRow.call(k,j,b):void
0;if(void
0===y&&(y=!0),y){if(m=a(p).attr("editable"),j.url=j.url||k.p.editurl,"1"===m){var
z;if(a('td[role="gridcell"]',p).each(function(b){if(z=k.p.colModel[b],l=z.name,"cb"!==l&&"subgrid"!==l&&z.editable===!0&&"rn"!==l&&!a(this).hasClass("not-editable-cell")){switch(z.edittype){case"checkbox":var
c=["Yes","No"];z.editoptions&&(c=z.editoptions.value.split(":")),r[l]=a("input",this).is(":checked")?c[0]:c[1];break;case"text":case"password":case"textarea":case"button":r[l]=a("input, textarea",this).val();break;case"select":if(z.editoptions.multiple){var
d=a("select",this),e=[];r[l]=a(d).val(),r[l]?r[l]=r[l].join(","):r[l]="",a("select option:selected",this).each(function(b,c){e[b]=a(c).text()}),s[l]=e.join(",")}else
r[l]=a("select option:selected",this).val(),s[l]=a("select option:selected",this).text();z.formatter&&"select"===z.formatter&&(s={});break;case"custom":try{if(!z.editoptions||!a.isFunction(z.editoptions.custom_value))throw"e1";if(r[l]=z.editoptions.custom_value.call(k,a(".customelement",this),"get"),void
0===r[l])throw"e2"}catch(f){"e1"===f?a.jgrid.info_dialog(w.errcap,"function 'custom_value' "+x.msg.nodefined,x.bClose,{styleUI:k.p.styleUI}):a.jgrid.info_dialog(w.errcap,f.message,x.bClose,{styleUI:k.p.styleUI})}}if(o=a.jgrid.checkValues.call(k,r[l],b),o[0]===!1)return!1;k.p.autoencode&&(r[l]=a.jgrid.htmlEncode(r[l])),"clientArray"!==j.url&&z.editoptions&&z.editoptions.NullIfEmpty===!0&&""===r[l]&&(t[l]="null",u=!0)}}),o[0]===!1){try{var
A=a(k).jqGrid("getGridRowById",b),B=a.jgrid.findPos(A);a.jgrid.info_dialog(w.errcap,o[1],x.bClose,{left:B[0],top:B[1]+a(A).outerHeight(),styleUI:k.p.styleUI})}catch(C){alert(o[1])}return q}var
D,E=k.p.prmNames,F=b;if(D=k.p.keyName===!1?E.id:k.p.keyName,r){if(r[E.oper]=E.editoper,void
0===r[D]||""===r[D])r[D]=b;else
if(p.id!==k.p.idPrefix+r[D]){var
G=a.jgrid.stripPref(k.p.idPrefix,b);if(void
0!==k.p._index[G]&&(k.p._index[r[D]]=k.p._index[G],delete
k.p._index[G]),b=k.p.idPrefix+r[D],a(p).attr("id",b),k.p.selrow===F&&(k.p.selrow=b),a.isArray(k.p.selarrrow)){var
H=a.inArray(F,k.p.selarrrow);H>=0&&(k.p.selarrrow[H]=b)}if(k.p.multiselect){var
I="jqg_"+k.p.id+"_"+b;a("input.cbox",p).attr("id",I).attr("name",I)}}void
0===k.p.inlineData&&(k.p.inlineData={}),r=a.extend({},r,k.p.inlineData,j.extraparam)}if("clientArray"===j.url){r=a.extend({},r,s),k.p.autoencode&&a.each(r,function(b,c){r[b]=a.jgrid.htmlDecode(c)});var
J,K=a(k).jqGrid("setRowData",b,r);for(a(p).attr("editable","0"),J=0;J<k.p.savedRow.length;J++)if(String(k.p.savedRow[J].id)===String(F)){n=J;break}n>=0&&k.p.savedRow.splice(n,1),a(k).triggerHandler("jqGridInlineAfterSaveRow",[b,K,r,j]),a.isFunction(j.aftersavefunc)&&j.aftersavefunc.call(k,b,K,r,j),q=!0,a(p).removeClass("jqgrid-new-row").unbind("keydown")}else
a(k).jqGrid("progressBar",{method:"show",loadtype:j.saveui,htmlcontent:j.savetext}),t=a.extend({},r,t),t[D]=a.jgrid.stripPref(k.p.idPrefix,t[D]),a.ajax(a.extend({url:j.url,data:a.isFunction(k.p.serializeRowData)?k.p.serializeRowData.call(k,t):t,type:j.mtype,async:!1,complete:function(c,d){if(a(k).jqGrid("progressBar",{method:"hide",loadtype:j.saveui,htmlcontent:j.savetext}),"success"===d){var
e,f,g=!0;if(e=a(k).triggerHandler("jqGridInlineSuccessSaveRow",[c,b,j]),a.isArray(e)||(e=[!0,t]),e[0]&&a.isFunction(j.successfunc)&&(e=j.successfunc.call(k,c)),a.isArray(e)?(g=e[0],r=e[1]||r):g=e,g===!0){for(k.p.autoencode&&a.each(r,function(b,c){r[b]=a.jgrid.htmlDecode(c)}),u&&a.each(r,function(a){"null"===r[a]&&(r[a]="")}),r=a.extend({},r,s),a(k).jqGrid("setRowData",b,r),a(p).attr("editable","0"),f=0;f<k.p.savedRow.length;f++)if(String(k.p.savedRow[f].id)===String(b)){n=f;break}n>=0&&k.p.savedRow.splice(n,1),a(k).triggerHandler("jqGridInlineAfterSaveRow",[b,c,r,j]),a.isFunction(j.aftersavefunc)&&j.aftersavefunc.call(k,b,c,r,j),q=!0,a(p).removeClass("jqgrid-new-row").unbind("keydown")}else
a(k).triggerHandler("jqGridInlineErrorSaveRow",[b,c,d,null,j]),a.isFunction(j.errorfunc)&&j.errorfunc.call(k,b,c,d,null),j.restoreAfterError===!0&&a(k).jqGrid("restoreRow",b,j.afterrestorefunc)}},error:function(c,d,e){if(a("#lui_"+a.jgrid.jqID(k.p.id)).hide(),a(k).triggerHandler("jqGridInlineErrorSaveRow",[b,c,d,e,j]),a.isFunction(j.errorfunc))j.errorfunc.call(k,b,c,d,e);else{var
f=c.responseText||c.statusText;try{a.jgrid.info_dialog(w.errcap,'<div class="'+v+'">'+f+"</div>",x.bClose,{buttonalign:"right",styleUI:k.p.styleUI})}catch(g){alert(f)}}j.restoreAfterError===!0&&a(k).jqGrid("restoreRow",b,j.afterrestorefunc)}},a.jgrid.ajaxOptions,k.p.ajaxRowOptions||{}))}return q}},restoreRow:function(b,c){var
d=a.makeArray(arguments).slice(1),e={};return"object"===a.type(d[0])?e=d[0]:a.isFunction(c)&&(e.afterrestorefunc=c),e=a.extend(!0,{},a.jgrid.inlineEdit,e),this.each(function(){var
c,d,f=this,g=-1,h={};if(f.grid&&(c=a(f).jqGrid("getInd",b,!0),c!==!1)){var
i=a.isFunction(e.beforeCancelRow)?e.beforeCancelRow.call(f,e,b):void
0;if(void
0===i&&(i=!0),i){for(d=0;d<f.p.savedRow.length;d++)if(String(f.p.savedRow[d].id)===String(b)){g=d;break}if(g>=0){if(a.isFunction(a.fn.datepicker))try{a("input.hasDatepicker","#"+a.jgrid.jqID(c.id)).datepicker("hide")}catch(j){}a.each(f.p.colModel,function(){this.editable===!0&&f.p.savedRow[g].hasOwnProperty(this.name)&&(h[this.name]=f.p.savedRow[g][this.name])}),a(f).jqGrid("setRowData",b,h),a(c).attr("editable","0").unbind("keydown"),f.p.savedRow.splice(g,1),a("#"+a.jgrid.jqID(b),"#"+a.jgrid.jqID(f.p.id)).hasClass("jqgrid-new-row")&&setTimeout(function(){a(f).jqGrid("delRowData",b),a(f).jqGrid("showAddEditButtons")},0)}a(f).triggerHandler("jqGridInlineAfterRestoreRow",[b]),a.isFunction(e.afterrestorefunc)&&e.afterrestorefunc.call(f,b)}}})},addRow:function(b){return b=a.extend(!0,{rowID:null,initdata:{},position:"first",useDefValues:!0,useFormatter:!1,addRowParams:{extraparam:{}}},b||{}),this.each(function(){if(this.grid){var
c=this;c.p.beforeAction=!0;var
d=a.isFunction(b.beforeAddRow)?b.beforeAddRow.call(c,b.addRowParams):void
0;if(void
0===d&&(d=!0),!d)return void(c.p.beforeAction=!1);if(b.rowID=a.isFunction(b.rowID)?b.rowID.call(c,b):null!=b.rowID?b.rowID:a.jgrid.randId(),b.useDefValues===!0&&a(c.p.colModel).each(function(){if(this.editoptions&&this.editoptions.defaultValue){var
d=this.editoptions.defaultValue,e=a.isFunction(d)?d.call(c):d;b.initdata[this.name]=e}}),a(c).jqGrid("addRowData",b.rowID,b.initdata,b.position),b.rowID=c.p.idPrefix+b.rowID,a("#"+a.jgrid.jqID(b.rowID),"#"+a.jgrid.jqID(c.p.id)).addClass("jqgrid-new-row"),b.useFormatter)a("#"+a.jgrid.jqID(b.rowID)+" .ui-inline-edit","#"+a.jgrid.jqID(c.p.id)).click();else{var
e=c.p.prmNames,f=e.oper;b.addRowParams.extraparam[f]=e.addoper,a(c).jqGrid("editRow",b.rowID,b.addRowParams),a(c).jqGrid("setSelection",b.rowID)}}})},inlineNav:function(b,c){var
d=this[0],e=a.jgrid.getRegional(d,"nav"),f=a.jgrid.styleUI[d.p.styleUI].inlinedit;return c=a.extend(!0,{edit:!0,editicon:f.icon_edit_nav,add:!0,addicon:f.icon_add_nav,save:!0,saveicon:f.icon_save_nav,cancel:!0,cancelicon:f.icon_cancel_nav,addParams:{addRowParams:{extraparam:{}}},editParams:{},restoreAfterSelect:!0,saveAfterSelect:!1},e,c||{}),this.each(function(){if(this.grid&&!this.p.inlineNav){var
f=a.jgrid.jqID(d.p.id),g=a.trim(a(d).jqGrid("getStyleUI",d.p.styleUI+".common","disabled",!0));if(d.p.navGrid||a(d).jqGrid("navGrid",b,{refresh:!1,edit:!1,add:!1,del:!1,search:!1,view:!1}),a(d).data("inlineNav")||a(d).data("inlineNav",c),d.p.force_regional&&(c=a.extend(c,e)),d.p.inlineNav=!0,c.addParams.useFormatter===!0){var
h,i=d.p.colModel;for(h=0;h<i.length;h++)if(i[h].formatter&&"actions"===i[h].formatter){if(i[h].formatoptions){var
j={keys:!1,onEdit:null,onSuccess:null,afterSave:null,onError:null,afterRestore:null,extraparam:{},url:null},k=a.extend(j,i[h].formatoptions);c.addParams.addRowParams={keys:k.keys,oneditfunc:k.onEdit,successfunc:k.onSuccess,url:k.url,extraparam:k.extraparam,aftersavefunc:k.afterSave,errorfunc:k.onError,afterrestorefunc:k.afterRestore}}break}}c.add&&a(d).jqGrid("navButtonAdd",b,{caption:c.addtext,title:c.addtitle,buttonicon:c.addicon,id:d.p.id+"_iladd",internal:!0,onClickButton:function(){void
0===d.p.beforeAction&&(d.p.beforeAction=!0),a(d).jqGrid("addRow",c.addParams),!c.addParams.useFormatter&&d.p.beforeAction&&(a("#"+f+"_ilsave").removeClass(g),a("#"+f+"_ilcancel").removeClass(g),a("#"+f+"_iladd").addClass(g),a("#"+f+"_iledit").addClass(g))}}),c.edit&&a(d).jqGrid("navButtonAdd",b,{caption:c.edittext,title:c.edittitle,buttonicon:c.editicon,id:d.p.id+"_iledit",internal:!0,onClickButton:function(){var
b=a(d).jqGrid("getGridParam","selrow");b?(void
0===d.p.beforeAction&&(d.p.beforeAction=!0),a(d).jqGrid("editRow",b,c.editParams),d.p.beforeAction&&(a("#"+f+"_ilsave").removeClass(g),a("#"+f+"_ilcancel").removeClass(g),a("#"+f+"_iladd").addClass(g),a("#"+f+"_iledit").addClass(g))):(a.jgrid.viewModal("#alertmod_"+f,{gbox:"#gbox_"+f,jqm:!0}),a("#jqg_alrt").focus())}}),c.save&&(a(d).jqGrid("navButtonAdd",b,{caption:c.savetext||"",title:c.savetitle||"Save row",buttonicon:c.saveicon,id:d.p.id+"_ilsave",internal:!0,onClickButton:function(){var
b=d.p.savedRow[0].id;if(b){var
e=d.p.prmNames,g=e.oper,h=c.editParams;a("#"+a.jgrid.jqID(b),"#"+f).hasClass("jqgrid-new-row")?(c.addParams.addRowParams.extraparam[g]=e.addoper,h=c.addParams.addRowParams):(c.editParams.extraparam||(c.editParams.extraparam={}),c.editParams.extraparam[g]=e.editoper),a(d).jqGrid("saveRow",b,h)&&a(d).jqGrid("showAddEditButtons")}else
a.jgrid.viewModal("#alertmod_"+f,{gbox:"#gbox_"+f,jqm:!0}),a("#jqg_alrt").focus()}}),a("#"+f+"_ilsave").addClass(g)),c.cancel&&(a(d).jqGrid("navButtonAdd",b,{caption:c.canceltext||"",title:c.canceltitle||"Cancel row editing",buttonicon:c.cancelicon,id:d.p.id+"_ilcancel",internal:!0,onClickButton:function(){var
b=d.p.savedRow[0].id,e=c.editParams;b?(a("#"+a.jgrid.jqID(b),"#"+f).hasClass("jqgrid-new-row")&&(e=c.addParams.addRowParams),a(d).jqGrid("restoreRow",b,e),a(d).jqGrid("showAddEditButtons")):(a.jgrid.viewModal("#alertmod",{gbox:"#gbox_"+f,jqm:!0}),a("#jqg_alrt").focus())}}),a("#"+f+"_ilcancel").addClass(g)),(c.restoreAfterSelect===!0||c.saveAfterSelect===!0)&&a(d).bind("jqGridBeforeSelectRow.inlineNav",function(b,e){d.p.savedRow.length>0&&d.p.inlineNav===!0&&e!==d.p.selrow&&null!==d.p.selrow&&(d.p.selrow===c.addParams.rowID?a(d).jqGrid("delRowData",d.p.selrow):c.restoreAfterSelect===!0?a(d).jqGrid("restoreRow",d.p.selrow,c.editParams):a(d).jqGrid("saveRow",d.p.selrow,c.editParams),a(d).jqGrid("showAddEditButtons"))})}})},showAddEditButtons:function(){return this.each(function(){if(this.grid){var
b=a.jgrid.jqID(this.p.id),c=a.trim(a(this).jqGrid("getStyleUI",this.p.styleUI+".common","disabled",!0));a("#"+b+"_ilsave").addClass(c),a("#"+b+"_ilcancel").addClass(c),a("#"+b+"_iladd").removeClass(c),a("#"+b+"_iledit").removeClass(c)}})}})});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery","./grid.base"],a):a(jQuery)}(function(a){"use strict";a.jgrid.extend({editCell:function(b,c,d){return this.each(function(){var
e,f,g,h,i=this,j=a(this).jqGrid("getStyleUI",i.p.styleUI+".common","highlight",!0),k=a(this).jqGrid("getStyleUI",i.p.styleUI+".common","hover",!0),l=a(this).jqGrid("getStyleUI",i.p.styleUI+".celledit","inputClass",!0);if(i.grid&&i.p.cellEdit===!0){if(c=parseInt(c,10),i.p.selrow=i.rows[b].id,i.p.knv||a(i).jqGrid("GridNav"),i.p.savedRow.length>0){if(d===!0&&b==i.p.iRow&&c==i.p.iCol)return;a(i).jqGrid("saveCell",i.p.savedRow[0].id,i.p.savedRow[0].ic)}else
window.setTimeout(function(){a("#"+a.jgrid.jqID(i.p.knv)).attr("tabindex","-1").focus()},1);if(h=i.p.colModel[c],e=h.name,"subgrid"!==e&&"cb"!==e&&"rn"!==e){if(g=a("td:eq("+c+")",i.rows[b]),h.editable!==!0||d!==!0||g.hasClass("not-editable-cell")||a.isFunction(i.p.isCellEditable)&&!i.p.isCellEditable.call(i,e,b,c))parseInt(i.p.iCol,10)>=0&&parseInt(i.p.iRow,10)>=0&&a(i.rows[i.p.iRow]).removeClass("selected-row "+k).find("td:eq("+i.p.iCol+")").removeClass("edit-cell "+j),g.addClass("edit-cell "+j),a(i.rows[b]).addClass("selected-row "+k),f=g.html().replace(/\&#160\;/gi,""),a(i).triggerHandler("jqGridSelectCell",[i.rows[b].id,e,f,b,c]),a.isFunction(i.p.onSelectCell)&&i.p.onSelectCell.call(i,i.rows[b].id,e,f,b,c);else{parseInt(i.p.iCol,10)>=0&&parseInt(i.p.iRow,10)>=0&&a(i.rows[i.p.iRow]).removeClass("selected-row "+k).find("td:eq("+i.p.iCol+")").removeClass("edit-cell "+j),a(g).addClass("edit-cell "+j),a(i.rows[b]).addClass("selected-row "+k);try{f=a.unformat.call(i,g,{rowId:i.rows[b].id,colModel:h},c)}catch(m){f=h.edittype&&"textarea"===h.edittype?a(g).text():a(g).html()}if(i.p.autoencode&&(f=a.jgrid.htmlDecode(f)),h.edittype||(h.edittype="text"),i.p.savedRow.push({id:b,ic:c,name:e,v:f}),("&nbsp;"===f||"&#160;"===f||1===f.length&&160===f.charCodeAt(0))&&(f=""),a.isFunction(i.p.formatCell)){var
n=i.p.formatCell.call(i,i.rows[b].id,e,f,b,c);void
0!==n&&(f=n)}a(i).triggerHandler("jqGridBeforeEditCell",[i.rows[b].id,e,f,b,c]),a.isFunction(i.p.beforeEditCell)&&i.p.beforeEditCell.call(i,i.rows[b].id,e,f,b,c);var
o=a.extend({},h.editoptions||{},{id:b+"_"+e,name:e,rowId:i.rows[b].id,oper:"edit"}),p=a.jgrid.createEl.call(i,h.edittype,o,f,!0,a.extend({},a.jgrid.ajaxOptions,i.p.ajaxSelectOptions||{}));a.inArray(h.edittype,["text","textarea","password","select"])>-1&&a(p).addClass(l),a(g).html("").append(p).attr("tabindex","0"),a.jgrid.bindEv.call(i,p,o),window.setTimeout(function(){a(p).focus()},1),a("input, select, textarea",g).bind("keydown",function(d){if(27===d.keyCode&&(a("input.hasDatepicker",g).length>0?a(".ui-datepicker").is(":hidden")?a(i).jqGrid("restoreCell",b,c):a("input.hasDatepicker",g).datepicker("hide"):a(i).jqGrid("restoreCell",b,c)),13===d.keyCode&&!d.shiftKey)return a(i).jqGrid("saveCell",b,c),!1;if(9===d.keyCode){if(i.grid.hDiv.loading)return!1;d.shiftKey?a(i).jqGrid("prevCell",b,c):a(i).jqGrid("nextCell",b,c)}d.stopPropagation()}),a(i).triggerHandler("jqGridAfterEditCell",[i.rows[b].id,e,f,b,c]),a.isFunction(i.p.afterEditCell)&&i.p.afterEditCell.call(i,i.rows[b].id,e,f,b,c)}i.p.iCol=c,i.p.iRow=b}}})},saveCell:function(b,c){return this.each(function(){var
d,e=this,f=a.jgrid.getRegional(this,"errors"),g=a.jgrid.getRegional(this,"edit");if(e.grid&&e.p.cellEdit===!0){if(d=e.p.savedRow.length>=1?0:null,null!==d){var
h,i,j=a("td:eq("+c+")",e.rows[b]),k=e.p.colModel[c],l=k.name,m=a.jgrid.jqID(l),n=a(j).offset();switch(k.edittype){case"select":if(k.editoptions.multiple){var
o=a("#"+b+"_"+m,e.rows[b]),p=[];h=a(o).val(),h?h.join(","):h="",a("option:selected",o).each(function(b,c){p[b]=a(c).text()}),i=p.join(",")}else
h=a("#"+b+"_"+m+" option:selected",e.rows[b]).val(),i=a("#"+b+"_"+m+" option:selected",e.rows[b]).text();k.formatter&&(i=h);break;case"checkbox":var
q=["Yes","No"];k.editoptions&&(q=k.editoptions.value.split(":")),h=a("#"+b+"_"+m,e.rows[b]).is(":checked")?q[0]:q[1],i=h;break;case"password":case"text":case"textarea":case"button":h=a("#"+b+"_"+m,e.rows[b]).val(),i=h;break;case"custom":try{if(!k.editoptions||!a.isFunction(k.editoptions.custom_value))throw"e1";if(h=k.editoptions.custom_value.call(e,a(".customelement",j),"get"),void
0===h)throw"e2";i=h}catch(r){"e1"===r?a.jgrid.info_dialog(f.errcap,"function 'custom_value' "+g.msg.nodefined,g.bClose,{styleUI:e.p.styleUI}):"e2"===r?a.jgrid.info_dialog(f.errcap,"function 'custom_value' "+g.msg.novalue,g.bClose,{styleUI:e.p.styleUI}):a.jgrid.info_dialog(f.errcap,r.message,g.bClose,{styleUI:e.p.styleUI})}}if(i!==e.p.savedRow[d].v){var
s=a(e).triggerHandler("jqGridBeforeSaveCell",[e.rows[b].id,l,h,b,c]);if(s&&(h=s,i=s),a.isFunction(e.p.beforeSaveCell)){var
t=e.p.beforeSaveCell.call(e,e.rows[b].id,l,h,b,c);t&&(h=t,i=t)}var
u=a.jgrid.checkValues.call(e,h,c),v=!1;if(u[0]===!0){var
w=a(e).triggerHandler("jqGridBeforeSubmitCell",[e.rows[b].id,l,h,b,c])||{};if(a.isFunction(e.p.beforeSubmitCell)&&(w=e.p.beforeSubmitCell.call(e,e.rows[b].id,l,h,b,c),w||(w={})),a("input.hasDatepicker",j).length>0&&a("input.hasDatepicker",j).datepicker("hide"),"remote"===e.p.cellsubmit)if(e.p.cellurl){var
x={};e.p.autoencode&&(h=a.jgrid.htmlEncode(h)),k.editoptions&&k.editoptions.NullIfEmpty&&""===h&&(h="null",v=!0),x[l]=h;var
y,z,A;A=e.p.prmNames,y=A.id,z=A.oper,x[y]=a.jgrid.stripPref(e.p.idPrefix,e.rows[b].id),x[z]=A.editoper,x=a.extend(w,x),a(e).jqGrid("progressBar",{method:"show",loadtype:e.p.loadui,htmlcontent:a.jgrid.getRegional(e,"defaults.savetext")}),e.grid.hDiv.loading=!0,a.ajax(a.extend({url:e.p.cellurl,data:a.isFunction(e.p.serializeCellData)?e.p.serializeCellData.call(e,x,l):x,type:"POST",complete:function(d,k){if(a(e).jqGrid("progressBar",{method:"hide",loadtype:e.p.loadui}),e.grid.hDiv.loading=!1,"success"===k){var
m=a(e).triggerHandler("jqGridAfterSubmitCell",[e,d,x.id,l,h,b,c])||[!0,""];m[0]===!0&&a.isFunction(e.p.afterSubmitCell)&&(m=e.p.afterSubmitCell.call(e,d,x.id,l,h,b,c)),m[0]===!0?(v&&(h=""),a(j).empty(),a(e).jqGrid("setCell",e.rows[b].id,c,i,!1,!1,!0),a(j).addClass("dirty-cell"),a(e.rows[b]).addClass("edited"),a(e).triggerHandler("jqGridAfterSaveCell",[e.rows[b].id,l,h,b,c]),a.isFunction(e.p.afterSaveCell)&&e.p.afterSaveCell.call(e,e.rows[b].id,l,h,b,c),e.p.savedRow.splice(0,1)):(a.jgrid.info_dialog(f.errcap,m[1],g.bClose,{styleUI:e.p.styleUI}),e.p.restoreCellonFail&&a(e).jqGrid("restoreCell",b,c))}},error:function(d,h,i){a("#lui_"+a.jgrid.jqID(e.p.id)).hide(),e.grid.hDiv.loading=!1,a(e).triggerHandler("jqGridErrorCell",[d,h,i]),a.isFunction(e.p.errorCell)?e.p.errorCell.call(e,d,h,i):a.jgrid.info_dialog(f.errcap,d.status+" : "+d.statusText+"<br/>"+h,g.bClose,{styleUI:e.p.styleUI}),e.p.restoreCellonFail&&a(e).jqGrid("restoreCell",b,c)}},a.jgrid.ajaxOptions,e.p.ajaxCellOptions||{}))}else
try{a.jgrid.info_dialog(f.errcap,f.nourl,g.bClose,{styleUI:e.p.styleUI}),e.p.restoreCellonFail&&a(e).jqGrid("restoreCell",b,c)}catch(r){}"clientArray"===e.p.cellsubmit&&(a(j).empty(),a(e).jqGrid("setCell",e.rows[b].id,c,i,!1,!1,!0),a(j).addClass("dirty-cell"),a(e.rows[b]).addClass("edited"),a(e).triggerHandler("jqGridAfterSaveCell",[e.rows[b].id,l,h,b,c]),a.isFunction(e.p.afterSaveCell)&&e.p.afterSaveCell.call(e,e.rows[b].id,l,h,b,c),e.p.savedRow.splice(0,1))}else
try{window.setTimeout(function(){a.jgrid.info_dialog(f.errcap,h+" "+u[1],g.bClose,{styleUI:e.p.styleUI,top:n.top+40,left:n.left})},100),a(e).jqGrid("restoreCell",b,c)}catch(r){}}else
a(e).jqGrid("restoreCell",b,c)}window.setTimeout(function(){a("#"+a.jgrid.jqID(e.p.knv)).attr("tabindex","-1").focus()},0)}})},restoreCell:function(b,c){return this.each(function(){var
d,e=this;if(e.grid&&e.p.cellEdit===!0){if(d=e.p.savedRow.length>=1?0:null,null!==d){var
f=a("td:eq("+c+")",e.rows[b]);if(a.isFunction(a.fn.datepicker))try{a("input.hasDatepicker",f).datepicker("hide")}catch(g){}a(f).empty().attr("tabindex","-1"),a(e).jqGrid("setCell",e.rows[b].id,c,e.p.savedRow[d].v,!1,!1,!0),a(e).triggerHandler("jqGridAfterRestoreCell",[e.rows[b].id,e.p.savedRow[d].v,b,c]),a.isFunction(e.p.afterRestoreCell)&&e.p.afterRestoreCell.call(e,e.rows[b].id,e.p.savedRow[d].v,b,c),e.p.savedRow.splice(0,1)}window.setTimeout(function(){a("#"+e.p.knv).attr("tabindex","-1").focus()},0)}})},nextCell:function(b,c){return this.each(function(){var
d,e=this,f=!1;if(e.grid&&e.p.cellEdit===!0){for(d=c+1;d<e.p.colModel.length;d++)if(e.p.colModel[d].editable===!0&&(!a.isFunction(e.p.isCellEditable)||e.p.isCellEditable.call(e,e.p.colModel[d].name,b,d))){f=d;break}f!==!1?a(e).jqGrid("editCell",b,f,!0):e.p.savedRow.length>0&&a(e).jqGrid("saveCell",b,c)}})},prevCell:function(b,c){return this.each(function(){var
d,e=this,f=!1;if(e.grid&&e.p.cellEdit===!0){for(d=c-1;d>=0;d--)if(e.p.colModel[d].editable===!0&&(!a.isFunction(e.p.isCellEditable)||e.p.isCellEditable.call(e,e.p.colModel[d].name,b,d))){f=d;break}f!==!1?a(e).jqGrid("editCell",b,f,!0):e.p.savedRow.length>0&&a(e).jqGrid("saveCell",b,c)}})},GridNav:function(){return this.each(function(){function
b(b,c,e){if("v"===e.substr(0,1)){var
f=a(d.grid.bDiv)[0].clientHeight,g=a(d.grid.bDiv)[0].scrollTop,h=d.rows[b].offsetTop+d.rows[b].clientHeight,i=d.rows[b].offsetTop;"vd"===e&&h>=f&&(a(d.grid.bDiv)[0].scrollTop=a(d.grid.bDiv)[0].scrollTop+d.rows[b].clientHeight),"vu"===e&&g>i&&(a(d.grid.bDiv)[0].scrollTop=a(d.grid.bDiv)[0].scrollTop-d.rows[b].clientHeight)}if("h"===e){var
j=a(d.grid.bDiv)[0].clientWidth,k=a(d.grid.bDiv)[0].scrollLeft,l=d.rows[b].cells[c].offsetLeft+d.rows[b].cells[c].clientWidth,m=d.rows[b].cells[c].offsetLeft;l>=j+parseInt(k,10)?a(d.grid.bDiv)[0].scrollLeft=a(d.grid.bDiv)[0].scrollLeft+d.rows[b].cells[c].clientWidth:k>m&&(a(d.grid.bDiv)[0].scrollLeft=a(d.grid.bDiv)[0].scrollLeft-d.rows[b].cells[c].clientWidth)}}function
c(a,b){var
c,e;if("lft"===b)for(c=a+1,e=a;e>=0;e--)if(d.p.colModel[e].hidden!==!0){c=e;break}if("rgt"===b)for(c=a-1,e=a;e<d.p.colModel.length;e++)if(d.p.colModel[e].hidden!==!0){c=e;break}return c}var
d=this;if(d.grid&&d.p.cellEdit===!0){d.p.knv=d.p.id+"_kn";var
e,f,g=a("<div style='position:fixed;top:0px;width:1px;height:1px;' tabindex='0'><div tabindex='-1' style='width:1px;height:1px;' id='"+d.p.knv+"'></div></div>");a(g).insertBefore(d.grid.cDiv),a("#"+d.p.knv).focus().keydown(function(g){switch(f=g.keyCode,"rtl"===d.p.direction&&(37===f?f=39:39===f&&(f=37)),f){case
38:d.p.iRow-1>0&&(b(d.p.iRow-1,d.p.iCol,"vu"),a(d).jqGrid("editCell",d.p.iRow-1,d.p.iCol,!1));break;case
40:d.p.iRow+1<=d.rows.length-1&&(b(d.p.iRow+1,d.p.iCol,"vd"),a(d).jqGrid("editCell",d.p.iRow+1,d.p.iCol,!1));break;case
37:d.p.iCol-1>=0&&(e=c(d.p.iCol-1,"lft"),b(d.p.iRow,e,"h"),a(d).jqGrid("editCell",d.p.iRow,e,!1));break;case
39:d.p.iCol+1<=d.p.colModel.length-1&&(e=c(d.p.iCol+1,"rgt"),b(d.p.iRow,e,"h"),a(d).jqGrid("editCell",d.p.iRow,e,!1));break;case
13:parseInt(d.p.iCol,10)>=0&&parseInt(d.p.iRow,10)>=0&&a(d).jqGrid("editCell",d.p.iRow,d.p.iCol,!0);break;default:return!0}return!1})}})},getChangedCells:function(b){var
c=[];return b||(b="all"),this.each(function(){var
d,e=this;e.grid&&e.p.cellEdit===!0&&a(e.rows).each(function(f){var
g={};a(this).hasClass("edited")&&(a("td",this).each(function(c){if(d=e.p.colModel[c].name,"cb"!==d&&"subgrid"!==d)if("dirty"===b){if(a(this).hasClass("dirty-cell"))try{g[d]=a.unformat.call(e,this,{rowId:e.rows[f].id,colModel:e.p.colModel[c]},c)}catch(h){g[d]=a.jgrid.htmlDecode(a(this).html())}}else
try{g[d]=a.unformat.call(e,this,{rowId:e.rows[f].id,colModel:e.p.colModel[c]},c)}catch(h){g[d]=a.jgrid.htmlDecode(a(this).html())}}),g.id=this.id,c.push(g))})}),c}})});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";a.fn.jqm=function(d){var
f={overlay:50,closeoverlay:!0,overlayClass:"jqmOverlay",closeClass:"jqmClose",trigger:".jqModal",ajax:e,ajaxText:"",target:e,modal:e,toTop:e,onShow:e,onHide:e,onLoad:e};return this.each(function(){return this._jqm?c[this._jqm].c=a.extend({},c[this._jqm].c,d):(b++,this._jqm=b,c[b]={c:a.extend(f,a.jqm.params,d),a:e,w:a(this).addClass("jqmID"+b),s:b},void(f.trigger&&a(this).jqmAddTrigger(f.trigger)))})},a.fn.jqmAddClose=function(a){return j(this,a,"jqmHide")},a.fn.jqmAddTrigger=function(a){return j(this,a,"jqmShow")},a.fn.jqmShow=function(b){return this.each(function(){a.jqm.open(this._jqm,b)})},a.fn.jqmHide=function(b){return this.each(function(){a.jqm.close(this._jqm,b)})},a.jqm={hash:{},open:function(b,g){var
i=c[b],j=i.c,k="."+j.closeClass,l=parseInt(i.w.css("z-index"));l=l>0?l:3e3;var
m=a("<div></div>").css({height:"100%",width:"100%",position:"fixed",left:0,top:0,"z-index":l-1,opacity:j.overlay/100});if(i.a)return e;if(i.t=g,i.a=!0,i.w.css("z-index",l),j.modal?(d[0]||setTimeout(function(){new
h("bind")},1),d.push(b)):j.overlay>0?j.closeoverlay&&i.w.jqmAddClose(m):m=e,i.o=m?m.addClass(j.overlayClass).prependTo("body"):e,j.ajax){var
n=j.target||i.w,o=j.ajax;n="string"==typeof
n?a(n,i.w):a(n),o="@"===o.substr(0,1)?a(g).attr(o.substring(1)):o,n.html(j.ajaxText).load(o,function(){j.onLoad&&j.onLoad.call(this,i),k&&i.w.jqmAddClose(a(k,i.w)),f(i)})}else
k&&i.w.jqmAddClose(a(k,i.w));return j.toTop&&i.o&&i.w.before('<span id="jqmP'+i.w[0]._jqm+'"></span>').insertAfter(i.o),j.onShow?j.onShow(i):i.w.show(),f(i),e},close:function(b){var
f=c[b];return f.a?(f.a=e,d[0]&&(d.pop(),d[0]||new
h("unbind")),f.c.toTop&&f.o&&a("#jqmP"+f.w[0]._jqm).after(f.w).remove(),f.c.onHide?f.c.onHide(f):(f.w.hide(),f.o&&f.o.remove()),e):e},params:{}};var
b=0,c=a.jqm.hash,d=[],e=!1,f=function(a){void
0===a.c.focusField&&(a.c.focusField=0),a.c.focusField>=0&&g(a)},g=function(b){try{a(":input:visible",b.w)[parseInt(b.c.focusField,10)].focus()}catch(c){}},h=function(b){a(document)[b]("keypress",i)[b]("keydown",i)[b]("mousedown",i)},i=function(b){var
e=c[d[d.length-1]],f=!a(b.target).parents(".jqmID"+e.s)[0];return f&&(a(".jqmID"+e.s).each(function(){var
c=a(this),d=c.offset();return d.top<=b.pageY&&b.pageY<=d.top+c.height()&&d.left<=b.pageX&&b.pageX<=d.left+c.width()?(f=!1,!1):void
0}),g(e)),!f},j=function(b,d,f){return b.each(function(){var
b=this._jqm;a(d).each(function(){this[f]||(this[f]=[],a(this).click(function(){for(var
a
in{jqmShow:1,jqmHide:1})for(var
b
in
this[a])c[this[a][b]]&&c[this[a][b]].w[a](this);return e})),this[f].push(b)})})}});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";a.fn.jqDrag=function(a){return g(this,a,"d")},a.fn.jqResize=function(a,b){return g(this,a,"r",b)},a.jqDnR={dnr:{},e:0,drag:function(a){return"d"==e.k?f.css({left:e.X+a.pageX-e.pX,top:e.Y+a.pageY-e.pY}):(f.css({width:Math.max(a.pageX-e.pX+e.W,0),height:Math.max(a.pageY-e.pY+e.H,0)}),c&&b.css({width:Math.max(a.pageX-c.pX+c.W,0),height:Math.max(a.pageY-c.pY+c.H,0)})),!1},stop:function(){a(document).unbind("mousemove",d.drag).unbind("mouseup",d.stop)}};var
b,c,d=a.jqDnR,e=d.dnr,f=d.e,g=function(d,g,j,k){return d.each(function(){g=g?a(g,d):d,g.bind("mousedown",{e:d,k:j},function(d){var
g=d.data,j={};if(f=g.e,b=k?a(k):!1,"relative"!=f.css("position"))try{f.position(j)}catch(l){}if(e={X:j.left||h("left")||0,Y:j.top||h("top")||0,W:h("width")||f[0].scrollWidth||0,H:h("height")||f[0].scrollHeight||0,pX:d.pageX,pY:d.pageY,k:g.k},c=b&&"d"!=g.k?{X:j.left||i("left")||0,Y:j.top||i("top")||0,W:b[0].offsetWidth||i("width")||0,H:b[0].offsetHeight||i("height")||0,pX:d.pageX,pY:d.pageY,k:g.k}:!1,a("input.hasDatepicker",f[0])[0])try{a("input.hasDatepicker",f[0]).datepicker("hide")}catch(m){}return a(document).mousemove(a.jqDnR.drag).mouseup(a.jqDnR.stop),!1})})},h=function(a){return parseInt(f.css(a),10)||!1},i=function(a){return parseInt(b.css(a),10)||!1};a.fn.tinyDraggable=function(b){var
c=a.extend({handle:0,exclude:0},b);return this.each(function(){var
b,d,e=a(this),f=c.handle?a(c.handle,e):e;f.on({mousedown:function(f){if(!c.exclude||!~a.inArray(f.target,a(c.exclude,e))){f.preventDefault();var
g=e.offset();b=f.pageX-g.left,d=f.pageY-g.top,a(document).on("mousemove.drag",function(a){e.offset({top:a.pageY-d,left:a.pageX-b})})}},mouseup:function(b){a(document).off("mousemove.drag")}})})}});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery","./grid.base"],a):a(jQuery)}(function(a){"use strict";a.jgrid.extend({setSubGrid:function(){return this.each(function(){var
b,c,d=this,e=a.jgrid.styleUI[d.p.styleUI||"jQueryUI"].subgrid,f={plusicon:e.icon_plus,minusicon:e.icon_minus,openicon:e.icon_open,expandOnLoad:!1,delayOnLoad:50,selectOnExpand:!1,selectOnCollapse:!1,reloadOnExpand:!0};if(d.p.subGridOptions=a.extend(f,d.p.subGridOptions||{}),d.p.colNames.unshift(""),d.p.colModel.unshift({name:"subgrid",width:a.jgrid.cell_width?d.p.subGridWidth+d.p.cellLayout:d.p.subGridWidth,sortable:!1,resizable:!1,hidedlg:!0,search:!1,fixed:!0}),b=d.p.subGridModel,b[0])for(b[0].align=a.extend([],b[0].align||[]),c=0;c<b[0].name.length;c++)b[0].align[c]=b[0].align[c]||"left"})},addSubGridCell:function(b,c){var
d,e,f,g="";return this.each(function(){g=this.formatCol(b,c),e=this.p.id,d=this.p.subGridOptions.plusicon,f=a.jgrid.styleUI[this.p.styleUI||"jQueryUI"].common}),'<td role="gridcell" aria-describedby="'+e+'_subgrid" class="ui-sgcollapsed sgcollapsed" '+g+"><a style='cursor:pointer;' class='ui-sghref'><span class='"+f.icon_base+" "+d+"'></span></a></td>"},addSubGrid:function(b,c){return this.each(function(){var
d=this;if(d.grid){var
e,f,g,h,i,j=a.jgrid.styleUI[d.p.styleUI||"jQueryUI"].base,k=a.jgrid.styleUI[d.p.styleUI||"jQueryUI"].common,l=function(b,c,e){var
f=a("<td align='"+d.p.subGridModel[0].align[e]+"'></td>").html(c);a(b).append(f)},m=function(b,c){var
e,f,g,h=a("<table class='"+j.rowTable+" ui-common-table'><tbody></tbody></table>"),i=a("<tr></tr>");for(f=0;f<d.p.subGridModel[0].name.length;f++)e=a("<th class='"+j.headerBox+" ui-th-subgrid ui-th-column ui-th-"+d.p.direction+"'></th>"),a(e).html(d.p.subGridModel[0].name[f]),a(e).width(d.p.subGridModel[0].width[f]),a(i).append(e);a(h).append(i),b&&(g=d.p.xmlReader.subgrid,a(g.root+" "+g.row,b).each(function(){if(i=a("<tr class='"+k.content+" ui-subtblcell'></tr>"),g.repeatitems===!0)a(g.cell,this).each(function(b){l(i,a(this).text()||"&#160;",b)});else{var
b=d.p.subGridModel[0].mapping||d.p.subGridModel[0].name;if(b)for(f=0;f<b.length;f++)l(i,a(b[f],this).text()||"&#160;",f)}a(h).append(i)}));var
m=a("table:first",d.grid.bDiv).attr("id")+"_";return a("#"+a.jgrid.jqID(m+c)).append(h),d.grid.hDiv.loading=!1,a("#load_"+a.jgrid.jqID(d.p.id)).hide(),!1},n=function(b,c){var
e,f,g,h,i,m,n=a("<table class='"+j.rowTable+" ui-common-table'><tbody></tbody></table>"),o=a("<tr></tr>");for(g=0;g<d.p.subGridModel[0].name.length;g++)e=a("<th class='"+j.headerBox+" ui-th-subgrid ui-th-column ui-th-"+d.p.direction+"'></th>"),a(e).html(d.p.subGridModel[0].name[g]),a(e).width(d.p.subGridModel[0].width[g]),a(o).append(e);if(a(n).append(o),b&&(i=d.p.jsonReader.subgrid,f=a.jgrid.getAccessor(b,i.root),void
0!==f))for(g=0;g<f.length;g++){if(h=f[g],o=a("<tr class='"+k.content+" ui-subtblcell'></tr>"),i.repeatitems===!0)for(i.cell&&(h=h[i.cell]),m=0;m<h.length;m++)l(o,h[m]||"&#160;",m);else{var
p=d.p.subGridModel[0].mapping||d.p.subGridModel[0].name;if(p.length)for(m=0;m<p.length;m++)l(o,h[p[m]]||"&#160;",m)}a(n).append(o)}var
q=a("table:first",d.grid.bDiv).attr("id")+"_";return a("#"+a.jgrid.jqID(q+c)).append(n),d.grid.hDiv.loading=!1,a("#load_"+a.jgrid.jqID(d.p.id)).hide(),!1},o=function(b){var
c,e,f,g;if(c=a(b).attr("id"),e={nd_:(new
Date).getTime()},e[d.p.prmNames.subgridid]=c,!d.p.subGridModel[0])return!1;if(d.p.subGridModel[0].params)for(g=0;g<d.p.subGridModel[0].params.length;g++)for(f=0;f<d.p.colModel.length;f++)d.p.colModel[f].name===d.p.subGridModel[0].params[g]&&(e[d.p.colModel[f].name]=a("td:eq("+f+")",b).text().replace(/\&#160\;/gi,""));if(!d.grid.hDiv.loading)switch(d.grid.hDiv.loading=!0,a("#load_"+a.jgrid.jqID(d.p.id)).show(),d.p.subgridtype||(d.p.subgridtype=d.p.datatype),a.isFunction(d.p.subgridtype)?d.p.subgridtype.call(d,e):d.p.subgridtype=d.p.subgridtype.toLowerCase(),d.p.subgridtype){case"xml":case"json":a.ajax(a.extend({type:d.p.mtype,url:a.isFunction(d.p.subGridUrl)?d.p.subGridUrl.call(d,e):d.p.subGridUrl,dataType:d.p.subgridtype,data:a.isFunction(d.p.serializeSubGridData)?d.p.serializeSubGridData.call(d,e):e,complete:function(b){"xml"===d.p.subgridtype?m(b.responseXML,c):n(a.jgrid.parse(b.responseText),c),b=null}},a.jgrid.ajaxOptions,d.p.ajaxSubgridOptions||{}))}return!1},p=0;a.each(d.p.colModel,function(){(this.hidden===!0||"rn"===this.name||"cb"===this.name)&&p++});var
q,r=d.rows.length,s=1,t=a.isFunction(d.p.isHasSubGrid);for(void
0!==c&&c>0&&(s=c,r=c+1);r>s;){if(a(d.rows[s]).hasClass("jqgrow")){if(d.p.scroll&&a(d.rows[s].cells[b]).unbind("click"),q=null,t)var
q=d.p.isHasSubGrid.call(d,d.rows[s].id);q===!1?d.rows[s].cells[b].innerHTML="":a(d.rows[s].cells[b]).bind("click",function(){var
c=a(this).parent("tr")[0];if(f=d.p.id,e=c.id,i=a("#"+f+"_"+e+"_expandedContent"),a(this).hasClass("sgcollapsed")){if(h=a(d).triggerHandler("jqGridSubGridBeforeExpand",[f+"_"+e,e]),h=h===!1||"stop"===h?!1:!0,h&&a.isFunction(d.p.subGridBeforeExpand)&&(h=d.p.subGridBeforeExpand.call(d,f+"_"+e,e)),h===!1)return!1;d.p.subGridOptions.reloadOnExpand===!0||d.p.subGridOptions.reloadOnExpand===!1&&!i.hasClass("ui-subgrid")?(g=b>=1?"<td colspan='"+b+"'>&#160;</td>":"",a(c).after("<tr role='row' id='"+f+"_"+e+"_expandedContent' class='ui-subgrid ui-sg-expanded'>"+g+"<td class='"+k.content+" subgrid-cell'><span class='"+k.icon_base+" "+d.p.subGridOptions.openicon+"'></span></td><td colspan='"+parseInt(d.p.colNames.length-1-p,10)+"' class='"+k.content+" subgrid-data'><div id="+f+"_"+e+" class='tablediv'></div></td></tr>"),a(d).triggerHandler("jqGridSubGridRowExpanded",[f+"_"+e,e]),a.isFunction(d.p.subGridRowExpanded)?d.p.subGridRowExpanded.call(d,f+"_"+e,e):o(c)):i.show().removeClass("ui-sg-collapsed").addClass("ui-sg-expanded"),a(this).html("<a style='cursor:pointer;' class='ui-sghref'><span class='"+k.icon_base+" "+d.p.subGridOptions.minusicon+"'></span></a>").removeClass("sgcollapsed").addClass("sgexpanded"),d.p.subGridOptions.selectOnExpand&&a(d).jqGrid("setSelection",e)}else
if(a(this).hasClass("sgexpanded")){if(h=a(d).triggerHandler("jqGridSubGridRowColapsed",[f+"_"+e,e]),h=h===!1||"stop"===h?!1:!0,h&&a.isFunction(d.p.subGridRowColapsed)&&(h=d.p.subGridRowColapsed.call(d,f+"_"+e,e)),h===!1)return!1;d.p.subGridOptions.reloadOnExpand===!0?i.remove(".ui-subgrid"):i.hasClass("ui-subgrid")&&i.hide().addClass("ui-sg-collapsed").removeClass("ui-sg-expanded"),a(this).html("<a style='cursor:pointer;' class='ui-sghref'><span class='"+k.icon_base+" "+d.p.subGridOptions.plusicon+"'></span></a>").removeClass("sgexpanded").addClass("sgcollapsed"),d.p.subGridOptions.selectOnCollapse&&a(d).jqGrid("setSelection",e)}return!1})}s++}d.p.subGridOptions.expandOnLoad===!0&&a(d.rows).filter(".jqgrow").each(function(b,c){a(c.cells[0]).click()}),d.subGridXml=function(a,b){m(a,b)},d.subGridJson=function(a,b){n(a,b)}}})},expandSubGridRow:function(b){return this.each(function(){var
c=this;if((c.grid||b)&&c.p.subGrid===!0){var
d=a(this).jqGrid("getInd",b,!0);if(d){var
e=a("td.sgcollapsed",d)[0];e&&a(e).trigger("click")}}})},collapseSubGridRow:function(b){return this.each(function(){var
c=this;if((c.grid||b)&&c.p.subGrid===!0){var
d=a(this).jqGrid("getInd",b,!0);if(d){var
e=a("td.sgexpanded",d)[0];e&&a(e).trigger("click")}}})},toggleSubGridRow:function(b){return this.each(function(){var
c=this;if((c.grid||b)&&c.p.subGrid===!0){var
d=a(this).jqGrid("getInd",b,!0);if(d){var
e=a("td.sgcollapsed",d)[0];e?a(e).trigger("click"):(e=a("td.sgexpanded",d)[0],e&&a(e).trigger("click"))}}})}})});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery","./grid.base"],a):a(jQuery)}(function(a){"use strict";a.jgrid.extend({groupingSetup:function(){return this.each(function(){var
b,c,d,e=this,f=e.p.colModel,g=e.p.groupingView,h=a.jgrid.styleUI[e.p.styleUI||"jQueryUI"].grouping;if(null===g||"object"!=typeof
g&&!a.isFunction(g))e.p.grouping=!1;else
if(g.plusicon||(g.plusicon=h.icon_plus),g.minusicon||(g.minusicon=h.icon_minus),g.groupField.length){for(void
0===g.visibiltyOnNextGrouping&&(g.visibiltyOnNextGrouping=[]),g.lastvalues=[],g._locgr||(g.groups=[]),g.counters=[],b=0;b<g.groupField.length;b++)g.groupOrder[b]||(g.groupOrder[b]="asc"),g.groupText[b]||(g.groupText[b]="{0}"),"boolean"!=typeof
g.groupColumnShow[b]&&(g.groupColumnShow[b]=!0),"boolean"!=typeof
g.groupSummary[b]&&(g.groupSummary[b]=!1),g.groupSummaryPos[b]||(g.groupSummaryPos[b]="footer"),g.groupColumnShow[b]===!0?(g.visibiltyOnNextGrouping[b]=!0,a(e).jqGrid("showCol",g.groupField[b])):(g.visibiltyOnNextGrouping[b]=a("#"+a.jgrid.jqID(e.p.id+"_"+g.groupField[b])).is(":visible"),a(e).jqGrid("hideCol",g.groupField[b]));for(g.summary=[],g.hideFirstGroupCol&&a.isArray(g.formatDisplayField)&&!a.isFunction(g.formatDisplayField[0])&&(g.formatDisplayField[0]=function(a){return a}),c=0,d=f.length;d>c;c++)g.hideFirstGroupCol&&(f[c].hidden||g.groupField[0]!==f[c].name||(f[c].formatter=function(){return""})),f[c].summaryType&&(f[c].summaryDivider?g.summary.push({nm:f[c].name,st:f[c].summaryType,v:"",sd:f[c].summaryDivider,vd:"",sr:f[c].summaryRound,srt:f[c].summaryRoundType||"round"}):g.summary.push({nm:f[c].name,st:f[c].summaryType,v:"",sr:f[c].summaryRound,srt:f[c].summaryRoundType||"round"}))}else
e.p.grouping=!1})},groupingPrepare:function(b,c){return this.each(function(){var
d,e,f,g,h,i=this.p.groupingView,j=this,k=function(){a.isFunction(this.st)?this.v=this.st.call(j,this.v,this.nm,b):(this.v=a(j).jqGrid("groupingCalculations.handler",this.st,this.v,this.nm,this.sr,this.srt,b),"avg"===this.st.toLowerCase()&&this.sd&&(this.vd=a(j).jqGrid("groupingCalculations.handler",this.st,this.vd,this.sd,this.sr,this.srt,b)))},l=i.groupField.length,m=0;for(d=0;l>d;d++)e=i.groupField[d],g=i.displayField[d],f=b[e],h=null==g?null:b[g],null==h&&(h=f),void
0!==f&&(0===c?(i.groups.push({idx:d,dataIndex:e,value:f,displayValue:h,startRow:c,cnt:1,summary:[]}),i.lastvalues[d]=f,i.counters[d]={cnt:1,pos:i.groups.length-1,summary:a.extend(!0,[],i.summary)},a.each(i.counters[d].summary,k),i.groups[i.counters[d].pos].summary=i.counters[d].summary):"object"==typeof
f||(a.isArray(i.isInTheSameGroup)&&a.isFunction(i.isInTheSameGroup[d])?i.isInTheSameGroup[d].call(j,i.lastvalues[d],f,d,i):i.lastvalues[d]===f)?1===m?(i.groups.push({idx:d,dataIndex:e,value:f,displayValue:h,startRow:c,cnt:1,summary:[]}),i.lastvalues[d]=f,i.counters[d]={cnt:1,pos:i.groups.length-1,summary:a.extend(!0,[],i.summary)},a.each(i.counters[d].summary,k),i.groups[i.counters[d].pos].summary=i.counters[d].summary):(i.counters[d].cnt+=1,i.groups[i.counters[d].pos].cnt=i.counters[d].cnt,a.each(i.counters[d].summary,k),i.groups[i.counters[d].pos].summary=i.counters[d].summary):(i.groups.push({idx:d,dataIndex:e,value:f,displayValue:h,startRow:c,cnt:1,summary:[]}),i.lastvalues[d]=f,m=1,i.counters[d]={cnt:1,pos:i.groups.length-1,summary:a.extend(!0,[],i.summary)},a.each(i.counters[d].summary,k),i.groups[i.counters[d].pos].summary=i.counters[d].summary))}),this},groupingToggle:function(b){return this.each(function(){var
c=this,d=c.p.groupingView,e=b.split("_"),f=parseInt(e[e.length-2],10);e.splice(e.length-2,2);var
g,h,i=e.join("_"),j=d.minusicon,k=d.plusicon,l=a("#"+a.jgrid.jqID(b)),m=l.length?l[0].nextSibling:null,n=a("#"+a.jgrid.jqID(b)+" span.tree-wrap-"+c.p.direction),o=function(b){var
c=a.map(b.split(" "),function(a){return a.substring(0,i.length+1)===i+"_"?parseInt(a.substring(i.length+1),10):void
0});return c.length>0?c[0]:void
0},p=!1,q=!1,r=c.p.frozenColumns?c.p.id+"_frozen":!1,s=r?a("#"+a.jgrid.jqID(b),"#"+a.jgrid.jqID(r)):!1,t=s&&s.length?s[0].nextSibling:null;if(n.hasClass(j)){if(m)for(;m&&(g=o(m.className),!(void
0!==g&&f>=g));)a(m).hide(),m=m.nextSibling,r&&(a(t).hide(),t=t.nextSibling);n.removeClass(j).addClass(k),p=!0}else{if(m)for(h=void
0;m;){if(g=o(m.className),void
0===h&&(h=void
0===g),q=a(m).hasClass("ui-subgrid")&&a(m).hasClass("ui-sg-collapsed"),void
0!==g){if(f>=g)break;g===f+1&&(q||(a(m).show().find(">td>span.tree-wrap-"+c.p.direction).removeClass(j).addClass(k),r&&a(t).show().find(">td>span.tree-wrap-"+c.p.direction).removeClass(j).addClass(k)))}else
h&&(q||(a(m).show(),r&&a(t).show()));m=m.nextSibling,r&&(t=t.nextSibling)}n.removeClass(k).addClass(j)}a(c).triggerHandler("jqGridGroupingClickGroup",[b,p]),a.isFunction(c.p.onClickGroup)&&c.p.onClickGroup.call(c,b,p)}),!1},groupingRender:function(b,c,d,e){return this.each(function(){function
f(a,b,c){var
d,e=!1;if(0===b)e=c[a];else{var
f=c[a].idx;if(0===f)e=c[a];else
for(d=a;d>=0;d--)if(c[d].idx===f-b){e=c[d];break}}return e}function
g(b,d,e,g){var
h,i,j=f(b,d,e),l=k.p.colModel,m=j.cnt,n="";for(i=g;c>i;i++){var
o="<td "+k.formatCol(i,1,"")+">&#160;</td>",p="{0}";a.each(j.summary,function(){if(this.nm===l[i].name){l[i].summaryTpl&&(p=l[i].summaryTpl),"string"==typeof
this.st&&"avg"===this.st.toLowerCase()&&(this.sd&&this.vd?this.v=this.v/this.vd:this.v&&m>0&&(this.v=this.v/m));try{this.groupCount=j.cnt,this.groupIndex=j.dataIndex,this.groupValue=j.value,h=k.formatter("",this.v,i,this)}catch(b){h=this.v}return o="<td "+k.formatCol(i,1,"")+">"+a.jgrid.template(p,h)+"</td>",!1}}),n+=o}return n}var
h,i,j,k=this,l=k.p.groupingView,m="",n="",o=l.groupCollapse?l.plusicon:l.minusicon,p=[],q=l.groupField.length,r=a.jgrid.styleUI[k.p.styleUI||"jQueryUI"].common;o=o+" tree-wrap-"+k.p.direction,a.each(k.p.colModel,function(a,b){var
c;for(c=0;q>c;c++)if(l.groupField[c]===b.name){p[c]=a;break}});var
s,t=0,u=a.makeArray(l.groupSummary);u.reverse(),s=k.p.multiselect?' colspan="2"':"",a.each(l.groups,function(f,v){if(l._locgr&&!(v.startRow+v.cnt>(d-1)*e&&v.startRow<d*e))return!0;t++,i=k.p.id+"ghead_"+v.idx,h=i+"_"+f,n="<span style='cursor:pointer;margin-right:8px;margin-left:5px;' class='"+r.icon_base+" "+o+"' onclick=\"jQuery('#"+a.jgrid.jqID(k.p.id)+"').jqGrid('groupingToggle','"+h+"');return false;\"></span>";try{a.isArray(l.formatDisplayField)&&a.isFunction(l.formatDisplayField[v.idx])?(v.displayValue=l.formatDisplayField[v.idx].call(k,v.displayValue,v.value,k.p.colModel[p[v.idx]],v.idx,l),j=v.displayValue):j=k.formatter(h,v.displayValue,p[v.idx],v.value)}catch(w){j=v.displayValue}var
x="";x=a.isFunction(l.groupText[v.idx])?l.groupText[v.idx].call(k,j,v.cnt,v.summary):a.jgrid.template(l.groupText[v.idx],j,v.cnt,v.summary),"string"!=typeof
x&&"number"!=typeof
x&&(x=j),"header"===l.groupSummaryPos[v.idx]?(m+='<tr id="'+h+'"'+(l.groupCollapse&&v.idx>0?' style="display:none;" ':" ")+'role="row" class= "'+r.content+" jqgroup ui-row-"+k.p.direction+" "+i+'"><td style="padding-left:'+12*v.idx+'px;"'+s+">"+n+x+"</td>",m+=g(f,0,l.groups,l.groupColumnShow[v.idx]===!1?""===s?2:3:""===s?1:2),m+="</tr>"):m+='<tr id="'+h+'"'+(l.groupCollapse&&v.idx>0?' style="display:none;" ':" ")+'role="row" class= "'+r.content+" jqgroup ui-row-"+k.p.direction+" "+i+'"><td style="padding-left:'+12*v.idx+'px;" colspan="'+(l.groupColumnShow[v.idx]===!1?c-1:c)+'">'+n+x+"</td></tr>";var
y=q-1===v.idx;if(y){var
z,A,B=l.groups[f+1],C=0,D=v.startRow,E=void
0!==B?B.startRow:l.groups[f].startRow+l.groups[f].cnt;for(l._locgr&&(C=(d-1)*e,C>v.startRow&&(D=C)),z=D;E>z&&b[z-C];z++)m+=b[z-C].join("");if("header"!==l.groupSummaryPos[v.idx]){var
F;if(void
0!==B){for(F=0;F<l.groupField.length&&B.dataIndex!==l.groupField[F];F++);t=l.groupField.length-F}for(A=0;t>A;A++)if(u[A]){var
G="";l.groupCollapse&&!l.showSummaryOnHide&&(G=' style="display:none;"'),m+="<tr"+G+' jqfootlevel="'+(v.idx-A)+'" role="row" class="'+r.content+" jqfoot ui-row-"+k.p.direction+'">',m+=g(f,A,l.groups,0),m+="</tr>"}t=F}}}),a("#"+a.jgrid.jqID(k.p.id)+" tbody:first").append(m),m=null})},groupingGroupBy:function(b,c){return this.each(function(){var
d=this;"string"==typeof
b&&(b=[b]);var
e=d.p.groupingView;d.p.grouping=!0,e._locgr=!1,void
0===e.visibiltyOnNextGrouping&&(e.visibiltyOnNextGrouping=[]);var
f;for(f=0;f<e.groupField.length;f++)!e.groupColumnShow[f]&&e.visibiltyOnNextGrouping[f]&&a(d).jqGrid("showCol",e.groupField[f]);for(f=0;f<b.length;f++)e.visibiltyOnNextGrouping[f]=a("#"+a.jgrid.jqID(d.p.id)+"_"+a.jgrid.jqID(b[f])).is(":visible");d.p.groupingView=a.extend(d.p.groupingView,c||{}),e.groupField=b,a(d).trigger("reloadGrid")})},groupingRemove:function(b){return this.each(function(){var
c=this;if(void
0===b&&(b=!0),c.p.grouping=!1,b===!0){var
d,e=c.p.groupingView;for(d=0;d<e.groupField.length;d++)!e.groupColumnShow[d]&&e.visibiltyOnNextGrouping[d]&&a(c).jqGrid("showCol",e.groupField);a("tr.jqgroup, tr.jqfoot","#"+a.jgrid.jqID(c.p.id)+" tbody:first").remove(),a("tr.jqgrow:hidden","#"+a.jgrid.jqID(c.p.id)+" tbody:first").show()}else
a(c).trigger("reloadGrid")})},groupingCalculations:{handler:function(a,b,c,d,e,f){var
g={sum:function(){return parseFloat(b||0)+parseFloat(f[c]||0)},min:function(){return""===b?parseFloat(f[c]||0):Math.min(parseFloat(b),parseFloat(f[c]||0))},max:function(){return""===b?parseFloat(f[c]||0):Math.max(parseFloat(b),parseFloat(f[c]||0))},count:function(){return""===b&&(b=0),f.hasOwnProperty(c)?b+1:0},avg:function(){return g.sum()}};if(!g[a])throw"jqGrid Grouping No such method: "+a;var
h=g[a]();if(null!=d)if("fixed"===e)h=h.toFixed(d);else{var
i=Math.pow(10,d);h=Math.round(h*i)/i}return h}},setGroupHeaders:function(b){return b=a.extend({useColSpanStyle:!1,groupHeaders:[]},b||{}),this.each(function(){var
c,d,e,f,g,h,i,j,k,l,m,n,o,p,q=this,r=0,s=q.p.colModel,t=s.length,u=q.grid.headers,v=a("table.ui-jqgrid-htable",q.grid.hDiv),w=v.children("thead").children("tr.ui-jqgrid-labels:last").addClass("jqg-second-row-header"),x=v.children("thead"),y=v.find(".jqg-first-row-header"),z=a.jgrid.styleUI[q.p.styleUI||"jQueryUI"].base;q.p.groupHeader||(q.p.groupHeader=[]),q.p.groupHeader.push(b),void
0===y[0]?y=a("<tr>",{role:"row","aria-hidden":"true"}).addClass("jqg-first-row-header").css("height","auto"):y.empty();var
A,B=function(a,b){var
c,d=b.length;for(c=0;d>c;c++)if(b[c].startColumnName===a)return c;return-1};for(a(q).prepend(x),e=a("<tr>",{role:"row"}).addClass("ui-jqgrid-labels jqg-third-row-header"),c=0;t>c;c++)if(g=u[c].el,h=a(g),d=s[c],i={height:"0px",width:u[c].width+"px",display:d.hidden?"none":""},a("<th>",{role:"gridcell"}).css(i).addClass("ui-first-th-"+q.p.direction).appendTo(y),g.style.width="",j=B(d.name,b.groupHeaders),j>=0){for(k=b.groupHeaders[j],l=k.numberOfColumns,m=k.titleText,o=k.className||"",n=0,j=0;l>j&&t>c+j;j++)s[c+j].hidden||n++;f=a("<th>").attr({role:"columnheader"}).addClass(z.headerBox+" ui-th-column-header ui-th-"+q.p.direction+" "+o).html(m),n>0&&f.attr("colspan",String(n)),q.p.headertitles&&f.attr("title",f.text()),0===n&&f.hide(),h.before(f),e.append(g),r=l-1}else
0===r?b.useColSpanStyle?h.attr("rowspan","2"):(a("<th>",{role:"columnheader"}).addClass(z.headerBox+" ui-th-column-header ui-th-"+q.p.direction).css({display:d.hidden?"none":""}).insertBefore(h),e.append(g)):(e.append(g),r--);p=a(q).children("thead"),p.prepend(y),e.insertAfter(w),v.append(p),b.useColSpanStyle&&(v.find("span.ui-jqgrid-resize").each(function(){var
b=a(this).parent();b.is(":visible")&&(this.style.cssText="height: "+b.height()+"px !important; cursor: col-resize;")}),v.find("div.ui-jqgrid-sortable").each(function(){var
b=a(this),c=b.parent();c.is(":visible")&&c.is(":has(span.ui-jqgrid-resize)")&&b.css("top",(c.height()-b.outerHeight())/2-4+"px")})),A=p.find("tr.jqg-first-row-header"),a(q).bind("jqGridResizeStop.setGroupHeaders",function(a,b,c){A.find("th").eq(c)[0].style.width=b+"px"})})},destroyGroupHeader:function(b){return void
0===b&&(b=!0),this.each(function(){var
c,d,e,f,g,h,i,j=this,k=j.grid,l=a("table.ui-jqgrid-htable thead",k.hDiv),m=j.p.colModel;if(k){for(a(this).unbind(".setGroupHeaders"),c=a("<tr>",{role:"row"}).addClass("ui-jqgrid-labels"),f=k.headers,d=0,e=f.length;e>d;d++){i=m[d].hidden?"none":"",g=a(f[d].el).width(f[d].width).css("display",i);try{g.removeAttr("rowSpan")}catch(n){g.attr("rowSpan",1)}c.append(g),h=g.children("span.ui-jqgrid-resize"),h.length>0&&(h[0].style.height=""),g.children("div")[0].style.top=""}a(l).children("tr.ui-jqgrid-labels").remove(),a(l).prepend(c),b===!0&&a(j).jqGrid("setGridParam",{groupHeader:null})}})}})});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery","./grid.base"],a):a(jQuery)}(function(a){"use strict";a.jgrid.extend({setTreeNode:function(b,c){return this.each(function(){var
d=this;if(d.grid&&d.p.treeGrid){var
e,f,g,h,i,j,k,l,m=d.p.expColInd,n=d.p.treeReader.expanded_field,o=d.p.treeReader.leaf_field,p=d.p.treeReader.level_field,q=d.p.treeReader.icon_field,r=d.p.treeReader.loaded,s=a.jgrid.styleUI[d.p.styleUI||"jQueryUI"].common,t=b;for(a(d).triggerHandler("jqGridBeforeSetTreeNode",[t,c]),a.isFunction(d.p.beforeSetTreeNode)&&d.p.beforeSetTreeNode.call(d,t,c);c>b;){var
u,v=a.jgrid.stripPref(d.p.idPrefix,d.rows[b].id),w=d.p._index[v];k=d.p.data[w],"nested"===d.p.treeGridModel&&(k[o]||(e=parseInt(k[d.p.treeReader.left_field],10),f=parseInt(k[d.p.treeReader.right_field],10),k[o]=f===e+1?"true":"false",d.rows[b].cells[d.p._treeleafpos].innerHTML=k[o])),g=parseInt(k[p],10),0===d.p.tree_root_level?(h=g+1,i=g):(h=g,i=g-1),j="<div class='tree-wrap tree-wrap-"+d.p.direction+"' style='width:"+18*h+"px;'>",j+="<div style='"+("rtl"===d.p.direction?"right:":"left:")+18*i+"px;' class='"+s.icon_base+" ",void
0!==k[r]&&("true"===k[r]||k[r]===!0?k[r]=!0:k[r]=!1),"true"===k[o]||k[o]===!0?(j+=(void
0!==k[q]&&""!==k[q]?k[q]:d.p.treeIcons.leaf)+" tree-leaf treeclick",k[o]=!0,l="leaf"):(k[o]=!1,l=""),k[n]=("true"===k[n]||k[n]===!0?!0:!1)&&(k[r]||void
0===k[r]),j+=k[n]===!1?k[o]===!0?"'":d.p.treeIcons.plus+" tree-plus treeclick'":k[o]===!0?"'":d.p.treeIcons.minus+" tree-minus treeclick'",j+="></div></div>",a(d.rows[b].cells[m]).wrapInner("<span class='cell-wrapper"+l+"'></span>").prepend(j),g!==parseInt(d.p.tree_root_level,10)&&(u=a(d).jqGrid("isVisibleNode",k),u||a(d.rows[b]).css("display","none")),a(d.rows[b].cells[m]).find("div.treeclick").bind("click",function(b){var
c=b.target||b.srcElement,e=a.jgrid.stripPref(d.p.idPrefix,a(c,d.rows).closest("tr.jqgrow")[0].id),f=d.p._index[e];return d.p.data[f][o]||(d.p.data[f][n]?(a(d).jqGrid("collapseRow",d.p.data[f]),a(d).jqGrid("collapseNode",d.p.data[f])):(a(d).jqGrid("expandRow",d.p.data[f]),a(d).jqGrid("expandNode",d.p.data[f]))),!1}),d.p.ExpandColClick===!0&&a(d.rows[b].cells[m]).find("span.cell-wrapper").css("cursor","pointer").bind("click",function(b){var
c=b.target||b.srcElement,e=a.jgrid.stripPref(d.p.idPrefix,a(c,d.rows).closest("tr.jqgrow")[0].id),f=d.p._index[e];return d.p.data[f][o]||(d.p.data[f][n]?(a(d).jqGrid("collapseRow",d.p.data[f]),a(d).jqGrid("collapseNode",d.p.data[f])):(a(d).jqGrid("expandRow",d.p.data[f]),a(d).jqGrid("expandNode",d.p.data[f]))),a(d).jqGrid("setSelection",e),!1}),b++}a(d).triggerHandler("jqGridAfterSetTreeNode",[t,c]),a.isFunction(d.p.afterSetTreeNode)&&d.p.afterSetTreeNode.call(d,t,c)}})},setTreeGrid:function(){return this.each(function(){var
b,c,d,e,f=this,g=0,h=!1,i=[],j=a.jgrid.styleUI[f.p.styleUI||"jQueryUI"].treegrid;if(f.p.treeGrid){f.p.treedatatype||a.extend(f.p,{treedatatype:f.p.datatype}),f.p.loadonce&&(f.p.treedatatype="local"),f.p.subGrid=!1,f.p.altRows=!1,f.p.pgbuttons=!1,f.p.pginput=!1,f.p.gridview=!0,null===f.p.rowTotal&&(f.p.rowNum=1e4),f.p.multiselect=!1,f.p.rowList=[],f.p.expColInd=0,b=j.icon_plus,"jQueryUI"===f.p.styleUI&&(b+="rtl"===f.p.direction?"w":"e"),f.p.treeIcons=a.extend({plus:b,minus:j.icon_minus,leaf:j.icon_leaf},f.p.treeIcons||{}),"nested"===f.p.treeGridModel?f.p.treeReader=a.extend({level_field:"level",left_field:"lft",right_field:"rgt",leaf_field:"isLeaf",expanded_field:"expanded",loaded:"loaded",icon_field:"icon"},f.p.treeReader):"adjacency"===f.p.treeGridModel&&(f.p.treeReader=a.extend({level_field:"level",parent_id_field:"parent",leaf_field:"isLeaf",expanded_field:"expanded",loaded:"loaded",icon_field:"icon"},f.p.treeReader));for(d
in
f.p.colModel)if(f.p.colModel.hasOwnProperty(d)){c=f.p.colModel[d].name,c!==f.p.ExpandColumn||h||(h=!0,f.p.expColInd=g),g++;for(e
in
f.p.treeReader)f.p.treeReader.hasOwnProperty(e)&&f.p.treeReader[e]===c&&i.push(c)}a.each(f.p.treeReader,function(b,c){c&&-1===a.inArray(c,i)&&("leaf_field"===b&&(f.p._treeleafpos=g),g++,f.p.colNames.push(c),f.p.colModel.push({name:c,width:1,hidden:!0,sortable:!1,resizable:!1,hidedlg:!0,editable:!0,search:!1}))})}})},expandRow:function(b){this.each(function(){var
c=this;if(c.grid&&c.p.treeGrid){var
d=a(c).jqGrid("getNodeChildren",b),e=c.p.treeReader.expanded_field,f=b[c.p.localReader.id],g=a.isFunction(c.p.beforeExpandTreeGridRow)?c.p.beforeExpandTreeGridRow.call(c,f,b,d):!0;g!==!1&&(a(d).each(function(){var
b=c.p.idPrefix+a.jgrid.getAccessor(this,c.p.localReader.id);a(a(c).jqGrid("getGridRowById",b)).css("display",""),this[e]&&a(c).jqGrid("expandRow",this)}),a.isFunction(c.p.afterExpandTreeGridRow)&&c.p.afterExpandTreeGridRow.call(c,f,b,d))}})},collapseRow:function(b){this.each(function(){var
c=this;if(c.grid&&c.p.treeGrid){var
d=a(c).jqGrid("getNodeChildren",b),e=c.p.treeReader.expanded_field,f=b[c.p.localReader.id],g=a.isFunction(c.p.beforeCollapseTreeGridRow)?c.p.beforeCollapseTreeGridRow.call(c,f,b,d):!0;g!==!1&&(a(d).each(function(){var
b=c.p.idPrefix+a.jgrid.getAccessor(this,c.p.localReader.id);a(a(c).jqGrid("getGridRowById",b)).css("display","none"),this[e]&&a(c).jqGrid("collapseRow",this)}),a.isFunction(c.p.afterCollapseTreeGridRow)&&c.p.afterCollapseTreeGridRow.call(c,f,b,d))}})},getRootNodes:function(b){var
c=[];return this.each(function(){var
d,e,f,g=this;if(g.grid&&g.p.treeGrid)switch("boolean"!=typeof
b&&(b=!1),f=b?a(g).jqGrid("getRowData",null,!0):g.p.data,g.p.treeGridModel){case"nested":d=g.p.treeReader.level_field,a(f).each(function(){parseInt(this[d],10)===parseInt(g.p.tree_root_level,10)&&(b?c.push(g.p.data[g.p._index[this[g.p.keyName]]]):c.push(this))});break;case"adjacency":e=g.p.treeReader.parent_id_field,a(f).each(function(){(null===this[e]||"null"===String(this[e]).toLowerCase())&&(b?c.push(g.p.data[g.p._index[this[g.p.keyName]]]):c.push(this))})}}),c},getNodeDepth:function(b){var
c=null;return this.each(function(){if(this.grid&&this.p.treeGrid){var
d=this;switch(d.p.treeGridModel){case"nested":var
e=d.p.treeReader.level_field;c=parseInt(b[e],10)-parseInt(d.p.tree_root_level,10);break;case"adjacency":c=a(d).jqGrid("getNodeAncestors",b).length}}}),c},getNodeParent:function(b){var
c=null;return this.each(function(){var
d=this;if(d.grid&&d.p.treeGrid)switch(d.p.treeGridModel){case"nested":var
e=d.p.treeReader.left_field,f=d.p.treeReader.right_field,g=d.p.treeReader.level_field,h=parseInt(b[e],10),i=parseInt(b[f],10),j=parseInt(b[g],10);a(this.p.data).each(function(){return parseInt(this[g],10)===j-1&&parseInt(this[e],10)<h&&parseInt(this[f],10)>i?(c=this,!1):void
0});break;case"adjacency":for(var
k=d.p.treeReader.parent_id_field,l=d.p.localReader.id,m=b[l],n=d.p._index[m];n--;)if(d.p.data[n][l]===a.jgrid.stripPref(d.p.idPrefix,b[k])){c=d.p.data[n];break}}}),c},getNodeChildren:function(b,c){var
d=[];return this.each(function(){var
e=this;if(e.grid&&e.p.treeGrid){var
f,g,h=c?this.rows.length:this.p.data.length;switch(e.p.treeGridModel){case"nested":var
i=e.p.treeReader.left_field,j=e.p.treeReader.right_field,k=e.p.treeReader.level_field,l=parseInt(b[i],10),m=parseInt(b[j],10),n=parseInt(b[k],10);for(f=0;h>f;f++)g=c?e.p.data[e.p._index[this.rows[f].id]]:e.p.data[f],g&&parseInt(g[k],10)===n+1&&parseInt(g[i],10)>l&&parseInt(g[j],10)<m&&d.push(g);break;case"adjacency":var
o=e.p.treeReader.parent_id_field,p=e.p.localReader.id;for(f=0;h>f;f++)g=c?e.p.data[e.p._index[this.rows[f].id]]:e.p.data[f],g&&String(g[o])===a.jgrid.stripPref(e.p.idPrefix,b[p])&&d.push(g)}}}),d},getFullTreeNode:function(b,c){var
d=[];return this.each(function(){var
e,f=this,g=f.p.treeReader.expanded_field;if(f.grid&&f.p.treeGrid)switch((null==c||"boolean"!=typeof
c)&&(c=!1),f.p.treeGridModel){case"nested":var
h=f.p.treeReader.left_field,i=f.p.treeReader.right_field,j=f.p.treeReader.level_field,k=parseInt(b[h],10),l=parseInt(b[i],10),m=parseInt(b[j],10);a(this.p.data).each(function(){parseInt(this[j],10)>=m&&parseInt(this[h],10)>=k&&parseInt(this[h],10)<=l&&(c&&(this[g]=!0),d.push(this))});break;case"adjacency":if(b){d.push(b);var
n=f.p.treeReader.parent_id_field,o=f.p.localReader.id;a(this.p.data).each(function(b){for(e=d.length,b=0;e>b;b++)if(a.jgrid.stripPref(f.p.idPrefix,d[b][o])===this[n]){c&&(this[g]=!0),d.push(this);break}})}}}),d},getNodeAncestors:function(b,c,d){var
e=[];return void
0===c&&(c=!1),this.each(function(){if(this.grid&&this.p.treeGrid){d=void
0===d?!1:this.p.treeReader.expanded_field;for(var
f=a(this).jqGrid("getNodeParent",b);f;){if(d)try{f[d]=!0}catch(g){}c?e.unshift(f):e.push(f),f=a(this).jqGrid("getNodeParent",f)}}}),e},isVisibleNode:function(b){var
c=!0;return this.each(function(){var
d=this;if(d.grid&&d.p.treeGrid){var
e=a(d).jqGrid("getNodeAncestors",b),f=d.p.treeReader.expanded_field;a(e).each(function(){return c=c&&this[f],c?void
0:!1})}}),c},isNodeLoaded:function(b){var
c;return this.each(function(){var
d=this;if(d.grid&&d.p.treeGrid){var
e=d.p.treeReader.leaf_field,f=d.p.treeReader.loaded;c=void
0!==b?void
0!==b[f]?b[f]:b[e]||a(d).jqGrid("getNodeChildren",b).length>0?!0:!1:!1}}),c},setLeaf:function(b,c,d){return this.each(function(){var
e=a.jgrid.getAccessor(b,this.p.localReader.id),f=a("#"+e,this.grid.bDiv)[0],g=this.p.treeReader.leaf_field;try{var
h=this.p._index[e];null!=h&&(this.p.data[h][g]=c)}catch(i){}if(c===!0)a("div.treeclick",f).removeClass(this.p.treeIcons.minus+" tree-minus "+this.p.treeIcons.plus+" tree-plus").addClass(this.p.treeIcons.leaf+" tree-leaf");else
if(c===!1){var
j=this.p.treeIcons.minus+" tree-minus";d&&(j=this.p.treeIcons.plus+" tree-plus"),a("div.treeclick",f).removeClass(this.p.treeIcons.leaf+" tree-leaf").addClass(j)}})},reloadNode:function(b,c){return this.each(function(){if(this.grid&&this.p.treeGrid){var
d=this.p.localReader.id,e=this.p.selrow;a(this).jqGrid("delChildren",b[d]),void
0===c&&(c=!1),c||jQuery._data(this,"events").jqGridAfterSetTreeNode||a(this).bind("jqGridAfterSetTreeNode.reloadNode",function(){var
b=this.p.treeReader.leaf_field;if(this.p.reloadnode){var
c=this.p.reloadnode,d=a(this).jqGrid("getNodeChildren",c);c[b]&&d.length?a(this).jqGrid("setLeaf",c,!1):c[b]||0!==d.length||a(this).jqGrid("setLeaf",c,!0)}this.p.reloadnode=!1});var
f=this.p.treeReader.expanded_field,g=this.p.treeReader.parent_id_field,h=this.p.treeReader.loaded,i=this.p.treeReader.level_field,j=this.p.treeReader.leaf_field,k=this.p.treeReader.left_field,l=this.p.treeReader.right_field,m=a.jgrid.getAccessor(b,this.p.localReader.id),n=a("#"+m,this.grid.bDiv)[0];b[f]=!0,b[j]||a("div.treeclick",n).removeClass(this.p.treeIcons.plus+" tree-plus").addClass(this.p.treeIcons.minus+" tree-minus"),this.p.treeANode=n.rowIndex,this.p.datatype=this.p.treedatatype,this.p.reloadnode=b,c&&(this.p.treeANode=n.rowIndex>0?n.rowIndex-1:1,a(this).jqGrid("delRowData",m)),"nested"===this.p.treeGridModel?a(this).jqGrid("setGridParam",{postData:{nodeid:m,n_left:b[k],n_right:b[l],n_level:b[i]}}):a(this).jqGrid("setGridParam",{postData:{nodeid:m,parentid:b[g],n_level:b[i]}}),a(this).trigger("reloadGrid"),b[h]=!0,"nested"===this.p.treeGridModel?a(this).jqGrid("setGridParam",{selrow:e,postData:{nodeid:"",n_left:"",n_right:"",n_level:""}}):a(this).jqGrid("setGridParam",{selrow:e,postData:{nodeid:"",parentid:"",n_level:""}})}})},expandNode:function(b){return this.each(function(){if(this.grid&&this.p.treeGrid){var
c=this.p.treeReader.expanded_field,d=this.p.treeReader.parent_id_field,e=this.p.treeReader.loaded,f=this.p.treeReader.level_field,g=this.p.treeReader.left_field,h=this.p.treeReader.right_field;if(!b[c]){var
i=a.jgrid.getAccessor(b,this.p.localReader.id),j=a("#"+this.p.idPrefix+a.jgrid.jqID(i),this.grid.bDiv)[0],k=this.p._index[i],l=a.isFunction(this.p.beforeExpandTreeGridNode)?this.p.beforeExpandTreeGridNode.call(this,i,b):!0;if(l===!1)return;a(this).jqGrid("isNodeLoaded",this.p.data[k])?(b[c]=!0,a("div.treeclick",j).removeClass(this.p.treeIcons.plus+" tree-plus").addClass(this.p.treeIcons.minus+" tree-minus")):this.grid.hDiv.loading||(b[c]=!0,a("div.treeclick",j).removeClass(this.p.treeIcons.plus+" tree-plus").addClass(this.p.treeIcons.minus+" tree-minus"),this.p.treeANode=j.rowIndex,this.p.datatype=this.p.treedatatype,"nested"===this.p.treeGridModel?a(this).jqGrid("setGridParam",{postData:{nodeid:i,n_left:b[g],n_right:b[h],n_level:b[f]}}):a(this).jqGrid("setGridParam",{postData:{nodeid:i,parentid:b[d],n_level:b[f]}}),a(this).trigger("reloadGrid"),b[e]=!0,"nested"===this.p.treeGridModel?a(this).jqGrid("setGridParam",{postData:{nodeid:"",n_left:"",n_right:"",n_level:""}}):a(this).jqGrid("setGridParam",{postData:{nodeid:"",parentid:"",n_level:""}})),a.isFunction(this.p.afterExpandTreeGridNode)&&this.p.afterExpandTreeGridNode.call(this,i,b)}}})},collapseNode:function(b){return this.each(function(){if(this.grid&&this.p.treeGrid){var
c=this.p.treeReader.expanded_field;if(b[c]){var
d=a.jgrid.getAccessor(b,this.p.localReader.id),e=a.isFunction(this.p.beforeCollapseTreeGridNode)?this.p.beforeCollapseTreeGridNode.call(this,d,b):!0,f=a("#"+this.p.idPrefix+a.jgrid.jqID(d),this.grid.bDiv)[0];if(b[c]=!1,e===!1)return;a("div.treeclick",f).removeClass(this.p.treeIcons.minus+" tree-minus").addClass(this.p.treeIcons.plus+" tree-plus"),a.isFunction(this.p.afterCollapseTreeGridNode)&&this.p.afterCollapseTreeGridNode.call(this,d,b)}}})},SortTree:function(b,c,d,e){return this.each(function(){if(this.grid&&this.p.treeGrid){var
f,g,h,i,j,k=[],l=this,m=a(this).jqGrid("getRootNodes",l.p.search);for(i=a.jgrid.from.call(this,m),i.orderBy(b,c,d,e),j=i.select(),f=0,g=j.length;g>f;f++)h=j[f],k.push(h),a(this).jqGrid("collectChildrenSortTree",k,h,b,c,d,e);a.each(k,function(b){var
c=a.jgrid.getAccessor(this,l.p.localReader.id);a("#"+a.jgrid.jqID(l.p.id)+" tbody tr:eq("+b+")").after(a("tr#"+a.jgrid.jqID(c),l.grid.bDiv))}),i=null,j=null,k=null}})},searchTree:function(b){var
c,d,e,f,g,h,i=b.length||0,j=[],k=[],l=[];return this.each(function(){if(this.grid&&this.p.treeGrid&&i)for(c=this.p.localReader.id;i--;)if(j=a(this).jqGrid("getNodeAncestors",b[i],!0,!0),j.push(b[i]),d=j[0][c],-1===a.inArray(d,k))k.push(d),l=l.concat(j);else
for(g=0,e=j.length;e>g;g++){var
m=!1;for(h=0,f=l.length;f>h;h++)if(j[g][c]===l[h][c]){m=!0;break}m||l.push(j[g])}}),l},collectChildrenSortTree:function(b,c,d,e,f,g){return this.each(function(){if(this.grid&&this.p.treeGrid){var
h,i,j,k,l,m;for(k=a(this).jqGrid("getNodeChildren",c,this.p.search),l=a.jgrid.from.call(this,k),l.orderBy(d,e,f,g),m=l.select(),h=0,i=m.length;i>h;h++)j=m[h],b.push(j),a(this).jqGrid("collectChildrenSortTree",b,j,d,e,f,g)}})},setTreeRow:function(b,c){var
d=!1;return this.each(function(){var
e=this;e.grid&&e.p.treeGrid&&(d=a(e).jqGrid("setRowData",b,c))}),d},delTreeNode:function(b){return this.each(function(){var
c,d,e,f,g,h=this,i=h.p.localReader.id,j=h.p.treeReader.left_field,k=h.p.treeReader.right_field;if(h.grid&&h.p.treeGrid){var
l=h.p._index[b];if(void
0!==l){d=parseInt(h.p.data[l][k],10),e=d-parseInt(h.p.data[l][j],10)+1;var
m=a(h).jqGrid("getFullTreeNode",h.p.data[l]);if(m.length>0)for(c=0;c<m.length;c++)a(h).jqGrid("delRowData",m[c][i]);if("nested"===h.p.treeGridModel){if(f=a.jgrid.from.call(h,h.p.data).greater(j,d,{stype:"integer"}).select(),f.length)for(g
in
f)f.hasOwnProperty(g)&&(f[g][j]=parseInt(f[g][j],10)-e);if(f=a.jgrid.from.call(h,h.p.data).greater(k,d,{stype:"integer"}).select(),f.length)for(g
in
f)f.hasOwnProperty(g)&&(f[g][k]=parseInt(f[g][k],10)-e)}}}})},delChildren:function(b){return this.each(function(){var
c,d,e,f,g=this,h=g.p.localReader.id,i=g.p.treeReader.left_field,j=g.p.treeReader.right_field;if(g.grid&&g.p.treeGrid){var
k=g.p._index[b];if(void
0!==k){c=parseInt(g.p.data[k][j],10),d=c-parseInt(g.p.data[k][i],10)+1;var
l=a(g).jqGrid("getFullTreeNode",g.p.data[k]);if(l.length>0)for(var
m=0;m<l.length;m++)l[m][h]!==b&&a(g).jqGrid("delRowData",l[m][h]);if("nested"===g.p.treeGridModel){if(e=a.jgrid.from(g.p.data).greater(i,c,{stype:"integer"}).select(),e.length)for(f
in
e)e.hasOwnProperty(f)&&(e[f][i]=parseInt(e[f][i],10)-d);if(e=a.jgrid.from(g.p.data).greater(j,c,{stype:"integer"}).select(),e.length)for(f
in
e)e.hasOwnProperty(f)&&(e[f][j]=parseInt(e[f][j],10)-d)}}}})},addChildNode:function(b,c,d,e){var
f=this[0];if(d){var
g,h,i,j,k,l,m,n,o=f.p.treeReader.expanded_field,p=f.p.treeReader.leaf_field,q=f.p.treeReader.level_field,r=f.p.treeReader.parent_id_field,s=f.p.treeReader.left_field,t=f.p.treeReader.right_field,u=f.p.treeReader.loaded,v=0,w=c;if(void
0===e&&(e=!1),null==b){if(k=f.p.data.length-1,k>=0)for(;k>=0;)v=Math.max(v,parseInt(f.p.data[k][f.p.localReader.id],10)),k--;b=v+1}var
x=a(f).jqGrid("getInd",c);if(m=!1,void
0===c||null===c||""===c)c=null,w=null,g="last",j=f.p.tree_root_level,k=f.p.data.length+1;else{g="after",h=f.p._index[c],i=f.p.data[h],c=i[f.p.localReader.id],j=parseInt(i[q],10)+1;var
y=a(f).jqGrid("getFullTreeNode",i);y.length?(k=y[y.length-1][f.p.localReader.id],w=k,k=a(f).jqGrid("getInd",w)+1):k=a(f).jqGrid("getInd",c)+1,i[p]&&(m=!0,i[o]=!0,a(f.rows[x]).find("span.cell-wrapperleaf").removeClass("cell-wrapperleaf").addClass("cell-wrapper").end().find("div.tree-leaf").removeClass(f.p.treeIcons.leaf+" tree-leaf").addClass(f.p.treeIcons.minus+" tree-minus"),f.p.data[h][p]=!1,i[u]=!0)}if(l=k+1,void
0===d[o]&&(d[o]=!1),void
0===d[u]&&(d[u]=!1),d[q]=j,void
0===d[p]&&(d[p]=!0),"adjacency"===f.p.treeGridModel&&(d[r]=c),"nested"===f.p.treeGridModel){var
z,A,B;if(null!==c){if(n=parseInt(i[t],10),z=a.jgrid.from.call(f,f.p.data),z=z.greaterOrEquals(t,n,{stype:"integer"}),A=z.select(),A.length)for(B
in
A)A.hasOwnProperty(B)&&(A[B][s]=A[B][s]>n?parseInt(A[B][s],10)+2:A[B][s],A[B][t]=A[B][t]>=n?parseInt(A[B][t],10)+2:A[B][t]);d[s]=n,d[t]=n+1}else{if(n=parseInt(a(f).jqGrid("getCol",t,!1,"max"),10),A=a.jgrid.from.call(f,f.p.data).greater(s,n,{stype:"integer"}).select(),A.length)for(B
in
A)A.hasOwnProperty(B)&&(A[B][s]=parseInt(A[B][s],10)+2);if(A=a.jgrid.from.call(f,f.p.data).greater(t,n,{stype:"integer"}).select(),A.length)for(B
in
A)A.hasOwnProperty(B)&&(A[B][t]=parseInt(A[B][t],10)+2);d[s]=n+1,d[t]=n+2}}(null===c||a(f).jqGrid("isNodeLoaded",i)||m)&&(a(f).jqGrid("addRowData",b,d,g,w),a(f).jqGrid("setTreeNode",k,l)),i&&!i[o]&&e&&a(f.rows[x]).find("div.treeclick").click()}}})});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery","./grid.base","./grid.grouping"],a):a(jQuery)}(function(a){"use strict";function
b(a,b){var
c,d,e,f=[];if(!this||"function"!=typeof
a||a
instanceof
RegExp)throw new
TypeError;for(e=this.length,c=0;e>c;c++)if(this.hasOwnProperty(c)&&(d=this[c],a.call(b,d,c,this))){f.push(d);break}return f}a.assocArraySize=function(a){var
b,c=0;for(b
in
a)a.hasOwnProperty(b)&&c++;return c},a.jgrid.extend({pivotSetup:function(c,d){var
e=[],f=[],g=[],h=[],i=[],j={grouping:!0,groupingView:{groupField:[],groupSummary:[],groupSummaryPos:[]}},k=[],l=a.extend({rowTotals:!1,rowTotalsText:"Total",colTotals:!1,groupSummary:!0,groupSummaryPos:"header",frozenStaticCols:!1},d||{});return this.each(function(){function
d(a,c,d){var
e;return e=b.call(a,c,d),e.length>0?e[0]:null}function
m(a,b){var
c,d=0,e=!0;for(c
in
a)if(a.hasOwnProperty(c)){if(a[c]!=this[d]){e=!1;break}if(d++,d>=this.length)break}return e&&(r=b),e}function
n(a,b,c,d,e){var
f;switch(a){case"sum":f=parseFloat(b||0)+parseFloat(d[c]||0);break;case"count":(""===b||null==b)&&(b=0),f=d.hasOwnProperty(c)?b+1:0;break;case"min":f=""===b||null==b?parseFloat(d[c]||0):Math.min(parseFloat(b),parseFloat(d[c]||0));break;case"max":f=""===b||null==b?parseFloat(d[c]||0):Math.max(parseFloat(b),parseFloat(d[c]||0));break;case"avg":f=(parseFloat(b||0)*(e-1)+parseFloat(d[c]||0))/e}return f}function
o(b,c,d,e){var
f,g,j,k,l=c.length,m="",o=[];for(a.isArray(d)?(k=d.length,o=d):(k=1,o[0]=d),h=[],i=[],h.root=0,e._count?e._count++:e._count=1,j=0;k>j;j++){var
p,q=[];for(f=0;l>f;f++){if(null==d)g=a.trim(c[f].member)+"_"+c[f].aggregator,p=g,o[0]=c[f].label||c[f].aggregator+" "+a.trim(c[f].member);else{p=d[j].replace(/\s+/g,"");try{g=1===l?m+p:m+p+"_"+c[f].aggregator+"_"+String(f)}catch(r){}o[j]=d[j]}g=isNaN(parseInt(g,10))?g:g+" ",e[g]=q[g]=n(c[f].aggregator,e[g],c[f].member,b,e._count)}m+=d[j].replace(/\s+/g,""),h[g]=q,i[g]=o[j]}return e}function
p(a){var
b,c,d,f,g;for(d
in
a)if(a.hasOwnProperty(d)){if("object"!=typeof
a[d]){if("level"===d){if(void
0===L[a.level]&&(L[a.level]="",a.level>0&&-1===a.text.indexOf("_r_Totals")&&(k[a.level-1]={useColSpanStyle:!1,groupHeaders:[]})),L[a.level]!==a.text&&a.children.length&&-1===a.text.indexOf("_r_Totals")&&a.level>0){k[a.level-1].groupHeaders.push({titleText:a.label,numberOfColumns:0});var
h=k[a.level-1].groupHeaders.length-1,i=0===h?N:M;if(a.level-1===(l.rowTotals?1:0)&&h>0){for(var
j=0,m=0;h>m;m++)j+=k[a.level-1].groupHeaders[m].numberOfColumns;j&&(i=j+t)}e[i]&&(k[a.level-1].groupHeaders[h].startColumnName=e[i].name,k[a.level-1].groupHeaders[h].numberOfColumns=e.length-i),M=e.length}L[a.level]=a.text}if(a.level===u&&"level"===d&&u>0)if(v>1){var
n=1;for(b
in
a.fields)a.fields.hasOwnProperty(b)&&(1===n&&k[u-1].groupHeaders.push({startColumnName:b,numberOfColumns:1,titleText:a.label||a.text}),n++);k[u-1].groupHeaders[k[u-1].groupHeaders.length-1].numberOfColumns=n-1}else
k.splice(u-1,1)}if(null!=a[d]&&"object"==typeof
a[d]&&p(a[d]),"level"===d&&a.level>0&&(a.level===(0===u?a.level:u)||-1!==L[a.level].indexOf("_r_Totals"))){c=0;for(b
in
a.fields)if(a.fields.hasOwnProperty(b)){g={};for(f
in
l.aggregates[c])if(l.aggregates[c].hasOwnProperty(f))switch(f){case"member":case"label":case"aggregator":break;default:g[f]=l.aggregates[c][f]}v>1?(g.name=b,g.label=l.aggregates[c].label||a.label):(g.name=a.text,g.label="_r_Totals"===a.text?l.rowTotalsText:a.label),e.push(g),c++}}}}var
q,r,s,t,u,v,w,x,y=c.length,z=0;if(l.rowTotals&&l.yDimension.length>0){var
A=l.yDimension[0].dataName;l.yDimension.splice(0,0,{dataName:A}),l.yDimension[0].converter=function(){return"_r_Totals"}}if(t=a.isArray(l.xDimension)?l.xDimension.length:0,u=l.yDimension.length,v=a.isArray(l.aggregates)?l.aggregates.length:0,0===t||0===v)throw"xDimension or aggregates optiona are not set!";var
B;for(s=0;t>s;s++)B={name:l.xDimension[s].dataName,frozen:l.frozenStaticCols},null==l.xDimension[s].isGroupField&&(l.xDimension[s].isGroupField=!0),B=a.extend(!0,B,l.xDimension[s]),e.push(B);for(var
C=t-1,D={};y>z;){q=c[z];var
E=[],F=[];w={},s=0;do
E[s]=a.trim(q[l.xDimension[s].dataName]),w[l.xDimension[s].dataName]=E[s],s++;while(t>s);var
G=0;if(r=-1,x=d(f,m,E)){if(r>=0){if(G=0,u>=1){for(G=0;u>G;G++)F[G]=a.trim(q[l.yDimension[G].dataName]),l.yDimension[G].converter&&a.isFunction(l.yDimension[G].converter)&&(F[G]=l.yDimension[G].converter.call(this,F[G],E,F));x=o(q,l.aggregates,F,x)}else
0===u&&(x=o(q,l.aggregates,null,x));f[r]=x}}else{if(G=0,u>=1){for(G=0;u>G;G++)F[G]=a.trim(q[l.yDimension[G].dataName]),l.yDimension[G].converter&&a.isFunction(l.yDimension[G].converter)&&(F[G]=l.yDimension[G].converter.call(this,F[G],E,F));w=o(q,l.aggregates,F,w)}else
0===u&&(w=o(q,l.aggregates,null,w));f.push(w)}var
H,I=0,J=null,K=null;for(H
in
h)if(h.hasOwnProperty(H)){if(0===I)D.children&&void
0!==D.children||(D={text:H,level:0,children:[],label:H}),J=D.children;else{for(K=null,s=0;s<J.length;s++)if(J[s].text===H){K=J[s];break}K?J=K.children:(J.push({children:[],text:H,level:I,fields:h[H],label:i[H]}),J=J[J.length-1].children)}I++}z++}var
L=[],M=e.length,N=M;u>0&&(k[u-1]={useColSpanStyle:!1,groupHeaders:[]}),p(D);var
O;if(l.colTotals)for(var
P=f.length;P--;)for(s=t;s<e.length;s++)O=e[s].name,g[O]?g[O]+=parseFloat(f[P][O]||0):g[O]=parseFloat(f[P][O]||0);if(C>0)for(s=0;C>s;s++)e[s].isGroupField&&(j.groupingView.groupField.push(e[s].name),j.groupingView.groupSummary.push(l.groupSummary),j.groupingView.groupSummaryPos.push(l.groupSummaryPos));else
j.grouping=!1;j.sortname=e[C].name,j.groupingView.hideFirstGroupCol=!0}),{colModel:e,rows:f,groupOptions:j,groupHeaders:k,summary:g}},jqPivot:function(b,c,d,e){return this.each(function(){function
f(b){var
e,f,h,i,j=jQuery(g).jqGrid("pivotSetup",b,c),k=a.assocArraySize(j.summary)>0?!0:!1,l=a.jgrid.from.call(g,j.rows);for(c.ignoreCase&&(l=l.ignoreCase()),e=0;e<j.groupOptions.groupingView.groupField.length;e++)f=c.xDimension[e].sortorder?c.xDimension[e].sortorder:"asc",h=c.xDimension[e].sorttype?c.xDimension[e].sorttype:"text",l.orderBy(j.groupOptions.groupingView.groupField[e],f,h,"",h);i=c.xDimension.length,j.groupOptions.sortname&&i&&(f=c.xDimension[i-1].sortorder?c.xDimension[i-1].sortorder:"asc",h=c.xDimension[i-1].sorttype?c.xDimension[i-1].sorttype:"text",l.orderBy(j.groupOptions.sortname,f,h,"",h)),jQuery(g).jqGrid(a.extend(!0,{datastr:a.extend(l.select(),k?{userdata:j.summary}:{}),datatype:"jsonstring",footerrow:k,userDataOnFooter:k,colModel:j.colModel,viewrecords:!0,sortname:c.xDimension[0].dataName},j.groupOptions,d||{}));var
m=j.groupHeaders;if(m.length)for(e=0;e<m.length;e++)m[e]&&m[e].groupHeaders.length&&jQuery(g).jqGrid("setGroupHeaders",m[e]);c.frozenStaticCols&&jQuery(g).jqGrid("setFrozenColumns")}var
g=this;"string"==typeof
b?a.ajax(a.extend({url:b,dataType:"json",success:function(b){f(a.jgrid.getAccessor(b,e&&e.reader?e.reader:"rows"))}},e||{})):f(b)})}})});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery","./grid.utils","./grid.base"],a):a(jQuery)}(function(a){"use strict";a.jgrid=a.jgrid||{},a.extend(a.jgrid,{saveState:function(b,c){if(c=a.extend({useStorage:!0,storageType:"localStorage",beforeSetItem:null,compression:!1,compressionModule:"LZString",compressionMethod:"compressToUTF16",debug:!1},c||{}),b){var
d,e,f="",g="",h=a("#"+b)[0];if(h.grid){e=a(h).data("inlineNav"),e&&h.p.inlineNav&&a(h).jqGrid("setGridParam",{_iN:e}),e=a(h).data("filterToolbar"),e&&h.p.filterToolbar&&a(h).jqGrid("setGridParam",{_fT:e}),f=a(h).jqGrid("jqGridExport",{exptype:"jsonstring",ident:"",root:""}),g=a(h.grid.bDiv).find(".ui-jqgrid-btable tbody:first").html();var
i=g.indexOf("</tr>");if(g=g.slice(i+5),a.isFunction(c.beforeSetItem)&&(d=c.beforeSetItem.call(h,f),null!=d&&(f=d)),c.debug){a("#gbox_tree").prepend('<a id="link_save" target="_blank" download="jqGrid_dump.txt">Click to save Dump Data</a>');var
j,k,l=[],m={};l.push("Grid Options\n"),l.push(f),l.push("\n"),l.push("GridData\n"),l.push(g),m.type="plain/text;charset=utf-8";try{j=new
File(l,"jqGrid_dump.txt",m)}catch(n){j=new
Blob(l,m)}k=URL.createObjectURL(j),a("#link_save").attr("href",k).bind("click",function(){a(this).remove()})}if(c.compression&&c.compressionModule)try{d=window[c.compressionModule][c.compressionMethod](f),null!=d&&(f=d,g=window[c.compressionModule][c.compressionMethod](g))}catch(n){}if(c.useStorage&&a.jgrid.isLocalStorage())try{window[c.storageType].setItem("jqGrid"+h.p.id,f),window[c.storageType].setItem("jqGrid"+h.p.id+"_data",g)}catch(n){22===n.code&&alert("Local storage limit is over!")}return f}}},loadState:function(b,c,d){if(d=a.extend({useStorage:!0,storageType:"localStorage",clearAfterLoad:!1,beforeSetGrid:null,afterSetGrid:null,decompression:!1,decompressionModule:"LZString",decompressionMethod:"decompressFromUTF16"},d||{}),b){var
e,f,g,h,i,j=a("#"+b)[0];if(d.useStorage)try{c=window[d.storageType].getItem("jqGrid"+j.id),g=window[d.storageType].getItem("jqGrid"+j.id+"_data")}catch(k){}if(c){if(d.decompression&&d.decompressionModule)try{e=window[d.decompressionModule][d.decompressionMethod](c),null!=e&&(c=e,g=window[d.decompressionModule][d.decompressionMethod](g))}catch(k){}if(e=jqGridUtils.parse(c),e&&"object"===a.type(e)){j.grid&&a.jgrid.gridUnload(b),a.isFunction(d.beforeSetGrid)&&(f=d.beforeSetGrid(e),f&&"object"===a.type(f)&&(e=f));var
l=function(a){var
b;return b=a},m={reccount:e.reccount,records:e.records,lastpage:e.lastpage,shrinkToFit:l(e.shrinkToFit),data:l(e.data),datatype:l(e.datatype),grouping:l(e.grouping)};e.shrinkToFit=!1,e.data=[],e.datatype="local",e.grouping=!1,e.inlineNav&&(h=l(e._iN),e._iN=null,delete
e._iN),e.filterToolbar&&(i=l(e._fT),e._fT=null,delete
e._fT);var
n=a("#"+b).jqGrid(e);if(n.append(g),n.jqGrid("setGridParam",m),e.storeNavOptions&&e.navGrid&&(n[0].p.navGrid=!1,n.jqGrid("navGrid",e.pager,e.navOptions,e.editOptions,e.addOptions,e.delOptions,e.searchOptions,e.viewOptions),e.navButtons&&e.navButtons.length))for(var
o=0;o<e.navButtons.length;o++)"sepclass"in
e.navButtons[o][1]?n.jqGrid("navSeparatorAdd",e.navButtons[o][0],e.navButtons[o][1]):n.jqGrid("navButtonAdd",e.navButtons[o][0],e.navButtons[o][1]);if(n[0].refreshIndex(),e.subGrid){var
p=1===e.multiselect?1:0,q=e.rownumbers===!0?1:0;n.jqGrid("addSubGrid",p+q)}if(e.treeGrid)for(var
r=1,s=n[0].rows.length,t=e.expColInd,u=e.treeReader.leaf_field,v=e.treeReader.expanded_field;s>r;)a(n[0].rows[r].cells[t]).find("div.treeclick").bind("click",function(b){var
c=b.target||b.srcElement,d=a.jgrid.stripPref(e.idPrefix,a(c,n[0].rows).closest("tr.jqgrow")[0].id),f=n[0].p._index[d];return n[0].p.data[f][u]||(n[0].p.data[f][v]?(n.jqGrid("collapseRow",n[0].p.data[f]),n.jqGrid("collapseNode",n[0].p.data[f])):(n.jqGrid("expandRow",n[0].p.data[f]),n.jqGrid("expandNode",n[0].p.data[f]))),!1}),e.ExpandColClick===!0&&a(n[0].rows[r].cells[t]).find("span.cell-wrapper").css("cursor","pointer").bind("click",function(b){var
c=b.target||b.srcElement,d=a.jgrid.stripPref(e.idPrefix,a(c,n[0].rows).closest("tr.jqgrow")[0].id),f=n[0].p._index[d];return n[0].p.data[f][u]||(n[0].p.data[f][v]?(n.jqGrid("collapseRow",n[0].p.data[f]),n.jqGrid("collapseNode",n[0].p.data[f])):(n.jqGrid("expandRow",n[0].p.data[f]),n.jqGrid("expandNode",n[0].p.data[f]))),n.jqGrid("setSelection",d),!1}),r++;e.multiselect&&a.each(e.selarrrow,function(){a("#jqg_"+b+"_"+this)[e.useProp?"prop":"attr"]("checked","checked")}),e.inlineNav&&h&&(n.jqGrid("setGridParam",{inlineNav:!1}),n.jqGrid("inlineNav",e.pager,h)),e.filterToolbar&&i&&(n.jqGrid("setGridParam",{filterToolbar:!1}),i.restoreFromFilters=!0,n.jqGrid("filterToolbar",i)),e.frozenColumns&&n.jqGrid("setFrozenColumns"),n[0].updatepager(!0,!0),a.isFunction(d.afterSetGrid)&&d.afterSetGrid(n),d.clearAfterLoad&&(window[d.storageType].removeItem("jqGrid"+j.id),window[d.storageType].removeItem("jqGrid"+j.id+"_data"))}else
alert("can not convert to object")}}},isGridInStorage:function(b,c){var
d={storageType:"localStorage"};d=a.extend(d,c||{});var
e,f,g;try{f=window[d.storageType].getItem("jqGrid"+b),g=window[d.storageType].getItem("jqGrid"+b+"_data"),e=null!=f&&null!=g&&"string"==typeof
f&&"string"==typeof
g}catch(h){e=!1}return e},setRegional:function(b,c){var
d={storageType:"sessionStorage"};if(d=a.extend(d,c||{}),d.regional){a.jgrid.saveState(b,d),d.beforeSetGrid=function(a){return a.regional=d.regional,a.force_regional=!0,a},a.jgrid.loadState(b,null,d);var
e=a("#"+b)[0],f=a(e).jqGrid("getGridParam","colModel"),g=-1,h=a.jgrid.getRegional(e,"nav");a.each(f,function(a){return this.formatter&&"actions"===this.formatter?(g=a,!1):void
0}),-1!==g&&h&&a("#"+b+" tbody tr").each(function(){var
b=this.cells[g];a(b).find(".ui-inline-edit").attr("title",h.edittitle),a(b).find(".ui-inline-del").attr("title",h.deltitle),a(b).find(".ui-inline-save").attr("title",h.savetitle),a(b).find(".ui-inline-cancel").attr("title",h.canceltitle)});try{window[d.storageType].removeItem("jqGrid"+e.id),window[d.storageType].removeItem("jqGrid"+e.id+"_data")}catch(i){}}},jqGridImport:function(b,c){c=a.extend({imptype:"xml",impstring:"",impurl:"",mtype:"GET",impData:{},xmlGrid:{config:"root>grid",data:"root>rows"},jsonGrid:{config:"grid",data:"data"},ajaxOptions:{}},c||{});var
d=(0===b.indexOf("#")?"":"#")+a.jgrid.jqID(b),e=function(b,c){var
e,f,g,h=a(c.xmlGrid.config,b)[0],i=a(c.xmlGrid.data,b)[0];if(jqGridUtils.xmlToJSON){e=jqGridUtils.xmlToJSON(h);for(g
in
e)e.hasOwnProperty(g)&&(f=e[g]);if(i){var
j=e.grid.datatype;e.grid.datatype="xmlstring",e.grid.datastr=b,a(d).jqGrid(f).jqGrid("setGridParam",{datatype:j})}else
setTimeout(function(){a(d).jqGrid(f)},0)}else
alert("xml2json or parse are not present")},f=function(b,c){if(b&&"string"==typeof
b){var
e=jqGridUtils.parse(b),f=e[c.jsonGrid.config],g=e[c.jsonGrid.data];if(g){var
h=f.datatype;f.datatype="jsonstring",f.datastr=g,a(d).jqGrid(f).jqGrid("setGridParam",{datatype:h})}else
a(d).jqGrid(f)}};switch(c.imptype){case"xml":a.ajax(a.extend({url:c.impurl,type:c.mtype,data:c.impData,dataType:"xml",complete:function(b,f){"success"===f&&(e(b.responseXML,c),a(d).triggerHandler("jqGridImportComplete",[b,c]),a.isFunction(c.importComplete)&&c.importComplete(b)),b=null}},c.ajaxOptions));break;case"xmlstring":if(c.impstring&&"string"==typeof
c.impstring){var
g=a.parseXML(c.impstring);g&&(e(g,c),a(d).triggerHandler("jqGridImportComplete",[g,c]),a.isFunction(c.importComplete)&&c.importComplete(g))}break;case"json":a.ajax(a.extend({url:c.impurl,type:c.mtype,data:c.impData,dataType:"json",complete:function(b){try{f(b.responseText,c),a(d).triggerHandler("jqGridImportComplete",[b,c]),a.isFunction(c.importComplete)&&c.importComplete(b)}catch(e){}b=null}},c.ajaxOptions));break;case"jsonstring":c.impstring&&"string"==typeof
c.impstring&&(f(c.impstring,c),a(d).triggerHandler("jqGridImportComplete",[c.impstring,c]),a.isFunction(c.importComplete)&&c.importComplete(c.impstring))}}}),a.jgrid.extend({jqGridExport:function(b){b=a.extend({exptype:"xmlstring",root:"grid",ident:"	",addOptions:{}},b||{});var
c=null;return this.each(function(){if(this.grid){var
d=a.extend(!0,{},a(this).jqGrid("getGridParam"),b.addOptions);switch(d.rownumbers&&(d.colNames.splice(0,1),d.colModel.splice(0,1)),d.multiselect&&(d.colNames.splice(0,1),d.colModel.splice(0,1)),d.subGrid&&(d.colNames.splice(0,1),d.colModel.splice(0,1)),d.knv=null,b.exptype){case"xmlstring":c="<"+b.root+">"+jqGridUtils.jsonToXML(d,{xmlDecl:""})+"</"+b.root+">";break;case"jsonstring":c=jqGridUtils.stringify(d),b.root&&(c="{"+b.root+":"+c+"}")}}}),c},excelExport:function(b){return b=a.extend({exptype:"remote",url:null,oper:"oper",tag:"excel",beforeExport:null,exporthidden:!1,exportgrouping:!1,exportOptions:{}},b||{}),this.each(function(){if(this.grid){var
c;if("remote"===b.exptype){var
d,e=a.extend({},this.p.postData);if(e[b.oper]=b.tag,a.isFunction(b.beforeExport)){var
f=b.beforeExport.call(this,e);a.isPlainObject(f)&&(e=f)}if(b.exporthidden){var
g,h=this.p.colModel,i=h.length,j=[];for(g=0;i>g;g++)void
0===h[g].hidden&&(h[g].hidden=!1),j.push({name:h[g].name,hidden:h[g].hidden});var
k=JSON.stringify(j);"string"==typeof
k&&(e.colModel=k)}b.exportgrouping&&(d=JSON.stringify(this.p.groupingView),"string"==typeof
d&&(e.groupingView=d));var
l=jQuery.param(e);c=-1!==b.url.indexOf("?")?b.url+"&"+l:b.url+"?"+l,window.location=c}}})}})});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery"],a):a()}(function(){"use strict";return window.jqGridUtils={stringify:function(a){return JSON.stringify(a,function(a,b){return"function"==typeof
b?b.toString():b})},parse:function(str){return JSON.parse(str,function(key,value){if("string"==typeof
value&&-1!==value.indexOf("function")){var
sv=value.split(" ");return"function"===sv[0].trim()&&"}"===value.trim().slice(-1)?eval("("+value+")"):value}return value})},encode:function(a){return String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},jsonToXML:function(a,b){var
c=$.extend({xmlDecl:'<?xml version="1.0" encoding="UTF-8" ?>\n',attr_prefix:"-",encode:!0},b||{}),d=this,e=function(a,b){return"#text"===a?c.encode?d.encode(b):b:"function"==typeof
b?"<"+a+"><![CDATA["+b+"]]></"+a+">\n":""===b?"<"+a+">__EMPTY_STRING_</"+a+">\n":"<"+a+">"+(c.encode?d.encode(b):b)+"</"+a+">\n"},f=function(a,b){for(var
c=[],d=0;d<b.length;d++){var
h=b[d];"undefined"==typeof
h||null==h?c[c.length]="<"+a+" />":"object"==typeof
h&&h.constructor==Array?c[c.length]=f(a,h):"object"==typeof
h?c[c.length]=g(a,h):c[c.length]=e(a,h)}return c.length||(c[0]="<"+a+">__EMPTY_ARRAY_</"+a+">\n"),c.join("")},g=function(a,b){var
h=[],i=[];for(var
j
in
b)if(b.hasOwnProperty(j)){var
k=b[j];j.charAt(0)!==c.attr_prefix?null==k?h[h.length]="<"+j+" />":"object"==typeof
k&&k.constructor===Array?h[h.length]=f(j,k):"object"==typeof
k?h[h.length]=g(j,k):h[h.length]=e(j,k):i[i.length]=" "+j.substring(1)+'="'+(c.encode?d.encode(k):k)+'"'}var
l=i.join(""),m=h.join("");return null==a||(m=h.length>0?m.match(/\n/)?"<"+a+l+">\n"+m+"</"+a+">\n":"<"+a+l+">"+m+"</"+a+">\n":"<"+a+l+" />\n"),m},h=g(null,a);return c.xmlDecl+h},xmlToJSON:function(root,options){var
o=$.extend({force_array:[],attr_prefix:"-"},options||{});if(root){var
__force_array={};if(o.force_array)for(var
i=0;i<o.force_array.length;i++)__force_array[o.force_array[i]]=1;"string"==typeof
root&&(root=$.parseXML(root)),root.documentElement&&(root=root.documentElement);var
addNode=function(hash,key,cnts,val){if("string"==typeof
val)if(-1!==val.indexOf("function"))val=eval("("+val+")");else
switch(val){case"__EMPTY_ARRAY_":val=[];break;case"__EMPTY_STRING_":val="";break;case"false":val=!1;break;case"true":val=!0}__force_array[key]?(1===cnts&&(hash[key]=[]),hash[key][hash[key].length]=val):1===cnts?hash[key]=val:2===cnts?hash[key]=[hash[key],val]:hash[key][hash[key].length]=val},parseElement=function(a){if(7!==a.nodeType){if(3===a.nodeType||4===a.nodeType){var
b=a.nodeValue.match(/[^\x00-\x20]/);if(null==b)return;return a.nodeValue}var
c,d,e,f,g={};if(a.attributes&&a.attributes.length)for(c={},d=0;d<a.attributes.length;d++)e=a.attributes[d].nodeName,"string"==typeof
e&&(f=a.attributes[d].nodeValue,f&&(e=o.attr_prefix+e,"undefined"==typeof
g[e]&&(g[e]=0),g[e]++,addNode(c,e,g[e],f)));if(a.childNodes&&a.childNodes.length){var
h=!0;for(c&&(h=!1),d=0;d<a.childNodes.length&&h;d++){var
i=a.childNodes[d].nodeType;3!==i&&4!==i&&(h=!1)}if(h)for(c||(c=""),d=0;d<a.childNodes.length;d++)c+=a.childNodes[d].nodeValue;else
for(c||(c={}),d=0;d<a.childNodes.length;d++)e=a.childNodes[d].nodeName,"string"==typeof
e&&(f=parseElement(a.childNodes[d]),f&&("undefined"==typeof
g[e]&&(g[e]=0),g[e]++,addNode(c,e,g[e],f)))}return c}},json=parseElement(root);if(__force_array[root.nodeName]&&(json=[json]),11!==root.nodeType){var
tmp={};tmp[root.nodeName]=json,json=tmp}return json}}},window.jqGridUtils});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery","./grid.base","jquery-ui/dialog","jquery-ui/draggable","jquery-ui/droppable","jquery-ui/resizable","jquery-ui/sortable","./addons/ui.multiselect"],a):a(jQuery)}(function($){"use strict";if($.jgrid.msie()&&8===$.jgrid.msiever()&&($.expr[":"].hidden=function(a){return 0===a.offsetWidth||0===a.offsetHeight||"none"===a.style.display}),$.jgrid._multiselect=!1,$.ui&&$.ui.multiselect){if($.ui.multiselect.prototype._setSelected){var
setSelected=$.ui.multiselect.prototype._setSelected;$.ui.multiselect.prototype._setSelected=function(a,b){var
c=setSelected.call(this,a,b);if(b&&this.selectedList){var
d=this.element;this.selectedList.find("li").each(function(){$(this).data("optionLink")&&$(this).data("optionLink").remove().appendTo(d)})}return c}}$.ui.multiselect.prototype.destroy&&($.ui.multiselect.prototype.destroy=function(){this.element.show(),this.container.remove(),void
0===$.Widget?$.widget.prototype.destroy.apply(this,arguments):$.Widget.prototype.destroy.apply(this,arguments)}),$.jgrid._multiselect=!0}$.jgrid.extend({sortableColumns:function(a){return this.each(function(){function
b(){c.p.disableClick=!0}var
c=this,d=$.jgrid.jqID(c.p.id),e={tolerance:"pointer",axis:"x",scrollSensitivity:"1",items:">th:not(:has(#jqgh_"+d+"_cb,#jqgh_"+d+"_rn,#jqgh_"+d+"_subgrid),:hidden)",placeholder:{element:function(a){var
b=$(document.createElement(a[0].nodeName)).addClass(a[0].className+" ui-sortable-placeholder ui-state-highlight").removeClass("ui-sortable-helper")[0];return b},update:function(a,b){b.height(a.currentItem.innerHeight()-parseInt(a.currentItem.css("paddingTop")||0,10)-parseInt(a.currentItem.css("paddingBottom")||0,10)),b.width(a.currentItem.innerWidth()-parseInt(a.currentItem.css("paddingLeft")||0,10)-parseInt(a.currentItem.css("paddingRight")||0,10))}},update:function(a,b){var
d=$(b.item).parent(),e=$(">th",d),f=c.p.colModel,g={},h=c.p.id+"_";$.each(f,function(a){g[this.name]=a});var
i=[];e.each(function(){var
a=$(">div",this).get(0).id.replace(/^jqgh_/,"").replace(h,"");g.hasOwnProperty(a)&&i.push(g[a])}),$(c).jqGrid("remapColumns",i,!0,!0),$.isFunction(c.p.sortable.update)&&c.p.sortable.update(i),setTimeout(function(){c.p.disableClick=!1},50)}};if(c.p.sortable.options?$.extend(e,c.p.sortable.options):$.isFunction(c.p.sortable)&&(c.p.sortable={update:c.p.sortable}),e.start){var
f=e.start;e.start=function(a,c){b(),f.call(this,a,c)}}else
e.start=b;c.p.sortable.exclude&&(e.items+=":not("+c.p.sortable.exclude+")");var
g=a.sortable(e),h=g.data("sortable")||g.data("uiSortable");null!=h&&(h.data("sortable").floating=!0)})},columnChooser:function(a){function
b(a,b,c){var
d,e;return b>=0?(d=a.slice(),e=d.splice(b,Math.max(a.length-b,b)),b>a.length&&(b=a.length),d[b]=c,d.concat(e)):a}function
c(a,b){a&&("string"==typeof
a?$.fn[a]&&$.fn[a].apply(b,$.makeArray(arguments).slice(2)):$.isFunction(a)&&a.apply(b,$.makeArray(arguments).slice(2)))}var
d,e,f,g,h,i,j,k=this,l={},m=[],n=k.jqGrid("getGridParam","colModel"),o=k.jqGrid("getGridParam","colNames"),p=function(a){return $.ui.multiselect.prototype&&a.data($.ui.multiselect.prototype.widgetFullName||$.ui.multiselect.prototype.widgetName)||a.data("ui-multiselect")||a.data("multiselect")},q=$.jgrid.getRegional(this[0],"col");if(!$("#colchooser_"+$.jgrid.jqID(k[0].p.id)).length){if(d=$('<div id="colchooser_'+k[0].p.id+'" style="position:relative;overflow:hidden"><div><select multiple="multiple"></select></div></div>'),e=$("select",d),a=$.extend({width:400,height:240,classname:null,done:function(a){a&&k.jqGrid("remapColumns",a,!0)},msel:"multiselect",dlog:"dialog",dialog_opts:{minWidth:470,dialogClass:"ui-jqdialog"},dlog_opts:function(a){var
b={};return b[a.bSubmit]=function(){a.apply_perm(),a.cleanup(!1)},b[a.bCancel]=function(){a.cleanup(!0)},$.extend(!0,{buttons:b,close:function(){a.cleanup(!0)},modal:a.modal||!1,resizable:a.resizable||!0,width:a.width+70,resize:function(){var
a=p(e),b=a.container.closest(".ui-dialog-content");b.length>0&&"object"==typeof
b[0].style?b[0].style.width="":b.css("width",""),a.selectedList.height(Math.max(a.selectedContainer.height()-a.selectedActions.outerHeight()-1,1)),a.availableList.height(Math.max(a.availableContainer.height()-a.availableActions.outerHeight()-1,1))}},a.dialog_opts||{})},apply_perm:function(){var
c=[];$("option",e).each(function(){$(this).is(":selected")?k.jqGrid("showCol",n[this.value].name):k.jqGrid("hideCol",n[this.value].name)}),$("option[selected]",e).each(function(){c.push(parseInt(this.value,10))}),$.each(c,function(){delete
l[n[parseInt(this,10)].name]}),$.each(l,function(){var
a=parseInt(this,10);c=b(c,a,a)}),a.done&&a.done.call(k,c),k.jqGrid("setGridWidth",k[0].p.width,k[0].p.shrinkToFit)},cleanup:function(b){c(a.dlog,d,"destroy"),c(a.msel,e,"destroy"),d.remove(),b&&a.done&&a.done.call(k)},msel_opts:{}},q,a||{}),$.ui&&$.ui.multiselect&&$.ui.multiselect.defaults){if(!$.jgrid._multiselect)return void
alert("Multiselect plugin loaded after jqGrid. Please load the plugin before the jqGrid!");a.msel_opts=$.extend($.ui.multiselect.defaults,a.msel_opts)}a.caption&&d.attr("title",a.caption),a.classname&&(d.addClass(a.classname),e.addClass(a.classname)),a.width&&($(">div",d).css({width:a.width,margin:"0 auto"}),e.css("width",a.width)),a.height&&($(">div",d).css("height",a.height),e.css("height",a.height-10)),e.empty(),$.each(n,function(a){return l[this.name]=a,this.hidedlg?void(this.hidden||m.push(a)):void
e.append("<option value='"+a+"' "+(this.hidden?"":"selected='selected'")+">"+$.jgrid.stripHtml(o[a])+"</option>")}),f=$.isFunction(a.dlog_opts)?a.dlog_opts.call(k,a):a.dlog_opts,c(a.dlog,d,f),g=$.isFunction(a.msel_opts)?a.msel_opts.call(k,a):a.msel_opts,c(a.msel,e,g),h=$("#colchooser_"+$.jgrid.jqID(k[0].p.id)),h.css({margin:"auto"}),h.find(">div").css({width:"100%",height:"100%",margin:"auto"}),i=p(e),i.container.css({width:"100%",height:"100%",margin:"auto"}),i.selectedContainer.css({width:100*i.options.dividerLocation+"%",height:"100%",margin:"auto",boxSizing:"border-box"}),i.availableContainer.css({width:100-100*i.options.dividerLocation+"%",height:"100%",margin:"auto",boxSizing:"border-box"}),i.selectedList.css("height","auto"),i.availableList.css("height","auto"),j=Math.max(i.selectedList.height(),i.availableList.height()),j=Math.min(j,$(window).height()),i.selectedList.css("height",j),i.availableList.css("height",j)}},sortableRows:function(a){return this.each(function(){var
b=this;b.grid&&(b.p.treeGrid||$.fn.sortable&&(a=$.extend({cursor:"move",axis:"y",items:" > .jqgrow"},a||{}),a.start&&$.isFunction(a.start)?(a._start_=a.start,delete
a.start):a._start_=!1,a.update&&$.isFunction(a.update)?(a._update_=a.update,delete
a.update):a._update_=!1,a.start=function(c,d){if($(d.item).css("border-width","0"),$("td",d.item).each(function(a){this.style.width=b.grid.cols[a].style.width}),b.p.subGrid){var
e=$(d.item).attr("id");try{$(b).jqGrid("collapseSubGridRow",e)}catch(f){}}a._start_&&a._start_.apply(this,[c,d])},a.update=function(c,d){$(d.item).css("border-width",""),b.p.rownumbers===!0&&$("td.jqgrid-rownum",b.rows).each(function(a){$(this).html(a+1+(parseInt(b.p.page,10)-1)*parseInt(b.p.rowNum,10))}),a._update_&&a._update_.apply(this,[c,d])},$("tbody:first",b).sortable(a),$("tbody:first > .jqgrow",b).disableSelection()))})},gridDnD:function(a){return this.each(function(){function
b(){var
a=$.data(e,"dnd");$("tr.jqgrow:not(.ui-draggable)",e).draggable($.isFunction(a.drag)?a.drag.call($(e),a):a.drag)}var
c,d,e=this;if(e.grid&&!e.p.treeGrid&&$.fn.draggable&&$.fn.droppable){var
f="<table id='jqgrid_dnd' class='ui-jqgrid-dnd'></table>";if(void
0===$("#jqgrid_dnd")[0]&&$("body").append(f),"string"==typeof
a&&"updateDnD"===a&&e.p.jqgdnd===!0)return void
b();if(a=$.extend({drag:function(a){return $.extend({start:function(b,c){var
d,f;if(e.p.subGrid){f=$(c.helper).attr("id");try{$(e).jqGrid("collapseSubGridRow",f)}catch(g){}}for(d=0;d<$.data(e,"dnd").connectWith.length;d++)0===$($.data(e,"dnd").connectWith[d]).jqGrid("getGridParam","reccount")&&$($.data(e,"dnd").connectWith[d]).jqGrid("addRowData","jqg_empty_row",{});c.helper.addClass("ui-state-highlight"),$("td",c.helper).each(function(a){this.style.width=e.grid.headers[a].width+"px"}),a.onstart&&$.isFunction(a.onstart)&&a.onstart.call($(e),b,c)},stop:function(b,c){var
d,f;for(c.helper.dropped&&!a.dragcopy&&(f=$(c.helper).attr("id"),void
0===f&&(f=$(this).attr("id")),$(e).jqGrid("delRowData",f)),d=0;d<$.data(e,"dnd").connectWith.length;d++)$($.data(e,"dnd").connectWith[d]).jqGrid("delRowData","jqg_empty_row");a.onstop&&$.isFunction(a.onstop)&&a.onstop.call($(e),b,c)}},a.drag_opts||{})},drop:function(a){return $.extend({accept:function(a){if(!$(a).hasClass("jqgrow"))return a;var
b=$(a).closest("table.ui-jqgrid-btable");if(b.length>0&&void
0!==$.data(b[0],"dnd")){var
c=$.data(b[0],"dnd").connectWith;return-1!==$.inArray("#"+$.jgrid.jqID(this.id),c)?!0:!1}return!1},drop:function(b,c){if($(c.draggable).hasClass("jqgrow")){var
d=$(c.draggable).attr("id"),f=c.draggable.parent().parent().jqGrid("getRowData",d);if(!a.dropbyname){var
g,h,i=0,j={},k=$("#"+$.jgrid.jqID(this.id)).jqGrid("getGridParam","colModel");try{for(h
in
f)f.hasOwnProperty(h)&&(g=k[i].name,"cb"!==g&&"rn"!==g&&"subgrid"!==g&&f.hasOwnProperty(h)&&k[i]&&(j[g]=f[h]),i++);f=j}catch(l){}}if(c.helper.dropped=!0,a.beforedrop&&$.isFunction(a.beforedrop)){var
m=a.beforedrop.call(this,b,c,f,$("#"+$.jgrid.jqID(e.p.id)),$(this));void
0!==m&&null!==m&&"object"==typeof
m&&(f=m)}if(c.helper.dropped){var
n;a.autoid&&($.isFunction(a.autoid)?n=a.autoid.call(this,f):(n=Math.ceil(1e3*Math.random()),n=a.autoidprefix+n)),$("#"+$.jgrid.jqID(this.id)).jqGrid("addRowData",n,f,a.droppos)}a.ondrop&&$.isFunction(a.ondrop)&&a.ondrop.call(this,b,c,f)}}},a.drop_opts||{})},onstart:null,onstop:null,beforedrop:null,ondrop:null,drop_opts:{activeClass:"ui-state-active",hoverClass:"ui-state-hover"},drag_opts:{revert:"invalid",helper:"clone",cursor:"move",appendTo:"#jqgrid_dnd",zIndex:5e3},dragcopy:!1,dropbyname:!1,droppos:"first",autoid:!0,autoidprefix:"dnd_"},a||{}),a.connectWith)for(a.connectWith=a.connectWith.split(","),a.connectWith=$.map(a.connectWith,function(a){return $.trim(a)}),$.data(e,"dnd",a),0===e.p.reccount||e.p.jqgdnd||b(),e.p.jqgdnd=!0,c=0;c<a.connectWith.length;c++)d=a.connectWith[c],$(d).droppable($.isFunction(a.drop)?a.drop.call($(e),a):a.drop)}})},gridResize:function(opts){return this.each(function(){var
$t=this,gID=$.jgrid.jqID($t.p.id),req;if($t.grid&&$.fn.resizable){if(opts=$.extend({},opts||{}),opts.alsoResize?(opts._alsoResize_=opts.alsoResize,delete
opts.alsoResize):opts._alsoResize_=!1,opts.stop&&$.isFunction(opts.stop)?(opts._stop_=opts.stop,delete
opts.stop):opts._stop_=!1,opts.stop=function(a,b){$($t).jqGrid("setGridParam",{height:$("#gview_"+gID+" .ui-jqgrid-bdiv").height()}),$($t).jqGrid("setGridWidth",b.size.width,opts.shrinkToFit),opts._stop_&&opts._stop_.call($t,a,b),$t.p.caption&&$("#gbox_"+gID).css({height:"auto"}),$t.p.frozenColumns&&(req&&clearTimeout(req),req=setTimeout(function(){req&&clearTimeout(req),$("#"+gID).jqGrid("destroyFrozenColumns"),$("#"+gID).jqGrid("setFrozenColumns")}))},opts._alsoResize_){var
optstest="{'#gview_"+gID+" .ui-jqgrid-bdiv':true,'"+opts._alsoResize_+"':true}";opts.alsoResize=eval("("+optstest+")")}else
opts.alsoResize=$(".ui-jqgrid-bdiv","#gview_"+gID);delete
opts._alsoResize_,$("#gbox_"+gID).resizable(opts)}})}})});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";var
b,c=a();a.fn.html5sortable=function(d){var
e=String(d);return d=a.extend({connectWith:!1},d),this.each(function(){if(/^enable|disable|destroy$/.test(e)){var
f=a(this).children(a(this).data("items")).attr("draggable","enable"===e);return void("destroy"===e&&f.add(this).removeData("connectWith items").off("dragstart.h5s dragend.h5s selectstart.h5s dragover.h5s dragenter.h5s drop.h5s"))}var
g,h,f=a(this).children(d.items),i=a("<"+(/^ul|ol$/i.test(this.tagName)?"li":/^tbody$/i.test(this.tagName)?"tr":"div")+' class="sortable-placeholder '+d.placeholderClass+'">').html("&nbsp;");f.find(d.handle).mousedown(function(){g=!0}).mouseup(function(){g=!1}),a(this).data("items",d.items),c=c.add(i),d.connectWith&&a(d.connectWith).add(this).data("connectWith",d.connectWith),f.attr("draggable","true").on("dragstart.h5s",function(c){if(d.handle&&!g)return!1;g=!1;var
e=c.originalEvent.dataTransfer;e.effectAllowed="move",e.setData("Text","dummy"),h=(b=a(this)).addClass("sortable-dragging").index()}).on("dragend.h5s",function(){b&&(b.removeClass("sortable-dragging").show(),c.detach(),h!==b.index()&&b.parent().trigger("sortupdate",{item:b,startindex:h,endindex:b.index()}),b=null)}).not("a[href], img").on("selectstart.h5s",function(){return this.dragDrop&&this.dragDrop(),!1}).end().add([this,i]).on("dragover.h5s dragenter.h5s drop.h5s",function(e){return f.is(b)||d.connectWith===a(b).parent().data("connectWith")?"drop"===e.type?(e.stopPropagation(),c.filter(":visible").after(b),b.trigger("dragend.h5s"),!1):(e.preventDefault(),e.originalEvent.dataTransfer.dropEffect="move",f.is(this)?(d.forcePlaceholderSize&&i.height(b.outerHeight()),b.hide(),a(this)[i.index()<a(this).index()?"after":"before"](i),c.not(i).detach()):c.is(this)||a(this).children(d.items).length||(c.detach(),a(this).append(i)),!1):!0})})}});
/**
 * jqGrid Russian Translation v1.0 02.07.2009 (based on translation by Alexey Kanaev v1.1 21.01.2009, http://softcore.com.ru)
 * Sergey Dyagovchenko
 * http://d.sumy.ua
 * Tony Tomov
 * http://www.guriddo.net
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
/*global jQuery, define */
(function( factory ) {
	"use strict";
	if ( typeof define === "function" && define.amd ) {
		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"../grid.base"
		], factory );
	} else {
		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

$.jgrid = $.jgrid || {};
if(!$.jgrid.hasOwnProperty("regional")) {
	$.jgrid.regional = [];
}
$.jgrid.regional["ru"] = {
	defaults : {
		recordtext: "Просмотр {0} - {1} из {2}",
		emptyrecords: "Нет записей для просмотра",
		loadtext: "Загрузка...",
		pgtext : "Стр. {0} из {1}",
		savetext: "Сохранения...",
		pgfirst : "Первая",
		pglast : "Последняя",
		pgnext : "Следующая",
		pgprev : "Предыдущая",
		pgrecs : "Записей на стр.",
		showhide: "Показать/Скрыть таблицу",
		// mobile
		pagerCaption : "Грид::Параметры страницы",
		pageText : "Страница:",
		recordPage : "Записей на стр.",
		nomorerecs : "Нет больше записей...",
		scrollPullup: "Потяните, чтобы загрузить более...",
		scrollPulldown : "Потяните вниз чтобы обновить...",
		scrollRefresh : "Отпустите, чтобы обновить..."
	},
	search : {
		caption: "Поиск...",
		Find: "Найти",
		Reset: "Сброс",
		odata: [{ oper:'eq', text:"равно"},{ oper:'ne', text:"не равно"},{ oper:'lt', text:"меньше"},{ oper:'le', text:"меньше или равно"},{ oper:'gt', text:"больше"},{ oper:'ge', text:"больше или равно"},{ oper:'bw', text:"начинается с"},{ oper:'bn', text:"не начинается с"},{ oper:'in', text:"находится в"},{ oper:'ni', text:"не находится в"},{ oper:'ew', text:"заканчивается на"},{ oper:'en', text:"не заканчивается на"},{ oper:'cn', text:"содержит"},{ oper:'nc', text:"не содержит"},{ oper:'nu', text:"равно NULL"},{ oper:'nn', text:"не равно NULL"}, {oper:'bt', text:'между'}],
		groupOps: [	{ op: "AND", text: "все" }, { op: "OR", text: "любой" }],
		operandTitle : "Выбрать поисковую операцию.",
		resetTitle : "Сбросить поиск"
	},
	edit : {
		addCaption: "Добавить запись",
		editCaption: "Редактировать запись",
		bSubmit: "Сохранить",
		bCancel: "Отмена",
		bClose: "Закрыть",
		saveData: "Данные были измененны! Сохранить изменения?",
		bYes : "Да",
		bNo : "Нет",
		bExit : "Отмена",
		msg: {
			required:"Поле является обязательным",
			number:"Пожалуйста, введите правильное число",
			minValue:"значение должно быть больше либо равно",
			maxValue:"значение должно быть меньше либо равно",
			email: "некорректное значение e-mail",
			integer: "Пожалуйста, введите целое число",
			date: "Пожалуйста, введите правильную дату",
			url: "неверная ссылка. Необходимо ввести префикс ('http://' или 'https://')",
			nodefined : " не определено!",
			novalue : " возвращаемое значение обязательно!",
			customarray : "Пользовательская функция должна возвращать массив!",
			customfcheck : "Пользовательская функция должна присутствовать в случаи пользовательской проверки!"
		}
	},
	view : {
		caption: "Просмотр записи",
		bClose: "Закрыть"
	},
	del : {
		caption: "Удалить",
		msg: "Удалить выбранную запись(и)?",
		bSubmit: "Удалить",
		bCancel: "Отмена"
	},
	nav : {
		edittext: " ",
		edittitle: "Редактировать выбранную запись",
		addtext:" ",
		addtitle: "Добавить новую запись",
		deltext: " ",
		deltitle: "Удалить выбранную запись",
		searchtext: " ",
		searchtitle: "Найти записи",
		refreshtext: "",
		refreshtitle: "Обновить таблицу",
		alertcap: "Внимание",
		alerttext: "Пожалуйста, выберите запись",
		viewtext: "",
		viewtitle: "Просмотреть выбранную запись",
		savetext: "",
		savetitle: "Сохранить запись",
		canceltext: "",
		canceltitle : "Отмена сохранения",
		selectcaption : "Действия..."
	},
	col : {
		caption: "Показать/скрыть столбцы",
		bSubmit: "Сохранить",
		bCancel: "Отмена"	
	},
	errors : {
		errcap : "Ошибка",
		nourl : "URL не установлен",
		norecords: "Нет записей для обработки",
		model : "Число полей не соответствует числу столбцов таблицы!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
		currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
		date : {
			dayNames:   [
				"Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб",
				"Воскресение", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"
			],
			monthNames: [
				"Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек",
				"Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
			],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th';},
			srcformat: 'Y-m-d',
			newformat: 'd.m.Y',
			parseRe : /[#%\\\/:_;.,\t\s-]/,
			masks : {
				ISO8601Long:"Y-m-d H:i:s",
				ISO8601Short:"Y-m-d",
				ShortDate: "n.j.Y",
				LongDate: "l, F d, Y",
				FullDateTime: "l, F d, Y G:i:s",
				MonthDay: "F d",
				ShortTime: "G:i",
				LongTime: "G:i:s",
				SortableDateTime: "Y-m-d\\TH:i:s",
				UniversalSortableDateTime: "Y-m-d H:i:sO",
				YearMonth: "F, Y"
			},
			reformatAfterEdit : false,
			userLocalTime : false
		},
		baseLinkUrl: '',
		showAction: '',
		target: '',
		checkbox : {disabled:true},
		idName : 'id'
	},
	colmenu : {
		sortasc : "Сортировка по возрастанию",
		sortdesc : "Сортировка по убыванию",
		columns : "Колонны",
		filter : "Филтрировать",
		grouping : "Группа по",
		ungrouping : "Разгруппировать",
		searchTitle : "Строки со значениями",
		freeze : "Закрепление",
		unfreeze : "Отмена закрепление",
		reorder : "Переместить в порядок"
	}
};
}));
