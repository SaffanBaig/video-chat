import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JoinMeetingInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [isError, setisError] = useState(false);
  const handleJoinMeeting = () => {
    if (inputRef.current) {
      const code = inputRef.current.value;
      if (code) {
        navigate(`/meet/${code}`);
      } else {
        setisError(true);
      }
    }
  };
  return (
    <div className="flex flex-col">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <div>
          <Input
            ref={inputRef}
            className="py-5"
            type="text"
            placeholder="Enter room code"
          />
        </div>
        <div>
          <Button variant={"secondary"} onClick={handleJoinMeeting}>
            Join
          </Button>
        </div>
      </div>
      {isError && (
        <p className="text-xs text-destructive text-left px-2">
          Invalid meeting code
        </p>
      )}
    </div>
  );
}
