import { Link } from "react-router-dom";
function Body() {
  return (
    <main className="md:flex justify-between ">
      <section className="md:pl-32 text-center md:text-left  md:mt-10">
        <h1 className="md:text-4xl">
          <span className="md:text-4xl underline font-bold">Own</span> your
        </h1>
        <h1 className="md:text-4xl">Mental Health</h1>
        <h1 className="md:mb-4 md:text-4xl">with Self</h1>
        <p className="md:text-lg">Take quick assessment and learn about your</p>
        <p className="md:text-base md:mb-16">well-being</p>
        <div>
          <button className="px-4 py-1.5 font-semibold md:px-6 bg-slate-700 text-yellow-50 md:rounded-3xl shadow-md md:hover:shadow-lg hover:bg-slate-600 md:mb-10">
            Sign Up
          </button>
          <div>
            <span>Already have an account?</span>
            <Link className="text-blue-900 md:font-semibold" to="/login">
              Login
            </Link>
          </div>
        </div>
      </section>
      <section className="">
        <img
          className=" bg-blend-lighten w-[110%] md:rounded-tl-[2rem] md:bg-cover md:bg-center bg-center"
          src="/image-1.jpg"
          alt="girl image"
        />
      </section>
    </main>
  );
}

export default Body;
