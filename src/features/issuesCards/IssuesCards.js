import { useSelector, useDispatch } from "react-redux"
import { addFavorite, removeFavorite } from "../favoriteIssue/favoriteSlice"

export const IssuesCards = ({issues}) => {
  const dispatch = useDispatch()

  const currentIssues = issues.map(issue => {
    return (
      <div key={issue.id} className="border-2 flex justify-between m-3 w-4/6">
        <p>{issue.title}</p>
        <p>{issue.number}</p>
        <button
          onClick={() => dispatch(addFavorite(issue))}

        >
          Pin Issue
        </button>
        <button
          onClick={() => dispatch(removeFavorite(issue))}
        >
          Unpin Issue
        </button>
      </div>
    )
  })

  return (
    <div  className="flex flex-col items-center">
      {currentIssues}
    </div>
  )
}