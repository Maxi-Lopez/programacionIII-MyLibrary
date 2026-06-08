import { FavoritesProvider } from "../context/FavoritesContext";

export default function LibrosLayout({ children }) {
  return (
    <FavoritesProvider>
      {children}
    </FavoritesProvider>
  );
}