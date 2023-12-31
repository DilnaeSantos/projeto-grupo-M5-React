import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:  'Roboto', sans-serif;
}

html,
:root {
  background-color: #c4ab9a;
  width: 100%;
  min-height: 100vh;
}

button,
a {
  cursor: pointer;
}

a, li{
  text-decoration: none;
  list-style: none;
  color: inherit;
}

button,
input {
  outline: none;
}
h1{
  font-family: 'Glass Antiqua';
  color: #888600;
  margin: auto;
}
h2{
  color: #FFFFFF;
  font-family: 'Montserrat';
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

h3{
  font-family: 'Roboto';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

p{
  color:#8a4546;
  font-family: 'Roboto';
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

a{
  font-family: 'Montserrat';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

 /* perssonalização dos scrolls */
 *::-webkit-scrollbar {
	width: 12px;
}

*::-webkit-scrollbar-track {
	background: #8a4546;
}

*::-webkit-scrollbar-thumb {
	background-color: #c4ab9a;
	border-radius: 10px;
	border: 2px solid #8a4546;
}

`;
export const HomeStyle = createGlobalStyle`
.home {
      

  nav {
    background-color: #8a4546;
      text-align: center;
      padding: 10px;
  }

  nav a {
    text-decoration: none;
    color: #8a4546;
      margin: 10px;
  }

  main {
    padding: 20px;
  }

 

  h2 {
    color: #8a4546;
    text-align: center;
    
      
  }

  p {
    text-align: center;
    margin-top: 20px;
}

  .artesanato {
    display: block; 
    margin: 0 auto 20px;
    border-radius: 30%;
    height: 200px;
    margin-top: 20px;
  }
  
  .artesa {
    display: block; 
    margin: 0 auto 20px; 
    border-radius: 30%;
    height: 200px;
    margin-top: 20px;
  }

  .foto-home-1 {
   display: flex;
   max-width: 300px;
  }

}
`;
