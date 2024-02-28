import ComingSoonButton from "../components/primary-transparent-button/component";
import { Options } from "../contexts/popup/popup.context";
import { usePopupContext } from "./contexts.hook";

const useComingSoon = () => {
  const { updateOptions, setOptions } = usePopupContext();

  const openComingSoon = (): void => {
    updateOptions({
      content: <ComingSoonButton text="Ok" onClick={() => setOptions({} as Options)} />,
      title: "Coming soon",
      paperSx: {
        width: "337px",
        height: "fit-content",
        opacity: "1 !important",
      },
    });
  };

  return { openComingSoon };
};

export default useComingSoon;
