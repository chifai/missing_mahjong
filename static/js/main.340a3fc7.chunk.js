(this.webpackJsonpmissing_mahjong=this.webpackJsonpmissing_mahjong||[]).push([[0],{13:function(n,e,t){},14:function(n,e,t){},15:function(n,e,t){"use strict";t.r(e);var i=t(0),s=t(1),r=t.n(s),u=t(5),o=t.n(u),c=(t(13),t(2)),h=t(3),a=t(7),l=t(6),j=(t(14),t.p+"static/media/logo.6ce24c58.svg"),d=Object(i.jsx)("h3",{children:" \u9078\u64c7\u4f60\u7684\u624b\u724c "}),p=Object(i.jsx)("img",{src:j,className:"App-logo",alt:"logo"}),g=Object(i.jsx)("a",{className:"App-link",href:"https://github.com/chifai",target:"_blank",rel:"noopener noreferrer",children:"click here"}),f=function(){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;Object(c.a)(this,n),this.grouped=e.slice(),this.ungrouped=t.slice(),this.pairNum=i}return Object(h.a)(n,[{key:"isDone",value:function(){return 0===this.ungrouped.length}},{key:"getGrouped",value:function(){return this.grouped.slice()}},{key:"groupPair",value:function(){if(1===this.pairNum)return-1;var n=this.ungrouped[0];return n===this.ungrouped[1]?(this.grouped.push([n,n]),this.ungrouped.splice(0,2),this.pairNum=1,1):0}},{key:"groupThreeAKind",value:function(){var n=this.ungrouped[0];return n===this.ungrouped[1]&&n===this.ungrouped[2]&&(this.grouped.push([n,n,n]),this.ungrouped.splice(0,3),!0)}},{key:"groupContThree",value:function(){var n=this.ungrouped[0];if(0===n)return!1;var e=this.ungrouped.findIndex((function(e){return e===n+1})),t=this.ungrouped.findIndex((function(e){return e===n+2}));return-1!==e&&-1!==t&&(this.ungrouped.shift(),this.ungrouped.splice(e-1,1),this.ungrouped.splice(t-2,1),this.grouped.push([n,n+1,n+2]),!0)}},{key:"copy",value:function(n){n.ungrouped=this.ungrouped.slice(),n.grouped=this.grouped.slice(),n.pairNum=this.pairNum}}]),n}(),M=function(){function n(){Object(c.a)(this,n),this.MjInHandNum=Array(9).fill(0),this.MjInHand=[],this.TotalMjNum=0}return Object(h.a)(n,[{key:"calMissingMahjong",value:function(){return console.log("Start cal with no pairs"),this.MjInHand.length%3===1?[{numToDitch:-1,MjGroup:this.tryMissingMj(this.MjInHand,0).slice()}]:this.MjInHand.length%3===2?this.tryDitchMj(this.MjInHand,0):[]}},{key:"tryDitchMj",value:function(n,e){if(null!==this.formMjGroups(n,e))return console.log("win"),[{numToDitch:0,MjGroup:[]}];for(var t=1,i=[],s=0,r=[],u=0,o=0;o<n.length;o++)if(u!==n[o]){var c=n.slice();c.splice(o,1);var h=this.tryMissingMj(c,e);h.length>t?(t=(i=h.slice()).length,s=n[o],(r=[]).push({numToDitch:s,MjGroup:i}),u=s):h.length===t&&(t=(i=h.slice()).length,s=n[o],r.push({numToDitch:s,MjGroup:i}),u=s)}return console.log(r),r}},{key:"tryMissingMj",value:function(n,e){var t=[];for(var i=0;i<10;i++)if(!(i>0&&4===this.MjInHandNum[i-1])){var s=n.slice();s.push(i),s.sort();var r=this.formMjGroups(s,0);if(null!==r){var u={num:i,group:r};t.push(u),console.log({normalans:u})}}return t}},{key:"formMjGroups",value:function(n,e){var t=[],i=null;for(t.push(new f([],n,e));t.length>0;){var s=t.pop(),r=void 0;if(!0===s.isDone()){i=s.getGrouped();break}r=new f,s.copy(r),1===r.groupPair()&&t.push(r),r=new f,s.copy(r),!0===r.groupContThree()&&t.push(r),r=new f,s.copy(r),!0===r.groupThreeAKind()&&t.push(r)}return i}},{key:"changeMjNum",value:function(n,e){if(console.log({all:this}),0===n){if(this.bNeedAPair=!e,!0===e){if(0===this.MjInHand[0])return!1;this.MjInHand.push(0),this.MjInHand.push(0),this.TotalMjNum+=2}else 0===this.MjInHand[0]&&(this.MjInHand.splice(0,2),this.TotalMjNum-=2);return this.MjInHand.sort(),console.log({InHand:this.MjInHand}),!0}var t=n-1;if(t<0||t>=9)return!1;if(!0===e){if(16===this.TotalMjNum)return!1;if(4===this.MjInHandNum[t])return!1;this.MjInHandNum[t]++,this.MjInHand.push(n),this.TotalMjNum++}else{if(0===this.MjInHandNum[t])return!1;this.MjInHandNum[t]--;var i=this.MjInHand.findIndex((function(e){return e===n}));this.MjInHand.splice(i,1),this.TotalMjNum--}return console.log({InHand:this.MjInHand}),this.MjInHand.sort(),!0}}]),n}(),b=function(n){Object(a.a)(t,n);var e=Object(l.a)(t);function t(n){var i;return Object(c.a)(this,t),(i=e.call(this,n)).objMissingMjCal=new M,i.ans=[],i}return Object(h.a)(t,[{key:"clickToAdd",value:function(n){if(!0===this.objMissingMjCal.changeMjNum(n,!0)){var e=this.objMissingMjCal.calMissingMahjong();console.log({temp:e}),this.ans=e.slice(),this.forceUpdate()}}},{key:"clickToDelete",value:function(n){if(!0===this.objMissingMjCal.changeMjNum(n,!1)){var e=this.objMissingMjCal.calMissingMahjong();console.log({temp:e}),this.ans=e.slice(),this.forceUpdate()}}},{key:"renderMjButton",value:function(n,e){var t=this;return!0===e?0===n?Object(i.jsx)("button",{className:"button",onClick:function(){return t.clickToAdd(n)},children:"\u767c"}):Object(i.jsx)("button",{className:"button",onClick:function(){return t.clickToAdd(n)},children:n}):0===n?Object(i.jsx)("button",{className:"button",onClick:function(){return t.clickToDelete(n)},children:"\u767c"}):Object(i.jsx)("button",{className:"button",onClick:function(){return t.clickToDelete(n)},children:n})}},{key:"renderEachGroup",value:function(n,e){return n.forEach((function(n){var t=[],s=!1;n.group.forEach((function(e){e.forEach((function(e){e===n.num&&!1===s?(0===e?t.push(Object(i.jsx)("button",{className:"button_red",children:"\u767c"})):t.push(Object(i.jsx)("button",{className:"button_red",children:e})),s=!0):0===e?t.push(Object(i.jsx)("button",{className:"button",children:"\u767c"})):t.push(Object(i.jsx)("button",{className:"button",children:e}))}))})),e.push(Object(i.jsx)("div",{children:t})),e.push(Object(i.jsx)("br",{}))})),e}},{key:"renderAnswer",value:function(){var n=this,e=[];return this.ans.forEach((function(t){console.log({el:t}),0===t.numToDitch?e.push(Object(i.jsx)("h3",{children:"\u5df2\u7cca\u724c"})):-1===t.numToDitch?0===t.MjGroup.length?e.push(Object(i.jsx)("h3",{children:"\u7121\u6cd5\u807d\u724c"})):(e.push(Object(i.jsx)("h3",{children:"\u4f60\u7684\u807d\u724c\u7d44\u5408"})),n.renderEachGroup(t.MjGroup,e)):(e.push(Object(i.jsxs)("h3",{children:["\u6253\u6389",t.numToDitch,"\u865f\u724c\uff0c\u807d\u4ee5\u4e0b\u7d44\u5408"]})),n.renderEachGroup(t.MjGroup,e))})),e}},{key:"render",value:function(){var n=this,e=[],t=[],s=this.renderAnswer();e.push(this.renderMjButton(0,!0));for(var r=0;r<9;r++)e.push(this.renderMjButton(r+1,!0));return console.log({RenderInHand:this.objMissingMjCal.MjInHand}),this.objMissingMjCal.MjInHand.forEach((function(e){t.push(n.renderMjButton(e,!1))})),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("header",{className:"App-header",children:[p,d]}),Object(i.jsxs)("body",{className:"App-body",children:[Object(i.jsx)("div",{children:e}),Object(i.jsx)("h3",{children:"\u4f60\u7684\u624b\u724c"}),Object(i.jsx)("div",{children:t}),s]}),Object(i.jsx)("footer",{className:"App-footer",children:g})]})}}]),t}(r.a.Component),m=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(e){var t=e.getCLS,i=e.getFID,s=e.getFCP,r=e.getLCP,u=e.getTTFB;t(n),i(n),s(n),r(n),u(n)}))};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.340a3fc7.chunk.js.map