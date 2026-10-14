import { useState, type FormEvent } from "react";

type PianoFormProps = {
  onSubmit: (input: {
    title: string;
    author: string;
    practice: number;
  }) => void;
};

export default function PianoForm({ onSubmit }: PianoFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [practice, setPractice] = useState("");

  const minutes = Number(practice);
  const isValid =
    title.trim() !== "" &&
    author.trim() !== "" &&
    Number.isInteger(minutes) &&
    minutes > 0;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValid) return;
    onSubmit({ title: title.trim(), author: author.trim(), practice: minutes });
    setTitle("");
    setAuthor("");
    setPractice("");
  };

  return (
    <form
      className="px-6 py-4  bg-white rounded-2xl w-full max-w-2xl mx-auto mt-6 shadow-sm"
      onSubmit={handleSubmit}
    >
      <label className="block">
        <span className="text-sm text-gray-400">曲名</span>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border border-gray-400 p-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className="block">
        <span className="text-sm text-gray-400">作曲家</span>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border border-gray-400 p-3"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
      <label className="block">
        <span className="text-sm text-gray-400">練習時間（分）</span>
        <input
          type="text"
          inputMode="numeric"
          className="mt-1 block w-full rounded-md border border-gray-400 p-3"
          value={practice}
          onChange={(e) => setPractice(e.target.value)}
        />
      </label>
      <button
        type="submit"
        disabled={!isValid}
        className="mt-3 rounded-md border border-gray-300 p-2 shadow-sm enabled:hover:bg-gray-200 disabled:opacity-50"
      >
        ＋練習を追加
      </button>
    </form>
  );
}
