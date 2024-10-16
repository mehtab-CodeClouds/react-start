import { useEffect, useState } from "react";
import img from "../assets/about-img.jpg";

function Github() {
  const [data, setData] = useState({});

  const getData = async function () {
    const response = await fetch(
      "https://api.github.com/users/mehtab-CodeCLouds"
    );
    const data = await response.json();
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-center">
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row ">
          <img
            className=" w-96 rounded-t-lg md:rounded-none md:rounded-s-lg"
            src={data.avatar_url}
            alt=""
          />
          <div className="flex flex-col justify-between p-10 leading-normal">
            <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900">
              {data.name}
            </h5>
            <p className="mb-3 font-normal mt-4">
              <strong>Followers:</strong> {data.followers}
            </p>
            <a href="{data.url}">
              <strong>Profile URL:</strong> {data.url}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Github;
