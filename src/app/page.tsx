import { LoginForm } from "@/components/login-form"
import { ThemeToggle } from "@/components/theme-toggle"

const Page = () => {
  return (
    <div className="mx-auto w-full max-w-2xl min-h-screen">
      <ThemeToggle />
      <LoginForm />
    </div>
  )
}
export default Page