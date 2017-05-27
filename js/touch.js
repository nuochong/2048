// JavaScript Document
(function(){
 
    var LSwiperMaker = function(o){ 
 
        var that = this;
        this.config = o;
        this.control = false;
        this.sPos = {};
        this.mPos = {};
        this.dire;
 
        // this.config.bind.addEventListener('touchstart', function(){ return that.start(); } ,false);
        // 这样不对的，event对象只在事件发生的过程中才有效;
        this.config.bind.addEventListener('touchstart', function(e){ return that.start(e); } ,false);
        this.config.bind.addEventListener('touchmove', function(e){ return that.move(e); } ,false);
        this.config.bind.addEventListener('touchend', function(e){ return that.end(e); } ,false);
 
    }
 
    LSwiperMaker.prototype.start = function(e){
         
         var point = e.touches ? e.touches[0] : e;
         this.sPos.x = point.screenX;
         this.sPos.y = point.screenY;
         document.getElementById("start").innerHTML = "开始位置是:"+this.sPos.x +" "+ this.sPos.y ;
 
    }
    LSwiperMaker.prototype.move = function(e){  
 
        var point = e.touches ? e.touches[0] : e;
        this.control = true;
        this.mPos.x = point.screenX;
        this.mPos.y = point.screenY;
        document.getElementById("move").innerHTML = "您的位置是："+this.mPos.x +" "+ this.mPos.y ;
 
    }
 
    LSwiperMaker.prototype.end = function(e){
 
        this.config.dire_h  && (!this.control ? this.dire = null : this.mPos.x > this.sPos.x ? this.dire = 'R' : this.dire = 'L')
        this.config.dire_h  || (!this.control ? this.dire = null : this.mPos.y > this.sPos.y ? this.dire = 'D' : this.dire = 'U')
 
        this.control = false;
        this.config.backfn(this);
 
    }
 
    window.LSwiperMaker = LSwiperMaker;
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);// 禁止微信touchmove冲突
 
}())
 
var a = new LSwiperMaker({
        bind:document.getElementById("rect"),  // 绑定的DOM对象
        dire_h:true,     //true 判断左右， false 判断上下
        backfn:function(o){    //回调事件
             document.getElementById("dire").innerHTML = "向"+ o.dire + "滑";  
        }
})