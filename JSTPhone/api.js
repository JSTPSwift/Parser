"use strict";function parse(e){var t=api.vm.createContext({}),r=api.vm.createScript("("+e+")");return r.runInNewContext(t)}function interprete(e){var t=api.vm.createContext({}),r=(api.vm.createScript("("+e+")"),e.runInNewContext(t));for(var n in r)t[n]=r[n];return r}function jsrd(e,t){var r={},n=Object.keys(t);return n.forEach(function(t,n){Object.defineProperty(r,t,{enumerable:!0,get:function(){return e[n]},set:function(t){e[n]=t}})}),r}