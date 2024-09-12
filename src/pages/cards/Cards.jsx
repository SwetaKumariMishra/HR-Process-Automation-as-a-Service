import Exams from "@/utils/cards";

const Cards = () => {
  return (
    <section className="mt-20 grid grid-cols-3 gap-8 px-10 mb-10">
      {Exams.map((item) => (
        <div key={item.id} className="card w-96 bg-[#e0f5ff] shadow-xl text-black">
          <div className="card-body">
            <p className="text-gray-700">{item.Duration}</p>
            <p className="text-gray-700">{item.Date}</p>
            <h2 className="card-title mt-2">{item.title}</h2>
            <p>{item.description}</p>
            <div className="card-actions justify-center pt-5">
              <button className="rounded-lg bg-[#03a9f4] text-white font-bold py-2 px-12">Start Now</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cards;
