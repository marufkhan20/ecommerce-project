interface Review {
  id: number;
  user: {
    avatar: string;
    name: string;
  };
  createdAt: string;
  rating: number;
  review: string;
}

interface ProductSection {
  title: string;
  description: string;
}

export interface Product {
  id: number;
  thumbnail: string;
  detailsImages: string[];
  title: string;
  category: string;
  price: number;
  rating: number;
  reviews: Review[];
  colors: string[];
  sizes?: string[];
  productSections: ProductSection[];
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    thumbnail: "product1/thumbnail.webp",
    detailsImages: ["product1/detail2.webp", "product1/detail3.webp"],
    title: "Heavy Weight Shoes",
    category: "New in",
    price: 112,
    rating: 4.9,
    reviews: [
      {
        id: 1,
        user: {
          avatar: "1.webp",
          name: "Cody Fisher",
        },
        createdAt: "May 20, 2023",
        rating: 5,
        review:
          "Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.",
      },
      {
        id: 2,
        user: {
          avatar: "1.webp",
          name: "Cody Fisher",
        },
        createdAt: "May 20, 2023",
        rating: 5,
        review:
          "Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.",
      },
      {
        id: 2,
        user: {
          avatar: "1.webp",
          name: "Cody Fisher",
        },
        createdAt: "May 20, 2023",
        rating: 5,
        review:
          "Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.",
      },
    ],
    colors: ["Black", "White", "Orange", "Sky Blue", "Natural"],
    sizes: ["xs", "s", "m", "l", "xl"],
    productSections: [
      {
        title: "Description",
        description:
          "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.",
      },
      {
        title: "Fabric + Care",
        description:
          "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.",
      },
      {
        title: "How it fits",
        description:
          "Use this as a guide. Preference is a huge factor — if you're near the top of a size range and/or prefer more coverage, you may want to size up.",
      },
      {
        title: "FAQ",
        description:
          "Use this as a guide. Preference is a huge factor — if you're near the top of a size range and/or prefer more coverage, you may want to size up.",
      },
    ],
    description: `The patented eighteen-inch hardwood Arrowhead deck --- finely mortised in, makes this the strongest and most rigid canoe ever built. You cannot buy a canoe that will afford greater satisfaction.

    The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.
    
    Regular fit, mid-weight t-shirt
    Natural color, 100% premium combed organic cotton
    Quality cotton grown without the use of herbicides or pesticides - GOTS certified
    Soft touch water based printed in the USA`,
  },
  {
    id: 2,
    thumbnail: "product2/thumbnail.webp",
    detailsImages: ["product1/detail2.webp", "product1/detail3.webp"],
    title: "Heavy Weight Shoes",
    category: "New in",
    price: 112,
    rating: 4.9,
    reviews: [
      {
        id: 1,
        user: {
          avatar: "1.webp",
          name: "Cody Fisher",
        },
        createdAt: "May 20, 2023",
        rating: 5,
        review:
          "Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.",
      },
      {
        id: 2,
        user: {
          avatar: "1.webp",
          name: "Cody Fisher",
        },
        createdAt: "May 20, 2023",
        rating: 5,
        review:
          "Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.",
      },
      {
        id: 2,
        user: {
          avatar: "1.webp",
          name: "Cody Fisher",
        },
        createdAt: "May 20, 2023",
        rating: 5,
        review:
          "Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.",
      },
    ],
    colors: ["Black", "White", "Orange", "Sky Blue", "Natural"],
    sizes: ["xs", "s", "m", "l", "xl"],
    productSections: [
      {
        title: "Description",
        description:
          "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.",
      },
      {
        title: "Fabric + Care",
        description:
          "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.",
      },
      {
        title: "How it fits",
        description:
          "Use this as a guide. Preference is a huge factor — if you're near the top of a size range and/or prefer more coverage, you may want to size up.",
      },
      {
        title: "FAQ",
        description:
          "Use this as a guide. Preference is a huge factor — if you're near the top of a size range and/or prefer more coverage, you may want to size up.",
      },
    ],
    description: `The patented eighteen-inch hardwood Arrowhead deck --- finely mortised in, makes this the strongest and most rigid canoe ever built. You cannot buy a canoe that will afford greater satisfaction.

    The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.
    
    Regular fit, mid-weight t-shirt
    Natural color, 100% premium combed organic cotton
    Quality cotton grown without the use of herbicides or pesticides - GOTS certified
    Soft touch water based printed in the USA`,
  },
  {
    id: 4,
    thumbnail: "product4/thumbnail.webp",
    detailsImages: ["product1/detail2.webp", "product1/detail3.webp"],
    title: "Heavy Weight Shoes",
    category: "New in",
    price: 112,
    rating: 4.9,
    reviews: [
      {
        id: 1,
        user: {
          avatar: "1.webp",
          name: "Cody Fisher",
        },
        createdAt: "May 20, 2023",
        rating: 5,
        review:
          "Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.",
      },
      {
        id: 2,
        user: {
          avatar: "1.webp",
          name: "Cody Fisher",
        },
        createdAt: "May 20, 2023",
        rating: 5,
        review:
          "Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.",
      },
      {
        id: 2,
        user: {
          avatar: "1.webp",
          name: "Cody Fisher",
        },
        createdAt: "May 20, 2023",
        rating: 5,
        review:
          "Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.",
      },
    ],
    colors: ["Black", "White", "Orange", "Sky Blue", "Natural"],
    // sizes: ["xs", "s", "m", "l", "xl"],
    productSections: [
      {
        title: "Description",
        description:
          "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.",
      },
      {
        title: "Fabric + Care",
        description:
          "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.",
      },
      {
        title: "How it fits",
        description:
          "Use this as a guide. Preference is a huge factor — if you're near the top of a size range and/or prefer more coverage, you may want to size up.",
      },
      {
        title: "FAQ",
        description:
          "Use this as a guide. Preference is a huge factor — if you're near the top of a size range and/or prefer more coverage, you may want to size up.",
      },
    ],
    description: `The patented eighteen-inch hardwood Arrowhead deck --- finely mortised in, makes this the strongest and most rigid canoe ever built. You cannot buy a canoe that will afford greater satisfaction.

    The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.
    
    Regular fit, mid-weight t-shirt
    Natural color, 100% premium combed organic cotton
    Quality cotton grown without the use of herbicides or pesticides - GOTS certified
    Soft touch water based printed in the USA`,
  },
  {
    id: 3,
    thumbnail: "product3/thumbnail.webp",
    detailsImages: ["product1/detail2.webp", "product1/detail3.webp"],
    title: "Heavy Weight Shoes",
    category: "New in",
    price: 112,
    rating: 4.9,
    reviews: [
      {
        id: 1,
        user: {
          avatar: "1.webp",
          name: "Cody Fisher",
        },
        createdAt: "May 20, 2023",
        rating: 5,
        review:
          "Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.",
      },
      {
        id: 2,
        user: {
          avatar: "1.webp",
          name: "Cody Fisher",
        },
        createdAt: "May 20, 2023",
        rating: 5,
        review:
          "Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.",
      },
      {
        id: 2,
        user: {
          avatar: "1.webp",
          name: "Cody Fisher",
        },
        createdAt: "May 20, 2023",
        rating: 5,
        review:
          "Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.",
      },
    ],
    colors: ["Black", "White", "Orange", "Sky Blue", "Natural"],
    sizes: ["xs", "s", "m", "l", "xl"],
    productSections: [
      {
        title: "Description",
        description:
          "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.",
      },
      {
        title: "Fabric + Care",
        description:
          "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.",
      },
      {
        title: "How it fits",
        description:
          "Use this as a guide. Preference is a huge factor — if you're near the top of a size range and/or prefer more coverage, you may want to size up.",
      },
      {
        title: "FAQ",
        description:
          "Use this as a guide. Preference is a huge factor — if you're near the top of a size range and/or prefer more coverage, you may want to size up.",
      },
    ],
    description: `The patented eighteen-inch hardwood Arrowhead deck --- finely mortised in, makes this the strongest and most rigid canoe ever built. You cannot buy a canoe that will afford greater satisfaction.

    The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.
    
    Regular fit, mid-weight t-shirt
    Natural color, 100% premium combed organic cotton
    Quality cotton grown without the use of herbicides or pesticides - GOTS certified
    Soft touch water based printed in the USA`,
  },
  // {
  //   id: 5,
  //   thumbnail: "product1/thumbnail.webp",
  //   detailsImages: ["product1/detail2.webp", "product1/detail3.webp"],
  //   title: "Heavy Weight Shoes",
  //   category: "New in",
  //   price: 112,
  //   rating: 4.9,
  //   reviews: [
  //     {
  //       id: 1,
  //       user: {
  //         avatar: "1.webp",
  //         name: "Cody Fisher",
  //       },
  //       createdAt: "May 20, 2023",
  //       rating: 5,
  //       review:
  //         "Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.",
  //     },
  //     {
  //       id: 2,
  //       user: {
  //         avatar: "1.webp",
  //         name: "Cody Fisher",
  //       },
  //       createdAt: "May 20, 2023",
  //       rating: 5,
  //       review:
  //         "Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.",
  //     },
  //     {
  //       id: 2,
  //       user: {
  //         avatar: "1.webp",
  //         name: "Cody Fisher",
  //       },
  //       createdAt: "May 20, 2023",
  //       rating: 5,
  //       review:
  //         "Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.",
  //     },
  //   ],
  //   colors: ["Black", "White", "Orange", "Sky Blue", "Natural"],
  //   sizes: ["xs", "s", "m", "l", "xl"],
  //   productSections: [
  //     {
  //       title: "Description",
  //       description:
  //         "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.",
  //     },
  //     {
  //       title: "Fabric + Care",
  //       description:
  //         "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.",
  //     },
  //     {
  //       title: "How it fits",
  //       description:
  //         "Use this as a guide. Preference is a huge factor — if you're near the top of a size range and/or prefer more coverage, you may want to size up.",
  //     },
  //     {
  //       title: "FAQ",
  //       description:
  //         "Use this as a guide. Preference is a huge factor — if you're near the top of a size range and/or prefer more coverage, you may want to size up.",
  //     },
  //   ],
  //   description: `The patented eighteen-inch hardwood Arrowhead deck --- finely mortised in, makes this the strongest and most rigid canoe ever built. You cannot buy a canoe that will afford greater satisfaction.

  //   The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.

  //   Regular fit, mid-weight t-shirt
  //   Natural color, 100% premium combed organic cotton
  //   Quality cotton grown without the use of herbicides or pesticides - GOTS certified
  //   Soft touch water based printed in the USA`,
  // },
];

export default products;
