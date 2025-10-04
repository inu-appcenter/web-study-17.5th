import "./Editor.css";
import { useState, useRef } from "react";

type EditorProps = {
  onCreate: (content: string) => void;
};

const Editor = ({ onCreate }: EditorProps) => {
  const [content, setContent] = useState("");
  const contentRef = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSubmit();
  };

  const onSubmit = () => {
    if (content.trim() === "") {
      contentRef.current?.focus();
      return;
    }
    onCreate(content);
    setContent(""); // 초기화
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChange}
        placeholder="새로운 ToDo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
