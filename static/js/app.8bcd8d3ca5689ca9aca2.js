webpackJsonp([1],{"+sqi":function(t,s){},"+tKT":function(t,s,e){t.exports=e.p+"static/img/noimage.ecb7069.jpg"},"0kV4":function(t,s){},"3Gs0":function(t,s){},"7zck":function(t,s){},"8a2d":function(t,s){},"GdP/":function(t,s){},"Jct/":function(t,s,e){t.exports=e.p+"static/img/ogp.4a6226a.png"},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),i={name:"AboutView",props:{tasks:Array},data:function(){return{body:"1982年生まれ。鹿児島大学理学部を卒業後、2005年にSI系会社へ入社。<br>業務系基幹システムの構築や、EC、物流、ファッションサイト構築など幅広い分野の設計、製造を経験。<br>株式会社エンファクトリーでは社内事業の全システムの担当を行い、受託事業の立ち上げ、要件定義から開発、納品まで一貫したシステム開発を行う。<br>現在は、複数社のIT部門統括と受託開発をしつつ自社サービスの開発を進める。",social:{facebook:{url:"https://www.facebook.com/tentatsu",icon:""},twitter:{url:"https://twitter.com/tentatsu",icon:""},github:{url:"https://github.com/tentatsu",icon:""},qiita:{url:"https://qiita.com/tentatsu",icon:""},Teamlancer:{url:"https://teamlancer.jp/users/48",icon:""}},articles:[{title:"Pythonエンジニアの将来性について",url:"https://career.levtech.jp/guide/knowhow/article/474/"},{title:"Pythonエンジニアの年収が高い理由",url:"https://career.levtech.jp/guide/knowhow/article/473/"},{title:"Pythonエンジニアの転職は本当に有利なのか",url:"https://career.levtech.jp/guide/knowhow/article/479/"}]}}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"section",attrs:{id:"about"}},[e("div",{staticClass:"inner"},[t._m(0),t._v(" "),e("div",{staticClass:"two-column-wrapper"},[t._m(1),t._v(" "),e("div",{staticClass:"two-column-desc"},[e("p",{staticClass:"text",domProps:{innerHTML:t._s(t.body)}}),t._v(" "),e("p",{staticClass:"social"},t._l(t.social,function(s,a){return e("a",{key:a,attrs:{href:s.url,target:"_blank"}},[s.icon?e("img",{attrs:{src:s.icon}}):e("span",[t._v(t._s(a))])])}),0),t._v(" "),e("div",{staticClass:"article"},[e("div",[t._v("寄稿")]),t._v(" "),t._l(t.articles,function(s){return e("a",{key:s.title,attrs:{href:s.url,target:"_blank"}},[t._v("\n            "+t._s(s.title)+"\n          ")])})],2)])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"section-title-block"},[s("h2",{staticClass:"section-title"},[this._v("ABOUT")]),this._v(" "),s("p",{staticClass:"section-desc"},[this._v("\n        こんにちは。ひょうどうたつやと申します。\n      ")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"two-column-image"},[s("img",{attrs:{src:"https://qiita-user-profile-images.imgix.net/https%3A%2F%2Fqiita-image-store.s3.amazonaws.com%2F0%2F42110%2Fprofile-images%2F1473689041?ixlib=rb-1.2.2&auto=compress%2Cformat&lossless=0&w=300&s=7ba3ca77a17846d6a0ffc6ed381fc220",alt:""}})])}]};var r=e("VU/8")(i,n,!1,function(t){e("GdP/")},"data-v-079df5aa",null).exports,c=e("mtWM"),o=e.n(c),l=e("PJh5"),u=e.n(l),d={name:"QiitaView",props:{tasks:Array},data:function(){return{items:[],count:4}},created:function(){var t=this;o.a.create({baseURL:"https://qiita.com/api/v2/"}).get("users/tentatsu/items?page=1&per_page=100").then(function(s){t.items=s.data})},filters:{moment:function(t){return u()(t).format("YYYY/MM/DD")}},computed:{ListItems:function(){return this.items.slice(0,this.count)}},methods:{isMore:function(){this.count+=10}}},h={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"section",attrs:{id:"qiita"}},[e("div",{staticClass:"inner"},[t._m(0),t._v(" "),e("div",{staticClass:"card-wrapper my-gallery"},[t._l(t.ListItems,function(s){return e("figure",{key:s.title,staticClass:"card"},[e("figcaption",{staticClass:"card-caption"},[e("div",{staticClass:"left"},[e("p",{staticClass:"card-created"},[t._v(t._s(t._f("moment")(s.created_at)))]),t._v(" "),e("p",{staticClass:"card-title"},[e("a",{staticClass:"url-link",attrs:{href:s.url,target:"_blank"}},[t._v(t._s(s.title))])]),t._v(" "),e("p",{staticClass:"card-tag"},t._l(s.tags,function(s){return e("span",{key:s.name},[t._v(t._s(s.name))])}),0)]),t._v(" "),e("div",{staticClass:"right"},[e("p",{staticClass:"card-count"},[t._v(t._s(s.likes_count))])])])])}),t._v(" "),t.ListItems.length-t.count>=0?e("button",{staticClass:"st-motto",attrs:{type:"button"},on:{click:t.isMore}},[t._v("\n          もっとみる\n        ")]):t._e()],2)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"section-title-block"},[s("h2",{staticClass:"section-title"},[this._v("Qiita")]),this._v(" "),s("div",{staticClass:"section-desc"},[s("p",{staticClass:"text"},[this._v("\n          Qiitaの投稿一覧です。")])])])}]};var p=e("VU/8")(d,h,!1,function(t){e("0kV4")},"data-v-4221c392",null).exports,m={name:"SkillView",props:{tasks:Array},data:function(){return{items:[{title:"DB設計、全体設計",rate:"rate rate5",body:"最近こればっかりやってるなぁ。設計得意です。設計ばっかりやってます。"},{title:"swagger(OpenAPI)",rate:"rate rate5",body:"VueなどSPAなサイト構築が増えてきて、API設計をするならこれがないと始まらない。"},{title:"Python",rate:"rate rate4",body:"イチから書くのはちょっと骨が折れる。Django便利。スバラシイ。"},{title:"MySQL/PostgreSQL",rate:"rate rate5",body:"データベースならあまり好き嫌いなく出来ます。RDSとかCloudSQLでも大丈夫。安心。"},{title:"PHP",rate:"rate rate5",body:"とりあえず何か作ってって言われたらPHPかな。Larabel、Cake3系、WP、ECCubeなど一通り触れます。"},{title:"Perl",rate:"rate rate4",body:"昔はPerlでやってたなぁ。。今でもワンライナーとかはPerl使ったりします。とりあえず入ってるし文字列に柔軟！"},{title:"Kubernetes",rate:"rate rate4",body:"最近一番アツい技術。Dockerを知ってから一気に広がったなー。本格運用をやりたい。"},{title:"gitbook",rate:"rate rate5",body:"設計書はこれで書いてます。gitで管理できるのが◎"},{title:"HTML/CSS",rate:"rate rate4",body:"嗜む程度に。CSSの設計は苦手。やれと言われればやります。"},{title:"VueJS",rate:"rate rate5",body:"このサイトもVueで作ってみた。たのしーーー！"}]}}},j={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"section",attrs:{id:"skill"}},[e("div",{staticClass:"inner"},[t._m(0),t._v(" "),e("div",{staticClass:"card-wrapper"},t._l(t.items,function(s){return e("div",{key:s.title,staticClass:"card"},[e("div",{staticClass:"skill-desc"},[e("h3",{staticClass:"skill-desc-title"},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"rating"},[e("p",{class:s.rate})]),t._v(" "),e("p",{staticClass:"text",domProps:{innerHTML:t._s(s.body)}})])])}),0)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"section-title-block"},[s("h2",{staticClass:"section-title"},[this._v("SKILL")]),this._v(" "),s("p",{staticClass:"section-desc"},[this._v("\n        プロジェクトマネージメントとDB設計がすき。"),s("br"),this._v("技術内容がマネージに寄ってきてるなぁ・・・\n      ")])])}]};var v=e("VU/8")(m,j,!1,function(t){e("+sqi")},"data-v-85d4fa7c",null).exports,f={name:"WorkView",props:{tasks:Array},data:function(){return{noimage:e("+tKT"),items:[{title:"購買行動分析ツールフロントエンド開発",tanto:["PM","DB設計","要件定義","詳細設計","環境構築","導入作業","保守"],body:"全国5000万人規模のID-POSデータを取り扱うシステムのリプレイス。<br>ログイン、分析結果画面の作成、チャートのリアルタイム作成、excelダウンロード等の機能を提供",kind:["Python","Django","GCP","Kubernetes","PostgreSQL","VueJS","Highcharts"]},{title:"贈り物で人をつなぐohenz構築",tanto:["DB設計","要件定義","詳細設計","製造","環境構築","導入作業","保守"],body:"ECCube4を使ったECサイト構築。<br>アーティストへの差し入れを送ると同時に商品代金の10%を社会貢献団体へ寄付できる。",kind:["PHP","ECCube4","MySQL"],url:"https://www.ohenz.com",image:e("NiPM")},{title:"某引越し会社基幹システム開発",tanto:["PM","DB設計","要件定義","詳細設計","環境構築","導入作業","保守"],body:"年間引越し件数2万件を超える引越し会社の基幹システムの新規構築。<br>オフショア開発で納期通りの納品を達成。",kind:["PHP","CakePHP","AWS","EC2","RDS","MySQL"]},{title:"某アパレル系求人サイト制作",tanto:["要件定義","詳細設計","製造","環境構築","導入作業","保守"],body:"アパレル系求人サイトの制作。<br>WordPressを使った構築で費用を抑えた構築を実現",kind:["PHP","WordPress","MySQL"]},{title:"雑誌連動型画像SNSサイト構築",tanto:["PM","DB設計","要件定義","詳細設計","製造","環境構築","導入作業","保守"],body:"ユーザ投稿型SNSサイトの構築。<br>PR記事の投稿からユーザの投稿まで様々な方式でのデータ入力をサポートする",kind:["PHP","CakePHP","MySQL"]},{title:"オリジナルカタログギフト制作サイト構築",tanto:["DB設計","要件定義","詳細設計","環境構築","導入作業","保守"],body:"オリジナルギフトを作成、カスタマイズできるサービスサイトの構築。",kind:["PHP","CakePHP","MySQL"]}]}}},_={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"section",attrs:{id:"works"}},[e("div",{staticClass:"inner"},[t._m(0),t._v(" "),e("div",{staticClass:"card-wrapper my-gallery"},t._l(t.items,function(s){return e("figure",{key:s.title,staticClass:"card"},[e("p",{staticClass:"card-image",attrs:{"data-size":"980x668"}},[s.image?e("img",{attrs:{src:s.image,alt:s.title}}):e("img",{attrs:{src:t.noimage,alt:s.title}})]),t._v(" "),e("figcaption",{staticClass:"card-caption"},[e("p",{staticClass:"card-title"},[s.url?e("a",{attrs:{href:s.url,target:"_blank"}},[t._v(t._s(s.title))]):e("span",[t._v(t._s(s.title))])]),t._v(" "),e("p",{staticClass:"card-info",domProps:{innerHTML:t._s(s.body)}}),t._v(" "),e("p",{staticClass:"card-tanto"},t._l(s.tanto,function(s){return e("span",{key:s},[t._v(t._s(s))])}),0),t._v(" "),e("p",{staticClass:"card-kind"},t._l(s.kind,function(s){return e("span",{key:s},[t._v(t._s(s))])}),0)])])}),0)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"section-title-block"},[s("h2",{staticClass:"section-title"},[this._v("WORKS")]),this._v(" "),s("div",{staticClass:"section-desc"},[s("p",{staticClass:"text"},[this._v("\n          これまでの制作実績です。")])])])}]};var g={name:"App",components:{AboutView:r,QiitaView:p,SkillView:v,WorkView:e("VU/8")(f,_,!1,function(t){e("8a2d")},"data-v-5a6421a1",null).exports},data:function(){return{}},head:{title:{inner:"兵藤竜也のポートフォリオ"},meta:[{name:"description",content:"兵藤竜也のポートフォリオ",id:"desc"},{name:"twitter:title",content:"兵藤竜也のポートフォリオ"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:"@tentatsu"},{n:"twitter:description",c:"兵藤竜也のポートフォリオ"},{itemprop:"name",content:"兵藤竜也のポートフォリオ"},{itemprop:"description",content:"兵藤竜也のポートフォリオ"},{property:"og:title",content:"兵藤竜也のポートフォリオ"},{p:"og:image",c:e("Jct/")}],link:[{rel:"canonical",href:"http://example.com/#!/contact/",id:"canonical"},{rel:"author",href:"author",undo:!1},{r:"icon",h:e("ZURh"),sz:"32x32",t:"image/png"}],script:[{type:"text/javascript",src:"cdn/to/script.js",async:!0,body:!0},{t:"application/ld+json",i:'{ "@context": "http://schema.org" }'}],style:[{type:"text/css",src:"/static/portfolio-template01/css/reset.css",undo:!1},{type:"text/css",src:"/static/portfolio-template01/css/style.css",undo:!1}]}},k={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[this._m(0),this._v(" "),this._m(1),this._v(" "),s("v-app",[s("AboutView"),this._v(" "),s("SkillView"),this._v(" "),s("WorkView"),this._v(" "),s("QiitaView")],1)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("header",{attrs:{id:"header"}},[s("h1",{staticClass:"logo"},[s("span",{staticClass:"logo-title"},[this._v("PROFILE")]),this._v(" "),s("span",{staticClass:"logo-desc"},[this._v("プロジェクトマネージャ 兵藤竜也")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("nav",{attrs:{id:"gnav"}},[s("ul",[s("li",[s("a",{attrs:{href:"#about"}},[this._v("ABOUT")])]),this._v(" "),s("li",[s("a",{attrs:{href:"#skill"}},[this._v("SKILL")])]),this._v(" "),s("li",[s("a",{attrs:{href:"#works"}},[this._v("WORKS")])]),this._v(" "),s("li",[s("a",{attrs:{href:"#qiita"}},[this._v("QIITA")])])])])}]};var b=e("VU/8")(g,k,!1,function(t){e("3Gs0")},null,null).exports,y=e("3EgV"),C=e.n(y),P=(e("7zck"),e("gJtD"),e("csSS"),e("RZCy")),w=e.n(P),z=e("uf97"),S=e.n(z);a.default.use(C.a),a.default.use(w.a),a.default.config.productionTip=!1,new a.default({el:"#app",components:{App:b},template:"<App/>"}),a.default.use(S.a,{id:"GTM-N5TKJND"})},NiPM:function(t,s,e){t.exports=e.p+"static/img/ohenz.12b507c.png"},ZURh:function(t,s,e){t.exports=e.p+"static/img/favicon.0fd8595.png"},csSS:function(t,s){},gJtD:function(t,s){},uslO:function(t,s,e){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function i(t){return e(n(t))}function n(t){var s=a[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.8bcd8d3ca5689ca9aca2.js.map