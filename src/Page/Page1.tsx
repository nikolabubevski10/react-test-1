import dayjs from "dayjs";
import { useContext, useState } from "react";
import { Theme, ThemeContext } from "../Context/ThemeContext";
import { useLogs } from "../Hooks/useLogs";
import "./page1.css";

function Page1() {
  const [comments, setComments] = useState<string>("");
  const [buttonIndex, setButtonIndex] = useState<number>(1);
  const { theme, setTheme } = useContext(ThemeContext);
  const [logs, addLog] = useLogs();

  const toggleTheme = () => {
    addLog(`Theme was set to ${theme === Theme.LIGHT ? "Light" : "Dark"}`);
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  const handleCommentsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComments(e.target.value);
    console.log(comments, 'comment')
  };

  const handleSendComments = () => {
    addLog(`Message Sent: ${comments}`);
    setComments("");
  };

  const handleAddButton = () => {
    addLog(`Button ${buttonIndex} added`);
    setButtonIndex(buttonIndex + 1);
  };

  const handleButtonClick = (clickedButtonIndex: number) => {
    return () => {
      addLog(`Button ${clickedButtonIndex} clicked`);
    };
  };

  return (
    <div className="page">
      <div className="page-1__row">
        <div className="page-1__col page-1__leftside">
          <button onClick={toggleTheme}>
            Set {theme === Theme.DARK ? "Light" : "Dark"} Theme
          </button>
          <textarea value={comments} onChange={handleCommentsChange} className="page-1__textarea"></textarea>
          <button onClick={handleSendComments} disabled={!comments.length} className={`${comments}` ? "page-1__comment" : "page-1__comment_disable"}>
            Send Comments
          </button>

          {buttonIndex > 1
            ? Array(buttonIndex - 1)
                .fill({})
                .map((_, index) => (
                  <button onClick={handleButtonClick(index + 1)} key={index} className="page1__addbtn">
                    Button {index + 1}
                  </button>
                ))
            : null}
          <button onClick={handleAddButton}>Add Button {buttonIndex}</button>
        </div>
        <div className="page-1__col">
          <p>Output Window</p>
          <ul>
            {logs.map((log) => (
              <li key={log.timestamp}>
                {dayjs(log.timestamp).format("DD/MM/YY HH:mm:ss")} {log.logText}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page1;
