import { Loader } from "lucide-react";
import React from "react";

type LoaderProps = {
  type: "full" | "small";
};
export default function PageLoader() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Loader className="h-12 w-12 animate-spin" />
    </div>
  );
}
