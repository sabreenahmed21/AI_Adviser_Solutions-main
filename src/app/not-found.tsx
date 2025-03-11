import Link from "next/link";
import Image from "next/image";
import NotFoundImg from "../../public/assets/not-found.png";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <div className="flex grow items-center px-6 xl:px-10">
        <div className="mx-auto text-center">
          <Image
            src={NotFoundImg}
            alt="not found"
            className="mx-auto mb-8 aspect-[360/326] max-w-[256px] xs:max-w-[370px] lg:mb-12 2xl:mb-16"
          />
          <h1 className="text-[22px] font-bold leading-normal text-gray-1000 lg:text-3xl">
            Sorry, the page not found
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            The page you're looking for doesn't exist or might have been moved.
          </p>
          <Link href={"/"}>
            <button className="mt-8 h-12 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 xl:h-14 xl:px-8">
              Back to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
