export function MainPage() {
  const texto = import.meta.env.VITE_ENV;

  return (
    <div>
      <h1>LA PAGINA FUNCIONA</h1>
      <p>{texto}</p>
    </div>
  );
}
