class Footer extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode:'open'})
  }
  getTemplate() {
    const template = document.createElement("template")
    template.innerHTML = `
<footer id="footer">
	<section class="logo-footer">
		<i class="fa-solid fa-helmet-safety"></i>			
		<span class="logoText">servicios generales</span>
		<p>empresa peruana lider en el sector</p>
	</section>
	<section class="sociles-footer">
		<button><i class="fa-brands fa-facebook-square"></i></button>
		<button><i class="fa-solid fa-envelope"></i></button>
		<button><i class="fa-brands fa-whatsapp-square"></i></button>
	</section>
	<div></div>
	<p>todos los derechos reservados lima peru <span>2022</span></p>
</footer>
    ${this.getStyles()}
    `
    return template
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
}
footer{
	background: var(--oscuroDark);
	margin-top: 40px;
	color: var(--blancoNormal);
	padding-top: 30px; 
	padding-bottom:30px;
}
.logoText{
	font-family: var(--logo);
	font-size: 1.3rem;
	}
.logo-footer{
	text-align: center;
}
.logo-footer span{
	color:var(--amarilloDark);
	font-size: 1.3rem;
}
.logo-footer i{
	font-size: 1.8rem;
	color:var(--amarilloDark);
}
.sociles-footer{
	display: flex;
	gap:10px;
	justify-content:center;
	color: var(--blancoNormal);
}
.sociles-footer button{
	background-color:inherit;
	color:var(--blancoNormal);
	border:none;
}
footer>div:nth-child(3){
	height:3px;
	background: var(--amarilloLight);
	width:90%;
	margin:10px auto;
}
footer>p{
	text-align: center;
	width:90%;
	margin-left: auto;margin-right: auto;
}
footer>p>span{
	color:var(--amarilloDark);
	font-size: 1.3rem;
}
.sociles-footer i{
	font-size: 1.9rem;
}


@media screen and (min-width: 800px) {
footer{
	display: grid;
	grid-template-areas: 'logo . social'
	'barra barra barra'
	'autor autor autor';
}
.logo-footer{
	grid-area:logo;
}

.sociles-footer{
	grid-area:social;
}

#footer>div{
	grid-area:barra;
	width:100%;
	margin: auto;
	height:2px;
}

footer>p{
	grid-area:autor;
}
	
}
        </style>
    `
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
  }
  connectedCallback() {
    this.render()
  }
}
customElements.define("mi-footer",Footer)
