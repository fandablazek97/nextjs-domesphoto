import Heading from "./Heading";

type UiSectionProps = {
  title: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
};

export default function UiSection({
  // Component props
  title = "Lorem ipsum dolor",
  as: Tag = "section",
  className = "",
  children,
  ...rest
}: UiSectionProps) {
  // Component logic
  return (
    // Component markup
    <Tag
      className={`grid grid-cols-1 gap-10 py-20 sm:py-24 md:grid-cols-3 md:gap-5 xl:gap-12 xl:py-32 ${className}`}
      {...rest}
    >
      <div className="col-span-1 flex flex-col items-start justify-start">
        <Heading as="h2" size="xl">
          {title}
        </Heading>
      </div>
      <div className="col-span-1 md:col-span-2">{children}</div>
    </Tag>
  );
}
