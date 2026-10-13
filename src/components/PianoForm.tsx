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
      <label>
        <input
          type="text"
          placeholder="曲名"
          className="block border border-gray-400 rounded-md p-3 shadow-sm mr-2 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="作曲家"
          className="mt-4 block border border-gray-400 rounded-md p-3 shadow-sm mr-2 w-full"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
      <label>
        <input
          type="number"
          min="1"
          placeholder="練習時間"
          className="mt-4 block border border-gray-400 rounded-md p-3 shadow-sm mr-2 w-full"
          value={practice}
          onChange={(e) => setPractice(e.target.value)}
        />
      </label>
      <button className="mt-4 border border-gray-300 p-2 rounded-md shadow-sm cursor-pointer duration-300 hover:bg-gray-200 active:translate-y-0.5">
        ＋練習を追加
      </button>
    </form>
  );
}
