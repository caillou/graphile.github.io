(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{416:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return v}),a.d(t,"_frontmatter",function(){return G});var n=a(171),r=a.n(n),o=a(4),s=a.n(o),i=a(0),l=a.n(i),c=a(22),m=a(18),p=a(33),u=a(19),h=a(16),d=a(20),g=a(21),f=a(34),b=a(35),y=a(58),E=a.n(y),w=a(39),v=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=null,a}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.components;r()(e,["components"]);return l.a.createElement(c.MDXTag,{name:"wrapper",components:t},l.a.createElement(m.a,{blue:!0},l.a.createElement(u.a,{bg:"white"},l.a.createElement(c.MDXTag,{name:"h2",components:t},"PostGraphile Instant GraphQL API"),l.a.createElement("br",null),l.a.createElement("div",{className:"flex"},l.a.createElement("a",{className:"button--solid-light",href:"/postgraphile/introduction/"},l.a.createElement("span",{className:"fas fa-book-open"})," Documentation ",l.a.createElement("span",{className:"fas fa-fw fa-arrow-right"}))),l.a.createElement("div",{className:"flex"},l.a.createElement("div",{style:{margin:"0 0.5rem 0 0"}},l.a.createElement("a",{className:"button--solid",href:"https://discord.gg/graphile"},l.a.createElement("span",{className:"fab fa-discord"})," Join Chat")),l.a.createElement("div",{style:{margin:"0 0.5rem 0 0"}},l.a.createElement("a",{className:"button--solid",href:"https://github.com/graphile/postgraphile"},l.a.createElement("span",{className:"fas fa-star"})," View on GitHub")))),l.a.createElement(d.a,{bg:"white"},l.a.createElement(h.b,null,l.a.createElement(h.a,{className:"center",span:"8"},l.a.createElement("img",{src:E.a,style:{maxWidth:"100%"}})))),l.a.createElement(g.a,{from:"white",to:"dark"}),l.a.createElement(d.a,{bg:"dark"},l.a.createElement(h.b,null,l.a.createElement(h.a,{span:"8",offset:"2",className:"tc"},l.a.createElement(c.MDXTag,{name:"h3",components:t},"Instantly spin-up a GraphQL API server by pointing PostGraphile at your existing PostgreSQL database")))),l.a.createElement(g.a,{from:"dark",to:"light",via:"medium"}),l.a.createElement(d.a,{bg:"light"},l.a.createElement(f.a,null,l.a.createElement("big",null,"Try it now:"),l.a.createElement("div",{className:"mv4"},l.a.createElement("big",null,l.a.createElement("code",null,"npx postgraphile -c my_db --watch"))),l.a.createElement("small",null,l.a.createElement("em",null,"requires Node.js 8.6 or higher"))),l.a.createElement("p",{className:"f7"},"If your database is on another machine, you may pass a connection string in place of ",l.a.createElement("tt",null,"my_db"),". Connection strings have the form:"),l.a.createElement("p",{className:"f7"},l.a.createElement("tt",null,"postgres://pg_user:pg_pass@pg_host:pg_port/pg_db?ssl=1"))),l.a.createElement(g.a,{from:"light",to:"nodes",via:"medium",down:!0}),l.a.createElement(d.a,{bg:"nodes"},l.a.createElement("div",{style:{maxWidth:"48em",margin:"auto"}},l.a.createElement(c.MDXTag,{name:"h3",components:t},"Rapidly develop lightning-fast powerful applications"),l.a.createElement("big",null,"PostGraphile automatically detects tables, columns, indexes, relationships, views, types, functions, comments, and more — providing a GraphQL server that is highly intelligent about your data, and that automatically updates itself without restarting when you modify your database."),l.a.createElement(b.a,{bullets:["Strong PostgreSQL support","GraphQL best practices","Simple to deploy and scale","Highly customisable","Impressively high performance","Granular authorisation via RLS","Open source under MIT license","Powerful plugin system"]}))),l.a.createElement(g.a,{from:"nodes",to:"dark",via:"medium"}),l.a.createElement(d.a,{bg:"dark"},l.a.createElement(c.MDXTag,{name:"h3",components:t},"What people are saying"),l.a.createElement("div",{className:"mw9 ph3-ns flex flex-wrap justify-between"},l.a.createElement(w.a,{name:"Chad F",role:"senior technical lead",link:"https://chads.website/development/2018/08/03/How-GraphQL-Saved-My-Project.html"},"Thanks for making GraphQL something I can use on my project in a robust way with ",l.a.createElement("strong",null,"minimal effort"),". 500-1500 requests per second on a single server is pretty awesome."),l.a.createElement(w.a,{name:"Sam L",role:"full stack developer",link:"https://gitter.im/graphile/postgraphile?at=5b65d555e9ab53770c8c41a1"},"This project, Benjie's handling of it, the docs, support, and community is awesome all around. ",l.a.createElement("strong",null,"PostGraphile is a powerful, idomatic, and elegant tool.")),l.a.createElement(w.a,{name:"Max D",role:"software consultant",link:"https://twitter.com/maxdesiatov/status/1001419221102940160",linkIcon:"fab fa-twitter"},"Recently I launched a few mobile and web apps using GraphQL, Great stuff, not least thanks to wonderful PostGraphile and Apollo. ",l.a.createElement("strong",null,"At this point, it’s quite hard for me to come back and enjoy working with REST.")),l.a.createElement(w.a,{name:"Bradley A",role:"CTO",link:"https://twitter.com/bradleyayers/status/1012557510346080256",linkIcon:"fab fa-twitter"},"I setup my backend to use PostGraphile directly when querying the local database. It's removed a bunch of hand-written SQL, added type-safety to verify Postgres schema compatibility, and ",l.a.createElement("strong",null,"created a more consistent dev experience for frontend/backend code.")),l.a.createElement(w.a,{name:"Steven M",role:"VP engineering"},"Our company is under going a technology shift to use more a more modern stack. A large piece of this shift is our desire to use a GraphQL interface to our Postgres server. After researchiing we decided to try PostGraphile from the graphile.org site and ",l.a.createElement("strong",null,"we couldn't be happier"),". It's very expansive and configurable and the maintainers are available to ask questions and it's nice to see such an active group fixing bugs and adding enhancements. We're very happy with our choice!"))),l.a.createElement(g.a,{from:"dark",to:"light",down:!0}),l.a.createElement(d.a,{bg:"light"},l.a.createElement(p.a,null)),l.a.createElement(g.a,{from:"light",to:"medium"}),l.a.createElement(d.a,{bg:"medium"},l.a.createElement(b.a,{bullets:[["Client-facing GraphQL server","No need for complex server architectures, containers, etc: PostGraphile is pure Node.js and can be embedded in your existing Node.js project"],["Server-side rendering","Issue requests to your PostGraphile API without network roundtrips, fantastic for React SSR"],["Hot-reloading GraphQL API","Automatically re-generate the GraphQL schema when your database changes when you're using `--watch`"],["Lightning fast","Much faster [performance](/postgraphile/performance/) than even a hand-rolled GraphQL schema using `DataLoader`"],["No N+1 problem","PostGraphile compiles a query tree of any depth into a single SQL statement, resulting in extremely efficient execution"],["Auto-generated documentation","Database comments are exported to GraphQL and browsable via the built in PostGraphiQL IDE"],["GraphQL best practices","Including: [cursor pagination](https://facebook.github.io/relay/graphql/connections.htm), [global object identification](https://facebook.github.io/relay/graphql/objectidentification.htm), and [Relay mutations](https://facebook.github.io/relay/graphql/mutations.htm)"],["Super secure","Implement authorization via PostgreSQL's RBAC and Row-Level Security features, get full-stack security you can trust"],["Respects database permissions","Tables and columns that you don't `GRANT` access to will not be exported via GraphQL when using `--no-ignore-rbac`"],["Customisable with SQL","Excellent PostgreSQL function support, mapping to [custom queries](/postgraphile/custom-queries/), [custom mutations](/postgraphile/custom-mutations/) and [computed columns](/postgraphile/computed-columns/)"],["Customisable via smart-comments","Refine your GraphQL schema with [smart comments](/postgraphile/smart-comments/): rename, omit, enhance with a simple `COMMENT`"],["Customisable via JS","PostGraphile is built from a large number of plugins; get the exact API you desire by replacing or removing existing plugins, building your own with our helpers, or selecting from community plugins"],["Fully GraphQL compatible","We use the [reference GraphQL implementation](http://graphql.org/graphql-js/) under the hood, so you know we're spec compliant"]]}))))},t}(l.a.Component),G={layout:"marketing",path:"/postgraphile/",title:"PostGraphile - full GraphQL API server in an instant from PostgreSQL database"}}}]);
//# sourceMappingURL=component---src-pages-postgraphile-index-mdx-0bb8e66fc2f1c9f3abd4.js.map