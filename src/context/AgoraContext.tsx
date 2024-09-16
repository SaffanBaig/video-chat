import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";
import { createContext } from "react";

const AgoraContext = createContext(null);

const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
export const AgoraProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AgoraContext.Provider value={null}>
      <AgoraRTCProvider client={client}>{children}</AgoraRTCProvider>
    </AgoraContext.Provider>
  );
};
