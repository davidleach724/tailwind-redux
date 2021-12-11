export const IssuesCards = ({issues, status}) => {

  const currentIssues = issues.items.map(issue => {
    return (
      <>
        <p>{issue.title}</p>
        <p>{issue.number}</p>
      </>
    )
  })

  return (
    <div>
      {currentIssues}
    </div>
  )
}