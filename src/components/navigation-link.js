export function NavigationLink({ id, name }) {
  return (
    <a
      href={`/#${id}`}
      className="mb-2 rounded-xl bg-menu-back-light py-3 px-5 text-menu-front-dark"
    >
      {name}
    </a>
  );
}
