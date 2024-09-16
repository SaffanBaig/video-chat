import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { generateRandomUsername } from "@/utils/helper";
import { useRef, useState } from "react";

type NameModalProps = {
  setName: (name: string) => void;
};
export default function NameModal({ setName }: NameModalProps) {
  const nameRef = useRef<HTMLInputElement>(null);
  const [isError, setIsError] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const handleNameSave = () => {
    const name = nameRef.current?.value;
    if (name) {
      setName(name);
      setIsError(false);
      localStorage.setItem("name", name);
      setName(name);
    } else {
      const randomName = generateRandomUsername();
      setName(randomName);
      setIsError(true);
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Edit Profile</Button> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Display Name</DialogTitle>
          <DialogDescription>
            Your name will be visible to other participants
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              className="col-span-3"
              name="name"
              ref={nameRef}
              required
            />
          </div>

          {isError && (
            <span className="text-destructive text-xs px-2">
              Name is required
            </span>
          )}
        </div>
        <DialogFooter>
          <Button className="w-full" onClick={handleNameSave}>
            Set Name
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
