import toast from "react-hot-toast"

export const successToast = (message) => {
  toast.success(message)
}

export const errorToast = (message) => {
  toast.error(message)
}

export const promiseUpdateToast = (myPromise) => {
  toast.promise(myPromise, {
    loading: "Updating data...",
    success: (data) => `${data.data.message}`,
    error: "Failed to update",
  })
}

export const promiseFetchToast = (myPromise) => {
  toast.promise(
    myPromise,
    {
      loading: "Fetching data...",
      error: "Failed to fetch data",
      success: "",
    },
    {
      success: {
        icon: null,
        duration: 0.1,
      },
    }
  )
}

export const promiseInsertToast = (myPromise) => {
  toast.promise(myPromise, {
    loading: "Adding data...",
    success: (data) => `${data.data.message}`,
    error: "Failed to add data",
  })
}

export const promiseDeleteToast = (myPromise) => {
  toast.promise(myPromise, {
    loading: "Deleting data...",
    success: (data) => `${data.data.message}`,
    error: "Failed to delete data",
  })
}
