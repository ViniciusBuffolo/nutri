"use client";

export default function EmptyState({
  title = "Sem dados",
  description = "Nenhuma informação disponível.",
  className = "",
  containerClassName = "",
  valueClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  value = "--",
  gap = "12px",
  align = "left",
  ...props
}) {
  return (
    <div
      className={`${className} ${containerClassName}`.trim()}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap,
        textAlign: align,
      }}
      {...props}
    >
      {value !== null ? <div className={valueClassName}>{value}</div> : null}
      {title ? <h2 className={titleClassName}>{title}</h2> : null}
      {description ? (
        <p className={descriptionClassName}>{description}</p>
      ) : null}
    </div>
  );
}