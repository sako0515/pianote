import { isRouteErrorResponse, useRouteError } from "react-router";

// 描画中にエラーが起きたときの画面。レイアウトごと置き換わるので単体で完結させる
export default function ErrorPage() {
  const error = useRouteError();
  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : error instanceof Error
      ? error.message
      : "不明なエラー";

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="w-full max-w-md rounded-3xl bg-paper p-10 text-center shadow-sm">
        <p className="font-bold text-ink">エラーが発生しました</p>
        <p className="mt-3 text-sm break-words text-ink/50">{message}</p>
        <a
          href="/"
          className="mt-6 inline-block rounded-xl bg-forest px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
        >
          トップへ戻る
        </a>
      </div>
    </div>
  );
}
