	var COMMON_LOADING = '<div class="cssload-square"><div class="cssload-square-part cssload-square-green"></div><div class="cssload-square-part cssload-square-pink"></div><div class="cssload-square-blend"></div></div>';

// 메세지 보여주기
	function showDialog(errorStr,error_msg,type,numberVal){
		alert(error_msg);
	}
	
	function alertMessage(error_msg) {
		alert(error_msg);
	}
	
	//영문으로 시작 영문,숫자,_ 만 입력가능
	function checkIdType(str) {
		var pattern = /^[a-zA-Z]+[a-zA-Z0-9_]*$/;
		var num = /[0-9]/;
		
		return (pattern.test(str)); 
	}
	
	//=== 영문, 숫자 혼용 확인
	// 혼용이면 true, 아니면 false
	function rtn_engnum_mix_chk(str)
	{
		var chk_num = str.search(/[0-9]/g);
		var chk_eng = str.search(/[a-z]/ig);
		if(chk_num < 0 || chk_eng < 0)
		{
			return false;
		}
		return true;
	}
	
	//=== 영문 확인
	// 영문이면 true, 아니면 false
	function rtn_eng_chk(str)
	{		
		str = str.UpperCase();
		
		for( var i = 0; i <= str.length -1 ; i++ )
		{
			if('A' <= str.charAt(i) && str.charAt(i) <= 'Z')
			{}
			else
			{
				return false;
			}
		}
		return true;
	}
	//=== 숫자 확인
	// 숫자이면 true, 아니면 false
	function rtn_num_chk(str)
	{
		for( var i = 0; i <= str.length -1 ; i++ )
		{
			if(str.charAt(i) >= '0' && str.charAt(i) <= '9')
			{}
			else
			{
				return false;
			}
		}
		return true;
	}
	
	//=== 숫자 확인
	// 숫자이면 true, 아니면 false
	function chkNumComma(str)
	{
		str = replaceAll(str, ",", "");
		for( var i = 0; i <= str.length -1 ; i++ )
		{
			if(str.charAt(i) >= '0' && str.charAt(i) <= '9')
			{}
			else
			{
				return false;
			}
		}
		return true;
	}
	
	function getTrimValById(eId) {
		var str = "";
		try {
			str = $.trim($("#" + eId).val());
		} catch(e) {}
		return str;
	}
	
	//게시판설정이동
	function fnGoBbsSetting(siteIdx,bsIdx, smiIdx){
		window.open("/ubhome/bbs/bbsAdd.do?siteIdx="+siteIdx+"&bsIdx="+bsIdx);
	}
	
	function fnGoContentsSetting(siteIdx, ciIdx, smiIdx) {
		var url = '/ubhome/contents/pageWrite.do?siteIdx=' + siteIdx + '&smiIdx=' + smiIdx;
		if (ciIdx != '') {
			url += '&ciIdx=' + ciIdx;
		}
		window.open(url);
	}
	
	function fnGoMenuSetting(siteIdx, smiIdx) {
		window.open("/ubhome/menu/menuInfo.do?siteIdx="+siteIdx+"&smiIdx="+smiIdx);
	}
	
	function blockCtrlC() {
		var ctrlDown = false;
	    var ctrlKey = 17, vKey = 86, cKey = 67;

	    $(document).keydown(function(e)
	    {
	        if (e.keyCode == ctrlKey) ctrlDown = true;
	    }).keyup(function(e)
	    {
	        if (e.keyCode == ctrlKey) ctrlDown = false;
	    });

	    $(document).keydown(function(e)
	    {
	        if (ctrlDown && (e.keyCode == vKey || e.keyCode == cKey)) return false;
	    });
	}
	
	//==== 기본안티 이벤트 등록(오른쪽마우스,드래그,키입력)
	function js_event_anti(this_s){
	//문제점 : FF에서는 드래그 이벤트를 제어할 수 없다.
	 if(!this_s){this_s = window.document;}
	 if(document.attachEvent){
	 //this_s.attachEvent("onkeydown", js_event_anti_processKey );
	 //this_s.attachEvent("onkeydown", noCTRL);
	 this_s.attachEvent("onmousedown", js_event_anti_right );
	 this_s.attachEvent("onselectstart", js_event_anti_stop_event );
	 this_s.attachEvent("ondragstart", js_event_anti_stop_event );
	 this_s.attachEvent("oncontextmenu", js_event_anti_stop_event );
	 }
	 else{
	 window.captureEvents(Event.MOUSEDOWN);
	 window.captureEvents(Event.ONKEYDOWN);
	 //this_s.addEventListener("keydown", js_event_anti_processKey , false);
	 //this_s.addEventListener("keydown", noCTRL, false);
	 this_s.addEventListener("mousedown", js_event_anti_right , false);
	 this_s.addEventListener("dragstart", js_event_anti_stop_event , false);  //FF에서 지원되지 않는다.
	 this_s.addEventListener("selectstart", js_event_anti_stop_event , false);  //FF에서 지원되지 않는다.
	 this_s.addEventListener("contextmenu", js_event_anti_stop_event , false);
	 }
	 blockCtrlC();
	}
	//==== 오른쪽 마우스 버튼 막기
	function js_event_anti_right(e) {
	 evt = e || event;
		try{
	  if (document.all){
	  if(evt.button == 2 || evt.button == 3) {
	 alert('오른쪽 마우스 제한설정 적용중입니다.');
		js_event_anti_stop_event(evt);
		return false;    }
	  }else {
	  if(evt.which == 3 || evt.which == 2) {
	 alert('오른쪽 마우스 제한설정 적용중입니다.');
		js_event_anti_stop_event(evt);
		return false; }
	  }
		}catch(ex){
	  return false;
		}
	}
	//==== 키보드 입력 막기
	function js_event_anti_processKey(e){
	 evt = e || event;
	 alert('키보드 입력 제한설정 적용중입니다.');
	  try{
	  js_event_anti_stop_event(evt);
	  return false;
		}catch(ex){
	  return false;
		}
	}
	//==== 이벤트 동작 무시!
	function js_event_anti_stop_event(evt){
		
		try {
			 if(window.event){
				 //alert(window.event);
				 window.event.keyCode = 0;
				 window.event.cancelBubble = true;
				 window.event.returnValue = true;
			 }

			 if (evt != null) {
				 evt.stopPropagation();
				 evt.preventDefault();
				 evt.initEvent;
			 }
		} catch(e) {
			 
		}
	 return false;
	}
	function noCTRL(e)
	{
	 var code = (document.all) ? event.keyCode:e.which;
	 var ctrl = (document.all) ? event.ctrlKey:e.modifiers & Event.CONTROL_MASK;
	 var msg = "Ctrl + C / Ctrl + V키를 금지합니다 ";
	 
	 if (document.all)
	 {
		 alert(ctrl + "\n" + code);
	  if (ctrl && code==86) //CTRL+V
	  {
	   alert(msg);
	   window.event.returnValue = false;
	  }
	  else if (ctrl && code==67) //CTRL+C (Copy)
	  {
	   alert(msg);
	   window.event.returnValue = false;
	  }
	 }
	 
	} 

	//리스트 제목글자수 제한
	function fnSubjectSubstr(strVal,limitCnt){
		var rtnStr = "";
		if (strVal == null || strVal == undefined) strVal = "";

		if(strVal.length > limitCnt){
			rtnStr = strVal.substr(0,limitCnt)+"...";
		}else{
			rtnStr = strVal;
		}
		return rtnStr;
	}	
	
	function hangulCut(str,len) {
		
		if (str == null || str == undefined)
			str = '';
		else {
	        var l = 0;
	        for (var i=0; i<str.length; i++) {
	                l += (str.charCodeAt(i) > 128) ? 2 : 1;
	                if (l > len) return str.substring(0,i) + "...";
	        }
		}
        return str;
	}
	
	function showSearchZip()
	{
		showPopup("/cmmn/popup/searchZip.do", "search_zip", 500, 350, "Yes");
	}
	
	// 새창띄우기
	function showPopup(URL, WinName, WinWidth, WinHeight, ScrollYN)
	{
		var NewWin = window.open(URL, WinName, 'toolbar=no, top=10, left=10, width=' + WinWidth + ', height=' + WinHeight + ', resizable=yes, scrollbars=' + ScrollYN);
		NewWin.focus();
	}

	function chkSupportActiveX() {
	
		var isActiveX = false;
		var IEIndex = navigator.appVersion.indexOf("MSIE");         // MSIE를 찾고 인덱스를 리턴
	    var IE8Over = navigator.userAgent.indexOf("Trident");      // MS IE 8이상 버전 체크
	     
	    if( IEIndex > 0 || IE8Over > 0 )  {
	    	var trident = navigator.userAgent.match(/Trident\/(\d.\d)/i);
	    	if (trident != null){
	    		
		        switch (trident[1]) {
		        case "7.0" :
		        	strVer = "11.0";
		        	break;
		        case "6.0" :
		        	strVer = "10.0";
		        	break;
		        case "5.0" :
		        	strVer = "9.0";
		        	isActiveX = true;
		        	break;      
		        case "4.0" :
		        	strVer = "8.0";
		        	isActiveX = true;
		        	break;
		        default :
		        	isActiveX = true;
		        	break;
		        }
	    	}    
	       
	    	//strNav = "Microsoft Internet Explorer " + strVer;    
	       
		} else  {   
	    	//strNav = "기타 브라우저";
		}
		
		return isActiveX;
	}
	
function replaceAll(str, a, b) {
	return str.split(a).join(b);
}
	
	
////////////////////////////////////////////////////////////////////////////////////////////////////////
/////
///// 팝업창관련 함수
/////
////////////////////////////////////////////////////////////////////////////////////////////////////////

//쿠키생성
function createCookie(name, value, days)
{
if (days)
{
var date = new Date();
date.setTime(date.getTime()+(days*24*60*60*1000));
var expires = "; expires="+date.toGMTString();
}
else expires = "";
document.cookie = name+"="+value+expires+"; path=/";
}

//쿠키읽기
function readCookie(name)
{
var nameEQ = name + "=";
var ca = document.cookie.split(';');
for(var i=0;i < ca.length;i++)
{
var c = ca[i];
while (c.charAt(0)==' ') c = c.substring(1,c.length);
if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
}
return null;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
//레이어팝업창 쿠키닫기
function popuplayer_cookieclose(str1, str2)
{
createCookie(str1, "done" , 1);  // 오른쪽 숫자는 쿠키를 유지할 기간을 설정합니다
document.getElementById(str2).style.display = "none";
}

//레이어팝업창 단순닫기
function popuplayer_close(str)
{
document.getElementById(str).style.display = "none";
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
//새창띄우기
function popup_open(URL, WinName, WinWidth, WinHeight, WinTop, WinLeft)
{
	 var marginX = 0;
     var marginY = 0;
     //alert(thisX + " : " + thisY);
     //alert("브라우저 정보 : " + navigator.userAgent);
     // 브라우저별 조절
     if (navigator.userAgent.indexOf("MSIE") > 0) {
		 //alert("MSIE");
         if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){ //test for MSIE x.x;
         var ieversion=new Number(RegExp.$1) // capture x.x portion and store as a number
		 /*
		 if (ieversion>=9) { marginX = -5; marginY = 14; } // IE9
         else if (ieversion>=8) { marginX = -5; marginY = 14; } // IE8
         else if (ieversion>=7) { marginX = -5; marginY = 14; } // IE7
         else if (ieversion>=6) { marginX = 25; marginY = 57; } // I6E
		 */
		 marginX = -5; marginY = 14;
         }
     } // IE
     else if (navigator.userAgent.indexOf("Chrome") > 0) { 
		 marginX = 0; marginY = 18; } // Chrome
     else if (navigator.userAgent.indexOf("Firefox") > 0) { 
		 marginX = 0; marginY = 18; } // Firefox
     else if (navigator.userAgent.indexOf("Safari") > 0) { 
		 marginX = 0; marginY = -42; } // Safari
     else if (navigator.userAgent.indexOf("pera") > 0) { marginX = 0; marginY = 0; } // Opera
    else {
		marginX = -5;
		marginY = 14;
	}

    var w = parseInt(WinWidth) + marginX;
    var h = parseInt(WinHeight) + marginY;
	//alert(h);
	var NewWin = window.open(URL, WinName, 'toolbar=no, top=' + WinTop + ', left=' + WinLeft + ', width=' + w + ', height=' + h + ', scrollbars=no');
	NewWin.focus();
}

//쿠키닫기
function new_close(str)
{
if (document.getElementById(str).checked == true)
{
createCookie(str, "done" , 1);  // 오른쪽 숫자는 쿠키를 유지할 기간을 설정합니다
}
window.close();
}

function fnMovePageByTopMenu(smiIdx) {
	$.ajax({
		type:'post',
		url: '/cmm/ajax/movePageByTopMenu.do',
		async: true,
		cache: false,
		dataType: 'json',
		data: {
			smiIdx: smiIdx
		},
		beforSend: function() {
			$("#loading_layer").show();
		},
		success: function(json) {
			var url = json.rtnUrl;
			var targetFlag = json.rtnTargetFlag;
			if(targetFlag == 'Y'){
				//window.open(url,"",'height='+screen.height+',width='+screen.width+'fullscreen=yes');
				
				$(document.body).append('<a id="blanklink" target="_blank"></a>');
				$("#blanklink").attr("href", url);
				$("#blanklink")[0].click();
				$("#blanklink").remove();
			}else{
				location.href = url;
			}
		},
		complete: function() {
			$("#loading_layer").hide();
		}
	});
}

function fnMovePageByLeftMenu(smiIdx) {
	$.ajax({
		type:'post',
		url: '/cmm/ajax/movePageBySiteMenu.do',
		async: true,
		cache: false,
		dataType: 'json',
		data: {
			smiIdx: smiIdx
		},
		beforSend: function() {
			$("#loading_layer").show();
		},
		success: function(json) {
			var url = json.rtnUrl;
			var targetFlag = json.rtnTargetFlag;
			if(targetFlag == 'Y'){
				window.open(url,"",'height='+screen.height+',width='+screen.width+'fullscreen=yes');
			}else{
				location.href = url;
			}
		},
		complete: function() {
			$("#loading_layer").hide();
		}
	});
}


function getTokens() {
	var tokens = [];
	var query = location.search;
	query = query.slice(1);
	query = query.split('&');
	try {
	$.each(query, function(i, value) {
		var token = value.split('=');
		var key = decodeURIComponent(token[0]);
		var data = decodeURIComponent(token[1]);
		tokens[key] = data;
	});
	} catch(e) {
		alert(e.message);
	}
	return tokens;
}

var browserTitle = "";

function setTitle(title) {
	browserTitle = title;
	document.title = title;
}

function setAddTitle(str) {
	setTitle(browserTitle + " " + str);
}

function popLinkSite() {
	if ($("#link_site").val() == '') {
		alert("관련기관 사이트를 선택해주세요.");
	} else {
		var f = document.forms[0];
		f.action = $("#link_site").val();
		f.target = "_blank";
		f.submit();
	}
}

function getUrlParams() {
	var params = {};
	
	window.location.search.replace(
		/[?&]+([^=&]+)=([^&]*)/gi,
		function(str, key, value) { params[key] = value; }
	);
	
	return params;
}


function checkAll(name, obj) {	
	$("input[name='" + name + "']").prop('checked', $(obj).is(':checked'));	
}

function closeIt() {
	self.close();
}

function checkOK(form) {
	
	if (form == null) {
		document.postform.submit();
	} else {
		eval('document.' + form + '.submit()');
	}
}

function date_add(sDate, nDays) {
    var yy = parseInt(sDate.substr(0, 4), 10);
    var mm = parseInt(sDate.substr(5, 2), 10);
    var dd = parseInt(sDate.substr(8), 10);
 
    d = new Date(yy, mm - 1, dd + nDays);
 
    yy = d.getFullYear();
    mm = d.getMonth() + 1; mm = (mm < 10) ? '0' + mm : mm;
    dd = d.getDate(); dd = (dd < 10) ? '0' + dd : dd;
 
    return '' + yy + '-' +  mm  + '-' + dd;
}

//숫자 타입에서 쓸 수 있도록 format()함수 추가
Number.prototype.format = function() {
	if (this == 0) return 0;
	
	var reg = /(^[+-]?\d+)(\d{3})/;
	var n = (this + '');
	
	while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
	
	return n;
};

//문자열 타입에서 쓸 수 있도록 format() 함수 추가
String.prototype.format = function() {
	var num = parseFloat(this);
	if (isNaN(num)) return "0";
	
	return num.format();
};

function addComma(str) {
	str += '';
	x = str.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var reg = /(\d+)(\d{3})/;
	
	while (reg.test(x1)) {
		x1 = x1.replace(reg, '$1' + ',' + '$2');
	}
	
	return x1 + x2;
	
}

$(function() {
	$(".number_comma").keyup(function(){ $(this).val($(this).val().replace(/[^0-9:\,]/gi,"") );  }); //숫자만
	$(".number_2").keyup(function(){ $(this).val($(this).val().replace(/[^0-9:\.]/gi,"") );  }); //숫자 및 하이폰(-)
	$(".number_input").keyup(function(){ $(this).val($(this).val().replace(/[^0-9]/gi,"") );  }); //숫자만
	$(".datetime_input").keyup(function(){ $(this).val($(this).val().replace(/[^0-9:\-]/gi,"") );  }); //숫자 및 하이폰(-)
	$(".eng_input").keyup(function(){ $(this).val($(this).val().replace(/[^a-z0-9:\.\-_]/gi,'') );  }); //숫자, 하이폰(-), 영문, 언더바(_),한글(X)
	
	try {
		$("#vocFrame").bind('onload', function() {
			resizeFrame(document.getElementById("vodFrame"));
		});
		
	} catch(e) {}
});

function login(site, isSSLYn) {
	var linkUrl = '';
	
	if (site != '' && site !== undefined) {
		linkUrl = "/" + site + "/login.do?cid=2015052020340928369&menuId=2";
	} else {
		linkUrl = "/login.do?cid=2015052020340928369&menuId=2";	
	}
	
	if (isSSLYn !== undefined && isSSLYn == 'Y') {
		linkUrl = "https://" + document.domain + ":9448" + linkUrl;		
	}
	
	location.href = linkUrl;
}

function logout(site) {
	var linkUrl = "/logout.do";	
	if (site != '' && site !== undefined) {
		linkUrl = "/" + site + "/logout.do";
	} 
	
	location.href = "http://" + document.domain + linkUrl;	
}

function regist() {
	location.href = "/member/regist.do?cid=2015052020345845909&menuId=3";
}

function memModify(site, isSSLYn) {

	var linkUrl = '';
	
	if (site != '' && site !== undefined) {
		linkUrl = "/" + site + "/member/modify.do?cid=2016070518142627914&menuId=1150";
	} else {
		linkUrl = "/member/modify.do?cid=2016070518142627914&menuId=1150";	
	}
	
	if (isSSLYn !== undefined && isSSLYn == 'Y') {
		linkUrl = "https://" + document.domain + ":9448" + linkUrl;		
	}
	
	location.href = linkUrl;
}
function findId() {
	location.href = "/member/findId.do?cid=2015052020355419140&menuId=4";
}

function findPwd() {
	location.href = "/member/findPwd.do?cid=2015052020361935372&menuId=5";
}

function findIdPwd() {
	location.href = "/member/findIdPwd.do?";
}

function fnSatSave(menuId, bsIdx, idx) {
	var point = $('input:radio[name="evaluationCd"]:checked').val();
	
	if (point == undefined || point == '') {
		alert("만족도를 선택해 주십시오.");
		return;
	}
	
	var confirmYn = confirm("만족도 점수를 보내시겠습니까?");
	if(confirmYn == false){
		return;
	}


	$.ajax({
		type:'post',
		url: '/cmmn/ajax/insertSatisfy.do',
		async: true,
		cache: false,
		dataType: 'json',
		data: {
			menuId : menuId,
			bsIdx : bsIdx,
			idx : idx,
			point : point,
			content : $("#satisfyContent").val()
		},
		beforeSend: function() {
			$("#loading_layer").show();
		},
		success: function(json) {
			var msg = json.msg;
			alert(msg);
		},
		complete: function() {
			$("#loading_layer").hide();
		}
	});
}

function execDaumPostcode(zipCodeId, addr1Id, addr2Id) {
	  new daum.Postcode({
          oncomplete: function(data) {
              // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

              // 각 주소의 노출 규칙에 따라 주소를 조합한다.
              // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
              var fullAddr = ''; // 최종 주소 변수
              var extraAddr = ''; // 조합형 주소 변수

              // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
              if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                  fullAddr = data.roadAddress;

              } else { // 사용자가 지번 주소를 선택했을 경우(J)
                  fullAddr = data.jibunAddress;
              }

              // 사용자가 선택한 주소가 도로명 타입일때 조합한다.
              if(data.userSelectedType === 'R'){
                  //법정동명이 있을 경우 추가한다.
                  if(data.bname !== ''){
                      extraAddr += data.bname;
                  }
                  // 건물명이 있을 경우 추가한다.
                  if(data.buildingName !== ''){
                      extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                  }
                  // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
                  fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
              }

              //우편번호와 주소 정보를 해당 필드에 넣는다.
              document.getElementById(zipCodeId).value = data.zonecode; //5자리 새우편번호 사용
              document.getElementById(addr1Id).value = fullAddr;

              // 커서를 상세주소 필드로 이동한다.
              document.getElementById(addr2Id).focus();
          }
      }).open();
}

function resizeFrame(frm) {
	frm.style.height = "auto";
	contentHeight = frm.contentWindow.document.body.scrollHeight;
	frm.style.height = contentHeight + 40 + "px";
}