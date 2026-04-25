"use client";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  eyebrowClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  className = "",
  align = "left",
  ...props
}) {
  return (
    <div className={className} style={{ textAlign: align }} {...props}>
      {eyebrow ? <p className={eyebrowClassName}>{eyebrow}</p> : null}
      {title ? <h1 className={titleClassName}>{title}</h1> : null}
      {description ? (
        <p className={descriptionClassName}>{description}</p>
      ) : null}
    </div>
  );
}