import { createGlobalStyle } from 'styled-components';



export default createGlobalStyle`

   *{
       margin: 0;
       padding:0;
       outline: 0;
       box-sizing: border-box;
   }
   body{
       background: #ccc;
       -webkit-font-smoothing: antialiased;
   }
   body, input,button{
       font: 16px sans-serif;
       font-family: 'Roboto', sans-serif;
   }
   #root{
    
       margin: 0 auto;
      
   }
   button{
       cursor: pointer;
   }
   .leaflet-container {
       width: 100vw;
       height: 100vh;
       position:absolute;
   }

`;