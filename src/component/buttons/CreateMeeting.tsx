import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export default function CreateMeeting() {
  const navigate = useNavigate();
  const handleCreateMeeting = () => {
    const meetingId = uuidv4();
    navigate(`/meet/${meetingId}`);
  };
  return (
    <Button
      onClick={handleCreateMeeting}
      size={"lg"}
      className="flex items-center justify-center"
    >
      <Video className="mr-2 h-6 w-6" /> New Meeting
    </Button>
  );
}
