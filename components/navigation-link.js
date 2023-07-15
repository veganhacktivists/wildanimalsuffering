export function NavigationLink({ id, name }) {
  return (
    <li className="flex">
      <a
        className="flex-1 rounded-xl bg-menu-back-light px-5 py-3 text-menu-front-dark"
        href={`/#${id}`}
      >
        {name}
      </a>
    </li>
  );
}
