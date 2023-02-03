import Home from "~/screens/home";

export default function Fr() {
  return <Home />;
}

export function getStaticProps() {
  return {
    props: {
      locale: "fr",
    },
  };
}
