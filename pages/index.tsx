import Home from "~/screens/home";

export default function En() {
  return <Home />;
}

export function getStaticProps() {
  return {
    props: {
      locale: "en",
    },
  };
}