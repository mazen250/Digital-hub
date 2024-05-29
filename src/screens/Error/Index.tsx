import { Link } from "react-router-dom";

function Index() {
  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="text-gray-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
              500
            </h1>
            <p className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-white">
              Internal Server Error.
            </p>
            <p className="mb-4 text-lg font-light text-gray-400">
              Sorry something went wrong.
            </p>
            <Link
              to={"/"}
              className="bg-gray-500 rounded-lg px-8 py-2 text-white hover:bg-gray-600"
            >
              Go Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
