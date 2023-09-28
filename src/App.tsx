import { ThemeProvider } from "styled-components"
import { Button } from "./components/Button"
import { defaultTheme } from "./styles/themes/default"

function App() {

  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Button variant={"success"}/>
        <Button variant={"danger"}/>
        <Button variant={"primary"}/>
        <Button variant={"secondary"}/>
   
      </ThemeProvider>
    </div>
  ) 
}

export default App
