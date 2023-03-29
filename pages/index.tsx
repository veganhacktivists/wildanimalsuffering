import Home from "~/screens/home";

export default function En() {
  return <Home locale="en" />;
}

export function getStaticProps() {
  return {
    props: {
      locale: "en",
    },
  };
}
