import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../components/footer";

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin: 10px;
`;

const Image = styled.img`
  width: 400px;
  height: 300px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Gallery = () => {
  const [images, setImages] = useState([
    "https://gfjules.com/wp-content/uploads/2021/05/210228-GFJulesCroissants-R.MoraPhotography-6201-copy-720x720.jpg",
    "https://restaurantclicks.com/wp-content/uploads/2022/08/Types-of-French-Bread.jpg",
    "https://www.flavoursholidays.co.uk/wp-content/uploads/2020/06/Focaccia-Italian-Bread-690x460.jpg",
    "https://static01.nyt.com/images/2018/12/11/dining/as-garlic-bread/as-garlic-bread-mediumThreeByTwo440.jpg",
    "https://assets.bonappetit.com/photos/57acd90253e63daf11a4daa2/1:1/w_3032,h_3032,c_limit/seeded-whole-grain-soda-bread.jpg",
    "https://savvybites.co.uk/wp-content/uploads/2020/10/Tear-Share-Bread-4-of-6.jpg",
    "https://joyfoodsunshine.com/wp-content/uploads/2020/06/homemade-chocolate-ice-cream-recipe-7.jpg",
    "https://www.theroastedroot.net/wp-content/uploads/2022/06/belgian-waffles-11-720x720.jpg",
    "https://thecookiedoughdiaries.com/wp-content/uploads/2021/12/oat-milk-hot-cocoa-featured-5.jpg",
    "https://breadsandsweets.com/wp-content/uploads/2022/07/chocolate-milkshake-sq-1-of-1.jpg",
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2016%2F12%2Fmain%2Fberry-green-smoothie_0.jpg%3Fitok%3D_LhatP88",
    "https://cdn.shopify.com/s/files/1/0560/1699/4381/articles/BC_2B-_2BAssam_2B_28cup_29_2B_281055_29.jpg?v=1664455870",
  ]);

  return (
    <div>
      <center>
        <h2>
          Mellow Bliss Gallery
          <span role="img" aria-label="ice cream">
            &#x1F366;
          </span>
        </h2>
      </center>
      <GalleryContainer>
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`Image ${index}`} />
        ))}
      </GalleryContainer>
      <Footer />
    </div>
  );
};

export default Gallery;
