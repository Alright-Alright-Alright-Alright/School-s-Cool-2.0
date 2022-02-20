import React from "react"
import PropTypes from "prop-types"
import Button from "../Button"

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-screen h-screen flex items-center justify-center">
        <div role="alert" className=" text-center">
          <p>Something went wrong:</p>
          <pre className=" text-pink p-3">{error.message}</pre>
          <Button
            buttonStyle="btnSecondaryStyle"
            buttonName="Go Home"
            onClick={resetErrorBoundary}
          />
        </div>
      </div>
    </div>
  )
}

ErrorFallback.propTypes = {
  error: PropTypes.shape.isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
}

export default ErrorFallback
