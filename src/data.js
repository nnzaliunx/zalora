const data = [
  {
    id: 1,
    name: "Women's Half Skirt Casual Sheath Dress Solid Color",
    price: 16.99,
    image:
      "https://f.nooncdn.com/p/pzsku/ZDEAB6CDEB9BCC3FEF499Z/45/_/1680758073/b040a7c6-8219-4572-ae16-e2074d9d7d10.jpg?format=avif&width=240",
    quantity: 1,
  },
  {
    id: 2,
    name: "New Arrival Large Size Dress for Women Bow-Knot Pure Color",
    price: 17.99,
    image:
      "https://f.nooncdn.com/p/pzsku/Z586585A916A045718BC6Z/45/_/1704870279/5a3ac98b-1b82-404e-b800-5aada976de68.jpg?format=avif&width=240",
    quantity: 1,
  },
  {
    id: 3,
    name: "Leather Satchel Handbag Black",
    price: 18.49,
    image:
      "https://f.nooncdn.com/p/v1616527424/N45710848A_3.jpg?format=avif&width=240",
    quantity: 1,
  },
  {
    id: 4,
    name: "Men's Analog Round Shape Leather Wrist Watch",
    price: 18.99,
    image:
      "https://f.nooncdn.com/p/pnsku/N70019382V/45/_/1702892772/198b2dd4-4f36-44e8-adef-37d36b5326b7.jpg?format=avif&width=240",
    quantity: 1,
  },
  {
    id: 5,
    name: "Infant 3 Stripes Sport Set",
    image:
      "https://f.nooncdn.com/p/pzsku/ZA4117077F0B4C4305EC0Z/45/_/1707135788/c241d40f-00e4-4297-b00c-5d13ac7cd9b7.jpg?format=avif&width=240",
    price: 21.99,
    quantity: 2,
  },
  {
    id: 6,
    name: "Kids Jdi T-Shirt Pants Set",
    image:
      "https://f.nooncdn.com/p/pzsku/Z32080612C47AE4B703FFZ/45/_/1699234722/8eb19711-768e-4690-929d-422f170ab5ba.jpg?format=avif&width=240",
    price: 22.49,
    quantity: 3,
  },
  {
    id: 7,
    name: "Star Wars Tm Luke Skywalker’s Landspeeder",
    image:
      "https://f.nooncdn.com/p/pzsku/Z744C10A5425F77E1B0A5Z/45/_/1666972697/4d39aca4-2757-44cc-9465-755f86c7d5b1.jpg?format=avif&width=240",
    price: 23.99,
    quantity: 2,
  },
  {
    id: 8,
    name: "Classic Large Creative Brick Box Building Toy",
    image:
      "https://f.nooncdn.com/p/pnsku/N20035870A/45/_/1698826504/0dabfcfb-8763-46cb-85bb-ab2da5d9e15b.jpg?format=avif&width=240",
    price: 25.99,
    quantity: 2,
  },
  {
    id: 9,
    name: "Bona Fide Compression Shirts for Women – Long/Short Sleeve Women’s",
    image:
      "https://f.nooncdn.com/p/pzsku/Z4C9F1BC9E9B04469A2F9Z/45/_/1702369119/5b2d3856-308c-4b46-ae0f-e03e5b3bcf44.jpg?format=avif&width=240",
    price: 26.49,
    quantity: 1,
  },
  {
    id: 10,
    name: "Waist Biker Shorts for Women with Push Up - Womens Shorts",
    image:
      "https://f.nooncdn.com/p/pzsku/ZE0DC8D5EAA32D4AEA588Z/45/_/1708951878/4f070b2d-835a-45ee-bd93-ae51529a67fe.jpg?format=avif&width=240",
    price: 27.49,
    quantity: 3,
  },
  {
    id: 11,
    name: "Linear Leggings",
    image:
      "https://f.nooncdn.com/p/pzsku/Z55D7306F954319D23B40Z/45/_/1694784524/8047e8fb-8551-4459-b71e-93165354deaa.jpg?format=avif&width=240",
    price: 28.49,
    quantity: 2,
  },
  {
    id: 12,
    name: "Sandwich Maker + Grill Maker + Waffle Maker Non-Stick 2 Slot",
    image:
      "https://f.nooncdn.com/p/v1677583876/N11426652A_1.jpg?format=avif&width=240",
    price: 29.99,
    quantity: 1,
  },
  {
    id: 13,
    name: "Watch Ultra 2 GPS + Cellular, 49mm Titanium Case With Blue",
    image:
      "https://f.nooncdn.com/p/pnsku/N53437376A/45/_/1694677786/8215864f-cb94-49c9-9f28-798cdf117dc0.jpg?format=avif&width=240",
    price: 30.99,
    quantity: 1,
  },
  {
    id: 14,
    name: "Eau De Cologne Refereshing And Delicate For Baby Skin 0M+ 100Ml",
    image:
      "https://f.nooncdn.com/p/v1665495086/N53356740A_1.jpg?format=avif&width=240",
    price: 31.49,
    quantity: 2,
  },
  {
    id: 15,
    name: "3 Stripe Sweatpants",
    image:
      "https://f.nooncdn.com/p/pzsku/Z69B2AD4ACDAA61733AC1Z/45/_/1694760104/28c10504-edd9-491d-9368-36c7ae358119.jpg?format=avif&width=240",
    price: 32.99,
    quantity: 2,
  },
  {
    id: 16,
    name: "Laptop Bag, 15.6 Inch Laptop Case",
    image:
      "https://f.nooncdn.com/p/pzsku/Z9D0EBDA7A252E5BD77A1Z/45/_/1711966845/2467aa7f-01ba-4f8c-b80b-9cb790aa2bda.jpg?format=avif&width=240",
    price: 33.99,
    quantity: 2,
  },
  {
    id: 17,
    name: "Double Touch Liquid Lip Colour 103 Natural Rose",
    image:
      "https://f.nooncdn.com/p/v1680513490/N46554630A_2.jpg?format=avif&width=240",
    price: 34.99,
    quantity: 3,
  },
  {
    id: 18,
    name: "Computer Corner Table 51 inch Home Gaming Desk",
    image:
      "https://f.nooncdn.com/p/pzsku/Z5520576CD5F80BCA5AE7Z/45/_/1665315775/56215d8c-b821-4b0a-a14c-3bcd9905ecbd.jpg?format=avif&width=240",
    price: 35.99,
    quantity: 3,
  },
  {
    id: 19,
    name: "Creamy Eye Treatment with Avocado White 14grams",
    image:
      "https://f.nooncdn.com/p/pzsku/ZA04A13FB4BE00427B20BZ/45/_/1711811949/04d6ce41-1aa9-480b-ada7-58121d8f60d6.jpg?format=avif&width=240",
    price: 37.99,
    quantity: 3,
  },
  {
    id: 15,
    name: "Braking Folding Electric Scooter",
    image:
      "https://f.nooncdn.com/p/v1538035642/N17874181A_2.jpg?format=avif&width=240",
    price: 140.49,
    quantity: 3,
  },
];
export default data;
