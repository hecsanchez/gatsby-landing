(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{133:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return m});var n=a(0),o=a.n(n),r=a(4),i=a.n(r),s=a(131),c=a.n(s);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var l=a(147),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var p=a(43);a.d(t,"parsePath",function(){return p.a});var d=o.a.createContext({}),m=function(e){return o.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},141:function(e,t,a){"use strict";a(149);var n=a(0),o=a.n(n);a(169);t.a=function(e){var t=e.className,a=e.name;return o.a.createElement("svg",{className:"icon icon--"+a+" "+(t||""),xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("use",{xlinkHref:"#icon-"+a}))}},144:function(e,t,a){"use strict";a.d(t,"e",function(){return n}),a.d(t,"g",function(){return o}),a.d(t,"f",function(){return r}),a.d(t,"b",function(){return i}),a.d(t,"a",function(){return s}),a.d(t,"d",function(){return c}),a.d(t,"c",function(){return l});var n=[{text:"Features",link:"/features"},{text:"Pricing",link:"/pricing"},{text:"Learn more",link:"/learn-more"},{text:"Contact sales",link:"/contact"}],o=[{icon:"data",title:"Keep your Data",description:"Enterprise-ready performance and controls"},{icon:"prototype",title:"Prototype your Project",description:"24/7 proactive threat scanning to prevent attacks"},{icon:"texts",title:"Create Smart Texts",description:"24/7 proactive threat scanning to prevent attacks"}],r=[{name:"Basic",description:"For a taste of our product",price:"$",priceDescription:"always free",promoText:"How to boost the design and developing process with help of four paws.",features:{included:[0,3,6],notIncluded:[7,8]},featured:!1,link:"/"},{name:"Professional",description:"Make individual product",price:"$8.99",priceDescription:"per month",promoText:"Computer War Games How To Estimate Decisions Made By C C Trainees",features:{included:[1,4,6,7],notIncluded:[8]},featured:!1,link:"/"},{name:"BUSINESS",description:"For big companies",price:"$18.99",priceDescription:"per month",promoText:"Direct Mail Advertising How I Made 47 325 In 30 Days By Mailing",features:{included:[1,4,6,7,8],notIncluded:[]},featured:!0,link:"/"}],i=["2 Gb of space","8 Gb of space","30 Gb of space","30 days of file recovery","60 days of file recovery","90 days of file recovery","MS Office 365 integration","Unlimited third-party integrations","Remote wipe"],s=["evernote","marvel","brazzers","motorola","netflix","adobe"],c=[{title:"Support",links:[{to:"/",text:"About Us"},{to:"/",text:"Press"},{to:"/",text:"FAQ"}]},{title:"Business",links:[{to:"/",text:"Home"},{to:"/",text:"Mobile"},{to:"/",text:"Pricing"}]},{title:"Community",links:[{to:"/",text:"Developers"},{to:"/",text:"Referrals"},{to:"/",text:"Forum"}]}],l="Huge modern UI Kit containing 130+ terrific components in 11 popular categories. Each component is fully."},147:function(e,t,a){var n;e.exports=(n=a(165))&&n.default||n},153:function(e,t,a){"use strict";var n=a(6),o=a.n(n),r=a(155),i=a(0),s=a.n(i),c=a(4),l=a.n(c),u=a(156),p=a.n(u),d=a(133),m=(a(148),a(167),a(168)),f=a.n(m),y=function(e){var t=e.menu,a=e.closeNav,n=e.openNav,o=e.navOpen;return s.a.createElement("header",null,s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"logo"},s.a.createElement("img",{alt:"logo",src:f.a})),s.a.createElement("div",{className:"navigation "+(o?"nav--open":"nav--close")},s.a.createElement("div",{className:"icon--close",onClick:a},"x"),t.map(function(e){return s.a.createElement(d.Link,{key:e.text,className:"navigation__item",to:e.link},e.text)}))),s.a.createElement("div",{className:"icon--open",onClick:n},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)))},g=a(141),v=a(151),h=a(152),w=a(154);a(181);v.a.use(h.a).init({resources:w.a,lng:"es",fallbackLng:"en",interpolation:{escapeValue:!1}});var k=Object(h.b)()(function(e){var t=e.icon,a=e.description,n=e.links,o=e.language,r=e.changeLanguage,i=e.t;return s.a.createElement("footer",null,s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col--one-fourth"},s.a.createElement(g.a,{name:t}),s.a.createElement("span",{className:"footer__description"},i(a))),s.a.createElement("div",{className:"col--one-half row footer__menu-container"},n.map(function(e){return s.a.createElement("div",{key:e.title,className:"col--one-third footer__menu"},s.a.createElement("span",{className:"column__title"},i(e.title)),e.links.map(function(e){return s.a.createElement("li",{key:e.text,className:"footer__link"},s.a.createElement(d.Link,{to:e.to},i(e.text)))}))})),s.a.createElement("div",{className:"language"},s.a.createElement(g.a,{className:"icon-language",name:"globe"}),s.a.createElement("select",{className:"languageSelector",onChange:r,value:o},s.a.createElement("option",{value:"en"},"English"),s.a.createElement("option",{value:"es"},"Español"))))))}),b=a(144),E=(a(182),function(e){function t(t){var a;return(a=e.call(this,t)||this).openNav=function(){a.setState({navOpen:!0})},a.closeNav=function(){a.setState({navOpen:!1})},a.state={navOpen:!1},a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.t,n=t.language,o=this.props,i=o.children,c=o.changeLanguage;return s.a.createElement(d.StaticQuery,{query:"3394258301",render:function(t){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(y,{siteTitle:t.site.siteMetadata.title,menu:b.e,openNav:e.openNav,closeNav:e.closeNav,navOpen:e.state.navOpen}),i,s.a.createElement(k,{icon:"blue",description:b.c,links:b.d,language:n,changeLanguage:c,t:a}))},data:r})},t}(i.Component));E.propTypes={children:l.a.node.isRequired};t.a=E},154:function(e,t,a){"use strict";var n={en:{translation:{section1__title:"The Best Way to Work Together",section1__subtitle:"We design and develop software for funded startups and established companies. Here are just some examples of our work","Keep your Data":"Keep your Data","Enterprise-ready performance and controls":"Enterprise-ready performance and controls","Prototype your Project":"Prototype your Project","24/7 proactive threat scanning to prevent attacks":"24/7 proactive threat scanning to prevent attacks.","Create Smart Texts":"Create Smart Texts","Simple Pricing":"Simple Pricing","It seems from the moment you begin to take your love of astronomy seriously, the thing that is on your mind is what kind":"It seems from the moment you begin to take your love of astronomy seriously, the thing that is on your mind is what kind",Basic:"Basic","For a taste of our product":"For a taste of our product","always free":"always free","How to boost the design and developing process with help of four paws":"How to boost the design and developing process with help of four paws",Professional:"Professional","Make individual product":"Make individual product","per month":"per month","Computer War Games How To Estimate Decisions Made By C C Trainees":"Computer War Games How To Estimate Decisions Made By C C Trainees",BUSINESS:"BUSINESS","For big companies":"For big companies","Direct Mail Advertising How I Made 47 325 In 30 Days By Mailing":"Direct Mail Advertising How I Made 47 325 In 30 Days By Mailing","2 Gb of space":"2 Gb of space","8 Gb of space":"8 Gb of space","30 Gb of space":"30 Gb of space","30 days of file recovery":"30 days of file recovery","60 days of file recovery":"60 days of file recovery","90 days of file recovery":"90 days of file recovery","MS Office 365 integration":"MS Office 365 integration","Unlimited third-party integrations":"Unlimited third-party integrations","Remote wipe":"Remote wipe","Get started":"Get started","The Ultimate Pasta Length Editor":"The Ultimate Pasta Length Editor","How to boost the design and developing process with a little help of four paws. True story by Snoop Dogg":"How to boost the design and developing process with a little help of four paws. True story by Snoop Dogg","Try it for free":"Try it for free","Huge modern UI Kit containing 130+ terrific components in 11 popular categories. Each component is fully.":"Huge modern UI Kit containing 130+ terrific components in 11 popular categories. Each component is fully"}},es:{translation:{section1__title:"La mejor manera de trabajar juntos",section1__subtitle:"Diseñamos y desarrollamos software para startups y compañías establecidas. Estos son solo unos ejemplos de nuestro trabajo","Keep your Data":"Mantén tu información","Enterprise-ready performance and controls":"Controles y desempeño para empresas","Prototype your Project":"Prototipa tu Proyecto","24/7 proactive threat scanning to prevent attacks":"Buscamos proactivamente 24/7 para prevenir ataques","Create Smart Texts":"Crea Textos Inteligentes","Simple Pricing":"Precios sencillos","It seems from the moment you begin to take your love of astronomy seriously, the thing that is on your mind is what kind":"Parece que desde el momento en que empiezas a tomar en serio tu amor por la astronomía, lo que está en tu mente es qué tipo",Basic:"Básico","For a taste of our product":"Para probar nuestro producto","always free":"siempre gratis","How to boost the design and developing process with help of four paws":"Cómo impulsar el proceso de diseño y desarrollo con ayuda de nuestras patas",Professional:"Profesional","Make individual product":"Crea un producto","per month":"por mes","Computer War Games How To Estimate Decisions Made By C C Trainees":"Juegos de Guerra para Computadoras Cómo Estimar Decisiones de Entranadores C C",BUSINESS:"NEGOCIOS","For big companies":"Para grandes empresas","Direct Mail Advertising How I Made 47 325 In 30 Days By Mailing":"Publicidad Directa a través de correo Cómo hice 47 325 en 30 días por correo","2 Gb of space":"2 Gb de espacio","8 Gb of space":"8 Gb de espacio","30 Gb of space":"30 Gb de espacio","30 days of file recovery":"30 days de recuperación de archivos","60 days of file recovery":"60 days de recuperación de archivos","90 days of file recovery":"90 days de recuperación de archivos","MS Office 365 integration":"Integración con MS Office 365","Unlimited third-party integrations":"Integraciones ilimitadas con otros servicios","Remote wipe":"Borrado remoto","Get started":"Comienza","The Ultimate Pasta Length Editor":"El Mejor Editor de Longitud de Pasta","How to boost the design and developing process with a little help of four paws":"Cómo impulsar el proceso de diseño y desarrollo con ayuda de nuestras patas. La historia de Snoop Dogg","Superpasta trusted and used by multiple companies":"Empresas que confían en Superpasta","Try it for free":"Pruébalo gratis","Huge modern UI Kit containing 130+ terrific components in 11 popular categories. Each component is fully.":"Un Kit de UI enorme y moderno que contiene más de 130 componentes en 11 categorías populares. Cada componente es"}}};t.a=n},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},165:function(e,t,a){"use strict";a.r(t);a(28);var n=a(0),o=a.n(n),r=a(4),i=a.n(r),s=a(62),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},167:function(e,t,a){},168:function(e,t){e.exports="data:image/png;base64,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"},169:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){}}]);
//# sourceMappingURL=1-8c2b8bfdbb93a2985f64.js.map