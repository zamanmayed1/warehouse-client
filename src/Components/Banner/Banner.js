import React from 'react';

const Banner = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel h-auto md:h-[60vh] overflow-hidden slide relative" data-bs-ride="carousel">
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active float-left w-full">
      <img
        src="https://i.pinimg.com/originals/af/c2/70/afc2703d7d3477deaa3a36f3dbc228a9.jpg"
        className="block w-full"
        alt="Wild Landscape"
      />
    </div>
    <div className="carousel-item float-left w-full">
      <img
        src="https://thumbs.dreamstime.com/b/collage-different-types-rice-closeup-banner-design-collage-different-types-rice-closeup-banner-design-178453269.jpg"
        className="block w-full"
        alt="Camera"
      />
    </div>
    <div className="carousel-item float-left w-full">
      <img
        src="https://www.algrointernational.com/wp-content/uploads/2016/11/banner.jpg"
        className="block w-full"
        alt="Exotic Fruits"
      />
    </div>
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
};

export default Banner;