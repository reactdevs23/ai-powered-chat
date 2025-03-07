export const fetchAIResponse = async (url, input) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "dolphin-2.9.2-qwen2-72b",
        messages: [
          { role: "system", content: "You are a helpful assistant" },
          { role: "user", content: input },
        ],
        stream: true, // Enable streaming of response
      }),
    });

    return response; // Return the response for processing in the component
  } catch (error) {
    console.error("Error fetching AI response:", error);
    throw error; // Propagate error
  }
};
