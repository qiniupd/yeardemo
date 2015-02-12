var Q = window.Q || {};
Q.wHeight = $(window).height();
Q.wWidth = Q.wHeight * 637 / 1134;
Q.text = function(str, font, size, color,direction, dx, dy) {
    var t = URLSafeBase64Encode(str),
        f = URLSafeBase64Encode(font),
        c = URLSafeBase64Encode(color);

    return '/text/'+t+'/font/'+f+'/fontsize/'+size+'/fill/'+c+'/gravity/'+direction+'/dx/'+dx+'/dy/'+dy;
};

Q.img = function(url, direction, dx, dy) {
    var u = URLSafeBase64Encode(url);

    return '/image/'+u+'/gravity/'+direction+'/dx/'+dx+'/dy/'+dy;
};
Q.small = function(url, w, h) {
    return url+'?imageView2/1'+'/w/'+w+'/h/'+h;
};

$(document).ready(function(){
   
    var bgWid = Q.wHeight/11.34,
        srcShow = '',
        index = '',
        flag = true,
        imgData = '';
       
    $("#year-index").find("img").width(Q.wWidth);
    $(".container").width(Q.wWidth);
    $("body").height($(window).height());    
    $("body").css('background-size',bgWid);
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true
    });


    if($(window).height()<500){
        $("#year-home .image-show").css('margin', '3% auto 4%');
        $(".introduce").css('font-size', '14px');

        $("#year-home .introduce h4").css('margin', '0 0 1% 5%');
        $("#year-home .image-show p").css('font-size', '14px');
        
        $("#img-detail .label-year").css('margin', '2% 0');
        $("#img-detail .label-year button").css('margin', '0 1%');
        $("#img-detail .text-infor").css('margin', '3% auto');

        $("#img-detail table td").css('padding', '0.8% 0');

        $("#img-share .image-share").css('margin-top', '3%');
        $("#img-share .image-share").find("img").css('width', '25px');

        $("#img-share .image-share span").css('font-size', '1em');
    }
        

	$("#year-index").find(".show-index").eq(2).children("img").click(function(){
        var marginT = '';

        $("#year-index").hide();
		$("#year-home").show();

		marginT = $(".container").height() - $("#year-home").find(".image-show").height() - $("#year-home").find(".line-top").height() * 2;
        $("#year-home").find(".image-show").css("margin-top",marginT / 2);
        
	});


	$("#year-home").find("li div").click(function(){
    	var marginLeft = '',
    	    self = $(this),
            inputValue = self.children("input").val();
    	srcShow = $(this).children("img").eq(1).attr("src");
        index = $(this).parent().index();
        if(flag){
            flag = false;
            self.addClass("rotateZ");
            setTimeout(function(){
                self.children("img").eq(0).hide();
                self.children("img").eq(1).show();
                marginLeft = self.width() - self.children("img").eq(1).width();
                self.children("img").eq(1).css("margin-left",marginLeft / 2);                
              
            },1000);

        }
	    setTimeout(function(){

			self.parents("#year-home").hide();
 			$("#img-detail").show();
	    	
            
            $("#img-detail").find(".introduce textarea").attr("placeholder",inputValue);
	    	$("#img-detail").find(".image-show .year-img").children("img").attr("src",srcShow);

            self.children("img").eq(0).show();
            self.children("img").eq(1).hide();
	    	self.removeClass("rotateZ");
            flag = true;
	    },2000);
    	
    });
    
    $("#img-detail").find(".label-year button").click(function(){

        var self = $(this),
            marginTop  = '';

        /*$("#img-detail").find(".icon").hide();*/

        $("#bg-color").width($(".container").width());
        $("#bg-color").height($(window).height());
        $("#bg-color").show();
        self.siblings().css("z-index","19");
        self.css("z-index","21");

        $("#img-detail").find(".image-show .year-img").css("visibility","hidden");
        $("#img-detail").find(".detail-label").hide();
        $("#img-detail").find(".detail-label").eq(self.index()).show();
        
        marginTop = $("#img-detail").find(".image-show").height() - $("#img-detail").find(".detail-label").eq(self.index()).children("table").height();
        
        $("#img-detail").find(".detail-label").eq(self.index()).children("table").css("margin-top",marginTop / 2);
        
        $("#img-detail").find("b").show();
        $("#img-detail").find("b").css("top",(marginTop - 70) / 2);
          
    });

    $("#img-detail .detail-label").find("table td").click(function(){
                 
                //$("#img-detail").find(".icon").show();
        var dataFor = $(this).parents(".detail-label").data("for"),
            imgData = 'http://7u2q8u.com1.z0.glb.clouddn.com/' + $(this).data("for") + '.png';
        
        $("#bg-color").hide();



        $(this).parents(".image-show").children(".detail-label").hide();
        $(this).parents(".detail-label").siblings("b").hide();
         
        $("#img-detail").find(".image-show .year-img").css("visibility","visible");

        
        $("#"+dataFor).children('img').attr("src",imgData);

        $("#"+dataFor).show();
        
    });

    var daluft = ['http://7u2q8u.com1.z0.glb.clouddn.com/hu.png','http://7u2q8u.com1.z0.glb.clouddn.com/sanshi.png','http://7u2q8u.com1.z0.glb.clouddn.com/xingfu.png'];
       
        $("#img-detail").find(".icon").click(function(){
            $(this).children().attr("src",daluft[$(this).index()]);
            $(this).hide();
    })
           
    $("#img-detail .image-show").click(function(){
        $("#bg-color").hide();
        $("#img-detail").find(".detail-label").hide();
        $("#img-detail").find("b").hide();
        $("#img-detail").find(".image-show .year-img").css("visibility","visible");

       /* for(var i = 0; i<3; i++){
            if( $("#img-detail .icon").eq(i).css("display","block")){
                $("#img-detail .icon").eq(i).show();
            }
        }*/
        
    });

    
    $("#bg-color").click(function(){
        $("#bg-color").hide();
        $("#img-detail").find(".detail-label").hide();
        $("#img-detail").find("b").hide();
        $("#img-detail").find(".image-show .year-img").css("visibility","visible");

        /*for(var i = 0; i<3; i++){
            if( $("#img-detail .icon").eq(i).children("img").attr("src")){
                $("#img-detail .icon").eq(i).show();
            }
        }*/
            
    });

    $("#img-detail").find("b").click(function(){

        $(this).hide();
        $(this).siblings(".detail-label").hide();
        /*for(var i = 0; i<2; i++){
            if( $("#img-detail .icon").eq(i).children("img").attr("src")){
                $("#img-detail .icon").eq(i).show();
            }
        }*/
        
       
    }); 

       
    $("#img-detail").find(".btn-sure button").click(function(){
            
        var text = ' ',            
            qurl = 'http://nianwei.qiniu.io',
            img = '',
            bgurl = "http://7u2q8u.com1.z0.glb.clouddn.com/baidi03.png?watermark/3",                
            url = '',
            val = $("#img-detail").find(".introduce textarea").val();

        if(!val){
            val = $("#img-detail").find(".introduce textarea").attr("placeholder");
        } 
         
        if(val.length > 21){
            text =  val.substr(21,40);
        } 

        img = Q.img(srcShow,'NorthWest', 50, 55) +Q.img(Q.small($("#area").children("img").attr("src"),120,120),'NorthWest', 5, 5) +Q.img($("#data").children("img").attr("src"),'SouthWest', 50, 105)+Q.img(Q.small($("#flavor").children("img").attr("src"),45,70),'SouthEast', 30, 120);
        url = bgurl+img+Q.text(val.substr(0,21), '楷体', 300, 'black','SouthWest', 50, 68)+Q.text(text, '楷体', 300, 'black','SouthWest', 50, 47)+Q.text(qurl, '楷体', 280, '#cccccc','SouthEast', 50, 13);  
        
        if(val.length>40){
            $("#img-detail").find(".introduce .error").show();
        }
        else{
           
            $("#img-share").find(".image-show img").hide().attr("src",url);
            $("#img-detail").hide();
            $("#img-detail").find(".icon").hide();
            $("#img-share").show();
            $("#img-share").find(".image-show p").css("height",$(".container").height() * 0.8);


            var TEXT = [
            '＃我的年味日记＃＃大年初五＃年初五，迎财神，谁家的鞭炮最响，财神爷就会到谁家。我在http://nianwei.qiniu.io 记录下了我的年味儿！你的年味是怎样呢？快来定制［我的年味日记］吧！参与活动还可抽取IPad和全套年味日记春节贺卡。',
            '＃我的年味日记＃＃大年初一＃小时候最惦记的是，大年初一，穿上新衣服，美美的。我在http://nianwei.qiniu.io 记录下了我的年味儿！你的年味是怎样呢？快来定制［我的年味日记］吧！参与活动还可抽取IPad和全套年味日记春节贺卡。',
            '＃我的年味日记＃＃大年三十＃小时候过年，妈妈把饺子摆成圆形，说象征一家人团团圆圆。我在http://nianwei.qiniu.io 记录下了我的年味儿！你的年味是怎样呢？快来定制［我的年味日记］吧！参与活动还可抽取IPad和全套年味日记春节贺卡。',
            '＃我的年味日记＃＃大年初一＃小时候拜年串门，叔叔阿姨都说我嘴甜，然后塞给我一个大红包。我在http://nianwei.qiniu.io 记录下了我的年味儿！你的年味是怎样呢？快来定制［我的年味日记］吧！参与活动还可抽取IPad和全套年味日记春节贺卡。',
            '＃我的年味日记＃＃大年三十＃无论相隔多远，工作多忙，我都要回家吃年夜饭，爸妈在等我。我在http://nianwei.qiniu.io 记录下了我的年味儿！你的年味是怎样呢？快来定制［我的年味日记］吧！参与活动还可抽取IPad和全套年味日记春节贺卡。',
            '＃我的年味日记＃＃大年三十＃剪纸窗花，大红色，有十二生肖，有福，一个个栩栩如生。我在http://nianwei.qiniu.io 记录下了我的年味儿！你的年味是怎样呢？快来定制［我的年味日记］吧！参与活动还可抽取IPad和全套年味日记春节贺卡。',
            '＃我的年味日记＃＃正月十五＃逛庙会，看舞龙舞狮，锣鼓声天，过年就是这么热闹。我在http://nianwei.qiniu.io 记录下了我的年味儿！你的年味是怎样呢？快来定制［我的年味日记］吧！参与活动还可抽取IPad和全套年味日记春节贺卡。',
            '＃我的年味日记＃＃大年三十＃小时候过年，爸爸贴春联，我帮他拿浆糊。上联下联，承载着美好。我在http://nianwei.qiniu.io 记录下了我的年味儿！你的年味是怎样呢？快来定制［我的年味日记］吧！参与活动还可抽取IPad和全套年味日记春节贺卡。',
            '＃我的年味日记＃＃大年三十＃老妈，过去长辈给我的压岁钱你说先帮我收着，现在，可以还我么？我在http://nianwei.qiniu.io 记录下了我的年味儿！你的年味是怎样呢？快来定制［我的年味日记］吧！参与活动还可抽取IPad和全套年味日记春节贺卡。'], 
                mainUrl =  $("#img-share").find(".image-show img").attr("src"),
                SHARE_TEXT = TEXT[index];

            $("#img-share").find(".image-share a").eq(1).attr("href",genWeiboShareLink(SHARE_TEXT, mainUrl));
        }
        
    }); 

    

    $("#img-share").find(".image-show img").load(function(){
        $("#img-share").find(".image-show p").hide();
        $("#img-share").find(".image-show img").show();
    });
   
	$("#img-share").find("#retry").click(function(){
        
        $("#img-share").find(".image-show img").attr("src","");
        $("#img-share").find(".image-show").children("p").show();
        
		$("#img-share").hide();
        
        $("#img-detail").find(".introduce .error").hide();
        $("#img-detail").find(".introduce textarea").val('');
        $("#img-detail").find(".image-show .year-img").children("img").attr("src","");

		
		$("#year-home").show();

        $("#area").children("img").attr("src","http://7u2q8u.com1.z0.glb.clouddn.com/hu.png");
        $("#data").children("img").attr("src","http://7u2q8u.com1.z0.glb.clouddn.com/sanshi.png");
        $("#flavor").children("img").attr("src","http://7u2q8u.com1.z0.glb.clouddn.com/xingfu.png");


	});
   
})


var genWeiboShareLink = function(text, templUrl) {
    var ShareText = encodeURIComponent(text);
    var picUrl = encodeURIComponent(templUrl);
    var url = encodeURIComponent('http://ninwei.qiniu.io');
    return 'http://service.weibo.com/share/share.php?&type=button&ralateUid=2651079901&language=zh_cn&appkey=3084908017&title=' + ShareText + '&pic=' + picUrl + '&searchPic=false&style=simple';
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
