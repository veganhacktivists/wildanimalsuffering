import Home from "~/screens/home";

export default function It() {
  return <Home locale="it" />;
}

export function getStaticProps() {
  return {
    props: {
      locale: "it",
    },
  };
}
