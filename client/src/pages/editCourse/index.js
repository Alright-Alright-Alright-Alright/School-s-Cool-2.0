import React, { useState } from "react";
import Main from "../../components/layout/Main";
import Previews from "./Previews";

function EditCourse() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Main
      contentLeft={
        <Previews selected={selectedIndex} setSelected={setSelectedIndex} />
      }
      main={<p>Lets edit a course</p>}
    />
  );
}

EditCourse.propTypes = {};

export default EditCourse;
