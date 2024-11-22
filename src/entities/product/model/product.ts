export interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  // reviews: [
  //   {
  //     rating: number;
  //     comment: "Highly impressed!";
  //     date: "2024-05-23T08:56:21.625Z";
  //     reviewerName: "Wyatt Perry";
  //     reviewerEmail: "wyatt.perry@x.dummyjson.com";
  //   },
  //   {
  //     rating: number;
  //     comment: "Awesome product!";
  //     date: "2024-05-23T08:56:21.625Z";
  //     reviewerName: "Olivia Anderson";
  //     reviewerEmail: "olivia.anderson@x.dummyjson.com";
  //   },
  //   {
  //     rating: number;
  //     comment: "Highly recommended!";
  //     date: "2024-05-23T08:56:21.625Z";
  //     reviewerName: "Mateo Nguyen";
  //     reviewerEmail: "mateo.nguyen@x.dummyjson.com";
  //   },
  // ];
  returnPolicy: string;
  minimumOrderQuantity: number;
  // meta: {
  //   createdAt: "2024-05-23T08:56:21.625Z";
  //   updatedAt: "2024-05-23T08:56:21.625Z";
  //   barcode: "2903942810911";
  //   qrCode: "https://assets.dummyjson.com/public/qr-code.png";
  // };
  // images: [
  //   "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/1.png",
  //   "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/2.png",
  //   "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/3.png",
  // ];
  thumbnail: string;
}
