export type Product = {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  imageUrl: string;
  category: string;
  type: string;
};

const imageJewellery = [
  "https://media.istockphoto.com/id/157579369/id/foto/perhiasan-kostum-vintage-di-atas-putih.jpg?s=1024x1024&w=is&k=20&c=cL4gwz9_mJpVKJ8EkiReMBizCrCegnrJ0UvjDyY0tk0=",
  "https://media.istockphoto.com/id/172206466/id/foto/liontin-batu-berlian-3.jpg?s=1024x1024&w=is&k=20&c=OZb8SsJFa5oGsy3EyGaFH5c39guqEwVPKI6xLbQg8nw=",
  "https://cdn.pixabay.com/photo/2016/02/02/15/53/jewellery-1175526_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/01/19/14/53/fine-jewellery-4778055_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/29/03/23/accessory-1867039_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/06/21/08/15/ruby-2426451_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/12/29/23/46/jewellery-6902967_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/04/24/07/03/jewelry-2255623_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/03/05/19/54/chain-2119611_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/12/29/23/46/jewellery-6902967_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/05/31/15/04/plastic-792092_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/04/24/07/03/jewelry-2255622_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/10/01/15/14/beads-967179_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/05/31/14/49/gold-792002_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/03/13/14/44/bracelet-671791_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/08/21/01/16/knight-5504950_1280.jpg",
  "https://cdn.pixabay.com/photo/2011/11/16/11/28/earrings-10332_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/05/31/14/57/bracelet-792047_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/12/15/05/03/ring-4696382_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/05/31/15/13/ring-792157_1280.jpg",
]

const generateRandomProduct = (id: number): Product => {
  const names = ["Ring", "Necklace", "Bracelet", "Earrings", "Brooch"];
  const categories = ["Gold", "Silver", "Platinum", "Diamond", "Pearl"];
  const types = ["Ring", "Necklace", "Bracelet", "Earrings", "Brooch"];
  const randomName = `${names[Math.floor(Math.random() * names.length)]} ${Math.floor(Math.random() * 1000)}`;
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomType = types[Math.floor(Math.random() * types.length)];
  const randomPrice = Math.floor(Math.random() * 1000) + 50; // Price between 50 and 1050
  const randomImageUrl = imageJewellery[id-2];
  // const randomImageUrl = `https://via.placeholder.com/150?text=${randomName}`;


  return {
    id,
    name: randomName,
    description: `A beautiful ${randomCategory} ${randomType}`,
    shortDescription: `${randomCategory} ${randomType}`,
    price: randomPrice,
    imageUrl: randomImageUrl,
    category: randomCategory,
    type: randomType,
  };
};

export const products: Product[] = [
  {
    id: 1,
    name: "Ring a7x",
    description: "A beautiful gold ring",
    shortDescription: "Gold Ring",
    price: 100.0,
    imageUrl: "https://cdn.pixabay.com/photo/2019/04/23/13/40/indians-4149567_1280.jpg",
    category: "Gold",
    type: "Ring"
  },
  ...Array.from({ length: 15 }, (_, i) => generateRandomProduct(i + 2)),
];

export const categories = ["Gold", "Silver", "Platinum", "Diamond", "Pearl"];
