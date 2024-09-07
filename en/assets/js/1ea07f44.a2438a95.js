"use strict";(self.webpackChunk_dobot_plus_website=self.webpackChunk_dobot_plus_website||[]).push([[5657],{3032:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>j,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var l=s(5723),r=s(3327);const c={},i="TCP&UDP",d={id:"lua/tcp",title:"TCP&UDP",description:"\u6307\u4ee4\u5217\u8868",source:"@site/docs/lua/05-tcp.md",sourceDirName:"lua",slug:"/lua/tcp",permalink:"/dobotplus/en/lua/tcp",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"lua",previous:{title:"Modbus",permalink:"/dobotplus/en/lua/modbus"},next:{title:"\u672b\u7aef\u5de5\u5177",permalink:"/dobotplus/en/lua/tool"}},t={},h=[{value:"TCPCreate",id:"tcpcreate",level:2},{value:"TCPStart",id:"tcpstart",level:2},{value:"TCPRead",id:"tcpread",level:2},{value:"TCPWrite",id:"tcpwrite",level:2},{value:"TCPDestroy",id:"tcpdestroy",level:2},{value:"UDPCreate",id:"udpcreate",level:2},{value:"UDPRead",id:"udpread",level:2},{value:"UDPWrite",id:"udpwrite",level:2}];function x(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"tcpudp",children:"TCP&UDP"})}),"\n",(0,l.jsx)(n.p,{children:"\u6307\u4ee4\u5217\u8868\nTCP&UDP\u51fd\u6570\u7528\u4e8e\u8fdb\u884cTCP\u6216UDP\u901a\u4fe1\u3002"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u6307\u4ee4"}),(0,l.jsx)(n.th,{children:"\u529f\u80fd"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"TCPCreate"}),(0,l.jsx)(n.td,{children:"\u521b\u5efaTCP\u7f51\u7edc\u5bf9\u8c61"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"TCPStart"}),(0,l.jsx)(n.td,{children:"\u5efa\u7acbTCP\u8fde\u63a5"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"TCPRead"}),(0,l.jsx)(n.td,{children:"\u63a5\u6536TCP\u5bf9\u7aef\u53d1\u9001\u7684\u6570\u636e"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"TCPWrite"}),(0,l.jsx)(n.td,{children:"\u53d1\u9001\u6570\u636e\u7ed9TCP\u5bf9\u7aef"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"TCPDestroy"}),(0,l.jsx)(n.td,{children:"\u65ad\u5f00TCP\u8fde\u63a5\u5e76\u9500\u6bc1socket\u5bf9\u8c61"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"UDPCreate"}),(0,l.jsx)(n.td,{children:"\u521b\u5efaUDP\u7f51\u7edc\u5bf9\u8c61"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"UDPRead"}),(0,l.jsx)(n.td,{children:"\u63a5\u6536UDP\u5bf9\u7aef\u53d1\u9001\u7684\u6570\u636e"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"UDPWrite"}),(0,l.jsx)(n.td,{children:"\u53d1\u9001\u6570\u636e\u7ed9UDP\u5bf9\u7aef"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"tcpcreate",children:"TCPCreate"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"TCPCreate(isServer, IP, port)\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,l.jsx)(n.p,{children:"\u521b\u5efaTCP\u7f51\u7edc\u5bf9\u8c61\uff0c\u4ec5\u53ef\u521b\u5efa\u4e00\u4e2a\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"isServer\uff1a\u662f\u5426\u521b\u5efa\u670d\u52a1\u7aef\u3002true\uff1a\u8868\u793a\u521b\u5efa\u670d\u52a1\u7aef\uff1bfalse\uff1a\u8868\u793a\u521b\u5efa\u5ba2\u6237\u7aef\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"IP\uff1a\u670d\u52a1\u7aefIP\u5730\u5740\u3002\u9700\u4e0e\u5ba2\u6237\u7aefIP\u5730\u5740\u5728\u540c\u4e00\u7f51\u6bb5\uff0c\u4e14\u4e0d\u51b2\u7a81\u3002\u521b\u5efa\u670d\u52a1\u7aef\u65f6\u4e3a\u673a\u68b0\u81c2\u7684IP\u5730\u5740\uff0c\u521b\u5efa\u5ba2\u6237\u7aef\u65f6\u4e3a\u5bf9\u7aef\u7684\u5730\u5740\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"port\uff1a\u670d\u52a1\u7aef\u7aef\u53e3\u3002\u8bf7\u52ff\u4f7f\u7528\u4e0b\u8ff0\u5df2\u88ab\u7cfb\u7edf\u5360\u7528\u7684\u7aef\u53e3\uff0c\u4f1a\u5bfc\u81f4\u670d\u52a1\u7aef\u521b\u5efa\u5931\u8d25\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"7, 13, 22, 37, 139, 445, 502, 503\uff080 ~ 1024\u4e4b\u95f4\u7684\u7aef\u53e3\u662flinux\u7cfb\u7edf\u81ea\u5b9a\u4e49\u7aef\u53e3\uff0c\u88ab\u5360\u7528\u53ef\u80fd\u6027\u9ad8\uff0c\u8bf7\u5c3d\u91cf\u907f\u514d\u4f7f\u7528\uff09"}),"\n",(0,l.jsx)(n.li,{children:"1501, 1502, 1503"}),"\n",(0,l.jsx)(n.li,{children:"4840, 8172, 9527, 11740"}),"\n",(0,l.jsx)(n.li,{children:"22000, 22001, 29999"}),"\n",(0,l.jsx)(n.li,{children:"30004, 30005, 30006"}),"\n",(0,l.jsx)(n.li,{children:"60000 ~ 65504, 65506, 65511 ~ 65515, 65521, 65522"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u8fd4\u56de\uff1a"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"err\uff1a 0\u8868\u793a\u521b\u5efaTCP\u7f51\u7edc\u5bf9\u8c61\u6210\u529f \uff0c1\u8868\u793a\u521b\u5efaTCP\u7f51\u7edc\u5bf9\u8c61\u5931\u8d25\u3002"}),"\n",(0,l.jsx)(n.li,{children:"socket\uff1a\u521b\u5efa\u7684socket\u5bf9\u8c61\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b1\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'-- \u521b\u5efaTCP\u670d\u52a1\u7aef\u3002\nlocal ip="192.168.5.1" -- \u673a\u68b0\u81c2\u7684IP\u5730\u5740\u4f5c\u4e3a\u670d\u52a1\u7aef\u7684IP\u5730\u5740\nlocal port=6001 -- \u670d\u52a1\u7aef\u7aef\u53e3\nlocal err=0\nlocal socket=0\nerr, socket = TCPCreate(true, ip, port)\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b2\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'-- \u521b\u5efaTCP\u5ba2\u6237\u7aef\u3002\nlocal ip="192.168.5.25" -- \u5916\u90e8\u8bbe\u5907\u5982\u76f8\u673a\u7684IP\u5730\u5740\u4f5c\u4e3a\u670d\u52a1\u7aef\u7684IP\u5730\u5740\nlocal port=6001 -- \u670d\u52a1\u7aef\u7aef\u53e3\nlocal err=0\nlocal socket=0\nerr, socket = TCPCreate(false, ip, port)\n'})}),"\n",(0,l.jsx)(n.h2,{id:"tcpstart",children:"TCPStart"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"TCPStart(socket, timeout)\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,l.jsx)(n.p,{children:"\u5efa\u7acbTCP\u8fde\u63a5\u3002\u673a\u68b0\u81c2\u4f5c\u4e3a\u670d\u52a1\u7aef\u65f6\uff0c\u7b49\u5f85\u5ba2\u6237\u7aef\u6765\u8fde\u63a5\uff1b\u673a\u68b0\u81c2\u4f5c\u4e3a\u5ba2\u6237\u7aef\u65f6\uff0c\u4e3b\u52a8\u8fde\u63a5\u670d\u52a1\u7aef\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"socket\uff1a\u5df2\u521b\u5efa\u7684socket\u5bf9\u8c61\u3002"}),"\n",(0,l.jsx)(n.li,{children:"timeout\uff1a\u7b49\u5f85\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u79d2\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a0\uff0c\u4f1a\u4e00\u76f4\u7b49\u5f85\u5230\u8fde\u63a5\u5efa\u7acb\u6210\u529f\uff1b\u5982\u679c\u4e0d\u4e3a0\uff0c\u5219\u8d85\u8fc7\u8bbe\u5b9a\u7684\u65f6\u95f4\u540e\u8fd4\u56de\u8fde\u63a5\u5931\u8d25\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u8fd4\u56de\uff1a"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u8fde\u63a5\u7ed3\u679c\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"0\uff1a\u8fde\u63a5\u6210\u529f"}),"\n",(0,l.jsx)(n.li,{children:"1\uff1a\u8f93\u5165\u53c2\u6570\u9519\u8bef"}),"\n",(0,l.jsx)(n.li,{children:"2\uff1asocket\u5bf9\u8c61\u4e0d\u5b58\u5728"}),"\n",(0,l.jsx)(n.li,{children:"3\uff1a\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4\u9519\u8bef"}),"\n",(0,l.jsx)(n.li,{children:"4\uff1a\u8fde\u63a5\u5931\u8d25"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"-- \u5f00\u59cb\u5efa\u7acbTCP\u8fde\u63a5\uff0c\u4e00\u76f4\u7b49\u5f85\u76f4\u5230\u8fde\u63a5\u5efa\u7acb\u6210\u529f\u3002\nerr = TCPStart(socket, 0) -- socket\u4e3aTCPCreate\u6210\u529f\u8fd4\u56de\u7684socket\u5bf9\u8c61\n"})}),"\n",(0,l.jsx)(n.h2,{id:"tcpread",children:"TCPRead"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"TCPRead(socket, timeout, type)\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,l.jsx)(n.p,{children:"\u63a5\u6536TCP\u5bf9\u7aef\u53d1\u9001\u7684\u6570\u636e\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"socket\uff1a\u5df2\u521b\u5efa\u7684socket\u5bf9\u8c61\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u53ef\u9009\u53c2\u6570\uff1a"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"timeout\uff1a\u7b49\u5f85\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u79d2\u3002\u5982\u679c\u4e0d\u8bbe\u7f6e\u6216\u8bbe\u7f6e\u4e3a\u5c0f\u4e8e\u7b49\u4e8e0\u7684\u503c\uff0c\u4f1a\u4e00\u76f4\u7b49\u5f85\u76f4\u5230\u8bfb\u53d6\u5b8c\u6570\u636e\u518d\u5f80\u4e0b\u6267\u884c\uff1b\u5982\u679c\u8bbe\u4e3a\u5927\u4e8e0\u7684\u503c\uff0c\u5219\u8d85\u8fc7\u8bbe\u5b9a\u7684\u65f6\u95f4\u540e\u4f1a\u76f4\u63a5\u5f80\u4e0b\u6267\u884c\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:'type\uff1a\u8fd4\u56de\u503c\u7c7b\u578b\u3002\u5982\u679c\u4e0d\u8bbe\u7f6e\u6216\u8bbe\u7f6e\u4e3a"table"\uff0c\u5219RecBuf\u7f13\u5b58\u683c\u5f0f\u4e3atable\u5f62\u5f0f\uff1b\u5982\u679c\u8bbe\u7f6e\u4e3a\u201cstring\u201d\uff0c\u5219RecBuf\u7f13\u5b58\u4e3a\u5b57\u7b26\u4e32\u3002'}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u8fd4\u56de\uff1a"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"err\uff1a 0\u8868\u793a\u63a5\u6536\u6570\u636e\u6210\u529f \uff0c1\u8868\u793a\u63a5\u6536\u6570\u636e\u5931\u8d25\u3002"}),"\n",(0,l.jsx)(n.li,{children:"Recbuf\uff1a\u63a5\u6536\u6570\u636e\u7f13\u5b58\u533a\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'-- \u63a5\u6536TCP\u6570\u636e\uff0c\u63a5\u6536\u7684\u6570\u636e\u5206\u522b\u4fdd\u5b58\u4e3a\u5b57\u7b26\u4e32\u548ctable\u5f62\u5f0f\u3002\n-- socket\u4e3aTCPCreate\u6210\u529f\u8fd4\u56de\u7684socket\u5bf9\u8c61\nerr, RecBuf = TCPRead(socket,0,"string") -- RecBuf\u6570\u636e\u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\nerr, RecBuf = TCPRead(socket, 0) -- RecBuf\u6570\u636e\u7c7b\u578b\u4e3atable\n'})}),"\n",(0,l.jsx)(n.h2,{id:"tcpwrite",children:"TCPWrite"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"TCPWrite(socket, buf, timeout)\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,l.jsx)(n.p,{children:"\u53d1\u9001\u6570\u636e\u7ed9TCP\u5bf9\u7aef\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"socket\uff1a\u5df2\u521b\u5efa\u7684socket\u5bf9\u8c61\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"buf\uff1a\u8981\u53d1\u9001\u7684\u6570\u636e\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u53ef\u9009\u53c2\u6570\uff1a"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"timeout\uff1a\u7b49\u5f85\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u79d2\u3002\u5982\u679c\u4e0d\u8bbe\u7f6e\u6216\u8bbe\u7f6e\u4e3a0\uff0c\u4f1a\u4e00\u76f4\u7b49\u5f85\u76f4\u5230\u5bf9\u7aef\u63a5\u6536\u5b8c\u6570\u636e\u518d\u5f80\u4e0b\u6267\u884c\uff1b\u5982\u679c\u4e0d\u4e3a0\uff0c\u5219\u8d85\u8fc7\u8bbe\u5b9a\u7684\u65f6\u95f4\u540e\u4f1a\u76f4\u63a5\u5f80\u4e0b\u6267\u884c\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u8fd4\u56de\uff1a"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u53d1\u9001\u7ed3\u679c\u3002","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"0\uff1a\u53d1\u9001\u6210\u529f\u3002"}),"\n",(0,l.jsx)(n.li,{children:"1\uff1a\u53d1\u9001\u5931\u8d25"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'-- \u53d1\u9001TCP\u6570\u636e\uff0c\u6570\u636e\u5185\u5bb9\u4e3a\u201ctest\u201d\u3002\nTCPWrite(socket, "test") -- socket\u4e3aTCPCreate\u6210\u529f\u8fd4\u56de\u7684socket\u5bf9\u8c61\n'})}),"\n",(0,l.jsx)(n.h2,{id:"tcpdestroy",children:"TCPDestroy"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"TCPDestroy(socket)\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,l.jsx)(n.p,{children:"\u65ad\u5f00TCP\u8fde\u63a5\u5e76\u9500\u6bc1socket\u5bf9\u8c61\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"socket\uff1a\u5df2\u521b\u5efa\u7684socket\u5bf9\u8c61\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u8fd4\u56de\uff1a"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u7ed3\u679c\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"0\uff1a\u6267\u884c\u6210\u529f"}),"\n",(0,l.jsx)(n.li,{children:"1\uff1a\u6267\u884c\u5931\u8d25"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"-- \u65ad\u5f00\u4e0eTCP\u5bf9\u7aef\u7684\u8fde\u63a5\u3002\nTCPDestroy(socket) -- socket\u4e3aTCPCreate\u6210\u529f\u8fd4\u56de\u7684socket\u5bf9\u8c61\n"})}),"\n",(0,l.jsx)(n.h2,{id:"udpcreate",children:"UDPCreate"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"UDPCreate(isServer, IP, port)\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,l.jsx)(n.p,{children:"\u521b\u5efaUDP\u7f51\u7edc\u5bf9\u8c61\uff0c\u4ec5\u53ef\u521b\u5efa\u4e00\u4e2a\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"isServer\uff1a\u662f\u5426\u521b\u5efa\u670d\u52a1\u7aef\u3002true\uff1a\u8868\u793a\u521b\u5efa\u670d\u52a1\u7aef\uff1bfalse\uff1a\u8868\u793a\u521b\u5efa\u5ba2\u6237\u7aef\u3002"}),"\n",(0,l.jsx)(n.li,{children:"IP\uff1a\u521b\u5efa\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u65f6\u90fd\u586b\u5199\u4e3a\u5bf9\u7aefIP\u5730\u5740\u3002\u9700\u4e0e\u673a\u68b0\u81c2IP\u5730\u5740\u5728\u540c\u4e00\u7f51\u6bb5\uff0c\u4e14\u4e0d\u51b2\u7a81\u3002"}),"\n",(0,l.jsx)(n.li,{children:"port\uff1a\n\u521b\u5efa\u670d\u52a1\u7aef\u65f6\uff0c\u8868\u793a\u672c\u7aef\u548c\u5bf9\u7aef\u90fd\u4f7f\u7528\u8be5\u7aef\u53e3\u3002\u8bf7\u52ff\u4f7f\u7528\u5df2\u88ab\u7cfb\u7edf\u5360\u7528\u7684\u7aef\u53e3\uff0c\u8be6\u89c1TCPCreate\u7684\u53c2\u6570\u8bf4\u660e\u3002\n\u521b\u5efa\u5ba2\u6237\u7aef\u65f6\uff0c\u8868\u793a\u5bf9\u7aef\u7684\u7aef\u53e3\u3002\u6b64\u65f6\u672c\u7aef\u53d1\u9001\u6570\u636e\u65f6\u4f1a\u4f7f\u7528\u968f\u673a\u7aef\u53e3\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u8fd4\u56de\uff1a"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"err\uff1a 0\u8868\u793a\u521b\u5efaUDP\u7f51\u7edc\u5bf9\u8c61\u6210\u529f \uff0c1\u8868\u793a\u521b\u5efaUDP\u7f51\u7edc\u5bf9\u8c61\u5931\u8d25\u3002"}),"\n",(0,l.jsx)(n.li,{children:"socket\uff1a\u521b\u5efa\u7684socket\u5bf9\u8c61\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b1\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'-- \u521b\u5efaUDP\u670d\u52a1\u7aef\u3002\nlocal ip="192.168.5.25" -- \u5916\u90e8\u8bbe\u5907\u5982\u76f8\u673a\u7684IP\u5730\u5740\u4f5c\u4e3a\u5bf9\u7aef\u7684IP\u5730\u5740\nlocal port=6001 -- \u672c\u7aef\u548c\u5bf9\u7aef\u90fd\u4f7f\u7528\u8be5\u7aef\u53e3\nlocal err=0\nlocal socket=0\nerr, socket = UDPCreate(true, ip, port)\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b2\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'-- \u521b\u5efaUDP\u5ba2\u6237\u7aef\u3002\nlocal ip="192.168.5.25" -- \u5916\u90e8\u8bbe\u5907\u5982\u76f8\u673a\u7684IP\u5730\u5740\u4f5c\u4e3a\u5bf9\u7aef\u7684IP\u5730\u5740\nlocal port=6001 -- \u5bf9\u7aef\u7aef\u53e3\nlocal err=0\nlocal socket=0\nerr, socket = UDPCreate(false, ip, port)\n'})}),"\n",(0,l.jsx)(n.h2,{id:"udpread",children:"UDPRead"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"UDPRead(socket, timeout, type)\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,l.jsx)(n.p,{children:"\u63a5\u6536UDP\u5bf9\u7aef\u53d1\u9001\u7684\u6570\u636e\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"socket\uff1a\u5df2\u521b\u5efa\u7684socket\u5bf9\u8c61\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u53ef\u9009\u53c2\u6570\uff1a"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"timeout\uff1a\u7b49\u5f85\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u79d2\u3002\u5982\u679c\u4e0d\u8bbe\u7f6e\u6216\u8bbe\u7f6e\u4e3a\u5c0f\u4e8e\u7b49\u4e8e0\u7684\u503c\uff0c\u4f1a\u4e00\u76f4\u7b49\u5f85\u76f4\u5230\u8bfb\u53d6\u5b8c\u6570\u636e\u518d\u5f80\u4e0b\u6267\u884c\uff1b\u5982\u679c\u8bbe\u4e3a\u5927\u4e8e0\u7684\u503c\uff0c\u5219\u8d85\u8fc7\u8bbe\u5b9a\u7684\u65f6\u95f4\u540e\u4f1a\u76f4\u63a5\u5f80\u4e0b\u6267\u884c\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:'type\uff1a\u8fd4\u56de\u503c\u7c7b\u578b\u3002\u5982\u679c\u4e0d\u8bbe\u7f6e\u6216\u8bbe\u7f6e\u4e3a"table"\uff0c\u5219RecBuf\u7f13\u5b58\u683c\u5f0f\u4e3atable\u5f62\u5f0f\uff1b\u5982\u679c\u8bbe\u7f6e\u4e3a\u201cstring\u201d\uff0c\u5219RecBuf\u7f13\u5b58\u4e3a\u5b57\u7b26\u4e32\u3002'}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u8fd4\u56de\uff1a"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"err\uff1a 0\u8868\u793a\u63a5\u6536\u6570\u636e\u6210\u529f \uff0c1\u8868\u793a\u63a5\u6536\u6570\u636e\u5931\u8d25\u3002"}),"\n",(0,l.jsx)(n.li,{children:"Recbuf\uff1a\u63a5\u6536\u6570\u636e\u7f13\u5b58\u533a\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'-- \u63a5\u6536UDP\u6570\u636e\uff0c\u63a5\u6536\u7684\u6570\u636e\u5206\u522b\u4fdd\u5b58\u4e3a\u5b57\u7b26\u4e32\u548ctable\u5f62\u5f0f\u3002\n-- socket\u4e3aUDPCreate\u6210\u529f\u8fd4\u56de\u7684socket\u5bf9\u8c61\nerr, RecBuf = UDPRead(socket,0,"string") -- RecBuf\u6570\u636e\u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\nerr, RecBuf = UDPRead(socket, 0) -- RecBuf\u6570\u636e\u7c7b\u578b\u4e3atable\n'})}),"\n",(0,l.jsx)(n.h2,{id:"udpwrite",children:"UDPWrite"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"UDPWrite(socket, buf, timeout)\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,l.jsx)(n.p,{children:"\u53d1\u9001\u6570\u636e\u7ed9UDP\u5bf9\u7aef\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"socket\uff1a\u5df2\u521b\u5efa\u7684socket\u5bf9\u8c61\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"buf\uff1a\u8981\u53d1\u9001\u7684\u6570\u636e\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u53ef\u9009\u53c2\u6570\uff1a"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"timeout\uff1a\u7b49\u5f85\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u79d2\u3002\u5982\u679c\u4e0d\u8bbe\u7f6e\u6216\u8bbe\u7f6e\u4e3a0\uff0c\u4f1a\u4e00\u76f4\u7b49\u5f85\u76f4\u5230\u5bf9\u7aef\u63a5\u6536\u5b8c\u6570\u636e\u518d\u5f80\u4e0b\u6267\u884c\uff1b\u5982\u679c\u4e0d\u4e3a0\uff0c\u5219\u8d85\u8fc7\u8bbe\u5b9a\u7684\u65f6\u95f4\u540e\u4f1a\u76f4\u63a5\u5f80\u4e0b\u6267\u884c\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u8fd4\u56de\uff1a"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u53d1\u9001\u7ed3\u679c\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"0\uff1a\u53d1\u9001\u6210\u529f\u3002"}),"\n",(0,l.jsx)(n.li,{children:"1\uff1a\u53d1\u9001\u5931\u8d25"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'-- \u53d1\u9001UDP\u6570\u636e\uff0c\u6570\u636e\u5185\u5bb9\u4e3a\u201ctest\u201d\u3002\nUDPWrite(socket, "test") -- socket\u4e3aUDPCreate\u6210\u529f\u8fd4\u56de\u7684socket\u5bf9\u8c61\n'})})]})}function j(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},3327:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var l=s(2155);const r={},c=l.createContext(r);function i(e){const n=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);