import React from "react";
import Button from "../ui/Button";

const Works = () => {
  return (
    <>
      <div className="h-screen bg-black sticky top-0">
        <div className="h-full w-[70%] py-10 mx-auto ">
          <div className="flex h-full w-full items-center justify-center">
            <div className="grid h-full w-full gap-4 p-2 text-black  grid-cols-4 grid-rows-4 rounded-lg shadow-md">
              <div className="col-span-2 row-span-2 bg-white rounded-lg shadow-md flex items-center justify-center">
                <div className="flex flex-col items-center   md:flex-row md:max-w-xl w-full h-full ">
                  <img
                    src="/public/namedLogo.png"
                    alt=""
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h1 className="mb-2 text-2xl font-bold tracking-tight text-black">
                      Project Name
                    </h1>
                    <p className="mb-3 font-normal text-gray-700">
                      Description
                    </p>
                    <Button text={"Link ↗️"} />
                  </div>
                </div>
              </div>

              <div className="col-span-2 row-span-2 bg-white rounded-lg shadow-md flex items-center justify-center">
                <div className="flex flex-col items-center   md:flex-row md:max-w-xl w-full h-full ">
                  <img
                    src="/public/namedLogo.png"
                    alt=""
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h1 className="mb-2 text-2xl font-bold tracking-tight text-black">
                      Project Name
                    </h1>
                    <p className="mb-3 font-normal text-gray-700">
                      Description
                    </p>
                    <Button text={"Link ↗️"} />
                  </div>
                </div>
              </div>

              <div className="col-span-1 row-span-4 bg-white rounded-lg shadow-md flex items-center justify-center">
                <div className="flex flex-col items-center   md:flex-row md:max-w-xl w-full h-full ">
                  <img
                    src="/public/namedLogo.png"
                    alt=""
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48  md:rounded-none md:rounded-s-lg"
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h1 className="mb-2 text-2xl font-bold tracking-tight text-black">
                      Project Name
                    </h1>
                    <p className="mb-3 font-normal text-gray-700">
                      Description
                    </p>
                    <Button text={"Link ↗️"} />
                  </div>
                </div>
              </div>

              <div className="col-span-2 row-span-4 bg-white rounded-lg shadow-md flex items-center justify-center">
                <div className="flex flex-col items-center   md:flex-row md:max-w-xl w-full h-full ">
                  <img
                    src="/public/namedLogo.png"
                    alt=""
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h1 className="mb-2 text-2xl font-bold tracking-tight text-black">
                      Project Name
                    </h1>
                    <p className="mb-3 font-normal text-gray-700">
                      Description
                    </p>
                    <Button text={"Link ↗️"} />
                  </div>
                </div>
              </div>

              <div className="col-span-1 row-span-4 bg-white rounded-lg shadow-md flex items-center justify-center">
                <div className="flex flex-col items-center   md:flex-row md:max-w-xl w-full h-full ">
                  <img
                    src="/public/namedLogo.png"
                    alt=""
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h1 className="mb-2 text-2xl font-bold tracking-tight text-black">
                      Project Name
                    </h1>
                    <p className="mb-3 font-normal text-gray-700">
                      Description
                    </p>
                    <Button text={"Link ↗️"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
