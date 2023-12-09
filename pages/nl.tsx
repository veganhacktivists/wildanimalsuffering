import Home from "~/screens/home";

export default function Nl() {
  return <Home locale="nl" />;
}

export function getStaticProps() {
  return {
    props: {
      locale: "nl",
    },
  };
}
