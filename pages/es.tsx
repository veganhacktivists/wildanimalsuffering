import Home from "~/screens/home";

export default function Es() {
  return <Home locale="es" />;
}

export function getStaticProps() {
  return {
    props: {
      locale: "es",
    },
  };
}
