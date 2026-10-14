import { BellDot } from "lucide-react";

type HeaderProps = {
  date: string;
};

export default function Header({ date }: HeaderProps) {
  return (
    <header className="items-center px-6 py-4">
      <span className="text-sm text-gray-600">{date}</span>
      <button className="float-right shadow-sm cursor-pointer bg-white rounded-4xl duration-300 hover:bg-gray-200 active:translate-y-0.5">
        <BellDot className="m-3" />
      </button>
      <h2 className="text-xl font-medium">おかえりなさい、User</h2>
    </header>
  );
}
