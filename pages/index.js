import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../context/Auth";
export default function Home() {
  const clientRouter = useRouter();
  const { userDetails } = useAuth();

  useEffect(() => {
    if (userDetails && userDetails.alias?.length) {
      clientRouter.push("/chat");
    } else {
      clientRouter.push("/login");
    }
  }, [userDetails]);

  return "";
}
