
/* sithasoaxios */
function banano_sithasoaxios_sithasoaxios() {var _B=this;_B.__45f=null;_B.__460=null;_B.__3e8={};_B.__2f=0;_B._data={};_B.__3f2=[];_B.__3ea="";_B.__3e4={};_B.__461={};_B.__462={};_B.__463={};_B.__a4={};_B.__3e3=false;_B.initialize=function(__3e7) {_B.__45f=axios;_B.__3e8={};_B.__2f=404;_B._data={};_B.__3f2.length=0;_B.__3ea="";_B.__3e4={};_B.__461={};_B.__462={};_B.__463={};_B.__a4={};_B.__3e3=false;_B.setbaseurl(__3e7,_B);return _B;};_B.setbasicauthorization=function(__23,__693) {var __694,__695;__694=btoaUTF8("" + __23 + ":" + __693 + "");__695="Basic " + __694 + "";_B.addheader("Authorization",__695,_B);return _B;};_B.setcors=function(_b) {if (_b) {_B.setmode("cors",_B);} else {_B.setmode("no-cors",_B);}return _B;};_B.setorigin=function(__4bb) {_B.addheader("Origin",__4bb,_B);return _B;};_B.seturl=function(_url) {_B.__a4["url"]=_url;return _B;};_B.addheader=function(_prop,__4bb) {_B.__3e8[_prop]=__4bb;return _B;};_B.addparameter=function(_prop,__4bb) {_B.__463[_prop]=__4bb;return _B;};_B.addparameters=function(__696) {var _k,_v;var _kKeys = Object.keys(__696);for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {_k=_kKeys[_kindex];_v=__696[_k];_B.addparameter(_k,_v,_B);}return _B;};_B.addoption=function(_prop,__4bb) {_B.__a4[_prop]=__4bb;return _B;};_B.clearoptions=function() {_B.__a4={};return _B;};_B.clearparameters=function() {_B.__463={};return _B;};_B.clearheaders=function() {_B.__3e8={};return _B;};_B.cleardata=function() {_B._data={};return _B;};_B.adddata=function(_prop,__4bb) {_banano_sithasoionic7_sduishared.putrecursive(_B._data,_prop,__4bb);return _B;};_B.setdata=function(_m) {var _k,_v;var _kKeys = Object.keys(_m);for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {_k=_kKeys[_kindex];_v=_m[_k];_B.adddata(_k,_v,_B);}return _B;};_B.setaccesscontrolalloworigin=function(__4bb) {_B.addheader("Access-Control-Allow-Origin",__4bb,_B);return _B;};_B.setaccesscontrolallowcredentials=function(__4bb) {_B.addheader("Access-Control-Allow-Credentials",__4bb,_B);return _B;};_B.setaccesscontrolallowmethods=function(__4bb) {_B.addheader("Access-Control-Allow-Methods",__4bb,_B);return _B;};_B.setaccesscontrolallowheaders=function(__4bb) {_B.addheader("Access-Control-Allow-Headers",__4bb,_B);return _B;};_B.setcontenttype=function(__4bb) {_B.addheader("Content-Type",__4bb,_B);return _B;};_B.setcontenttypeapplicationjson=function() {_B.setcontenttype("application/json; charset=UTF-8",_B);return _B;};_B.setcontenttypeapplication_x_www_form_urlencoded=function() {_B.setcontenttype("application/x-www-form-urlencoded",_B);return _B;};_B.settimeout=function(__6a9) {_B.__a4["timeout"]=__6a9;return _B;};_B.get=function() {return _B.execute("get",_B);};_B.setresponsetype=function(__6aa) {_B.__a4["responseType"]=__6aa;return _B;};_B.setresponsetypestream=function() {_B.__a4["responseType"]="stream";return _B;};_B.setresponsetypearraybuffer=function() {_B.__a4["responseType"]="arraybuffer";return _B;};_B.setresponsetypejson=function() {_B.__a4["responseType"]="json";return _B;};_B.setresponsetypeblob=function() {_B.__a4["responseType"]="blob";return _B;};_B.setbaseurl=function(_url) {_B.__a4["baseURL"]=_url;return _B;};_B.setmode=function(_mode) {_B.__a4["mode"]=_mode;return _B;};_B.setmodenocors=function() {_B.__a4["mode"]="no-cors";return _B;};_B.execute=function(__495) {__495=__495.toUpperCase();_B.__a4["method"]=__495;if (Object.keys(_B.__3e8).length>0) {_B.__a4["headers"]=_B.__3e8;}if (Object.keys(_B._data).length>0) {_B.__a4["data"]=_B._data;}if (Object.keys(_B.__463).length>0) {_B.__a4["params"]=_B.__463;}_B.__460=_B.__45f(_B.__a4);return _B.__460;};_B.post=function() {return _B.execute("post",_B);};_B.put=function() {return _B.execute("put",_B);};_B.patch=function() {return _B.execute("patch",_B);};_B.delete=function() {return _B.execute("delete",_B);};_B.fromjson=function() {_B.__2f=_B.__3e4["status"];_B._data=_B.__3e4["data"];_B.__3ea=_B.__3e4["statusText"];if (_B.__3ea=="") {_B.__3ea=_B.getstatustext(_B.__2f,_B);}_B.__3e8=_B.__3e4["headers"];_B.__461=_B.__3e4["config"];_B.__462=_B.__3e4["request"];};_B.getwait=async function() {try {_B.__3e4=await _B.get(_B);_B.fromjson(_B);_B.__3e3=true;return _B._data;} catch(err) {_B.__3e3=false;return {};}};_B.getallwait=async function() {try {_B.__3e4=await _B.get(_B);_B.fromjson(_B);return _B._data;} catch(err) {return null;}};_B.readwait=async function() {try {_B.__3e4=await _B.get(_B);_B.fromjson(_B);return _B._data;} catch(err) {return {};}};_B.readallwait=async function() {try {_B.__3e4=await _B.get(_B);_B.fromjson(_B);return _B._data;} catch(err) {return null;}};_B.createwait=async function() {try {_B.__3e4=await _B.post(_B);_B.fromjson(_B);return _B.__2f;} catch(err) {return "";}};_B.postwait=async function() {try {_B.__3e4=await _B.post(_B);_B.fromjson(_B);return _B.__2f;} catch(err) {return "";}};_B.updatewait=async function() {try {_B.__3e4=await _B.put(_B);_B.fromjson(_B);return _B.__2f;} catch(err) {return "";}};_B.putwait=async function() {try {_B.__3e4=await _B.put(_B);_B.fromjson(_B);return _B.__2f;} catch(err) {return "";}};_B.deletewait=async function() {try {_B.__3e4=await _B.delete(_B);_B.fromjson(_B);return _B.__2f;} catch(err) {return "";}};_B.patchwait=async function() {try {_B.__3e4=await _B.patch(_B);_B.fromjson(_B);return _B.__2f;} catch(err) {return "";}};_B.tolist=function() {var _bo;_bo=_B.__3e4;return _bo;};_B.setresponseencoding=function(_re) {_B.__a4["responseEncoding"]=_re;return _B;};_B.onuploadprogress=function(__482,__495) {var __6ac,_cb;__495=__495.toLowerCase();__6ac={};_cb=function(__6ac) {if (typeof __482[(__495).toLowerCase()]==="function") {return __482[(__495).toLowerCase()](__6ac,_B)};};_B.__a4["onUploadProgress"]=_cb;};_B.ondownloadprogress=function(__482,__495) {var __6ac,_cb;__495=__495.toLowerCase();__6ac={};_cb=function(__6ac) {if (typeof __482[(__495).toLowerCase()]==="function") {return __482[(__495).toLowerCase()](__6ac,_B)};};_B.__a4["onDownloadProgress"]=_cb;};_B.setmaxcontentlength=function(_ml) {_B.__a4["maxContentLength"]=_ml;return _B;};_B.setmaxbodylength=function(_mbl) {_B.__a4["maxBodyLength"]=_mbl;return _B;};_B.setdecompress=function(_b) {_B.__a4["decompress"]=_b;return _B;};_B.setcredentials=function(_s) {_B.__a4["credentials"]=_s;return _B;};_B.getstatustext=function(__6af) {switch ("" + __6af) {case "" + "100":return "Continue";case "" + "101":return "Switching Protocols";case "" + "102":return "Processing";case "" + "103":return "Early Hints";case "" + "200":return "OK";case "" + "201":return "Created";case "" + "202":return "Accepted";case "" + "203":return "Non-Authoritative Information";case "" + "204":return "No Content";case "" + "205":return "Reset Content";case "" + "206":return "Partial Content";case "" + "207":return "Multi-Status";case "" + "208":return "Already Reported";case "" + "226":return "IM Used";case "" + "300":return "Multiple Choices";case "" + "301":return "Moved Permanently";case "" + "302":return "Found";case "" + "303":return "See Other";case "" + "304":return "Not Modified";case "" + "305":return "Use Proxy";case "" + "306":return "Switch Proxy";case "" + "307":return "Temporary Redirect";case "" + "308":return "Permanent Redirect";case "" + "400":return "Bad Request";case "" + "401":return "Unauthorized";case "" + "403":return "Forbidden";case "" + "404":return "Not Found";case "" + "405":return "Method Not Allowed";case "" + "406":return "Not Acceptable";case "" + "407":return "Proxy Authentication Required";case "" + "408":return "Request Timeout";case "" + "409":return "Conflict";case "" + "410":return "Gone";case "" + "411":return "Length Required";case "" + "412":return "Precondition Failed";case "" + "413":return "Payload Too Large";case "" + "414":return "URI Too Long";case "" + "415":return "Unsupported Media Type";case "" + "416":return "Range Not Satisfiable";case "" + "417":return "Expectation Failed";case "" + "418":return "I'm a teapot";case "" + "421":return "Misdirected Request";case "" + "422":return "Unprocessable Entity";case "" + "423":return "Locked";case "" + "424":return "Failed Dependency";case "" + "425":return "Too Early";case "" + "426":return "Upgrade Required";case "" + "428":return "Precondition Required";case "" + "429":return "Too Many Requests";case "" + "431":return "Request Header Fields Too Large";case "" + "451":return "Unavailable For Legal Reasons";case "" + "500":return "Internal Server Error";case "" + "501":return "Not Implemented";case "" + "502":return "Bad Gateway";case "" + "503":return "Service Unavailable";case "" + "504":return "Gateway Timeout";case "" + "505":return "HTTP Version Not Supported";case "" + "506":return "Variant Also Negotiates";case "" + "507":return "Insufficient Storage";case "" + "508":return "Loop Detected";case "" + "510":return "Not Extended";case "" + "511":return "Network Authentication Required";default:return "";}};}