import { useState } from "react";

export type LogItem = {
  logText: string;
  timestamp: number;
};

export function useLogs(): [LogItem[], (logText: string) => void] {
  const [logs, setLogs] = useState<LogItem[]>([]);

  const addLog = (logText: string) => {
    setLogs([
      {
        logText,
        timestamp: Date.now(),
      },
      ...logs,
    ]);
  };

  return [logs, addLog];
}
