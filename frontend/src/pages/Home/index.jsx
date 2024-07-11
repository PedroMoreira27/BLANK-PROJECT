import './style.css';

function Home() {
  return (
    <div className="h-screen w-screen p-5">
      <div className="flex justify-center items-center text-black h-4/6 bg-white shadow-white sitcky top-0 card m-7 rounded-xl">
        <div className="m-5 ">aaaaaaa</div>
      </div>
      <div className="grid grid-cols-3 m-5 gap-4 h-screen">
        <div className="col-span-1 bg-white rounded-xl m-2">aa</div>
        <div className="col-span-1 bg-white rounded-xl m-2">aa</div>
        <div className="col-span-1 bg-white rounded-xl m-2">aa</div>
        <div className="col-span-3 rounded-xl m-2 grid grid-cols-5 gap-8">
          <div className="w-full bg-white col-span-3 rounded-xl h-full">aa</div>
          <div className="w-full bg-white col-span-2 rounded-xl h-full">aa</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
