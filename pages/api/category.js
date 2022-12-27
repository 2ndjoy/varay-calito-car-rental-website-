export default function handler(req, res) {
  res.status(200).json([
    {
      categoryName: "Ferrari",
      img: "https://i.ibb.co/D9RJ0zc/ferrari-Logo.jpg",
    },
    {
      categoryName: "Lamborgini",
      img: "https://i.ibb.co/7gxbK3T/lambo-Logo.jpg",
    },
    { categoryName: "BMW", img: "https://i.ibb.co/cwcpqjV/bmwLogo.jpg" },
    { categoryName: "Audi", img: "https://i.ibb.co/XF4k8xw/audiLogo.jpg" },
  ]);
}
