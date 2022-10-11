"use strict";(self.webpackChunkshiryoku=self.webpackChunkshiryoku||[]).push([[705],{561:function(e,t,n){var r=n(4165),i=n(5861),o=n(9439),s=n(2791),a=n(6015),c=n(3978),l=n(4565),u=n(5152),d=n(3811),h=n(6992),p=n(5702),x=n(4162),f=n(5209),Z=n(277),m=n(5953),g=n(6650),v=n(580),j=n(5758),w=n(983),b=n(194),k=n(2898),y=n(4456),C=n(4259),S=n(184),R=(0,Z.ZP)(m.ZP)({}),T=(0,Z.ZP)(g.Z)({padding:"1em",height:"100%"}),P=(0,Z.ZP)(a.Z)({display:"flex",alignItems:"center",justifyContent:"center",alignSelf:"flex-end",marginLeft:"auto"});t.Z=function(e){var t,n=(0,y.T)(),Z=(0,s.useState)(null),m=(0,o.Z)(Z,2),g=m[0],W=m[1],U=Boolean(g),z=function(){W(null)},E=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.clipboard.writeText(e.url);case 3:n((0,C.OV)({message:"".concat(e.name," URL Copied to Clipboard!"),type:"success"})),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),n((0,C.OV)({message:"Unable to copy URL, try again later.",type:"error"}));case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}(),D=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={url:e.url,title:"".concat(e.name," from Shiryoku by Kunal Keshan"),text:e.description},t.next=4,navigator.share(n);case 4:t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}();return(0,S.jsx)(R,{item:!0,xs:12,lg:5,children:(0,S.jsxs)(T,{elevation:3,children:[(0,S.jsxs)(a.Z,{display:"flex",alignItems:"center",width:"100%",flexWrap:"wrap",children:[(0,S.jsx)(c.Z,{src:null!==(t=null===e||void 0===e?void 0:e.icon)&&void 0!==t?t:null===e||void 0===e?void 0:e.name,sx:{mr:2,cursor:"pointer"},imgProps:{loading:"lazy"}}),(0,S.jsxs)("div",{children:[(0,S.jsxs)(l.Z,{variant:"body1",fontWeight:600,maxWidth:"200px",sx:{display:"flex",alignItems:"center",gap:"0.2em"},children:[e.name,(0,S.jsx)(u.Z,{title:"Copy resource url to clipboard",children:(0,S.jsx)(b.Z,{onClick:E,sx:{fontSize:"1em",cursor:"pointer",borderRadius:"50%"}})})]}),(0,S.jsx)("div",{style:{overflow:"hidden",textOverflow:"ellipsis",width:"20ch"},children:(0,S.jsx)(u.Z,{title:e.description,arrow:!0,followCursor:!0,placement:"bottom",children:(0,S.jsx)(l.Z,{variant:"caption",noWrap:!0,children:e.description})})})]}),(0,S.jsxs)(P,{children:[(0,S.jsx)(u.Z,{title:"Visit Website",arrow:!0,followCursor:!0,placement:"bottom",children:(0,S.jsx)(d.Z,{href:e.url,target:"_blank",children:(0,S.jsx)(w.Z,{})})}),e.github&&(0,S.jsx)(u.Z,{title:"View Open Source Code",arrow:!0,followCursor:!0,placement:"bottom",children:(0,S.jsx)(d.Z,{href:null===e||void 0===e?void 0:e.github,target:"_blank",children:(0,S.jsx)(j.Z,{})})}),(0,S.jsx)(u.Z,{title:"Share ".concat(e.name),arrow:!0,followCursor:!0,placement:"bottom",children:(0,S.jsx)(d.Z,{onClick:D,children:(0,S.jsx)(v.Z,{})})}),(0,S.jsx)(u.Z,{title:"More Options",arrow:!0,followCursor:!0,placement:"bottom",children:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(d.Z,{onClick:function(e){W(e.currentTarget)},children:(0,S.jsx)(k.Z,{})}),(0,S.jsxs)(h.Z,{id:"basic-menu",anchorEl:g,open:U,onClose:z,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,S.jsx)(p.Z,{onClick:function(){window.open("https://github.com/kunalkeshan/Shiryoku/issues"),z()},children:"Report Resource"}),(0,S.jsx)(p.Z,{onClick:function(){window.open("https://github.com/kunalkeshan/Shiryoku/blob/main/src/data/tags.json"),z()},children:"Edit Tags"})]})]})})]})]}),(0,S.jsx)(x.Z,{direction:"row",flexWrap:"wrap",mt:2,children:e.tags.map((function(e){return(0,S.jsx)(f.Z,{label:e,size:"small",sx:{fontSize:"0.6rem",padding:"0.1em 0.2em",fontWeight:"bold",margin:"0.2em"}},e)}))})]})})}},9705:function(e,t,n){n.r(t),n.d(t,{default:function(){return X}});var r=n(2791),i=n(4565),o=n(1872),s=n(277),a=n(6015),c=n(1413),l=n(4165),u=n(5861),d=n(9439),h=n(9434),p=n(5506),x=n(5209),f=n(7205),Z=n(4162),m=n(9454),g=n(5584),v=n(4259),j=n(4456),w=n(3504),b=n(788),k=n(464),y=n(3118),C=n(5651),S=n(7985),R=n(8856),T=n(3116),P=n(8003),W=n(6802),U=n(184),z=(0,s.ZP)(a.Z)({display:"flex",flexDirection:"column"}),E=function(){var e=(0,r.useState)(0),t=(0,d.Z)(e,2),n=t[0],o=t[1],s=(0,r.useState)(0),a=(0,d.Z)(s,2),c=a[0],h=a[1];return(0,r.useEffect)((function(){var e=function(){var e=(0,u.Z)((0,l.Z)().mark((function e(){var n,r,i,s,a,c;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.Resources.getTotalResources();case 2:return n=e.sent,e.next=5,p.Z.Roadmaps.getTotalRoadmaps();case 5:for(r=e.sent,i=function(e){t(25,(function(){return o(e)}))},s=0;s<=n;s++)i(s);for(a=function(e){t(100,(function(){return h(e)}))},c=0;c<=r;c++)a(c);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function t(e,t){return setTimeout(t,e)}e()}),[]),(0,U.jsxs)(z,{children:[(0,U.jsxs)(i.Z,{variant:"body1",children:[n,"+ Resources"]}),(0,U.jsxs)(i.Z,{variant:"body1",children:[c,"+ Roadmaps"]}),(0,U.jsx)(i.Z,{variant:"caption",children:"and counting more"})]})},D=[{image:R,label:"Sort resources using Tags",text:'Use tags to sort the specific resources that you are looking for. When needed, use the "Clear Tags" button to clear all selected tags.'},{image:T,label:"Search for Resources",text:"Search for resources based on the name, description and tags associated to it. Clear the search when you're done searching."},{image:P,label:"Share and visit resource",text:'Use the "Copy the URL to your clipboard" to share the URL directly, or visit the website, the GitHub repo (if open source) and share it optionally where you need to.'},{image:W,label:"Use Roadmaps",text:"Roadmaps is an organized approach to Resources. Share the roadmap with others, and use it to follow a structured learning path."}],O=(0,s.ZP)(a.Z)({display:"none",width:"100%",alignItems:"center",justifyContent:"center",flexDirection:"column",img:{width:"80%",margin:"1em auto",borderRadius:"4px"}}),I=function(e){var t=e.open,n=e.setOpen,o=(0,r.useState)(0),s=(0,d.Z)(o,2),l=s[0],u=s[1],h=(0,r.useState)(new Set),p=(0,d.Z)(h,2),x=p[0],Z=p[1],m=function(e){return 10===e},g=function(e){return x.has(e)},v=function(){n(!1),u(0),Z(new Set)};return(0,U.jsxs)(b.Z,{onClose:v,open:t,children:[(0,U.jsx)(k.Z,{children:"How to Use?"}),(0,U.jsxs)(a.Z,{sx:{width:"100%",padding:"1em"},children:[(0,U.jsx)(y.Z,{activeStep:l,children:D.map((function(e,t){var n={},r={};return m(t)&&(r.optional=(0,U.jsx)(i.Z,{variant:"caption",children:"Optional"})),g(t)&&(n.completed=!1),(0,U.jsx)(C.Z,(0,c.Z)((0,c.Z)({},n),{},{children:(0,U.jsx)(S.Z,(0,c.Z)((0,c.Z)({},r),{},{children:e.label}))}),e.label)}))}),l===D.length?(0,U.jsxs)(r.Fragment,{children:[(0,U.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,U.jsx)("img",{src:"/logo512.png",alt:"Shiryoku",style:{width:"30%",height:"auto",margin:"1em auto"}}),(0,U.jsxs)(i.Z,{sx:{mt:2,mb:1},children:["You've successfully seen how to use"," ",(0,U.jsx)("b",{children:"Shiryoku"}),".",(0,U.jsxs)("p",{children:["If there's any issues with the app, feel free to ",(0,U.jsx)(w.rU,{to:"/contact",children:"contact"})," ","and improve this project"]})]}),(0,U.jsx)(E,{})]}),(0,U.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"row",pt:2},children:[(0,U.jsx)(a.Z,{sx:{flex:"1 1 auto"}}),(0,U.jsx)(f.Z,{onClick:function(){u(0)},children:"Reset"}),(0,U.jsx)(f.Z,{onClick:v,children:"Close"})]})]}):(0,U.jsxs)(r.Fragment,{children:[D.map((function(e,t){return(0,U.jsxs)(O,{sx:(0,c.Z)({},l===t&&{display:"flex"}),children:[(0,U.jsx)("img",{src:e.image,alt:e.label,loading:"lazy"}),(0,U.jsx)(i.Z,{variant:"body1",width:"80%",mx:"auto",children:e.text})]},t)})),(0,U.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"row",pt:2},children:[(0,U.jsx)(f.Z,{color:"inherit",disabled:0===l,onClick:function(){u((function(e){return e-1}))},sx:{mr:1},children:"Back"}),(0,U.jsx)(a.Z,{sx:{flex:"1 1 auto"}}),m(l)&&(0,U.jsx)(f.Z,{color:"inherit",onClick:function(){if(!m(l))throw new Error("You can't skip a step that isn't optional.");u((function(e){return e+1})),Z((function(e){var t=new Set(e.values());return t.add(l),t}))},sx:{mr:1},children:"Skip"}),(0,U.jsx)(f.Z,{onClick:function(){var e=x;g(l)&&(e=new Set(e.values())).delete(l),u((function(e){return e+1})),Z(e)},children:l===D.length-1?"Finish":"Next"})]})]})]})]})},L=(0,s.ZP)(Z.Z)({flexWrap:"wrap",flexDirection:"row",gap:2,marginTop:4,maxHeight:"200px",overflow:"auto",padding:1,"&::-webkit-scrollbar":{width:"0.2em"},"&::-webkit-scrollbar-track":{boxShadow:"inset 0 0 6px rgba(0,0,0,0.00)",webkitBoxShadow:"inset 0 0 6px rgba(0,0,0,0.00)"},"&::-webkit-scrollbar-thumb":{backgroundColor:"rgba(0,0,0,.1)",borderRadius:"4px"}}),F=function(){var e=(0,j.T)(),t=(0,h.v9)((function(e){return e.app})).selectedTags,n=(0,r.useState)([]),o=(0,d.Z)(n,2),s=o[0],Z=o[1],w=(0,r.useState)(!1),b=(0,d.Z)(w,2),k=b[0],y=b[1],C=function(t){return function(){e((0,v.Qt)(t))}};(0,r.useEffect)((function(){var e=function(){var e=(0,u.Z)((0,l.Z)().mark((function e(){var t;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.Tags.getTags();case 2:t=e.sent,Z(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();0===s.length&&e()}),[s]),(0,r.useEffect)((function(){var n=function(){var n=(0,u.Z)((0,l.Z)().mark((function n(){var r;return(0,l.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.Z.Resources.getResources(void 0,void 0,t);case 2:r=n.sent,e((0,v.xb)(r));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();t.length>=0&&n()}),[t,e]);var S={backgroundColor:"#0288d180","&:hover":{backgroundColor:"#0288d1 !important"}};return(0,U.jsxs)(a.Z,{children:[(0,U.jsxs)(i.Z,{mt:2,fontWeight:600,variant:"body2",children:[(0,U.jsx)(m.Z,{sx:{fontSize:"inherit"}})," Tags"," ",(0,U.jsxs)(i.Z,{component:"span",variant:"subtitle2",children:["| Click to filter resources"," "]}),t.length>0&&(0,U.jsx)(x.Z,{label:"Clear All Tags",size:"small",color:"error",variant:"outlined",sx:{transform:"scale(0.8)"},onClick:function(){e((0,v.t8)())}})]}),(0,U.jsx)(L,{children:s.length>0&&s.map((function(n){return(0,U.jsx)(x.Z,{label:n,sx:(0,c.Z)({cursor:"pointer",transition:"all 200ms","&:hover":{},"@media(min-width: 800px)":{margin:"0.1em"}},t.includes(n)?S:{}),size:"small",variant:"outlined",onClick:function(){return function(t){e((0,v.Qt)(t))}(n)},onDelete:t.includes(n)?C(n):void 0},n)}))}),(0,U.jsx)(f.Z,{startIcon:(0,U.jsx)(g.Z,{}),variant:"text",sx:{mt:2},onClick:function(){return y(!0)},children:"How to use?"}),(0,U.jsx)(I,{open:k,setOpen:y})]})},H=n(29),V=n(6283),A=n(5403),B=function(){var e=(0,j.T)(),t=(0,h.v9)((function(e){return e.app})).selectedTags,n=(0,r.useState)(""),i=(0,d.Z)(n,2),o=i[0],s=i[1];return(0,r.useEffect)((function(){var n=function(){var n=(0,u.Z)((0,l.Z)().mark((function n(r){var i;return(0,l.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.Z.Resources.getResources(void 0,void 0,t,r);case 2:i=n.sent,e((0,v.xb)(i));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();o&&n(o),o||n()}),[o,e,t]),(0,U.jsxs)(a.Z,{mb:2,children:[(0,U.jsx)(H.Z,{type:"text",variant:"outlined",fullWidth:!0,label:"Search",placeholder:"Search for awesome resources...",value:o,onChange:function(e){return s(e.target.value)},autoComplete:"off",InputProps:{endAdornment:(0,U.jsx)(A.Z,{})}}),o&&(0,U.jsx)(V.Z,{mt:0,fontSize:8,sx:{cursor:"pointer"},onClick:function(){return s("")},children:"Clear search"})]})},K=n(4585),M=n(5953),N=n(561),Q=(0,s.ZP)(a.Z)({width:"65%",padding:"0.5em","@media(max-width: 800px)":{width:"100%"}}),Y=(0,s.ZP)(M.ZP)({gap:4}),_=function(){var e=(0,j.T)(),t=(0,h.v9)((function(e){return e.app})).currentResources,n=(0,r.useState)({page:1,limit:20,total:0}),o=(0,d.Z)(n,2),s=o[0],x=o[1];(0,r.useEffect)((function(){var e=function(){var e=(0,u.Z)((0,l.Z)().mark((function e(){var t;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.Resources.getTotalPages();case 2:t=e.sent,x((function(e){return(0,c.Z)((0,c.Z)({},e),{},{total:t})}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();0===s.total&&e()}),[s.total]),(0,r.useEffect)((function(){var n=function(){var t=(0,u.Z)((0,l.Z)().mark((function t(){var n;return(0,l.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.Z.Resources.getResources(s.page,void 0);case 2:n=t.sent,e((0,v.xb)(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();(0===t.length||s.page>=1)&&n()}),[s.page,e]);return(0,U.jsxs)(Q,{children:[(0,U.jsx)(Y,{container:!0,spacing:1,gridTemplateColumns:{xs:2},children:(null===t||void 0===t?void 0:t.length)>0?t.map((function(e,t){return(0,U.jsx)(N.Z,(0,c.Z)({},e),t)})):(0,U.jsx)(a.Z,{children:(0,U.jsxs)(i.Z,{variant:"h5",textAlign:"center",children:["\ud83d\ude22 No Resources Found for Selected Tags or Search. Know some Resources?"," ",(0,U.jsx)(w.rU,{to:"/contribute",children:"Contribute now!"})]})})}),(0,U.jsx)(Z.Z,{spacing:2,mt:2,children:(0,U.jsx)(K.Z,{count:s.total,page:s.page,onChange:function(e,t){x((function(e){return(0,c.Z)((0,c.Z)({},e),{},{page:t})}))}})})]})},G=(0,s.ZP)(a.Z)({width:"100%"}),q=(0,s.ZP)(a.Z)({width:"100%",height:"100%",display:"flex",marginTop:"1em",gap:"1em","@media(max-width: 800px)":{flexDirection:"column-reverse"}}),J=(0,s.ZP)(a.Z)({width:"35%",borderRadius:"8px",background:"#e3f2fd",padding:"1em",height:"fit-content","@media(max-width: 800px)":{width:"100%"},"@media(min-width:800px)":{position:"sticky",top:"100px"}}),X=function(){return(0,U.jsxs)(G,{children:[(0,U.jsxs)(i.Z,{variant:"h6",noWrap:!0,children:["Resources"," ",(0,U.jsx)(i.Z,{variant:"caption",component:"span",children:"that will blow your mind!"})]}),(0,U.jsx)(o.Z,{variant:"fullWidth"}),(0,U.jsxs)(q,{children:[(0,U.jsx)(_,{}),(0,U.jsxs)(J,{id:"cta",children:[(0,U.jsx)(B,{}),(0,U.jsx)(o.Z,{variant:"fullWidth"}),(0,U.jsx)(F,{})]})]})]})}}}]);
//# sourceMappingURL=705.ddc31b31.chunk.js.map