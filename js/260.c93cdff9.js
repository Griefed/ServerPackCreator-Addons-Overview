"use strict";(self["webpackChunkserverpackcreator_addons_overview"]=self["webpackChunkserverpackcreator_addons_overview"]||[]).push([[260],{5260:(e,t,r)=>{r.r(t),r.d(t,{default:()=>S});r(246);var a=r(3673),o=r(2323);const i={class:"row q-pa-md flex-center window-width"},n=(0,a.Uk)(" Curated list of plugins/addons for ServerPackCreator: "),s={class:"text-weight-bolder"},d={class:"text-grey-8"},l={class:"text-grey-8"},c={class:"q-gutter-xs"};function p(e,t,r,p,u,h){const f=(0,a.up)("q-btn"),m=(0,a.up)("q-item-label"),b=(0,a.up)("q-separator"),w=(0,a.up)("q-item-section"),v=(0,a.up)("q-item"),g=(0,a.up)("q-list"),k=(0,a.up)("q-card"),x=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(x,null,{default:(0,a.w5)((()=>[(0,a._)("div",i,[(0,a.Wm)(k,{style:(0,o.j5)(this.$q.dark.isActive?"border-bottom: #C0FFEE 3px solid; max-width: 90%;":"border-bottom: #325358 3px solid; max-width: 90%;")},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{bordered:"",class:"rounded-borders"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{header:"",class:(0,o.C_)(this.$q.platform.is.mobile?"text-weight-bolder text-h6":"text-weight-bolder text-h5"),style:(0,o.j5)(this.$q.platform.is.mobile?"font-size: 18px;":"")},{default:(0,a.w5)((()=>[n,(0,a.Wm)(f,{icon:"info",class:"q-mr-xs right",dense:"",flat:"",onClick:t[0]||(t[0]=t=>e.viewInfo())})])),_:1},8,["class","style"]),(0,a.Wm)(b),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.addons,(e=>((0,a.wg)(),(0,a.j4)(v,{key:e,class:(0,o.C_)(this.$q.dark.isActive?e.index%2?"item-dark":"item-dark-alternative":e.index%2?"item":"item-alternative")},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{lines:"1"},{default:(0,a.w5)((()=>[(0,a._)("span",s,"["+(0,o.zw)(e.owner)+"/"+(0,o.zw)(e.name)+"]",1),(0,a._)("span",d," - "+(0,o.zw)(e.type),1),(0,a._)("span",l," - "+(0,o.zw)(e.branch),1)])),_:2},1024),(0,a.Wm)(m,{caption:"",lines:"10"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.description),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(w,{top:"",side:"",class:"flex-center"},{default:(0,a.w5)((()=>[(0,a._)("div",c,[(0,a.Wm)(f,{size:"lg",type:"a",href:e.releasesLink,target:"_blank",flat:"",dense:"",round:"",icon:"save"},null,8,["href"]),(0,a.Wm)(f,{size:"lg",type:"a",href:e.repositoryLink,target:"_blank",flat:"",dense:"",round:"",icon:"open_in_new"},null,8,["href"])])])),_:2},1024),(0,a.Wm)(b)])),_:2},1032,["class"])))),128))])),_:1})])),_:1},8,["style"])])])),_:1})}const u=(0,a.aZ)({name:"AddonIndex",setup(){return{addons:{serverpackcreatorexampleaddon:{index:1,name:"ServerPackCreatorExampleAddon",owner:"Griefed",type:"GitHub",branch:"main",description:"An example addon for ServerPackCreator for use in version 3.x.x.",releasesLink:"https://github.com/Griefed/ServerPackCreatorExampleAddon/releases/latest",repositoryLink:"https://github.com/Griefed/ServerPackCreatorExampleAddon"},serverpackcreatorexampleaddonalternativedeclaration:{index:2,name:"ServerPackCreatorExampleAddon",owner:"Griefed",type:"GitHub",branch:"alternativeExtensionDeclaration",description:"An example addon for ServerPackCreator for use in version 3.x.x. This example shows a different approach to the extension declaration and class structure.",releasesLink:"https://github.com/Griefed/ServerPackCreatorExampleAddon/releases/latest",repositoryLink:"https://github.com/Griefed/ServerPackCreatorExampleAddon/tree/alternativeExtensionDeclaration"},serverpackcreatorexampleaddontetris:{index:3,name:"ServerPackCreatorExampleAddon",owner:"Griefed",type:"GitHub",branch:"tetris",description:'An example addon for ServerPackCreator for use in version 3.x.x. This plugin adds a single simple tab containing but a single button. "Press Play On Tape". Upon pressing said button, you can play Tetris in a new windows! Playing Tetris whilst a server pack is generating? Yes please!',releasesLink:"https://github.com/Griefed/ServerPackCreatorExampleAddon/releases/latest",repositoryLink:"https://github.com/Griefed/ServerPackCreatorExampleAddon/tree/tetris"}}}},methods:{viewInfo(){this.$q.notify({timeout:0,icon:"info",color:"primary",position:"center",multiLine:!0,html:!0,message:'<span style="font-size: 20px;"><b>Why:</b></span><br><br><p>There are things which people want to do with their server packs which could most certainly be automated. Some of thosethings so special, or maybe out of place, that they would not warrant a separate feature for ServerPackCreator itself.It may also be that it is such a niche feature, that I either don\'t have the time to code it in, or simply don\'t want to.Maybe it doesn\'t fit into the overall design of ServerPackCreator, too. Who knows, it could be any of those reasons or another.</p><p><b>Hence, the addon functionality!</b></p><p>This allows people to write their own addons to expand the functionality of ServerPackCreator with their own features asthey see fit or want.</p><p>For documentation about Pf4j, visit the [Pf4j documentation](https://pf4j.org/)</p><span style="font-size: 20px;"><b>Adding your own addon/plugin:</b></span><br><br>If you have written your own addon or plugin for ServerPackCreator and you would like to see it added here, please open an issue over at ServerPackCreatoron GitHub, using the Documentation template.<br>For an addon to be accepted, you must at least provide:<br><ul><li>The name of the repository, and therefore the addon.</li><li>The owner of the repository, and therefore the addon.</li><li>The branch of the repository where the main code resides in.</li><li>A description of the plugin or addon.</li></ul>A curated list of officially acknowledged addons/plugins can be found at <b><a style="color: #c0ffee" href="https://addons.griefed.de">addons.griefed.de</a></b> (redirects to <b><a style="color: #c0ffee" href="https://griefed.github.io/ServerPackCreator-Addons-Overview/#/">GitHub Pages</a></b>)<br>Some examples for potential addons can be found <b><a style="color: #c0ffee" href="https://github.com/Griefed/ServerPackCreator/discussions/201">in this discussion thread</a></b>.<br>Some excerpts:<ul><li>1. Changelog generator, by @TheButterbrotMan at [Feature request]: Changelog generator #198</li><ul><li>A changelog generator that checks the differences to the previous version and generates a changelog.</li></ul><li>2. Bundle Adoptium Java with server packs, by @kreezxil at [Feature request]: Bundle Adoptium Java #199</li><ul><li>Because modpacks need one of the either Java 8, 16, or 17, it would be nice to have the corresponding <b><a style="color: #c0ffee" href="https://adoptium.net">Adoptium JDK/JRE</a></b> prebundled with the server pack.</li></ul><li>3. Automatic setup of a server pack for [BlueMap](https://www.curseforge.com/minecraft/mc-mods/bluemap)</li><ul><li>Check all mods in the specified modpacks mods-directory for textures, and if any are found, add the mod toBlueMap\'s resourcepack folder `config/bluemap/resourcepacks`, install BlueMap for the specified Minecraft and Forge/Fabricversion and voilà!</li></ul></ul>',actions:[{label:"OK",color:"white"}]})}}});var h=r(4260),f=r(4379),m=r(151),b=r(7011),w=r(2350),v=r(522),g=r(5869),k=r(3414),x=r(2035),y=r(7518),C=r.n(y);const P=(0,h.Z)(u,[["render",p]]),S=P;C()(u,"components",{QPage:f.Z,QCard:m.Z,QList:b.Z,QItemLabel:w.Z,QBtn:v.Z,QSeparator:g.Z,QItem:k.Z,QItemSection:x.Z})}}]);