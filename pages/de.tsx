import Home from "~/screens/home";

export default function De() {
  return <Home locale="de" />;
}

export function getStaticProps() {
  return {
    props: {
      locale: "de",
    },
  };
}
