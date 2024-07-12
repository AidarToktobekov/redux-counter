import '../Calculator/Calculator.css'

interface Props{
  result: string
}

const Counter:React.FC<Props> = ({result}) => {
  return (
    <>
    <h3 className="result">{result}</h3>
    </>
  );

}



export default Counter;