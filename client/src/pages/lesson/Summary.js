import React from "react";
import { Link } from "react-router-dom";

function Summary() {
  return (
    <main className="mt-8 flex flex-col justify-center">
      <p className="m-auto w-44">Einde van deze les!</p>

      <Link to="/courses" className=" m-auto w-44 mt-24">
        <button
          type="button"
          className="bg-sky text-white rounded-md px-4 py-2 hover:bg-sky-dark"
        >
          Les afronden
        </button>
      </Link>
    </main>
  );
}

Summary.propTypes = {};

export default Summary;
