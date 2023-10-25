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


h2{
  
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
  font-family: 'Roboto';
  font-size: 24px;
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
`;
export const HomeStyle = createGlobalStyle`
.home {
      
    
  h1 {
    color: #8a4546;
  }

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

}
`;
