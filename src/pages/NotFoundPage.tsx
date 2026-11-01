import { Link } from "react-router";
import Card from "../components/Card";

export default function NotFoundPage() {
  return (
    <Card className="py-16 text-center">
      <p className="text-5xl text-accent">404</p>
      <p className="mt-4 font-medium text-fg">ページが見つかりません</p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
      >
        マイピアノへ戻る
      </Link>
    </Card>
  );
}
