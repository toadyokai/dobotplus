"use strict";(self.webpackChunk_dobot_plus_website=self.webpackChunk_dobot_plus_website||[]).push([[2736],{65639:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorials":[{"type":"link","label":"\u5f00\u53d1\u73af\u5883","href":"/dobotplus/tutorials/environment","docId":"tutorials/environment","unlisted":false},{"type":"link","label":"\u5feb\u901f\u5165\u95e8","href":"/dobotplus/tutorials/quickstart","docId":"tutorials/quickstart","unlisted":false},{"type":"category","label":"\u793a\u4f8b","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"IO \u63a7\u5236\u6848\u4f8b","href":"/dobotplus/tutorials/Examples/io","docId":"tutorials/Examples/io","unlisted":false},{"type":"link","label":"\u4f7f\u7528\u5feb\u6377\u952e\u63a7\u5236\u8bbe\u5907 IO","href":"/dobotplus/tutorials/Examples/hotkey","docId":"tutorials/Examples/hotkey","unlisted":false},{"type":"link","label":"TCP/IP \u63a7\u5236\u5916\u90e8\u8bbe\u5907","href":"/dobotplus/tutorials/Examples/tcpip","docId":"tutorials/Examples/tcpip","unlisted":false},{"type":"link","label":"\u63a7\u5236\u672b\u7aef\u5939\u722a","href":"/dobotplus/tutorials/Examples/grip","docId":"tutorials/Examples/grip","unlisted":false}]}],"api":[{"type":"link","label":"\u4e0a\u4f4d\u673a\u63d2\u4ef6\u5c55\u793a\u914d\u7f6e","href":"/dobotplus/api/install","docId":"api/install","unlisted":false},{"type":"link","label":"\u5bfc\u822a\u680f\u914d\u7f6e","href":"/dobotplus/api/navbar","docId":"api/navbar","unlisted":false},{"type":"link","label":"\u811a\u672c\u7f16\u7a0b\u914d\u7f6e","href":"/dobotplus/api/script","docId":"api/script","unlisted":false},{"type":"link","label":"\u56fe\u5f62\u7f16\u7a0b\u914d\u7f6e","href":"/dobotplus/api/blocky","docId":"api/blocky","unlisted":false},{"type":"link","label":"\u672b\u7aef\u5feb\u6377\u952e\u914d\u7f6e","href":"/dobotplus/api/hotkey","docId":"api/hotkey","unlisted":false},{"type":"link","label":"\u56fd\u9645\u5316\u914d\u7f6e","href":"/dobotplus/api/local","docId":"api/local","unlisted":false},{"type":"link","label":"\u547d\u4ee4\u884c\u5de5\u5177","href":"/dobotplus/api/cli","docId":"api/cli","unlisted":false},{"type":"link","label":"Lua \u8fdb\u7a0b","href":"/dobotplus/api/lua","docId":"api/lua","unlisted":false}],"components":[{"type":"link","label":"Alert","href":"/dobotplus/components/Alert","docId":"components/Alert","unlisted":false},{"type":"link","label":"Button","href":"/dobotplus/components/Button","docId":"components/Button","unlisted":false},{"type":"link","label":"Image","href":"/dobotplus/components/Image","docId":"components/Image","unlisted":false},{"type":"link","label":"Input","href":"/dobotplus/components/Input","docId":"components/Input","unlisted":false},{"type":"link","label":"Radio","href":"/dobotplus/components/Radio","docId":"components/Radio","unlisted":false},{"type":"link","label":"Select","href":"/dobotplus/components/Select","docId":"components/Select","unlisted":false},{"type":"link","label":"Slider","href":"/dobotplus/components/Slider","docId":"components/Slider","unlisted":false},{"type":"link","label":"Status","href":"/dobotplus/components/Status","docId":"components/Status","unlisted":false},{"type":"link","label":"Switch","href":"/dobotplus/components/Switch","docId":"components/Switch","unlisted":false},{"type":"link","label":"Table","href":"/dobotplus/components/Table","docId":"components/Table","unlisted":false}],"lua":[{"type":"link","label":"\u57fa\u7840\u8bed\u6cd5","href":"/dobotplus/lua/grammer","docId":"lua/grammer","unlisted":false},{"type":"link","label":"\u8fd0\u7b97\u7b26","href":"/dobotplus/lua/operator","docId":"lua/operator","unlisted":false},{"type":"link","label":"\u6d41\u7a0b\u63a7\u5236","href":"/dobotplus/lua/flow","docId":"lua/flow","unlisted":false},{"type":"link","label":"Modbus","href":"/dobotplus/lua/modbus","docId":"lua/modbus","unlisted":false},{"type":"link","label":"TCP&UDP","href":"/dobotplus/lua/tcp","docId":"lua/tcp","unlisted":false},{"type":"link","label":"\u672b\u7aef\u5de5\u5177","href":"/dobotplus/lua/tool","docId":"lua/tool","unlisted":false},{"type":"link","label":"IO","href":"/dobotplus/lua/io","docId":"lua/io","unlisted":false},{"type":"link","label":"\u8fd0\u52a8\u6307\u4ee4","href":"/dobotplus/lua/motion","docId":"lua/motion","unlisted":false},{"type":"link","label":"\u5b89\u5168\u76ae\u80a4","href":"/dobotplus/lua/safeskin","docId":"lua/safeskin","unlisted":false},{"type":"link","label":"\u603b\u7ebf\u5bc4\u5b58\u5668","href":"/dobotplus/lua/busRegister","docId":"lua/busRegister","unlisted":false},{"type":"link","label":"\u7a0b\u5e8f\u63a7\u5236","href":"/dobotplus/lua/programControl","docId":"lua/programControl","unlisted":false},{"type":"link","label":"\u6258\u76d8","href":"/dobotplus/lua/tray","docId":"lua/tray","unlisted":false},{"type":"link","label":"\u5206\u5e03\u5f0f\u9501","href":"/dobotplus/lua/lock","docId":"lua/lock","unlisted":false}]},"docs":{"api/blocky":{"id":"api/blocky","title":"\u56fe\u5f62\u7f16\u7a0b\u914d\u7f6e","description":"\u56fe\u5f62\u5316\u7f16\u7a0b\u662fDobot+\u6700\u6838\u5fc3\u7684\u5185\u5bb9\uff0c\u901a\u8fc7\u914d\u7f6e\u751f\u6210\u5bf9\u5e94\u79ef\u6728\uff0c\u53ef\u4ee5\u964d\u4f4e\u811a\u672c\u7f16\u5199\u96be\u5ea6\u3002\u627e\u5230src/config/Blocks.json\uff0c\u901a\u8fc7\u6307\u5b9a\u53c2\u6570\u6765\u81ea\u5b9a\u4e49\u4f60\u60f3\u8981\u7684\u79ef\u6728\u3002","sidebar":"api"},"api/cli":{"id":"api/cli","title":"\u547d\u4ee4\u884c\u5de5\u5177","description":"create","sidebar":"api"},"api/hotkey":{"id":"api/hotkey","title":"\u672b\u7aef\u5feb\u6377\u952e\u914d\u7f6e","description":"\u673a\u5668\u4eba\u672b\u7aef\u53ef\u4ee5\u914d\u7f6e\u63d2\u4ef6\u7684\u5feb\u6377\u952e\uff0c\u652f\u6301485\u901a\u8baf\u534f\u8bae","sidebar":"api"},"api/install":{"id":"api/install","title":"\u4e0a\u4f4d\u673a\u63d2\u4ef6\u5c55\u793a\u914d\u7f6e","description":"\u5728Dobot+\u8d44\u6e90\u4e2d\uff0c\u6bcf\u4e2a\u6a21\u5757\u90fd\u662f\u901a\u8fc7json\u683c\u5f0f\u7684\u6587\u4ef6\u6765\u914d\u7f6e\u9875\u9762\u53c2\u6570\u53ca\u663e\u793a\u3002\u672c\u7ae0\u8282\u5c06\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e\u5b89\u88c5\u9875\u9762\u7684\u76f8\u5173\u5185\u5bb9\uff0c\u4f60\u5c06\u4f1a\u4e86\u89e3\u5230","sidebar":"api"},"api/local":{"id":"api/local","title":"\u56fd\u9645\u5316\u914d\u7f6e","description":"\u6587\u4ef6\u5939\u7ed3\u6784","sidebar":"api"},"api/lua":{"id":"api/lua","title":"Lua \u8fdb\u7a0b","description":"daemon.lua","sidebar":"api"},"api/navbar":{"id":"api/navbar","title":"\u5bfc\u822a\u680f\u914d\u7f6e","description":"\u5b89\u88c5\u5b8c\u63d2\u4ef6\u540e\uff0c\u652f\u6301\u914d\u7f6e\u5feb\u6377\u64cd\u4f5c\u7684\u5bfc\u822a\u680f","sidebar":"api"},"api/script":{"id":"api/script","title":"\u811a\u672c\u7f16\u7a0b\u914d\u7f6e","description":"\u5b89\u88c5\u5b8c\u63d2\u4ef6\u540e\uff0c\u652f\u6301\u5728\u811a\u672c\u7f16\u7a0b\u4e2d\u8fd0\u884c\u63d2\u4ef6\u7684\u6307\u4ee4\uff0c\u901a\u8fc7\u914d\u7f6e\uff0c\u53ef\u4ee5\u5c06\u63d2\u4ef6\u6307\u4ee4\u6dfb\u52a0\u8fdb\u6307\u4ee4\u83dc\u5355\u680f\uff0c\u5b9e\u73b0\u6307\u4ee4\u7684\u5feb\u901f\u63d2\u5165\u3002","sidebar":"api"},"components/Alert":{"id":"components/Alert","title":"Alert","description":"\u793a\u4f8b","sidebar":"components"},"components/Button":{"id":"components/Button","title":"Button","description":"\u793a\u4f8b","sidebar":"components"},"components/Image":{"id":"components/Image","title":"Image","description":"\u793a\u4f8b","sidebar":"components"},"components/Input":{"id":"components/Input","title":"Input","description":"\u793a\u4f8b","sidebar":"components"},"components/Radio":{"id":"components/Radio","title":"Radio","description":"\u793a\u4f8b","sidebar":"components"},"components/Select":{"id":"components/Select","title":"Select","description":"\u793a\u4f8b","sidebar":"components"},"components/Slider":{"id":"components/Slider","title":"Slider","description":"\u793a\u4f8b","sidebar":"components"},"components/Status":{"id":"components/Status","title":"Status","description":"\u793a\u4f8b","sidebar":"components"},"components/Switch":{"id":"components/Switch","title":"Switch","description":"\u793a\u4f8b","sidebar":"components"},"components/Table":{"id":"components/Table","title":"Table","description":"\u793a\u4f8b","sidebar":"components"},"lua/busRegister":{"id":"lua/busRegister","title":"\u603b\u7ebf\u5bc4\u5b58\u5668","description":"\u6307\u4ee4\u5217\u8868","sidebar":"lua"},"lua/flow":{"id":"lua/flow","title":"\u6d41\u7a0b\u63a7\u5236","description":"|\u6307\u4ee4\u7b26\u53f7\\t|\u8bf4\u660e|","sidebar":"lua"},"lua/grammer":{"id":"lua/grammer","title":"\u57fa\u7840\u8bed\u6cd5","description":"\u793a\u4f8b","sidebar":"lua"},"lua/io":{"id":"lua/io","title":"IO","description":"IO\u6307\u4ee4\u7528\u4e8e\u8fdb\u884c\u673a\u68b0\u81c2\u7cfb\u7edfIO\u7684\u8bfb\u5199\u548c\u76f8\u5173\u53c2\u6570\u7684\u8bbe\u7f6e\u3002","sidebar":"lua"},"lua/lock":{"id":"lua/lock","title":"\u5206\u5e03\u5f0f\u9501","description":"\u8bf4\u660e","sidebar":"lua"},"lua/modbus":{"id":"lua/modbus","title":"Modbus","description":"\u6307\u4ee4\u5217\u8868","sidebar":"lua"},"lua/motion":{"id":"lua/motion","title":"\u8fd0\u52a8\u6307\u4ee4","description":"\u6307\u4ee4\u5217\u8868","sidebar":"lua"},"lua/operator":{"id":"lua/operator","title":"\u8fd0\u7b97\u7b26","description":"\u7b97\u672f\u8fd0\u7b97\u7b26","sidebar":"lua"},"lua/programControl":{"id":"lua/programControl","title":"\u7a0b\u5e8f\u63a7\u5236","description":"\u6307\u4ee4\u5217\u8868","sidebar":"lua"},"lua/safeskin":{"id":"lua/safeskin","title":"\u5b89\u5168\u76ae\u80a4","description":"\u6307\u4ee4\u5217\u8868","sidebar":"lua"},"lua/tcp":{"id":"lua/tcp","title":"TCP&UDP","description":"\u6307\u4ee4\u5217\u8868","sidebar":"lua"},"lua/tool":{"id":"lua/tool","title":"\u672b\u7aef\u5de5\u5177","description":"\u6307\u4ee4\u5217\u8868","sidebar":"lua"},"lua/tray":{"id":"lua/tray","title":"\u6258\u76d8","description":"\u6307\u4ee4\u5217\u8868","sidebar":"lua"},"tutorials/environment":{"id":"tutorials/environment","title":"\u5f00\u53d1\u73af\u5883","description":"\u4f7f\u7528\u8be5\u5de5\u5177\u96c6\u5f00\u53d1\u63d2\u4ef6\u5fc5\u987b\u7684\u914d\u7f6e\u73af\u5883\u5305\u62ec NodeJs\u3001Pnpm\u3002","sidebar":"tutorials"},"tutorials/Examples/grip":{"id":"tutorials/Examples/grip","title":"\u63a7\u5236\u672b\u7aef\u5939\u722a","description":"\u8be5\u793a\u4f8b\u4f1a\u5b8c\u6210\u4e00\u4e2a\u5438\u76d8\u63d2\u4ef6\u7684\u5f00\u53d1\uff0c\u7528\u4e8e\u5438\u76d8\u672b\u7aef\u7684\u5438\u53d6\u548c\u91ca\u653e\u5de5\u4ef6\u3002","sidebar":"tutorials"},"tutorials/Examples/hotkey":{"id":"tutorials/Examples/hotkey","title":"\u4f7f\u7528\u5feb\u6377\u952e\u63a7\u5236\u8bbe\u5907 IO","description":"\u5728\u5b8c\u6210 IO \u63a7\u5236\u6848\u4f8b \u540e\uff0c\u7ecf\u8c03\u8bd5\uff0cIO \u53ef\u7b26\u5408\u9884\u671f\u7684\u5de5\u4f5c\uff0c\u6b64\u65f6\u53ef\u4ee5\u9488\u5bf9\u8be5\u63d2\u4ef6\u8fdb\u884c\u66f4\u52a0\u4e30\u5bcc\u7684\u914d\u7f6e\u3002","sidebar":"tutorials"},"tutorials/Examples/io":{"id":"tutorials/Examples/io","title":"IO \u63a7\u5236\u6848\u4f8b","description":"\u8be5\u6559\u7a0b\u4f1a\u5b9e\u73b0\u63a7\u5236\u5438\u76d8\u5438\u53d6\u548c\u91ca\u653e\u7684\u63d2\u4ef6\u3002","sidebar":"tutorials"},"tutorials/Examples/tcpip":{"id":"tutorials/Examples/tcpip","title":"TCP/IP \u63a7\u5236\u5916\u90e8\u8bbe\u5907","description":"\u63d2\u4ef6\u7684\u65b0\u5efa\u8fc7\u7a0b\u8bf7\u53c2\u8003 IO \u63a7\u5236\u6848\u4f8b\uff0c\u65b0\u5efa\u63d2\u4ef6\u540e\u8bf7\u9075\u5faauserAPI.lua\uff0chttpAPI.lua\uff0cdaemon.lua\uff0cui/pages/Main.tsx \u7684\u987a\u5e8f\u53bb\u5b8c\u6210\u63d2\u4ef6\u4e1a\u52a1\u903b\u8f91\u7684\u5f00\u53d1\u3002","sidebar":"tutorials"},"tutorials/quickstart":{"id":"tutorials/quickstart","title":"\u5feb\u901f\u5165\u95e8","description":"\u672c\u7ae0\u8282\u5c06\u4f1a\u4e3a\u4f60\u4ecb\u7ecdDobot+\u751f\u6001\u914d\u4ef6\u5f00\u53d1\u6d41\u7a0b\uff0c\u9879\u76ee\u8d44\u6e90\u7ed3\u6784\uff0c\u4ee5\u53ca\u76f8\u5173\u6982\u5ff5","sidebar":"tutorials"}}}}')}}]);