export const IssuesCards = ({issues}) => {

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