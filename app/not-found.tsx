import Link from "next/link";
import BookButton from "@/components/BookButton";

export default function NotFound() {
  return (
    <div className="container-page py-24 text-center">
      <h1 className="text-4xl font-semibold">Page not found</h1>
      <p className="mx-auto mt-3 max-w-md text-lg text-slate-700">The page you are looking for does not exist or has moved.</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/" className="btn btn-outline">Go to home page</Link>
        <BookButton location="not_found" />
      </div>
    </div>
  );
}
