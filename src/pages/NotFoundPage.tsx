import { Link } from "react-router";
import Card from "../components/Card";

export default function NotFoundPage() {
  return (
    <Card className="py-16 text-center">
      <p className="font-serif text-5xl text-terracotta">404</p>
      <p className="mt-4 font-bold text-ink">ページが見つかりません</p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-xl bg-forest px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
      >
        マイピアノへ戻る
      </Link>
    </Card>
  );
}
