// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  let posts= require('../../cache/data').posts

  const results = posts.filter(
    ({ frontmatter: { title, excerpt, tag } }) =>
      title.toLowerCase().indexOf(req.query.q) != -1 ||
      excerpt.toLowerCase().indexOf(req.query.q) != -1 ||
      tag.toLowerCase().indexOf(req.query.q) != -1
  )
  res.status(200).json(results)
}
