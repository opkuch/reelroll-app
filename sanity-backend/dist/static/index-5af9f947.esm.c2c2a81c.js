import{s as h,a3 as g,r as l,e as p,P as v,j as s,bN as x,aj as w,ct as I,af as _,aH as k,ak as H,bA as E}from"./sanity.4e7fb971.js";import{u as S}from"./index-71beeb8c.esm.e8460242.js";import"./index.ece6187c.js";const B=["index","pane","paneKey"],D=["child","component","menuItems","menuItemGroups","title","type"];var f;function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(r){C(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(e==null)return{};var n=L(e,t),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function L(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function A(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function G(e){const{actionHandlers:t,index:n,menuItems:r,menuItemGroups:o,title:a}=e,{features:i}=S();return!(r!=null&&r.length)&&!a?null:s(w,{actions:s(I,{menuItems:r,menuItemGroups:o,actionHandlers:t}),backButton:i.backButton&&n>0&&s(_,{as:k,"data-as":"a",icon:H,mode:"bleed"}),title:a})}const K=h(g)(f||(f=A([`
  position: relative;
`])));function T(e){const{children:t}=e,{collapsed:n}=E();return s(K,{hidden:n,height:"fill",overflow:"auto",children:t})}function V(e){const{index:t,pane:n,paneKey:r}=e,o=m(e,B),{child:a,component:i,menuItems:O,menuItemGroups:b,title:P="",type:U}=n,y=m(n,D),[u,j]=l.exports.useState(null);return p(v,{id:r,minWidth:320,selected:o.isSelected,children:[s(G,{actionHandlers:u==null?void 0:u.actionHandlers,index:t,menuItems:O,menuItemGroups:b,title:P}),p(T,{children:[x.exports.isValidElementType(i)&&l.exports.createElement(i,c(c(c(c({},o),y),{ref:j}),{},{child:a,paneKey:r})),l.exports.isValidElement(i)&&i]})]})}export{V as default};
