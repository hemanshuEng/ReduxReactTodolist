(window.webpackJsonpreduxtodo=window.webpackJsonpreduxtodo||[]).push([[0],{29:function(e,t,n){e.exports=n(59)},34:function(e,t,n){},35:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(11),c=n.n(r),i=(n(34),n(35),n(5)),s=n(6),l=n(10),u=n(7),p=n(9),m=n(13),d=n(8),h=n(17),b=n.n(h),f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault();var t={title:n.state.title,body:n.state.body};n.props.createPost(t),n.setState({title:"",body:""})},n.state={title:"",body:""},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Add Posts"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{onChange:this.handleChange,type:"text",name:"title",className:"form-control",placeholder:"Title",value:this.state.title})),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{onChange:this.handleChange,type:"text",name:"body",className:"form-control",placeholder:"Body",value:this.state.body})),o.a.createElement("input",{type:"submit",className:"btn btn-primary"})))}}]),t}(a.Component),O=Object(d.b)(null,{createPost:function(e){return function(t){b.a.post("https://jsonplaceholder.typicode.com/posts",e).then(function(e){return t({type:"NEW_POST",payload:e.data})})}}})(f),y=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPosts()}},{key:"componentWillReceiveProps",value:function(e){e.newPost&&this.props.posts.unshift(e.newPost)}},{key:"render",value:function(){var e=this.props.posts.map(function(e){return o.a.createElement("div",{key:e.id,className:"col-6"},o.a.createElement("h3",null,e.title),o.a.createElement("p",null,e.body))});return o.a.createElement("div",null,o.a.createElement("h1",{className:"text-center"},"Posts"),o.a.createElement("div",{className:"row"},e))}}]),t}(a.Component),v=Object(d.b)(function(e){return{posts:e.posts.items,newPost:e.posts.item}},{fetchPosts:function(){return function(e){console.log("fething"),b.a.get("https://jsonplaceholder.typicode.com/posts").then(function(t){return e({type:"FETCH_POSTS",payload:t.data})})}}})(y),E=n(3),j=n(28);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var P={items:[],item:{}},S=Object(E.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return console.log("reducer"),g({},e,{items:t.payload});case"NEW_POST":return g({},e,{item:t.payload});default:return e}}}),_=[j.a],N=Object(E.e)(S,{},Object(E.d)(E.a.apply(void 0,_),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),k=(n(58),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,{store:N},o.a.createElement("div",null,o.a.createElement("div",{className:"container"},o.a.createElement(O,null),o.a.createElement(v,null))))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.81fb0675.chunk.js.map