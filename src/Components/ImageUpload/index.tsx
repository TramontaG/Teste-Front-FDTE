import { createRef, forwardRef } from "react";
import { InvisibleContainer } from "./styles";

type HiddenFormProps = {
  setImage: (imgEndpoint: string) => void;
};

export const HiddenForm = forwardRef<HTMLInputElement, HiddenFormProps>(
  ({ setImage }, ref) => {
    const submit = createRef<HTMLInputElement>();

    const onChooseImage: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      e.preventDefault();
      const image = e.target?.files?.[0] || null;
      if (!image) return;

      let reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(image);
    };

    return (
      <InvisibleContainer>
        <form encType="multipart/form-data">
          <input type="file" name="image" ref={ref} onChange={onChooseImage} />
          <input type="submit" ref={submit} />
        </form>
      </InvisibleContainer>
    );
  }
);
