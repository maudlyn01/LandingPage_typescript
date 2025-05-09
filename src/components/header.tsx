import { type headerProps } from "../types/headerProps"
export const Header = ({name,career,catchPhrase}:headerProps) => {
  return (
    <header>
        <h1 >{catchPhrase}</h1>
        <h2>Bem vindo a {name} uma companhia de {career}</h2>
        
    </header>
  )
}

