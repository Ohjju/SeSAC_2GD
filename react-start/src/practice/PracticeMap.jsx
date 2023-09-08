import MapChild from "./MapChild";

export default function PracticeMap() {
  const items = [
    {
      item: "PS5",
      price: "685,000",
      // id: 1,
    },
    {
      item: "에어프라이어",
      price: "50,000",
      // id: 2,
    },
    {
      item: "사세치킨윙",
      price: "11,500",
      // id: 3,
    },
  ];

  return (
    <>
      {/* <MapChild item={items[0].item} price={items[0].price}></MapChild> */}
      {/* <MapChild item={items[1].item} price={items[1].price}></MapChild> */}
      {/* <MapChild item={items[2].item} price={items[2].price}></MapChild> */}

      {items.map((data, index) => {
        return <MapChild key={index} item={data.item} price={data.price} />;
      })}
    </>
  );
}
