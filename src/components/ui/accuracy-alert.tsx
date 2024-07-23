import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function AccuracyAlert() {
  return (
    <TooltipProvider delayDuration={100} >
      <Tooltip>
        <TooltipTrigger type={"button"}>
          <IoIosInformationCircleOutline className="text-2xl text-primary" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Quire AI memiliki kemungkinan untuk memberikan</p>
          <p> prediksi yang tidak 100% akurat.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
