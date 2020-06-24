---
layout: default
title: Games
permalink: /games
---

<!-- header title -->
<section class="page-title header-padding" style="background-image:url(assets/pages/games/banner.jpg);background-size:cover"><div class="container">
	<div class="row">
		<div class="col-lg-6">
			<h2 class="text-capitalize mb-2 text-lg text-white">Our Games</h2>
				<p class="text-white">The latest games from Sheep Studios.</p>
			</div>
		</div>
	</div>
</section>

<section class="pt200 section portfolio-2">
	<div class="container">
		<!-- categories -->
		<div class="d-flex flex-wrap align-items-center justify-content-between mb-5">
			<div class="btn-group btn-group-toggle " data-toggle="buttons">

				<label class="btn border-0 active">
					<input type="radio" name="shuffle-filter" value="all" checked>All Games
				</label>

				<label class="btn border-0 ">
					<input type="radio" name="shuffle-filter" value="HTML5">HTML5
				</label>
				<label class="btn border-0">
					<input type="radio" name="shuffle-filter" value="Mobile">Mobile
				</label>
			</div>
		</div>

		<!-- posts -->
		<div class="row shuffle-wrapper portfolio-gallery">
			{% for post in site.posts %}
				{% if post.categories contains 'game' %}
					<div class="col-lg-4 col-6 mb-4 shuffle-item" data-groups='["{{ post.group }}"]'>
						<div class="position-relative inner-box">
							<div class="image position-relative ">
								<img src="{{ post.thumbnail }}" alt="{{ post.title }}e" class="img-fluid w-100 d-block" href="{{ post.permalink }}">
								<div class="overlay-box">
									<div class="overlay-inner">
										<a class="overlay-content text-center" href="{{ post.permalink }}">
											<h5 class="mb-0 text-white">{{ post.title }}</h5>
											<p>{{ post.description }}</p>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				{% endif %}
			{% endfor %}
		</div>
	</div>
</section>