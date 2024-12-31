import { Toaster } from "react-hot-toast"

const ToastContainer = () => {
  return (
    <>
      <Toaster
        position="bottom-center"
        toastOptions={{
          success: {
            icon: "🚀",
            duration: 3000,
          },
          error: {
            icon: "❌",
            duration: 3000,
          },
        }}
      />
    </>
  )
}

export default ToastContainer
