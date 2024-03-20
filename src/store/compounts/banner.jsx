import React from 'react'

function Banner() {
  return (
    <div>
        <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  src="https://static.vecteezy.com/system/resources/previews/002/654/460/non_2x/summer-sale-offer-banner-promotion-with-relax-folded-chair-and-umbrella-with-orange-background-vector.jpg" className="d-block w-100  shadow-lg" height='300' alt="..."/>
    </div>
    
    <div class="carousel-item">
      <img src="https://img.freepik.com/premium-vector/product-advertising-hero-image-header-layout_1302-21013.jpg?size=626&ext=jpg&ga=GA1.1.2126216559.1699334969&semt=ais" className="d-block w-100 h-300 shadow-lg" height='300' alt="..."/>
    </div>
    
    <div class="carousel-item">
      <img src="https://i.pinimg.com/736x/87/48/17/874817126d4eb4a6847cd4b3d290b65d.jpg" className="d-block w-100 h-300 shadow-lg" height='300' alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Banner