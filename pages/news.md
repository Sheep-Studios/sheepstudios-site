---
layout: default
title: News
permalink: /news
---

<!-- header title -->
<section class="page-title header-padding" style="background-image:url(assets/pages/news/banner.jpg);background-size:cover"><div class="container">
	<div class="row">
		<div class="col-lg-6">
			<h2 class="text-capitalize mb-2 text-lg text-white">News</h2>
				<p class="text-white">The latest news regarding Sheep Studios.</p>
			</div>
		</div>
	</div>
</section>

<!-- news section -->
<section class="section latest-blog position-relative overflow-hidden">
	<div class="container">
		<!-- text -->
		<div class="row">
			<div class="col-lg-12 text-center">
				<span class="h5 text-color text-uppercase">latest news</span>
				<h3 class="mb-5 mt-2">Stay updated with Sheep Studios.</h3>
			</div>
		</div>

		<!-- posts -->
		<div class="row justify-content-center">
           {% for post in site.posts %}
				{% if post.categories contains 'news' %}
					<!-- post -->
					<div class="col-lg-4 col-md-6  mb-4 mb-lg-0">
               
						<!-- thumbnail -->
						<div class="blog-img position-relative">
							<a href="{{ post.permalink }}">
								<img class="img-fluid w-100" src="{{ post.thumbnail }}" alt="{{ post.title }}">
							</a>
						</div>
                
						<!-- title -->
						<a href="{{ post.permalink }}">
							<h4 class="mt-4 mb-2">{{ post.title }}</h4>
						</a>

						<!-- meta -->
						<div class="post-meta text-uppercase mb-3">
							<span class="text-color">by {{ post.author }}</span>
							<span class="text-color">/ {{ post.date | date_to_string }}</span>
						</div>

						<!-- description -->
						<p>{{ post.description | strip_html | truncatewords:30 }}</p>
					</div>
				{% endif %}
			{% endfor %}
		</div>
	</div>
</section>