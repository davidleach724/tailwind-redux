import { useSelector } from "react-redux"

export const CurrentAmount = () => {
  // const count = useSelector((state) => state.counter.value)

  return (
    <>
      <h1>Heeeey</h1>
      <p>{useSelector((state) => state.counter.value)}</p>
    </>
  )
}