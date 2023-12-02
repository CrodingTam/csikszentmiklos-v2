import { useRouter } from "next/navigation";
import { useCallback } from "react";

const useNavigation = () => {
  const router = useRouter();

  const externalTo = useCallback((link: string) => {
    window.open(link, "_blank");
  }, []);

  const to = useCallback(
    (path: string = "/") => {
      if (path.startsWith("/")) {
        router.push(path);
      } else {
        externalTo(path);
      }
    },
    [externalTo, router]
  );

  return { externalTo, to };
};

export default useNavigation;
