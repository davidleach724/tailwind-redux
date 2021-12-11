export const IssuesCards = ({issues}) => {
  console.log(issues)
  const currentIssues = issues.items.map(issue => {
    return (
      <p>{issue.title}</p>
    )
  })

  return (
    <div>
      {currentIssues}
    </div>
  )
}