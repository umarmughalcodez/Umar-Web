"use client";

import { useState } from "react";

type Message = {
  from: "user" | "bot";
  text: string;
};

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI typing delay
    setTimeout(() => {
      const botReply: Message = {
        from: "bot",
        text:
          input.toLowerCase().includes("contact") ||
          input.toLowerCase().includes("whatsapp")
            ? "You can reach me on WhatsApp or email. 👇"
            : "Got it! I'm here to help you learn more about UmarWeb. 😊",
      };
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-700"
        >
          💬 Hey, I’m available. Want to chat?
        </button>
      ) : (
        <div className="bg-white w-80 h-96 rounded-2xl shadow-lg flex flex-col overflow-hidden">
          <div className="bg-green-600 text-white p-3 font-semibold text-center">
            UmarWeb Assistant 🤖
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-xl max-w-[75%] text-sm ${
                    msg.from === "user"
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-200 px-3 py-2 rounded-xl text-sm text-gray-700 animate-pulse">
                  Typing...
                </div>
              </div>
            )}
          </div>
          <div className="border-t p-2 flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 border rounded-full px-3 py-2 text-sm outline-none"
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-green-600 text-white px-3 py-2 rounded-full text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
