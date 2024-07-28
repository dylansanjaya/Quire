import { LoginForm } from "@/components/auth/Login";

export default function LoginPage(){
  return (
    <div className="grid h-[70vh]">
      <div className="self-center">
        <LoginForm />
      </div>
    </div>
  )
}