import React from "react";
import userPhoto from "../../assets/Avatar.png";
import { Ellipsis } from "lucide-react";

export default function UserProfile() {
  return (
    <div className="flex gap-2 items-center border-t">
      <div className="flex items-center gap-1 py-3">
        <div>
          <img src={userPhoto} alt="" className="min-w-10 min-h-10" />
        </div>
        <div>
          <p className="text-sm font-medium">Jeffery Benson</p>
          <p className="text-xs">Jeffbenson@gmail.com</p>
        </div>
      </div>
      <div>
        <button className="p-1 border rounded-lg ">
          <Ellipsis size={16} />
        </button>
      </div>
    </div>
  );
}
