(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('The Forbidden City', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"The Forbidden City"},"geometry":{"type":"Polygon","coordinates":["@@A`UA@@@@@_XB"],"encodeOffsets":[[119191,40865]]}}],"UTF8Encoding":true});}));