interface Props{
  result: string
}

const Counter:React.FC<Props> = ({result}) => {
  return (
    <>
    <h3 style={{textAlign: "center"}}>{result}</h3>
    </>
  );

}



export default Counter;