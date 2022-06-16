import React, { useState } from "react";
import PropTypes from "prop-types";

function CreateLessonForm(props) {
  const { submit } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="p-6">
      <form>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Les titel
          </label>
          <input
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ethiek"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Les beschrijving
          </label>
          <textarea
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            rows={8}
            placeholder="Beschrijf waar de cursus over gaat"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="bg-sky rounded-md text-white py-2 px-4 hover:shadow-md float-right mt-8"
          onClick={() => submit(title, description)}
        >
          <p>Submit</p>
        </button>
      </form>
    </div>
  );
}

CreateLessonForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default CreateLessonForm;
