(function(){"use strict";var e={1428:function(e,t,i){var n=i(5130),r=i(6768);const s={id:"app"};function a(e,t,i,n,a,o){const l=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",s,[(0,r.bF)(l)])}var o={name:"App"},l=i(1241);const c=(0,l.A)(o,[["render",a]]);var d=c,u=i(1387),p=i(4232);const m={class:"container"},f={class:"d-flex justify-content-between align-items-center py-3"},k=(0,r.Lk)("h1",null,"Recipe App",-1),g={key:3,class:"nav-link"},h=(0,r.Lk)("main",null,[(0,r.Lk)("h2",null,"Welcome to Recipe App")],-1);function b(e,t,i,n,s,a){const o=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",m,[(0,r.Lk)("header",f,[k,(0,r.Lk)("nav",null,[(0,r.bF)(o,{to:"/",class:"nav-link"},{default:(0,r.k6)((()=>[(0,r.eW)("Home")])),_:1}),(0,r.bF)(o,{to:"/recipes",class:"nav-link"},{default:(0,r.k6)((()=>[(0,r.eW)("Recipes")])),_:1}),s.isAuthenticated?((0,r.uX)(),(0,r.Wv)(o,{key:0,to:"/add-recipe",class:"nav-link"},{default:(0,r.k6)((()=>[(0,r.eW)("Add Recipe")])),_:1})):(0,r.Q3)("",!0),s.isAuthenticated?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)(o,{key:1,to:"/login",class:"nav-link"},{default:(0,r.k6)((()=>[(0,r.eW)("Login")])),_:1})),s.isAuthenticated?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)(o,{key:2,to:"/register",class:"nav-link"},{default:(0,r.k6)((()=>[(0,r.eW)("Register")])),_:1})),s.isAuthenticated?((0,r.uX)(),(0,r.CE)("span",g,(0,p.v_)(s.userEmail),1)):(0,r.Q3)("",!0),s.isAuthenticated?((0,r.uX)(),(0,r.CE)("button",{key:4,onClick:t[0]||(t[0]=(...e)=>a.logout&&a.logout(...e)),class:"btn btn-link"},"Logout")):(0,r.Q3)("",!0)])]),h])}i(4114);var v=i(6400),L=i(7845);const y={apiKey:"AIzaSyB7sC2pHWR12cGP2FY0jfwxoZsjl8XuAF8",authDomain:"recipefinder-5fdfd.firebaseapp.com",projectId:"recipefinder-5fdfd",storageBucket:"recipefinder-5fdfd.appspot.com",messagingSenderId:"607865192756",appId:"1:607865192756:web:3402ffdfa4b09dc5c2a561",measurementId:"G-12W85R5BTK"},w=(0,v.Wp)(y),E=(0,L.xI)(w);var C={name:"HomeView",data(){return{isAuthenticated:!1,userEmail:""}},created(){(0,L.hg)(E,(e=>{this.isAuthenticated=!!e,this.userEmail=e?e.email:""}))},methods:{logout(){(0,L.CI)(E).then((()=>{this.isAuthenticated=!1,this.userEmail="",this.$router.push("/login")}))}}};const I=(0,l.A)(C,[["render",b]]);var A=I;const R={class:"container"},_={class:"d-flex justify-content-between align-items-center py-3"},X=(0,r.Lk)("h1",null,"Recipe App",-1),T=(0,r.Lk)("h2",null,"Recipe List",-1),$={class:"row"},U={class:"card mb-4"},F=["src"],W={key:1,src:"path/to/default/image.jpg",class:"card-img-top",alt:"Default Image"},x={class:"card-body"},D={class:"card-title"},j={class:"card-text"},V=(0,r.Lk)("footer",{class:"py-3 text-center"},[(0,r.Lk)("p",null,"Contact us: info@recipeapp.com"),(0,r.Lk)("p",null,"Follow us on social media: [links]")],-1);function q(e,t,i,n,s,a){const o=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",R,[(0,r.Lk)("header",_,[X,(0,r.Lk)("nav",null,[(0,r.bF)(o,{to:"/",class:"nav-link"},{default:(0,r.k6)((()=>[(0,r.eW)("Home")])),_:1}),(0,r.bF)(o,{to:"/recipes",class:"nav-link"},{default:(0,r.k6)((()=>[(0,r.eW)("Recipes")])),_:1}),(0,r.bF)(o,{to:"/add-recipe",class:"nav-link"},{default:(0,r.k6)((()=>[(0,r.eW)("Add Recipe")])),_:1}),(0,r.bF)(o,{to:"/favorites",class:"nav-link"},{default:(0,r.k6)((()=>[(0,r.eW)("Favorites")])),_:1})])]),(0,r.Lk)("main",null,[T,(0,r.Lk)("div",$,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.recipes,(e=>((0,r.uX)(),(0,r.CE)("div",{class:"col-md-4",key:e._id},[(0,r.Lk)("div",U,[e.image?((0,r.uX)(),(0,r.CE)("img",{key:0,src:e.image,class:"card-img-top",alt:"Recipe Image"},null,8,F)):((0,r.uX)(),(0,r.CE)("img",W)),(0,r.Lk)("div",x,[(0,r.Lk)("h5",D,(0,p.v_)(e.title),1),(0,r.Lk)("p",j,(0,p.v_)(e.description),1),(0,r.bF)(o,{to:`/recipes/${e._id}`,class:"btn btn-primary"},{default:(0,r.k6)((()=>[(0,r.eW)("View Recipe")])),_:2},1032,["to"])])])])))),128))])]),V])}var J=i(4373);const O={NODE_ENV:"production",BASE_URL:"/"}.REACT_APP_API_URL||"http://localhost:5000/api",P=J.A.create({baseURL:O,headers:{"Content-Type":"application/json"}});P.interceptors.request.use((async e=>{const t=await(E.currentUser?.getIdToken());return t&&(e.headers["Authorization"]=`Bearer ${t}`),e}));var S=P,Q={name:"RecipeList",data(){return{recipes:[]}},async created(){try{const e=await S.get("/recipes");this.recipes=e.data}catch(e){console.error("Error fetching recipes:",e)}}};const K=(0,l.A)(Q,[["render",q]]);var B=K;const N={class:"container"},H={key:0,class:"nav-link"},z={key:1,class:"nav-link"},M=(0,r.Lk)("h2",null,"Add Recipe",-1),G={class:"mb-3"},Y=(0,r.Lk)("label",{for:"title",class:"form-label"},"Title",-1),Z={class:"mb-3"},ee=(0,r.Lk)("label",{for:"ingredients",class:"form-label"},"Ingredients",-1),te={class:"list-group mt-2"},ie=["onClick"],ne={class:"mb-3"},re=(0,r.Lk)("label",{for:"instructions",class:"form-label"},"Instructions",-1),se={class:"mb-3"},ae=(0,r.Lk)("label",{for:"cookingTime",class:"form-label"},"Cooking Time",-1),oe={class:"mb-3"},le=(0,r.Lk)("label",{for:"difficulty",class:"form-label"},"Difficulty",-1),ce={class:"mb-3"},de=(0,r.Lk)("label",{for:"image",class:"form-label"},"Recipe Image",-1),ue=["src"],pe=(0,r.Lk)("button",{type:"submit",class:"btn btn-primary"},"Add Recipe",-1);function me(e,t,i,s,a,o){return(0,r.uX)(),(0,r.CE)("div",N,[a.isAuthenticated?((0,r.uX)(),(0,r.CE)("span",H,(0,p.v_)(a.userEmail),1)):(0,r.Q3)("",!0),a.isAuthenticated?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("span",z,"uh oh")),M,(0,r.Lk)("form",{onSubmit:t[8]||(t[8]=(0,n.D$)(((...e)=>o.addRecipe&&o.addRecipe(...e)),["prevent"]))},[(0,r.Lk)("div",G,[Y,(0,r.bo)((0,r.Lk)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[0]||(t[0]=e=>a.title=e),required:""},null,512),[[n.Jo,a.title]])]),(0,r.Lk)("div",Z,[ee,(0,r.bo)((0,r.Lk)("input",{type:"text",class:"form-control",id:"ingredients","onUpdate:modelValue":t[1]||(t[1]=e=>a.newIngredient=e),onKeyup:t[2]||(t[2]=(0,n.jR)(((...e)=>o.addIngredient&&o.addIngredient(...e)),["enter"]))},null,544),[[n.Jo,a.newIngredient]]),(0,r.Lk)("button",{onClick:t[3]||(t[3]=(0,n.D$)(((...e)=>o.addIngredient&&o.addIngredient(...e)),["prevent"])),class:"btn btn-secondary mt-2"},"Add"),(0,r.Lk)("ul",te,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.ingredients,((e,t)=>((0,r.uX)(),(0,r.CE)("li",{class:"list-group-item",key:t},[(0,r.eW)((0,p.v_)(e)+" ",1),(0,r.Lk)("button",{onClick:(0,n.D$)((e=>o.removeIngredient(t)),["prevent"]),class:"btn btn-danger btn-sm float-end"},"Remove",8,ie)])))),128))])]),(0,r.Lk)("div",ne,[re,(0,r.bo)((0,r.Lk)("textarea",{class:"form-control",id:"instructions","onUpdate:modelValue":t[4]||(t[4]=e=>a.instructions=e),required:""},null,512),[[n.Jo,a.instructions]])]),(0,r.Lk)("div",se,[ae,(0,r.bo)((0,r.Lk)("input",{type:"number",class:"form-control",id:"cookingTime","onUpdate:modelValue":t[5]||(t[5]=e=>a.cookingTime=e),required:""},null,512),[[n.Jo,a.cookingTime]])]),(0,r.Lk)("div",oe,[le,(0,r.bo)((0,r.Lk)("input",{type:"text",class:"form-control",id:"difficulty","onUpdate:modelValue":t[6]||(t[6]=e=>a.difficulty=e),required:""},null,512),[[n.Jo,a.difficulty]])]),(0,r.Lk)("div",ce,[de,(0,r.Lk)("input",{type:"file",class:"form-control",id:"image",onChange:t[7]||(t[7]=(...e)=>o.onFileChange&&o.onFileChange(...e))},null,32),a.imagePreview?((0,r.uX)(),(0,r.CE)("img",{key:0,src:a.imagePreview,class:"img-thumbnail mt-2",alt:"Image Preview"},null,8,ue)):(0,r.Q3)("",!0)]),pe],32)])}i(4603),i(7566),i(8721);var fe={name:"AddRecipe",data(){return{title:"",ingredients:[],newIngredient:"",instructions:"",cookingTime:0,difficulty:"",image:null,imagePreview:null,isAuthenticated:!1,userEmail:""}},created(){E.onAuthStateChanged((e=>{e?(this.isAuthenticated=!0,this.userEmail=e.email):this.isAuthenticated=!1}))},methods:{addIngredient(){this.newIngredient&&(this.ingredients.push(this.newIngredient),this.newIngredient="")},removeIngredient(e){this.ingredients.splice(e,1)},onFileChange(e){const t=e.target.files[0];this.image=t,this.imagePreview=URL.createObjectURL(t)},async addRecipe(){try{const e=await E.currentUser.getIdToken(!0),t=new FormData;t.append("title",this.title),t.append("ingredients",JSON.stringify(this.ingredients)),t.append("instructions",this.instructions),t.append("cookingTime",this.cookingTime),t.append("difficulty",this.difficulty),t.append("userId",E.currentUser.uid),this.image&&t.append("image",this.image),await S.post("/recipes",t,{headers:{Authorization:`Bearer ${e}`,"Content-Type":"multipart/form-data"}}),this.$router.push("/recipes")}catch(e){console.error("Error adding recipe:",e)}}}};const ke=(0,l.A)(fe,[["render",me]]);var ge=ke;const he={class:"container"},be={key:0,class:"nav-link"},ve={key:1,class:"nav-link"},Le=(0,r.Lk)("h2",null,"Edit Recipe",-1),ye={class:"mb-3"},we=(0,r.Lk)("label",{for:"title",class:"form-label"},"Title",-1),Ee={class:"mb-3"},Ce=(0,r.Lk)("label",{for:"ingredients",class:"form-label"},"Ingredients",-1),Ie={class:"list-group mt-2"},Ae=["onClick"],Re={class:"mb-3"},_e=(0,r.Lk)("label",{for:"instructions",class:"form-label"},"Instructions",-1),Xe={class:"mb-3"},Te=(0,r.Lk)("label",{for:"cookingTime",class:"form-label"},"Cooking Time",-1),$e={class:"mb-3"},Ue=(0,r.Lk)("label",{for:"difficulty",class:"form-label"},"Difficulty",-1),Fe=(0,r.Lk)("button",{type:"submit",class:"btn btn-primary"},"Update Recipe",-1);function We(e,t,i,s,a,o){return(0,r.uX)(),(0,r.CE)("div",he,[e.isAuthenticated?((0,r.uX)(),(0,r.CE)("span",be,(0,p.v_)(e.userEmail),1)):(0,r.Q3)("",!0),e.isAuthenticated?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("span",ve,"uh oh")),Le,(0,r.Lk)("form",{onSubmit:t[8]||(t[8]=(0,n.D$)(((...e)=>o.editRecipe&&o.editRecipe(...e)),["prevent"]))},[(0,r.Lk)("div",ye,[we,(0,r.bo)((0,r.Lk)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[0]||(t[0]=e=>a.recipe.title=e),required:""},null,512),[[n.Jo,a.recipe.title]])]),(0,r.Lk)("div",Ee,[Ce,(0,r.bo)((0,r.Lk)("input",{type:"text",class:"form-control",id:"ingredients","onUpdate:modelValue":t[1]||(t[1]=e=>a.newIngredient=e),onKeyup:t[2]||(t[2]=(0,n.jR)(((...e)=>o.addIngredient&&o.addIngredient(...e)),["enter"]))},null,544),[[n.Jo,a.newIngredient]]),(0,r.Lk)("button",{onClick:t[3]||(t[3]=(0,n.D$)(((...e)=>o.addIngredient&&o.addIngredient(...e)),["prevent"])),class:"btn btn-secondary mt-2"},"Add"),(0,r.Lk)("ul",Ie,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.recipe.ingredients,((e,t)=>((0,r.uX)(),(0,r.CE)("li",{class:"list-group-item",key:t},[(0,r.eW)((0,p.v_)(e)+" ",1),(0,r.Lk)("button",{onClick:(0,n.D$)((e=>o.removeIngredient(t)),["prevent"]),class:"btn btn-danger btn-sm float-end"},"Remove",8,Ae)])))),128))])]),(0,r.Lk)("div",Re,[_e,(0,r.bo)((0,r.Lk)("textarea",{class:"form-control",id:"instructions","onUpdate:modelValue":t[4]||(t[4]=e=>a.recipe.instructions=e),required:""},null,512),[[n.Jo,a.recipe.instructions]])]),(0,r.Lk)("div",Xe,[Te,(0,r.bo)((0,r.Lk)("input",{type:"number",class:"form-control",id:"cookingTime","onUpdate:modelValue":t[5]||(t[5]=e=>a.recipe.cookingTime=e),required:""},null,512),[[n.Jo,a.recipe.cookingTime]])]),(0,r.Lk)("div",$e,[Ue,(0,r.bo)((0,r.Lk)("input",{type:"text",class:"form-control",id:"difficulty","onUpdate:modelValue":t[6]||(t[6]=e=>a.recipe.difficulty=e),required:""},null,512),[[n.Jo,a.recipe.difficulty]])]),Fe,(0,r.Lk)("button",{onClick:t[7]||(t[7]=(0,n.D$)(((...e)=>o.deleteRecipe&&o.deleteRecipe(...e)),["prevent"])),class:"btn btn-danger float-end"},"Delete Recipe")],32)])}var xe={name:"EditRecipe",data(){return{recipe:{title:"",ingredients:[],instructions:"",cookingTime:0,difficulty:""},newIngredient:""}},async created(){const e=this.$route.params.id;try{const t=await S.get(`/recipes/${e}`);t.data?this.recipe=t.data:console.error("No such document!")}catch(t){console.error("Error fetching recipe:",t)}},methods:{addIngredient(){this.newIngredient&&(this.recipe.ingredients.push(this.newIngredient),this.newIngredient="")},removeIngredient(e){this.recipe.ingredients.splice(e,1)},async editRecipe(){try{const e=this.$route.params.id;await S.put(`/recipes/${e}`,this.recipe),this.$router.push("/recipes")}catch(e){console.error("Error updating recipe:",e)}},async deleteRecipe(){try{const e=this.$route.params.id;await S.delete(`/recipes/${e}`),this.$router.push("/recipes")}catch(e){console.error("Error deleting recipe:",e)}}}};const De=(0,l.A)(xe,[["render",We]]);var je=De;const Ve={class:"container"},qe=(0,r.Lk)("h2",null,"Recipe Detail",-1),Je={key:0},Oe=["src"],Pe=(0,r.Lk)("p",null,[(0,r.Lk)("strong",null,"Ingredients:")],-1),Se=(0,r.Lk)("p",null,[(0,r.Lk)("strong",null,"Instructions:")],-1),Qe=(0,r.Lk)("strong",null,"Cooking Time:",-1),Ke=(0,r.Lk)("strong",null,"Difficulty:",-1),Be={key:1},Ne=(0,r.Lk)("p",null,"Loading recipe...",-1),He=[Ne];function ze(e,t,i,n,s,a){const o=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",Ve,[qe,s.recipe?((0,r.uX)(),(0,r.CE)("div",Je,[(0,r.Lk)("h3",null,(0,p.v_)(s.recipe.title),1),s.recipe.image?((0,r.uX)(),(0,r.CE)("img",{key:0,src:s.recipe.image,class:"img-fluid",alt:"Recipe Image"},null,8,Oe)):(0,r.Q3)("",!0),Pe,(0,r.Lk)("ul",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.recipe.ingredients,((e,t)=>((0,r.uX)(),(0,r.CE)("li",{key:t},(0,p.v_)(e),1)))),128))]),Se,(0,r.Lk)("p",null,(0,p.v_)(s.recipe.instructions),1),(0,r.Lk)("p",null,[Qe,(0,r.eW)(" "+(0,p.v_)(s.recipe.cookingTime)+" minutes",1)]),(0,r.Lk)("p",null,[Ke,(0,r.eW)(" "+(0,p.v_)(s.recipe.difficulty),1)]),(0,r.bF)(o,{to:`/edit-recipe/${s.recipe._id}`,class:"btn btn-primary"},{default:(0,r.k6)((()=>[(0,r.eW)("Edit Recipe")])),_:1},8,["to"])])):((0,r.uX)(),(0,r.CE)("div",Be,He))])}var Me={name:"RecipeDetail",data(){return{recipe:null}},async created(){const e=this.$route.params.id;try{const t=await S.get(`/recipes/${e}`);t.data?this.recipe=t.data:console.error("No such document!")}catch(t){console.error("Error fetching recipe:",t)}}};const Ge=(0,l.A)(Me,[["render",ze]]);var Ye=Ge;const Ze={class:"container"},et=(0,r.Lk)("h2",null,"Login",-1),tt={class:"mb-3"},it=(0,r.Lk)("label",{for:"email",class:"form-label"},"Email",-1),nt={class:"mb-3"},rt=(0,r.Lk)("label",{for:"password",class:"form-label"},"Password",-1),st=(0,r.Lk)("button",{type:"submit",class:"btn btn-primary"},"Login",-1);function at(e,t,i,s,a,o){return(0,r.uX)(),(0,r.CE)("div",Ze,[et,(0,r.Lk)("form",{onSubmit:t[2]||(t[2]=(0,n.D$)(((...e)=>o.login&&o.login(...e)),["prevent"]))},[(0,r.Lk)("div",tt,[it,(0,r.bo)((0,r.Lk)("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":t[0]||(t[0]=e=>a.email=e),required:""},null,512),[[n.Jo,a.email]])]),(0,r.Lk)("div",nt,[rt,(0,r.bo)((0,r.Lk)("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>a.password=e),required:""},null,512),[[n.Jo,a.password]])]),st],32)])}var ot={name:"UserLogin",data(){return{email:"",password:""}},methods:{async login(){try{await(0,L.x9)(E,this.email,this.password),this.$router.push("/")}catch(e){alert(e.message)}}}};const lt=(0,l.A)(ot,[["render",at]]);var ct=lt;const dt={class:"container"},ut=(0,r.Lk)("h2",null,"Register",-1),pt={class:"mb-3"},mt=(0,r.Lk)("label",{for:"email",class:"form-label"},"Email",-1),ft={class:"mb-3"},kt=(0,r.Lk)("label",{for:"password",class:"form-label"},"Password",-1),gt=(0,r.Lk)("button",{type:"submit",class:"btn btn-primary"},"Register",-1);function ht(e,t,i,s,a,o){return(0,r.uX)(),(0,r.CE)("div",dt,[ut,(0,r.Lk)("form",{onSubmit:t[2]||(t[2]=(0,n.D$)(((...e)=>o.register&&o.register(...e)),["prevent"]))},[(0,r.Lk)("div",pt,[mt,(0,r.bo)((0,r.Lk)("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":t[0]||(t[0]=e=>a.email=e),required:""},null,512),[[n.Jo,a.email]])]),(0,r.Lk)("div",ft,[kt,(0,r.bo)((0,r.Lk)("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>a.password=e),required:""},null,512),[[n.Jo,a.password]])]),gt],32)])}var bt={name:"UserRegister",data(){return{email:"",password:""}},methods:{async register(){try{await(0,L.eJ)(E,this.email,this.password),this.$router.push("/login")}catch(e){alert(e.message)}}}};const vt=(0,l.A)(bt,[["render",ht]]);var Lt=vt;const yt=[{path:"/",component:A},{path:"/recipes",component:B},{path:"/add-recipe",component:ge,meta:{requiresAuth:!0}},{path:"/edit-recipe/:id",component:je,meta:{requiresAuth:!0}},{path:"/recipes/:id",component:Ye},{path:"/login",component:ct},{path:"/register",component:Lt}],wt=(0,u.aE)({history:(0,u.LA)(),routes:yt});wt.beforeEach(((e,t,i)=>{const n=e.matched.some((e=>e.meta.requiresAuth)),r=E.currentUser;n&&!r?i("/login"):i()}));var Et=wt;(0,n.Ef)(d).use(Et).mount("#app")}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,i),s.exports}i.m=e,function(){var e=[];i.O=function(t,n,r,s){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],s=e[d][2];for(var o=!0,l=0;l<n.length;l++)(!1&s||a>=s)&&Object.keys(i.O).every((function(e){return i.O[e](n[l])}))?n.splice(l--,1):(o=!1,s<a&&(a=s));if(o){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,r,s]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,s,a=n[0],o=n[1],l=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in o)i.o(o,r)&&(i.m[r]=o[r]);if(l)var d=l(i)}for(t&&t(n);c<a.length;c++)s=a[c],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(d)},n=self["webpackChunkcook"]=self["webpackChunkcook"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[504],(function(){return i(1428)}));n=i.O(n)})();
//# sourceMappingURL=app.70a0b702.js.map