import ComingSoon from "../components/comingSoon/coming-soon.component";
import { Options } from "../contexts/popup/popup.context";
import { usePopupContext } from "./contexts.hook";

const useComingSoon = () => {
  const { updateOptions, setOptions } = usePopupContext();

  const openComingSoon = (): void => {
    updateOptions({
      content: <ComingSoon onOkClick={() => setOptions({} as Options)} />,
      title: "Coming soon",
      paperSx: { width: "337px", height: "187px", opacity: "1 !important" },
    });
  };

  return { openComingSoon };
};

export default useComingSoon;
