(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,a){e.exports=a.p+"static/media/Star_Wars_Logo.34a0879a.svg"},46:function(e,t,a){e.exports=a(90)},51:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),i=a.n(r),s=a(11),c=a(12),o=a(15),d=a(13),m=a(14),u=a(8),p=a(9);function h(){this.fps=30,this.canvas=null,this.width=0,this.height=0,this.minVelocity=15,this.maxVelocity=30,this.stars=100,this.intervalId=0}function v(e,t,a,n){this.x=e,this.y=t,this.size=a,this.velocity=n}h.prototype.initialise=function(e){var t=this;this.containerDiv=e,t.width=window.innerWidth,t.height=window.innerHeight,window.addEventListener("resize",function(e){t.width=window.innerWidth,t.height=window.innerHeight,t.canvas.width=t.width,t.canvas.height=t.height,t.draw()});var a=document.createElement("canvas");e.appendChild(a),this.canvas=a,this.canvas.width=this.width,this.canvas.height=this.height},h.prototype.start=function(){for(var e=[],t=0;t<this.stars;t++)e[t]=new v(Math.random()*this.width,Math.random()*this.height,3*Math.random()+1,Math.random()*(this.maxVelocity-this.minVelocity)+this.minVelocity);this.stars=e;var a=this;this.intervalId=setInterval(function(){a.update(),a.draw()},1e3/this.fps)},h.prototype.stop=function(){clearInterval(this.intervalId)},h.prototype.update=function(){for(var e=1/this.fps,t=0;t<this.stars.length;t++){var a=this.stars[t];a.y+=e*a.velocity,a.y>this.height&&(this.stars[t]=new v(Math.random()*this.width,0,3*Math.random()+1,Math.random()*(this.maxVelocity-this.minVelocity)+this.minVelocity))}},h.prototype.draw=function(){var e=this.canvas.getContext("2d");e.fillStyle="#000000",e.fillRect(0,0,this.width,this.height),e.fillStyle="#ffffff";for(var t=0;t<this.stars.length;t++){var a=this.stars[t];e.fillRect(a.x,a.y,a.size,a.size)}};var f=h,E=a(38),C=a.n(E),g=(a(51),function(){return l.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.8459 11.138L12.3459 0.138C12.1529 -0.046 11.8479 -0.046 11.6549 0.138L0.154897 11.138C0.0068967 11.279 -0.0401033 11.496 0.0358967 11.685C0.111897 11.875 0.295897 11.999 0.499897 11.999H23.4999C23.7039 11.999 23.8879 11.875 23.9639 11.685C24.0399 11.496 23.9939 11.279 23.8459 11.138Z"}),l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18.4995C10 18.7755 9.776 18.9995 9.5 18.9995H6.5C6.224 18.9995 6 18.7755 6 18.4995V15.4995C6 15.2235 6.224 14.9995 6.5 14.9995H9.5C9.776 14.9995 10 15.2235 10 15.4995V18.4995ZM20.5 12.9995H3.5C3.224 12.9995 3 13.2235 3 13.4995V23.4995C3 23.7755 3.224 23.9995 3.5 23.9995H13V15.4995C13 15.2235 13.224 14.9995 13.5 14.9995H17.5C17.776 14.9995 18 15.2235 18 15.4995V23.9995H20.5C20.776 23.9995 21 23.7755 21 23.4995V13.4995C21 13.2235 20.776 12.9995 20.5 12.9995Z"}))}),w=function(){return l.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.991 6.407C23.812 2.844 20.857 0 17.25 0C15.192 0 13.277 0.928 12 2.513C10.723 0.928 8.808 0 6.75 0C3.143 0 0.187 2.844 0.009 6.407C0.003 6.437 0 6.469 0 6.5V6.75C0 6.781 0.003 6.812 0.008 6.842C0.298 12.756 7.901 21.632 11.743 23.928C11.822 23.976 11.911 24 12 24C12.089 24 12.178 23.976 12.257 23.928C16.098 21.632 23.702 12.756 23.992 6.842C23.997 6.812 24 6.781 24 6.75V6.5C24 6.469 23.997 6.437 23.991 6.407Z"}))},y=function(e){return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"header-logo"},l.a.createElement("img",{src:C.a,alt:"Logo"})),l.a.createElement("div",{className:"header-navbar"},l.a.createElement(u.b,{className:"navlink",to:"/",exact:!0},l.a.createElement(g,null),"raaaaaahhgh"),l.a.createElement(u.b,{className:"navlink",to:"/favourites",exact:!0},l.a.createElement(w,null),"huuguughghg huurh")))},N=a(22),x=a(23),S=a(17),M=a.n(S),b=(a(63),l.a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("circle",{cx:"6",cy:"6",r:"5",fill:"#373B4D"}),l.a.createElement("mask",{id:"path-2-inside-1",fill:"white"},l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 10.5C3.51487 10.5 1.5 8.48512 1.5 6C1.5 3.51487 3.51487 1.5 6 1.5C8.48512 1.5 10.5 3.51487 10.5 6C10.5 8.48512 8.48512 10.5 6 10.5ZM6 0C2.68613 0 0 2.68613 0 6C0 9.31388 2.68613 12 6 12C9.31388 12 12 9.31388 12 6C12 2.68613 9.31388 0 6 0Z"})),l.a.createElement("path",{d:"M6 9.5C4.06716 9.5 2.5 7.93284 2.5 6H0.5C0.5 9.03741 2.96259 11.5 6 11.5V9.5ZM2.5 6C2.5 4.06716 4.06716 2.5 6 2.5V0.5C2.96259 0.5 0.5 2.96259 0.5 6H2.5ZM6 2.5C7.93284 2.5 9.5 4.06716 9.5 6H11.5C11.5 2.96259 9.03741 0.5 6 0.5V2.5ZM9.5 6C9.5 7.93284 7.93284 9.5 6 9.5V11.5C9.03741 11.5 11.5 9.03741 11.5 6H9.5ZM6 -1C2.13384 -1 -1 2.13384 -1 6H1C1 3.23841 3.23841 1 6 1V-1ZM-1 6C-1 9.86616 2.13384 13 6 13V11C3.23841 11 1 8.76159 1 6H-1ZM6 13C9.86616 13 13 9.86616 13 6H11C11 8.76159 8.76159 11 6 11V13ZM13 6C13 2.13384 9.86616 -1 6 -1V1C8.76159 1 11 3.23841 11 6H13Z",fill:"#A3A5AD",mask:"url(#path-2-inside-1)"}))),T=l.a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.75 6C3.75 7.24237 4.75763 8.25 6 8.25C7.24237 8.25 8.25 7.24237 8.25 6C8.25 4.75763 7.24237 3.75 6 3.75C4.75763 3.75 3.75 4.75763 3.75 6ZM6 10.5C3.51487 10.5 1.5 8.48512 1.5 6C1.5 3.51487 3.51487 1.5 6 1.5C8.48512 1.5 10.5 3.51487 10.5 6C10.5 8.48512 8.48512 10.5 6 10.5ZM6 0C2.68613 0 0 2.68613 0 6C0 9.31388 2.68613 12 6 12C9.31388 12 12 9.31388 12 6C12 2.68613 9.31388 0 6 0Z",fill:"#FFDA00"})),P=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{className:"radioButtonContainer"+(e.big?" big":"")+(e.odd?" odd":"")},e.currentValue===e.value?T:b,l.a.createElement("span",null,e.text+" "+(void 0!==e.length?"(".concat(e.length,")"):"")),l.a.createElement("input",{type:"radio",value:e.value,checked:e.currentValue===e.value?"checked":"",name:e.name,onChange:e.onChange})),"Planets"===e.selectedType&&"Planets"===e.value?l.a.createElement("div",{className:"planet-search-bar"},l.a.createElement("input",{type:"text",placeholder:"Search by Planet Name...",value:e.searchText,onChange:function(t){return e.onChangeSearch(t.target.value)}})):"",e.content&&e.content.length?l.a.createElement("div",{className:"radio-btn-container--scroll"},l.a.createElement(M.a,{onYReachEnd:function(){return e.next?e.onFetchNext({next:e.next}):null}},l.a.createElement("div",{className:"radio-btn-content"},e.content))):"")},I=(a(64),function(e){var t=[];return"Planets"===e.selectedType?e.planets.data.map(function(a,n){return t.push(l.a.createElement("div",{className:"radio-btn-sublist"+(e.selectedItem.name===a.name?" radio-btn-sublist--selected":""),key:"planets"+n,onClick:function(){return a.name!==e.selectedItem.name?e.onChangeHandler(a,"selectedItem"):null}},a.name)),null}):"Movies"===e.selectedType&&e.movies.data.map(function(a,n){return t.push(l.a.createElement("div",{className:"radio-btn-sublist"+(e.selectedItem.title===a.title?" radio-btn-sublist--selected":""),key:"movies"+n,onClick:function(){return a.title!==e.selectedItem.title?e.onChangeHandler(a,"selectedItem"):null}},a.title)),null}),l.a.createElement("div",{className:"sidebar"},e.typeList.map(function(a,n){return l.a.createElement(P,{key:"typeList"+n,currentValue:e.selectedType,name:"typeList",value:a,text:a,onChange:function(t){return e.onChangeHandler(t.target.value,"selectedType")},content:a===e.selectedType?t:null,onFetchNext:"Planets"===a?e.getNextPlanets:e.getNextMovies,next:"Planets"===a?e.planets.next:e.movies.next,selectedType:e.selectedType,onChangeSearch:e.onChangeSearch})}))}),k=(a(65),function(e){var t=!0,a=JSON.parse(localStorage.getItem("favourite"));return a&&("Planets"===e.selectedType&&a.planets.find(function(t){return t.name===e.selectedItem.name})?t=!1:"Movies"===e.selectedType&&a.movies.find(function(t){return t.title===e.selectedItem.title})&&(t=!1)),l.a.createElement("div",{className:"right-panel"},"Planets"===e.selectedType?l.a.createElement(O,{data:e.selectedItem,onClickFavourite:t?e.addToFavourite:e.removeFromFavourite,add:t}):l.a.createElement(R,{data:e.selectedItem,onClickFavourite:t?e.addToFavourite:e.removeFromFavourite,add:t}))}),O=function(e){return l.a.createElement("div",{className:"right-panel_content"},l.a.createElement("div",{className:"panel-content-header"},e.data.name,e.add?l.a.createElement("button",{onClick:function(){return e.onClickFavourite(e.data,"Planets")}},l.a.createElement(F,null),"Add as Favourite"):l.a.createElement("button",{onClick:function(){return e.onClickFavourite(e.data,"Planets")}},l.a.createElement(V,null),"Remove from Favourite")),l.a.createElement("p",{className:"panel-content-data"},l.a.createElement("span",null,"Rotation Period: "),e.data.rotation_period),l.a.createElement("p",{className:"panel-content-data"},l.a.createElement("span",null,"Orbital Period: "),e.data.orbital_period),l.a.createElement("p",{className:"panel-content-data"},l.a.createElement("span",null,"Diameter: "),e.data.diameter),l.a.createElement("p",{className:"panel-content-data"},l.a.createElement("span",null,"Climate: "),e.data.climate),l.a.createElement("p",{className:"panel-content-data"},l.a.createElement("span",null,"Gravity: "),e.data.gravity),l.a.createElement("p",{className:"panel-content-data"},l.a.createElement("span",null,"Terrain: "),e.data.terrain),l.a.createElement("p",{className:"panel-content-data"},l.a.createElement("span",null,"Surface Water: "),e.data.surface_water),l.a.createElement("p",{className:"panel-content-data"},l.a.createElement("span",null,"Population: "),e.data.population))},R=function(e){return l.a.createElement("div",{className:"right-panel_content"},l.a.createElement("div",{className:"panel-content-header"},e.data.title,e.add?l.a.createElement("button",{onClick:function(){return e.onClickFavourite(e.data,"Movies")}},l.a.createElement(F,null),"Add as Favourite"):l.a.createElement("button",{onClick:function(){return e.onClickFavourite(e.data,"Movies")}},l.a.createElement(V,null),"Remove from Favourite")),l.a.createElement("p",{className:"panel-content-data"},l.a.createElement("span",null,"Episode: "),e.data.episode_id),l.a.createElement("p",{className:"panel-content-data"},l.a.createElement("span",null,"Story so far: "),e.data.opening_crawl),l.a.createElement("p",{className:"panel-content-data"},l.a.createElement("span",null,"Director: "),e.data.director),l.a.createElement("p",{className:"panel-content-data"},l.a.createElement("span",null,"Producer: "),e.data.producer),l.a.createElement("p",{className:"panel-content-data"},l.a.createElement("span",null,"Release Date: "),e.data.release_date))},F=function(){return l.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 25 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M19.6786 13.6786C19.6786 14.245 19.2093 14.7143 18.6429 14.7143H14.5V18.8571C14.5 19.4235 14.0307 19.8929 13.4643 19.8929H11.3929C10.8265 19.8929 10.3571 19.4235 10.3571 18.8571V14.7143H6.21429C5.64788 14.7143 5.17857 14.245 5.17857 13.6786V11.6071C5.17857 11.0407 5.64788 10.5714 6.21429 10.5714H10.3571V6.42857C10.3571 5.86216 10.8265 5.39286 11.3929 5.39286H13.4643C14.0307 5.39286 14.5 5.86216 14.5 6.42857V10.5714H18.6429C19.2093 10.5714 19.6786 11.0407 19.6786 11.6071V13.6786ZM24.8571 12.6429C24.8571 5.78125 19.2902 0.214284 12.4286 0.214284C5.56696 0.214284 0 5.78125 0 12.6429C0 19.5045 5.56696 25.0714 12.4286 25.0714C19.2902 25.0714 24.8571 19.5045 24.8571 12.6429Z"}))},V=function(){return l.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.5 1C5.71 1 1 5.71 1 11.5C1 17.29 5.71 22 11.5 22C17.29 22 22 17.29 22 11.5C22 5.71 17.29 1 11.5 1ZM11.5 23C5.159 23 0 17.841 0 11.5C0 5.159 5.159 0 11.5 0C17.841 0 23 5.159 23 11.5C23 17.841 17.841 23 11.5 23Z"}),l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0002 16.5002C15.8722 16.5002 15.7442 16.4513 15.6462 16.3542L6.64625 7.35425C6.45125 7.15825 6.45125 6.84225 6.64625 6.64625C6.84225 6.45125 7.15825 6.45125 7.35325 6.64625L16.3532 15.6462C16.5492 15.8422 16.5492 16.1582 16.3532 16.3542C16.2562 16.4513 16.1283 16.5002 16.0002 16.5002Z"}),l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.00025 16.5002C6.87225 16.5002 6.74425 16.4513 6.64625 16.3542C6.45125 16.1582 6.45125 15.8422 6.64625 15.6462L15.6462 6.64625C15.8422 6.45125 16.1582 6.45125 16.3532 6.64625C16.5492 6.84225 16.5492 7.15825 16.3532 7.35425L7.35325 16.3542C7.25625 16.4513 7.12825 16.5002 7.00025 16.5002Z"}))},_=a(30),L=a.n(_),H=a(41),Z=a(24),j=a.n(Z),A=a(45),D="https://swapi.co/api/",B=Object(A.a)(function(e){return j.a.get(D+"planets/?search="+encodeURIComponent(e))},1e3),J=["Planets","Movies"],U=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={selectedType:"",selectedItem:"",favourite:{planets:[],movies:[]},searchText:""},a.addToFavourite=function(e,t){var n=JSON.parse(localStorage.getItem("favourite"));n||(n={planets:[],movies:[]}),"Planets"===t?n.planets.push(e):n.movies.push(e),localStorage.setItem("favourite",JSON.stringify(n)),a.setState({favourite:n})},a.removeFromFavourite=function(e,t){var n=JSON.parse(localStorage.getItem("favourite"));n||(n={planets:[],movies:[]}),console.log(n.planets.indexOf(e)),"Planets"===t?n.planets=n.planets.filter(function(t){return t.name!==e.name}):n.movies=n.movies.filter(function(t){return t.title!==e.title}),localStorage.setItem("favourite",JSON.stringify(n)),a.setState({favourite:n})},a.handleTextChange=function(e){a.setState({searchText:e}),a.props.onSearchPlanet({searchText:e})},a.onChangeHandler=function(e,t){a.setState(Object(N.a)({},t,e)),console.log(t,e)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.selectedType!==this.state.selectedType&&("Planets"===this.state.selectedType?this.props.getPlanetList({}):"Movies"===this.state.selectedType&&this.props.getMovieList({}),this.setState({selectedItem:""}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(I,{onChangeHandler:this.onChangeHandler,typeList:J,selectedType:this.state.selectedType,selectedItem:this.state.selectedItem,planets:this.props.planets,getNextPlanets:this.props.getPlanetList,movies:this.props.movies,getNextMovies:this.props.getMovieList,onChangeSearch:this.handleTextChange,searchText:this.state.searchText}),this.state.selectedType&&this.state.selectedItem?l.a.createElement(k,{selectedType:this.state.selectedType,selectedItem:this.state.selectedItem,addToFavourite:this.addToFavourite,removeFromFavourite:this.removeFromFavourite,favourites:this.state.favourite}):"")}}]),t}(l.a.Component),W=Object(x.b)(function(e){return{planets:e.home.planets,movies:e.home.movies}},function(e){return{getPlanetList:function(t){return e(function(e){return function(t){j.a.get(e.next?e.next:"".concat(D,"planets/")).then(function(a){a=a.data,console.log(a),t({type:"GET_PLANET_LIST_SUCCESS",data:a.results,next:a.next,reset:!e.next})}).catch(function(e){console.log(e)})}}(t))},getMovieList:function(t){return e(function(e){return function(t){j.a.get(e.next?e.next:"".concat(D,"films/")).then(function(a){a=a.data,console.log(a),t({type:"GET_MOVIE_LIST_SUCCESS",data:a.results,next:a.next,reset:!e.next})}).catch(function(e){console.log(e)})}}(t))},onSearchPlanet:function(t){return e(function(e){return function(){var t=Object(H.a)(L.a.mark(function t(a){var n,l;return L.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"RESET_SEARCH_RESULT"}),t.next=3,B(e.searchText);case 3:n=t.sent,l=n.data,a({type:"GET_PLANET_LIST_SUCCESS",data:l.results,next:l.next});case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}(t))}}})(U),G=(a(86),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={favourite:{planets:[],movies:[]},selectedPlanet:"",selectedMovie:""},a.removeFromFavourite=function(e,t,n){n.stopPropagation();var l=JSON.parse(localStorage.getItem("favourite"));l||(l={planets:[],movies:[]}),console.log(l.planets.indexOf(e)),"Planets"===t?l.planets=l.planets.filter(function(t){return t.name!==e.name}):l.movies=l.movies.filter(function(t){return t.title!==e.title}),localStorage.setItem("favourite",JSON.stringify(l)),a.setState({favourite:l})},a.onSelectItem=function(e,t){"Planets"===t?a.state.selectedPlanet!==e?a.setState({selectedPlanet:e}):a.setState({selectedPlanet:""}):"Movies"===t&&(a.state.selectedMovie!==e?a.setState({selectedMovie:e}):a.setState({selectedMovie:""}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("favourite"));e&&this.setState({favourite:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"favourite-container"},l.a.createElement("div",{className:"details-container"},l.a.createElement("div",{className:"details-header"},"Planets"),l.a.createElement("div",{className:"favourite-items-details"},l.a.createElement(M.a,null,this.state.favourite.planets.length?this.state.favourite.planets.map(function(t,a){return l.a.createElement("div",{className:"favourite-item"+(e.state.selectedPlanet===t.name?" favourite-item--active":""),key:"planets"+a},l.a.createElement("div",{className:"item-header"+(e.state.selectedPlanet===t.name?" item-header--selected":""),onClick:function(){return e.onSelectItem(t.name,"Planets")}},l.a.createElement("p",null,t.name),l.a.createElement(z,{onClick:function(a){return e.removeFromFavourite(t,"Planets",a)}})),e.state.selectedPlanet===t.name?l.a.createElement("div",{className:"item-details"},l.a.createElement("p",{className:"panel-content-data"},l.a.createElement("span",null,"Rotation Period: "),t.rotation_period),l.a.createElement("p",{className:"panel-content-data"},l.a.createElement("span",null,"Orbital Period: "),t.orbital_period),l.a.createElement("p",{className:"panel-content-data"},l.a.createElement("span",null,"Diameter: "),t.diameter),l.a.createElement("p",{className:"panel-content-data"},l.a.createElement("span",null,"Climate: "),t.climate),l.a.createElement("p",{className:"panel-content-data"},l.a.createElement("span",null,"Gravity: "),t.gravity),l.a.createElement("p",{className:"panel-content-data"},l.a.createElement("span",null,"Terrain: "),t.terrain),l.a.createElement("p",{className:"panel-content-data"},l.a.createElement("span",null,"Surface Water: "),t.surface_water),l.a.createElement("p",{className:"panel-content-data"},l.a.createElement("span",null,"Population: "),t.population)):"")}):l.a.createElement(u.b,{className:"home-redirect",to:"/",exact:!0},"Please add your favourite planets!")))),l.a.createElement("div",{className:"details-container"},l.a.createElement("div",{className:"details-header"},"Movies"),l.a.createElement("div",{className:"favourite-items-details"},l.a.createElement(M.a,null,this.state.favourite.movies.length?this.state.favourite.movies.map(function(t,a){return l.a.createElement("div",{className:"favourite-item"+(e.state.selectedMovie===t.title?" favourite-item--active":""),key:"movies"+a},l.a.createElement("div",{className:"item-header"+(e.state.selectedMovie===t.title?" item-header--selected":""),onClick:function(){return e.onSelectItem(t.title,"Movies")}},l.a.createElement("p",null,t.title),l.a.createElement(z,{onClick:function(a){return e.removeFromFavourite(t,"Movies",a)}})),e.state.selectedMovie===t.title?l.a.createElement("div",{className:"item-details"},l.a.createElement("p",{className:"panel-content-data"},l.a.createElement("span",null,"Episode: "),t.episode_id),l.a.createElement("p",{className:"panel-content-data"},l.a.createElement("span",null,"Story so far: "),t.opening_crawl),l.a.createElement("p",{className:"panel-content-data"},l.a.createElement("span",null,"Director: "),t.director),l.a.createElement("p",{className:"panel-content-data"},l.a.createElement("span",null,"Producer: "),t.producer),l.a.createElement("p",{className:"panel-content-data"},l.a.createElement("span",null,"Release Date: "),t.release_date)):"")}):l.a.createElement(u.b,{className:"home-redirect",to:"/",exact:!0},"Please add your favourite movies!")))))}}]),t}(l.a.Component)),z=function(e){return l.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:e.onClick},l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.5 1C5.71 1 1 5.71 1 11.5C1 17.29 5.71 22 11.5 22C17.29 22 22 17.29 22 11.5C22 5.71 17.29 1 11.5 1ZM11.5 23C5.159 23 0 17.841 0 11.5C0 5.159 5.159 0 11.5 0C17.841 0 23 5.159 23 11.5C23 17.841 17.841 23 11.5 23Z"}),l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0002 16.5002C15.8722 16.5002 15.7442 16.4513 15.6462 16.3542L6.64625 7.35425C6.45125 7.15825 6.45125 6.84225 6.64625 6.64625C6.84225 6.45125 7.15825 6.45125 7.35325 6.64625L16.3532 15.6462C16.5492 15.8422 16.5492 16.1582 16.3532 16.3542C16.2562 16.4513 16.1283 16.5002 16.0002 16.5002Z"}),l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.00025 16.5002C6.87225 16.5002 6.74425 16.4513 6.64625 16.3542C6.45125 16.1582 6.45125 15.8422 6.64625 15.6462L15.6462 6.64625C15.8422 6.45125 16.1582 6.45125 16.3532 6.64625C16.5492 6.84225 16.5492 7.15825 16.3532 7.35425L7.35325 16.3542C7.25625 16.4513 7.12825 16.5002 7.00025 16.5002Z"}))},Y=(a(87),a(88),a(89),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).randomiseStars=function(){var e=new f;e.initialise(a.starContainer),e.stars=100*Math.random()+50,e.minVelocity=30*Math.random()+5,e.maxVelocity=50*Math.random()+e.minVelocity,e.start()},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.randomiseStars()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"starContainer",ref:function(t){return e.starContainer=t}}),l.a.createElement(u.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(y,null),l.a.createElement("div",{className:"content"},l.a.createElement(p.d,null,l.a.createElement(p.b,{exact:!0,path:"/",render:function(e){return l.a.createElement(W,e)}}),l.a.createElement(p.b,{exact:!0,path:"/favourites",render:function(e){return l.a.createElement(G,e)}}),l.a.createElement(p.a,{from:"/",to:"/"}))))))}}]),t}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=a(10),q=a(43),K=a(44),Q=a(25),X={planets:{data:[],next:null},movies:{data:[],next:null}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=[],n=[];switch(t.type){case"GET_PLANET_LIST_SUCCESS":return a=e.planets.data.slice(),a=t.reset?t.data.slice():a.concat(t.data),Object(Q.a)({},e,{planets:{data:a,next:t.next}});case"GET_MOVIE_LIST_SUCCESS":return n=e.movies.data.slice(),n=t.reset?t.data.slice():n.concat(t.data),Object(Q.a)({},e,{movies:{data:n,next:t.next}});case"RESET_SEARCH_RESULT":return Object(Q.a)({},e,{planets:{data:[],next:null}});default:return e}},te=Object($.createStore)(Object($.combineReducers)({home:ee}),Object(K.composeWithDevTools)(Object($.applyMiddleware)(q.a)));i.a.render(l.a.createElement(x.a,{store:te},l.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,1,2]]]);
//# sourceMappingURL=main.445421ae.chunk.js.map