import { IoConstruct } from "react-icons/io5";
import { AlertCircle } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"


export default function WorkOnProgress(){
return(
      <Alert variant="destructive">
      <IoConstruct className="text 6xl"/>
      <AlertTitle>Peringatan!</AlertTitle>
      <AlertDescription>
        Fitur ini sedang dikembangkan. Mohon maaf atas ketidaknyamanan anda,
      </AlertDescription>
    </Alert>
)
}