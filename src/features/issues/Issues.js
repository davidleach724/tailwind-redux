import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchIssues } from "./issuesSlice"

export const Issues = () => {
  const issues = useSelector((state) => state.issues.value)
  const dispatch = useDispatch()

  useEffect = (() => {
    dispatch(fetchIssues())
  })

  return (
    <>
      {console.log(issues)}
    </>
  )
}