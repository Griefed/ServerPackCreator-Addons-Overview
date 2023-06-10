"use strict";(self["webpackChunkserverpackcreator_addons_overview"]=self["webpackChunkserverpackcreator_addons_overview"]||[]).push([[706],{9706:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_});r(246);var o=r(3673),a=r(2323);const i={class:"row q-pa-md flex-center window-width"},n={class:"text-weight-bolder"},s={class:"text-grey-8"},l={class:"text-grey-8"},d={class:"q-gutter-xs"};function c(e,t,r,c,p,u){const h=(0,o.up)("q-btn"),f=(0,o.up)("q-item-label"),m=(0,o.up)("q-separator"),b=(0,o.up)("q-item-section"),g=(0,o.up)("q-item"),w=(0,o.up)("q-list"),k=(0,o.up)("q-card"),v=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(v,null,{default:(0,o.w5)((()=>[(0,o._)("div",i,[(0,o.Wm)(k,{style:(0,a.j5)(this.$q.dark.isActive?"border-bottom: #C0FFEE 3px solid; max-width: 90%;":"border-bottom: #325358 3px solid; max-width: 90%;")},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{bordered:"",class:"rounded-borders"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{header:"",class:(0,a.C_)(this.$q.platform.is.mobile?"text-weight-bolder text-h6":"text-weight-bolder text-h5"),style:(0,a.j5)(this.$q.platform.is.mobile?"font-size: 18px;":"")},{default:(0,o.w5)((()=>[(0,o.Uk)(" Curated list of plugins for ServerPackCreator: "),(0,o.Wm)(h,{icon:"info",class:"q-mr-xs right",dense:"",flat:"",onClick:t[0]||(t[0]=t=>e.viewInfo())})])),_:1},8,["class","style"]),(0,o.Wm)(m),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.addons,(e=>((0,o.wg)(),(0,o.j4)(g,{key:e,class:(0,a.C_)(this.$q.dark.isActive?e.index%2?"item-dark":"item-dark-alternative":e.index%2?"item":"item-alternative")},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{top:""},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{lines:"1"},{default:(0,o.w5)((()=>[(0,o._)("span",n,"["+(0,a.zw)(e.owner)+"/"+(0,a.zw)(e.name)+"]",1),(0,o._)("span",s," - "+(0,a.zw)(e.type),1),(0,o._)("span",l," - "+(0,a.zw)(e.branch),1)])),_:2},1024),(0,o.Wm)(f,{caption:"",lines:"10"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e.description),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(b,{top:"",side:"",class:"flex-center"},{default:(0,o.w5)((()=>[(0,o._)("div",d,[(0,o.Wm)(h,{size:"lg",type:"a",href:e.releasesLink,target:"_blank",flat:"",dense:"",round:"",icon:"save"},null,8,["href"]),(0,o.Wm)(h,{size:"lg",type:"a",href:e.repositoryLink,target:"_blank",flat:"",dense:"",round:"",icon:"open_in_new"},null,8,["href"])])])),_:2},1024),(0,o.Wm)(m)])),_:2},1032,["class"])))),128))])),_:1})])),_:1},8,["style"])])])),_:1})}const p=(0,o.aZ)({name:"AddonIndex",setup(){return{addons:{serverPackCreatorExamplePlugin:{index:1,name:"ServerPackCreator Example Plugin",owner:"Griefed",type:"GitHub",branch:"main",description:"An example plugin for ServerPackCreator for use in version 4.x. Provides examples for every available extension point, how to edit server pack specific extension configurations and how to edit global plugin configurations.",releasesLink:"https://github.com/Griefed/ServerPackCreator/releases/latest",repositoryLink:"https://github.com/Griefed/ServerPackCreator/tree/main/serverpackcreator-plugin-example"},nekodetector:{index:2,name:"NekoDetector",owner:"Griefed",type:"GitHub",branch:"master",description:"Automatically scan your modpack and server pack for Nekoclient infection(s) whilst using ServerPackCreator",releasesLink:"https://github.com/Griefed/spc-nekodetector-plugin/releases/latest",repositoryLink:"https://github.com/Griefed/spc-nekodetector-plugin"}}}},methods:{viewInfo(){this.$q.notify({timeout:0,icon:"info",color:"primary",position:"center",multiLine:!0,html:!0,message:'<span style="font-size: 20px;"><b>Why:</b></span><br><br><p>There are things which people want to do with their server packs which could most certainly be automated. Some of thosethings so special, or maybe out of place, that they would not warrant a separate feature for ServerPackCreator itself.It may also be that it is such a niche feature, that I either don\'t have the time to code it in, or simply don\'t want to.Maybe it doesn\'t fit into the overall design of ServerPackCreator, too. Who knows, it could be any of those reasons or another.</p><p><b>Hence, the plugin functionality!</b></p><p>This allows people to write their own plugins to expand the functionality of ServerPackCreator with their own features asthey see fit or want.</p><p>For documentation about Pf4j, visit the [Pf4j documentation](https://pf4j.org/)</p><span style="font-size: 20px;"><b>Adding your own plugin:</b></span><br><br>If you have written your own plugin for ServerPackCreator and you would like to see it added here, please open an issue over at ServerPackCreatoron GitHub, using the Documentation template.<br>For a plugin to be accepted, you must at least provide:<br><ul><li>The name of the repository, and therefore the plugin.</li><li>The owner of the repository, and therefore the plugin.</li><li>The branch of the repository where the main code resides in.</li><li>A description of the plugin.</li></ul>A curated list of officially acknowledged plugins can be found at <b><a style="color: #c0ffee" href="https://addons.griefed.de">addons.griefed.de</a></b> (redirects to <b><a style="color: #c0ffee" href="https://griefed.github.io/ServerPackCreator-Addons-Overview/#/">GitHub Pages</a></b>)<br>Some examples for potential plugins can be found <b><a style="color: #c0ffee" href="https://github.com/Griefed/ServerPackCreator/discussions/201">in this discussion thread</a></b>.<br>Some excerpts:<ul><li>1. Changelog generator, by @TheButterbrotMan at [Feature request]: Changelog generator #198</li><ul><li>A changelog generator that checks the differences to the previous version and generates a changelog.</li></ul><li>2. Bundle Adoptium Java with server packs, by @kreezxil at [Feature request]: Bundle Adoptium Java #199</li><ul><li>Because modpacks need one of the either Java 8, 16, or 17, it would be nice to have the corresponding <b><a style="color: #c0ffee" href="https://adoptium.net">Adoptium JDK/JRE</a></b> prebundled with the server pack.</li></ul><li>3. Automatic setup of a server pack for [BlueMap](https://www.curseforge.com/minecraft/mc-mods/bluemap)</li><ul><li>Check all mods in the specified modpacks mods-directory for textures, and if any are found, add the mod toBlueMap\'s resourcepack folder `config/bluemap/resourcepacks`, install BlueMap for the specified Minecraft and Forge/Fabricversion and voilà!</li></ul></ul>',actions:[{label:"OK",color:"white"}]})}}});var u=r(4260),h=r(4379),f=r(151),m=r(7011),b=r(2350),g=r(522),w=r(5869),k=r(3414),v=r(2035),y=r(7518),x=r.n(y);const C=(0,u.Z)(p,[["render",c]]),_=C;x()(p,"components",{QPage:h.Z,QCard:f.Z,QList:m.Z,QItemLabel:b.Z,QBtn:g.Z,QSeparator:w.Z,QItem:k.Z,QItemSection:v.Z})}}]);