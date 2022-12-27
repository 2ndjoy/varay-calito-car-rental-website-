// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      categoryName: "Ferrari",
      carName: "Ferrari",
      img: "https://i.ibb.co/XVscXB9/ferrari.jpg",
    },
    {
      categoryName: "Ferrari",
      carName: "Ferrari1",
      img: "https://i.ibb.co/y5yJQHY/ferrari2.jpg",
    },
    {
      categoryName: "Ferrari",
      carName: "Ferrari2",
      img: "https://i.ibb.co/w6BrBRx/ferrari3.jpg",
    },
    {
      categoryName: "Lamborgini",
      carName: "Lamborgini",
      img: "https://i.ibb.co/2MNSLf1/lambo.jpg",
    },
    {
      categoryName: "Lamborgini",
      carName: "Lamborgini1",
      img: "https://i.ibb.co/4thq7fW/lambo2.jpg",
    },
    {
      categoryName: "Lamborgini",
      carName: "Lamborgini2",
      img: "https://i.ibb.co/tDWsXvK/lambo3.jpg",
    },
    {
      categoryName: "BMW",
      carName: "BMW",
      img: "https://i.ibb.co/HdhCzkz/bmw.jpg",
    },
    {
      categoryName: "BMW",
      carName: "BMW1",
      img: "https://i.ibb.co/LpJZ4SD/bmw2.jpg",
    },
    {
      categoryName: "BMW",
      carName: "BMW2",
      img: "https://i.ibb.co/wck7ztx/bmw3.jpg",
    },
    {
      categoryName: "Audi",
      carName: "Audi",
      img: "https://i.ibb.co/Wy3ghzv/audi.jpg",
    },
    {
      categoryName: "Audi",
      carName: "Audi1",
      img: "https://i.ibb.co/PFMMjyZ/audi2.jpg",
    },
    {
      categoryName: "Audi",
      carName: "Audi2",
      img: "https://i.ibb.co/1zQjxSd/audi3.jpg",
    },
  ]);
}
