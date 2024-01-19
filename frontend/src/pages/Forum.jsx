import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Header from "../components/Header";
import forumData from "../data/forumData";
const Forum = () => {
  const handleAddQuestion = () => {
    const newQuestion = {
      question: "New question",
      answer: "New answer",
      username: "New User",
    };
    addQuestion(newQuestion);
  };

  const handleUpdateQuestion = (id) => {
    const updatedQuestion = {
      answer: "Updated answer",
    };
    updateQuestion(id, updatedQuestion);
  };

  const handleDeleteQuestion = (id) => {
    deleteQuestion(id);
  };

  const [isClicked, setIsClicked] = useState(false);
  const [askQuestion, setAskQuestion] = useState(false);
  const handleQuestionClick = () => {
    setAskQuestion(!askQuestion);
  };

  const handleSearchClick = () => {
    setIsClicked(true);
  };

  return (
    <>
      <Header />
      <div className="gradient-forum"></div>
      <div className="flex-row text-center items-center justify-center mt-16">
        <div>
          <div className="text-5xl font-bold max-sm:text-3xl">
            Welcome to <span className="textgrad2">Community Forums</span>
          </div>
          <p className="mt-2 text-gray-500 w-6/12 text-center mx-auto max-sm:text-xs max-sm:w-11/12">
            A Quora like Chat section where everyone can share their thoughts,
            opinions irrespective of anything, Talk about Local Businesses,
            Truth Value of prices and much more
          </p>
        </div>
        <div className="flex mt-4 items-center justify-center">
          <input
            type="search"
            className={`border border-gray-800 rounded-full bg-transparent px-4 py-2 mb-10 ${
              isClicked ? "w-6/12 transition-all" : "w-40"
            }`}
            placeholder="Search Queries"
            onClick={handleSearchClick}
          />
          <FaSearch className="ml-2 text-gray-700 mb-10" />
        </div>

        <div>
          {forumData.map((forum, i) => (
            <div key={i}>
              <div className="mx-auto rounded-sm question-card w-10/12 h-fit relative px-8 py-8 bg-gray-200 bg-opacity-30 shadow-md m-6">
                <div className="flex-row">
                  <div className="flex">
                    <div className="text-gray-500">
                      <span className="font-bold text-gray-500">
                        Posted by{" "}
                      </span>{" "}
                      {forum.username}
                    </div>
                  </div>
                  <div className="text-3xl mt-4 text-left font-semibold">
                    {forum.question}
                  </div>
                  <div className="text-md text-left mt-2 text-gray-500 leading-loose">
                    {forum.answer}
                  </div>
                  <div className="flex mt-4">
                    <div className="mr-4 border border-green-500 text-green-600 px-2 py-1 rounded-full">
                      {" "}
                      Upvotes: {forum.upvotes}{" "}
                    </div>
                    <div className="mr-4 border border-red-500 text-red-600 px-2 py-1 rounded-full">
                      {" "}
                      Downvotes: {forum.downvotes}{" "}
                    </div>
                  </div>
                  {!forum.answer ? (
                    <div className="text-center flex px-6 py-2 bg-blue-600 w-fit mt-4 text-white rounded-full">
                      Reply
                      <div className="reply-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="{2}"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="Floating Button fixed bottom-16 px-6 py-3 rounded-full shadow-xl shadow-gray-700/40  bg-blue-700 text-white font-medium right-16 max-sm:right-8 max-sm:bottom-6 max-sm:text-sm items-center text-lg flex"
        onClick={handleQuestionClick}
      >
        <img src="/chat.png" alt="" className="mr-2" />
        Ask a Question
      </div>

      {askQuestion ? (
        <div className="w-full h-full bg-black fixed top-0 z-40 bg-opacity-25 backdrop-blur-sm transition-all py-56">
          <div className="flex items-center justify-center transition-all">
            <div className="Post card bg-white w-[400px] h-fit p-8 rounded-md font-semibold text-lg">
              <div className="flex justify-between">
                <div className="text-xl font-bold">Ask a Question</div>
                <img
                  src="/close.svg"
                  alt=""
                  height={20}
                  width={20}
                  onClick={handleQuestionClick}
                />
              </div>
              <form className="form">
                <label className="text-gray-800 text-sm font-semibold">
                  Question
                </label>
                <input
                  className="w-full border-2 border-gray-800 rounded-md px-4 py-3 mt-1 text-xs"
                  type="text"
                  placeholder="Enter your question"
                  required={true}
                />
                <label className="text-gray-800 text-sm font-semibold mt-4">
                  Description
                </label>
                <textarea
                  className="w-full border-2 border-gray-800 rounded-md px-4 py-3 mt-1 text-xs"
                  type="text"
                  placeholder="Enter your description"
                  required={true}
                />
                <button
                  className="w-full text-center bg-gray-900 cursor-pointer font-medium hover:bg-slate-600 text-white rounded-full px-4 py-3 mt-4 text-sm"
                  onClick={handleAddQuestion}
                >
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Forum;
