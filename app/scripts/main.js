$(document).ready(function(){
   /* var w = $(window).width()+'x'+$(window).height();
    var d = $(document).width() + 'x' + $(document).height();
    alert('w:'+w+'\n'+'d:'+d);*/
    var bgWid = '',
        cHeight = $(window).height(),
        wid = cHeight * 640 / 1136;

    $("#year-index").find("img").width(wid);
    //$("#year-index").find("img").height($(window).height());
    $(".container").width(wid);
    $(".container").height($(window).height());
   
   
    bgWid =  wid/6.4;

    $("body").css('background-size',bgWid);

    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true
    })

   /* $("#year-index").find("img").eq(0).load(function(){
        var bgWid = '',
            wid = $("#year-index").find("img").eq(0).width();
        $(".container").width(wid);
        $(".container").height($(window).height());

       
        bgWid =  wid/6.4;

        $("body").css('background-size',bgWid);
        alert(0)
    });*/

    if($(window).height()<500){
        $("#year-home .image-show").css('margin', '3% auto 4%');
        $(".introduce").css('font-size', '14px');
       // $("#retry").css('font-size', '14px');

        $("#year-home .introduce h4").css('margin', '0 0 1% 5%');
        $("#year-home .image-show p").css('font-size', '14px');
        
        $("#img-detail .label-year").css('margin', '2% 0');
        $("#img-detail .text-infor").css('margin', '3% auto');
        //$("#img-detail table").css('margin-top', '17%');
        $("#img-detail table td").css('padding', '0.8% 0');

        $("#img-share .image-share").css('margin', '4% auto 3%');
        //$("#img-share .share-btn").css('padding', '0');
        $("#img-share .image-share span").css('font-size', '1em');
        //$("#img-detail b").css('top', '3%');
    }
    
    /*var bgWid = '',
        wid = $("#year-index").find("img").eq(0).width();
        $(".container").width(wid);
        $(".container").height($("#year-index").find("img").eq(0).height());
        
        bgWid =  wid/6.4;

        $("body").css('background-size',bgWid);*/
    /*$(".container").width($("#year-index").find("img").eq(0).width());
    $(".container").height($("#year-index").find("img").eq(0).height());*/
    var srcShow='',
        flag = true,
        imgData = '';

	$("#year-index").find(".show-index").eq(2).children("img").click(function(){
        var marginT = '';

        $("#year-index").hide();
		$("#year-home").show();
		marginT = $(".container").height() - $("#year-home").find(".image-show").height() - $("#year-home").find(".line-top").height()*2;
        $("#year-home").find(".image-show").css("margin-top",marginT / 2);
        
	});

	$("#year-home").find("li div").click(function(){
    	var Height = ($(this).parents("ul").height() - 24) / 3 ,
            marginLeft = '',
            Top = '',
            Width = '',
            //dis = '',
            //num = Math.floor(Math.random()*9),
    	    self = $(this),
            //imgWidth = self.width();
            //console.log(self.children("img").eq(1).width())
    	    imgSrc = self.children("img").eq(0).attr("src"),
    	    srcShow = self.children("img").eq(1).attr("src"),
            inputValue = self.children("input").val();
    	
        if(flag){
            flag = false;
            self.addClass("rotateZ");
            setTimeout(function(){
                self.children("img").eq(0).hide();
                marginLeft = self.width() - self.children("img").eq(1).width();
                self.children("img").eq(1).css("margin-left",marginLeft / 2);
                self.children("img").eq(1).show();
                
                //self.css('padding', '0');
                //self.children().css('height',Height);
            },1000);
        }
    	

        

	    setTimeout(function(){

			self.parents("#year-home").hide();
 			$("#img-detail").show();
	    	
            
            $("#img-detail").find(".introduce textarea").attr("placeholder",inputValue);
	    	$("#img-detail").find(".image-show .year-img").children("img").attr("src",srcShow);
            Top = $("#img-detail").find(".image-show").height() - $("#img-detail").find(".image-show .year-img").children("img").height();
            Width = Top + $("#img-detail").find(".image-show .year-img").children("img").width();
            $("#img-detail").find(".image-show .year-img").children("img").css("margin-top",Top / 2);
            $("#img-detail").find(".image-show .year-img").css({"width":Width,"margin-left":- Width/2});
            
            self.children("img").eq(0).show();
            self.children("img").eq(1).hide();
	    	self.removeClass("rotateZ");
            flag = true;
	    },2000);

    	$("#img-detail").find(".btn-sure button").click(function(){
            
            var text1 = '',
                text2 = '',
                text = ' ',
                qurl = URLSafeBase64Encode('http://nianwei.qiniu.io'),
                img = '/image/'+URLSafeBase64Encode(srcShow)+'/dissolve/100/gravity/NorthWest/dx/50/dy/55',
                ///
                bgurl = "http://7u2q8u.com1.z0.glb.clouddn.com/baidi03.png",
                
                url = bgurl+'?watermark/3',
                val = $("#img-detail").find(".introduce textarea").val();
               
                if($("#area").children("img").attr("src")){
                    
                   img = img +'/image/'+URLSafeBase64Encode($("#area").children("img").attr("src")+'?imageView2/1/w/120')+'/dissolve/100/gravity/NorthWest/dx/5/dy/5';
                }
                if($("#data").children("img").attr("src")){
                   img = img + '/image/'+URLSafeBase64Encode($("#data").children("img").attr("src"))+'/dissolve/100/gravity/SouthWest/dx/50/dy/105';
                }
                if($("#flavor").children("img").attr("src")){
                   img = img + '/image/'+URLSafeBase64Encode($("#flavor").children("img").attr("src")+'?imageView2/1/w/45/h/70')+'/dissolve/100/gravity/SouthEast/dx/30/dy/120';
                }
                
                if(!val){
                    val = $("#img-detail").find(".introduce textarea").attr("placeholder");
                } 
      
                text1 = URLSafeBase64Encode(val.substr(0,21));
                 
               if(val.length > 21){
                    text =  val.substr(21,30);
                }
                text2 = URLSafeBase64Encode(text);   

            if(val.length>30){
                $("#img-detail").find(".introduce .error").show();
            }
            else{

                
                $("#img-detail").hide();
                $("#img-detail").find(".icon").hide();
                $("#img-share").find(".image-show img").attr("src",url+img+'/text/'+text1+'/font/'+URLSafeBase64Encode('楷体')+'/fontsize/300/dissolve/100/gravity/SouthWest/dx/50/dy/68'+'/text/'+text2+'/font/'+URLSafeBase64Encode('楷体')+'/fontsize/300/dissolve/100/gravity/SouthWest/dx/50/dy/47'+'/text/'+qurl+'/font/'+URLSafeBase64Encode('楷体')+'/fill/'+URLSafeBase64Encode('#cccccc')+'/fontsize/280/dissolve/100/gravity/SouthEast/dx/50/dy/13');
                $("#img-share").show();

                var SHARE_TEXT = '＃我的年味日记＃除夕之夜，火车赶回家，爸妈在等我吃年夜饭，这就是我的年味儿，不论再晚，有人等你。2015.2.15-3.1七牛邀你玩转［我的年味日记］nianwei.qiniu.io，寻找年味儿。转发本微博便可抽取IPad以及全套年味日记春节贺卡（20套）。', 
                mainUrl =  $("#img-share").find(".image-show img").attr("src");

                $("#img-share").find(".image-share a").eq(1).attr("href",genWeiboShareLink(SHARE_TEXT, mainUrl));
            }
            
        });  
 
        $("#img-detail").find(".label-year button").click(function(){

            var self = $(this),
                marginTop  = '',
                right = '';

            $("#img-detail").find(".icon").hide();

            $("#bg-color").width($(".container").width());
            $("#bg-color").height($(window).height());
            $("#bg-color").show();
            self.siblings().css("z-index","19");
            self.css("z-index","21");

            $("#img-detail").find(".image-show .year-img").css("visibility","hidden");
            $("#img-detail").find(".detail-label").hide();
            $("#img-detail").find(".detail-label").eq(self.index()).show();
            
            marginTop = $("#img-detail").find(".image-show").height() - $("#img-detail").find(".detail-label").eq(self.index()).children("table").height();
            right =$("#img-detail").find(".image-show").width() - $("#img-detail").find(".detail-label").eq(self.index()).children("table").width();

            $("#img-detail").find(".detail-label").eq(self.index()).children("table").css("margin-top",marginTop / 2);
            
            $("#img-detail").find("b").show();
            $("#img-detail").find("b").css({"top":(marginTop - 70) / 2, "right": (right - 25) / 2});

            $("#img-detail").find(".detail-label").eq(self.index()).find("table td").click(function(){
                 
                //$("#img-detail").find(".icon").show();
                var dataFor = $(this).parents(".detail-label").data("for");
                
                $("#bg-color").hide();
                imgData = 'http://7u2q8u.com1.z0.glb.clouddn.com/' + $(this).data("for") + '.png';

               
                $(this).parents(".image-show").children(".detail-label").hide();
                $(this).parents(".detail-label").siblings("b").hide();
                 
                $("#img-detail").find(".image-show .year-img").css("visibility","visible");
    
                
                $("#"+dataFor).children('img').attr("src",imgData);

                $("#"+dataFor).show();
                if(dataFor == 'data'){
                    $("#img-detail .data-bg").css({"left":Top / 2,"bottom":Top / 8});
                }
                if(dataFor == 'flavor'){
                    $("#img-detail .flavor-bg").css({"right":Top / 4,"bottom":Top / 4});
                }

                for(var i = 0; i<3; i++){
                    if( $("#img-detail .icon").eq(i).children("img").attr("src")){
                        $("#img-detail .icon").eq(i).show();
                        $("#img-detail .icon").eq(i).click(function(){
                            $(this).children().attr("src","");
                            $(this).hide();
                            //console.log($(this))
                        })
                    }
                }
                
               
                
                
            });

            $("#img-detail .image-show").click(function(e){
                $("#bg-color").hide();
                $("#img-detail").find(".detail-label").hide();
                $("#img-detail").find("b").hide();
                $("#img-detail").find(".image-show .year-img").css("visibility","visible");

                for(var i = 0; i<3; i++){
                    if( $("#img-detail .icon").eq(i).children("img").attr("src")){
                        $("#img-detail .icon").eq(i).show();
                    }
                }
                
            });

            
            $("#bg-color").click(function(e){
                $("#bg-color").hide();
                $("#img-detail").find(".detail-label").hide();
                $("#img-detail").find("b").hide();
                $("#img-detail").find(".image-show .year-img").css("visibility","visible");

                for(var i = 0; i<3; i++){
                    if( $("#img-detail .icon").eq(i).children("img").attr("src")){
                        $("#img-detail .icon").eq(i).show();
                    }
                }
                    
            });

            $("#img-detail").find("b").click(function(){

                $(this).hide();
                $(this).siblings(".detail-label").hide();
                for(var i = 0; i<2; i++){
                    if( $("#img-detail .icon").eq(i).children("img").attr("src")){
                        $("#img-detail .icon").eq(i).show();
                    }
                }
                
               
            }); 


              
        });
    	
    });

       



   

	

	$("#img-share").find("#retry").click(function(){
        
        //$("#img-share").find(".image-show img").attr("src","");
		$("#img-share").hide();
        $("#img-detail").find(".introduce .error").hide();
        $("#img-detail").find(".introduce textarea").val('');
        $("#img-detail").find(".image-show .year-img").children("img").attr("src","");

		
		$("#year-home").show();

        $("#area").children("img").attr("src","");
        $("#flavor").children("img").attr("src","");

        $("#img-share").find(".image-show img").attr("src","http://7u2q8u.com1.z0.glb.clouddn.com/baidi03.png")

	});

        
 
    
})



var genWeiboShareLink = function(text, templUrl) {
    var ShareText = encodeURIComponent(text);
    var picUrl = encodeURIComponent(templUrl);
    var url = encodeURIComponent('http://ninwei.qiniu.io');
    return 'http://service.weibo.com/share/share.php?url=' + url + '&type=button&ralateUid=2651079901&language=zh_cn&appkey=3084908017&title=' + ShareText + '&pic=' + picUrl + '&searchPic=false&style=simple';
};

var utf8_encode = function(argString) {
    // http://kevin.vanzonneveld.net
    // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: sowberry
    // +    tweaked by: Jack
    // +   bugfixed by: Onno Marsman
    // +   improved by: Yves Sucaet
    // +   bugfixed by: Onno Marsman
    // +   bugfixed by: Ulrich
    // +   bugfixed by: Rafal Kukawski
    // +   improved by: kirilloid
    // +   bugfixed by: kirilloid
    // *     example 1: utf8_encode('Kevin van Zonneveld');
    // *     returns 1: 'Kevin van Zonneveld'

    if (argString === null || typeof argString === 'undefined') {
        return '';
    }

    var string = (argString + ''); // .replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    var utftext = '',
        start, end, stringl = 0;

    start = end = 0;
    stringl = string.length;
    for (var n = 0; n < stringl; n++) {
        var c1 = string.charCodeAt(n);
        var enc = null;

        if (c1 < 128) {
            end++;
        } else if (c1 > 127 && c1 < 2048) {
            enc = String.fromCharCode(
                (c1 >> 6) | 192, (c1 & 63) | 128
            );
        } else if (c1 & 0xF800 ^ 0xD800 > 0) {
            enc = String.fromCharCode(
                (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
            );
        } else { // surrogate pairs
            if (c1 & 0xFC00 ^ 0xD800 > 0) {
                throw new RangeError('Unmatched trail surrogate at ' + n);
            }
            var c2 = string.charCodeAt(++n);
            if (c2 & 0xFC00 ^ 0xDC00 > 0) {
                throw new RangeError('Unmatched lead surrogate at ' + (n - 1));
            }
            c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
            enc = String.fromCharCode(
                (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
            );
        }
        if (enc !== null) {
            if (end > start) {
                utftext += string.slice(start, end);
            }
            utftext += enc;
            start = end = n + 1;
        }
    }

    if (end > start) {
        utftext += string.slice(start, stringl);
    }

    return utftext;
};

var base64_encode = function(data) {
    // http://kevin.vanzonneveld.net
    // +   original by: Tyler Akins (http://rumkin.com)
    // +   improved by: Bayron Guevara
    // +   improved by: Thunder.m
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Pellentesque Malesuada
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: utf8_encode
    // *     example 1: base64_encode('Kevin van Zonneveld');
    // *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
    // mozilla has this native
    // - but breaks in 2.0.0.12!
    //if (typeof this.window['atob'] == 'function') {
    //    return atob(data);
    //}
    var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
        ac = 0,
        enc = '',
        tmp_arr = [];

    if (!data) {
        return data;
    }

    data = utf8_encode(data + '');

    do { // pack three octets into four hexets
        o1 = data.charCodeAt(i++);
        o2 = data.charCodeAt(i++);
        o3 = data.charCodeAt(i++);

        bits = o1 << 16 | o2 << 8 | o3;

        h1 = bits >> 18 & 0x3f;
        h2 = bits >> 12 & 0x3f;
        h3 = bits >> 6 & 0x3f;
        h4 = bits & 0x3f;

        // use hexets to index into b64, and append result to encoded string
        tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    } while (i < data.length);

    enc = tmp_arr.join('');

    switch (data.length % 3) {
        case 1:
            enc = enc.slice(0, -2) + '==';
            break;
        case 2:
            enc = enc.slice(0, -1) + '=';
            break;
    }

    return enc;
};

var URLSafeBase64Encode = function(v) {
    v = base64_encode(v);
    return v.replace(/\//g, '_').replace(/\+/g, '-');
};
