import Card from "@ui/shared/Card";
import Button from "@ui/shared/Button";
import SectionTitle from "@ui/shared/SectionTitle";

export default function AuthCard({
  title,
  description,
  children,
  error,
  submitLabel,
  isLoading = false,
  onSubmit,
  footerText,
  footerActionLabel,
  onFooterAction,
  secondaryActionLabel,
  onSecondaryAction,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit?.(event);
  }

  return (
    <Card className="contentCard">
      <div className="contentCardHeader">
        <SectionTitle
          title={title}
          description={description}
          titleClassName="sectionTitle"
          descriptionClassName="sectionTextMuted"
        />
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="contentCardBody">
          <div className="formFields">{children}</div>

          {error && <p className="formError">{error}</p>}

          {secondaryActionLabel && (
            <div className="formRowEnd">
              <button
                type="button"
                className="formTextButton"
                onClick={onSecondaryAction}
              >
                {secondaryActionLabel}
              </button>
            </div>
          )}

          {submitLabel && (
            <div className="contentCardFooter">
              <Button
                className="formFullButton"
                variant="primary"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Carregando..." : submitLabel}
              </Button>
            </div>
          )}
        </div>

        {(footerText || footerActionLabel) && (
          <div className="contentCardFooter">
            <p className="formFooterText">
              {footerText}{" "}
              {footerActionLabel && (
                <button
                  type="button"
                  className="formFooterLink"
                  onClick={onFooterAction}
                >
                  {footerActionLabel}
                </button>
              )}
            </p>
          </div>
        )}
      </form>
    </Card>
  );
}