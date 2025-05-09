import { type footerProps } from "../types/footerProps"
export const Footer = ({name}:footerProps) => {
  return (
    <footer>
        <p>&copy;{new Date().getFullYear()} Feito com carinho por {name}  </p>
    </footer>
    
  );
}

