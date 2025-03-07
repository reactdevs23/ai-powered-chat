import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";

import "./style.css";

const Chat = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
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
              { role: "user", content: "write a sum function in javascript" },
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

        // Process each line separately, without creating a function inside the loop
        lines.forEach((line) => {
          if (line.startsWith("data: ")) {
            try {
              const json = JSON.parse(line.replace("data: ", ""));
              const content = json.choices?.[0]?.delta?.content || "";
              result += content;

              // Update the state outside of the loop
              setMessage((prevMessage) => prevMessage + content); // This avoids using `result` directly
            } catch (error) {
              console.error("Error parsing JSON:", error);
            }
          }
        });
      }
    };

    // window.navigator.clipboard.write(message);

    fetchData().catch((err) => console.error("Error fetching data:", err));
  }, []);
  console.log(message);
  const markdownContent = `
Here's a simple sum function in JavaScript that accepts two arguments and returns their sum:

\`\`\`javascript
function sum(a, b) {
  return a + b;
}
\`\`\`

**Example usage:**

\`\`\`javascript
console.log(sum(3, 4)); // Output: 7
\`\`\`

You can also create a function that accepts an array of numbers and returns their sum:

\`\`\`javascript
function sumArray(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
\`\`\`

**Example usage:**

\`\`\`javascript
const array = [1, 2, 3, 4];
console.log(sumArray(array)); // Output: 10
\`\`\`
  `;
  return (
    <div>
      <h1>Streamed Message</h1>
      <Markdown>
        # Getting Started with Create React App This project was bootstrapped
        with [Create React App](https://github.com/facebook/create-react-app).
        ## Available Scripts In the project directory, you can run: ### `npm
        start` Runs the app in the development mode.\ Open
        [http://localhost:3000](http://localhost:3000) to view it in your
        browser. The page will reload when you make changes.\ You may also see
        any lint errors in the console. ### `npm test` Launches the test runner
        in the interactive watch mode.\ See the section about [running
        tests](https://facebook.github.io/create-react-app/docs/running-tests)
        for more information. ### `npm run build` Builds the app for production
        to the `build` folder.\ It correctly bundles React in production mode
        and optimizes the build for the best performance. The build is minified
        and the filenames include the hashes.\ Your app is ready to be deployed!
        See the section about
        [deployment](https://facebook.github.io/create-react-app/docs/deployment)
        for more information. ### `npm run eject` **Note: this is a one-way
        operation. Once you `eject`, you can't go back!** If you aren't
        satisfied with the build tool and configuration choices, you can `eject`
        at any time. This command will remove the single build dependency from
        your project. Instead, it will copy all the configuration files and the
        transitive dependencies (webpack, Babel, ESLint, etc) right into your
        project so you have full control over them. All of the commands except
        `eject` will still work, but they will point to the copied scripts so
        you can tweak them. At this point you're on your own. You don't have to
        ever use `eject`. The curated feature set is suitable for small and
        middle deployments, and you shouldn't feel obligated to use this
        feature. However we understand that this tool wouldn't be useful if you
        couldn't customize it when you are ready for it. ## Learn More You can
        learn more in the [Create React App
        documentation](https://facebook.github.io/create-react-app/docs/getting-started).
        To learn React, check out the [React
        documentation](https://reactjs.org/). ### Code Splitting This section
        has moved here:
        [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
        ### Analyzing the Bundle Size This section has moved here:
        [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
        ### Making a Progressive Web App This section has moved here:
        [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
        ### Advanced Configuration This section has moved here:
        [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
        ### Deployment This section has moved here:
        [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
        ### `npm run build` fails to minify This section has moved here:
        [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
      </Markdown>
    </div>
  );
};

export default Chat;
