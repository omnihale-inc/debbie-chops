import homeImage from "@/assets/images/home.jpg";
import itemImage from "@/assets/images/item.png";

const restaurantData = {
  title: "Debbie's Delight",
  themeSecondaryColor: "#ee7834",
  home: {
    header: { main: "Welcome to", span: "Debbie's Delight" },
    paragraph:
      "Hello, and welcome to Debbie's Delight, your go-to destination for mouthwatering treats that bring joy to every bite! We specialize in crafting delicious cakes, buns, meat pies, and doughnuts that are made with love and the finest ingredients.",
    image: homeImage,
  },
  about: {
    header: { main: "Why choose", span: "Us" },
    paragraph:
      "Whether you're celebrating a special occasion or simply indulging in a sweet craving, our delectable baked goods are sure to satisfy. At Debbie's Delight, we believe in the power of good food to bring people together, and we're excited to share our passion for baking with you. Thank you for choosing Debbie Chops – where every bite is a taste of happiness!",
    video: "/about.mp4",
  },
  menu: [
    {
      image: itemImage,
      title: "Fried Rice",
      description:
        "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image: itemImage,
      title: "Fried Rice",
      description:
        "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image: itemImage,
      title: "Fried Rice",
      description:
        "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image: itemImage,
      title: "Fried Mango",
      description:
        "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image: itemImage,
      title: "Fried Onions",
      description:
        "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image: itemImage,
      title: "Fried",
      description:
        "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image: itemImage,
      title: "Fried Tomato",
      description:
        "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    },
  ],
  orderEmail: "order@debbiechops.omnihale.com",
  copyright: "Debbie's Delight",
};

export default restaurantData;
