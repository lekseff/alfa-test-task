import{aa as Te,o as ue,c as fe,e as E,aS as ut,m as Z,aT as ot,f as Ne,x as me,y as Oe,g as K,z as he,aw as rt,p as dt,ao as ie,u as X,d as a,S as H,I as J,aU as Q,k as ct,i as Ue,n as vt,aA as ft,v as Ge,w as mt,aV as gt,R as yt,ap as _e,A as ht,B as bt,C as je,E as Vt,K as qe,aW as kt,a1 as le,aC as xt,L as Ct,M as c,N as ae,O as Pe,Q as pt,V as ce,j as ve,aF as we,F as G,aX as He,aG as Ke,aY as We,q as It,G as St,av as Xe,aZ as Fe,a3 as z,an as _t,at as Ye,a5 as q,$ as Pt,aH as Qe,U as wt,X as Ft,P as Bt,a_ as At,a$ as Rt,aq as se,ax as ye,ay as Mt,b0 as Dt,az as $t,b1 as zt,ai as U,b2 as Lt,b3 as Ze,aL as Je,b4 as De,a6 as te,b5 as Et,l as Tt,D as Nt,b6 as $e,b7 as Be,a8 as be,b8 as Ae,_ as Ve,b9 as Ot,ba as Ut,bb as Gt,bc as jt,bd as qt,ag as Ht,ah as Se,ab as ze,af as Kt,be as Wt,ad as Xt,ae as Yt,aN as Qt,al as Zt,am as Jt}from"./index-PpBmr7yP.js";import{m as ea,a as Le,b as et,V as Ee,c as tt}from"./VSlideGroup-DekHjS74.js";import{V as ta,I as at,u as aa}from"./book.store-DDqSv60F.js";import{_ as la}from"./BackButton.vue_vue_type_script_setup_true_lang-nne4B_Ng.js";const na=Te({__name:"PrevPhoto",props:{photo:{}},setup(e){return(s,o)=>(ue(),fe(ta,{src:s.photo,"max-width":"300",class:"border rounded-lg elevation-2"},null,8,["src"]))}}),lt=Symbol.for("vuetify:v-chip-group"),ia=E({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:ut},...ea(),...Z(),...ot({selectedClass:"v-chip--selected"}),...Ne(),...me(),...Oe({variant:"tonal"})},"VChipGroup");K()({name:"VChipGroup",props:ia(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:o}=s;const{themeClasses:n}=he(e),{isSelected:t,select:l,next:u,prev:I,selected:m}=rt(e,lt);return dt({VChip:{color:ie(e,"color"),disabled:ie(e,"disabled"),filter:ie(e,"filter"),variant:ie(e,"variant")}}),X(()=>{const h=Le.filterProps(e);return a(Le,H(h,{class:["v-chip-group",{"v-chip-group--column":e.column},n.value,e.class],style:e.style}),{default:()=>{var d;return[(d=o.default)==null?void 0:d.call(o,{isSelected:t,select:l,next:u,prev:I,selected:m.value})]}})}),{}}});const sa=E({activeClass:String,appendAvatar:String,appendIcon:J,closable:Boolean,closeIcon:{type:J,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:J,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:Q(),onClickOnce:Q(),...ct(),...Z(),...Ue(),...vt(),...ft(),...Ge(),...mt(),...gt(),...Ne({tag:"span"}),...me(),...Oe({variant:"tonal"})},"VChip"),ua=K()({name:"VChip",directives:{Ripple:yt},props:sa(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,s){let{attrs:o,emit:n,slots:t}=s;const{t:l}=_e(),{borderClasses:u}=ht(e),{colorClasses:I,colorStyles:m,variantClasses:h}=bt(e),{densityClasses:d}=je(e),{elevationClasses:b}=Vt(e),{roundedClasses:x}=qe(e),{sizeClasses:v}=kt(e),{themeClasses:A}=he(e),_=le(e,"modelValue"),g=xt(e,lt,!1),y=Ct(e,o),L=c(()=>e.link!==!1&&y.isLink.value),D=c(()=>!e.disabled&&e.link!==!1&&(!!g||e.link||y.isClickable.value)),B=c(()=>({"aria-label":l(e.closeLabel),onClick(V){V.preventDefault(),V.stopPropagation(),_.value=!1,n("click:close",V)}}));function C(V){var S;n("click",V),D.value&&((S=y.navigate)==null||S.call(y,V),g==null||g.toggle())}function r(V){(V.key==="Enter"||V.key===" ")&&(V.preventDefault(),C(V))}return()=>{const V=y.isLink.value?"a":e.tag,S=!!(e.appendIcon||e.appendAvatar),i=!!(S||t.append),k=!!(t.close||e.closable),f=!!(t.filter||e.filter)&&g,R=!!(e.prependIcon||e.prependAvatar),P=!!(R||t.prepend),p=!g||g.isSelected.value;return _.value&&ae(a(V,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":D.value,"v-chip--filter":f,"v-chip--pill":e.pill},A.value,u.value,p?I.value:void 0,d.value,b.value,x.value,v.value,h.value,g==null?void 0:g.selectedClass.value,e.class],style:[p?m.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:y.href.value,tabindex:D.value?0:void 0,onClick:C,onKeydown:D.value&&!L.value&&r},{default:()=>{var w;return[pt(D.value,"v-chip"),f&&a(et,{key:"filter"},{default:()=>[ae(a("div",{class:"v-chip__filter"},[t.filter?a(ve,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},t.filter):a(ce,{key:"filter-icon",icon:e.filterIcon},null)]),[[we,g.isSelected.value]])]}),P&&a("div",{key:"prepend",class:"v-chip__prepend"},[t.prepend?a(ve,{key:"prepend-defaults",disabled:!R,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},t.prepend):a(G,null,[e.prependIcon&&a(ce,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&a(Ee,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),a("div",{class:"v-chip__content","data-no-activator":""},[((w=t.default)==null?void 0:w.call(t,{isSelected:g==null?void 0:g.isSelected.value,selectedClass:g==null?void 0:g.selectedClass.value,select:g==null?void 0:g.select,toggle:g==null?void 0:g.toggle,value:g==null?void 0:g.value.value,disabled:e.disabled}))??e.text]),i&&a("div",{key:"append",class:"v-chip__append"},[t.append?a(ve,{key:"append-defaults",disabled:!S,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},t.append):a(G,null,[e.appendIcon&&a(ce,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&a(Ee,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),k&&a("button",H({key:"close",class:"v-chip__close",type:"button"},B.value),[t.close?a(ve,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},t.close):a(ce,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Pe("ripple"),D.value&&e.ripple,null]])}}}),oa=E({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Z(),...He({transition:{component:tt}})},"VCounter"),Re=K()({name:"VCounter",functional:!0,props:oa(),setup(e,s){let{slots:o}=s;const n=c(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return X(()=>a(Ke,{transition:e.transition},{default:()=>[ae(a("div",{class:["v-counter",{"text-error":e.max&&!e.disabled&&parseFloat(e.value)>parseFloat(e.max)},e.class],style:e.style},[o.default?o.default({counter:n.value,max:e.max,value:e.value}):n.value]),[[we,e.active]])]})),{}}}),ra=E({text:String,onClick:Q(),...Z(),...me()},"VLabel"),da=K()({name:"VLabel",props:ra(),setup(e,s){let{slots:o}=s;return X(()=>{var n;return a("label",{class:["v-label",{"v-label--clickable":!!e.onClick},e.class],style:e.style,onClick:e.onClick},[e.text,(n=o.default)==null?void 0:n.call(o)])}),{}}}),ca=E({floating:Boolean,...Z()},"VFieldLabel"),ge=K()({name:"VFieldLabel",props:ca(),setup(e,s){let{slots:o}=s;return X(()=>a(da,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},o)),{}}});function nt(e){const{t:s}=_e();function o(n){let{name:t}=n;const l={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[t],u=e[`onClick:${t}`],I=u&&l?s(`$vuetify.input.${l}`,e.label??""):void 0;return a(ce,{icon:e[`${t}Icon`],"aria-label":I,onClick:u},null)}return{InputIcon:o}}const it=E({focused:Boolean,"onUpdate:focused":Q()},"focus");function ke(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:We();const o=le(e,"focused"),n=c(()=>({[`${s}--focused`]:o.value}));function t(){o.value=!0}function l(){o.value=!1}return{focusClasses:n,isFocused:o,focus:t,blur:l}}const va=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],xe=E({appendInnerIcon:J,bgColor:String,clearable:Boolean,clearIcon:{type:J,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:J,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>va.includes(e)},"onClick:clear":Q(),"onClick:appendInner":Q(),"onClick:prependInner":Q(),...Z(),...It(),...Ge(),...me()},"VField"),Ce=K()({name:"VField",inheritAttrs:!1,props:{id:String,...it(),...xe()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{attrs:o,emit:n,slots:t}=s;const{themeClasses:l}=he(e),{loaderClasses:u}=St(e),{focusClasses:I,isFocused:m,focus:h,blur:d}=ke(e),{InputIcon:b}=nt(e),{roundedClasses:x}=qe(e),{rtlClasses:v}=Xe(),A=c(()=>e.dirty||e.active),_=c(()=>!e.singleLine&&!!(e.label||t.label)),g=Fe(),y=c(()=>e.id||`input-${g}`),L=c(()=>`${y.value}-messages`),D=z(),B=z(),C=z(),r=c(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:V,backgroundColorStyles:S}=_t(ie(e,"bgColor")),{textColorClasses:i,textColorStyles:k}=Ye(c(()=>e.error||e.disabled?void 0:A.value&&m.value?e.color:e.baseColor));q(A,p=>{if(_.value){const w=D.value.$el,M=B.value.$el;requestAnimationFrame(()=>{const $=Pt(w),F=M.getBoundingClientRect(),T=F.x-$.x,N=F.y-$.y-($.height/2-F.height/2),j=F.width/.75,W=Math.abs(j-$.width)>1?{maxWidth:Qe(j)}:void 0,re=getComputedStyle(w),ne=getComputedStyle(M),ee=parseFloat(re.transitionDuration)*1e3||150,O=parseFloat(ne.getPropertyValue("--v-field-label-scale")),de=ne.getPropertyValue("color");w.style.visibility="visible",M.style.visibility="hidden",wt(w,{transform:`translate(${T}px, ${N}px) scale(${O})`,color:de,...W},{duration:ee,easing:Ft,direction:p?"normal":"reverse"}).finished.then(()=>{w.style.removeProperty("visibility"),M.style.removeProperty("visibility")})})}},{flush:"post"});const f=c(()=>({isActive:A,isFocused:m,controlRef:C,blur:d,focus:h}));function R(p){p.target!==document.activeElement&&p.preventDefault()}function P(p){var w;p.key!=="Enter"&&p.key!==" "||(p.preventDefault(),p.stopPropagation(),(w=e["onClick:clear"])==null||w.call(e,new MouseEvent("click")))}return X(()=>{var T,N,j;const p=e.variant==="outlined",w=!!(t["prepend-inner"]||e.prependInnerIcon),M=!!(e.clearable||t.clear),$=!!(t["append-inner"]||e.appendInnerIcon||M),F=()=>t.label?t.label({...f.value,label:e.label,props:{for:y.value}}):e.label;return a("div",H({class:["v-field",{"v-field--active":A.value,"v-field--appended":$,"v-field--center-affix":e.centerAffix??!r.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":w,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!F(),[`v-field--variant-${e.variant}`]:!0},l.value,V.value,I.value,u.value,x.value,v.value,e.class],style:[S.value,e.style],onClick:R},o),[a("div",{class:"v-field__overlay"},null),a(Bt,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:t.loader}),w&&a("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&a(b,{key:"prepend-icon",name:"prependInner"},null),(T=t["prepend-inner"])==null?void 0:T.call(t,f.value)]),a("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&_.value&&a(ge,{key:"floating-label",ref:B,class:[i.value],floating:!0,for:y.value,style:k.value},{default:()=>[F()]}),a(ge,{ref:D,for:y.value},{default:()=>[F()]}),(N=t.default)==null?void 0:N.call(t,{...f.value,props:{id:y.value,class:"v-field__input","aria-describedby":L.value},focus:h,blur:d})]),M&&a(et,{key:"clear"},{default:()=>[ae(a("div",{class:"v-field__clearable",onMousedown:W=>{W.preventDefault(),W.stopPropagation()}},[a(ve,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[t.clear?t.clear({...f.value,props:{onKeydown:P,onFocus:h,onBlur:d,onClick:e["onClick:clear"]}}):a(b,{name:"clear",onKeydown:P,onFocus:h,onBlur:d},null)]})]),[[we,e.dirty]])]}),$&&a("div",{key:"append",class:"v-field__append-inner"},[(j=t["append-inner"])==null?void 0:j.call(t,f.value),e.appendInnerIcon&&a(b,{key:"append-icon",name:"appendInner"},null)]),a("div",{class:["v-field__outline",i.value],style:k.value},[p&&a(G,null,[a("div",{class:"v-field__outline__start"},null),_.value&&a("div",{class:"v-field__outline__notch"},[a(ge,{ref:B,floating:!0,for:y.value},{default:()=>[F()]})]),a("div",{class:"v-field__outline__end"},null)]),r.value&&_.value&&a(ge,{ref:B,floating:!0,for:y.value},{default:()=>[F()]})])])}),{controlRef:C}}});function Me(e){const s=Object.keys(Ce.props).filter(o=>!At(o)&&o!=="class"&&o!=="style");return Rt(e,s)}const fa=E({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...Z(),...He({transition:{component:tt,leaveAbsolute:!0,group:!0}})},"VMessages"),ma=K()({name:"VMessages",props:fa(),setup(e,s){let{slots:o}=s;const n=c(()=>se(e.messages)),{textColorClasses:t,textColorStyles:l}=Ye(c(()=>e.color));return X(()=>a(Ke,{transition:e.transition,tag:"div",class:["v-messages",t.value,e.class],style:[l.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&n.value.map((u,I)=>a("div",{class:"v-messages__message",key:`${I}-${n.value}`},[o.message?o.message({message:u}):u]))]})),{}}}),st=Symbol.for("vuetify:form"),ga=E({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function ya(e){const s=le(e,"modelValue"),o=c(()=>e.disabled),n=c(()=>e.readonly),t=ye(!1),l=z([]),u=z([]);async function I(){const d=[];let b=!0;u.value=[],t.value=!0;for(const x of l.value){const v=await x.validate();if(v.length>0&&(b=!1,d.push({id:x.id,errorMessages:v})),!b&&e.fastFail)break}return u.value=d,t.value=!1,{valid:b,errors:u.value}}function m(){l.value.forEach(d=>d.reset())}function h(){l.value.forEach(d=>d.resetValidation())}return q(l,()=>{let d=0,b=0;const x=[];for(const v of l.value)v.isValid===!1?(b++,x.push({id:v.id,errorMessages:v.errorMessages})):v.isValid===!0&&d++;u.value=x,s.value=b>0?!1:d===l.value.length?!0:null},{deep:!0,flush:"post"}),Mt(st,{register:d=>{let{id:b,vm:x,validate:v,reset:A,resetValidation:_}=d;l.value.some(g=>g.id===b),l.value.push({id:b,validate:v,reset:A,resetValidation:_,vm:Dt(x),isValid:null,errorMessages:[]})},unregister:d=>{l.value=l.value.filter(b=>b.id!==d)},update:(d,b,x)=>{const v=l.value.find(A=>A.id===d);v&&(v.isValid=b,v.errorMessages=x)},isDisabled:o,isReadonly:n,isValidating:t,isValid:s,items:l,validateOn:ie(e,"validateOn")}),{errors:u,isDisabled:o,isReadonly:n,isValidating:t,isValid:s,items:l,validate:I,reset:m,resetValidation:h}}function ha(){return $t(st,null)}const ba=E({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...it()},"validation");function Va(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:We(),o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Fe();const n=le(e,"modelValue"),t=c(()=>e.validationValue===void 0?n.value:e.validationValue),l=ha(),u=z([]),I=ye(!0),m=c(()=>!!(se(n.value===""?null:n.value).length||se(t.value===""?null:t.value).length)),h=c(()=>!!(e.disabled??(l==null?void 0:l.isDisabled.value))),d=c(()=>!!(e.readonly??(l==null?void 0:l.isReadonly.value))),b=c(()=>{var C;return(C=e.errorMessages)!=null&&C.length?se(e.errorMessages).concat(u.value).slice(0,Math.max(0,+e.maxErrors)):u.value}),x=c(()=>{let C=(e.validateOn??(l==null?void 0:l.validateOn.value))||"input";C==="lazy"&&(C="input lazy"),C==="eager"&&(C="input eager");const r=new Set((C==null?void 0:C.split(" "))??[]);return{input:r.has("input"),blur:r.has("blur")||r.has("input")||r.has("invalid-input"),invalidInput:r.has("invalid-input"),lazy:r.has("lazy"),eager:r.has("eager")}}),v=c(()=>{var C;return e.error||(C=e.errorMessages)!=null&&C.length?!1:e.rules.length?I.value?u.value.length||x.value.lazy?null:!0:!u.value.length:!0}),A=ye(!1),_=c(()=>({[`${s}--error`]:v.value===!1,[`${s}--dirty`]:m.value,[`${s}--disabled`]:h.value,[`${s}--readonly`]:d.value})),g=zt("validation"),y=c(()=>e.name??U(o));Lt(()=>{l==null||l.register({id:y.value,vm:g,validate:B,reset:L,resetValidation:D})}),Ze(()=>{l==null||l.unregister(y.value)}),Je(async()=>{x.value.lazy||await B(!x.value.eager),l==null||l.update(y.value,v.value,b.value)}),De(()=>x.value.input||x.value.invalidInput&&v.value===!1,()=>{q(t,()=>{if(t.value!=null)B();else if(e.focused){const C=q(()=>e.focused,r=>{r||B(),C()})}})}),De(()=>x.value.blur,()=>{q(()=>e.focused,C=>{C||B()})}),q([v,b],()=>{l==null||l.update(y.value,v.value,b.value)});async function L(){n.value=null,await te(),await D()}async function D(){I.value=!0,x.value.lazy?u.value=[]:await B(!x.value.eager)}async function B(){let C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const r=[];A.value=!0;for(const V of e.rules){if(r.length>=+(e.maxErrors??1))break;const i=await(typeof V=="function"?V:()=>V)(t.value);if(i!==!0){if(i!==!1&&typeof i!="string"){console.warn(`${i} is not a valid value. Rule functions must return boolean true or a string.`);continue}r.push(i||"")}}return u.value=r,A.value=!1,I.value=C,u.value}return{errorMessages:b,isDirty:m,isDisabled:h,isReadonly:d,isPristine:I,isValid:v,isValidating:A,reset:L,resetValidation:D,validate:B,validationClasses:_}}const pe=E({id:String,appendIcon:J,centerAffix:{type:Boolean,default:!0},prependIcon:J,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":Q(),"onClick:append":Q(),...Z(),...Ue(),...Et(Tt(),["maxWidth","minWidth","width"]),...me(),...ba()},"VInput"),oe=K()({name:"VInput",props:{...pe()},emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:o,slots:n,emit:t}=s;const{densityClasses:l}=je(e),{dimensionStyles:u}=Nt(e),{themeClasses:I}=he(e),{rtlClasses:m}=Xe(),{InputIcon:h}=nt(e),d=Fe(),b=c(()=>e.id||`input-${d}`),x=c(()=>`${b.value}-messages`),{errorMessages:v,isDirty:A,isDisabled:_,isReadonly:g,isPristine:y,isValid:L,isValidating:D,reset:B,resetValidation:C,validate:r,validationClasses:V}=Va(e,"v-input",b),S=c(()=>({id:b,messagesId:x,isDirty:A,isDisabled:_,isReadonly:g,isPristine:y,isValid:L,isValidating:D,reset:B,resetValidation:C,validate:r})),i=c(()=>{var k;return(k=e.errorMessages)!=null&&k.length||!y.value&&v.value.length?v.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return X(()=>{var p,w,M,$;const k=!!(n.prepend||e.prependIcon),f=!!(n.append||e.appendIcon),R=i.value.length>0,P=!e.hideDetails||e.hideDetails==="auto"&&(R||!!n.details);return a("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},l.value,I.value,m.value,V.value,e.class],style:[u.value,e.style]},[k&&a("div",{key:"prepend",class:"v-input__prepend"},[(p=n.prepend)==null?void 0:p.call(n,S.value),e.prependIcon&&a(h,{key:"prepend-icon",name:"prepend"},null)]),n.default&&a("div",{class:"v-input__control"},[(w=n.default)==null?void 0:w.call(n,S.value)]),f&&a("div",{key:"append",class:"v-input__append"},[e.appendIcon&&a(h,{key:"append-icon",name:"append"},null),(M=n.append)==null?void 0:M.call(n,S.value)]),P&&a("div",{class:"v-input__details"},[a(ma,{id:x.value,active:R,messages:i.value},{message:n.message}),($=n.details)==null?void 0:$.call(n,S.value)])])}),{reset:B,resetValidation:C,validate:r,isValid:L,errorMessages:v}}}),ka=E({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,showSize:{type:[Boolean,Number,String],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(Number(e))},...pe({prependIcon:"$file"}),modelValue:{type:[Array,Object],default:e=>e.multiple?[]:null,validator:e=>se(e).every(s=>s!=null&&typeof s=="object")},...xe({clearable:!0})},"VFileInput"),xa=K()({name:"VFileInput",inheritAttrs:!1,props:ka(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{attrs:o,emit:n,slots:t}=s;const{t:l}=_e(),u=le(e,"modelValue",e.modelValue,i=>se(i),i=>!e.multiple&&Array.isArray(i)?i[0]:i),{isFocused:I,focus:m,blur:h}=ke(e),d=c(()=>typeof e.showSize!="boolean"?e.showSize:void 0),b=c(()=>(u.value??[]).reduce((i,k)=>{let{size:f=0}=k;return i+f},0)),x=c(()=>$e(b.value,d.value)),v=c(()=>(u.value??[]).map(i=>{const{name:k="",size:f=0}=i;return e.showSize?`${k} (${$e(f,d.value)})`:k})),A=c(()=>{var k;const i=((k=u.value)==null?void 0:k.length)??0;return e.showSize?l(e.counterSizeString,i,x.value):l(e.counterString,i)}),_=z(),g=z(),y=z(),L=c(()=>I.value||e.active),D=c(()=>["plain","underlined"].includes(e.variant));function B(){var i;y.value!==document.activeElement&&((i=y.value)==null||i.focus()),I.value||m()}function C(i){var k;(k=y.value)==null||k.click()}function r(i){n("mousedown:control",i)}function V(i){var k;(k=y.value)==null||k.click(),n("click:control",i)}function S(i){i.stopPropagation(),B(),te(()=>{u.value=[],Ae(e["onClick:clear"],i)})}return q(u,i=>{(!Array.isArray(i)||!i.length)&&y.value&&(y.value.value="")}),X(()=>{const i=!!(t.counter||e.counter),k=!!(i||t.details),[f,R]=Be(o),{modelValue:P,...p}=oe.filterProps(e),w=Me(e);return a(oe,H({ref:_,modelValue:u.value,"onUpdate:modelValue":M=>u.value=M,class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-file-input--hide":e.hideInput,"v-input--plain-underlined":D.value},e.class],style:e.style,"onClick:prepend":C},f,p,{centerAffix:!D.value,focused:I.value}),{...t,default:M=>{let{id:$,isDisabled:F,isDirty:T,isReadonly:N,isValid:j}=M;return a(Ce,H({ref:g,"prepend-icon":e.prependIcon,onMousedown:r,onClick:V,"onClick:clear":S,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},w,{id:$.value,active:L.value||T.value,dirty:T.value||e.dirty,disabled:F.value,focused:I.value,error:j.value===!1}),{...t,default:W=>{var ee;let{props:{class:re,...ne}}=W;return a(G,null,[a("input",H({ref:y,type:"file",readonly:N.value,disabled:F.value,multiple:e.multiple,name:e.name,onClick:O=>{O.stopPropagation(),N.value&&O.preventDefault(),B()},onChange:O=>{if(!O.target)return;const de=O.target;u.value=[...de.files??[]]},onFocus:B,onBlur:h},ne,R),null),a("div",{class:re},[!!((ee=u.value)!=null&&ee.length)&&!e.hideInput&&(t.selection?t.selection({fileNames:v.value,totalBytes:b.value,totalBytesReadable:x.value}):e.chips?v.value.map(O=>a(ua,{key:O,size:"small",text:O},null)):v.value.join(", "))])])}})},details:k?M=>{var $,F;return a(G,null,[($=t.details)==null?void 0:$.call(t,M),i&&a(G,null,[a("span",null,null),a(Re,{active:!!((F=u.value)!=null&&F.length),value:A.value,disabled:e.disabled},t.counter)])])}:void 0})}),be({},_,g,y)}}),Ca={};function pa(e,s){return ue(),fe(xa,{rounded:"lg",color:"primary",variant:"outlined","prepend-icon":"","prepend-inner-icon":"mdi-file",density:"comfortable"})}const Ia=Ve(Ca,[["render",pa]]),Sa=["color","file","time","date","datetime-local","week","month"],_a=E({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...pe(),...xe()},"VTextField"),Pa=K()({name:"VTextField",directives:{Intersect:at},inheritAttrs:!1,props:_a(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{attrs:o,emit:n,slots:t}=s;const l=le(e,"modelValue"),{isFocused:u,focus:I,blur:m}=ke(e),h=c(()=>typeof e.counterValue=="function"?e.counterValue(l.value):typeof e.counterValue=="number"?e.counterValue:(l.value??"").toString().length),d=c(()=>{if(o.maxlength)return o.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),b=c(()=>["plain","underlined"].includes(e.variant));function x(r,V){var S,i;!e.autofocus||!r||(i=(S=V[0].target)==null?void 0:S.focus)==null||i.call(S)}const v=z(),A=z(),_=z(),g=c(()=>Sa.includes(e.type)||e.persistentPlaceholder||u.value||e.active);function y(){var r;_.value!==document.activeElement&&((r=_.value)==null||r.focus()),u.value||I()}function L(r){n("mousedown:control",r),r.target!==_.value&&(y(),r.preventDefault())}function D(r){y(),n("click:control",r)}function B(r){r.stopPropagation(),y(),te(()=>{l.value=null,Ae(e["onClick:clear"],r)})}function C(r){var S;const V=r.target;if(l.value=V.value,(S=e.modelModifiers)!=null&&S.trim&&["text","search","password","tel","url"].includes(e.type)){const i=[V.selectionStart,V.selectionEnd];te(()=>{V.selectionStart=i[0],V.selectionEnd=i[1]})}}return X(()=>{const r=!!(t.counter||e.counter!==!1&&e.counter!=null),V=!!(r||t.details),[S,i]=Be(o),{modelValue:k,...f}=oe.filterProps(e),R=Me(e);return a(oe,H({ref:v,modelValue:l.value,"onUpdate:modelValue":P=>l.value=P,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":b.value},e.class],style:e.style},S,f,{centerAffix:!b.value,focused:u.value}),{...t,default:P=>{let{id:p,isDisabled:w,isDirty:M,isReadonly:$,isValid:F}=P;return a(Ce,H({ref:A,onMousedown:L,onClick:D,"onClick:clear":B,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},R,{id:p.value,active:g.value||M.value,dirty:M.value||e.dirty,disabled:w.value,focused:u.value,error:F.value===!1}),{...t,default:T=>{let{props:{class:N,...j}}=T;const W=ae(a("input",H({ref:_,value:l.value,onInput:C,autofocus:e.autofocus,readonly:$.value,disabled:w.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:y,onBlur:m},j,i),null),[[Pe("intersect"),{handler:x},null,{once:!0}]]);return a(G,null,[e.prefix&&a("span",{class:"v-text-field__prefix"},[a("span",{class:"v-text-field__prefix__text"},[e.prefix])]),t.default?a("div",{class:N,"data-no-activator":""},[t.default(),W]):Ot(W,{class:N}),e.suffix&&a("span",{class:"v-text-field__suffix"},[a("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:V?P=>{var p;return a(G,null,[(p=t.details)==null?void 0:p.call(t,P),r&&a(G,null,[a("span",null,null),a(Re,{active:e.persistentCounter||u.value,value:h.value,max:d.value,disabled:e.disabled},t.counter)])])}:void 0})}),be({},v,A,_)}}),wa={};function Fa(e,s){return ue(),fe(Pa,{rounded:"lg",color:"primary",variant:"outlined",density:"comfortable"})}const Ie=Ve(wa,[["render",Fa]]),Ba=E({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...pe(),...xe()},"VTextarea"),Aa=K()({name:"VTextarea",directives:{Intersect:at},inheritAttrs:!1,props:Ba(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{attrs:o,emit:n,slots:t}=s;const l=le(e,"modelValue"),{isFocused:u,focus:I,blur:m}=ke(e),h=c(()=>typeof e.counterValue=="function"?e.counterValue(l.value):(l.value||"").toString().length),d=c(()=>{if(o.maxlength)return o.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function b(f,R){var P,p;!e.autofocus||!f||(p=(P=R[0].target)==null?void 0:P.focus)==null||p.call(P)}const x=z(),v=z(),A=ye(""),_=z(),g=c(()=>e.persistentPlaceholder||u.value||e.active);function y(){var f;_.value!==document.activeElement&&((f=_.value)==null||f.focus()),u.value||I()}function L(f){y(),n("click:control",f)}function D(f){n("mousedown:control",f)}function B(f){f.stopPropagation(),y(),te(()=>{l.value="",Ae(e["onClick:clear"],f)})}function C(f){var P;const R=f.target;if(l.value=R.value,(P=e.modelModifiers)!=null&&P.trim){const p=[R.selectionStart,R.selectionEnd];te(()=>{R.selectionStart=p[0],R.selectionEnd=p[1]})}}const r=z(),V=z(+e.rows),S=c(()=>["plain","underlined"].includes(e.variant));Ut(()=>{e.autoGrow||(V.value=+e.rows)});function i(){e.autoGrow&&te(()=>{if(!r.value||!v.value)return;const f=getComputedStyle(r.value),R=getComputedStyle(v.value.$el),P=parseFloat(f.getPropertyValue("--v-field-padding-top"))+parseFloat(f.getPropertyValue("--v-input-padding-top"))+parseFloat(f.getPropertyValue("--v-field-padding-bottom")),p=r.value.scrollHeight,w=parseFloat(f.lineHeight),M=Math.max(parseFloat(e.rows)*w+P,parseFloat(R.getPropertyValue("--v-input-control-height"))),$=parseFloat(e.maxRows)*w+P||1/0,F=jt(p??0,M,$);V.value=Math.floor((F-P)/w),A.value=Qe(F)})}Je(i),q(l,i),q(()=>e.rows,i),q(()=>e.maxRows,i),q(()=>e.density,i);let k;return q(r,f=>{f?(k=new ResizeObserver(i),k.observe(r.value)):k==null||k.disconnect()}),Ze(()=>{k==null||k.disconnect()}),X(()=>{const f=!!(t.counter||e.counter||e.counterValue),R=!!(f||t.details),[P,p]=Be(o),{modelValue:w,...M}=oe.filterProps(e),$=Me(e);return a(oe,H({ref:x,modelValue:l.value,"onUpdate:modelValue":F=>l.value=F,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":S.value},e.class],style:e.style},P,M,{centerAffix:V.value===1&&!S.value,focused:u.value}),{...t,default:F=>{let{id:T,isDisabled:N,isDirty:j,isReadonly:W,isValid:re}=F;return a(Ce,H({ref:v,style:{"--v-textarea-control-height":A.value},onClick:L,onMousedown:D,"onClick:clear":B,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},$,{id:T.value,active:g.value||j.value,centerAffix:V.value===1&&!S.value,dirty:j.value||e.dirty,disabled:N.value,focused:u.value,error:re.value===!1}),{...t,default:ne=>{let{props:{class:ee,...O}}=ne;return a(G,null,[e.prefix&&a("span",{class:"v-text-field__prefix"},[e.prefix]),ae(a("textarea",H({ref:_,class:ee,value:l.value,onInput:C,autofocus:e.autofocus,readonly:W.value,disabled:N.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:y,onBlur:m},O,p),null),[[Pe("intersect"),{handler:b},null,{once:!0}]]),e.autoGrow&&ae(a("textarea",{class:[ee,"v-textarea__sizer"],id:`${O.id}-sizer`,"onUpdate:modelValue":de=>l.value=de,ref:r,readonly:!0,"aria-hidden":"true"},null),[[Gt,l.value]]),e.suffix&&a("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:R?F=>{var T;return a(G,null,[(T=t.details)==null?void 0:T.call(t,F),f&&a(G,null,[a("span",null,null),a(Re,{active:e.persistentCounter||u.value,value:h.value,max:d.value,disabled:e.disabled},t.counter)])])}:void 0})}),be({},x,v,_)}}),Ra={};function Ma(e,s){return ue(),fe(Aa,{rows:"4",rounded:"lg",color:"primary",variant:"outlined",density:"comfortable"})}const Da=Ve(Ra,[["render",Ma]]),Y={required:e=>!!e||"Заполните поле",requiredFile:e=>(e==null?void 0:e.length)>0||"Необходимо выбрать файл",isImage:e=>{var s;return!e||!e.length||!!((s=e[0])!=null&&s.type.match("image.*"))||"Файл не является изображением"},maxFileSize_2_5Mb:e=>!e||!e.length||e[0].size<2621440||"Размер файла не более 2.5 MB",maxLength(e){return s=>(s==null?void 0:s.toString().length)<=e||`Не более ${e} символов`}},$a=E({...Z(),...ga()},"VForm"),za=K()({name:"VForm",props:$a(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,s){let{slots:o,emit:n}=s;const t=ya(e),l=z();function u(m){m.preventDefault(),t.reset()}function I(m){const h=m,d=t.validate();h.then=d.then.bind(d),h.catch=d.catch.bind(d),h.finally=d.finally.bind(d),n("submit",h),h.defaultPrevented||d.then(b=>{var v;let{valid:x}=b;x&&((v=l.value)==null||v.submit())}),h.preventDefault()}return X(()=>{var m;return a("form",{ref:l,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:u,onSubmit:I},[(m=o.default)==null?void 0:m.call(o,t)])}),be(t,l)}}),La=e=>(Zt("data-v-9de1c58a"),e=e(),Jt(),e),Ea={class:"form-wrapper"},Ta=La(()=>Se("h1",{class:"text-h4 text-textPrimary font-weight-semibold mb-6"},"Новая книга",-1)),Na={class:"d-flex justify-end mt-3"},Oa=Te({__name:"ProductCreatePage",setup(e){const s=aa(),o=qt(),n=z(null),t=z({title:"",pages:"",releaseDate:"",photo:null,description:""}),l=c(()=>t.value.photo?URL.createObjectURL(t.value.photo):null);async function u(){if(!n.value)return;const{valid:I}=await n.value.validate();if(!I||!t.value.photo)return;const m={number:Date.now(),title:t.value.title,originalTitle:t.value.title,releaseDate:new Date(t.value.releaseDate).toDateString(),description:t.value.description,pages:Number(t.value.pages),cover:URL.createObjectURL(t.value.photo),index:Date.now()};s.addBook(m),n.value.reset(),await n.value.resetValidation(),o.onOpenSuccess("Книга добавлена")}return(I,m)=>(ue(),Ht(G,null,[a(U(la),{class:"mb-6"}),Se("div",Ea,[Ta,a(za,{ref_key:"productForm",ref:n,class:"d-flex flex-column ga-2",onSubmit:m[5]||(m[5]=Kt(()=>{},["prevent"])),onKeydown:Wt(u,["enter"])},{default:ze(()=>[a(Ie,{modelValue:t.value.title,"onUpdate:modelValue":m[0]||(m[0]=h=>t.value.title=h),label:"Название",rules:[U(Y).required,U(Y).maxLength(250)]},null,8,["modelValue","rules"]),a(Ie,{modelValue:t.value.releaseDate,"onUpdate:modelValue":m[1]||(m[1]=h=>t.value.releaseDate=h),label:"Дата выхода",type:"date",class:"date-field",rules:[U(Y).required]},null,8,["modelValue","rules"]),a(Ie,{modelValue:t.value.pages,"onUpdate:modelValue":m[2]||(m[2]=h=>t.value.pages=h),label:"Количество страниц",rules:[U(Y).required,U(Y).maxLength(4)]},null,8,["modelValue","rules"]),a(Da,{modelValue:t.value.description,"onUpdate:modelValue":m[3]||(m[3]=h=>t.value.description=h),label:"Описание",placeholder:"Краткое описание",rules:[U(Y).required,U(Y).maxLength(250)]},null,8,["modelValue","rules"]),a(Ia,{modelValue:t.value.photo,"onUpdate:modelValue":m[4]||(m[4]=h=>t.value.photo=h),label:"Фото",rules:[U(Y).requiredFile,U(Y).isImage,U(Y).maxFileSize_2_5Mb]},null,8,["modelValue","rules"])]),_:1},512),Se("div",Na,[a(Yt,{color:"primary",onClick:u},{default:ze(()=>[Xt("Добавить")]),_:1})]),l.value?(ue(),fe(U(na),{key:0,photo:l.value},null,8,["photo"])):Qt("",!0)])],64))}}),Ha=Ve(Oa,[["__scopeId","data-v-9de1c58a"]]);export{Ha as default};
