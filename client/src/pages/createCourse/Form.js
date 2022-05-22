/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

function Form() {
  return (
    <div className="p-6">
      <form>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Titel
          </label>
          <input
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ethiek"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Beschrijving
          </label>
          <textarea
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            rows={8}
            placeholder="Beschrijf waar de cursus over gaat"
          />
        </div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Voeg een foto toe aan de cursus
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="user_avatar_help"
          id="user_avatar"
          type="file"
          accept="image/*"
        />
        <Link to={`/courses/edit/${uuidv4()}`}>
          <button
            type="button"
            className="bg-sky rounded-md text-white py-2 px-4 hover:shadow-md float-right mt-8"
          >
            <p>Volgende</p>
          </button>
        </Link>
      </form>
    </div>
  );
}

Form.propTypes = {};

export default Form;
