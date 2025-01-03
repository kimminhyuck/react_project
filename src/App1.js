
// const ReactButton = (props) => {
//   const style = {
//     color: 'white',
//     backgroundColor: 'purple'
//   }
//   return <button style={style}>{props.children}</button>
// }

// function App() {
//   return (
//     <ReactButton children={'simple'}></ReactButton>
//   );
// }

import styled from "styled-components";
const SimpleButton = styled.button`
  color: white;
  background-color: purple;
`
const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`
const ReactButton = props => {
  return <button className={props.className}>{props.children}</button>
}
const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`
const PrimaryButton = styled.button`
  color: ${props => props.primary ? 'white' : 'black'};
  background-color: ${props => props.primary ? 'blue' : 'gray'};
`
function App() {
  return (
    <>
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <ReactButton>React</ReactButton>
      <ReactLargeButton>React Large</ReactLargeButton>
      <PrimaryButton>Normal</PrimaryButton>
      <PrimaryButton primary>Primary</PrimaryButton>
    </>
  );
}

export default App;
