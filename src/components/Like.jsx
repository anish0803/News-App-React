import React from 'react';
import { useState } from 'react';
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { BsFillHandThumbsDownFill } from "react-icons/bs";


function Like() {
    const [count, setCount] = useState(0);

    const handleLike = () => {
        setCount((prev) => prev + 1)
        
    }
    const handledisLike = () => {
        setCount((prev) => prev - 1)
    }
  return (
    <>
      <span id="like">
        <BsFillHandThumbsUpFill onClick={handleLike} />
        {count}
      </span>
      <span id="like">
        <BsFillHandThumbsDownFill onClick={handledisLike} />
        {count}
      </span>
    </>
  );
}

export default Like;