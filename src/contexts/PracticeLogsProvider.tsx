import { useState, type ReactNode } from "react";
import PracticeFormModal from "../components/PracticeFormModal";
import { usePracticeLogs } from "../hooks/usePracticeLogs";
import { PracticeLogsContext } from "./practiceLogsContext";

export default function PracticeLogsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const practiceLogs = usePracticeLogs();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const deleteLog = (id: string) => {
    if (!confirm("この記録を削除しますか？")) return;
    practiceLogs.removeLog(id);
  };

  return (
    <PracticeLogsContext
      value={{
        ...practiceLogs,
        deleteLog,
        openForm: () => setIsFormOpen(true),
      }}
    >
      {children}
      <PracticeFormModal
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={practiceLogs.addLog}
      />
    </PracticeLogsContext>
  );
}
