import{K as ne,h as re,o as ie,E as m,j as T,k as _,s as d,x as n,a5 as t,A as i,a6 as pe,B as s,C as q,w as y,O as c,p as f,q as h,J as P,X as z,W as H,D as se,n as me,a1 as ue}from"./vendor.8327e786.js";import{g as ce,a as fe,b as ge,c as _e,d as he,e as ve,f as be,U as we,u as ke}from"./index.9e1fbb07.js";import{_ as Ie}from"./index.10c62aa1.js";const ye={class:"app-container"},Ve={id:"app",slot:"body"},Te=f("\u641C\u7D22"),Fe=f("\u65B0\u589E"),Pe={style:{"text-align":"right","margin-top":"15px"}},Ce={class:"drawer__content"},De={key:0},Le={class:"buttonclass"},Ue=f("\u672A\u542F\u7528"),xe=f("\u5DF2\u542F\u7528"),Ae={class:"buttonclass"},Ne=f("\u786E \u5B9A"),qe={setup(ze){const{proxy:v}=se(),S=ne(),e=re({tableData:{pagination:{pageNum:1,pageSize:10,totalPage:0},rows:[]},queryDatas:{name:"",appId:""},drawer:!1,drawerLoading:!1,form:{id:null,appId:"",name:"",description:"",codecType:"",deviceProfileId:[],networkId:""},formLabelWidth:"100px",drawerType:1,profiles:[],rules:{name:[{required:!0,message:"\u8BF7\u8F93\u5165App\u540D\u79F0",trigger:"blur"}],appId:[{required:!0,message:"\u8BF7\u8F93\u5165appId",trigger:"blur"}]},appId:S.query.appId||"",options:[],vendors:[],activeTab:"first",hookTypes:[{id:1,name:"HTTP"},{id:2,name:"MQTT"}],advancedForm:{appId:"",hookType:"",hookHost:"",hookUser:"",hookPass:"",hookTopic:"",status:10,ctime:"",mtime:""},networkConfigList:[]});ie(()=>{B(),R(),G()});function M(o){e.tableData.pagination.pageSize=o,b()}function W(o){e.tableData.pagination.pageNum=o,b()}function V(){e.tableData.pagination.pageNum=1,b()}function b(){ge({orgId:parseInt(window.localStorage.getItem("oid")||""),name:e.queryDatas.name,appId:e.queryDatas.appId,pageNum:e.tableData.pagination.pageNum,pageSize:e.tableData.pagination.pageSize}).then(o=>{o&&o.code===200?(e.tableData.rows=o.items,e.tableData.pagination.totalPage=o.totalPage):m.error(o.code+": "+o.message)}).catch(o=>{})}function $(){_e({}).then(o=>{if(o&&o.code===200){if(o.items&&o.items.length>0){e.profiles=[];for(let a=0;a<o.items.length;a++)e.profiles.push(o.items[a]);J()}}else m.error(o.code+": "+o.message)}).catch(o=>{console.log(o)})}function B(){ce({}).then(o=>{if(o&&o.code===200){if(o.items&&o.items.length>0){e.vendors=[];for(let a=0;a<o.items.length;a++)e.vendors.push(o.items[a]);$()}}else m.error(o.code+": "+o.message)}).catch(o=>{console.log(o)})}function K(){e.drawerType=1,e.drawer=!0}function C(o){he({id:o.id}).then(a=>{a&&a.code===200?(e.drawerType=2,e.drawer=!0,me(()=>{e.form.id=a.id,e.form.appId=a.appId,e.form.name=a.name,e.form.description=a.description,e.form.codecType=a.codecType,e.form.networkId=a.networkId;for(var r=null,u=0;u<e.profiles.length;u++)a.deviceProfileId&&a.deviceProfileId==e.profiles[u].id&&(r=e.profiles[u].vendorId);e.form.deviceProfileId=[r,a.deviceProfileId],E()})):m.error(a.code+": "+a.message)}).catch(a=>{console.log(a)})}function E(){ve({appId:e.form.appId}).then(o=>{o&&o.code==200&&(e.advancedForm.appId=e.form.appId,e.advancedForm.hookType=o.hookType,e.advancedForm.hookHost=o.hookHost,e.advancedForm.hookUser=o.hookUser,e.advancedForm.hookPass=o.hookPass,e.advancedForm.hookTopic=o.hookTopic,e.advancedForm.status=o.status?o.status:10,e.advancedForm.ctime=o.ctime,e.advancedForm.mtime=o.mtime)}).catch(o=>{console.log(o)})}function F(o){e.drawerLoading||(v.$refs.form!==void 0&&v.$refs.form.resetFields(),v.$refs.advancedForm!==void 0&&v.$refs.advancedForm.resetFields(),e.drawerLoading=!1,e.drawer=!1,e.activeTab="first",b())}function Q(){v.$refs.form.validate(o=>{if(o)ue.confirm("\u786E\u5B9A\u8981\u63D0\u4EA4\u8868\u5355\u5417\uFF1F").then(a=>{e.drawerLoading=!0,e.drawerType==1?j():e.drawerType==2&&O(),e.drawerLoading=!1});else{console.log("error submit!!");return}})}function j(){be({name:e.form.name,appId:e.form.appId,description:e.form.description,codecType:e.form.codecType,deviceProfileId:e.form.deviceProfileId[1],networkId:e.form.networkId,orgId:parseInt(window.localStorage.getItem("oid")||"")}).then(o=>{o&&o.code===200?(m.success("success"),e.drawerLoading=!1,F()):m.error(o.code+": "+o.message)})}function O(){we({id:e.form.id,appId:e.form.appId,name:e.form.name,description:e.form.description,networkId:e.form.networkId,codecType:e.form.codecType,deviceProfileId:e.form.deviceProfileId[1],status:20}).then(o=>{o&&o.code===200?(m.success("success"),F()):m.error(o.code+": "+o.message)}).catch(o=>{m.error("error"),e.drawerLoading=!1,console.log(o)})}function R(){e.appId!=""?(e.queryDatas.appId=e.appId,V()):b()}function J(){e.options=[];for(var o=0;o<e.vendors.length;o++){for(var a=[],r=0;r<e.profiles.length;r++)e.vendors[o].id==e.profiles[r].vendorId&&a.push({label:e.profiles[r].profileName,value:e.profiles[r].id});e.options.push({label:e.vendors[o].name,value:e.vendors[o].id,children:a})}}function X(){let o={appId:e.form.appId,hookType:e.advancedForm.hookType,hookHost:e.advancedForm.hookHost,hookUser:e.advancedForm.hookUser,hookPass:e.advancedForm.hookPass,hookTopic:e.advancedForm.hookTopic,status:e.advancedForm.status};ke(o).then(a=>{a&&a.code==200?m.success("\u4FDD\u5B58\u6210\u529F"):m.error(a.code+": "+a.message)}).catch(a=>{console.log(a)})}function G(){fe({pageNum:1,pageSize:1e3}).then(o=>{o&&o.code==200?e.networkConfigList=o.items:m.error(o.code+": "+o.message)})}function Y(){return"padding:3px;"}function Z(){return"padding:3px;"}return(o,a)=>{const r=i("el-input"),u=i("el-col"),g=i("el-button"),D=i("el-row"),w=i("el-table-column"),ee=i("el-table"),oe=i("el-pagination"),p=i("el-form-item"),L=i("el-option"),U=i("el-select"),ae=i("el-cascader"),x=i("el-form"),A=i("el-tab-pane"),N=i("el-radio"),te=i("el-radio-group"),le=i("el-tabs"),de=i("el-drawer"),k=pe("waves");return s(),T("div",ye,[_("div",Ve,[d(D,{gutter:20},{default:n(()=>[d(u,{span:4},{default:n(()=>[d(r,{modelValue:t(e).queryDatas.name,"onUpdate:modelValue":a[0]||(a[0]=l=>t(e).queryDatas.name=l),modelModifiers:{trim:!0},placeholder:"\u5E94\u7528\u540D\u79F0",class:"filter-item",clearable:"",onKeyup:q(V,["enter","native"])},null,8,["modelValue","onKeyup"])]),_:1}),d(u,{span:4},{default:n(()=>[d(r,{modelValue:t(e).queryDatas.appId,"onUpdate:modelValue":a[1]||(a[1]=l=>t(e).queryDatas.appId=l),modelModifiers:{trim:!0},placeholder:"\u5E94\u7528ID",class:"filter-item",clearable:"",onKeyup:q(V,["enter","native"])},null,8,["modelValue","onKeyup"])]),_:1}),d(u,{span:4},{default:n(()=>[y((s(),c(g,{class:"filter-item",plain:"",icon:"el-icon-search",onClick:V},{default:n(()=>[Te]),_:1})),[[k]])]),_:1})]),_:1}),d(D,{type:"flex",justify:"end"},{default:n(()=>[d(u,{span:4,style:{"text-align":"right","margin-top":"15px"}},{default:n(()=>[y((s(),c(g,{class:"filter-item",style:{"margin-left":"10px"},plain:"",icon:"el-icon-plus",onClick:K},{default:n(()=>[Fe]),_:1})),[[k]])]),_:1})]),_:1}),d(ee,{data:t(e).tableData.rows,style:{width:"100%"},"cell-style":Y,"header-cell-style":Z},{default:n(()=>[d(w,{prop:"id",label:"#",width:"80","show-overflow-tooltip":""}),d(w,{prop:"appId",label:"AppId","show-overflow-tooltip":""},{default:n(l=>[y((s(),c(g,{type:"text",onClick:I=>C(l.row)},{default:n(()=>[f(h(l.row.appId),1)]),_:2},1032,["onClick"])),[[k]])]),_:1}),d(w,{prop:"name",label:"\u5E94\u7528\u540D\u79F0","show-overflow-tooltip":""},{default:n(l=>[d(g,{type:"text",onClick:I=>C(l.row)},{default:n(()=>[f(h(l.row.name),1)]),_:2},1032,["onClick"])]),_:1}),d(w,{prop:"deviceProfileName",label:"\u8BBE\u5907\u914D\u7F6E\u540D\u79F0","show-overflow-tooltip":""},{default:n(l=>[d(g,{type:"text",onClick:I=>o.$router.push({path:"/profile/profileList",query:{deviceProfileId:l.row.deviceProfileId}})},{default:n(()=>[f(h(l.row.deviceProfileName),1)]),_:2},1032,["onClick"])]),_:1}),d(w,{prop:"description",label:"\u63CF\u8FF0","show-overflow-tooltip":""})]),_:1},8,["data"]),_("div",Pe,[d(oe,{"current-page":t(e).tableData.pagination.pageNum,"pager-count":5,"page-sizes":[10,20,50,100],"page-size":t(e).tableData.pagination.pageSize,"page-count":t(e).tableData.pagination.totalPage,background:"",layout:"sizes, prev, pager, next, jumper",onSizeChange:M,onCurrentChange:W},null,8,["current-page","page-size","page-count"])]),d(de,{title:"Applications / "+(t(e).drawerType==1?"\u65B0\u589E":t(e).form.name),"before-close":F,modelValue:t(e).drawer,"onUpdate:modelValue":a[16]||(a[16]=l=>t(e).drawer=l),"destroy-on-close":!0,"custom-class":"drawer",ref:"drawer","close-on-press-escape":!0},{default:n(()=>[_("div",Ce,[d(le,{modelValue:t(e).activeTab,"onUpdate:modelValue":a[15]||(a[15]=l=>t(e).activeTab=l),stretch:!0},{default:n(()=>[d(A,{label:"\u57FA\u672C\u4FE1\u606F",name:"first"},{default:n(()=>[d(x,{ref:"form",model:t(e).form},{default:n(()=>[t(e).drawerType==2?(s(),c(p,{key:0,prop:"appId",label:"AppId","label-width":t(e).formLabelWidth,rules:[{required:!0,message:"\u8BF7\u8F93\u5165AppId",trigger:"blur"}]},{default:n(()=>[d(r,{modelValue:t(e).form.appId,"onUpdate:modelValue":a[2]||(a[2]=l=>t(e).form.appId=l),autocomplete:"off",disabled:t(e).drawerType==2},null,8,["modelValue","disabled"])]),_:1},8,["label-width"])):P("",!0),d(p,{prop:"name",label:"\u5E94\u7528\u540D\u79F0","label-width":t(e).formLabelWidth,rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5E94\u7528\u540D\u79F0",trigger:"blur"}]},{default:n(()=>[d(r,{modelValue:t(e).form.name,"onUpdate:modelValue":a[3]||(a[3]=l=>t(e).form.name=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),d(p,{prop:"description",label:"\u63CF\u8FF0","label-width":t(e).formLabelWidth},{default:n(()=>[d(r,{modelValue:t(e).form.description,"onUpdate:modelValue":a[4]||(a[4]=l=>t(e).form.description=l),autocomplete:"off",type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"\u65E0",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),_:1},8,["label-width"]),d(p,{prop:"networkId",label:"Network","label-width":t(e).formLabelWidth},{default:n(()=>[d(U,{modelValue:t(e).form.networkId,"onUpdate:modelValue":a[5]||(a[5]=l=>t(e).form.networkId=l),placeholder:"",clearable:""},{default:n(()=>[(s(!0),T(z,null,H(t(e).networkConfigList,l=>(s(),c(L,{key:l.id,label:l.networkName,value:l.networkId},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label-width"]),t(e).form.networkId.length>0?(s(),c(p,{key:1,prop:"networkId",label:"NetworkId","label-width":t(e).formLabelWidth},{default:n(()=>[d(r,{modelValue:t(e).form.networkId,"onUpdate:modelValue":a[6]||(a[6]=l=>t(e).form.networkId=l),readonly:"",disabled:""},null,8,["modelValue"])]),_:1},8,["label-width"])):P("",!0),d(p,{prop:"deviceProfileId",label:"\u8BBE\u5907\u914D\u7F6E","label-width":t(e).formLabelWidth},{default:n(()=>[d(ae,{modelValue:t(e).form.deviceProfileId,"onUpdate:modelValue":a[7]||(a[7]=l=>t(e).form.deviceProfileId=l),options:t(e).options,filterable:""},{default:n(({node:l,data:I})=>[_("span",null,h(I.label),1),l.isLeaf?P("",!0):(s(),T("span",De,"("+h(I.children.length)+")",1))]),_:1},8,["modelValue","options"])]),_:1},8,["label-width"]),d(p,{prop:"codecType",label:"\u89E3\u7801\u7C7B\u578B","label-width":t(e).formLabelWidth},{default:n(()=>[d(r,{modelValue:t(e).form.codecType,"onUpdate:modelValue":a[8]||(a[8]=l=>t(e).form.codecType=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),d(p,null,{default:n(()=>[_("div",Le,[y((s(),c(g,{class:"subButton",type:"primary",onClick:Q,loading:t(e).drawerLoading},{default:n(()=>[f(h(t(e).drawerLoading?"\u63D0\u4EA4\u4E2D ...":"\u786E \u5B9A"),1)]),_:1},8,["loading"])),[[k]])])]),_:1})]),_:1},8,["model"])]),_:1}),d(A,{label:"\u9AD8\u7EA7\u914D\u7F6E",disabled:t(e).drawerType==1},{default:n(()=>[d(x,{ref:"advancedForm",model:t(e).advancedForm,size:"mini"},{default:n(()=>[d(p,{label:"\u8F6C\u53D1\u7C7B\u578B",prop:"hookType"},{default:n(()=>[d(U,{modelValue:t(e).advancedForm.hookType,"onUpdate:modelValue":a[9]||(a[9]=l=>t(e).advancedForm.hookType=l),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u8F6C\u53D1\u7C7B\u578B"},{default:n(()=>[(s(!0),T(z,null,H(t(e).hookTypes,l=>(s(),c(L,{key:l.id,label:l.name,value:l.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),d(p,{label:"\u8F6C\u53D1\xB7\u4E3B\u673A\u5730\u5740",prop:"hookHost"},{default:n(()=>[d(r,{modelValue:t(e).advancedForm.hookHost,"onUpdate:modelValue":a[10]||(a[10]=l=>t(e).advancedForm.hookHost=l),placeholder:"(tcp://host:port || http://host:port/api)"},null,8,["modelValue"])]),_:1}),d(p,{label:"\u7528\u6237\u540D(MQTT)",prop:"hookUser"},{default:n(()=>[d(r,{modelValue:t(e).advancedForm.hookUser,"onUpdate:modelValue":a[11]||(a[11]=l=>t(e).advancedForm.hookUser=l),placeholder:""},null,8,["modelValue"])]),_:1}),d(p,{label:"\u5BC6\u7801(MQTT)",prop:"hookPass"},{default:n(()=>[d(r,{modelValue:t(e).advancedForm.hookPass,"onUpdate:modelValue":a[12]||(a[12]=l=>t(e).advancedForm.hookPass=l),placeholder:""},null,8,["modelValue"])]),_:1}),d(p,{label:"TOPIC(MQTT)",prop:"hookTopic"},{default:n(()=>[d(r,{modelValue:t(e).advancedForm.hookTopic,"onUpdate:modelValue":a[13]||(a[13]=l=>t(e).advancedForm.hookTopic=l),placeholder:""},null,8,["modelValue"])]),_:1}),d(p,{label:"\u5E94\u7528\u914D\u7F6E",prop:"status"},{default:n(()=>[d(te,{modelValue:t(e).advancedForm.status,"onUpdate:modelValue":a[14]||(a[14]=l=>t(e).advancedForm.status=l)},{default:n(()=>[d(N,{label:10},{default:n(()=>[Ue]),_:1}),d(N,{label:20},{default:n(()=>[xe]),_:1})]),_:1},8,["modelValue"])]),_:1}),d(p,null,{default:n(()=>[_("div",Ae,[y((s(),c(g,{class:"subButton",type:"primary",onClick:X},{default:n(()=>[Ne]),_:1})),[[k]])])]),_:1})]),_:1},8,["model"])]),_:1},8,["disabled"])]),_:1},8,["modelValue"])])]),_:1},8,["title","modelValue"])])])}}};var We=Ie(qe,[["__scopeId","data-v-6147e35e"]]);export{We as default};
