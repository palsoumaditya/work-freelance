import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 z-50 w-full h-[36px] bg-navy flex items-center justify-center text-sm font-normal text-white px-4">
      <span>
        The Lexend AI automation guide is here.{" "}
        <Link href="#" className="font-semibold text-accent hover:underline">
          Check it out!
        </Link>
      </span>
    </div>
  );
}
