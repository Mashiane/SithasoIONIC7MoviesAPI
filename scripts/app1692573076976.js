var _banano_sithasoionicdemo03=new banano_sithasoionicdemo03();var _banano_sithasoionic7_sduishared=new banano_sithasoionic7_sduishared();var _banano_sithasoionicdemo03_pgindex=new banano_sithasoionicdemo03_pgindex();var _banano_sithasoionicdemo03_pgmovies=new banano_sithasoionicdemo03_pgmovies();
/* App */
function banano_sithasoionicdemo03_pgindex() {var _B;this.__2= new banano_sithasoionic7_ionicapp();this.__2be= new banano_sithasoionic7_shionheader();this.__2bf= new banano_sithasoionic7_shiontitle();this.__2c0= new banano_sithasoionic7_shiontoolbar();this.__2c1= new banano_sithasoionic7_shioncontent();this.__2c2= new banano_sithasoionic7_shionfooter();this.__2c3= new banano_sithasoionic7_shiontabs();this.__2c4= new banano_sithasoionic7_shiontabbar();this.__2c5= new banano_sithasoionic7_shionmenubutton();this.__2c6= new banano_sithasoionic7_shionbackbutton();this.__2c7= new banano_sithasoionic7_shionbuttons();this.__2c8= new banano_sithasoionic7_shionbuttons();this.initialize=function() {if (_B==null) _B=this;_B.__2.initialize(_B,"ios");this.applayout(_B.__2.__4);_B.__2.__1c=_B.__46b;_B.__2.__1d=_B.__46c;_B.__2be=_B.__463.__2be;_B.__2bf=_B.__463.__2bf;_B.__2c0=_B.__463.__2c0;_B.__2c1=_B.__463.__2c1;_B.__2c2=_B.__463.__2c2;_B.__2c3=_B.__463.__2c3;_B.__2c4=_B.__463.__2c4;_B.__2c5=_B.__463.__2c5;_B.__2c6=_B.__463.__2c6;_B.__2c7=_B.__463.__2c7;_B.__2c8=_B.__463.__2c8;_B.__2.__17=_B.__463.__17;_B.__463.setselectedtab("movies");_B.__469.settext("SithasoIONIC7 MoviesAPI");_B.addpages(_B);_B.adddraweritems(_B);_B.addpagetabs(_B);};this.applist_itemclick=async function(_e) {if (_B==null) _B=this;var __1b7,__649;_e.preventDefault();await _B.__466.close();__1b7=await _B.showpage(_e.target.id,_B);if (__1b7) { return ;}__649=_banano_sithasoionic7_sduishared.mvfield(_e.target.id,1,"_");switch ("" + __649) {case "" + "":break;}};this.addpages=function() {if (_B==null) _B=this;_banano_sithasoionicdemo03_pgmovies.initialize(_B.__2);};this.adddraweritems=function() {if (_B==null) _B=this;_B.__465.additempage(_banano_sithasoionicdemo03_pgmovies);};this.addpagetabs=function() {if (_B==null) _B=this;_B.__463.__2c4.additempage(_banano_sithasoionicdemo03_pgmovies);};this.showpage=async function(__47b) {if (_B==null) _B=this;var __480;__480=await _B.__2.showpage(_B.__463,__47b);return __480;};this.isauthenticated=function(_b) {if (_B==null) _B=this;_B.__466.setvisible(_b);if (_B.__463.gethastabs()) {_B.__463.__2c4.setvisible(_b);}if (_B.__463.gethasfooter()) {_B.__463.__2c2.setvisible(_b);}if (_B.__463.gethasheader()) {_B.__463.__2be.setvisible(_b);}};this.applayout=function(Par) {u(Par).empty();_B.__464=BANC( banano_sithasoionic7_shionsplitpane,_B, "appsplit", "appsplit",u(Par), {"Border": "","ContentId": "apppage","Disabled": false,"SideMaxWidth": "","SideMinWidth": "","SideWidth": "","Visible": true,"When": "lg","B4XLeft": 0,"B4XTop": 0,"B4XWidth": 600,"B4XHeight": 520,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_B.__466=BANC( banano_sithasoionic7_shionmenu,_B, "appmenu", "appmenu",u('#appsplit'), {"ContentId": "apppage","Disabled": false,"IsOpen": false,"MaxEdgeStart": "50","MenuId": "appmenu","Side": "start","SwipeGesture": false,"TypeOf": "none","Visible": true,"B4XLeft": 10,"B4XTop": 10,"B4XWidth": 230,"B4XHeight": 500,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_B.__463=BANC( banano_sithasoionic7_shionpage,_B, "apppage", "apppage",u('#appsplit'), {"BackButtonHref": "","BackButtonIcon": "","BackButtonText": "","ContentIonPadding": true,"ContentText": "","FooterTranslucent": false,"HasBackButton": false,"HasContent": true,"HasFooter": false,"HasHeader": false,"HasMenuButton": true,"HasTabBar": true,"HasTabs": true,"HeaderTranslucent": false,"IsPage": true,"MenuButtonAutoHide": false,"MenuButtonColor": "","MenuId": "appmenu","Mode": "ios","SelectedTab": "","TabBarColor": "none","TabBarPosition": "bottom","Title": "SithasoMoviesAPI","TitleColor": "none","ToolbarColor": "primary","TypeOf": "div","Visible": true,"B4XLeft": 250,"B4XTop": 10,"B4XWidth": 340,"B4XHeight": 500,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_B.__468=BANC( banano_sithasoionic7_shionheader,_B, "appmenuheader", "appmenuheader",u('#appmenu'), {"Collapse": "none","IonNoBorder": false,"Mode": "ios","Translucent": false,"Visible": true,"B4XLeft": 20,"B4XTop": 20,"B4XWidth": 210,"B4XHeight": 100,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_B.__46a=BANC( banano_sithasoionic7_shiontoolbar,_B, "appmenutoolbar", "appmenutoolbar",u('#appmenuheader'), {"Background": "","BorderColor": "","BorderStyle": "","BorderWidth": "","Color": "primary","MinHeight": "","Mode": "ios","Opacity": "","PaddingBottom": "","PaddingEnd": "","PaddingStart": "","PaddingTop": "","Slot": "","TextColor": "","Visible": true,"B4XLeft": 30,"B4XTop": 30,"B4XWidth": 190,"B4XHeight": 80,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_B.__469=BANC( banano_sithasoionic7_shiontitle,_B, "appmenutitle", "appmenutitle",u('#appmenutoolbar'), {"Color": "none","Size": "none","Text": "SithasoMoviesAPI","TextColor": "","Visible": true,"B4XLeft": 40,"B4XTop": 40,"B4XWidth": 170,"B4XHeight": 60,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_B.__467=BANC( banano_sithasoionic7_shioncontent,_B, "appmenucontent", "appmenucontent",u('#appmenu'), {"CenterContent": false,"Color": "none","ForceOverscroll": false,"Fullscreen": false,"IonPadding": false,"IonPage": false,"ScrollEvents": false,"ScrollX": false,"ScrollY": false,"Slot": "","Text": "","Visible": true,"B4XLeft": 20,"B4XTop": 150,"B4XWidth": 210,"B4XHeight": 350,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_B.__465=BANC( banano_sithasoionic7_shionlist,_B, "applist", "applist",u('#appmenucontent'), {"Inset": false,"Lines": "none","Mode": "ios","Slot": "","Visible": true,"B4XLeft": 30,"B4XTop": 160,"B4XWidth": 190,"B4XHeight": 330,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_B.__46b=BANC( banano_sithasoionic7_shiontoast,_B, "apptoast", "apptoast",u(Par), {"Animated": true,"Color": "none","CssClass": "","Duration": 0,"EnterAnimation": "","Header": "","Icon": "","IsOpen": false,"KeyboardClose": false,"Layout": "baseline","LeaveAnimation": "","Message": "","Mode": "ios","Position": "bottom","Translucent": false,"Trigger": "","Visible": true,"B4XLeft": 10,"B4XTop": 560,"B4XWidth": 90,"B4XHeight": 30,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_B.__46c=BANC( banano_sithasoionic7_shionloading,_B, "apploading", "apploading",u(Par), {"Animated": true,"BackdropDismiss": "","CssClass": "","Duration": "0","EnterAnimation": "","IsOpen": false,"KeyboardClose": true,"LeaveAnimation": "","Message": "","Mode": "ios","ShowBackdrop": true,"Spinner": "","Translucent": false,"Trigger": "","Visible": true,"WillDismiss": "","WillPresent": "","B4XLeft": 110,"B4XTop": 560,"B4XWidth": 100,"B4XHeight": 30,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});};}function banano_sithasoionicdemo03_pgmovies() {var _B;this.__19="movies";this.__1a="Movies";this.__1b="play-circle-outline";this.__2= new banano_sithasoionic7_ionicapp();this.__2be= new banano_sithasoionic7_shionheader();this.__2bf= new banano_sithasoionic7_shiontitle();this.__2c0= new banano_sithasoionic7_shiontoolbar();this.__2c1= new banano_sithasoionic7_shioncontent();this.__2c2= new banano_sithasoionic7_shionfooter();this.__2c3= new banano_sithasoionic7_shiontabs();this.__2c4= new banano_sithasoionic7_shiontabbar();this.__2c5= new banano_sithasoionic7_shionmenubutton();this.__2c6= new banano_sithasoionic7_shionbackbutton();this.__2c7= new banano_sithasoionic7_shionbuttons();this.__2c8= new banano_sithasoionic7_shionbuttons();this.initialize=function(__65f) {if (_B==null) _B=this;_B.__2=__65f;_B.__2.addpage(_B.__19,_B.__1a,_B.__1b);this.movieslayout(_B.__2.__17);_B.__2be=_B.__46d.__2be;_B.__2bf=_B.__46d.__2bf;_B.__2c0=_B.__46d.__2c0;_B.__2c1=_B.__46d.__2c1;_B.__2c2=_B.__46d.__2c2;_B.__2c5=_B.__46d.__2c5;_B.__2c6=_B.__46d.__2c6;_B.__2c7=_B.__46d.__2c7;_B.__2c8=_B.__46d.__2c8;_B.buildpage(_B);};this.show=function() {if (_B==null) _B=this;_banano_sithasoionicdemo03_pgindex.showpage(_B.__19);};this.getname=function() {if (_B==null) _B=this;return _B.__19;};this.geticon=function() {if (_B==null) _B=this;return _B.__1b;};this.gettitle=function() {if (_B==null) _B=this;return _B.__1a;};this.buildpage=function() {if (_B==null) _B=this;this.moviescontainer(_B.__2c1.gethere());};this.mounted=function() {if (_B==null) _B=this;};this.movieslayout=function(Par) {_B.__46d=BANC( banano_sithasoionic7_shiontab,_B, "movies", "movies",u(Par), {"BackButtonHref": "","BackButtonIcon": "","BackButtonText": "","CenterContent": false,"Component": "","ContentIonPadding": true,"ContentText": "","FooterTranslucent": false,"HasBackButton": true,"HasFooter": false,"HasHeader": true,"HasMenuButton": true,"HeaderTranslucent": false,"IsPage": true,"MenuButtonAutoHide": true,"MenuButtonColor": "","MenuId": "appmenu","Mode": "ios","Tab": "","Title": "Movies","TitleColor": "none","ToolbarColor": "primary","Visible": true,"B4XLeft": 0,"B4XTop": 0,"B4XWidth": 600,"B4XHeight": 600,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});};this.moviescontainer=function(Par) {u(Par).empty();_B.__696=BANC( banano_sithasoionic7_shionlist,_B, "movieslist", "movieslist",u(Par), {"Inset": false,"Lines": "full","Mode": "ios","Slot": "","Visible": true,"B4XLeft": 0,"B4XTop": 0,"B4XWidth": 600,"B4XHeight": 600,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});};}function banano_sithasoionicdemo03() {var _B;this.__46e="sithasoionic03";this.__46f="SithasoIONIC7";this.__470="C:\laragon\www";this.__471="0.01";this.__472="";this.banano_ready=function() {if (_B==null) _B=this;_banano_sithasoionicdemo03_pgindex.initialize();};}function banano_sithasoionic7_page() {var _B=this;_B.__19="";_B.__1a="";_B.__1b="";_B.initialize=function() {};}function banano_sithasoionic7_profiletype() {var _B=this;_B._id="";_B.__19="";_B.__1f=false;_B.__20="";_B.__21="";_B.__22="";_B.__23="";_B.__24=0;_B.initialize=function() {};}function banano_sithasoionic7_fileobject() {var _B=this;_B.__2a="";_B.__2b="";_B.__2c=0;_B.__2d="";_B.__2e="";_B.__2f="";_B.__30="";_B.__31=false;_B._fo=null;_B.initialize=function() {};}function banano_sithasoionic7_paginate() {var _B=this;_B.__34=0;_B.__35=0;_B.__36=0;_B.__37=[];_B.initialize=function() {};}function banano_sithasoionic7_storagequota() {var _B=this;_B.__39=0;_B.__3a=0;_B.__3b=0;_B.__3c=0;_B.initialize=function() {};}function banano_sithasoionic7_tabledescription() {var _B=this;_B.__3e="";_B.__3f="";_B.__40="";_B.__41=[];_B.__42=[];_B.__43=[];_B.__44=[];_B.__45=[];_B.__46=[];_B.__47=[];_B.__48=[];_B.__49=[];_B.initialize=function() {};}function banano_sithasoionic7_gridrow() {var _B=this;_B._rows=0;_B.__1cd=[];_B._gma="";_B._gmx="";_B._gmy="";_B._gmt="";_B._gmb="";_B._gmr="";_B._gml="";_B._gpa="";_B._gpx="";_B._gpy="";_B._gpt="";_B._gpb="";_B._gpr="";_B._gpl="";_B.initialize=function() {};}function banano_sithasoionic7_gridcolumn() {var _B=this;_B.__1cd=0;_B._gxs="";_B._gsm="";_B._gmd="";_B._glg="";_B._gxl="";_B._ofxs="";_B._ofsm="";_B._ofmd="";_B._oflg="";_B._ofxl="";_B._gma="";_B._gmx="";_B._gmy="";_B._gmt="";_B._gmb="";_B._gmr="";_B._gml="";_B._gpa="";_B._gpx="";_B._gpy="";_B._gpt="";_B._gpb="";_B._gpr="";_B._gpl="";_B.initialize=function() {};}window.addEventListener('online', function() {if (typeof _banano_sithasoionicdemo03['banano_online']==="function") {_banano_sithasoionicdemo03.banano_online();}});window.addEventListener('offline', function() {if (typeof _banano_sithasoionicdemo03['banano_offline']==="function") {_banano_sithasoionicdemo03.banano_offline();}});var BANversion=1692573082223;window.document.addEventListener("readystatechange", BANLoadChecker, true);function BANLoadChecker() {if (window.document.readyState=="complete") {_banano_sithasoionicdemo03.banano_ready();}}var hidden, visibilityChange;if (typeof document.hidden !== "undefined") {hidden = "hidden";visibilityChange = "visibilitychange";} else if (typeof document.msHidden !== "undefined") {hidden = "msHidden";visibilityChange = "msvisibilitychange";} else if (typeof document.webkitHidden !== "undefined") {hidden = "webkitHidden";visibilityChange = "webkitvisibilitychange";}function handleVisibilityChange() {if (document[hidden]) {if (typeof _banano_sithasoionicdemo03['banano_visibilitychanged']==="function") {_banano_sithasoionicdemo03.banano_visibilitychanged(false);}} else {if (typeof _banano_sithasoionicdemo03['banano_visibilitychanged']==="function") {_banano_sithasoionicdemo03.banano_visibilitychanged(true);}}};if (typeof document.addEventListener === "undefined" || hidden === undefined) {console.log("This requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");} else {document.addEventListener(visibilityChange, handleVisibilityChange, false);}window.addEventListener('resize', function(event) {if (typeof _banano_sithasoionicdemo03['banano_resized']==="function") {_banano_sithasoionicdemo03.banano_resized();}}, true);