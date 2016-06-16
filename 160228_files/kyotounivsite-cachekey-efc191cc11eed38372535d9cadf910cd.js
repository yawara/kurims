
/* Merged Plone Javascript file
 * This file is dynamically assembled from separate parts.
 * Some of these parts have 3rd party licenses or copyright information attached
 * Such information is valid for that section,
 * not for the entire composite file
 * originating files are separated by - filename.js -
 */

/* - kyotounivsite.js - */
// http://www.kyoto-u.ac.jp/portal_javascripts/kyotounivsite.js?original=1
$(function(){if(document.getElementById('ku_admin')){if(document.getElementById('ku_admin').getAttribute('class')<1){$('#archetypes-fieldname-top').hide()
$('#archetypes-fieldname-pickupLimitFlg').hide()
$('#archetypes-fieldname-pickupLimitStart').hide()
$('#archetypes-fieldname-pickupLimitEnd').hide()}
if(document.getElementById('ku_admin_lang')){if('ja'!=document.getElementById('ku_admin_lang').getAttribute('class')){$('#archetypes-fieldname-target').hide()}}
if($('#cmfeditions_version_comment_block > label[for="cmfeditions_version_comment"]').text()){$('#cmfeditions_version_comment_block > label[for="cmfeditions_version_comment"]').text('コメント欄')}
if($('#cmfeditions_version_comment_help').text()){$('#cmfeditions_version_comment_help').text("担当者の所属、氏名、内線番号、e-mailアドレス、固定ページ編集の場合は変更内容を記入してください。正しく記載されていないと公開の手続きをとることができませんので、ご注意ください。")}
function reorderTags(elementid,ORDER_LIST){elementid="#"+elementid;opts={};$(elementid+" option").each(function(){val=$(this).html();opts[val]=$(this).attr('selected')})
$(elementid).empty();if(Object.keys(opts).length==Object.keys(ORDER_LIST).length){for(id in ORDER_LIST){val=ORDER_LIST[id];selected=opts[val]?' selected="'+opts[val]+'"':'';$(elementid).append('<option value="'+val+'"'+selected+'>'+val+'</option>')}} else{alert(elementid+"の内容が許可された候補と一致しません");for(val in opts){selected=opts[val]?' selected="'+opts[val]+'"':'';$(elementid).append('<option value="'+val+'"'+selected+'>'+val+'</option>')}}}
function disappearOldTags(elementid,OLDLIST){elementid="#"+elementid;$(elementid+" option").each(function(){val=$(this).html();for(id in OLDLIST){old=OLDLIST[id];if(val==old){$(this).html($(this).html()+"(現在は使用されていません。)");$(this).attr("class","old")}}})}
if(document.getElementById('busyo')){reorderTags('busyo',BUSYO_ID_LIST);disappearOldTags('busyo',BUSYO_ID_LIST_OLD)}
if(document.getElementById('syokumei')){reorderTags('syokumei',SYOKUMEI_ID_LIST)}
if(document.getElementById('campus')){reorderTags('campus',CAMPUS_ID_LIST)}}});

/* - event_calendar_formfield.js - */
// http://www.kyoto-u.ac.jp/portal_javascripts/event_calendar_formfield.js?original=1
function onJsCalendarDateUpdate(cal){var year=cal.params.input_id_year;var month=cal.params.input_id_month;var day=cal.params.input_id_day;var daystr=''+cal.date.getDate();if(daystr.length==1)
daystr='0'+daystr;var monthstr=''+(cal.date.getMonth()+1);if(monthstr.length==1)
monthstr='0'+monthstr;cal.params.inputField.value=''+cal.date.getFullYear()+'/'+monthstr+'/'+daystr
year.value=cal.params.inputField.value.substring(0,4);month.value=cal.params.inputField.value.substring(5,7);day.value=cal.params.inputField.value.substring(8,10)}
function showJsCalendar(input_id_anchor,input_id,input_id_year,input_id_month,input_id_day,input_id_hour,input_id_minute,yearStart,yearEnd){var input_id_anchor=document.getElementById(input_id_anchor);var input_id=document.getElementById(input_id);var input_id_year=document.getElementById(input_id_year);var input_id_month=document.getElementById(input_id_month);var input_id_day=document.getElementById(input_id_day);var format='%Y/%m/%d';var dateEl=input_id;var mustCreate=false;var cal=window.calendar;var params={'range':[yearStart,yearEnd],inputField:input_id,input_id_year:input_id_year,input_id_month:input_id_month,input_id_day:input_id_day};
function param_default(pname,def){if(typeof params[pname]=="undefined"){params[pname]=def}};param_default("inputField",null);param_default("displayArea",null);param_default("button",null);param_default("eventName","click");param_default("ifFormat","%Y/%m/%d");param_default("daFormat","%Y/%m/%d");param_default("singleClick",true);param_default("disableFunc",null);param_default("dateStatusFunc",params["disableFunc"]);param_default("dateText",null);param_default("firstDay",1);param_default("align","Bl");param_default("range",[1900,2999]);param_default("weekNumbers",true);param_default("flat",null);param_default("flatCallback",null);param_default("onSelect",null);param_default("onClose",null);param_default("onUpdate",null);param_default("date",null);param_default("showsTime",false);param_default("timeFormat","24");param_default("electric",true);param_default("step",2);param_default("position",null);param_default("cache",false);param_default("showOthers",false);param_default("multiple",null);if(!(cal&&params.cache)){window.calendar=cal=new Calendar(params.firstDay,null,onJsCalendarDateUpdate,
function(cal){cal.hide()});cal.time24=true;cal.weekNumbers=true;mustCreate=true} else{cal.hide()}
cal.showsOtherMonths=false;cal.yearStep=2;cal.setRange(yearStart,yearEnd);cal.params=params;cal.setDateStatusHandler(null);cal.getDateText=null;cal.setDateFormat(format);if(mustCreate)
cal.create();cal.refresh();if(!params.position)
cal.showAtElement(input_id_anchor,null);else
cal.showAt(params.position[0],params.position[1]);return false}
function update_date_field(field,year,month,day,hour,minute,ampm){var field=document.getElementById(field)
var date=document.getElementById(date)
var year=document.getElementById(year)
var month=document.getElementById(month)
var day=document.getElementById(day)
var hour=document.getElementById(hour)
var minute=document.getElementById(minute)
var ampm=document.getElementById(ampm)
if(0<year.value){val=[year.value,month.value,day.value].join('-');date=new Date(val.replace(/-/g,'/'));if(date.print('%Y-%m-%d')!==val){val=date.print('%Y-%m-%d');year.value=val.substring(0,4);month.value=val.substring(5,7);day.value=val.substring(8,10)}
field.value=year.value+"-"+month.value+"-"+day.value+" "+hour.value+":"+minute.value
if(ampm&&ampm.value)
field.value=field.value+" "+ampm.value}
else{field.value=''
month.options[0].selected=1
day.options[0].selected=1
hour.options[0].selected=1
minute.options[0].selected=1
if(ampm&&ampm.options)
ampm.options[0].selected=1}}


/* - date_time_list.js - */
// http://www.kyoto-u.ac.jp/portal_javascripts/date_time_list.js?original=1
function update_list_value(formName,fieldName){var str="";var obj;for(var i=0;i<eval(document.getElementById("listnum").value);i++){obj=document.getElementById(formName+"_"+fieldName+"_"+i);str+=obj.value+"\n"}
document.getElementById(fieldName).value=str}
function add_datetimelist(formName,fieldName){var numObj=document.getElementById("listnum");var num=eval(numObj.value);var ids=new Array('year','month','day')
var obj0;var obj1;var objs;var obje
if(num<20){var Obj=document.getElementById(fieldName+"_tr"+num);Obj.style.display="";numObj.value=String(num+2);m=num+1;for(var i=0;i<ids.length;i++){obj0=document.getElementById("edit_form_"+fieldName+"_0_"+ids[i]);obj1=document.getElementById("edit_form_"+fieldName+"_1_"+ids[i]);objs=document.getElementById("edit_form_"+fieldName+"_"+num+"_"+ids[i]);obje=document.getElementById("edit_form_"+fieldName+"_"+m+"_"+ids[i]);objs.selectedIndex=obj0.selectedIndex;obje.selectedIndex=obj1.selectedIndex}
objs.onchange();obje.onchange()}
update_list_value(formName,fieldName)}
function delete_datetimelist(formName,fieldName){var numObj=document.getElementById("listnum");var num=eval(numObj.value);if(num>2){num-=2;var Obj=document.getElementById(fieldName+"_tr"+num);Obj.style.display="none";numObj.value=String(num)}
update_list_value(formName,fieldName)}

/* XXX ERROR -- could not find 'collective.js.jqueryui.custom.min.js'*/
