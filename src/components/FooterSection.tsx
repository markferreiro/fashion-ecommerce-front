interface IFooterSectionItem {
  name: string;
  url: string;
}

interface IFooterSectionProps {
  title: string;
  items: IFooterSectionItem[];
}

export const FooterSection = (props: IFooterSectionProps) => {
  return (
    <div className="mb-7 w-1/4 py-4 md:w-1/2 sm:w-full">
      <h4 className="relative mb-3 border-0">{props.title}</h4>
      <ul>
        {props.items.map((item, index) => (
          <li key={`section-${props.title}-item-${index}`}>
            <a className="hover:pl-2" href={item.url}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
