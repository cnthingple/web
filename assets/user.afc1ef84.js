import{g as a,p as t,b as r,d as o}from"./index.10c62aa1.js";const e="api",d=s=>t(e+"/user/sign_in",s),i=s=>a(e+"/authUser/"+s.userId,s),u=s=>a(e+"/authUser",s),c=s=>r(e+"/authUser/"+s.userId+"/status",s),p=s=>t(e+"/authRoles",s),U=s=>o(e+"/authRoles/"+s.userId+"/"+s.roleId,s),g=s=>r(e+"/authUser/"+s.userId,s),A=s=>t(e+"/authUser/add",s),h=s=>t(e+"/user/password/change",s),l=s=>t(e+"/user/password/reset",s),I=s=>t(e+"/user/sign_in_card",s),R=s=>a(e+"/authRoles",s);export{R as a,i as b,p as c,U as d,g as e,A as f,u as g,h,d as i,I as j,l as r,c as s};
