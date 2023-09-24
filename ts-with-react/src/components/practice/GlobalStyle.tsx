import { createGlobalStyle } from "styled-components";

// style-components로 컴포넌트처럼 사용할 수 있게 함
const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'HakgyoansimGaeulsopungB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/HakgyoansimGaeulsopungB.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

*{
    font-family: 'HakgyoansimGaeulsopungB';
    margin:0;
    padding:0;
    box-sizing:border-box
}

a{
    text-decoration: none;
}

ul,ol{
    list-style: none;
}
`;

export default GlobalStyle;
