// ==UserScript==
// @name         文字内容修改器-可以伪装成名人发微博等等
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.body.addEventListener("dblclick",modifyText);

    function modifyText(e){
        console.log(e.target);
        if(e.target.hasChildNodes("#text")){
                    if(e.target.childNodes[0].nodeName!="TEXTAREA"){
                        e.target.insertAdjacentHTML("afterBegin",`<textarea class="test1"></textarea>`);
                        document.getElementsByClassName("test1")[0].value=e.target.innerText;

                        document.getElementsByClassName("test1")[0].style.width=e.target.clientWidth+"px";
                        document.getElementsByClassName("test1")[0].style.height=e.target.clientHeight+"px";
                        document.getElementsByClassName("test1")[0].focus();
                        //e.target.innerText="";
                        document.getElementsByClassName("test1")[0].addEventListener("blur",function(e1){
                           console.log(e1.target);
                           e.target.innerText=e1.target.value;
                            //e1.target.remove();
                       });
                    }
           }
    }
})();
