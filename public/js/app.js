Vue.component('blog-header',{
	
	//props: [],

	template: `
		<div class="blog-header">
	      <div class="container">
	        <h1 class="blog-title"><slot name="title"> My First Blog </slot></h1>
	        <p class="lead blog-description"><slot>An example blog template built with Bootstrap.</slot></p>
	      </div> 
	    </div>
	`,

	//methods: {
	//
	//}

});

var vapp = new Vue({
	el: "#root",

});