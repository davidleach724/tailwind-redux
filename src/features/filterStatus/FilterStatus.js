import { useDispatch, useSelector } from "react-redux"
import { displayClosed, displayOpen } from "./filterStatusSlice"

export const FilterStatus = () => {
  const status = useSelector((state) => state.status.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
      <button
          aria-label="Show Open"
          onClick={() => dispatch(displayOpen())}
        >
          Show Open
        </button>
        <button
          aria-label="Show Closed"
          onClick={() => dispatch(displayClosed())}
        >
          Show Closed
        </button>
        <span>{status}</span>
      </div>
    </div>
  )
}