import Predictions from "@/components/job/Predict";

export default function AIPrediction({searchParams}: any){
  const prompt = searchParams.prompt || "";
  return(
    <Predictions prompt={prompt}/>
  )
}