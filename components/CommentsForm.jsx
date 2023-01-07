import React, { useState, useRef, useEffect } from "react";

const CommentsForm = () => {
  const [error, seterror] = useState(false);
  const [localStorage, setlocalStorage] = useState(null);
  const [showSuccessMessage, setshowSuccessMessage] = useState(false);

  const commentElem = useRef();
  const nameElem = useRef();
  const emailElem = useRef();
  const storeDataElem = useRef();

  const handlerCommentSubmission = () => {
    seterror(false);

    const { value: comment } = commentElem.current;
    const { value: email } = emailElem.current;
    const { value: name } = nameElem.current;
    const { value: storeData } = storeDataElem.current;

    if (!comment || !name || !email) {
      seterror(true);
      return;
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    };
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Comments Form
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentElem}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          ref={nameElem}
          className="p-4 py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Name"
          name="name"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <input
          type="text"
          ref={nameElem}
          className="p-4 py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            ref={storeDataElem}
            type="checkbox"
            id="storeData"
            name="stpreData"
            value="true"
          />
          <label className="tex-gray-500 cursor-pointer ml-2" html="storeData">
            Save my name and email for the next time
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">All fields are required.</p>
      )}
      <div className="mt-8">
        <button
          type="button"
          onClick={handlerCommentSubmission}
          className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-wing px-8 py-3 cursor-pointer"
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="text-xl float-semibold mt-3 text-green-500 ">
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
