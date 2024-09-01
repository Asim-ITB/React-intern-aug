import Card from "../components/Card";

const datas = [
  {
    img: "https://picsum.photos/200",
    name: "asim",
    age: 22,
    address: "ItBridge",
  },
  {
    img: "https://picsum.photos/201",
    name: "sajal",
    age: 27,
    address: "ItBridge",
  },
  {
    img: "https://picsum.photos/202",

    name: "abishek",
    age: 37,
    address: "ItBridge",
  },
];
function Home() {
  return (
    <div className="home">
      {datas.map((data, index) => (
        <Card title={data.name} key={index}>
          <img src={data.img} alt="pic" />
          <div>age: {data.age}</div>
          <div>addr: {data.address}</div>
        </Card>
      ))}
    </div>
  );
}

export default Home;
