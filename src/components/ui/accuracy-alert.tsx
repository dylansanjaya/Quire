import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function AccuracyAlert() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger type="reset">
          <IoIosInformationCircleOutline className="text-2xl text-primary" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Quire AI mungkin akan memberikan prediksi yang tidak 100% akurat.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
