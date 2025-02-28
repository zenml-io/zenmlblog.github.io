/*!
 * @widgetbot/html-embed v1.0.5
 * MIT Licensed
 */
! function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var n = t();
        for (var r in n)("object" == typeof exports ? exports : e)[r] = n[r]
    }
}("undefined" != typeof self ? self : this, function() {
        return function(e) {
                var t = {};

                function n(r) {
                    if (t[r]) return t[r].exports;
                    var o = t[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
                }
                return n.m = e, n.c = t, n.d = function(e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    })
                }, n.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return n.d(t, "a", t), t
                }, n.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, n.p = "", n(n.s = 1)
            }([function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = function() {
                            function e() {
                                this.listeners = {}
                            }
                            return e.prototype.socketEvent = function(e) {
                                try {
                                    var t = JSON.parse(e.data);
                                    if (t instanceof Object && !0 === t.widgetbot && t.id === this.id) {
                                        var n = t.event,
                                            r = t.data,
                                            o = this.listeners[n];
                                        o && o.forEach(function(e) {
                                            return e(r)
                                        })
                                    }
                                } catch (e) {}
                            }, e.prototype.on = function(e, t) {
                                this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t), console.debug("[embed-api] on '" + e + "'", t)
                            }, e
                        }();
                        t.default = r
                    }, function(e, t, n) {
                        e.exports = n(2)
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(3),
                            o = n.n(r);
                        window.widgetbot = new o.a
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        const r = n(4),
                            {
                                version: o
                            } = n(9);
                        t.default = class {
                            constructor() {
                                this.version = o, this.embeds = [], this.register(), document.addEventListener("DOMContentLoaded", this.register.bind(this))
                            }
                            register() {
                                const e = document.getElementsByTagName("widgetbot");
                                for (const t of e) {
                                    const {
                                        root: e
                                    } = new r.default(t);
                                    this.embeds.push(e)
                                }
                            }
                        }
                    }, function(e, t, n) {
                        "use strict";
                        var r = this && this.__rest || function(e, t) {
                            var n = {};
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                var o = 0;
                                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]])
                            }
                            return n
                        };
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        const o = n(5),
                            i = n(8);
                        t.default = class {
                                constructor(e) {
                                    this.root = e, this.id = i.generateUUID(), this.iframe = document.createElement("iframe");
                                    const {
                                        id: t,
                                        iframe: n
                                    } = this;
                                    if (this.injected) return;
                                    const s = new o.Client({
                                        id: t,
                                        iframe: n
                                    });
                                    i.Shadow(e).appendChild(n);
                                    const c = this.parseAttributes(e),
                                        {
                                            server: a,
                                            channel: u,
                                            url: d
                                        } = c,
                                        f = r(c, ["server", "channel", "url"]);
                                    n.setAttribute("src", d), this.setAPI(e, {
                                        on: (e, t) => s.on(e, t),
                                        emit: (e, t) => s.emit(e, t),
                                        contentWindow: n.contentWindow,
                                        contentDocument: n.contentDocument
                                    }), i.applyStyles(e, Object.assign({
                                        display: "inline-block",
                                        overflow: "hidden",
                                        backgroundColor: "#36393E",
                                        borderRadius: "7px",
                                        verticalAlign: "top"
                                    }, f)), i.applyStyles(n, {
                                        border: "none",
                                        width: "100%",
                                        height: "100%"
                                    })
                                }
                                get injected() {
                                    return "emit" in this.root && "on" in this.root
                                }
                                parseAttributes(e) {
                                        const t = e.getAttribute("server") || "299881420891881473",
                                            n = e.getAttribute("channel"),
                                            r = `${e.getAttribute("shard")||"https://widgetbot.io"}/channels/${t}${n?`/${n}`:""}/?api=${this.id}`,o=e.getAttribute("width"),i=e.getAttribute("height");return Object.assign({},o&&{width:+o?`${o}px`:o},i&&{height:+i?`${i}px`:i},{server:t,channel:n,url:r})}setAPI(e,t){Object.keys(t).forEach(n=>e[n]=t[n])}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.API=r.default;var o=n(6);t.Client=o.default;var i=n(7);t.Server=i.default},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){function t(t){var n=e.call(this)||this;return n.server={emit:function(e,t){var r=n.listeners[e];r&&r.forEach(function(e){return e(t)})}},Object.assign(n,t),window.addEventListener("message",n.socketEvent.bind(n)),n}return o(t,e),t.prototype.emit=function(e,t){if(!window.parent)return!1;var n=JSON.stringify({widgetbot:!0,id:this.id,event:e,data:t});this.iframe.contentWindow&&this.iframe.contentWindow.postMessage(n,"*")},t}(n(0).default);t.default=i},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){function t(t){var n=e.call(this)||this;return n.targetOrigin="*",n.client={emit:function(e,t){var r=n.listeners[e];r&&r.forEach(function(e){return e(t)})}},Object.assign(n,t),window.addEventListener("message",n.socketEvent.bind(n)),n}return o(t,e),t.prototype.emit=function(e,t){if(console.debug("[embed-api] emit '"+e+"'",t),!window.parent)return!1;var n=JSON.stringify({widgetbot:!0,id:this.id,event:e,data:t});window.parent.postMessage(n,this.targetOrigin)},t}(n(0).default);t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Shadow=(e=>{try{if(e.createShadowRoot){return e.createShadowRoot()}}catch(e){}return e}),t.applyStyles=((e,t)=>Object.keys(t).forEach(n=>e.style[n]=t[n])),t.generateUUID=function(){let e=(new Date).getTime();return"undefined"!=typeof performance&&"function"==typeof performance.now&&(e+=performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{let n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:3&n|8).toString(16)})}},function(e,t){e.exports={name:"@widgetbot/html-embed",version:"1.0.5",description:"html-embed React component",main:"umd/@widgetbot/html-embed.js",files:["css","es","lib","umd"],scripts:{build:"nwb build-react-component --no-demo",clean:"nwb clean-module && nwb clean-demo",precommit:"pretty-quick --staged",start:"nwb serve-react-demo --port 3200",release:"yarn version && yarn build && yarn publish && yarn purge",purge:"tinyreq -u https://purge.jsdelivr.net/npm/@widgetbot/html-embed"},dependencies:{"@types/node":"^10.3.3","@widgetbot/embed-api":"^1.0.9","awesome-typescript-loader":"4.0.1"},devDependencies:{husky:"^0.14.3",nwb:"0.21.x",prettier:"^1.13.5","pretty-quick":"^1.6.0","tinyreq-cli":"^1.1.1",typescript:"^2.8.3"},author:"",homepage:"",license:"MIT",repository:"",keywords:["react-component"]}}]).default});
//# sourceMappingURL=html-embed.min.js.map