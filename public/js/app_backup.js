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

Vue.component('single-post',{
	
	// props: ['id', 'title', 'username', 'createdat', 'body'],
	props: ['url'],

	template: `
		<div class="blog-post">
			<h2 class="blog-post-title"><a :href="url"><slot name = "title"></slot></a></h2>
			<p class="blog-post-meta"><slot name = "username"></slot> on <slot name = "createdat"></slot></p>

			<p>
				<slot name = "body"></slot>
			</p>
		</div>
	`,

	//methods: {
	//
	//}

});

Vue.component('posts-list',{
	
	//props: [],

	template: `
		<div id="posts-wrapper">
			<single-post v-for="post in posts" :url = '"/posts/" + post.id' >
				<template slot = "title"> {{post.title}} </template>
				<template slot = "username"> {{post.username}}  </template>
				<template slot = "createdat"> {{post.created_at}}  </template>
				<template slot = "body"> {{post.body}} </template>
		 	</single-post>
		</div>
	`,

	data(){
		return {
			posts: [],
			// url: '/posts/1',
		};
	},

	methods: {
		//
	},

	created() {
		this.posts = [
			{id: 2, title: "Some Title 1", body: "Some Dummy Body 1", created_at: "Something", username: "user"},
			// {id: 3, title: "Some Title 2", body: "Some Dummy Body 2"},
			// {id: 7, title: "Some Title 3", body: "Some Dummy Body 3"},
			// {id: 5, title: "Some Title 4", body: "Some Dummy Body 4"},
		];
		this.posts = [];
		axios.get('/all-posts')
		  .then(function (response) {
		    console.log(response.data[0]);
		    this.posts = response.data;
		    console.log(this.posts[0].user.name);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });


		this.id = 3;
		// console.log(this.posts, this.id);
	},

});

var vapp = new Vue({
	el: "#root",

});

var vappt = new Vue({
	el: "#test",
	data: {
		working: "yes",
	},
});