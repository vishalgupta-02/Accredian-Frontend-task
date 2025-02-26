import Part1 from "./Part1";
import Part2 from "./Part2";

const Benefits = () => {
  return (
    <div id="benefits">
      <div className="flex flex-col justify-center items-center max-sm:hidden">
        <h1 className="text-4xl my-18 font-bold">
          What are the <span className="text-blue-500">Referral Benefits?</span>
        </h1>
        <div className="flex gap-4">
          {/* Left side */}
          <div>
            <Part1 />
          </div>
          {/* Right Side */}
          <div>
            <Part2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
