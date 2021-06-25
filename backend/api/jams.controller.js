import JamsDAO from "../dao/jamsDAO.js"

export default class JamsController {
  static async apiGetJams(req, res, next) {
    const jamsPerPage = req.query.jamsPerPage ? parseInt(req.query.jamsPerPage, 10) : 20
    const page = req.query.page ? parseInt(req.query.page, 10) : 0

    let filters = {}
    if (req.query.title) {
      filters.title = req.query.title
    } else if (req.query.zip) {
      filters.zip = req.query.zip
    } else if (req.query.state) {
      filters.state = req.query.state
    }

    const { jamsList, totalNumJams } = await JamsDAO.getJams ({
      filters,
      page,
      jamsPerPage,
    })

    let response = {
      jams: jamsList,
      page: page,
      filters: filters,
      entries_per_page: jamsPerPage,
      total_results: totalNumJams,
    }
    res.json(response)
  }
}