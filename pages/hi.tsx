import Home from "~/screens/home";

export default function Hi() {
  return <Home locale="hi" />;
}

export function getStaticProps() {
  return {
    props: {
      locale: "hi",
    },
  };
}
