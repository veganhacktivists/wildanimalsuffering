import Home from "~/screens/home";

export default function Fr() {
  return <Home locale="fr" />;
}

export function getStaticProps() {
  return {
    props: {
      locale: "fr",
    },
  };
}
