import Counter from '../Counter/Counter';
import './Calculator.css'
import {RootState} from "../../app/store";
import {useDispatch, useSelector,} from "react-redux";
import {addSymbol,deleteSymbol} from "../Counter/counterSlice";

const Calculator = ()=>{

    const dispatch = useDispatch();
    const counterValue = useSelector((state: RootState) => state.counter.value);
    const getEnter = ()=>{
        console.log(eval(counterValue))
    }

    return(
        <>
            <div className="calculator-body">
                <div className="calculator-display">
                    <Counter></Counter>
                </div>
                <div className="calculator-buttons">
                    <button className="btn btn-lil" onClick={() => {dispatch(addSymbol('+'))}}>+</button>
                    <button className="btn btn-lil" onClick={() => {dispatch(addSymbol('-'))}}>-</button>
                    <button className="btn btn-lil" onClick={() => {dispatch(addSymbol('*'))}}>*</button>
                    <button className="btn btn-lil" onClick={() => {dispatch(addSymbol('/'))}}>/</button>
                    <button className="btn" onClick={() => {dispatch(addSymbol('1'))}}>1</button>
                    <button className="btn" onClick={() => {dispatch(addSymbol('2'))}}>2</button>
                    <button className="btn" onClick={() => {dispatch(addSymbol('3'))}}>3</button>
                    <button className="btn" onClick={() => {dispatch(addSymbol('4'))}}>4</button>
                    <button className="btn" onClick={() => {dispatch(addSymbol('5'))}}>5</button>
                    <button className="btn" onClick={() => {dispatch(addSymbol('6'))}}>6</button>
                    <button className="btn" onClick={() => {dispatch(addSymbol('7'))}}>7</button>
                    <button className="btn" onClick={() => {dispatch(addSymbol('8'))}}>8</button>
                    <button className="btn" onClick={() => {dispatch(addSymbol('9'))}}>9</button>
                    <button className="btn" onClick={() => {dispatch(deleteSymbol())}}>Delete</button>
                    <button className="btn" onClick={() => {dispatch(addSymbol('0'))}}>0</button>
                    <button className="btn" onClick={getEnter}>Enter</button>
                </div>
            </div>
        </>
    )
}

export default Calculator;