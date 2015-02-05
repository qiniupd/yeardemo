$(document).ready(function(){
   /* var w = $(window).width()+'x'+$(window).height();
    var d = $(document).width() + 'x' + $(document).height();
    alert('w:'+w+'\n'+'d:'+d);*/
    /*$("#year-index").find("img").eq(0).load(function(){
        var bgWid = '',
            wid = $("#year-index").find("img").eq(0).width();
        $(".container").width(wid);
        $(".container").height($("#year-index").find("img").eq(0).height());

       
        bgWid =  wid/6.4;

        $("body").css('background-size',bgWid);
        alert(0)
    });*/

    if($(window).height()<500){
        $("#year-home .image-show").css('margin', '3% auto 4%');
        $(".introduce").css('font-size', '14px');
        $(".share-btn").css('font-size', '14px');

        $("#year-home .introduce h4").css('margin', '0 0 1% 5%');
        $("#year-home .introduce p").css('margin', '0 0 0.5% 5%');
        
        $("#img-detail .label-year").css('margin', '2% 0');
        //$("#img-detail table").css('margin-top', '17%');
        $("#img-detail table td").css('padding', '0.8% 0');
        $("#img-detail b").css('top', '3%');
    }
    
    var bgWid = '',
        wid = $("#year-index").find("img").eq(0).width();
        $(".container").width(wid);
        $(".container").height($("#year-index").find("img").eq(0).height());
        
        bgWid =  wid/6.4;

        $("body").css('background-size',bgWid);
    /*$(".container").width($("#year-index").find("img").eq(0).width());
    $(".container").height($("#year-index").find("img").eq(0).height());*/
    var srcShow='',
        imgData = '';

	$("#year-index").find(".show-index").eq(2).children("img").click(function(){

		/* var bgWid = '',
            wid = $("#year-index").find("img").eq(0).width();
        $(".container").width(wid);
        $(".container").height($("#year-index").find("img").eq(0).height());

       
        bgWid =  wid/6.4;

        $("body").css('background-size',bgWid);*/
        $("#year-index").hide();
		$("#year-home").show();
		
        
        /*var heightT = $(window).height(),
            tableHeight = $("body").height(),
            dis = heightT - tableHeight;

        $(".container").css("margin-top",dis/2+'px');*/
	});

	$("#year-home").find("li").click(function(){
    	var imgHeight = '',
            dis = '',
            num = Math.floor(Math.random()*9),
    	    self = $(this),
    	    imgSrc = self.children().attr("src"),
    	    srcShow = $("#img-detail").find(".image-show").children("img").eq(num).attr("src"),
            inputValue = $("#img-detail").find(".introduce input").eq(num).val();;
    	
    	self.addClass("rotateZ");


        setTimeout(function(){
			self.children().attr("src",$("#img-detail").find(".image-show").children("img").eq(num).attr("src"));
	    },800);

	    setTimeout(function(){

			self.parents("#year-home").hide();
 			$("#img-detail").show();
	    	$("#img-detail").find(".image-show").children("img").hide();
            $("#img-detail").find(".introduce textarea").attr("placeholder",inputValue);
	    	$("#img-detail").find(".image-show").children("img").eq(num).show();
            
            imgHeight = $("#img-detail").find(".image-show").children("img").eq(num).height(),
            dis = $(".container").height() * 0.5 - imgHeight;
            $("#img-detail").find(".image-show").children("img").eq(num).css("margin-top",dis/2);

	    	self.children().attr("src",imgSrc);
	    	self.removeClass("rotateZ");
	    },2000);

    	$("#img-detail").find(".btn-sure button").click(function(){
            
            var text1 = '',
                text2 = '',
                text = ' ',
                img = '',
                
                url = srcShow+'?watermark/3',
                val = $("#img-detail").find(".introduce textarea").val();
                
                if($("#area").children("img").attr("src")){
                    
                   img = img +'/image/'+URLSafeBase64Encode($("#area").children("img").attr("src")+'?imageView2/1/w/120')+'/dissolve/100/gravity/NorthWest/dx/0/dy/0';
                }
                if($("#flavor").children("img").attr("src")){
                   img = img + '/image/'+URLSafeBase64Encode($("#flavor").children("img").attr("src")+'?imageView2/1/w/45/h/70')+'/dissolve/100/gravity/SouthEast/dx/10/dy/10';
                }
                
                if(!val){
                    val = $("#img-detail").find(".introduce textarea").attr("placeholder");
                } 
      
                text1 = URLSafeBase64Encode(val.substr(0,15));
                 
               if(val.length > 15){
                    text =  val.substr(15,30);
                }
                text2 = URLSafeBase64Encode(text);   

            if(val.length>30){
                $("#img-detail").find(".introduce .error").show();
            }
            else{


                $("#img-detail").hide();
                $("#img-detail").find(".icon").hide();
                $("#img-share").find(".image-show img").attr("src",url+img+'/text/'+text1+'/fontsize/450/dissolve/80/gravity/SouthWest/dx/30/dy/55'+'/text/'+text2+'/fontsize/450/dissolve/80/gravity/SouthWest/dx/30/dy/20');
                $("#img-share").show();
            }
            
        });  
 
        $("#img-detail").find(".label-year button").click(function(){

            var self = $(this);

            $("#img-detail").find(".icon").hide();

            $("#bg-color").width($(".container").width());
            $("#bg-color").height($(window).height());
            $("#bg-color").show();
            self.siblings().css("z-index","19");
            self.css("z-index","21");

            $("#img-detail").find(".image-show").children("img").css("visibility","hidden");
            $("#img-detail").find(".detail-label").hide();
            $("#img-detail").find(".detail-label").eq(self.index()).show();

            
            
            $("#img-detail").find("b").show();

            $("#img-detail").find(".detail-label").eq(self.index()).find("table td").click(function(){
                 
                //$("#img-detail").find(".icon").show();
                var dataFor = $(this).parents(".detail-label").data("for");
                
                $("#bg-color").hide();
                imgData = 'http://7u2q8u.com1.z0.glb.clouddn.com/' + $(this).data("for") + '.png';

                $(this).parents(".detail-label").siblings(".detail-label").hide();
                $(this).parents(".detail-label").hide();
                $(this).parents(".detail-label").siblings("b").hide();
                 
                $("#img-detail").find(".image-show").children("img").css("visibility","visible");
                /*$("#"+dataFor).css("background-position","-"+bgX+"px -"+bgY+"px");*/
                
                $("#"+dataFor).children('img').attr("src",imgData);

                if( $("#"+dataFor).siblings(".icon").children("img").attr("src")){
                    $("#img-detail").find(".icon").show();
                }
                else{
                    $("#"+dataFor).show();
                }
                

               
                if(dataFor == 'flavor'){
                   
                    $("#"+dataFor).css("bottom",(dis + 70)/2);

                }
                else{
                     $("#"+dataFor).css("top",dis/2);
                }
                
            });

            $(document).click(function(e){
                if(e.target.className != 'btn' && e.target.className != 'btn flavor-btn'){
                   //alert(123)
                    $("#bg-color").hide();
                    $("#img-detail").find(".detail-label").hide();
                    $("#img-detail").find("b").hide();
                    $("#img-detail").find(".image-show").children("img").css("visibility","visible");
                    
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

       



   

	

	$("#img-share").find(".share-btn button").eq(1).click(function(){
        
        $("#img-share").find(".image-show img").attr("src","");
		$("#img-share").hide();
        $("#img-detail").find(".introduce .error").hide();
        $("#img-detail").find(".introduce textarea").val('');
		
		$("#year-home").show();

        $("#area").children("img").attr("src","");
        $("#flavor").children("img").attr("src","");
	});
   
    
})


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
