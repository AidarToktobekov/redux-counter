import React from "react";
import {RootState} from "../../app/store";
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {

  const dispatch = useDispatch();
  const counterValue = useSelector((state: RootState) => state.counter.value);
  return (
    <>
    <h3>{counterValue}</h3>
    </>
  );

}



export default Counter;