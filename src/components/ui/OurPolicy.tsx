import { list } from "@components/data";
function OurPolicy() {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm  md:text-base text-gray-700">
      {list.map((item, key) => (
        <div key={key}>
          <img src={item.img} className="w-12 m-auto mb-5" />
          <p className="font-semibold">{item.content}</p>
          <p className="text-gray-700">{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default OurPolicy;
