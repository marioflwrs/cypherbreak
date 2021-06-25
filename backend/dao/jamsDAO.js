let jams

export default class JamsDAO {
  static async injectDB(conn) {
    if (jams) {
      return
    }
    try {
      jams = await conn.db(process.env.JAMDETAILS_NS).collection("jams")
    } catch (e) {
      console.error (
        `Unable to establish a collection handle in restaurantsDAO: ${e}`,
      )
    }
  }

  static async getJams({
    filters = null,
    page = 0,
    jamsPerPage = 2,
  } = {}) {
    //MIGHT HAVE TO CHANGE THIS SEARCH QUERY TO ONE BAR TO SEARCH FOR ALL. (ALL IN ONE SEARCH BAR INSTEAD OF SEPERATION)
    let query
    if (filters) {
      if ("title" in filters) {
        query = { $text: { $search: filters["title"] } }
      } else if ("state" in filters) {
        query = {"state": {$eq: filters["state"] } }
      } else if ("zip" in filters) {
        query = { "zip": { $eq: filters["zip"] } }
      }
    }

    let cursor 

    try {
      cursor = await jams
      .find(query)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { jamsList: [], totalNumJams: 0 }

    }

    const displayCursor = cursor.limit(jamsPerPage).skip(jamsPerPage * page)

    try {
      const jamsList = await displayCursor.toArray()
      const totalNumJams = await jams.countDocuments(query)
      return {jamsList, totalNumJams}
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { jamsList: [], totalNumJams: 0 }
    }
  }
}