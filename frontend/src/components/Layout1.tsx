function Layout1({ children }: { children: JSX.Element }) {
  return (
    <div>
      <nav>TopBar</nav>
      <div>Liste des catégories (sous format texte)</div>
      {children}
      <footer>Footer</footer>
    </div>
  );
}

export default Layout1;
