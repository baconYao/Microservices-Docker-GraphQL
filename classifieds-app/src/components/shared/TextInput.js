import styled from "styled-components";

const TextInput = styled.input`
  /* ${props => props.theme.veryLightGrey} 是從 styled-components 那邊繼承而來，可以參考index.js的ThemeProvider */
  border: 1px solid ${props => props.theme.veryLightGrey};
  box-sizing: border-box;
  display: block;
  font-size: 0.9rem;
  padding: 0.25rem;
  width: 100%;
`;

export default TextInput;