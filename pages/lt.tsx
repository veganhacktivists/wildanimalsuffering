import Home from "~/screens/home";

export default function Lt() {
  return <Home locale="lt" />;
}

export function getStaticProps() {
  return {
    props: {
      locale: "lt",
    },
  };
}
