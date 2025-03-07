import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm"; // For GitHub-flavored markdown
import rehypeRaw from "rehype-raw"; // For raw HTML rendering
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./style.css";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading

      const response = await fetch(
        "https://zarp-574634440075.europe-west4.run.app/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "dolphin-2.9.2-qwen2-72b",
            messages: [
              { role: "system", content: "You are a helpful assistant" },
              { role: "user", content: "Write a python adding function " },
            ],
            stream: true,
          }),
        }
      );

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let result = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        lines.forEach((line) => {
          if (line.startsWith("data: ")) {
            try {
              const json = JSON.parse(line.replace("data: ", ""));
              const content = json.choices?.[0]?.delta?.content || "";
              result += content;
            } catch (error) {
              console.error("Error parsing JSON:", error);
            }
          }
        });
      }

      setMessage(result); // Set the message once the entire content is fetched
      setLoading(false); // Stop loading
    };

    fetchData().catch((err) => {
      console.error("Error fetching data:", err);
      setLoading(false); // Stop loading in case of error
    });
  }, []);

  return (
    <div>
      <h1>Streamed Message</h1>
      {loading ? (
        <div className="loading">
          <span>Replying...</span>
        </div>
      ) : (
        <div className="markdown-container">
          <ReactMarkdown
            children={message}
            remarkPlugins={[gfm]} // Adds GitHub-flavored markdown (tables, strikethroughs, etc.)
            rehypePlugins={[rehypeRaw]} // Parses raw HTML
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={dracula}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Chat;
