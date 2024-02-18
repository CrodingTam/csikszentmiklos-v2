import { useRouter } from "next/navigation";
import { useCallback } from "react";
import useComingSoon from "./coming-soon.hook";

const useNavigation = () => {
  const router = useRouter();
  const { openComingSoon } = useComingSoon();

  const externalTo = useCallback((link: string) => {
    window.open(link, "_blank");
  }, []);

  const to = useCallback(
    (path: string = "/") => {
      if (path.includes("#")) {
        openComingSoon();
        return;
      }
      if (path.startsWith("/")) {
        router.push(path);
      } else {
        externalTo(path);
      }
    },
    [externalTo, openComingSoon, router]
  );

  return { externalTo, to };
};

export default useNavigation;
