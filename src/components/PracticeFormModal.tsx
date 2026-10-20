import { useEffect, useRef, useState, type FormEvent } from "react";
import { X } from "lucide-react";
import { practiceInputSchema, type PracticeInput } from "../schemas/practice";

type PracticeFormModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (input: PracticeInput) => void;
};

const inputClass =
  "mt-1.5 block w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-ink outline-none focus:border-moss";

export default function PracticeFormModal({
  open,
  onClose,
  onSubmit,
}: PracticeFormModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");
  const [practice, setPractice] = useState("");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const result = practiceInputSchema.safeParse({
    title,
    memo,
    practice: Number(practice),
  });
  const memoError = memo.trim().length > 50;

  const resetForm = () => {
    setTitle("");
    setMemo("");
    setPractice("");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!result.success) return;
    onSubmit(result.data);
    resetForm();
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => {
        // 背景（dialog自身）をクリックしたら閉じる
        if (e.target === e.currentTarget) onClose();
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-md rounded-3xl bg-paper p-0 shadow-xl backdrop:bg-ink/40"
    >
      <form className="flex flex-col gap-5 p-8" onSubmit={handleSubmit}>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-moss">
              NEW RECORD
            </p>
            <h2 className="mt-2 text-xl font-bold text-ink">練習を記録する</h2>
          </div>
          <button
            type="button"
            aria-label="閉じる"
            onClick={onClose}
            className="cursor-pointer rounded-full p-2 text-ink/40 hover:bg-sand hover:text-ink"
          >
            <X className="size-4" />
          </button>
        </div>

        <label className="block">
          <span className="text-xs font-semibold text-ink/60">曲名</span>
          <input
            type="text"
            className={inputClass}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label className="block">
          <span className="text-xs font-semibold text-ink/60">
            一言コメント（任意）
          </span>
          <input
            type="text"
            placeholder="例：テンポを落として粒をそろえた。"
            className={inputClass}
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
          />
          {memoError && (
            <span className="mt-1 block text-xs text-terracotta">
              コメントは50文字以内にしてください
            </span>
          )}
        </label>

        <label className="block">
          <span className="text-xs font-semibold text-ink/60">
            練習時間（分）
          </span>
          <input
            type="text"
            inputMode="numeric"
            className={inputClass}
            value={practice}
            onChange={(e) => setPractice(e.target.value)}
          />
        </label>

        <button
          type="submit"
          disabled={!result.success}
          className="mt-2 cursor-pointer rounded-xl bg-terracotta py-3 font-bold text-white duration-200 enabled:hover:opacity-90 enabled:active:translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
        >
          記録する
        </button>
      </form>
    </dialog>
  );
}
