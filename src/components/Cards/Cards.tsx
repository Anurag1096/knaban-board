//need to figure out how avatar list data and comments count should be structure
// and how to assign work to people.
import { CardsProps } from "./types";

export default function Cards({tagName,headings,discription}:CardsProps) {
  return (
    <>
      <div id="container" className="rounded-3xl p-4 m-1 bg-white max-w-80 min-h-48 ">
        <div id="tags" className="text-start">
          <h5>{tagName?tagName:"TagName"}</h5>
        </div>
        <div
          id="headings"
          className=" text-lg text-black font-extrabold text-shadow-black"
        >
          <h4>{headings?headings:"Your heading"}</h4>
        </div>
        <div
          id="discriptions"
          className="text-md text-shadow-2xs font-medium text-gray-500 "
        >
          <h5>{discription?headings:"Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit."}</h5>
        </div>
        <div id="bottom-row" className="flex justify-between items-center">
          <div>this will have an avatar component list</div>
          <div>
            this will have a comment modal where you can comment and read other
            peoples comments in a modal form and{" "}
          </div>
        </div>
      </div>
    </>
  );
}
