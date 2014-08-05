getUrlPara = function(paraName, sUrl) {
	    if (typeof(sUrl) == 'undefined') {
	        sUrl = document.location.href;
	    }
	    var urlRegex = new RegExp(paraName + "=[^&\?]*", "igm");
	    var para = sUrl.match(urlRegex);
	    if (!para) {
	        return "";
	    }
	    var v = para[0];
	    from = v.indexOf("=");
	    var paraValue = v.substr(from + 1, v.length);
	    while (paraValue.indexOf('<') >= 0) {
	        paraValue = paraValue.replace('<', '');
	    }
	    if (paraValue.indexOf("#") > 0) {
	        from = paraValue.indexOf("#");
	        paraValue = paraValue.substr(0, from);
	    }
	    paraValue.replace(/'/g, "").replace(/"/g, "")
	    return paraValue;
	}
