import Home from "~/screens/home";

export default function Pl() {
  return <Home locale="pl" />;
}

export function getStaticProps() {
  return {
    props: {
      locale: "pl",
    },
  };
}
