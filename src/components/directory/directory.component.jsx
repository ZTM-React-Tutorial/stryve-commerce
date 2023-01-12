import "./directory.styles.scss";
import DirectoryItem from "../directory-item/directory-item.component";
import Hero from "../hero/hero.component";
import SectionHow from "../section-how/section-how.component";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "shop/mens",
  },
];

const heroSectionDetails = {
  headingPrimary: "An Eco-friendly Fashion Wear",
  heroDesc:
    "Clothing and accessories that promote and support sustainable and ethical fashion practices. Our fabrics are all organic , handloom , slow-hand-made passionately by local women.",
  heroBtnTxt: "Wear your value",
  custImgs: [
    {
      src: "img/customers/Customer-01.jpeg",
      alt: "Customer 01",
    },
    {
      src: "img/customers/Customer-02.jpeg",
      alt: "Customer 02",
    },
    {
      src: "img/customers/Customer-03.jpeg",
      alt: "Customer 03",
    },
    {
      src: "img/customers/Customer-04.jpeg",
      alt: "Customer 04",
    },
    {
      src: "img/customers/Customer-05.jpeg",
      alt: "Customer 05",
    },
    {
      src: "img/customers/Customer-06.jpeg",
      alt: "Customer 06",
    },
  ],
  custImgDesc:
    "Our <span>happy customers</span> are the best proof of the high quality and sustainability of our conscious clothing.",
  heroImg: {
    src: "img/HeroImage.jpeg",
    alt: "Conscious eco-friendly clothing and accessories",
  },
};

const Directory = () => {
  // return (
  //   <div className="categories-container">
  //     {categories.map(({ title, id, imageUrl, route }) => (
  //       <DirectoryItem
  //         key={id}
  //         title={title}
  //         imageUrl={imageUrl}
  //         route={route}
  //       />
  //     ))}
  //   </div>
  // );
  return (
    <main>
      <Hero details={heroSectionDetails} />
      <SectionHow />
    </main>
  );
};

export default Directory;
