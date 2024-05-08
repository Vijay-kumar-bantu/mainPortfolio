import arrow from "../assets/SVG/arrow.svg";

const Project = ({ project }) => {
  const { image, name, desc, code, web, deploy } = project;
  return (
    <div className="lg:min-h-[500px] p-3 flex flex-col justify-between gap-5 rounded-md shadow-lg">
      <div className="h-[60%]">
        <img
          src={image}
          className="h-full object-fill rounded-md"
          alt="project-demo-image"
        />
      </div>
      <h1 className="text-xl lg:text-2xl font-secondary font-extrabold">
        {name}
      </h1>
      <p className="lg:w-[95%] text-sm lg:text-[14px] lg:leading-[24px] text-monofont">
        {desc}
      </p>

      {/* button section */}
      <div className="flex gap-5">
        <div>
          <p className="bg-buttoncolor w-fit p-2 lg:px-4 lg:py-2 font-extrabold text-white rounded-md flex items-center gap-2 cursor-pointer">
            <p>
              <a href={code} target="_blank">
                Source code
              </a>
            </p>
            <p>
              <img src={arrow} />
            </p>
          </p>
        </div>
        {deploy && (
          <div>
            <p className="bg-buttoncolor w-fit p-2 lg:px-4 lg:py-2 font-extrabold text-white rounded-md flex items-center gap-2 cursor-pointer">
              <p>
                <a href={web} target="_blank">
                  visit site
                </a>
              </p>
              <p>
                <img src={arrow} />
              </p>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
