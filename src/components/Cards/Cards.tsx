export default function Cards(){
    return(<>
    <div id="container" className="rounded-xl p-4">
      <div id="tags" className="text-start">
        <h5>a single tag tags</h5>
      </div>
      <div id="headings" className=" text-lg text-black font-extrabold text-shadow-black">
        <h4>Heading</h4>
      </div>
      <div id="discriptions" className="text-md text-shadow-2xs font-medium text-gray-300 ">
        <h5>Discriptions</h5>
      </div>
      <div id="bottom-row" className="flex justify-between items-center">
          <div>this will have an avatar component list</div>
          <div>this will have a comment modal where you can comment and read other peoples comments in a modal form and </div>
      </div>
    </div>
    
    </>)
}