import Basics from "@/component/Basics";
import {
  LocalUser,
  RemoteUser,
  useIsConnected,
  useJoin,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  usePublish,
  useRemoteUsers,
} from "agora-rtc-react";
import React, { useEffect, useState } from "react";
import {
  redirect,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

// import "./styles.css";
import NameModal from "@/component/NameModal";
import { Camera, Mic, PhoneOff } from "lucide-react";
import { Button } from "@/components/ui/button";

const APP_ID = import.meta.env.VITE_AGORA_APP_ID!;
export default function Meet() {
  const { id } = useParams();
  const [calling, setCalling] = useState(false);
  const isConnected = useIsConnected();
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [openModal, setOpenModal] = useState(false);

  // Local user
  const [micOn, setMic] = useState(false);
  const [cameraOn, setCamera] = useState(false);
  const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
  const { localCameraTrack } = useLocalCameraTrack(cameraOn);
  usePublish([localMicrophoneTrack, localCameraTrack]);
  const navigate = useNavigate();
  const remoteUsers = useRemoteUsers();

  useJoin(
    {
      appid: APP_ID,
      channel: id || "",
      token: null,
    },
    calling
  );
  useEffect(() => {
    if (id) {
      setCalling(true);
    }
  }, [id]);
  useEffect(() => {
    if (!name) {
      setOpenModal(true);
    }
  }, [name]);
  console.log("NAME ", name);
  const handleCallHangup = () => {
    localStorage.removeItem("name");
    setCalling((a) => !a);
    navigate("/landing");
  };

  return (
    <div className="h-screen py-4">
      {!name && <NameModal setName={setName} />}
      <div className="h-full w-full flex gap-4">
        <div className="w-[70%]">
          <div className="h-[80%] bg-black">
            <LocalUser
              audioTrack={localMicrophoneTrack}
              cameraOn={cameraOn}
              micOn={micOn}
              videoTrack={localCameraTrack}
              cover="https://www.agora.io/en/wp-content/uploads/2022/10/3d-spatial-audio-icon.svg"
            >
              <samp className="user-name">You</samp>
            </LocalUser>
          </div>
          {/* Controls */}
          <div className="h-[20%] flex items-center justify-center gap-4">
            <Button
              variant={micOn ? "default" : "destructive"}
              className="rounded-full h-12 w-12 cursor-pointer"
              onClick={() => setMic((a) => !a)}
            >
              <Mic />
            </Button>
            <Button
              variant={cameraOn ? "default" : "destructive"}
              className="rounded-full h-12 w-12 cursor-pointer"
              onClick={() => setCamera((a) => !a)}
            >
              <Camera />
              <i />
            </Button>
            <Button
              variant={"destructive"}
              className="rounded-full h-12 w-12 cursor-pointer"
              onClick={handleCallHangup}
            >
              <PhoneOff />
            </Button>
          </div>
        </div>

        <div className="w-[30%] space-y-4 overflow-auto">
          {remoteUsers.map((user) => (
            <div className="bg-black h-[200px]" key={user.uid}>
              <RemoteUser
                user={user}
                cover="https://www.agora.io/en/wp-content/uploads/2022/10/3d-spatial-audio-icon.svg"
              >
                <samp className="user-name">{user.uid}</samp>
              </RemoteUser>
              <div className="bg-black text-white py-2 w-full ">TEST</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
