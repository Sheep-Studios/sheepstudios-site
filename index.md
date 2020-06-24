---
layout: default
title: Home
---

<!-- Slider Start -->
<section class="banner-3">
	<div class="container">
		<div class="col-lg-6 align-self-end">
			</div><div class="row align-items-center">
			<div class="col-lg-6 col-md-7">
				<div class="banner-content-2">
					<span class="h5 text-uppercase text-yello">We are Sheep Studios</span>
					<h2 class="text-white mt-2">An indie game<br>development company</h2>
					<p class="my-4">For three years, we've been making games for the world to enjoy.</p>
				</div>
			</div>
			
			<div class="col-lg-5 col-md-7 banner-content-2">
				<img alt="" src="/assets/pages/home/iMac.png" class="img-fluid position-absolute- floating d1">
				<img alt="" src="/assets/pages/home/MacBook.png" class="img-fluid position-absolute- floating d2">
				<img alt="" class="img-fluid position-absolute- floating d3" src="/assets/pages/home/iPad.png">
				<img alt="" class="img-fluid position-absolute- floating d4" src="/assets/pages/home/iPhone.png">
			</div>
		</div>
	</div>
</section>
<!-- Slider End -->

<!-- Service Start -->
<section class="service-2"><div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-4 col-md-6">
				<div class="service-item mb-4 mb-lg-0 text-center px-4">
					<i class="ti-game text-color icon-md"></i>
					<h4 class="my-4">Game Development</h4>
					<p>We make cross-platform HTML5 and mobile games.</p>
				</div>
			</div>
			<div class="col-lg-4 col-md-6  border-left border-right">
				<div class="service-item mb-4 mb-lg-0 px-4 text-center">
					<i class="ti-announcement text-color icon-md"></i>
					<h4 class="my-4">Publishing</h4>
					<p>We can publish your mobile &amp; HTML5 games at a competitive rate.</p>
				</div>
			</div>
			<div class="col-lg-4 col-md-6">
				<div class="service-item mb-4 mb-lg-0 text-center px-4">
					<i class="ti-package text-color icon-md"></i>
					<h4 class="my-4">Licensing</h4>
					<p>Have a website? We license our games to websites at fair prices.</p>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- Service End -->

<!-- Portfolio Start -->
<section class="pt200 section portfolio-2">
	<div class="container">
		<!-- text -->
		<div class="row">
			<div class="col-lg-10">
			<span class="h5 text-color text-uppercase">
				Latest games
			</span>
			<h3 class="mb-4 mt-2">A collection of our most recently completed games, covering a wide range of design disciplines</h3>
			</div>
		</div>
		
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
								<img src="{{ post.thumbnail }}" alt="portfolio-image" class="img-fluid w-100 d-block" href="{{ post.permalink }}">
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
<!-- Portfolio End -->

<!-- Testimonial Start -->
<section class="section bg-secondary position-relative">
	<img src="images/bg-testimonial-bg.png" alt="" class="overlay-shape">
		<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<span class="h5 text-color text-uppercase">
					testimonials
				</span>
			</div>
		</div>

		<div class="row testimonial-wrap">
			<div class="col-lg-12 ">
				<div class="test-wrap ">
					<i class="text-color ti-quote-left"></i>
					<div class="testimonial-content">
						<p class="text-white">Lorem ipsum dolor amet constur adipisicing elit sed eiusmtempor incid dolore magna aliqu. enim minim veniam.quis nos
						trud exercittion ullam laboris nisi ut aliquip excepteur. sint occaecat cuida tat nonproident sunt in culpa qui officia deserunt mollit anim est laborum. sed ut perspiciatis.</p>
						<div class="test-author d-flex mt-4">
							<div>
								<img src="images/team-test-1.jpg" alt="" class="img-fluid mr-3"></div>
							<div>
								<h5 class="mb-0 mt-2 text-white">Liam Hughes</h5>
								<span class="text-color">Manager</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="col-lg-12 ">
				<div class="test-wrap ">
					<i class="text-color ti-quote-left"></i>
					<div class="testimonial-content">
						<p class="text-white">Lorem ipsum dolor amet constur adipisicing elit sed eiusmtempor incid dolore magna aliqu. enim minim veniam.quis nos
						trud exercittion ullam laboris nisi ut aliquip excepteur. sint occaecat cuida tat nonproident sunt in culpa qui officia deserunt mollit anim est laborum. sed ut perspiciatis.</p>
						<div class="test-author d-flex mt-4">
							<div>
								<img src="images/team-test-2.jpg" alt="" class="img-fluid mr-3"></div>
							<div>
								<h5 class="mb-0 mt-2 text-white">Jane Austin</h5>
								<span class="text-color">Designer</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="col-lg-12 ">
				<div class="test-wrap ">
					<i class="text-color ti-quote-left"></i>
					<div class="testimonial-content">
						<p class="text-white">Lorem ipsum dolor amet constur adipisicing elit sed eiusmtempor incid dolore magna aliqu. enim minim veniam.quis nos
						trud exercittion ullam laboris nisi ut aliquip excepteur. sint occaecat cuida tat nonproident sunt in culpa qui officia deserunt mollit anim est laborum. sed ut perspiciatis.</p>
						<div class="test-author d-flex mt-4">
							<div>
								<img src="images/team-test-3.jpg" alt="" class="img-fluid mr-3"></div>
							<div>
								<h5 class="mb-0 mt-2 text-white">Liolane hussy</h5>
								<span class="text-color">Developer</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- Testimonial End -->

<!-- Stats start -->
<section class="section-sm counter-section position-relative bg-blue"><img src="images/bg-cta-bg.png" alt="" class="overlay-shape"><div class="container">
		<div class="row">
			<!-- "games created" section -->
			<div class="col-lg-3 col-md-6">
				<div class="counter-content d-flex mb-5 mb-lg-0">
					<i class="ti-briefcase mr-4"></i>
					<div>
						<h2 class="mb-0"><span class="counter">5</span></h2>
						<p class="text-capitalize mb-0">Games created</p>
					</div>
				</div>
			</div>

			<!-- "players" section -->
			<div class="col-lg-3 col-md-6">
				<div class="counter-content d-flex mb-5 mb-lg-0">
					<i class="ti-eye mr-4"></i>
					<div>
						<h2 class="mb-0"><span class="counter">1M+</span></h2>
						<p class="text-capitalize mb-0">Yearly players</p>
					</div>
				</div>
			</div>

			<!-- "average game rating" section -->
			<div class="col-lg-3 col-md-6">
				<div class="counter-content d-flex mb-5 mb-lg-0">
					<i class="ti-heart mr-4"></i>
					<div class="mb-0">
						<h2><span class="counter">87</span></h2>
						<p class="text-capitalize mb-0">Average game rating</p>
					</div>
				</div>
			</div>
			
			<!-- "awards won" section -->
			<div class="col-lg-3 col-md-6">
				<div class="counter-content d-flex mb-5 mb-lg-0">
					<i class="ti-cup mr-4"></i>
					<div class="mb-0">
						<h2><span class="counter">50</span>+</h2>
						<p class="text-capitalize mb-0">Awards won</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- Stats end -->

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
           {% for post in site.posts limit:3 %}
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
<!-- news end -->