import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <>
            <div className="blog-text m-5">
                <h1 className="text-center text-info">Our Blogs</h1>
            </div>
            <div className="blogs-section">
                <div class="blog-card">
                    <img src="https://i.ibb.co/NxtXrpL/blog1.jpg" class="blog-image" alt="" />
                    <h1 className="blog-title">1. THE BEST WALKING TOURS IN NEW ORLEANS</h1>
                    <p class="blog-overview ">Slavery was the driving force behind the economy during this time, as New Orleans had the nation’s busiest slave market. Yet at the same time, the city was home to the largest and most prosperous community of free persons of color. Following the Civil War and the Emancipation Proclamation, the city’s predominantly Black population fought for their rights, equality, and dignity, gaining some and yet continuing to struggle for others.</p>
                </div>
                <div class="blog-card">
                    <img src="https://i.ibb.co/5KxHYC8/blog6.jpg" class="blog-image" alt="" />
                    <h1 className="blog-title">2. BEST NEIGHBORHOODS IN AMSTERDAM: WHERE TO STAY DURING YOUR VISIT</h1>
                    <p class="blog-overview">I first went to Amsterdam in 2006 as part of my grand backpacking tour of Europe. It’s a rich, exciting, multilayered place. I fell in love with it so much, I stayed a month. Since then, I’ve gone back dozens of times, even leading tours there for a number of years. I’ve explored the nooks and crannies of this compact, historic city.</p>
                </div>

                <div class="blog-card">
                    <img src="https://i.ibb.co/mGrJwyt/blog3.jpg" class="blog-image" alt="" />
                    <h1 className="blog-title">3. NM+ WEEKLY UPDATE: MEXICO EDITION</h1>
                    <p class="blog-overview">This article is exclusively for members of Nomadic Matt Plus! NM+ is our member's only program that gives readers like yourself access to bonus blog posts. Members also get free books, guidebooks, blogging courses, access to our events, event replays, monthly giveaways, t-shirts, exclusive money-saving travel discounts, and more! As a member of Nomadic Matt Plus, you not only get tons of perks to make your travels cheaper but you help us keep creating the in-depth travel content you love!</p>
                </div>
                <div class="blog-card">
                    <img src="https://i.ibb.co/NyGLhbL/blog4.jpg" class="blog-image" alt="" />
                    <h1 className="blog-title">4. SLOVENIA WAS A STUNNING SURPRISE</h1>
                    <p class="blog-overview">I left my hotel in Ljubljana in search of a wine bar. Google Maps brought up two close by, but the one that said “happy hour” got my attention. After crossing the Triple Bridge, I turned left toward the central market and stumbled across a beer-and-burger festival. Stalls for burger joints and breweries from all over Slovenia lined the plaza. Crowds meandered the rows, ordering food and drinks. A DJ played music, and the nearby steps were filled with people sitting and socializing.</p>
                </div>
                <div class="blog-card">
                    <img src="https://i.ibb.co/TvH5y9K/blog5.jpg" class="blog-image" alt="" />
                    <h1 className="blog-title">5. ALBANIA: A CASE FOR SUSTAINABLE TOURISM</h1>
                    <p class="blog-overview">Albania is just barely on the tourist map. While its coastal cities have their share of luxury resorts, and while plenty of holidaymakers party in cities like Sarande, Albania’s tourism sector is nothing compared to its neighbors. Nonetheless, prior to the pandemic, tourism in Albania jumped 8% from 2018 to 2019. From 2014 to 2019, it saw a 67% increase in tourism numbers, from 3.6 to 6.4 million.</p>
                </div>
                <div class="blog-card">
                    <img src="https://i.ibb.co/12n5ZYL/blog2.jpg" class="blog-image" alt="" />
                    <h1 className="blog-title">6. CROATIA IS UNDERAPPRECIATED</h1>
                    <p class="blog-overview">This was my second visit to Croatia. Eight years ago, I came for a sailing trip. The place is famous for sailing: every year (at least, before the pandemic), tens of thousands of tourists would board boats in Split or Dubrovnik and hop along the coast, soaking up the sun, partying, and just acting crazy. The famous (and infamous) Yacht Week can only be described as bacchanalian debauchery.</p>
                </div>
            </div>
        </>
    );
};

export default Blog;