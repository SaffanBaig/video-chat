import CreateMeeting from "@/component/buttons/CreateMeeting";
import JoinMeetingInput from "@/component/input/JoinMeetingInput";

export default function Landing() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-20">
      <div className="flex flex-col gap-4 justify-center">
        <h1 className="text-5xl font-semibold">Start or join video calls</h1>
        <p className="text-2xl font-semibold">
          Connect, collaborate or chat online
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <CreateMeeting />
        <JoinMeetingInput />
      </div>
    </div>
  );
}
