"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[714],{714:function(n,e,t){t.r(e),t.d(e,{default:function(){return qn}});var i,r,o,a,s,c,d,x,p,l,f,u,h,m,g,Z,y,w,j,b,v,k,z,C,S,T,I,B,M,N,_,F,q,E=t(439),L=t(791),P=t(168),W=t(686),A=W.Z.ul(i||(i=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n  }\n\n  @media screen and (min-width: 1024px) {\n    gap: 12px;\n  }\n"]))),U=W.Z.button(r||(r=(0,P.Z)(["\n  background-color: #f9f9f9;\n  padding: 8px 12px;\n  border-radius: 30px;\n  font-weight: bold;\n  font-size: 13px;\n  transition: background-color 250ms ease;\n  border: none;\n  color: inherit;\n  cursor: pointer;\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    font-size: 16px;\n  }\n\n  &:hover {\n    background-color: lightgrey;\n  }\n\n  &:active {\n    background-color: lightgrey;\n  }\n\n  &.active {\n    background-color: #282828;\n    color: #fff;\n  }\n"]))),V=t(184),X=["\u0412\u0441\u0456","\u041c'\u044f\u0441\u043d\u0456","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0456\u0430\u043d\u0441\u044c\u043a\u0456","\u0413\u0440\u0438\u043b\u044c","\u0413\u043e\u0441\u0442\u0440\u0456","\u0417\u0430\u043a\u0440\u0438\u0442\u0456"],D=function(n){var e=n.categoryId,t=n.onCategoryClick;return(0,V.jsx)(A,{children:X.map((function(n,i){return(0,V.jsx)("li",{children:(0,V.jsx)(U,{onClick:function(){return t(i)},className:e===i?"active":"",children:n})},i)}))})},G=t(763),H=W.Z.div(o||(o=(0,P.Z)(["\n  position: relative;\n  user-select: none;\n"]))),J=W.Z.div(a||(a=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),K=(0,W.Z)(G.rBm)(s||(s=(0,P.Z)(["\n  margin-right: 6px;\n  cursor: pointer;\n  transition: all 250ms ease;\n\n  &:hover {\n    transform: scale(1.5);\n  }\n"]))),O=W.Z.div(c||(c=(0,P.Z)([""]))),Q=(0,W.Z)(G.WMq)(d||(d=(0,P.Z)(["\n  margin-right: 6px;\n  cursor: pointer;\n  transition: all 250ms ease;\n\n  &:hover {\n    transform: scale(1.5);\n  }\n"]))),R=W.Z.b(x||(x=(0,P.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 13px;\n  line-height: 17px;\n  letter-spacing: 0.015em;\n  color: #2c2c2c;\n  margin-right: 8px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    font-size: 16px;\n  }\n"]))),Y=W.Z.p(p||(p=(0,P.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.015em;\n  color: #fe5f1e;\n  paddig-bottom: 1px;\n  user-select: none;\n  text-align: center;\n\n  border-bottom: 1px dashed #fe5f1e;\n  cursor: pointer;\n\n  @media screen and (min-width: 768px) {\n    font-size: 15px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    font-size: 16px;\n  }\n"]))),$=W.Z.div(l||(l=(0,P.Z)(["\n  position: absolute;\n  z-index: 999;\n  right: 0;\n  margin-top: 8px;\n  padding: 6px 0;\n  background: #ffffff;\n  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);\n  border-radius: 10px;\n  overflow: hidden;\n\n  @media screen and (min-width: 768px) {\n    font-size: 15px;\n    padding: 10px 0;\n    margin-top: 12px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    font-size: 16px;\n    padding: 10px 0;\n    margin-top: 14px;\n  }\n"]))),nn=W.Z.ul(f||(f=(0,P.Z)(["\n  overflow: hidden;\n  text-align: end;\n"]))),en=W.Z.li(u||(u=(0,P.Z)(["\n  padding: 6px 12px;\n  cursor: pointer;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 17px;\n  letter-spacing: 0.015em;\n  color: #000000;\n  min-width: 100px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n    padding: 12px 20px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    font-size: 16px;\n    padding: 16px 24px;\n  }\n\n  &:hover {\n    background: rgba(254, 95, 30, 0.05);\n    color: #fe5f1e;\n  }\n\n  &.active {\n    font-weight: 700;\n    color: #fe5f1e;\n  }\n"]))),tn=[{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0456",value:"rating"},{name:"\u0446\u0456\u043d\u0456 \u2b07",value:"-price"},{name:"\u0446\u0456\u043d\u0456 \u2b06",value:"price"},{name:"\u0430\u043b\u0444\u0430\u0432\u0456\u0442\u0443",value:"title"}],rn=function(n){var e=n.onSortTypeClick,t=n.selectedSortType,i=(0,L.useState)(!1),r=(0,E.Z)(i,2),o=r[0],a=r[1],s=function(){return a((function(n){return!n}))};return(0,V.jsxs)(H,{children:[(0,V.jsxs)(J,{children:[o?(0,V.jsx)(K,{onClick:s}):(0,V.jsx)(Q,{onClick:s}),(0,V.jsxs)(O,{children:[(0,V.jsx)(R,{children:"\u0421\u043e\u0442\u0440\u0443\u0432\u0430\u043d\u043d\u044f \u0437\u0430:"}),(0,V.jsx)(Y,{onClick:s,children:t.name})]})]}),o&&(0,V.jsx)($,{children:(0,V.jsx)(nn,{children:tn.map((function(n,i){return(0,V.jsx)(en,{onClick:function(){return function(n){e(n),a((function(n){return!n}))}(n)},className:t.name===n.name?"active":"",children:n.name},i)}))})})]})},on=W.Z.div(h||(h=(0,P.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin: 20px auto;\n\n  @media screen and (min-width: 768px) {\n    align-items: center;\n    margin: 30px auto;\n  }\n\n  @media screen and (min-width: 1024px) {\n    margin: 44px auto;\n  }\n"]))),an=function(n){var e=n.categoryId,t=n.selectedSortType,i=n.onCategoryClick,r=n.onSortTypeClick;return(0,V.jsxs)(on,{children:[(0,V.jsx)(D,{categoryId:e,onCategoryClick:i}),(0,V.jsx)(rn,{selectedSortType:t,onSortTypeClick:r})]})},sn=t(433),cn=W.Z.li(m||(m=(0,P.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 280px;\n  justify-content: space-between;\n  text-align: center;\n  padding: 8px 6px;\n  transition: all 250ms ease;\n  background: #ebddba;\n  border-radius: 16px;\n  margin: 0 auto;\n\n  @media screen and (min-width: 768px) {\n    max-width: 280px;\n    padding: 20px 16px;\n    margin: 0;\n  }\n\n  &:hover {\n    transform: scale(1.02);\n  }\n"]))),dn=W.Z.div(g||(g=(0,P.Z)(["\n  display: flex;\n  z-index: 10;\n  justify-content: center;\n  align-items: center;\n"]))),xn=W.Z.img(Z||(Z=(0,P.Z)(["\n  transition: all 250ms ease;\n  border-radius: 50%;\n  user-select: none;\n  width: 240px;\n  height: 240px;\n\n  @media screen and (min-width: 768px) {\n    width: 248px;\n    height: 248px;\n  }\n\n  &:hover {\n    transform: scale(1.05);\n    transform: rotate(30deg);\n  }\n"]))),pn=W.Z.h3(y||(y=(0,P.Z)(["\n  font-style: normal;\n  font-weight: 800;\n  font-size: 18px;\n  line-height: 24px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #000000;\n  z-index: 999;\n  margin: 8px auto 12px;\n\n  @media screen and (min-width: 768px) {\n    min-height: 48px;\n    margin-top: 18px;\n    font-size: 20px;\n    line-height: 24px;\n  }\n"]))),ln=W.Z.button(w||(w=(0,P.Z)(["\n  display: block;\n  justify-contet: center;\n  align-items: center;\n  cursor: pointer;\n  text-align: center;\n  margin: 0 auto 16px;\n  user-select: none;\n\n  background: rgb(65, 147, 65);\n  padding: 4px 20px;\n  border: none;\n  color: #fff;\n  border-radius: 20px;\n  font-weight: 600;\n  font-size: 13px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n    margin: 0 auto 20px;\n  }\n"]))),fn=W.Z.ul(j||(j=(0,P.Z)(["\n  position: absolute;\n  top: 8px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 240px;\n  height: 240px;\n  background: rgb(65, 147, 65);\n  border-radius: 12px;\n  padding: 12px 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: start;\n  font-weight: 600;\n  font-size: 15px;\n  list-style-type: disc;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    width: 248px;\n    height: 248px;\n    top: 20px;\n  }\n"]))),un=W.Z.li(b||(b=(0,P.Z)(["\n  margin-left: 36px;\n  color: #fff;\n"]))),hn=W.Z.div(v||(v=(0,P.Z)(["\n  display: flex;\n  background-color: lightgrey;\n  border-radius: 10px;\n  flex-direction: column;\n  padding: 6px;\n  user-select: none;\n"]))),mn=W.Z.ul(k||(k=(0,P.Z)(["\n  display: flex;\n  flex: 1;\n\n  &:first-of-type {\n    margin-bottom: 6px;\n  }\n"]))),gn=W.Z.li(z||(z=(0,P.Z)(["\n  padding: 8px;\n  flex: 1;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 13px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n\n  &.active {\n    background: #ffffff;\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);\n    border-radius: 5px;\n    cursor: auto;\n  }\n"]))),Zn=W.Z.div(C||(C=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n\n  justify-content: space-between;\n  margin-top: 24px;\n  padding: 0 6px;\n  flex: 2;\n"]))),yn=W.Z.div(S||(S=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),wn=W.Z.p(T||(T=(0,P.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 22px;\n  letter-spacing: 0.015em;\n  color: #000000;\n  margin-right: 4px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 22px;\n    line-height: 27px;\n  }\n"]))),jn=W.Z.button(I||(I=(0,P.Z)(["\n  display: flex;\n  flex: 5;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  padding: 6px 12px;\n  background: #ffffff;\n  border: 1px solid #eb5a1e;\n  border-radius: 30px;\n  gap: 4px;\n  color: #eb5a1e;\n  cursor: pointer;\n  max-width: 160px;\n\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n\n  transition: all 200ms ease;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    min-width: 142px;\n    padding: 6px 12px;\n  }\n\n  &:hover {\n    background: #fe5f1e;\n    border: 1px solid #fe5f1e;\n    color: #ffffff;\n  }\n"]))),bn=W.Z.div(B||(B=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n"]))),vn=W.Z.button(M||(M=(0,P.Z)(["\n  border: none;\n  background: transparent;\n  height: 20px;\n  cursor: pointer;\n"]))),kn=(0,W.Z)(G.rBm)(N||(N=(0,P.Z)(["\n  transition: all 250ms ease;\n  color: #212121;\n"]))),zn=(0,W.Z)(G.WMq)(_||(_=(0,P.Z)(["\n  transition: all 250ms ease;\n\n  &::disabled {\n    color: red;\n  }\n"]))),Cn=t(578),Sn=function(n){var e=n.item,t=e.imageUrl,i=e.title,r=e.types,o=e.sizes,a=e.price,s=e.ingredients,c=(0,L.useState)(0),d=(0,E.Z)(c,2),x=d[0],p=d[1],l=(0,L.useState)(0),f=(0,E.Z)(l,2),u=f[0],h=f[1],m=(0,L.useState)(0),g=(0,E.Z)(m,2),Z=g[0],y=g[1],w=(0,L.useState)(!1),j=(0,E.Z)(w,2),b=j[0],v=j[1],k=["\u0442\u043e\u043d\u043a\u0435","\u0442\u0440\u0430\u0434\u0438\u0446\u0456\u0439\u043d\u0435"],z=function(){return p((function(n){return n+1}))};return(0,V.jsxs)(cn,{children:[(0,V.jsxs)(dn,{children:[(0,V.jsx)(xn,{src:t,alt:"Pizza",loading:"lazy"}),(0,V.jsx)(fn,{style:{opacity:b?.95:0,zIndex:b?111:0},children:s.map((function(n,e){return(0,V.jsx)(un,{children:n},e)}))})]}),(0,V.jsx)(pn,{children:i}),(0,V.jsx)(ln,{onClick:function(){v(!b)},children:"\u0406\u043d\u0433\u0440\u0456\u0434\u0456\u0454\u043d\u0442\u0438"}),(0,V.jsxs)(hn,{children:[(0,V.jsx)(mn,{children:r.map((function(n,e){return(0,V.jsx)(gn,{className:Z===e?"active":"",onClick:function(){return function(n){return y(n)}(e)},children:k[n]},e)}))}),(0,V.jsx)(mn,{children:o.map((function(n,e){return(0,V.jsxs)(gn,{onClick:function(){return function(n){return h(n)}(e)},className:u===e?"active":"",children:[n," \u0441\u043c."]},e)}))})]}),(0,V.jsxs)(Zn,{children:[(0,V.jsxs)(yn,{children:[(0,V.jsx)(wn,{children:30===o[u]?"".concat(Math.round(1.2*a)):40===o[u]?"".concat(Math.round(1.35*a)):"".concat(1*a)}),(0,V.jsx)(Cn.VFe,{size:22,color:"#000000"})]}),(0,V.jsxs)("div",{style:{display:"flex",gap:4},children:[(0,V.jsxs)(bn,{children:[(0,V.jsx)(vn,{size:16,children:(0,V.jsx)(kn,{onClick:z})}),(0,V.jsx)(vn,{size:16,disabled:!(x>0),children:(0,V.jsx)(zn,{onClick:function(){x<=0||p((function(n){return n-1}))}})})]}),(0,V.jsxs)(jn,{onClick:z,children:[(0,V.jsx)("p",{children:" + \u0414\u043e\u0434\u0430\u0442\u0438"}),(0,V.jsx)("i",{children:x>0?x:" "})]})]})]})]})},Tn=t(683),In=t(175),Bn=function(n){return(0,V.jsxs)(In.ZP,(0,Tn.Z)((0,Tn.Z)({speed:2,width:280,height:558,viewBox:"0 0 280 558",backgroundColor:"#e4e2e2",foregroundColor:"#cbc3c3"},n),{},{children:[(0,V.jsx)("rect",{x:"16",y:"378",rx:"16",ry:"16",width:"248",height:"86"}),(0,V.jsx)("rect",{x:"70",y:"330",rx:"16",ry:"16",width:"140",height:"26"}),(0,V.jsx)("rect",{x:"16",y:"498",rx:"16",ry:"16",width:"248",height:"42"}),(0,V.jsx)("circle",{cx:"138",cy:"143",r:"124"}),(0,V.jsx)("rect",{x:"42",y:"281",rx:"16",ry:"16",width:"200",height:"24"})]}))},Mn=W.Z.h2(F||(F=(0,P.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 24px;\n\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin-bottom: 20px;\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    font-size: 32px;\n    line-height: 39px;\n    margin-bottom: 32px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    font-size: 36px;\n    line-height: 42px;\n    margin-bottom: 44px;\n  }\n"]))),Nn=W.Z.ul(q||(q=(0,P.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin: 0 auto;\n  justify-content: center;\n\n  @media screen and (min-width: 768px) {\n    gap: 36px;\n    max-width: 596px;\n    margin: 0 auto;\n    justify-content: start;\n  }\n\n  @media screen and (min-width: 1232px) {\n    gap: 60px;\n    max-width: 960px;\n    justify-content: start;\n  }\n"]))),_n=["\u0412\u0441\u0456","\u041c'\u044f\u0441\u043d\u0456","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0456\u0430\u043d\u0441\u044c\u043a\u0456","\u0413\u0440\u0438\u043b\u044c","\u0413\u043e\u0441\u0442\u0440\u0456","\u0417\u0430\u043a\u0440\u0438\u0442\u0456"],Fn=function(n){var e=n.items,t=n.isLoading,i=n.categoryId;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(Mn,{children:[_n[i]," \u043f\u0456\u0446\u0438"]}),(0,V.jsx)(Nn,{children:t?(0,sn.Z)(new Array(10)).map((function(n,e){return(0,V.jsx)(Bn,{},e)})):e.map((function(n){return(0,V.jsx)(Sn,{item:n},n.id)}))})]})},qn=function(){var n=(0,L.useState)([]),e=(0,E.Z)(n,2),t=e[0],i=e[1],r=(0,L.useState)(!0),o=(0,E.Z)(r,2),a=o[0],s=o[1],c=(0,L.useState)(0),d=(0,E.Z)(c,2),x=d[0],p=d[1],l=(0,L.useState)({name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0456",value:"rating"}),f=(0,E.Z)(l,2),u=f[0],h=f[1];(0,L.useEffect)((function(){var n=x>0?"category=".concat(x):"",e=u.value.includes("-")?"desc":"asc",t=u.value.replace("-","");fetch("https://645604705f9a4f236138e078.mockapi.io/items?".concat(n,"&sortBy=").concat(t,"&order=").concat(e)).then((function(n){return n.json()})).then((function(n){i(n),s(!1)})).catch((function(n){throw new Error(n)}))}),[x,u]);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(an,{categoryId:x,onCategoryClick:function(n){return p(n)},selectedSortType:u,onSortTypeClick:function(n){return h(n)}}),(0,V.jsx)(Fn,{items:t,isLoading:a,categoryId:x})]})}}}]);
//# sourceMappingURL=714.e17e08a6.chunk.js.map