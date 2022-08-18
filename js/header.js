class Header extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({mode:'open'})
	}
  static get observedAttributes() {
    return ["link"]
  }
  attributeChangedCallback(atributo,viejo,nuevo) {
    if(atributo === "link") {
      this.link = nuevo
    }
  }
	getTemplate() {
    const template = document.createElement("template")
    template.innerHTML = `
		<header id="header">
			<div id="logo">
				<button><i class="fa-solid fa-helmet-safety"></i></button>
				<h3 class="logoText">SERV. GENERALES</h3>
			</div>
			<div id="redes_sociales">
				<button><i class="fa-brands fa-facebook-square"></i></button>
				<button><i class="fa-solid fa-envelope"></i></button>
				<button><i class="fa-brands fa-whatsapp-square"></i></button>
			</div>
			<button id="menuBar"><i class="fa-solid fa-bars"></i></button>
			<nav id="navegacion">
				<h3 class="logoText">SERV. GENERALES</h3>
				<div id="links">
					<button><a href="./">home</a></button>
					<button><a href="./acerca.html">acerca</a></button>
					<button><a href="./servicios.html">proyectos</a></button>
				</div>
			</nav>
		</header>
		${this.getStyles()}`
		return template;
	}

	getStyles() {
		return `
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
			<style>
:host{
	--oscuroDark:#2F2E41;
	--oscuroGrey:#3F3D56;
	--blancoNormal:#ffffff;
	--amarilloLight:#FED253;
	--amarilloDark:#FFBA63;
	--atras:-1;
	--medio:1;
	--adelante:10;
	--logo: 'Anton', sans-serif;
	--texto: 'Inter', sans-serif;
	--titulo: 'Poppins', sans-serif;
}
.logoText{
	font-family: var(--logo);
	font-size: 1.3rem;
	}

#menuBar{
 margin-right:10px;
 }
/* borrar */
img {
	width:100%;
	height:100%;
}
#logo h3 {
	display: none;
	font-family: var(--logo);
}
.logoText{
	font-family: var(--logo);
	font-size: 1.3rem;
}
#header{
	position: fixed;
	z-index:var(--adelante);
	width:100%;
	grid-area:header;
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 50px;

	background: var(--oscuroDark);
	color: var(--blancoNormal);
}
#header i{
	font-size: 1.6rem;
}
#header button{
	background: inherit;
	border:none;
}
#logo button{
	color:var(--amarilloDark);
	margin-left:10px;
}
#redes_sociales i{
	color: var(--blancoNormal);
}
#header > button{
	color: var(--blancoNormal);
}

#navegacion{
	border-top: 2px solid var(--amarilloLight);
	position:absolute;
	background: var(--oscuroDark);
	z-index:var(--adelante);
	top:50px;
	width:100%;
	transform:translateX(-100%);
	padding: 0 10px;
	height:100vh;
	transition:transform .5s ease-in-out;
	overflow:visible !important;
}
#navegacion h3{
	text-align: center;
	color:orange;
}
#links{
	height:50vh;
	display:grid;
}
#links button{
	width:95%;
}
#links a{
	color: var(--blancoNormal);
	text-decoration: none;
	font-size: 1.3rem;
}
#navegacion.mostrarMenu{
	/* overflow:hidden !important; */
	transform:translateX(0%);
}

@media screen and (min-width: 1000px) {
#header{
	position:static;
	width: 100%;
	height:auto;
	display: flex;
	justify-content: space-around;
	background: transparent;
	box-shadow: 0px 3px 6px rgba(0, 0, 0, .1);
}
#logo h3{
	display: inline-block;
	color:var(--amarilloDark);
}
#navegacion{
	position:static;
	height:auto;
	border-top: none;
	transition: none;
	transform: translate(0%);
	width: 30%;;
	background: transparent;
}
#navegacion h3{
	display: none;
}
#menuBar{
	display: none;
}
#redes_sociales{
	display: flex;
	gap:20px;
	justify-content: center;
}
#redes_sociales i{
	color:var(--oscuroDark);
}
#links{
	display: flex;
	gap:10px;
	justify-content: space-between;
	height:auto;
	flex:1;
}
#links a{
	color:var(--oscuroDark);
}
#links button{
	width:auto;
}
#links button:nth-child(${this.link}){
	background: var(--amarilloLight);
	padding: 5px;
	border-radius:10px;
}
}
			</style>
		`;
	}
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
  }
  connectedCallback() {
    this.render()
let stop = false;

this.shadowRoot.querySelector('#menuBar').addEventListener('click',()=>{
	//this.shadowRoot.querySelector('#navegacion').classList.toggle('mostrarMenu');
	
	if (this.shadowRoot.querySelector('#navegacion').classList.contains('mostrarMenu')) {
		console.log('si contiene')
	this.shadowRoot.querySelector('#navegacion').classList.remove('mostrarMenu');
	//pauseScroll.style.overflow='visible'
	this.shadowRoot.querySelector('#menuBar i').classList.add('fa-bars')
	this.shadowRoot.querySelector('#menuBar i').classList.remove('fa-xmark')
	//<i class="fa-solid fa-xmark"></i>
	return false;
	}
	this.shadowRoot.querySelector('#navegacion').classList.add('mostrarMenu');
	this.shadowRoot.querySelector('#menuBar i').classList.remove('fa-bars')
	this.shadowRoot.querySelector('#menuBar i').classList.add('fa-xmark')
	//pauseScroll.style.overflow='hidden'
})
  }
}

customElements.define('mi-header',Header);
