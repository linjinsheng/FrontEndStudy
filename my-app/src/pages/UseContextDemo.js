import React, { useContext } from 'react';
     
const themes = {
    light: {
      color: '#ddd',
      background: 'yellow'
    },
    dark: {
      color: '#fff',
      background: 'red'
    }
  }
   
  const ThemeContext = React.createContext();
   
  function UseContextDemo(){
    return (
      <ThemeContext.Provider value={themes.dark}>
        <Father></Father>
      </ThemeContext.Provider>
    )
  }
   
  function Child(){
    const theme = useContext(ThemeContext);
    return (
      <div style={{color: theme.color, backgroundColor: theme.background}}>测试一下useContext</div>
    )
  }
   
  function Father(){
    return (
      <div>
       <Child/>
       </div>
    )
  }

export default UseContextDemo;