import { useSelector, useDispatch } from "react-redux"
import { addFavorite, removeFavorite } from "../favoriteIssue/favoriteSlice"

export const IssuesCards = ({issues}) => {
  const dispatch = useDispatch()

  const currentIssues = issues.map(issue => {
    return (
      <div key={issue.id}>
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
    <div>
      {console.log(useSelector((state) => state.favorite.value))}
      {currentIssues}
    </div>
  )
}