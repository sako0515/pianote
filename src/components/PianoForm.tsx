type PianoFormProps = {
  title: string;
  setTitle: (title: string) => void;
  author: string;
  setAuthor: (author: string) => void;
  practice: number;
  setPractice: (practice: number) => void;
  onPracticeSubmit: (title: string, author: string, practice: number) => void;
};

export default function PianoForm({
  title,
  setTitle,
  author,
  setAuthor,
  practice,
  setPractice,
  onPracticeSubmit,
}: PianoFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimedTitle = title.trim();
    const trimedAuthor = author.trim();

    if (trimedTitle === "" || trimedAuthor === "") return;
    onPracticeSubmit(trimedTitle, trimedAuthor, practice);
    setTitle("");
    setAuthor("");
    setPractice(0);
  };

  return (
    <form
      className="px-6 py-4  bg-white rounded-2xl w-180 mx-auto mt-6 shadow-sm"
      onSubmit={handleSubmit}
    >
      <label>
        <input
          type="text"
          placeholder="曲名"
          className="block border border-gray-400 rounded-md p-3 shadow-sm mr-2 w-120"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="作曲家"
          className="mt-4 block border border-gray-400 rounded-md p-3 shadow-sm mr-2 w-120"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
      <label>
        <input
          type="number"
          min="1"
          placeholder="練習時間"
          className="mt-4 block border border-gray-400 rounded-md p-3 shadow-sm mr-2 w-120"
          value={practice}
          onChange={(e) => setPractice(Number(e.target.value))}
        />
      </label>
      <button className="mt-4 border border-gray-300 p-2 rounded-md shadow-sm cursor-pointer duration-300 hover:bg-gray-200 active:translate-y-0.5">
        ＋練習を追加
      </button>
    </form>
  );
}
