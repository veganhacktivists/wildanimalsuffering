import Home from "~/screens/home";

export default function Ru() {
  return <Home locale="ru" />;
}

export function getStaticProps() {
  return {
    props: {
      locale: "ru",
    },
  };
}
