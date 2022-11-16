export const sources = [
  {
    text: "How many wild animals are there?",
    href: "https://reducing-suffering.org/how-many-wild-animals-are-there/",
  },
  {
    text: "Velit rhoncus pellentesque feugiat aenean tincidunt. Diam tincidunt aliquet mauris lorem.",
  },
  {
    text: "Egestas scelerisque ac risus. Neque nibh tellus elementum vulputate auctor.",
  },
  {
    text: "Arcu amet, sollicitudin gravida gravida platea.",
  },
];

export const Source = ({ number, href, text }) => {
  return href ? (
    <div>
      {number}.{" "}
      <a href={href} target="_blank" rel="noreferrer" className="underline">
        {text}
      </a>
    </div>
  ) : (
    <div>
      {number}. {text}
    </div>
  );
};
